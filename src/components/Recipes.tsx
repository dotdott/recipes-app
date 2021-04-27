import React from 'react'
import styled from 'styled-components/native';
import colors from '../styles/colors';

export const RecipeWrapper = styled.View`
    flex-direction: row;
    margin: 15px 20px 0 20px;

    padding-bottom: 15px;
    border-bottom-width: 2px;
    border-color: ${colors.border_bottom};
`;
export const RecipeTouch = styled.TouchableOpacity``;


export const RecipeDetails = styled.View`
    flex: 1;
`;
export const RecipeName = styled.Text`
    margin-bottom: 5px;
    color: ${colors.heading};
    font-size: 20px;
`
export const RecipeImage = styled.Image`
    width: 100px;
    height: 100px;

    border-radius: 50px;
    margin-right: 15px;
`

export const RecipeDishType = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    color: ${colors.text};
`;
export const RecipeCalories = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    color: ${colors.text};
`;

export const BoldText = styled.Text`
    font-weight: bold;
`;

interface RecipesData {
    recipe : {
        label: string;
        image: string;
        calories: string;
        dishType: string;
        ingredients: {
            text: string;
        }
    }

    onPress?: ((pointerInside: boolean) => void) | undefined;
}

export default function Recipes({recipe, ...rest} : RecipesData ) {
    return (
    <RecipeWrapper>
        <RecipeTouch {...rest}>
            <RecipeImage source={{uri: recipe.image}} />
        </RecipeTouch>

        <RecipeDetails>
            <RecipeName>{recipe.label}</RecipeName>
            <RecipeDishType>{recipe.dishType}</RecipeDishType>
            <RecipeCalories>
                { Number(recipe.calories).toFixed(2) }  
                <BoldText> kg </BoldText>
            </RecipeCalories>
        </RecipeDetails>
    </RecipeWrapper>
    )
}
