import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  const handleSubmit = (e) => {
    e.preventDefalt();
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>blog</h1>

      <from onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Envoyer" />
      </from>
      <ul></ul>
    </div>
  );
};

export default Blog;
