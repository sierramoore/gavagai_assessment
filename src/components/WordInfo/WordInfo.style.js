import styled from 'styled-components';
import Raleway from 'typeface-raleway';

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
    margin-bottom: 2rem;

    @media(max-width: 550px){
        font-size: 2.8rem;
    }
`;
export const ListContainer = styled.div`
    width: 35rem;
    background-color: #fff;
    box-shadow: 0px 2px 4px #bababa;
    padding: 2rem 3rem;

    @media(max-width: 380px){
        width: 32rem;
    }
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
        text-transform:capitalize;
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
    &:first-letter {
        text-transform:capitalize;
    }
`;
