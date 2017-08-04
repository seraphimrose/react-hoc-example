import React from 'react';
import InheritMode from '../hoc/5.InheritMode';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'HelloWorld',
        };
    }

    render() {
        return <div>HelloWorld will show in 2s</div>;
    }
}

export default InheritMode(Example);

// @InheritMode
// export default Example
