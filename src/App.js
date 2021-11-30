import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'
import Footer from "./components/Footer"

function App() {

  const [articles,setArticles] = useState([]);
  useEffect(() => {
    client.getEntries()
    .then((response) => {
      console.log(response)
      setArticles(response.items)
    })
    .catch(console.error)
  })

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span>Hike Blog </span>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={articles} />
          </div>
        </main>
        <Footer content={articles}/>
      </div>
    </div>
  );
}

export default App;
