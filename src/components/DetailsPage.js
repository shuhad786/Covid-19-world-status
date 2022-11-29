import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';

function DetailsPage() {
  return (
    <>
      <div>DetailsPage</div>
      <Link to="/"><IoArrowBackCircle aria-label="Back Arrow" /></Link>
    </>
  );
}

export default DetailsPage;
