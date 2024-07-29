import React, { useEffect, useState } from 'react';
import './Page.css';

const Page = ({ category }) => {
  const API_KEY = 'd6e3280ff3d54691a5a0dcb0b8b60d83';
  const url = 'https://newsapi.org/v2/everything?q=';
  const [data, setData] = useState([]);

  const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const result = await res.json();
    setData(result.articles);
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="page">
      {data.map((article, index) => (
        <div key={index} className="card">
          <img src={article.urlToImage} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span>{article.source.name} - {new Date(article.publishedAt).toLocaleString()}</span>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default Page;
