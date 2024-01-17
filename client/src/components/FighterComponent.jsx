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
            <div className="fighter-btn">
                {fighter.firstName} {fighter.lastName}
                <br />
                {fighter.wins}-{fighter.losses}-{fighter.draws}
            </div>
        </button>
    );
};

export default FighterComponent;
