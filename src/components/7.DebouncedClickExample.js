import React from 'react';
import { Button, message } from 'antd';
import DebouncedClick from '../hoc/7.DebouncedClick';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        message.info('I\'m debounced!');
    }

    render() {
        return (
            <Button size="large"
                type="primary"
                onClick={this.handleClick}>
                Debounced Click
            </Button>
        );
    }
}

export default DebouncedClick(500)(Example);

// @DebouncedClick()
// export default Example
