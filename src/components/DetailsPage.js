import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';

function DetailsPage() {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <Link to="/" className="arrow"><IoArrowBackCircle aria-label="Back Arrow" /></Link>
      <div className="detailsCard">
        <h3 className="countriesTitle">{state.continent}</h3>
        <p className="cases">
          Cases: &nbsp;
          {state.cases}
        </p>
        <p className="cases">
          Deaths: &nbsp;
          {state.deaths}
        </p>
        <p className="cases">
          Tests: &nbsp;
          {state.tests}
        </p>
        <p className="cases">
          Population: &nbsp;
          {state.population}
        </p>
        <p className="cases">
          Active: &nbsp;
          {state.active}
        </p>
        <p className="cases">
          Recovered: &nbsp;
          {state.recovered}
        </p>
      </div>
    </>
  );
}

export default DetailsPage;
