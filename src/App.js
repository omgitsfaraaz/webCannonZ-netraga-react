import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  WebDev,
  NodeJS,
  ReactJS,
  Django,
  Chatbots,
  MobileDev,
  Android,
  iOS,
  ReactNative,
  Flutter,
  MachineLearning,
  DeepLearning,
  ComputerVision,
  NLP,
  DataAnnotation,
  SocialMedia,
  SEO,
  ContentWriting,
} from "./views";
import { Navbar, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* ------------- TOP LEVEL ROUTES ------------- */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* ------------- SERVICES ROUTES ------------- */}
        {/* Web Development Routes */}
        <Route exact path="/service/web-development" component={WebDev} />
        <Route exact path="/service/nodejs" component={NodeJS} />
        <Route exact path="/service/reactjs" component={ReactJS} />
        <Route exact path="/service/django" component={Django} />
        <Route exact path="/service/chatbots" component={Chatbots} />
        {/* App Development Routes */}
        <Route exact path="/service/mobile-development" component={MobileDev} />
        <Route exact path="/service/android" component={Android} />
        <Route exact path="/service/ios" component={iOS} />
        <Route exact path="/service/react-native" component={ReactNative} />
        <Route exact path="/service/flutter" component={Flutter} />
        {/* Machine Learning Routes */}
        <Route
          exact
          path="/service/machine-learning"
          component={MachineLearning}
        />
        <Route exact path="/service/deep-learning" component={DeepLearning} />
        <Route
          exact
          path="/service/computer-vision"
          component={ComputerVision}
        />
        <Route exact path="/service/nlp" component={NLP} />
        <Route
          exact
          path="/service/data-annotation"
          component={DataAnnotation}
        />
        {/* Social Media Routes */}
        <Route exact path="/service/social-media" component={SocialMedia} />
        <Route exact path="/service/seo" component={SEO} />
        <Route
          exact
          path="/service/content-writing"
          component={ContentWriting}
        />
        {/* ------------- CLIENT ROUTES ------------- */}
        <Route exact path="/clients/our-clients" component={Contact} />
        <Route exact path="/clients/project-details" component={Contact} />
        {/* ------------- BLOG ROUTES ------------- */}
        <Route exact path="/blog/all-blogs" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
