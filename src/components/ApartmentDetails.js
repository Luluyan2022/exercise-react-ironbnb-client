import { Link, useParams } from "react-router-dom"

export default function ApartmentDetails(props){
    const {apartmentId} = useParams();
    console.log(props.apartmentsList)
    const datails = props.apartmentsList?.find(apartmentDetails => {
        console.log(apartmentDetails)
        // eslint-disable-next-line
        return apartmentDetails._id == apartmentId;
    });
    console.log(datails)

    const renderDetails = () => {
        return(
            <div>
                <h1>{datails.title} </h1>
                <img src={datails.img} alt={datails.name} /><br />                 
                pricePerDay: {datails.pricePerDay} <br />
                
            </div>
        )
    }
    return(
        <div>
            { datails && renderDetails() }

            <Link to="/apartments">Back</Link>
        </div>
    )
}