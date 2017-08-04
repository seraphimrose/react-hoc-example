import React from 'react';
import { Button, Input, message, Radio } from 'antd';
import MobileVerify from '../hoc/3.MobileVerify';
import InputWrapper from '../hoc/8.InputWrapper';

const BaseInput = props => (
    <Input className="input"
        value={props.value}
        onChange={props.onChange}
        {...props} />
);

const NameInput = InputWrapper('name')(BaseInput);

const MobileInput = InputWrapper('mobile')(MobileVerify(BaseInput));

const GenderInput = InputWrapper('gender')(props => (
    <div className="input">
        <Radio.Group {...props}>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
        </Radio.Group>
    </div>
));

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            gender: '',
        };
        this.setValue = this.setValue.bind(this);
        this.output = this.output.bind(this);
    }

    setValue(key, value) {
        this.setState({
            [key]: value,
        });
    }

    output() {
        message.info(JSON.stringify(this.state), 5);
    }

    render() {
        return (
            <div>
                <NameInput setValue={this.setValue} />
                <MobileInput setValue={this.setValue} />
                <GenderInput setValue={this.setValue} />
                <Button onClick={this.output} size="small">submit</Button>
            </div>
        );
    }
}

export default Example;
