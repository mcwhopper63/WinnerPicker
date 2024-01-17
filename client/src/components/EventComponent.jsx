import FightComponent from './FightComponent';

const EventComponent = ({
    event,
    fights,
    fighters,
    onSelection,
    selections,
    isResultsPage,
}) => {
    const eventFights = fights.filter((f) => f.eventId === event.eventId);

    return (
        <section>
            <div className="fight-container">
                <h1>{event.name}</h1>
                <h3>
                    Saturday, {event.date} <br />
                    {event.venue}, {event.city}, {event.country}
                </h3>
                <h3></h3>
                <p>
                    Main Event @ {event.mainEventTime.toUpperCase()} <br />
                    Prelims @ {event.prelimsEventTime.toUpperCase()} <br />
                    Early Prelims @ {event.earlyPrelimsEventTime.toUpperCase()}{' '}
                </p>
                <br />
            </div>
            {eventFights.map((fight) => (
                <FightComponent
                    key={fight.fightOrder}
                    fight={fight}
                    fighters={fighters}
                    onSelection={onSelection}
                    isResultsPage={isResultsPage}
                    selections={selections}
                />
            ))}
        </section>
    );
};

export default EventComponent;
