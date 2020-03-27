import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfList = props => {
    console.log('SmurfList props:', props)

    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    }

    return (
        <>
            <div className='smurf-list'>
                <button className='btn' onClick={fetchSmurfs}>List the Smurfs</button>
                {props.smurfs.map(smurf => {
                    return (
                        <div key={smurf.id} className='smurf'>
                            <h2>{smurf.name}</h2>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching,
})

export default connect(mapStateToProps, { getSmurfs })(SmurfList);