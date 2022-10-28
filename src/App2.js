import { useState } from "react";
import Goaldisplay from "./App2products/Goaldisplay";
import Goalform from "./App2products/Goalform";

function App2(){
    const[texts,settexts]=useState([]);
    function goal(goal){
        var text=[{text:goal,id:Math.random().toString()}];
        settexts((user1)=>{
            return[ ...text, ...user1]
        })
    }
    function cancel(goalId){
        settexts(texts=>{
            const del=texts.filter(text => text.id !== goalId)
            return del;
        })
    }
    return(
        <div className="App2">
            <Goalform goal={goal}></Goalform>
            <Goaldisplay text={texts} del={cancel} ></Goaldisplay>
        </div>
    )
}
export default App2;