import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/pagetwo">Go to PageTwo</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <Link to="/">Go to PageOne</Link>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
