import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../containers/home";
import News from "../containers/news";
import GalleryItem from "../containers/galleryItem";

import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news/:id" component={News} />
          <Route exact path="/galleries/:id" component={GalleryItem} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
