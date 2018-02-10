import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Divider, Col, Row, Icon } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import DescriptionList from '../../components/DescriptionList';
import styles from './Particularsbase.less';

const { Description } = DescriptionList;
const keyWordColumns = [{
  title: '艾滋',
  key: 'aids',
}, {
  title: '博',
  key: 'gambing',
}, {
  title: '澳',
  key: 'macao',
}, {
  title: '毒',
  key: 'drug',
}, {
  title: '利息',
  key: 'interest',
}, {
  title: '期',
  key: 'instalment',
}, {
  title: '取现',
  key: 'cash',
}, {
  title: '违约',
  key: 'breach',
}, {
  title: '选',
  key: 'select',
}, {
  title: '滞',
  key: 'stagnate',
}];

const operationTabList = [{
  key: 'main',
  tab: '总览',
}, {
  key: 'transaction',
  tab: '交易明细',
}];

const orderdetailColumns = [{
  title: '账单日',
  dataIndex: 'billingDate',
  key: 'billingDate',
  align: 'center'
}, {
  title: '额度',
  dataIndex: 'limit',
  key: 'limit',
  align: 'center'
}, {
  title: '当前消费',
  dataIndex: 'currentConsumption',
  key: 'currentConsumption',
  align: 'center'
}, {
  title: '应还日',
  dataIndex: 'repayDate',
  key: 'repayDate',
  align: 'center'
}, {
  title: '实际还款日',
  dataIndex: 'realityRepayDate',
  key: 'realityRepayDate',
  align: 'center'
}, {
  title: '最低还款',
  dataIndex: 'minRepay',
  key: 'minRepay',
  align: 'center'
}, {
  title: '应还款',
  dataIndex: 'shouldRepay',
  key: 'shouldRepay',
  align: 'center'
}, {
  title: '额度使用率',
  dataIndex: 'limitRate',
  key: 'limitRate',
  align: 'center'
}, {
  title: '实际还款',
  dataIndex: 'realityRepay',
  key: 'realityRepay',
  align: 'center'
}, {
  title: '还款比(%)',
  dataIndex: 'RepayRate',
  key: 'RepayRate',
  align: 'center'
}, {
  title: '滞纳金',
  dataIndex: 'lateFees',
  key: 'lateFees',
  align: 'center'
}, {
  title: '利息',
  dataIndex: 'interestRate',
  key: 'interestRate',
  align: 'center'
}, {
  title: '一手',
  dataIndex: 'firstDeal',
  key: 'firstDeal',
  align: 'center'
}];
function CreateTableList(props){
    const listData = props.listData || [];
    const loading = props.loading;
    const tableList = listData.map(item => (
        <Table
          pagination={true}
          loading={loading}
          dataSource={item.list}
          columns={orderdetailColumns}
          title={() => item.title}
          key={item.title}
        />
    ));
    return tableList;
}
@connect(({ particularsBill, loading }) => ({
  particularsBill,
  loading: loading.effects['particularsBill/fetch'],
}))
export default class BasicProfile extends Component {
  state = {
    operationkey: 'main'
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'particularsBill/fetch',
    });
  }
  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }
  getKeyWord = (list = []) => {
      const getList = list.map(item => {
          return {
            title: item.title,
            dataIndex: item.key,
            key: item.key,
            align: 'center',
            render: (item) => (
                  <div>
                      <div>次数：{item.times}</div>
                      <div>总计：{item.amount}</div>
                  </div>
                )
            }
      });
      return getList;
  }
  render() {
    const { particularsBill, loading } = this.props;
    const { keyWordData, mainListData } = particularsBill;
    const contentList = {
      main: <CreateTableList listData={mainListData} loading={loading} key='main'/>,
      transaction: <CreateTableList listData={mainListData} loading={loading} key='transaction'/>
    };

    return (
        <div>
            <Card bordered={false}>
              <div className={styles.title}>关键词/关键字统计</div>
              <Table
                style={{ marginBottom: 15 }}
                loading={loading}
                pagination={false}
                dataSource={keyWordData}
                columns={this.getKeyWord(keyWordColumns)}
              />
            </Card>
            <Card title="账单审核" className={styles.tabsCard} bordered={false} tabList={operationTabList} onTabChange={this.onOperationTabChange}>
              {contentList[this.state.operationkey]}
            </Card>
        </div>
    );
  }
}
