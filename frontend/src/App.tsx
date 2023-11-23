import Timetable from './components/Timetable';
import EventSubmit from './pages/EventSubmit';

const App = () => {
  return (
    <div>
      <h1>¡Mi Aplicación de Calendario!</h1>
      <EventSubmit />
      <Timetable />
    </div>
  );
};

export default App;
