import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () =>{
    return(
        <div>
        <Header/>
        <h1>This is React App</h1>
        <h2>Developer Tool</h2>
        <Footer/>
        </div>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);