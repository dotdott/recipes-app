import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';

import {
    Container,
    SearchRecipeTouch,
    SearchInput,
    SearchTextButton,

    RecipeWrapper,
    RecipeTouch,

    RecipeImage, 

    RecipeDetails,
    RecipeName,

    RecipeDishType,
    RecipeCalories,
    BoldText,
} from './styles';

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
}

export default function index() {
    const APP_ID = 'c942fdc4';
    const APP_KEY = 'c921ef44dd2268c4abf5fe46658c51c2';
    
    const [recipes, setRecipes] = useState<RecipesData[]>([]);
    const [query, setQuery] = useState('chocolate');
    const [isLoading, setIsLoading] = useState(true);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const handleSearchQueries = () => {
        getRecipes();
    }

    const getRecipes = async () => {
        setIsLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        setRecipes(data.hits);
        setIsLoading(false);
    }



    useEffect(() => {
        getRecipes();
    }, []);


    const Recipe = recipes.map(({ recipe }, index) => (
            <RecipeWrapper key={index}>
                <RecipeTouch>
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
    ))

    return (
        <Container>
            <SearchRecipeTouch>
                <SearchInput 
                    placeholder="Search for a recipe! 😋"
                    value={query}
                    onChangeText={e => setQuery(e)}
                />
                <TouchableOpacity onPress={() => handleSearchQueries()}>
                    <SearchTextButton>
                        😋
                    </SearchTextButton>
                </TouchableOpacity>
            </SearchRecipeTouch>
            

            {isLoading ? (
                <ActivityIndicator size="large" color={colors.border_bottom} />
            ) : (
                <ScrollView>
                    {Recipe}
                </ScrollView>
            )}
            
        </Container>
    )
}
