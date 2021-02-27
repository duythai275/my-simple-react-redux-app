import React from 'react';
import ComponentC from '../ComponentC/C.component';

const ComponentB = ( props ) => (
    <div>
        <h2>Component B</h2>
        <ComponentC />
    </div>
);

export default ComponentB;