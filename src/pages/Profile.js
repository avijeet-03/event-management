import React, { useState } from 'react';

function Profile() {
    const [formData, setFormData] = useState({
        fullName: 'Avijeet Nayak',
        username: 'avijeet_03',
        email: 'Avijeet.Nayak@wellsfargo.com',
        bio: 'Team Lilly',
        newPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            newPassword: value
        });
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log('Profile updated with data:', formData);
        // Add logic to update profile data, like making an API call
    };

    const handlePasswordChangeSubmit = (e) => {
        e.preventDefault();
        console.log('Password changed with data:', formData.newPassword);
        // Add logic to change password, like making an API call
        setFormData({ ...formData, newPassword: '' });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Profile</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUpdateProfile}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bio" className="form-label">Bio</label>
                                    <textarea className="form-control" id="bio" name="bio" rows="3" value={formData.bio} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Update Profile</button>
                            </form>
                            <hr />
                            <form onSubmit={handlePasswordChangeSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handlePasswordChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
