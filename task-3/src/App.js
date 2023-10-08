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
      <h2>Which university in the country are you interested in?</h2>
      <input
        type="text"
        placeholder="Enter a country name"
        value={country}
        onChange={handleChange}
      />
      <button type="submit">Відправити</button>
      <button type="button" onClick={reset}>
        Скинути
      </button>
      <div id="resultTableContainer">
        <table>
          <thead>
            <tr>
              <th>Назва країни</th>
              <th>Назва Університету</th>
              <th>Домени</th>
              <th>Веб-сторінки</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((country) => (
              <tr key={country.alpha_two_code}>
                <td>{country.country}</td>
                <td>{country.name}</td>
                <td>{country.domains}</td>
                <td>
                  <a href={country.web_pages}>{country.web_pages}</a>
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
