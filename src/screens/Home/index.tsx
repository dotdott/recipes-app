import React, { useEffect, useState } from 'react';
import { 
    TouchableOpacity,
    ActivityIndicator, 
    FlatList, 
    View,
    Keyboard
} from 'react-native';
import colors from '../../styles/colors';

import Lottie from 'lottie-react-native';
import RecipeLoadingGif from '../../assets/recipe_loading.json';

import {
    Container,
    SearchRecipeTouch,
    SearchInput,
    SearchTextButton,
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

import { useNavigation } from '@react-navigation/core';
import Recipes from '../../components/Recipes';

export default function index() {
    const APP_ID = 'c942fdc4';
    const APP_KEY = 'c921ef44dd2268c4abf5fe46658c51c2';
    
    const navigation = useNavigation();

    const [recipes, setRecipes] = useState<RecipesData[]>([]);
    const [query, setQuery] = useState('chocolate');
    const [page, setPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${page}`;

    
    const getRecipes = async () => {        
        const response = await fetch(url);
        const data = await response.json();
        
        if(data.hits.length === 0){
            console.log('No data!!!');
        }
        
        setRecipes(data.hits);
        setIsLoading(false);
        setLoadingMore(false);
    }

    const handleSearchQueries = () => {
        setIsLoading(true);
        
        Keyboard.dismiss();

        setPage(10);

        getRecipes();
    }
    
    function handleSelectedRecipe(recipe: RecipesData){
        navigation.navigate("Recipe", { recipe })
    }

    function handleFetchMore(distance: number){
        if(distance < 1) return;

        setLoadingMore(true);
        setPage(prevValue => prevValue + 5);
        getRecipes();
    }

    useEffect(() => {
        setIsLoading(true);

        getRecipes();
    }, []);

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
                <View 
                    style={{ 
                        flex: 1,
                        alignItems: 'center',
                        marginTop: 70
                    }}
                >
                    <Lottie 
                        source={RecipeLoadingGif}
                        style={{width: 300, height: 300}}
                        resizeMode="contain" 
                        autoSize 
                        autoPlay 
                        loop 
                        />
                </View>
            ) : (
                <FlatList 
                    data={recipes}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }) => (
                        <Recipes 
                            recipe={item.recipe}
                            onPress={() => handleSelectedRecipe(item)}
                        />
                        )}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={.2}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore
                        ? <ActivityIndicator 
                            size="large" 
                            color={colors.border_bottom} 
                        />
                        : <></>
                    }
                    /> 
            )}            
        </Container>
    )
}
