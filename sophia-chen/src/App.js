import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";

// import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ServicesSections from "./components/services";
import CalloutSection from "./components/callout";
import EngineeringPortfolioSection from "./components/engineeringPortfolio";
import DesignPortfolioSection from "./components/designPortfolio";
import CallToAction from "./components/callToAction";
import FooterSection from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <EngineeringPortfolioSection />
        <DesignPortfolioSection />
        <FooterSection />
      </div>
    );
  }
}

export default App;
