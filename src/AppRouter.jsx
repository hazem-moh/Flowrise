import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LeadMagnetPage from './pages/LeadMagnetPage';
import ThankYouPage from './pages/ThankYouPage';
import WhatToExpectPage from './pages/BookingPage';
import CallBookedPage from './pages/CallBookedPage';
import ScrollToTop from './components/ScrollToTop';

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/blueprint" element={<LeadMagnetPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/book-call" element={<WhatToExpectPage />} />
                <Route path="/call-booked" element={<CallBookedPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
