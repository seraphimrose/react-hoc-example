import { message } from 'antd';

export default Component =>
    class InheritMode extends Component {
        componentDidMount() {
            setTimeout(() => message.info(this.state.text), 2000);
        }
        render() {
            return super.render();
        }
    };