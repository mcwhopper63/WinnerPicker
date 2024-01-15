import { useLocation } from 'react-router-dom';
import EventComponent from '../components/EventComponent';

const ResultsPage = ({ isResultsPage }) => {
    const location = useLocation();
    const { selections, events, fights, fighters, handleSelection } =
        location.state;

    return (
        <div>
            <header>
                These are your picks. Share with your friends and have them
                predict too.
            </header>
            <main>
                {events.map((event) => (
                    <EventComponent
                        key={event.eventId}
                        event={event}
                        fights={fights}
                        fighters={fighters}
                        onSelection={handleSelection}
                        selections={selections}
                        isResultsPage={isResultsPage}
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
