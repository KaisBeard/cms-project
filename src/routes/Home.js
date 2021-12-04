import { useEffect, useState } from "react";
import { client } from "../client";
import Posts from "../components/Posts";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="wrapper">{<Posts posts={articles} />}</div>
    </div>
  );
}

export default Home;
