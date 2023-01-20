import ironhackersImg from "../assets/ironhackers.avif"
export default function HomePage(){
    return(
        <div>
            <h1>Welcome</h1>
            <img src={ironhackersImg} alt="ironhackers" />
        </div>
    )
}