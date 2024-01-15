import { useLocation } from 'react-router-dom';
import EventComponent from '../components/EventComponent';

const ResultsPage = ({ isResultsPage }) => {
    const location = useLocation();
    const { selections, events, fights, fighters, handleSelection } =
        location.state;

    return (
        <div>
            <header>
                <ul>
                    <li style={{ listStyleType: 'none' }}>
                        These are your picks{' '}
                    </li>
                    <li style={{ listStyleType: 'none' }}>
                        Screenshot and share for now, but I will be adding an
                        easier way to share your predictions.
                    </li>
                    <li style={{ listStyleType: 'none' }}>
                        Or just copy and paste the text at the bottom of the
                        page.
                    </li>
                </ul>
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
