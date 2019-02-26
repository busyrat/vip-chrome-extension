import * as React from 'react';
import Button from 'antd/lib/button';

export interface IAppProps {
}

export default class IApp extends React.Component<IAppProps, any> {
    public render() {
        return (
            <Button type="primary">Button1</Button>
        );
    }
}
