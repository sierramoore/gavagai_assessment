const destinationUrl = `https://api.gavagai.se/v3`;
const apiKey = '12c1199d4b43706e6a6e8394b518b7f8';

export const wordURL = (languageChoice, word) => `${destinationUrl}/lexicon/${languageChoice}/${word}?apiKey=${apiKey}`;
export const languageURL = () => `${destinationUrl}/languages?apiKey=${apiKey}`;
