import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link"; 

function Home() {
  return (
    <Layout
      title="Home"
      description="Welcome to the Docusaurus documentation site"
    >
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">
            Bienvenu sur le Docusaurus de la baleine Docker
          </h1>
          <p className="hero__subtitle">
            Documentation sous format .md cours de docker
          </p>
        </div>
      </header>
      <main>
        <div className="container">
          <h2>Getting Started</h2>
          <button>
            <Link to="/docs/intro">Get Started</Link> 
          </button>
        </div>
      </main>
    </Layout>
  );
}

export default Home;