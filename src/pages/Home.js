import React from 'react';

function Homepage() {
    return (
        <div className="container">
            <h1>Hello</h1>
            <header className="p-3 mb-3 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                            <span className="fs-4">Event Management Platform</span>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                            <li><a href="/events" className="nav-link px-2 link-dark">Events</a></li>
                            <li><a href="/about" className="nav-link px-2 link-dark">About</a></li>
                            <li><a href="/contact" className="nav-link px-2 link-dark">Contact</a></li>
                        </ul>

                        <div className="text-end">
                            <a href="/login" className="btn btn-outline-primary me-2">Login</a>
                            <a href="/signup" className="btn btn-primary">Sign-up</a>
                        </div>
                    </div>
                </div>
            </header>

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
    );
}

export default Homepage;
