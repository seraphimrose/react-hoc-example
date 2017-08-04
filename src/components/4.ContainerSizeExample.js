import React from 'react';
import ContainerSize from '../hoc/4.ContainerSize';

const Example = props => (
    <div>
        <p>{`height:  ${props.height}`}</p>
        <p>{`width:  ${props.width}`}</p>
    </div>
);

export default ContainerSize({ minWidth: 600 })(Example);

// @ContainerSize({...})
// export default Example
