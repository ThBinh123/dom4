function Box(props){
    return(
        <div onClick={props.handle_click}>
            <h1>
            Toi la meo {props.name} va tuoi la {props.old}
            </h1>
        </div>
    )
}
export default Box;