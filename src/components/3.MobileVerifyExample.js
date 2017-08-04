import React from 'react';
import { Input } from 'antd';
import PuppetInput from '../hoc/2.PuppetInput';
import MobileVerify from '../hoc/3.MobileVerify';

const Example = props => (
    <Input className="input" {...props} />
);

export default PuppetInput(MobileVerify(Example));

// @PuppetInput
// @MobileVerify
// export default Example
