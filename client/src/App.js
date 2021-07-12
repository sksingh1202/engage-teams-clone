// Built-in react
import React from "react";

// external packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// custom components
import CreateRoom from "./components/CreateRoom";
import Room from "./components/Room";
import Chat from "./components/Chat";
import CreateUser from "./components/UserTest";

function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/room/:roomID" exact component={Room} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/create" exact component={CreateUser} />
        <Route path="/" exact component={CreateRoom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
