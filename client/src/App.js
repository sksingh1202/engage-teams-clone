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
        <Route path="/room/:roomID" component={Room} />
        <Route path="/chat" component={Chat} />
        <Route path="/create" component={CreateUser} />
        <Route path="/" component={CreateRoom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
