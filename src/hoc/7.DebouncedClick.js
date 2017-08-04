import React from 'react';
import { debounce } from 'lodash';

export default ms => Component =>
    class DebouncedClick extends Component {
        render() {
            const tree = super.render();
            const newProps = {
                ...tree.props,
                onClick: debounce(this.handleClick, ms),
            };

            return React.cloneElement(tree, newProps, tree.props.children);
        }
    }
