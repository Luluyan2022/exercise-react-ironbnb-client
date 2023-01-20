import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateApartment(props){
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [pricePerDay, setPricePerDay] = useState("")
   
    const nagigate =  useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppatmentObj = {
            "title" : title,
            "img" : imgURL,
            "pricePerDay" : pricePerDay
        }
        console.log(newAppatmentObj)
        props.createNewAppartment(newAppatmentObj);
        props.getInfoFromAPI();
        setTitle("")
        setImgURL("")
        setPricePerDay("")
        nagigate("/apartments")
    }   
     
    
    return(
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