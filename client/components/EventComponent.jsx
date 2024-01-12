import React, { useState } from 'react';
import FightComponent from './FightComponent';

const event = {
    name: 'UFC Fight Night: Ankalaev vs. Walker 2',
    date: 'Jan 13, 2024',
    venue: 'UFC Apex',
    city: 'Las Vegas',
    state: 'NV',
    country: 'USA',
    mainEventTime: '7pm est',
    prelimsEventTime: '4pm est',
};

const fight = {
    event: 'UFC Fight Night: Ankalaev vs. Walker 2',
    weightDivision: 205,
};

const fighterA = {
    name: 'Magomed Ankalaev',
    division: 'Light Heavyweight',
    wins: 18,
    draws: 1,
    losses: 1,
};
const fighterB = {
    name: 'Johnny Walker',
    division: 'Light Heavyweight',
    wins: 21,
    draws: 0,
    losses: 7,
};

const EventComponent = () => {
    // console.log('Event:', event);
    console.log('Fight:', fight);
    // console.log('Fighter A:', fighterA);
    // console.log('Fighter B:', fighterB);
    return (
        <div>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>
                {event.venue}, {event.city}, {event.state}, {event.country}
            </p>
            <p>
                Main Event starts at {event.mainEventTime} <br />
                Prelims start at {event.prelimsEventTime}
            </p>
            <FightComponent
                fight={fight}
                fighterA={fighterA}
                fighterB={fighterB}
            />
        </div>
    );
};

export default EventComponent;
