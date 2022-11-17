import React from "react";
import SearchForm from "./SearchForm";
import Movies from "./Movies";


function Home() {
  return (
    <div>
      <SearchForm />
      <Movies />
      <footer className="footer">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </footer>
    </div>
  );
}

export default Home;
