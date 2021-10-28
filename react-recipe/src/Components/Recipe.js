// recipe-app/src/Components/Recipe.js

import Instructions from "./Instructions"

const Recipe = ({name,ingredients,steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredients) =>
                <div><li>{ingredients.name}{ingredients.amount}{ingredients.measurement}</li>
                </div>
                
                
            )}
        </ul>
        <Instructions title="조리절차입니다!" steps={steps}/>
    </section>


export default Recipe
