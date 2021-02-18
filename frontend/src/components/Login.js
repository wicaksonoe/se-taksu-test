import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
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

        const loginData = {
            'username': this.state.username,
            'password': this.state.password,
        }

        axios.post('http://localhost:4000/login', loginData)
            .then(res => alert(res.data))
            .catch(err => alert('Failed login'));

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
                            <h5 className="text-center card-title">Login</h5>
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
                                <button type="submit" className="col btn btn-primary">Login</button>
                                <a href="/register" className="col btn btn-link text-center mt-4">Create an account</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}