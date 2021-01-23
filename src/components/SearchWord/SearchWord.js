import { Container, Header, SearchContainer, Input, Submit, ListContainer, List, Li, ListHeader } from './SearchWord.style';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useWord } from '../../hooks/useWord/useWord';
import { useLanguage } from '../../hooks/useLanguage/useLanguage';
import { DropdownComponent } from '../Dropdown/Dropdown';
import '../Dropdown/Dropdown.css';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const SearchWord = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [languageChoice, setLanguageChoice] = useState("EN");
    const [languages, fetchLanguages] = useLanguage([]);
    const [loading, error, result, fetchWords] = useWord(searchQuery);

    useEffect(() => {
        fetchLanguages();
    }, [])

    return (
        <Container>
            <Header>Word Search</Header>
            <SearchContainer>
                <DropdownComponent options={languages} onChange={e => setLanguageChoice(e.value)} value={languageChoice} />
                <Input
                    placeholder="Search for similar words"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <Submit onClick={() => fetchWords(languageChoice, searchQuery)}>Search</Submit>
            </SearchContainer>

            {loading && <Loader type="Puff" color="#36cbfc" height={100} width={100} timeout={3000} />}
            {error && <h2 style={{ color: '#fc6868' }}>Sorry, a {error} occured</h2>}

            {
                !result ? <></> :
                    <ListContainer>
                        <List>
                            <ListHeader>Ends With Words</ListHeader>
                            {
                                !!result ?
                                    result.endsWithWords.map((word) => {
                                        return (
                                            // should have unique key
                                            <Li>
                                                <Link to={`/${languageChoice}/${word.word}`}>

                                                    {word.word}

                                                </Link>
                                            </Li>
                                        )
                                    }) : <></>
                            }
                        </List>
                    </ListContainer>
            }
        </Container>
    );
}