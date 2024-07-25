import { useState } from 'react';
import { Addcategory, Gifgrid } from "./components";



export const GifExpertApp = () => {
    
    const [categories,setCategories] = useState(['Batman']);
    

    //Tarea de agregar una nueva categoria
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        
        //Primera forma de hacerlo
        setCategories([newCategory, ...categories])
        
        //setCategories( cat => [...cat, 'valorant']);

    }
    
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>


            {/* input */}
            <Addcategory 
                // setCategories={setCategories}
                onNewCategory={ value => onAddCategory(value)}
            />

            {/* List item */}


                { categories.map( (category) => (
                        <Gifgrid 
                            key={ category } 
                            category={ category }/>
                    )) 


                }




        
        </>
        
    )
}
