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
            <div className="events-info-cntr">
                <h1 className="event-name">{event.name}</h1>
                <h3 className="event-date-location">
                    Saturday, {event.date} <br />
                    {event.venue}, {event.city}, {event.country}
                </h3>
                <p className="event-times">
                    Main Event @ {event.mainEventTime.toUpperCase()} <br />
                    Prelims @ {event.prelimsEventTime.toUpperCase()} <br />
                    Early Prelims @ {event.earlyPrelimsEventTime.toUpperCase()}{' '}
                </p>
                <br />
            </div>
            <div className="events-fights-cntr">
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
            </div>
        </section>
    );
};

export default EventComponent;
