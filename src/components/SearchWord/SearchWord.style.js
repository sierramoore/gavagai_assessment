import styled from 'styled-components';
import {Raleway} from 'typeface-raleway';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% auto;
    min-height: 100vh;
    min-width: 100vw;
    font-family: Raleway, serif;
`;
export const Header = styled.h1`
    font-size: 3.2rem;
    letter-spacing: 2px;
    color: #4a4a4a;
    margin-bottom: 20px;

     @media(max-width: 550px){
        font-size: 2.8rem;
    }
`;
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 5%;
    box-shadow: 0px 2px 2px #bababa;
    min-height: 5rem;
    border-radius: .5rem; 

    &:focus {
        box-shadow: 0px 2px 4px #9e9e9e;
    }
    @media(max-width: 550px){
        width: 35rem;
    }
    @media(max-width: 380px){
        width: 32rem;
    }
`;
export const Input = styled.input`
    text-align: center;
    font-size: 1.6rem;
    width: 30rem;
    position: relative;
    font-family: inherit;
    letter-spacing: 1px;
    border: none;
    
    &:focus {
        outline: none;
        box-shadow: -1px 2px 4px #9e9e9e;
    }
    position: relative;
    @media(max-width: 380px){
        font-size: 1.2rem;
    }
`;
export const Submit = styled.button`
    font-family: Raleway, serif;
    background-color: #36cbfc;
    border: 1px solid #36cbfc;
    color: #fff;
    font-size: 1.6rem;
    outline: none;
    padding: 0 5px;
    &:active {
        border-style: inset;
        box-shadow: inset 0 0 10px #30b9e6;
    }

    ${Input}{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
    }
`;
export const ListContainer = styled.div`
    min-width: 35rem;
    background-color: #fff;
    box-shadow: 0px 2px 4px #bababa;
    padding: 2rem 3rem;
`;
export const List = styled.ul`
    list-style-type: none;
    list-style-position: inside;
    margin-bottom: 5%;
    & a {
       display: block; 
    }
}
`;
export const Li = styled.li`
    font-size: 1.8rem;
    padding: 1.2rem;
    width: 100%;
    
    &:first-letter {
        text-transform: capitalize;
    }
    &:hover {
        font-weight: 600;
        box-shadow: 0px 2px 4px #bababa;
    }
    &:nth-child(even) {
        background: #F7F7F7;  
    }
`;
export const ListHeader = styled.p`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #4a4a4a;
`;
