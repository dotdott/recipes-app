import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${colors.white_beige};
`;

export const SearchRecipeTouch = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
export const SearchInput = styled.TextInput`
    height: 40px;
    margin: 25px 20px;
    padding: 5px 10px;

    flex: 1;

    border-width: 1px;
    border-color: ${colors.border_bottom};
`;
export const SearchTextButton = styled.Text`
    margin-right: 20px;
`;

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