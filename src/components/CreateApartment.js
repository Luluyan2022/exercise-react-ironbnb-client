import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateApartment(props) {
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [pricePerDay, setPricePerDay] = useState("")

    //create new Appartment
    const createNewAppartment = (newAppatmentObj) => {
        axios
            .post(process.env.REACT_APP_API_URL + "/apartments", newAppatmentObj)
            .then(() => {              
                props.getInfoFromAPI()  //!!!!!!!!      
            })
            .then(() => console.log('Updating...'))
            .catch((e) => {
                console.log("error in creating the apartmentslist from API", e)
            })
    }
    const nagigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppatmentObj = {
            "title": title,
            "img": imgURL,
            "pricePerDay": pricePerDay
        }
        console.log(newAppatmentObj)
        createNewAppartment(newAppatmentObj);
        // props.getInfoFromAPI();  if put it here, we can not get the new Info, because create and get Info could be excuted at the same time
        setTitle("")
        setImgURL("")
        setPricePerDay("")
        nagigate("/apartments")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input
                        type="string"
                        name="title"
                        required={true}
                        placeholder="Enter the title"
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </label>
                <label>Img
                    <input
                        name="img"
                        type="string"
                        required={false}
                        placeholder="please upload pictures"
                        value={imgURL}
                        onChange={(event) => { setImgURL(event.target.value) }}
                    />
                </label>
                <label>PricePerDay
                    <input
                        name="pricePerDay"
                        type="number"
                        required={true}
                        placeholder="please tell us the Price per day"
                        value={pricePerDay}
                        onChange={(event) => { setPricePerDay(event.target.value) }}
                    />
                </label>
                <button >Create</button>
            </form>
        </div>
    )
}