import React from 'react';
import Welcome from './Welcome';
import HotelInfo from './HotelInfo';

export default function Main() {
    return (
        <div>
            <main id="wrapper">
                <Welcome />
                <HotelInfo />
            </main>
        </div>
    )
}
