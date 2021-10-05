import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h2 className="error-code">404</h2>
            <h1 className="error-massage">Page not found</h1>
        </div>
    );
};

export default NotFound;