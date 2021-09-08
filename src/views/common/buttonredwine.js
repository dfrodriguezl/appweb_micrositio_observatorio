import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonRedWine = () => {
    const MyButtonRedWine = styled.button`
    padding: 1vh;
    border-radius: 2vh;
    background-color: #821a3f;
    color: white;
    font-weight: bold;
    font-family: 'Work sans';
    font-size: 2vh;
    text-transform: capitalize;
    transition:all 0.8s ease-out;
    cursor: pointer;
    &:hover{
        background-color: ${"#db709380"};
    }
    `;
    return (
    <MyButtonRedWine>Acerca de</MyButtonRedWine>)
}

export default ButtonRedWine

