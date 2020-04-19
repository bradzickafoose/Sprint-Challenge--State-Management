import React, { useState } from 'react';
import { connect } from 'react-redux';
import { isEditing, isDeleting } from '../actions';

const Smurf = ({ name, age, height, id, isEditing, isDeleting }) => {
  const [smurf, setSmurf] = useState({
    name: name,
    age: age,
    height: height,
    id: id
  })

  const [ isEditable, setIsEditable ] = useState(true);

  const handleChange = event => {
    setSmurf({
      ...smurf,
      [ event.target.name ]: event.target.value
    });
  }

  const makeEditable = event => {
    event.preventDefault();
    setIsEditable(false);
  }

  const editSmurf = event => {
    setIsEditable(true);
    isEditing(smurf);
  }

  const deleteSmurf = event => {
    event.preventDefault();
    isDeleting(smurf.id);
  }


  return (
    <form className='smurf'>
    { isEditable ?
      <>
        <h2>{smurf.name}</h2>
        <p>Age: {smurf.age}</p>
        <p>Height: {smurf.height}</p>
        <button onClick={makeEditable}>Edit</button>
        <button type='submit' onClick={deleteSmurf}>Delete</button>
      </> :
      <>
        <input name='name' value={smurf.name} onChange={handleChange} />
        <input name='age' value={smurf.age} onChange={handleChange} />
        <input name='height' value={smurf.height} onChange={handleChange} />
        <button type='submit' onClick={editSmurf}>Done</button>
      </>
    }
    </form>
  );
}

const mapDispatchToProps = {
  isEditing,
  isDeleting
}

export default connect(null, mapDispatchToProps)(Smurf);