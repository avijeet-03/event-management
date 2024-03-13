import React from 'react';
import { Link } from 'react-router-dom';

function EventListing() {
    return (
        <div className="container">
            <h2>Event Listing</h2>
            <div className="list-group">
                <Link to="/event/1" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Event 1</h5>
                        <small>March 18, 2024</small>
                    </div>
                    <p className="mb-1">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small>Location: Event Location</small>
                </Link>
                <Link to="/event/2" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Event 2</h5>
                        <small>March 19, 2024</small>
                    </div>
                    <p className="mb-1">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small>Location: Event Location</small>
                </Link>
                <Link to="/event/3" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Event 3</h5>
                        <small>March 20, 2024</small>
                    </div>
                    <p className="mb-1">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small>Location: Event Location</small>
                </Link>
            </div>
        </div>
    );
}

export default EventListing;
