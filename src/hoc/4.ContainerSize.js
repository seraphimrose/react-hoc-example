import React from 'react'

export default ({
    widthOffset = 0,
    heightOffset = 0,
    minWidth = null,
} = {}) => Component =>
    class ContainerSize extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                height: 0,
                width: 0,
                readyToRender: false,
            };
            this.onResize = this.onResize.bind(this);
            this.update = this.update.bind(this);
        }

        componentDidMount() {
            this.update();
            if(window.addEventListener) {
                window.addEventListener('resize', this.onResize);
            } else if(window.attachEvent) {
                window.attachEvent('onresize', this.onResize);
            } else {
                window.onresize = this.onResize;
            }
        }

        componentWillUnmount() {
            if(window.removeEventListener) {
                window.removeEventListener('resize', this.onResize);
            } else if(window.detachEvent) {
                window.detachEvent('onresize', this.onResize);
            } else {
                window.onresize = null;
            }
        }

        onResize() {
            if(this.updateTimer) {
                clearTimeout(this.updateTimer);
            }

            this.updateTimer = setTimeout(() => this.update(), 16);
        }

        update() {
            const html = document.documentElement;
            const width = html.clientWidth - widthOffset;
            const height = html.clientHeight - heightOffset;

            this.setState({
                readyToRender: true,
                width: minWidth && width < minWidth ? minWidth : width,
                height,
            });
        }

        render() {
            return (
                <div style={{minHeight: '100%'}}>
                {this.state.readyToRender && (
                    <Component {...this.state} {...this.props}/>
                )}
                </div>
            );
        }
    };