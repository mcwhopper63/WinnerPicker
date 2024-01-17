import React, { useState, useEffect } from 'react';
import eventData from '../data/events.json';
import fightsData from '../data/fights.json';
import fightersData from '../data/fighters.json';
import EventComponent from '../components/EventComponent';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [fights, setFights] = useState([]);
    const [fighters, setFighters] = useState([]);
    const [selections, setSelections] = useState({});

    useEffect(() => {
        // Simulate fetching data
        setEvents([eventData]); // Assuming eventData is an object, not an array
        setFights(fightsData);
        setFighters(fightersData);
    }, []);

    const handleSelection = (fightOrder, fighterLastName) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [fightOrder]: fighterLastName,
        }));
    };

    const handleSubmit = () => {
        // Here, you would typically send the selections to the backend.
        // For simulation purposes, we'll just log the selections to the console
        console.log('User selections:', selections);

        // After submitting, we'll navigate to the Results Page
        // You'll need to setup and use the navigate function from React Router
        navigate('/results', {
            state: { selections, events, fights, fighters },
        });
    };

    return (
        <div>
            <header>
                <p className="intro-blurb">
                    👊🏻 Channel your inner Mystic Mac and pick who you think will
                    win. Share it with other fight fans.
                </p>
            </header>
            <main>
                <div className="event-parent-cntr">
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

                    <button
                        className={`generate-btn ${
                            Object.keys(selections).length === fights.length
                                ? 'complete'
                                : 'incomplete'
                        }`}
                        onClick={handleSubmit}
                    >
                        Generate Results
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
