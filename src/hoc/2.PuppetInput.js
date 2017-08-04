import React from 'react';

export default Component =>
    class PuppetInput extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '',
            };
        }

        onChange(e, callback) {
            this.setState({
                value: e.target.value,
            }, () => {
                if(callback) callback();
            });
        }

        render() {
            const puppetProps = {
                onChange: this.onChange.bind(this),
            };

            return (
                <Component {...this.props} {...this.state} {...puppetProps} />
            );
        }
    };
