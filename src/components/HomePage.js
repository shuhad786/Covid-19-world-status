import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { displayCountries } from '../redux/cards/allCardSlice';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(displayCountries());
  });

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <div className="mainContainer">
        {countries.filter((searchCountry) => searchCountry.continent.toLowerCase()
          .includes(search.toLowerCase())
          || searchCountry.continent.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div className="card" key={item.continent}>
              <h3 className="continentTitle">{item.continent}</h3>
              <p className="update">
                Updated: &nbsp;
                {item.updated}
              </p>
              <Link state={item} to="/DetailsPage">
                <IoEllipsisHorizontal className="fowardArrow" aria-label="to details" />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Countries;
