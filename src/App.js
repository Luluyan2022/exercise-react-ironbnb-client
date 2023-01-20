import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import ApartmentDetails from "./components/ApartmentDetails"
import CreateApartment from "./components/NavBar";
import ApartmentsList from "./components/ApartmentsList";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome</h1>
      <img src={ironhackersImg} alt="ironhackers" />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/apartments' element={<ApartmentsList />}/>
        <Route path='/apartments/create' element={<CreateApartment />}/>
        <Route path='/apartments/:apartmentId' element={<ApartmentDetails />}/>        
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
