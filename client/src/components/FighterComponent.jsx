const FighterComponent = ({
    fighter,
    fightId,
    onSelection,
    className,
    isResultsPage,
}) => {
    console.log(isResultsPage); // Add this line

    return (
        <button
            className={className}
            disabled={isResultsPage}
            onClick={() => onSelection(fightId, fighter.lastName)}
        >
            {fighter.firstName} {fighter.lastName} - {fighter.division} lbs
            <br />
            Wins: {fighter.wins} Draws: {fighter.draws} Losses: {fighter.losses}
        </button>
    );
};

export default FighterComponent;
