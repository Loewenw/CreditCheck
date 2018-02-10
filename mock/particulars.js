const userMessage = [
    {title:"用户ID", value:19455663, key:'1'},
    {title:"姓名", value:"马丽娜", key:'2'},
    {title:"所在城市", value:"河南省洛阳市涧西区", key:'3'},
    {title:"毕业院校", value:"郑州大学", key:'4'},
    {title:"身份证号码", value:410305198701234522, key:'5'},
    {title:"芝麻分", value:708, key:'6'},
    {title:"产品类型", value:"轻松贷", key:'7'},
    {title:"手机号码", value:13911213445, key:'8'},
    {title:"婚姻状况", value:"未婚", key:'9'},
    {title:"工作年限", value:"1-3年", key:'10'},
    {title:"工作单位", value:"洛阳德伟旅行有限公司", key:'11'},
    {title:"工作地址", value:"河南省，洛阳市，西工区中迈红东方商务楼1404", key:'12'},
    {title:"现居地址", value:"河南省，洛阳市，涧西区澜京公馆1号楼2单元902", key:'13'},
    {title:"当前订单申请", value:"涧西区", key:'14'},
    {title:"学历", value:"专科（未知）", key:'15'},
    {title:"职业", value:"公司职员", key:'16'},
    {title:"税后月收入(元)", value:500, key:'17'},
    {title:"邮箱", value:"45115945@qq.com", key:'18'},
    {title:"单位电话", value:"0379-63356318", key:'19'},
    {title:"建议授信额度", value:"10000.00", key:'20'},
    {title:"申请期数", value:12, key:'21'},
    {title:"申请目的", value:"教育", key:'22'},
    {title:"公积金连续缴存期数", value:0, key:'23'},
    {title:"信用等级", value:"AAA", key:'24'},
    {title:"信用分", value:"10000.00", key:'25'},
    {title:"信用卡张数", value:3, key:'26'},
    {title:"信用卡总额度", value:"42000", key:'27'},
    {title:"帐龄", value:17, key:'28'},
    {title:"淘宝实名认证", value:"认证", key:'29'},
    {title:"淘宝默认收货地址", value:"河南省，洛阳市，涧西区澜京公馆1号楼2单元902", key:'30'},
    {title:"紧急联系人1", value:"母亲-李长英-18317530557", key:'31'},
    {title:"紧急联系人2", value:"父亲-马明杨-13569230557", key:'32'}];

// const greyList =
const greyListData = [
  {
    key:'1',
    createTime: '2017-10-01 14:10',
    name: '近三月有小贷放款（灰名）',
    barID: '3019434',
    ruleID: '332'
  }
];

const historyApplyData = [
  {
    key:'1',
    barID: '3019433',
    productType: '新融信用卡贷-新新贷',
    date: '2018-01-11 15:01:39',
    amount: '10000.00',
    deadline: '12',
    state: '待审核',
    overdue: '--'
  },
  {
    key:'2',
    barID: '3019433',
    productType: '轻松贷-博金贷',
    date: '2018-01-11 15:01:39',
    amount: '10000.00',
    deadline: '12',
    state: '审核中',
    overdue: '--'
  }
];
const contactApplyData = [];
const idCardMessage = [
    {
        key:'img1',
        title:'身份证正面照',
        imgUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        key:'img2',
        title:'身份证反面照',
        imgUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        key:'img3',
        title:'手持身份证照',
        imgUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    }
];

const bioassay = [
    {
        key:'img1',
        title:'图1',
        imgUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        key:'img2',
        title:'图2',
        imgUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        key:'img3',
        title:'图3',
        imgUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    }
];
const keyWordData = [{
    key:'1',
    aids:{times:0,amount:0},
    gambing:{times:1,amount:6188},
    macao:{times:0,amount:0},
    drug:{times:0,amount:0},
    interest:{times:19,amount:1564.19},
    instalment:{times:183,amount:24324.18},
    cash:{times:8,amount:725.65},
    breach:{times:0,amount:0},
    select:{times:0,amount:0},
    stagnate:{times:0,amount:0},
}];
// const keyWordData = [
//     {key:'aids',title:'艾滋',times:0,amount:0},
//     {key:'gambing',title:'博',times:1,amount:6188},
//     {key:'macao',title:'澳',times:0,amount:0},
//     {key:'drug',title:'毒',times:0,amount:0},
//     {key:'interest',title:'利息',times:19,amount:1564.19},
//     {key:'instalment',title:'期',times:183,amount:24324.18},
//     {key:'cash',title:'取现',times:8,amount:725.65},
//     {key:'default',title:'违约',times:0,amount:0},
//     {key:'select',title:'选',times:0,amount:0},
//     {key:'stagnate',title:'滞',times:0,amount:0},
// ];
const mainListData = [
    {
        title:'中信银行0495',
        list:[{
            key:'1',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '--',
            RepayRate: '--',
            lateFees: '--',
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'2',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '9586.56',
            RepayRate: '203.69%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'3',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '3499',
            RepayRate: '113.99%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'4',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '5306.6',
            RepayRate: '100.66%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }]
    }, {
        title:'交通银行0891',
        list:[{
            key:'1',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '--',
            RepayRate: '--',
            lateFees: '--',
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'2',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '9586.56',
            RepayRate: '203.69%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'3',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '3499',
            RepayRate: '113.99%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'4',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '5306.6',
            RepayRate: '100.66%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }]
    }, {
        title:'交通银行2507',
        list:[{
            key:'1',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '--',
            RepayRate: '--',
            lateFees: '--',
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'2',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '9586.56',
            RepayRate: '203.69%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'3',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '3499',
            RepayRate: '113.99%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }, {
            key:'4',
            billingDate: '2017-12-4',
            limit: 10000,
            currentConsumption: 9150.01,
            repayDate: '2017-12-23',
            realityRepayDate: '2017-12-10',
            minRepay: 213.5,
            shouldRepay: 4269.9,
            limitRate: '42.7%',
            realityRepay: '5306.6',
            RepayRate: '100.66%',
            lateFees: 0,
            interestRate: 0,
            firstDeal: 1,
        }]
    }
];

const taobaoBasicData = [
  {
    key:'1',
    userName: 'nina123',
    realName: '马丽娜',
    bindPhone: '139****3445',
    Grade: 5
  }
];
const taobaoReceivingData = [
  {
    key:'1',
    id: '6442188',
    address: '河南省洛阳市城西区南昌路街道江西路澜京公馆1号楼',
    Consignee: '马丽娜',
    phone: '139****3445'
  }
];
const taobaoExpendData = [{
    key:'1',
    lottery:{times:3,amount:279},
    select:{times:1,amount:156},
    macao:{times:0,amount:0},
    gambing:{times:3,amount:224},
    game:{times:0,amount:0},
    athletics:{times:0,amount:0},
    pay:{times:6,amount:679.34},
    silver:{times:0,amount:0},
    loans:{times:0,amount:0},
    pos:{times:0,amount:0},
    application:{times:0,amount:0},
}];
const taobaoDetailedData = [
  {
    key:'1',
    transactionId: '146004924',
    transactionTime: '2017-01-11 15:01:39',
    transactionDetailed: '河南联通100元秒话费充值快充',
    counterparty: '盛根话费充值专营店',
    ReceivingPhone: '--',
    transactionAmount: 99.00,
  },
  {
    key:'2',
    transactionId: '146004924',
    transactionTime: '2018-01-11 15:01:39',
    transactionDetailed: '河南联通100元秒冲手机话值快充',
    counterparty: '盛根话值专营店',
    ReceivingPhone: '--',
    transactionAmount: 199.00,
  },{
    key:'3',
    transactionId: '146004925',
    transactionTime: '2018-01-11 15:01:39',
    transactionDetailed: '河南联通100元秒冲手机话费充值快充',
    counterparty: '盛根话费充值专营店',
    ReceivingPhone: '--',
    transactionAmount: 299.00,
  },{
    key:'4',
    transactionId: '146004926',
    transactionTime: '2018-01-11 15:01:39',
    transactionDetailed: '河南联通100元秒冲手机话费充值快充',
    counterparty: '盛根话费充值专营店',
    ReceivingPhone: '--',
    transactionAmount: 909.00,
  },{
    key:'1',
    transactionId: '146004927',
    transactionTime: '2018-01-16 15:01:39',
    transactionDetailed: '河南联通100元秒冲手机话费充值快充',
    counterparty: '盛根话费充值专营店',
    ReceivingPhone: '--',
    transactionAmount: 99.00,
  },
];

const callData = {
  phoneNumber:'13911213445',
  networkDate:'2017-08-1',
  belong:'北京中国移动',
  userName:'马丽娜',
  sixMonthData:[
    {key:'1', month: 1, messageNum: 1, callNum: 19, answer: 20, bank: 1, smallLoan: 0,},
    {key:'2', month: 12, messageNum: 3, callNum: 105, answer: 101, bank: 2, smallLoan: 0,},
    {key:'3', month: 11, messageNum: 5, callNum: 90, answer: 75, bank: 1, smallLoan: 0,},
    {key:'4', month: 10, messageNum: 6, callNum: 104, answer: 94, bank: 4, smallLoan: 0,},
    {key:'5', month: 9, messageNum: 16, callNum: 98, answer: 82, bank: 5, smallLoan: 2,},
    {key:'6', month: 8, messageNum: 14, callNum: 94, answer: 56, bank: 9, smallLoan: 1,}
  ],
  callRecordsData:[
    {key:'1', phoneNumber: '13659846720', addressBookName: '马氏', source: '运营商/通讯录', callSum: 242, ACM: '181/61/0', lastCallDate: '2017-12-25 20:17:43', lastAnswerDate: '2017-12-31 22:51:12', numberType: '未知', numberFlag: '未知', Organization: '-',},
    {key:'2', phoneNumber: '18652264258', addressBookName: '诗香减肥', source: '运营商/通讯录', callSum: 97, ACM: '59/22/0', lastCallDate: '2017-12-18 13:52:26', lastAnswerDate: '2017-12-14 16:11:34', numberType: '未知', numberFlag: '未知', Organization: '-',},
    {key:'3', phoneNumber: '13669584869', addressBookName: '曾经哦啊', source: '运营商/通讯录', callSum: 84, ACM: '69/38/0', lastCallDate: '2017-12-29 11:26:46', lastAnswerDate: '2017-12-12 21:04:47', numberType: '未知', numberFlag: '未知', Organization: '-',},
    {key:'4', phoneNumber: '18658941339', addressBookName: 'DFHANVLA', source: '运营商', callSum: 72, ACM: '56/19/0', lastCallDate: '2017-12-10 10:36:55', lastAnswerDate: '2017-12-23 06:32:52', numberType: '未知', numberFlag: '未知', Organization: '-',},
    {key:'5', phoneNumber: '15658294151', addressBookName: '但降幅爱哦', source: '运营商', callSum: 28, ACM: '86/20/0', lastCallDate: '2017-12-31 17:45:12', lastAnswerDate: '2017-12-29 18:52:32', numberType: '未知', numberFlag: '未知', Organization: '-',},
    {key:'6', phoneNumber: '18658469652', addressBookName: '惊喜哦就', source: '运营商/通讯录', callSum: 23, ACM: '8/7/0', lastCallDate: '2017-12-08 11:26:08', lastAnswerDate: '2017-12-25 01:23:06', numberType: '未知', numberFlag: '未知', Organization: '-',}
  ],
  addressBookData:[
    {key:'1', name: '110报警短信', phoneNumber: '12110379',},
    {key:'2', name: '阿朵解放路', phoneNumber: '13659846720',},
    {key:'3', name: '香煎藕夹', phoneNumber: '18652264258',},
    {key:'4', name: '撒娇哦阿娇', phoneNumber: '13669584869',},
    {key:'5', name: '徐日公布的', phoneNumber: '18658941339',},
    {key:'6', name: '都是', phoneNumber: '15658294151',},
    {key:'7', name: '魔法卡机', phoneNumber: '18629543151',},
    {key:'8', name: 'dfavarv', phoneNumber: '15684512151',},
    {key:'9', name: '不覆盖dfs', phoneNumber: '18658469652',},
    {key:'10', name: 'bgafgaw', phoneNumber: '15686195431',},
    {key:'11', name: '阿凡达万', phoneNumber: '18698679228',},
    {key:'12', name: 'vbdfh', phoneNumber: '13658649292',},
    {key:'13', name: 'xgeavfw', phoneNumber: '15658943259',},
    {key:'14', name: '对方身份', phoneNumber: '18658436222',},
    {key:'15', name: '饿死vs', phoneNumber: '15669584151',},
    {key:'16', name: '都是', phoneNumber: '13652264222',},
    {key:'17', name: '额的风', phoneNumber: '13689364664',},
    {key:'18', name: '俄官方的', phoneNumber: '15357764836',},
    {key:'19', name: '额萨芬资本', phoneNumber: '13426594491',},
    {key:'20', name: '耳光达人', phoneNumber: '18659863586',},
  ],
  addressStatData:[
    {key:'1', operatorsCallSum: 221, taobaoCallSum: 0, addressCallSum: 220, opinAdSum: 20, operatorsRate: '9.09%',}
  ],
};

const netExamineData = {
  creditScore:608,
  defaultProbability:'4.57%',
  borrowData:[
    {key:'1', Organization: 56, userName: '马丽娜', borrowDate: '201710', period: 6, borrowAmount: '(5000,10000]', borrowType: '信用', auditRes: '批贷已放款', repaymentStatus: '正常', overdueAmount: '', overdueStatus: '', overdueTimes: '', m3Times: '', m6Times: ''},
    {key:'2', Organization: 56, userName: '马丽娜', borrowDate: '201710', period: 6, borrowAmount: '(5000,10000]', borrowType: '信用', auditRes: '批贷已放款', repaymentStatus: '/', overdueAmount: '', overdueStatus: '', overdueTimes: '', m3Times: '', m6Times: '',},
  ],
  overdueData:[
    {key:'1', Organization: 56, overdueTimes: '/', m3Times: '/', m6Times: '/',}
  ],
  rishListData:[],
  queryLogData:[
    {key:'1', Organization: 178, OrganizationType: '奖金平台', queryReason: '贷款审批', queryRecentDate: '2018-01-10',},
    {key:'2', Organization: 247, OrganizationType: '非持牌消金-小额现金贷', queryReason: '贷款审批', queryRecentDate: '2018-01-10',},
    {key:'3', Organization: 340, OrganizationType: '非持牌消金', queryReason: '贷款审批', queryRecentDate: '2017-01-10',},
    {key:'4', Organization: 138, OrganizationType: '非持牌消金', queryReason: '贷款审批', queryRecentDate: '2017-01-10',},
    {key:'5', Organization: 198, OrganizationType: 'P2P', queryReason: '贷款审批', queryRecentDate: '2017-01-10',},
    {key:'6', Organization: 361, OrganizationType: 'P2P', queryReason: '贷款审批', queryRecentDate: '2017-01-10',}
  ]
};
export const getParticularsBasicData = {
    userMessage
};
export const getParticularsMainData = {
    greyListData,
    historyApplyData,
    contactApplyData,
    idCardMessage,
    bioassay,
};
export const getParticularsBillData = {
    keyWordData,
    mainListData,
};
export const getParticularsTaobaoData = {
    taobaoBasicData,
    taobaoReceivingData,
    taobaoExpendData,
    taobaoDetailedData,
}
export const getParticularsOperatorsData = {
    callData,
}
export const getParticularsNetExamineData = {
    netExamineData,
}
export default {
  getParticularsBasicData,
  getParticularsMainData,
  getParticularsBillData,
  getParticularsTaobaoData,
  getParticularsOperatorsData,
  getParticularsNetExamineData,
};
