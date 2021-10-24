import './App.css';
import Input from './Components/Input'
import EventPractice from './Components/EventPractice'
import Quiz from './Components/Quiz'
import IterationSample from './Components/IterationSample'
import RuseEffect from './Components/RuseEffect'

function App() {
  return (
    <div className="App">
    <h1>react-6week</h1>
    <Input />
    <hr />
    <EventPractice />
    <hr />
    <Quiz />
    <hr />
    <h1>동적배열</h1>
    <IterationSample />
    <h1>Hook</h1>
    <RuseEffect />
    </div>
  );
}

export default App;
