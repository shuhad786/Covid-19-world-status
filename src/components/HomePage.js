import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayCountries } from '../redux/cards/allCardSlice';
// import { displayBrewery } from '../redux/cards/cardSlice';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCountries());
  }, []);

  return (
    <div className="mainContainer">
      {countries.map((item) => (
        <div className="card" key={item.id}><h3>{item.name}</h3></div>
      ))}
    </div>
  );
};

export default Countries;
