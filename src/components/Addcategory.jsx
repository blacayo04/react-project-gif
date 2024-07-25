import { useState } from "react"


export const Addcategory = ({onNewCategory}) => {


  const [ InputValue, setInputValue] = useState('')

  const OnInputChange = ({target}) =>{
      //console.log(event.target.value)
      setInputValue(event.target.value);
  } 

  const onSubmit = (event) =>{
    event.preventDefault();
    //console.log(InputValue);
    if(InputValue.trim().length<= 1) return;

    // setCategories( categories => [InputValue,...categories]);
    onNewCategory( InputValue.trim() );
    setInputValue('');
    
  }

    return (
      <form onSubmit={ (event) => onSubmit(event)}>   
          <input 
            type="text" 
            placeholder={'Buscar gifs'}
            value={ InputValue }
            onChange = { (event) => OnInputChange(event)}
            />

        </form>

    )


  }
