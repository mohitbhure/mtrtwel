import React from 'react';
import PageTemplate from '../layouts/PageTemplate';
export default class Dashboard extends React.Component {
    render() {
        return (
            <PageTemplate>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="font-weight-light mb-4">18833</h1>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div>
                                            <h4 className="font-weight-normal">Customers</h4>
                                            <p className="text-muted mb-0 font-weight-light">800 New customers</p>
                                        </div>
                                        <i className="mdi mdi-account-multiple icon-lg text-primary ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="font-weight-light mb-4">5757</h1>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div>
                                            <h4 className="font-weight-normal">Orders</h4>
                                            <p className="text-muted mb-0 font-weight-light">1600 Daily orders</p>
                                        </div>
                                        <i className="mdi mdi-chart-pie icon-lg text-danger ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="font-weight-light mb-4">28534</h1>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div>
                                            <h4 className="font-weight-normal">Delivery</h4>
                                            <p className="text-muted mb-0 font-weight-light">760 New items</p>
                                        </div>
                                        <i className="mdi mdi-car icon-lg text-info ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="font-weight-light mb-4">59450</h1>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div>
                                            <h4 className="font-weight-normal">Verified</h4>
                                            <p className="text-muted mb-0 font-weight-light">540 Verified users</p>
                                        </div>
                                        <i className="mdi mdi-verified icon-lg text-success ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTemplate>
        );
    }
}