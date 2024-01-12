import React, { useState } from 'react';
import FightComponent from './FightComponent';
import eventData from '../data/events.json';

const EventComponent = () => {
    const [events, setEvents] = useState(eventData);
    // console.log(events);
    const {
        name,
        date,
        venue,
        city,
        state,
        country,
        mainEventTime,
        prelimsEventTime,
    } = events;

    console.log(name, date);
    return (
        <div>
            <div className="header"></div>
            <div className="fight-container">
                <div className="events">
                    <h1>{name}</h1>
                    <h2>{date}</h2>
                    <h3>
                        Main Event: {mainEventTime.toUpperCase()} <br />
                        Prelims: {prelimsEventTime.toUpperCase()}
                    </h3>
                    <h4>
                        {venue}, {city}, {state}, {country}
                    </h4>
                </div>
                <div className="fights">
                    <FightComponent />
                </div>
            </div>
        </div>
    );
};
export default EventComponent;
