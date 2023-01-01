import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EventList from './Pages/EventList';
import { createContext } from 'react';
import Data from './Components/Data';
import EditEvent from './Pages/EditEvent';

export const ContextR = createContext();
 

function App() {
  const {inputs, setInputs, eventArray, setEventArray} = Data();
  const values = {inputs, setInputs, eventArray, setEventArray};

  return (
    <ContextR.Provider value={values}>
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path="/EventList" element={<EventList></EventList>}></Route>
          <Route path='/EditEvent/:name' element={<EditEvent></EditEvent>}></Route>

        </Routes>
    </div>
    </ContextR.Provider>
  );
}

export default App;
