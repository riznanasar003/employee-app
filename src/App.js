import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmp from './Components/AddEmp';
import Delete from './Components/Delete';
import Search from './Components/Search';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
