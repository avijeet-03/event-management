import React from 'react';

function Settings() {
    return (
        <div className="container">
            <h2>Settings</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Profile Settings</h3>
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
                            <label htmlFor="password" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Notification Settings</h3>
                    <form>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="emailNotifications" />
                            <label className="form-check-label" htmlFor="emailNotifications">Email Notifications</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="smsNotifications" />
                            <label className="form-check-label" htmlFor="smsNotifications">SMS Notifications</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;
