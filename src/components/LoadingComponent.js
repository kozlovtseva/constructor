import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Loading = () => {
    return(
        <div className="col-12">
            <FontAwesomeIcon icon="spinner" size="lg" spin />
            <p>Loading . . .</p>
        </div>
    );
};