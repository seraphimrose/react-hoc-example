import React from 'react';

export default Component =>
    class HelloWorld extends React.Component {
        render() {
            const text = 'HelloWorld';

            return (
                <Component text={text} />
            );
        }
    };
