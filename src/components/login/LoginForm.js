import React from 'react';
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';
import * as Yup from 'yup';
import AuthService from '../../services/AuthService';

const override = css(`
    position:absolute;
    top:42%;
    left:42%;
`);
const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
    password: Yup.string().required('Password is Required')
});

class LoginForm extends React.Component {

    initialValues = {
        email: '',
        password: ''
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    state = {
        loading: false
    }

    handleSubmit = (values, { setSubmitting }) => {
        this.setState({
            loading: true
        });
        AuthService.login(values).then((response) => {
            this.setState({
                loading: false
            });
            setSubmitting(false);
            AuthService.setData(response.data.token,response.data.user);
            this.props.history.replace('/dashboard');
        }, function (err) {
            setSubmitting(false);
        });
    }

    getInputClass = (errors, touched, name) => {
        if (errors[name] && touched[name]) {
            return "form-control form-control-lg is-invalid";
        } else {
            return "form-control form-control-lg";
        }
    }

    render() {
        return (
            <div className="container-scroller">

                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper d-flex align-items-center auth">
                            <div className="row w-100">
                                <div className="col-lg-4 mx-auto">
                                    <div className="auth-form-light text-left p-5">
                                        <div className='sweet-loading' style={this.state.loading ? { display: "block" } : { display: "none" }}>
                                            <ClipLoader
                                                className={override}
                                                sizeUnit={"px"}
                                                size={80}
                                                color={'#123abc'}
                                                loading={this.state.loading}
                                            />
                                        </div>
                                        <h2>Login</h2>
                                        <Formik initialValues={this.initialValues} validationSchema={SignupSchema} onSubmit={this.handleSubmit} className="pt-3">
                                            {({ isSubmitting, errors, touched }) => (
                                                <Form className="login-form">
                                                    <div className="form-group">
                                                        <Field type="email" name="email" className={this.getInputClass(errors, touched, 'email')} placeholder="Email" />
                                                        {errors.email && touched.email && <div className="error mt-2 text-danger">{errors.email}</div>}
                                                    </div>
                                                    <div className="form-group">
                                                        <Field type="password" name="password" className={this.getInputClass(errors, touched, 'password')} placeholder="Password" />
                                                        {errors.password && touched.password && <div className="error mt-2 text-danger">{errors.password}</div>}
                                                    </div>
                                                    <div className="mt-3">
                                                        <button type="submit" disabled={isSubmitting} className={"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"} >SIGN IN</button>
                                                    </div>
                                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                                        <div className="form-check">
                                                            <label className="form-check-label text-muted">
                                                                <input type="checkbox" className="form-check-input" />
                                                                Keep me signed in
                                                        <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <Link to="#" className="auth-link text-black">Forgot password?</Link>
                                                    </div>
                                                    <div className="mb-2">
                                                        <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                                                            <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                                                </button>
                                                    </div>
                                                    <div className="text-center mt-4 font-weight-light">
                                                        Don't have an account? <Link to="#" className="text-primary">Create</Link>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const LoginFormWithRouter = withRouter(LoginForm);

export default LoginFormWithRouter;