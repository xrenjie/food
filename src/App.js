import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Itemlist from "./components/Itemlist";
import React, { useEffect, useState } from "react";
import * as Realm from "realm-web";
import Searchbar from "./components/Searchbar";
import ItemDataService from "./services/items";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const app = new Realm.App({ id: "" });
    const credentials = Realm.Credentials.apiKey("");
    async function getItems() {
      const user = await app.logIn(credentials);
      setItems(await user.functions.getItems());
      setFilteredItems(await user.functions.getItems());
    }
    getItems();
  }, []);

  const submitSuggestion = (newSuggestion) => {
    async function submit(newSuggestion) {
      ItemDataService.newSuggestion(newSuggestion);
    }
    submit(newSuggestion);
  };

  const searchByName = (query) => {
    if (query === "") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => {
          if (item.name.toLowerCase().includes(query.toLowerCase()))
            return item;
          else return null;
        })
      );
    }
  };

  return (
    <div className="App">
      <CustomNavbar handleSuggest={submitSuggestion} className="navbar" />
      <Router>
        <div className="Main">
          <Searchbar searchByName={searchByName} />
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <Itemlist
                  className="sustainableList"
                  {...props}
                  items={filteredItems}
                  h
                />
              )}
            />
            {/* <Route
            path="/alt"
            render={(props) => (
              <AltList
                className="alternativeList"
                {...props}
                items={altFilteredItems}
              />
            )}
          /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
