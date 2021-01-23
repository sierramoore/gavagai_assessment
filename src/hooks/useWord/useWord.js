import { useState } from 'react';
import axios from 'axios';
import {wordURL} from '../../api';

export const useWord = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const fetchWords = (languageChoice, word) => {
        setLoading(true)
        axios.get(wordURL(languageChoice, word))
            .then(response => {
                setResult(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
        });
    }
    return [loading, error, result, fetchWords];
}