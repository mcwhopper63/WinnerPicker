import FighterComponent from './FighterComponent';

const FightComponent = ({ fight, fighters, onSelection }) => {
    const fighterA = fighters.find((f) => f.lastName === fight.fighterA);
    const fighterB = fighters.find((f) => f.lastName === fight.fighterB);

    return (
        <div>
            <h3>
                Fight {fight.fightOrder}: {fighterA.firstName} "
                {fighterA.lastName}" vs. {fighterB.firstName} "
                {fighterB.lastName}"
            </h3>
            <div>
                <FighterComponent
                    fighter={fighterA}
                    fightId={fight.fightOrder}
                    onSelection={onSelection}
                />
                <span>VS</span>
                <FighterComponent
                    fighter={fighterB}
                    fightId={fight.fightOrder}
                    onSelection={onSelection}
                />
            </div>
        </div>
    );
};

export default FightComponent;
