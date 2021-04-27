import { useRoute } from '@react-navigation/core';
import React from 'react'
import Lottie from 'lottie-react-native';

import {
    Container,

    RecipeWrapper,
    RecipeName,
    RecipeImage,

    RecipeInfoWrapper,
    RecipeInfo,
    Bold,
} from './styles';

interface RouteParams {
    recipe:{
        recipe : {
            label: string;
            image: string;
            calories: string;
            dishType: string;
            ingredients: IngredientsData[];
        }
    }
}

type IngredientsData = {
    text: string;
}

import goBackAnimation from '../../assets/arrow_left.json';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function Recipe() {
    const route = useRoute();
    const { recipe } = route.params as RouteParams;
    const dish = recipe.recipe;

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <TouchableOpacity onPress={handleGoBack}>
                <Lottie 
                    source={goBackAnimation}
                    style={{ width: 40, height: 40, marginLeft: 10, marginVertical: 10 }}
                    autoPlay
                    autoSize
                    loop
                    resizeMode="contain"
                />
            </TouchableOpacity>


            <ScrollView>
                <RecipeWrapper>
                    <RecipeName>{dish.label}</RecipeName>
                    <RecipeImage source={{uri: dish.image}} />

                    <RecipeInfoWrapper>
                        <RecipeInfo>
                            <Bold>Type: </Bold>
                            {dish.dishType}
                        </RecipeInfo>
                        <RecipeInfo>
                            <Bold>Calories: </Bold>
                                { Number(dish.calories).toFixed(2) }
                            <Bold> kg</Bold>
                        </RecipeInfo>

                        <Bold>
                            Ingredients:
                        </Bold>


                        {dish.ingredients.map((item, index) => (
                            <RecipeInfo key={index}>
                                {item.text}
                            </RecipeInfo>
                        ))}
                    </RecipeInfoWrapper>
                </RecipeWrapper>
            </ScrollView>
        </Container>
    )
}
