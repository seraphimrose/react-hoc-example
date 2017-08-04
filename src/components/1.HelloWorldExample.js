import React from 'react';
import HelloWorld from '../hoc/1.HelloWorld';

const Example = props => (
    <div>{props.text}</div>
);

export default HelloWorld(Example);

// @HelloWorld
// export default Example
