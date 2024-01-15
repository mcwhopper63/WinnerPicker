import FightComponent from './FightComponent';

const EventComponent = ({
    event,
    fights,
    fighters,
    onSelection,
    selections,
    className,
    isResultsPage,
}) => {
    const eventFights = fights.filter((f) => f.eventId === event.eventId);

    return (
        <section>
            <h2>
                {event.name} <br />
                {event.date} <br />
                {event.venue}, {event.city}, {event.country} <br />
                Main Event @ {event.mainEventTime.toUpperCase()} <br />
                Prelims @ {event.prelimsEventTime.toUpperCase()} <br />
                Early Prelims @ {event.earlyPrelimsEventTime.toUpperCase()}{' '}
                <br />
            </h2>
            {eventFights.map((fight) => (
                <FightComponent
                    key={fight.fightOrder}
                    fight={fight}
                    fighters={fighters}
                    onSelection={onSelection}
                    className={className}
                    isResultsPage={isResultsPage}
                />
            ))}
        </section>
    );
};

export default EventComponent;
