import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Divider, Col, Row, Icon } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import DescriptionList from '../../components/DescriptionList';
import styles from './Particularsbase.less';

const { Description } = DescriptionList;
// const greyListColumns = [{
//   title: '创建时间',
//   dataIndex: 'createTime',
//   key: 'createTime',
//   align: 'center'
// }, {
//   title: '名称',
//   dataIndex: 'name',
//   key: 'name',
//   align: 'center'
// }, {
//   title: '订单号',
//   dataIndex: 'barID',
//   key: 'barID',
//   align: 'center'
// }, {
//   title: '规则ID',
//   dataIndex: 'ruleID',
//   key: 'ruleID',
//   align: 'center'
// }];


// @connect(({ particulars, loading }) => ({
//   particulars,
//   loading: loading.effects['particulars/fetchBill'],
// }))
export default class AuditRes extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'particulars/fetchBill',
    // });
  }
  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }
  createTableList = (dataSource, columns, loading, key) => {
      const pagination = {defaultPageSize: 5};
      const style = { marginBottom: 15 };
      return (
          <Table
            style={style}
            loading={loading}
            pagination={pagination}
            dataSource={dataSource}
            columns={columns}
            rowKey={key}
          />
      )
  }
  render() {
    // const { pakeyrticulars, loading } = this.props;
    // const { keyWordData } = particulars;
    return (
        <Card bordered={false}>
          <div className={styles.title}>审计结果</div>
        </Card>
    );
  }
}
