import React from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GifImages = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <div>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {
                loading && <p className='animate__animated animate__flash'>Loading</p>
            }
            { <div className="card-grid">
                {
                    images.map(data => {
                        return <GifGridItem 
                                key={data.id}
                                {...data}
                            />
                    })
                }
            </div> }
        </div>
    )
}

export default GifImages