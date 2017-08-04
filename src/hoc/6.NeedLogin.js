import React from 'react'
import { Button } from 'antd';

export default Component =>
    class NeedLogin extends Component {
        constructor(props) {
            super(props);
            this.state = {
                hasAuth: false,
            };
            this.login = this.login.bind(this);
        }

        login() {
            this.setState({
                hasAuth: true,
            });
        }

        render() {
            if (this.state.hasAuth) {
                return super.render();
            }

            return (
                <div>
                    You must login first！
                    <Button size="small" onClick={this.login}>
                        Login
                    </Button>
                </div>
            );
        }
    };