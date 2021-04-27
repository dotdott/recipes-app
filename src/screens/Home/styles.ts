import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${colors.white_blue};
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
