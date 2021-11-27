import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const CountriesPage = ({ user, navigate }) => {
  // Keeping track of all countries and filtered countries
  const [countries, setCountries] = useState('');
  const [filteredCountries, setFilteredCountries] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [priority, setPriority] = useState('');

  // Fetch countries from API
  useEffect(() => {
    let isMounted = true;
    async function fetchCountries() {
      try {
        let response = await fetch('https://devca.structura.ai/api/devtest/countries');
        response = await response.json();
        setCountries(response.result);
        setFilteredCountries(response.result);
      } catch (err) {
        setErrorMsg('Error Loading Countries');
      }
    }
    if (isMounted) {
      fetchCountries();
    }
    return function cleanup() {
      isMounted = false;
    };
  }, []);

  // Filter countries on any change to search text or priority fields
  useEffect(() => {
    if (searchCountry.length > 0 || priority) {
      const filteredCountries = countries.filter((country) => {
        // Filter flow - filters by text, filters by priority, filters by both combined
        if (searchCountry.length > 0 && typeof priority === 'number') {
          return (
            country.country_name.toLowerCase().includes(searchCountry.toLowerCase()) &&
            country.priority === priority
          );
        } else if (searchCountry.length > 0) {
          return country.country_name.toLowerCase().includes(searchCountry.toLowerCase());
        } else if (typeof priority === 'number') {
          return country.priority === priority;
        }
        return countries;
      });
      setFilteredCountries(filteredCountries);
    }
    if (searchCountry.length === 0 && !priority) {
      setFilteredCountries(countries);
    }
  }, [searchCountry, priority, countries]);

  // Handle search text
  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  // Handle priority filter
  const handlePriority = (e) => {
    if (e.target.value !== '') {
      const priority = Number(e.target.value);
      setPriority(priority);
    } else {
      setPriority('');
    }
  };

  return (
    <Layout>
      <div className='Page CountriesPage'>
        <div className='CountriesPage__container'>
          {filteredCountries && (
            <table className='CountriesPage__table'>
              <tbody>
                <tr>
                  <th>
                    <input
                      type='text'
                      onChange={handleChange}
                      value={searchCountry}
                      id='searchCountry'
                      placeholder='Country Name'
                      name='searchCountry'
                    />
                  </th>
                  <th>
                    <select onChange={handlePriority} name='priority' id='priority'>
                      <option value=''>Select Priority</option>
                      {countries.map((country) => (
                        <option key={country.country_id} value={country.priority}>
                          {country.priority}
                        </option>
                      ))}
                    </select>
                  </th>
                </tr>
              </tbody>
              {filteredCountries.map((country) => (
                <tbody key={country.country_id}>
                  <tr>
                    <td>{country.country_name}</td>
                    <td>{country.priority}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
          {errorMsg && (
            <div>
              <p>{errorMsg}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CountriesPage;
