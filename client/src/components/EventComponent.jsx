import FightComponent from './FightComponent';

const EventComponent = ({ event, fights, fighters, onSelection }) => {
    const eventFights = fights.filter((f) => f.event === event.name);

    return (
        <section>
            <h2>
                {event.name} - {event.date}
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
