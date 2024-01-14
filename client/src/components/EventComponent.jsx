import FightComponent from './FightComponent';

const EventComponent = ({ event, fights, fighters, onSelection }) => {
    const eventFights = fights.filter((f) => f.eventId === event.eventId);
    // console.log(`eventFights:`, eventFights);

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
                />
            ))}
        </section>
    );
};

export default EventComponent;
