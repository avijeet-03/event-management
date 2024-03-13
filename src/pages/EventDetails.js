import React from 'react';

function EventDetails() {
    return (
        <div className="container">
            <h2>Event Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Event Name</h5>
                    <p className="card-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada velit nec eros tincidunt feugiat.</p>
                    <p className="card-text">Date: March 18, 2024</p>
                    <p className="card-text">Location: Event Location</p>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
