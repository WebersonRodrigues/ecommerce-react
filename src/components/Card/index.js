import "./index.css";
import bunequinho from "../../assets/img/male-01.JPG"

function Card(){

    return ( // JSX
        <div className="card">
          <img  src={bunequinho} alt=""/>
        </div>
    );
}

export default Card;