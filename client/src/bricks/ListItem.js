import React from "react";
import Item from "./Item";

function ListItem(props) {
    function getListItem(recipes) {
        return recipes.map((recipe) => {
            return <Item key={recipe.id} recipe={recipe} />;
        });
    }

    return getListItem(props.recipes);
}

export default ListItem;

