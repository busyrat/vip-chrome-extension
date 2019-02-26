import * as React from 'react';
import { Select, Button } from 'antd';
const Option = Select.Option;

export interface IAppProps {
}

export default class IApp extends React.Component<IAppProps, any> {

    urlMap = [{
        name: '白云阁',
        url: 'http://app.baiyug.cn:2019/vip/index.php?url='
    }, {
        name: '速度牛',
        url: 'http://api.wlzhan.com/sudu/?url='
    }]

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            selected: this.urlMap[0].url
        }
    }

    handleChange(value: string) {
        this.setState({ selected: value })
    }

    go() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Array<any>) => {
            window.open(this.state.selected + tabs[0].url)
        })
    }

    public render() {
        return (
            <div className="wrap">
                <Select defaultValue={this.urlMap[0].url} className="select-box" onChange={this.handleChange.bind(this)}>
                    {
                        this.urlMap.map((item: any) => {
                            return (
                                <Option key={item.url} value={item.url}>{item.name || item.url}</Option>
                            )
                        })
                    }
                </Select>
                <Button type="primary" onClick={this.go.bind(this)}>直通VIP</Button>
            </div>

        );
    }
}
