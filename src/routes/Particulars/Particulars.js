import React, { Component } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { Input, Collapse} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import DescriptionList from '../../components/DescriptionList';
import { getRoutes } from '../../utils/utils';

const Panel = Collapse.Panel;
const { Description } = DescriptionList;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

@connect(({ particulars, loading}) => ({
  particulars,
  loading: loading.effects['particulars/fetchBasic'],
}))
export default class Particulars extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'particulars/fetchBasic'
    });
  }
  handleTabChange = (key) => {
    const { dispatch, match } = this.props;
    switch (key) {
      case 'main':
        dispatch(routerRedux.push(`${match.url}/main`));
        break;
      case 'bill':
        dispatch(routerRedux.push(`${match.url}/bill`));
        break;
      case 'taobao':
        dispatch(routerRedux.push(`${match.url}/taobao`));
        break;
      case 'operators':
        dispatch(routerRedux.push(`${match.url}/operators`));
        break;
      case 'netExamine':
        dispatch(routerRedux.push(`${match.url}/netExamine`));
        break;
      case 'auditRes':
        dispatch(routerRedux.push(`${match.url}/auditRes`));
        break;
      default:
        break;
    }
  }

  render() {
    const { particulars, loading } = this.props;
    const {userMessage} = particulars;
    const tabList = [
        {
          key: 'main',
          tab: '总览',
        },{
          key: 'bill',
          tab: '账单',
        }, {
          key: 'taobao',
          tab: '淘宝',
        },{
          key: 'operators',
          tab: '运营商通讯录',
        }, {
          key: 'netExamine',
          tab: '网查',
        }, {
          key: 'auditRes',
          tab: '审计结果',
        }
    ];
    const mainSearch = (
        <Collapse bordered={false} defaultActiveKey={['1'] }>
            <Panel header="用户信息" key="1" style={customPanelStyle} showArrow={false}>
                <DescriptionList size="large" col="4" style={{ marginBottom: 0 }}>
                    {
                        userMessage.map(item => (<Description term={item.title} key={item.key} >{item.value}</Description>))
                    }
                </DescriptionList>
            </Panel>
        </Collapse>
    );

    const { match, routerData, location } = this.props;
    const routes = getRoutes(match.path, routerData);
    return (
      <PageHeaderLayout
        content={mainSearch}
        tabList={tabList}
        tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
        onTabChange={this.handleTabChange}
      >
        <Switch>
          {
            routes.map(item =>
              (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              )
            )
          }
        </Switch>
      </PageHeaderLayout>
    );
  }
}
