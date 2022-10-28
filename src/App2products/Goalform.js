import './Goalform.css';
import {useState} from "react"
function Goalform(props){
    var [bg,setbg]=useState("");
    const [texts,settexts]=useState("");
    function field(event){
        setbg("white");
        settexts(event.target.value)
    }
    function AddGoal(event){
        event.preventDefault();
        if(texts.length===0){
            setbg("red");
            }else{
                settexts("");
                var text=texts;
                props.goal(text);
            }
    }
    return(
        <div className="Goalform">
            <div className="goalcontainer">
                <form name="form">
                    <table>
                        <tbody>
                        <tr>
                        <label style={{color:bg}} htmlFor="text">The Goal</label>
                        </tr>
                        <tr>
                        <input type="text" id="text" value={texts} onChange={field} required style={{backgroundColor:bg}}></input>
                        </tr>
                        <tr>
                        <button className="goalbtn" type="submit" onClick={AddGoal}>Add Goal</button>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default Goalform;