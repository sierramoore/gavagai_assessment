import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { WordInfo } from './components/WordInfo/WordInfo';
import { SearchWord } from './components/SearchWord/SearchWord';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:languageChoice/:word">
          <WordInfo />
        </Route>
        
        <Route path="/">
          <SearchWord />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;