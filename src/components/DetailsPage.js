import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailsPage() {
  const location = useLocation();
  const { state } = location;

  return (
    <>
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
