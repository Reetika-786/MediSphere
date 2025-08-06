import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
// import Appointments from './pages/Appointments';
// import Doctors from './pages/Doctors';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctors" element={<Doctors />} /> */}
          {/* Optional fallback route */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
