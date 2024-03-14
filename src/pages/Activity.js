import React, { useState } from 'react';
import Header from '../components/Header';
import PastFuture from '../components/PastFuture';

function Activity() {
    const [activeTab, setActiveTab] = useState('registered');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header />
            <div className="container mt-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item" style={{ marginTop: '100px' }}>
                        <button
                            className={`nav-link ${activeTab === 'registered' ? 'active' : ''}`}
                            onClick={() => handleTabClick('registered')}
                        >
                            Registered
                        </button>
                    </li>
                    <li className="nav-item" style={{ marginTop: '100px' }} >
                        <button
                            className={`nav-link ${activeTab === 'organised' ? 'active' : ''}`}
                            onClick={() => handleTabClick('organised')}
                        >
                            Organised
                        </button>
                    </li>
                </ul>
                <div className="tab-content mt-3">
                    <div className={`tab-pane fade ${activeTab === 'registered' ? 'show active' : ''}`} id="registered">
                        <PastFuture />
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'organised' ? 'show active' : ''}`} id="organised">
                        <PastFuture />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Activity;
