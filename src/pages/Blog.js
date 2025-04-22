import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article"; // adapte le chemin si besoin

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDate = () => {
      axios
        .get("http://localhost:3004/articles")
        .then((res) => setBlogData(res.data))
        .catch((err) => console.error("Erreur axios :", err));
    };

    getDate(); // 👈 appelle la fonction ici
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChangeCapture={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veullez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;
