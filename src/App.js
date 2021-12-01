import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'
import Footer from './components/Footer'
import Header from './components/Header/Header';

function App() {

  const [articles,setArticles] = useState([]);
  useEffect(() => {
    client.getEntries()
    .then((response) => {
      console.log(response)
      setArticles(response.items)
    })
    .catch(console.error)
  },[])

  return (
    <div className="App">
      <Header/>
      <div className="container">
        
        <main>
          <div className="wrapper">
            <Posts posts={articles} />
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
