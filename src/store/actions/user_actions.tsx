import { userConstants } from './user_constants';
import { userService } from '../../_services/user.service';
import { history } from '../../utils/history';
import { alertActions } from './action';
export const userActions = {
    login,
    logout,
    register
};
function login(username: string, password: string) {
    return (dispatch: any) => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
function register(user: any) {
    return (dispatch: any) => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success('success'));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(user: any) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user: any) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.REGISTER_FAILURE, error } }
}