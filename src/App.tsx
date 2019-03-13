import * as React from 'react';
import { Select, Button } from 'antd';
const axios = require('axios');
const Option = Select.Option;

export interface IAppProps {
}

export default class IApp extends React.Component<IAppProps, any> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            urlMap: [{
                name: '花园',
                url: 'http://j.zz22x.com/jx/?url='
            }],
            selected: 'http://j.zz22x.com/jx/?url='
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

    componentDidMount = () => {
        axios.get('https://api.github.com/gists/9be38dd65d6befbd557284212d47c49e').then((res: any) => {
            let urlMap = JSON.parse(res.data.files.cloudUrl.content).data
            this.setState({ urlMap })
        })
    };


    public render() {
        let { urlMap } = this.state
        return (
            <div className="wrap">
                <Select defaultValue={urlMap[0].url} className="select-box" onChange={this.handleChange.bind(this)}>
                    {
                        urlMap.map((item: any) => {
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
