import './App.css';
import { LandingPage, ResultsPage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/results"
                    element={<ResultsPage isResultsPage={true} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
