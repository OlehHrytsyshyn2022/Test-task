import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = country.toLowerCase();
    const filteredCountry = countriesData.filter((country) => {
      return country.name.toLowerCase().includes(search);
    });
    setSearchResults(filteredCountry);
  };

  const reset = () => {
    setCountry("");
    setSearchResults([]);
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h2 className="app-title">
        Which university in the country are you interested in?
      </h2>
      <input
        type="text"
        placeholder="Enter a country name"
        value={country}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="submit-button">
        Відправити
      </button>
      <button type="button" onClick={reset} className="reset-button">
        Скинути
      </button>
      <div className="container">
        <table className="table">
          <thead className="table-header">
            <tr className="table-row">
              <th className="table-cell">Назва країни</th>
              <th className="table-cell">Назва Університету</th>
              <th className="table-cell">Домени</th>
              <th className="table-cell">Веб-сторінки</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {searchResults.map((country) => (
              <tr className="table-row" key={country.alpha_two_code}>
                <td className="table-cell">{country.country}</td>
                <td className="table-cell">{country.name}</td>
                <td className="table-cell">{country.domains}</td>
                <td className="table-cell">
                  <a href={country.web_pages} className="web-link">
                    {country.web_pages}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default App;
