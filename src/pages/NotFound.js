import React from 'react';

function NotFound() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card text-center">
                        <div className="card-body">
                            <h1 className="display-1">404</h1>
                            <h3 className="card-title">Page Not Found</h3>
                            <p className="card-text">The page you are looking for does not exist.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
