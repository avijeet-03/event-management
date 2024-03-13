import React from 'react';

function CreateEvent() {
    return (
        <div className="container">
            <h2>Create Event</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="eventName" className="form-label">Event Name</label>
                    <input type="text" className="form-control" id="eventName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDescription" className="form-label">Event Description</label>
                    <textarea className="form-control" id="eventDescription" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                    <input type="date" className="form-control" id="eventDate" />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventLocation" className="form-label">Event Location</label>
                    <input type="text" className="form-control" id="eventLocation" />
                </div>
                <button type="submit" className="btn btn-primary">Create Event</button>
            </form>
        </div>
    );
}

export default CreateEvent;
