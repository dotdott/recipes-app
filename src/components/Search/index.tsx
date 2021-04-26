import React from 'react'

import {
    Container,
    SearchInput,
    SearchTouchable
} from './styles';

import SearchIcon from '../../assets/pears.svg';

export default function index() {
    return (
        <Container>
            <SearchInput placeholder="Search Recipes" />
            <SearchTouchable>

            </SearchTouchable>
        </Container>
    )
}
