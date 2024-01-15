const FighterComponent = ({ fighter, fightId, onSelection, className }) => {
    return (
        <button
            className={className}
            onClick={() => onSelection(fightId, fighter.lastName)}
        >
            {fighter.firstName} {fighter.lastName} - {fighter.division} lbs
            <br />
            Wins: {fighter.wins} Draws: {fighter.draws} Losses: {fighter.losses}
        </button>
    );
};

export default FighterComponent;
