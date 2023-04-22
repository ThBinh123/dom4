import { useState } from "react";
import Box from "./Box";
import BoxGame from "./BoxGame";
export default function App1(){
    const [show, setShow]=useState(true);
    const handle_click =()=>{
        alert("Em da gap anh ta")
    }
    const [board, setBoard]= useState(["X","X","","","","","","X","X"]);
    const handle_play =(index)=>{
        let newBoard =[...board];
        newBoard[index]="X";
        setBoard(newBoard);
    }
    return (
        <div>
            {show? <Box old={8} name={"Le Heo"} handle_click ={handle_click}/>:""}
            <button onClick={() => setShow(!show)}>Toggle mount</button>
            <div className="game">
                {board.map((value, key)=>{
                    return(
                        <BoxGame value ={
                            board[key]} handle_play={handle_play}index={key}/>
                        
                    )
                })}
            </div>
        </div>
    );
}
