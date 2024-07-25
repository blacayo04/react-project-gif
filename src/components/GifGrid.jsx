//import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/GetGifs";


export const Gifgrid =  ({category}) => {

    const { images, isLoading } = useFetchGifs (category);

    //console.log( {images,isLoading} );

    /* Esto esta comentado porque lo pase a un hook personalizado, en useFetchGifs
    const [images, setImages] = useState([]);
    
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    
    useEffect( () =>{
        getImages();

    }, [])
 */

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2> Cargando... </h2> )
            }

            <div className="card-grid">
                
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }//Esto es para mandar a exparsir todas sus propiedades de image sin necesidad de mandar a llamar todas una por una
                        
                        />
                    ))

                }

            </div>


        </>
    )
}
