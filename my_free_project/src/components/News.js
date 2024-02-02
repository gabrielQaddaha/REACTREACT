import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/dashboard.css";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=a2fd5bf65eb34c89b9cfe147a5c52bfc"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("ERROR : ", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      
      {articles.length > 0 && (
        <a href={articles[0].url}>
          <img src={articles[0].urlToImage} alt="News" className="newsimage" />
        </a>
      )}
      <div>
        
      </div>
    </div>
  );
};

export default NewsFeed;
