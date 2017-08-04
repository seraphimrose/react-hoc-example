import React from 'react';

export default Component =>
    class MobileVerify extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                errMsg: '',
            };
        }

        onBlur() {
            if(!this.props.value) {
                this.setState({
                    errMsg: 'Phone is Required！',
                });
            } else if(!/^1[34578]\d{9}$/.test(this.props.value)) {
                this.setState({
                    errMsg: 'Invalid Phone Number！',
                });
            } else {
                this.setState({
                    errMsg: '',
                });
            }

            return true;
        }

        render() {
            const verifyProps = {
                onBlur: this.onBlur.bind(this),
            };

            return (
                <div>
                    <Component {...this.props} {...this.state} {...verifyProps} />
                    {this.state.errMsg && (
                        <span className="err-msg">{this.state.errMsg}</span>
                    )}
                </div>
            );
        }
    };