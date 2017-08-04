import React from 'react';
import NeedLogin from '../hoc/6.NeedLogin';

class Example extends React.Component {
    render() {
        return (
            <div>Welcome, Monokuma</div>
        );
    }
}

export default NeedLogin(Example);

// @NeedLogin
// export default Example
