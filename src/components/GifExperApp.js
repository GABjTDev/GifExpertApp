import { useState } from "react";
import AddCat from "./AddCat";
import GifImages from "./GifImages";

const GifExperApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    return (
        <>
            <h2>GifExperApp</h2>
            <AddCat setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((c) => {
                        return <GifImages 
                            key={c} 
                            category={c}/>
                    })
                }
            </ol>
        </>
    )
}

export default GifExperApp
