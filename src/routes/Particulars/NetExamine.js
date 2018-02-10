import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Alert } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
// import DescriptionList from '../../components/DescriptionList';
import styles from './Particularsbase.less';

const borrowColumns = [{
  title: '机构名称',
  dataIndex: 'Organization',
  key: 'Organization',
  align: 'center',
}, {
  title: '姓名',
  dataIndex: 'userName',
  key: 'userName',
  align: 'center',
}, {
  title: '借款时间',
  dataIndex: 'borrowDate',
  key: 'borrowDate',
  align: 'center',
}, {
  title: '期数',
  dataIndex: 'period',
  key: 'period',
  align: 'center',
}, {
  title: '借款金额',
  dataIndex: 'borrowAmount',
  key: 'borrowAmount',
  align: 'center',
}, {
  title: '借款类型',
  dataIndex: 'borrowType',
  key: 'borrowType',
  align: 'center',
}, {
  title: '审批结果',
  dataIndex: 'auditRes',
  key: 'auditRes',
  align: 'center',
}, {
  title: '还款状态',
  dataIndex: 'repaymentStatus',
  key: 'repaymentStatus',
  align: 'center',
}, {
  title: '逾期金额',
  dataIndex: 'overdueAmount',
  key: 'overdueAmount',
  align: 'center',
}, {
  title: '逾期状态',
  dataIndex: 'overdueStatus',
  key: 'overdueStatus',
  align: 'center',
}, {
  title: '逾期总次数',
  dataIndex: 'overdueTimes',
  key: 'overdueTimes',
  align: 'center',
}, {
  title: 'M3+次数',
  dataIndex: 'm3Times',
  key: 'm3Times',
  align: 'center',
}, {
  title: 'M6+次数',
  dataIndex: 'm6Times',
  key: 'm6Times',
  align: 'center',
}];

const overdueColumns = [{
  title: '机构名称',
  dataIndex: 'Organization',
  key: 'Organization',
  align: 'center'
}, {
  title: '逾期总次数',
  dataIndex: 'overdueTimes',
  key: 'overdueTimes',
  align: 'center'
}, {
  title: 'M3+次数',
  dataIndex: 'm3Times',
  key: 'm3Times',
  align: 'center'
}, {
  title: 'M6+次数',
  dataIndex: 'm6Times',
  key: 'm6Times',
  align: 'center'
}];

const rishListColumns = [{
  title: '机构名称',
  dataIndex: 'Organization',
  key: 'Organization',
  align: 'center'
}, {
  title: '命中项',
  dataIndex: 'hitOption',
  key: 'hitOption',
  align: 'center'
}, {
  title: '命中内容',
  dataIndex: 'hitContent',
  key: 'hitContent',
  align: 'center'
}, {
  title: '风险类型',
  dataIndex: 'rishType',
  key: 'rishType',
  align: 'center'
}, {
  title: '风险明细',
  dataIndex: 'rishDetail',
  key: 'rishDetail',
  align: 'center'
}, {
  title: '风险最近时间',
  dataIndex: 'rishRecentDate',
  key: 'rishRecentDate',
  align: 'center'
}];

const queryLogColumns = [{
  title: '查询机构',
  dataIndex: 'Organization',
  key: 'Organization',
  align: 'center'
}, {
  title: '机构类型',
  dataIndex: 'OrganizationType',
  key: 'OrganizationType',
  align: 'center'
}, {
  title: '查询原因',
  dataIndex: 'queryReason',
  key: 'queryReason',
  align: 'center'
}, {
  title: '最近查询时间',
  dataIndex: 'queryRecentDate',
  key: 'queryRecentDate',
  align: 'center'
}];

@connect(({ particularsNetExamine, loading }) => ({
  particularsNetExamine,
  loading: loading.effects['particularsNetExamine/fetch'],
}))
export default class BasicProfile extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'particularsNetExamine/fetch',
    });
  }
  render() {
    const { particularsNetExamine, loading } = this.props;
    const { netExamineData } = particularsNetExamine;
    return (
        <div>
            <Card title="致诚阿福数据报告" bordered={false}>
              <div className={styles.title}>致诚分</div>
              <Alert
                  message={(
                    <div>
                      信用评分：<span style={{ fontWeight: 600, marginRight: 10 }}>{netExamineData.creditScore}</span>
                      违约概率：<span style={{ fontWeight: 600 }}>{netExamineData.defaultProbability}</span>
                    </div>
                  )}
                  type="info"
                  style={{ marginBottom: 15 }}
              />
              <div className={styles.title}>借款记录</div>
              <Table
                style={{ marginBottom: 15 }}
                loading={loading}
                pagination={false}
                dataSource={netExamineData.borrowData}
                columns={borrowColumns}
              />
              <div className={styles.title}>逾期次数统计</div>
              <Table
                style={{ marginBottom: 15 }}
                loading={loading}
                pagination={false}
                dataSource={netExamineData.overdueData}
                columns={overdueColumns}
              />
              <div className={styles.title}>风险名单</div>
              <Table
                style={{ marginBottom: 15 }}
                loading={loading}
                pagination={false}
                dataSource={netExamineData.rishListData}
                columns={rishListColumns}
              />
              <div className={styles.title}>被查记录</div>
              <Table
                style={{ marginBottom: 15 }}
                loading={loading}
                pagination={false}
                dataSource={netExamineData.queryLogData}
                columns={queryLogColumns}
              />
            </Card>
        </div>
    );
  }
}
