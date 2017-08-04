import React from 'react';
import PuppetInput from './2.PuppetInput';

export default key => Component => {
    const WrappedComponent = PuppetInput(Component);

    return class InputWrapper extends WrappedComponent {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
            this.onChange(e, () => {
                this.props.setValue(key, this.state.value);
            });
        }

        render() {
            const Input = super.render();
            const newProps = {
                ...Input.props,
                placeholder: key,
                onChange: this.handleChange,
            };

            return React.cloneElement(Input, newProps, Input.props.children);
        }
    };
};