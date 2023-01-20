import axios from "axios";
import { useEffect, useState } from "react"

export default function ApartmentsList(){
    const [apartmentsList, setApartmentsList] = useState([]);

    useEffect(() => {
     getInfoFromAPI();
    }, [])

    const getInfoFromAPI = () => {
        axios
          .get(process.env.REACT_APP_API_URL + "/apartments")
          .then((res) => {
            console.log(res.data)
            setApartmentsList(res.data);
          })
          .catch((e) => {
            console.log("error in getting the apartmentslist from API",e)
          })
    }

    return(
        <div>
            <h1>List of apartments</h1>
            {apartmentsList === null
                ? "loading..."
                : apartmentsList.map((apartment, index) => {
                    return (
                        <div key={index}>
                            <img src={apartment.img} alt= "apartment's img" />
                            <h5>{apartment.title}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}