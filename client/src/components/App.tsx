import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
        </Router>
      </div>
    );
  }
}

export default App;
