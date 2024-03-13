import React from 'react';

function Registration() {
    return (
        <div className="container">
            <h2>Registration</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p className="mt-3">Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
}

export default Registration;
