import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Alert } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
// import DescriptionList from '../../components/DescriptionList';
import styles from './Particularsbase.less';

const callDataColumns = [{
  title: '月份',
  dataIndex: 'month',
  key: 'month',
  align: 'center',
}, {
  title: '短信数',
  dataIndex: 'messageNum',
  key: 'messageNum',
  align: 'center',
}, {
  title: '拨打',
  dataIndex: 'callNum',
  key: 'callNum',
  align: 'center',
}, {
  title: '接听',
  dataIndex: 'answer',
  key: 'answer',
  align: 'center',
}, {
  title: '银行',
  dataIndex: 'bank',
  key: 'bank',
  align: 'center',
}, {
  title: '小贷',
  dataIndex: 'smallLoan',
  key: 'smallLoan',
  align: 'center',
}];

const callRecordsColumns = [{
  title: '电话号码',
  dataIndex: 'phoneNumber',
  key: 'phoneNumber',
  align: 'center'
}, {
  title: '通讯录名称',
  dataIndex: 'addressBookName',
  key: 'addressBookName',
  align: 'center'
}, {
  title: '来源',
  dataIndex: 'source',
  key: 'source',
  align: 'center'
}, {
  title: '通话频次总和',
  dataIndex: 'callSum',
  key: 'callSum',
  align: 'center'
}, {
  title: '接听/拨打/短信',
  dataIndex: 'ACM',
  key: 'ACM',
  align: 'center'
}, {
  title: '最后拨出时间',
  dataIndex: 'lastCallDate',
  key: 'lastCallDate',
  align: 'center'
}, {
  title: '最后接听时间',
  dataIndex: 'lastAnswerDate',
  key: 'lastAnswerDate',
  align: 'center'
}, {
  title: '号码类型',
  dataIndex: 'numberType',
  key: 'numberType',
  align: 'center'
}, {
  title: '号码标识',
  dataIndex: 'numberFlag',
  key: 'numberFlag',
  align: 'center'
}, {
  title: '机构名称',
  dataIndex: 'Organization',
  key: 'Organization',
  align: 'center'
}];
const addressBookColumns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  align: 'center'
}, {
  title: '电话',
  dataIndex: 'phoneNumber',
  key: 'phoneNumber',
  align: 'center'
}];

const addressStatColumns = [{
  title: '运营商电话总数',
  dataIndex: 'operatorsCallSum',
  key: 'operatorsCallSum',
  align: 'center'
}, {
  title: '淘宝收货号码总数',
  dataIndex: 'taobaoCallSum',
  key: 'taobaoCallSum',
  align: 'center'
}, {
  title: '通讯录号码总数',
  dataIndex: 'addressCallSum',
  key: 'addressCallSum',
  align: 'center'
}, {
  title: '通讯录中包含运营商号码的总数',
  dataIndex: 'opinAdSum',
  key: 'opinAdSum',
  align: 'center'
}, {
  title: '运营商号码在通讯录中占比',
  dataIndex: 'operatorsRate',
  key: 'operatorsRate',
  align: 'center'
}];

const operationTabList = [{
  key: 'tab1',
  tab: '通话记录明细',
}, {
  key: 'tab2',
  tab: '通讯录明细',
}, {
  key: 'tab3',
  tab: '通讯录统计',
}];
@connect(({ particularsOperators, loading }) => ({
  particularsOperators,
  loading: loading.effects['particularsOperators/fetch'],
}))
export default class BasicProfile extends Component {
  state = {
    operationkey: 'tab1'
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'particularsOperators/fetch',
    });
  }
  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }
  render() {
    const { particularsOperators, loading } = this.props;
    const { callData } = particularsOperators;
    console.log('callData', callData);
    const contentList = {
      tab1: <Table pagination={true} loading={loading} dataSource={callData.callRecordsData} columns={callRecordsColumns} />,
      tab2: <Table pagination={true} loading={loading} dataSource={callData.addressBookData} columns={addressBookColumns} />,
      tab3: <Table pagination={false} loading={loading} dataSource={callData.addressStatData} columns={addressStatColumns} />
    };

    return (
        <div>
            <Card bordered={false}>
              <div style={{ marginBottom: 15 }}>
                <Alert
                  message={(
                    <div>
                      运营商（号码 <a style={{ fontWeight: 600, marginRight: 10 }}>{callData.phoneNumber}</a>
                      入网时间：<span style={{ fontWeight: 600, marginRight: 10 }}>{callData.networkDate}</span>
                      归属地：<span style={{ fontWeight: 600 }}>{callData.belong}</span>）
                      姓名：<span style={{ fontWeight: 600 }}>{callData.userName}</span>
                    </div>
                  )}
                  type="info"
                />
              </div>
              <div className={styles.title}>六个月通话记录</div>
              <Table
                style={{ marginBottom: 15 }}
                loading={loading}
                pagination={false}
                dataSource={callData.sixMonthData}
                columns={callDataColumns}
              />
            </Card>
            <Card title="账单审核" className={styles.tabsCard} bordered={false} tabList={operationTabList} onTabChange={this.onOperationTabChange}>
              {contentList[this.state.operationkey]}
            </Card>
        </div>
    );
  }
}
