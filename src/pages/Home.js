import React from 'react';
import Header from '../components/Header';

function Homepage() {
    return (
        <>
            <Header isAdmin={true} />
            <div className="container">

                <main>
                    <div className="bg-light p-5 rounded">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Welcome to our Event Management Platform</h1>
                            <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada velit nec eros tincidunt feugiat. Cras vel velit in lacus aliquet varius. Nullam id felis ultrices, tincidunt libero nec, dignissim mi. Aenean sit amet ex a massa gravida dictum non eget metus. Praesent eget varius ligula.</p>
                            <a href="/signup" className="btn btn-primary btn-lg" role="button">Get Started</a>
                        </div>
                    </div>
                </main>

                <footer className="pt-3 mt-4 text-muted border-top">
                    <div className="container">
                        <p className="float-end"><a href="/">Back to top</a></p>
                        <p>&copy; 2024 Event Management Platform, Inc. &middot; <a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a></p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Homepage;
