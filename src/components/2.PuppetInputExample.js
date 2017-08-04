import React from 'react';
import { Input } from 'antd';
import PuppetInput from '../hoc/2.PuppetInput';

const Example = props => (
    <Input className="input" {...props} />
);

export default PuppetInput(Example);

// @PuppetInput
// export default Example
