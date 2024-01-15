import { useLocation } from 'react-router-dom';
import EventComponent from '../components/EventComponent';

const ResultsPage = () => {
    const location = useLocation();
    const { selections, events, fights, fighters, handleSelection } =
        location.state;
    // console.log(selections, events, fights, fighters);
    console.log('selections from results', selections);

    return (
        <div>
            <header>Your results here:</header>
            <main>
                {events.map((event) => (
                    <EventComponent
                        key={event.eventId}
                        event={event}
                        fights={fights}
                        fighters={fighters}
                        onSelection={handleSelection}
                        selections={selections}
                    />
                ))}
            </main>
            <div>
                {Object.entries(selections).map(([key, value]) => (
                    <div key={key}>{`${key}: ${value}`}</div>
                ))}
            </div>
        </div>
    );
};
export default ResultsPage;
