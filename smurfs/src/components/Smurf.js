import React, { useState } from 'react';
import { connect } from 'react-redux';
import { isDeleting } from '../actions';

const Smurf = ({ name, age, height, id, isDeleting }) => {
  const [smurf, setSmurf] = useState({
    name: name,
    age: age,
    height: height,
    id: id
  })

  const deleteSmurf = event => {
    event.preventDefault();
    isDeleting(smurf.id);
  }


  return (
    <div className='smurf'>
    <h2>{smurf.name}</h2>
    <p>Age: {smurf.age}</p>
    <p>Height: {smurf.height}</p>
    <button type='submit' onClick={deleteSmurf}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = {
  isDeleting
}

export default connect(null, mapDispatchToProps)(Smurf);