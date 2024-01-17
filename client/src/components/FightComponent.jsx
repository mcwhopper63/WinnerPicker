import React, { useState, useEffect } from 'react';
import FighterComponent from './FighterComponent';

const FightComponent = ({
    fight,
    fighters,
    onSelection,
    isResultsPage,
    selections,
}) => {
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
        <div className="fight-row">
            <h3 className="">
                Fight {fight.fightOrder}: {fighterA.firstName}{' '}
                {fighterA.lastName} vs. {fighterB.firstName} {fighterB.lastName}
            </h3>
            <div className="fighter-component-cntr">
                <FighterComponent
                    key={fighterA.lastName}
                    fighter={fighterA}
                    selections={selections}
                    onSelection={() =>
                        handleSelection(fight.fightOrder, fighterA.lastName)
                    }
                    className={winner === fighterA.lastName ? 'winner' : ''}
                    isResultsPage={isResultsPage}
                />
                <div className="vs-cntr">
                    <span>{fighterA.division} lbs</span>
                    <br />
                    <span className="vs">vs</span>
                </div>
                <FighterComponent
                    key={fighterB.fighterId}
                    fighter={fighterB}
                    selections={selections}
                    onSelection={() =>
                        handleSelection(fight.fightOrder, fighterB.lastName)
                    }
                    className={winner === fighterB.lastName ? 'winner' : ''}
                    isResultsPage={isResultsPage}
                />
            </div>
        </div>
    );
};

export default FightComponent;
