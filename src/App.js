import './App.css';
import Footer from "./Components/Footer.js";
import {useState, useEffect} from "react";
import { client } from "./client.js"
import ReactDOM from 'react-dom'
import React from "react"

function App() {
  const [importedData, setImportedData] = useState({});
  const [hello, setHello] = useState('hello');
  /*
  function componentDidMount() {
    client.getEntries()
    .then((res) => setImportedData(res)) //res.items?
    .catch(console.log('error')) 
  }*/

  useEffect(() => {
    client.getEntries()
      .then((res) => {
        console.log(res) //save in Variable
        setImportedData(res.items[2])
      })
      .catch(console.log('error'))
  }, [])

  console.log('importedData', importedData);
  return (
    <div>
      <header>
        This is the Header
      </header>
      <section>
        This is the main part
      </section>
      <Footer importedData = {importedData} />
    </div>
  );
}

export default App;
