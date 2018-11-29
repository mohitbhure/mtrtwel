import React from 'react';
import {Link} from 'react-router-dom';
import TopMenu from './TopMenu';


export default class PageTemplate extends React.Component {
    render() {
        return (
            <div className="container-scroller">
                <TopMenu></TopMenu>
                <div className="container-fluid page-body-wrapper">
                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            {this.props.children}
                            <footer className="footer">
                                <div className="w-100 clearfix">
                                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018 <Link to="#" >Urbanui</Link>. All rights reserved.</span>
                                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="mdi mdi-heart-outline text-danger"></i></span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}