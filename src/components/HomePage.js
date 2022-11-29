import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayCountries } from '../redux/cards/allCardSlice';
// import { displayBrewery } from '../redux/cards/cardSlice';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const [type, setType] = useState();
  const types = ['micro', 'large', 'brewpub', 'closed'];
  const dispatch = useDispatch();
  const updateVal = useRef();

  useEffect(() => {
    dispatch(displayCountries());
  });

  return (
    <>
      <select value={type} onChange={(e) => setType(e.target.value)} ref={updateVal} aria-label="Back Arrow">
        {types.map((input) => (
          <option value={input} key={input} aria-label="Back Arrow">{input}</option>
        ))}
      </select>
      <div className="mainContainer">
        {countries.map((item) => (
          <div className="card" key={item.id}><h3>{item.name}</h3></div>
        ))}
      </div>
    </>
  );
};

export default Countries;
