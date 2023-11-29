import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timetable from './pages/Timetable';
import { Provider } from 'react-redux';
import store from './store';
import EventSubmit from './pages/EventSubmit';
import EventDetails from './pages/EventDetails';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Timetable />} />
          <Route path="/event-submit" element={<EventSubmit />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
