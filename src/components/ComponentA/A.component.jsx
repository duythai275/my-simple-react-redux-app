import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../../redux/Name/name.action';
import ComponentB from '../ComponentB/B.component';

const ComponentA = ({updateName}) => {
    return (
    <div>
        <h1>Component A</h1>
        <input onChange={event => updateName(event.target.value)} />
        <ComponentB />
    </div>
)};

const mapDispatchToProps = dispatch => ({
    updateName: newName => dispatch(changeName(newName))
})

export default connect(null, mapDispatchToProps)(ComponentA);