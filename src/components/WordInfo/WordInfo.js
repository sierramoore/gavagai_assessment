import { Container, Header, ListContainer, List, Li, ListHeader } from './WordInfo.style';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useWord } from '../../hooks/useWord/useWord';

export const WordInfo = (props) => {
    const { languageChoice, word } = useParams();
    const [loading, error, result, fetchWords] = useWord(undefined);

    useEffect(() => {
        fetchWords(languageChoice, word);
    }, [])

    return (
        <Container>
            <Header>Word Information</Header>
            {loading}
            {error}
            {
                !result ? <></> :
                    <ListContainer>
                        <List>
                            <ListHeader>{word}:</ListHeader>
                            {
                                //getting only a few properties from WordInformation 
                                !!result ?
                                    Object.keys(result.wordInformation).slice(1, 4).map((key) => {
                                        //regex to space out camelCase key
                                        // should have unique key
                                        return <Li key={key}>{key.replace(/([A-Z]+)/g, ' $1')}: {JSON.stringify(result.wordInformation[key])}</Li>
                                    }) : <></>
                            }
                        </List>
                    </ListContainer>
            }
        </Container>
    )
}