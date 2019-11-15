import React from 'react';
import './teachers.component.scss';
export default class TeachersComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="form_block">
                    <div className="card_block">
                        <h3 className="card-title">Add Teacher</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter Teacher Name " />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Email:</label>
                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Phone Number:</label>
                                    <input type="text" className="form-control" placeholder="Enter Phone Number " />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Class Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter Class Name " />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Subject:</label>
                                    <input type="text" className="form-control" placeholder="Enter Subject" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Address:</label>
                                    <input type="text" className="form-control" placeholder="Enter Address" />
                                </div>
                            </div>
                        </div>
                        <div className="btn_block">
                            <button type="button" className="margin-btn">Add</button>
                            <button type="button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}