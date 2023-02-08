import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    const myStyle = {
        title:{
            color:'red',
            backgroundColor:'black'
        }
    }
    return (
      <>
        <Header />
        <h1 style={myStyle.title}>This is React App</h1>
        <h2>Developer Tool</h2>
        <Footer />
      </>
    );
  }
}
export default App;
