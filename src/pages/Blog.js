import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>blog</h1>

      <from>
        <input type="text" placeholder="Nom" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Envoyer" />
      </from>
    </div>
  );
};

export default Blog;
