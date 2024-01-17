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
                <div className="fighter-name">
                    {fighter.firstName} {fighter.lastName}
                </div>
                <div className="fighter-record">
                    {fighter.wins}-{fighter.losses}-{fighter.draws}
                </div>
            </div>
        </button>
    );
};

export default FighterComponent;
