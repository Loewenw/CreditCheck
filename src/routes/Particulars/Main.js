import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Divider, Col, Row, Icon } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import DescriptionList from '../../components/DescriptionList';
import styles from './Particularsbase.less';

const { Description } = DescriptionList;
const greyListColumns = [{
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  align: 'center'
}, {
  title: '名称',
  dataIndex: 'name',
  key: 'name',
  align: 'center'
}, {
  title: '订单号',
  dataIndex: 'barID',
  key: 'barID',
  align: 'center'
}, {
  title: '规则ID',
  dataIndex: 'ruleID',
  key: 'ruleID',
  align: 'center'
}];

const historyApplyColumns = [{
  title: '订单号',
  dataIndex: 'barID',
  key: 'barID',
  align: 'center'
}];

const contactApplyColumns = [{
  title: '订单号',
  dataIndex: 'barID',
  key: 'barID',
  align: 'center'
}, {
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone',
  align: 'center'
}, {
  title: '来源',
  dataIndex: 'from',
  key: 'from',
  align: 'center'
}];

const columns = [{
  title: '产品类型',
  dataIndex: 'productType',
  key: 'productType',
  align: 'center'
}, {
  title: '日期',
  dataIndex: 'date',
  key: 'date',
  align: 'center'
}, {
  title: '金额',
  dataIndex: 'amount',
  key: 'amount',
  align: 'center'
}, {
  title: '期限',
  dataIndex: 'deadline',
  key: 'deadline',
  align: 'center'
}, {
  title: '状态',
  dataIndex: 'state',
  key: 'state',
  align: 'center'
}, {
  title: '逾期天数',
  dataIndex: 'overdue',
  key: 'overdue',
  align: 'center'
}];

@connect(({ particulars, loading }) => ({
  particulars,
  loading: loading.effects['particulars/fetchMain'],
}))
export default class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'particulars/fetchMain',
    });
  }
  createCardList = (list) => {
      const divStyle = { padding: '30px' };
      if(list && list.length > 0){
          return (
              <div style={divStyle}>
                <Row gutter={16}>
                  {
                      list.map(item =>(
                          <Col span={8} key={item.title}>
                            <Card
                                title={item.title}
                                bordered={true}
                                cover={<img alt="example" src={item.imgUrl} />}
                            >
                            </Card>
                          </Col>
                      ))
                  }
                </Row>
              </div>
          )
      }else{
          return (
              <div className={styles.noData}>
                  <Icon type="frown-o" />暂无数据
              </div>
          )
      }
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
          />
      )
  }
  render() {
    const { particulars, loading } = this.props;
    const { greyListData, historyApplyData, contactApplyData , idCardMessage, bioassay } = particulars;
    return (
        <Card bordered={false}>
          <div className={styles.title}>触碰灰名单</div>
          {this.createTableList(greyListData, greyListColumns, loading, '触碰灰名单')}
          <div className={styles.title}>历史申请订单</div>
          {this.createTableList(historyApplyData, [...historyApplyColumns, ...columns], loading, '历史申请')}
          <div className={styles.title}>联系人申请订单</div>
          {this.createTableList(contactApplyData, [...contactApplyColumns, ...columns], loading, '联系人申请')}
          <div className={styles.title}>身份证照片信息</div>
          {this.createCardList(idCardMessage)}
          <div className={styles.title}>活体检测截图</div>
          {this.createCardList(bioassay)}
        </Card>
    );
  }
}
