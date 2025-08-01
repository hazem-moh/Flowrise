import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LeadMagnetPage from './pages/LeadMagnetPage';
import ThankYouPage from './pages/ThankYouPage';
import BookingPage from './pages/BookingPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/lead-magnet" element={<LeadMagnetPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/book-call" element={<BookingPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
