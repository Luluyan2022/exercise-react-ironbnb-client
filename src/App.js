
import './App.css';
import ApartmentDetails from "./components/ApartmentDetails"
import CreateApartment from "./components/CreateApartment";
import ApartmentsList from "./components/ApartmentsList";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [apartmentsList, setApartmentsList] = useState([]);
 
  useEffect(() => {getInfoFromAPI()}, [])

  const getInfoFromAPI = () => {
      axios
        .get(process.env.REACT_APP_API_URL + "/apartments")
        .then((res) => {
          console.log(res.data)

          setApartmentsList(previousAppartment=>res.data);
        })
        .catch((e) => {
          console.log("error in getting the apartmentslist from API",e)
        })
  }
  //create new Appartment
  const createNewAppartment = (newAppatmentObj) => {    
    axios
      .post(process.env.REACT_APP_API_URL + "/apartments", newAppatmentObj)
      .then((res) => {
        console.log(res.data)        
      })
      .catch((e) => {
        console.log("error in creating the apartmentslist from API",e)
      })
}
  
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apartments' element={<ApartmentsList apartmentsList={apartmentsList} />} />
        <Route path='/apartments/create'
          element={<CreateApartment createNewAppartment={createNewAppartment} getInfoFromAPI={getInfoFromAPI}/>}
        />
        <Route path='/apartments/:apartmentId' element={<ApartmentDetails apartmentsList={apartmentsList}/>} />        
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
