import React from 'react';

function Profile() {
    return (
        <div className="container">
            <h2>Profile</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Personal Information</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" value="John Doe" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value="john.doe@example.com" readOnly />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Change Password</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="currentPassword" className="form-label">Current Password</label>
                            <input type="password" className="form-control" id="currentPassword" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newPassword" />
                        </div>
                        <button type="submit" className="btn btn-primary">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
