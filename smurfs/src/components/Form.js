import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAdding } from '../actions';

class SmurfForm extends Component {

    state = {
        name: '',
        age: '',
        height: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const smurf = this.state;
        this.props.isAdding(smurf);

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }
    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        placeholder='name'
                        name='name'
                    />
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.age}
                        placeholder='age'
                        name='age'
                    />
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.height}
                        placeholder='height'
                        name='height'
                    />
                    <button className='btn' type='submit'>Add Smurf</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { isAdding })(SmurfForm)