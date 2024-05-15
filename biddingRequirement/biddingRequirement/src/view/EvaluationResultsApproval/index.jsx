// 评标结果审批表
import { useRef } from 'react';
import { Row, Col, Input, Form, Select, Button, InputNumber, Upload, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css'
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const { Option } = Select;
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
};
function EvaluationResultsApproval() {
    const requisitionFormRef = useRef(null);
    const navigate = useNavigate();
    const areas = [
        {
            label: '1',
            value: '施工合同',
        },
        {
            label: '2',
            value: '物资采购',
        },
        {
            label: '3',
            value: '产品采购',
        },
        {
            label: '4',
            value: '服务采购',
        }
    ];
    const list = [
        {
            label: '1',
            value: '1',
        },
        {
            label: '2',
            value: '2',
        },
        {
            label: '3',
            value: '3',
        },
        {
            label: '4',
            value: '4',
        },
        {
            label: '5',
            value: '5',
        }
    ];

    const columns = [
        {
          title: '供应商',
          dataIndex: 'name'
        },
        {
          title: '供应商报价(元)',
          dataIndex: 'age'
        },
        {
          title: '联系人',
          dataIndex: 'tel'
        },
        {
          title: '联系电话',
          dataIndex: 'phone'
        }
    ];
    const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
    },
    ];

    const columns2 = [
        {
          title: '姓名',
          dataIndex: 'name'
        },
        {
          title: '岗位',
          dataIndex: 'station'
        },
        {
          title: '联系电话',
          dataIndex: 'phone'
        }
    ];
    const data2 = [
    {
        key: '1',
        name: '张三',
        phone: 18889898888,
        station: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: '李四',
        phone: 18889898888,
        station: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: '王五',
        phone: 18900010002,
        station: 'Sidney No. 1 Lake Park',
    }
    ];
    const onFinish = (values) => {
        console.log(values);
        navigate('/LnquiryPurchase', {state: values});
    };

    const selectFile = (values) => {
        console.log(values);
    };
    return (
        <>
            <div className='container'>
                <Form {...layout} layout="horizontal" onFinish={onFinish} ref={requisitionFormRef} className="filterForm" >
                    <Row justify="start" align="middle" gutter={12} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='招标部门' name='shelfNo' key='shelfNo'>
                                <Select
                                    
                                >
                                    {(areas || []).map((item) => (
                                        <Option key={item.value} value={item.value}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='招标人' name='shelfNo1' key='shelfNo1'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='招标人联系方式' name='shelfName1' key='shelfName1'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={18}>
                            <FormItem labelAlign="left" label='项目名称' name='shelfNo6' key='shelfNo6'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1}>
                        <Col span={24}>
                            <FormItem labelAlign="left" label='主要内容' name='shelfNo7' key='shelfNo7' labelCol='6'>
                                <TextArea></TextArea>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='评价方法' name='shelfName21' key='shelfName21'>
                            <Select>
                                    {(list || []).map((item) => (
                                        <Option key={item.value} value={item.value}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='评标人数' name='shelfNo12' key='shelfNo12'>
                                <InputNumber type="text" style={{ width: '100%' }}/> 
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={24}>
                            <FormItem labelAlign="left" label='评标成员名单' name='shelfNo11' key='shelfNo11'>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '300px' }}>
                        <Col span={24}>
                            <FormItem labelAlign="left">
                                <Table columns={columns2} dataSource={data2} bordered scroll={{y: 200}} pagination={false}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='供应商数量' name='shelfName211' key='shelfName211'>
                            <Select>
                                    {(list || []).map((item) => (
                                        <Option key={item.value} value={item.value}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={24}>
                            <FormItem labelAlign="left" label='供应商名单' name='shelfNo11' key='shelfNo11'>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '300px' }}>
                        <Col span={24}>
                            <FormItem labelAlign="left">
                                <Table columns={columns} dataSource={data} bordered scroll={{y: 200}} pagination={false}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='中标供应商' name='shelfNo2' key='shelfNo2'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1} style={{ height: '100px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='附件' name='shelfNo4' key='shelfNo4'>
                                <Upload accept=".csv,.xls,.xlsx" showUploadList={false} beforeUpload={selectFile}>
                                    <Button type="primary">点击上传</Button>
                                </Upload>
                            </FormItem>
                        </Col>
                    </Row>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            提交申请
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default EvaluationResultsApproval;

