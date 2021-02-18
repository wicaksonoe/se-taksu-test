import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(this.state);

        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center card-title">Create New Account</h5>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input  type="text" 
                                            className="form-control"
                                            id="username" 
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input  type="password" 
                                            className="form-control" 
                                            id="password" 
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}></input>
                                </div>
                                <button type="submit" className="col btn btn-primary">Register</button>
                                <a href="/" className="col btn btn-link text-center mt-4">Login</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}