import React from 'react';
import tabData from './tabData'

interface tabProps {
    name ?: string;
    content ?: string;
};

interface tabState {
    activeTab: string;
};

class TabComponent extends React.Component<tabProps, tabState> {

    static defaultProps:tabProps = {
        name : '',
        content: ''
    }

    state:Readonly<tabState> = {
        activeTab : ''
    }

    onClickHandler(name:string){
        this.setState({
            activeTab : name
        });
    }

    componentDidMount(){
        let firstTab = tabData[0];
        this.setState({
            activeTab : firstTab.name
        })
    }

    render() {
        let me:any = this;
        let activeTab = this.state.activeTab;
        let arrTabs:any[] = [], arrCont:any[] = [];

        tabData.forEach((item,idx) => {
            let styleObj = (activeTab === item.name ) ? { display : 'block' } : { display : 'none' };
            arrTabs.push(
                <button onClick={me.onClickHandler.bind(me, item.name)} key={`t-${idx}`} role="tab">{item.name}</button>
            );
            arrCont.push(
                <div key={`tc-${idx}`} role="tabpanel" style={styleObj}>{item.content}</div>
            );
        });
        let markup = [ ...arrTabs, ...arrCont];

        return (
            <div role="tablist">
                <h3>Tabs</h3>
                {markup}
            </div>
        );
    }

};

export default TabComponent;