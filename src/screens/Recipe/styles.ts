import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${colors.white_blue};
`;

export const RecipeWrapper = styled.View`
    align-items: center;

`;

export const RecipeName = styled.Text`
    color: ${colors.heading};
    font-size: 22px;

    margin: 30px 0;
`
export const RecipeImage = styled.Image`
    width: 300px;
    height: 300px;
    border-radius: 999px;
`

export const RecipeInfoWrapper = styled.View`
    width: 98%;
    align-items: flex-start;
    margin-left: 15px;
    margin-top: 20px;
    padding-bottom: 10px;
`;
export const RecipeInfo = styled.Text`
    color: ${colors.text};
    font-size: 15px;
    margin-bottom: 4px;
`;

export const Bold = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;