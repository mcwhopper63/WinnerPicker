const FighterComponent = ({ fighter, fightId, onSelection }) => {
    return (
        <button onClick={() => onSelection(fightId, fighter.lastName)}>
            {fighter.firstName} {fighter.lastName} - {fighter.division}
            <br />
            Wins: {fighter.wins} Draws: {fighter.draws} Losses: {fighter.losses}
        </button>
    );
};

export default FighterComponent;
