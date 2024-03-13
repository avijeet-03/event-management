import React from 'react';

function EditEvent() {
    return (
        <div className="container">
            <h2>Edit Event</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="eventName" className="form-label">Event Name</label>
                    <input type="text" className="form-control" id="eventName" defaultValue="Event Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDescription" className="form-label">Event Description</label>
                    <textarea className="form-control" id="eventDescription" rows="3">Event Description</textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                    <input type="date" className="form-control" id="eventDate" defaultValue="2024-03-18" />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventLocation" className="form-label">Event Location</label>
                    <input type="text" className="form-control" id="eventLocation" defaultValue="Event Location" />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
}

export default EditEvent;
