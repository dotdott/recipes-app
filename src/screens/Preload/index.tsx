import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container
} from './styles';

import Animation from '../../assets/preload_animation.json';

export default function index() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 1800)
    },)
    return (
        <Container>
           <Lottie 
            style={{width: 400, height: 400}} 
            resizeMode="contain" 
            autoSize 
            source={Animation} 
            autoPlay 
            loop 
        />
        </Container>
    )
}
