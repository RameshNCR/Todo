// import { useState } from 'react';
import './Goalitem.css';
function Goalitem(props){
    var text=props.text;
    function dell(){
        props.delete(props.id);
    }
    return(
        <div className="Goalitem">
            <div className="GoalContainer">
                <p className='text'>{text}</p>
                <button className='goalbtn1' onClick={dell}>delete</button>
            </div>
        </div>
    )
}
export default Goalitem;