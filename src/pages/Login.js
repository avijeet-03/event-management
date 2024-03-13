import React from 'react';

function Login() {
    return (
        <div className="container">
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username or Email</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-3">Don't have an account? <a href="/registration">Register here</a></p>
        </div>
    );
}

export default Login;
