import React from 'react';

function Dashboard() {
    return (
        <div className="container">
            <h2>Dashboard</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Upcoming Events</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Event 1</li>
                        <li className="list-group-item">Event 2</li>
                        <li className="list-group-item">Event 3</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>Recent Notifications</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Notification 1</li>
                        <li className="list-group-item">Notification 2</li>
                        <li className="list-group-item">Notification 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
