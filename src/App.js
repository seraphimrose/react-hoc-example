import React, { Component } from 'react';
import { Collapse } from 'antd';
import HelloWorldExample from './components/1.HelloWorldExample';
import PuppetInputExample from './components/2.PuppetInputExample';
import MobileVerifyExample from './components/3.MobileVerifyExample';
import ContainerSizeExample from './components/4.ContainerSizeExample';
import InheritModeExample from './components/5.InheritModeExample';
import NeedLoginExample from './components/6.NeedLoginExample';
import DebouncedClickExample from './components/7.DebouncedClickExample';
import InputWrapperExample from './components/8.InputWrapperExample';

const Panel = Collapse.Panel;

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">HOC Demo</h1>
                <Collapse>
                    <Panel header={'HelloWorldExample'}>
                        <HelloWorldExample />
                    </Panel>
                    <Panel header={'PuppetInputExample'}>
                        <PuppetInputExample />
                    </Panel>
                    <Panel header={'MobileVerifyExample'}>
                        <MobileVerifyExample />
                    </Panel>
                    <Panel header={'ContainerSizeExample'}>
                        <ContainerSizeExample />
                    </Panel>
                    <Panel header={'InheritModeExample'}>
                        <InheritModeExample />
                    </Panel>
                    <Panel header={'NeedLoginExample'}>
                        <NeedLoginExample />
                    </Panel>
                    <Panel header={'DebouncedClickExample'}>
                        <DebouncedClickExample />
                    </Panel>
                    <Panel header={'InputWrapperExample'}>
                        <InputWrapperExample />
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
