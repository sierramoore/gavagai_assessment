import { useState } from 'react';
import axios from 'axios';
import {languageURL} from '../../api';

export const useLanguage = () => {
    const [languages, setLanguages] = useState([]);
    
    // not handling error or loading states here to save time. but did in word fetching
    const fetchLanguages = () => {
        axios.get(languageURL())
            .then(response => {
                setLanguages(response.data);
            });
    }
    return [languages, fetchLanguages];
}