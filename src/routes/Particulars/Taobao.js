import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Alert, Form, Input, Select, Button, Col, Row } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Particularsbase.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

const taobaoBasicColumns = [{
  title: '淘宝用户名',
  dataIndex: 'userName',
  key: 'userName',
  align: 'center'
}, {
  title: '实名认证姓名',
  dataIndex: 'realName',
  key: 'realName',
  align: 'center'
}, {
  title: '淘宝绑定手机号',
  dataIndex: 'bindPhone',
  key: 'bindPhone',
  align: 'center'
}, {
  title: '淘宝买家等级',
  dataIndex: 'Grade',
  key: 'Grade',
  align: 'center'
}];

const taobaoReceivingColumns = [{
  title: '序号',
  dataIndex: 'id',
  key: 'id',
  align: 'center'
},{
  title: '地址',
  dataIndex: 'address',
  key: 'address',
  align: 'center'
},{
  title: '收货人',
  dataIndex: 'Consignee',
  key: 'Consignee',
  align: 'center'
},{
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone',
  align: 'center'
}];

const taobaoExpendColumns = [{
  title: '彩票',
  key: 'lottery',
}, {
  title: '选',
  key: 'select',
}, {
  title: '澳门',
  key: 'macao',
}, {
  title: '博',
  key: 'gambing',
}, {
  title: '游戏',
  key: 'game',
}, {
  title: '竞技',
  key: 'athletics',
}, {
  title: '充',
  key: 'pay',
}, {
  title: '银子',
  key: 'silver',
}, {
  title: '贷',
  key: 'loans',
}, {
  title: 'POS',
  key: 'pos',
}, {
  title: '申请',
  key: 'application',
}];

const taobaoDetailedColumns = [{
  title: '序号',
  dataIndex: 'transactionId',
  key: 'transactionId',
  align: 'center'
}, {
  title: '交易时间',
  dataIndex: 'transactionTime',
  key: 'transactionTime',
  align: 'center'
}, {
  title: '交易详情',
  dataIndex: 'transactionDetailed',
  key: 'transactionDetailed',
  align: 'center'
}, {
  title: '交易方',
  dataIndex: 'counterparty',
  key: 'counterparty',
  align: 'center'
}, {
  title: '收货人号码',
  dataIndex: 'ReceivingPhone',
  key: 'ReceivingPhone',
  align: 'center'
}, {
  title: '交易金额',
  dataIndex: 'transactionAmount',
  key: 'transactionAmount',
  align: 'center'
}];

@connect(({ particularsTaobao, loading }) => ({
  particularsTaobao,
  loading: loading.effects['particularsTaobao/fetch'],
}))
export default class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'particularsTaobao/fetch',
    });
  }
  createTableList = (dataSource, columns, loading, paginationNum) => {
      const pagination = paginationNum ? {pageSize: paginationNum} : false;
      const style = paginationNum ? { marginBottom: 10 } : { marginBottom: 50 };
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
  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则编号">
              {getFieldDecorator('transactionId')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                  <Option value="2">无</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span style={{marginBottom: 24}}>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  handleSearch = (e) => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'rule/fetch',
        payload: values,
      });
    });
  }
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'rule/fetch',
      payload: {},
    });
  }
  render() {
    const { particularsTaobao, loading } = this.props;
    const { taobaoBasicData, taobaoReceivingData, taobaoExpendData, taobaoDetailedData} = particularsTaobao;
    return (
        <Card bordered={false}>
          <div className={styles.title}>淘宝基本信息</div>
          {this.createTableList(taobaoBasicData, taobaoBasicColumns, loading, false)}
          <div className={styles.title}>淘宝收货地址</div>
          {this.createTableList(taobaoReceivingData, taobaoReceivingColumns, loading, 5)}
          <div className={styles.title}>淘宝消费统计</div>
          <Alert
              message={(
                <div>
                  最近6个月订单共计<span style={{ fontWeight: 600}}>7992.39</span>元，
                  平均单价<span style={{ fontWeight: 600 }}>90.82</span>元
                </div>
              )}
              type="info"
              style={{ marginBottom: 15 }}
          />
          {this.createTableList(taobaoExpendData, this.getKeyWord(taobaoExpendColumns), loading, false)}
          <div className={styles.title}>淘宝交易明细</div>
          {this.createTableList(taobaoDetailedData, taobaoDetailedColumns, loading, 50)}
        </Card>
    );
  }
}
