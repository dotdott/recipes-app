import React from 'react'

import {
    Container,
    RecipeName,
    RecipeImage,
} from './styles';

export default function index() {
    return (
        <Container>
            <RecipeName>Grilled Butterflied Chicken Recipe</RecipeName>
            <RecipeImage source={{uri: 'https://www.edamam.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg'}} />
            
            <RecipeName>Grilled Butterflied Chicken Recipe</RecipeName>
            <RecipeImage source={{uri: 'https://www.edamam.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg'}} />
        </Container>
    )
}
