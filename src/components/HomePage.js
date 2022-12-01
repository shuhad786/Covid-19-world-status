import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { displayCountries } from '../redux/cards/allCardSlice';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCountries());
  });

  return (
    <>
      <div className="mainContainer">
        {countries.map((item) => (
          <div className="card" key={item.continent}>
            <h3 className="continentTitle">{item.continent}</h3>
            <p className="update">
              Updated: &nbsp;
              {item.updated}
            </p>
            <Link state={item} to="/DetailsPage">
              <IoArrowRedoOutline className="fowardArrow" aria-label="to details" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
