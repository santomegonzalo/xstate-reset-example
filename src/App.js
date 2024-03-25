import './App.css';
import { MyMachineContext } from './machine.state';
import { CurrentState } from './CurrentState';

function App() {
  return (
    <MyMachineContext.Provider>
      <div className="App">
        <CurrentState />
      </div>
    </MyMachineContext.Provider>
  );
}

export default App;
