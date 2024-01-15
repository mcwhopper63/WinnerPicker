const FighterComponent = ({
    fighter,
    fightId,
    onSelection,
    className,
    isResultsPage,
    selections,
}) => {
    const fighterClassName = `${className} ${
        isResultsPage && Object.values(selections).includes(fighter.lastName)
            ? 'chosen-one'
            : ''
    }`;

    return (
        <button
            className={fighterClassName}
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
