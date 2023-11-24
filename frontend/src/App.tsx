import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timetable from './pages/Timetable';
import EventSubmit from './pages/EventSubmit';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Timetable />} />
          <Route path="/event-submit" element={<EventSubmit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
