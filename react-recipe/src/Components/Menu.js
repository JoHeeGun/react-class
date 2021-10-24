// recipe-app/src/Components/Menu.js
import React from 'react';
import '.././stylesheets/Menu.css';
import Recipe from './Recipe';

const Menu = ({recipes,title}) => {
    return (
            <article>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="recipes">
                    { 
                      recipes.map((recipe,i) =>
                        <Recipe key={i} name={recipe.name} 
                                ingredients={recipe.ingredients} 
                                steps={recipe.steps}
                        />)
                    }
                </div>
            </article>
    )
};

export default Menu