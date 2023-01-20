import { Link } from "react-router-dom"


export default function ApartmentsList(props){
   

    return(
        <div>
            <h1>List of apartments</h1>
            {props.apartmentsList === null
                ? "loading..."
                : props.apartmentsList.map((apartment, index) => {
                    return (
                        <div key={index}>
                            <h5>{apartment.title}</h5>
                            {apartment.img
                                ? <img src={apartment.img} alt="apartment's img" />
                                : "we have no pictures"}
                            <Link to={"/apartments/"+ apartment._id}>More Details</Link>

                        </div>
                    )
                })
            }
        </div>
    )
}