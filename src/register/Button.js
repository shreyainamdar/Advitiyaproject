import { PropTypes } from "mobx-react"

const Button = ({color,text,onClick,textclr }) => {

    
    return( <button 
        onClick={onClick}
         style ={{backgroundColor:color,color:textclr}}
    className='btn'>
        {text}
        </button>
    )
   
}
Button.defaultProps={
    color:'blue',
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,

}
export default Button
