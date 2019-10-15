import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import dogs from "./dogs";
import NavBar from "./components/NavBar";
import Dog from "./components/Dog";
import DogList from "./components/DogList";

function App() {
  return (
    <div className="App bg-blue-100 h-full">
      <NavBar dogs={dogs} />
      <Switch>
        <Route
          exact
          path="/dogs"
          render={routeProps => <DogList {...routeProps} dogs={dogs} />}
        />
        <Route
          exact
          path="/dogs/:name"
          render={routeProps => (
            <Dog
              {...routeProps}
              dog={dogs.find(dog => dog.src === routeProps.match.params.name)}
            />
          )}
        />
        <Redirect to="/dogs"/>
      </Switch>
    </div>
  );
}

export default App;
