import React from 'react';
import { connect } from 'react-redux';

const ComponentC = ({ name }) => (
    <div>
        <h3>Component C</h3>
        {name}
    </div>
);

const mapStateToProps = state => ({
    name: state.info.name
})

export default connect(mapStateToProps)(ComponentC);