export default function BoxGame(props){
    return(
        <div className="BoxGame" onClick={() => props.handle_play(props.index)}>
            {props.value}
        </div>
    )
}