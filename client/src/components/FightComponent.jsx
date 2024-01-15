import React, { useState, useEffect } from 'react';
import FighterComponent from './FighterComponent';

const FightComponent = ({ fight, fighters, onSelection, className }) => {
    const fighterA = fighters.find((f) => f.lastName === fight.fighterA);
    const fighterB = fighters.find((f) => f.lastName === fight.fighterB);

    if (!fighterA || !fighterB) {
        return <div>One or more fighters not found</div>;
    }

    const [winner, setWinner] = useState(null);

    const handleSelection = (fightOrder, fighterLastName) => {
        setWinner(fighterLastName);
        onSelection(fightOrder, fighterLastName);
    };
    //
    return (
        <div>
            <h3>
                Fight {fight.fightOrder}: {fighterA.firstName} "
                {fighterA.lastName}" vs. {fighterB.firstName} "
                {fighterB.lastName}"
            </h3>
            <div>
                {/* <FighterComponent
                    fighter={fighterA}
                    fightId={fight.fightOrder}
                    onSelection={onSelection}
                    className={className}
                /> */}
                <FighterComponent
                    key={fighterA.lastName}
                    fighter={fighterA}
                    onSelection={() =>
                        handleSelection(fight.fightOrder, fighterA.lastName)
                    }
                    className={
                        winner === fighterA.lastName ? 'winner' : 'non-winner'
                    }
                />
                <span>VS</span>
                <FighterComponent
                    key={fighterB.fighterId}
                    fighter={fighterB}
                    onSelection={() =>
                        handleSelection(fight.fightOrder, fighterB.lastName)
                    }
                    className={
                        winner === fighterB.lastName ? 'winner' : 'non-winner'
                    }
                />
                {/* <FighterComponent
                    fighter={fighterB}
                    fightId={fight.fightOrder}
                    onSelection={onSelection}
                    className={className}
                /> */}
            </div>
        </div>
    );
};

export default FightComponent;
