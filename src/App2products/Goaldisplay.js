// import { useState } from "react";
import Goalitem from "./Goalitem";
import './Goaldisplay.css';

function Goaldisplay(props){
    let text=props.text;
    function delet(id){
        props.del(id);
    }
    if(text.length===0){
        return(
            <p className="Goaldisplay">Goal is not found may be add one</p>
        )
    }
    return(
        <div className="Goaldisplay">
            {(text.map((user)=>
            <Goalitem  key={user.id} id={user.id} text={user.text} delete={delet}></Goalitem>))}
        </div>
    )
}
export default Goaldisplay;