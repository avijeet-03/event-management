import React, { useState, useEffect } from 'react';
import Header from '../components/Header';


function PastFuture() {
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [organisedEvents, setOrganisedEvents] = useState([]);

    // Example API call to fetch event data
    useEffect(() => {
        // Make API call to fetch event data
        // For demonstration purpose, using mock data
        const mockPastData = [
            { id: 1, title: 'Registered Event 1', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Event 1' },
            { id: 2, title: 'Registered Event 2', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Event 2' },
            { id: 3, title: 'Registered Event 3', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Event 3' },
            { id: 4, title: 'Registered Event 4', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Event 4' },
            { id: 5, title: 'Registered Event 5', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Event 5' },
            { id: 6, title: 'Registered Event 6', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Event 6' },
            { id: 7, title: 'Registered Event 7', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Registered Event 7' },
            { id: 8, title: 'Registered Event 8', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Registered Event 8' },
            // Add more event objects as needed
        ];

        const mockFutureData = [
            { id: 9, title: 'Organised Event 1', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 1' },
            { id: 10, title: 'Organised Event 2', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 2' },
            { id: 11, title: 'Organised Event 3', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 3' },
            { id: 12, title: 'Organised Event 4', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 4' },
            { id: 13, title: 'Organised Event 5', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 5' },
            { id: 14, title: 'Organised Event 6', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 6' },
            { id: 15, title: 'Organised Event 7', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 7' },
            { id: 16, title: 'Organised Event 8', imageUrl: 'https://via.placeholder.com/150', description: 'Description for Organised Event 8' },
            // Add more event objects as needed
        ];

        setRegisteredEvents(mockPastData);
        setOrganisedEvents(mockFutureData);
    }, []);

    return (
        <div>
            <Header />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <h3>PREVIOUS</h3>
                        <div className="overflow-auto" style={{ maxHeight: '60vh', minWidth: '300px', marginTop: '20px' }}>
                            {registeredEvents.map(event => (
                                <div key={event.id} className="d-flex mb-3">
                                    <img src={event.imageUrl} alt={event.title} className="me-3" style={{ width: '150px', height: 'auto' }} />
                                    <div>
                                        <h5>{event.title}</h5>
                                        <p>{event.description}</p>
                                        <a href={`events/${event.id}`} className="btn btn-danger">View Event</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>UPCOMING</h3>
                        <div className="overflow-auto" style={{ maxHeight: '60vh', minWidth: '300px', marginTop: '20px' }}>
                            {organisedEvents.map(event => (
                                <div key={event.id} className="d-flex mb-3">
                                    <img src={event.imageUrl} alt={event.title} className="me-3" style={{ width: '150px', height: 'auto' }} />
                                    <div>
                                        <h5>{event.title}</h5>
                                        <p>{event.description}</p>
                                        <a href={`events/${event.id}`} className="btn btn-danger">View Event</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PastFuture;
