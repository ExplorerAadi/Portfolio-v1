import React, { Component } from "react";
import Header from "./components/header/Header";
import Work from "./components/work/Work";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Work />
            </div>
        );
    }
}

export default App;
