import React from 'react';
import { connect, useSelector } from 'react-redux';

import Smurf from './Smurf';

const SmurfList = ({ isLoading }) => {
    const smurfs = useSelector(state => state.smurfs)

    return (
        <>
            <h2>{smurfs.length ? 'Current Residents' : 'No Residents'}</h2>
            <div className='smurf-list'>
                {isLoading ? <span>Loading smurfs...</span> : smurfs.map(smurf => (
                        <Smurf key={smurf.id} { ...smurf } />
                    ))}
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    isLoading: state.isLoading,
})

export default connect(mapStateToProps, {})(SmurfList);