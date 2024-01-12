import React from 'react';

const FighterComponent = ({ fighter }) => {
    //   console.log('Fight:', fight);
    return (
        <div>
            <h4>{fighter.name}</h4>
            <p>{fighter.division}</p>
            {/* other fighter details */}
        </div>
    );
};

export default FighterComponent;
