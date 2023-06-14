import { useEffect } from "react";
import mole from "./mole.png";

const Mole = (props) => {
    useEffect(() => {
      let randSeconds = Math.ceil(Math.random() * 10000);
      let timer = setTimeout(() => {
        props.toggle(false);
      }, randSeconds);
      return () => clearTimeout(timer);
    });
  
    return (
      <div>
        <img
          style={{ width: "30vw" }}
          src={Mole}
          onClick={props.handleClick}
          alt="mole"
        />
      </div>
    );
  };
  
  export default mole;