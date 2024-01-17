import { useLocation } from 'react-router-dom';
import EventComponent from '../components/EventComponent';

const ResultsPage = ({ isResultsPage }) => {
    const location = useLocation();
    const { selections, events, fights, fighters, handleSelection } =
        location.state;

    return (
        <div>
            <header>
                <p className="results-blurb">
                    👊🏻 These are your predictions. Share it with your friends.{' '}
                    <br />
                    👊🏻 Isn't this convenient? Pls come back every Saturday to
                    create your picks!
                </p>
            </header>
            <main>
                <div className="results-txt-cntr">
                    {Object.entries(selections).map(([key, value]) => (
                        <div key={key}>{`${key}: ${value}`}</div>
                    ))}
                </div>
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
        </div>
    );
};
export default ResultsPage;
