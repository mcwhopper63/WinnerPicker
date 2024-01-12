import React, { useState } from 'react';
import FighterComponent from './FighterComponent';

const FightComponent = ({ fight, fighterA, fighterB }) => {
    // const { event, weightDivision } = fight;
    // console.log('Fight:', fight.event);
    // console.log('Fighter A:', fighterA);
    // console.log('Fighter B:', fighterB);

    if (!fight) {
        return null; // or return a loading spinner, or some placeholder content
    }

    return (
        <div>
            <h3>{fight}</h3>
            <p>{fight}</p>
            <FighterComponent fighter={fighterA} />
            vs
            <FighterComponent fighter={fighterB} />
        </div>
    );
};
export default FightComponent;
