function Input(props){
    return(
        <>
        <div class="input_prop">
            <p>{props.title}</p>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input