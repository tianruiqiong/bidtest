// 询价结果审批表
import {  useRef } from 'react';
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
function InquiryResultApproval() {
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
            value: '线上',
        },
        {
            label: '2',
            value: '线下',
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
    const onFinish = (values) => {
        console.log(values);
        navigate('/MyApplication', {state: values});
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
                            <FormItem labelAlign="left" label='经办部门' name='shelfNo' key='shelfNo'>
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
                            <FormItem labelAlign="left" label='经办人' name='shelfNo1' key='shelfNo1'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='经办人联系方式' name='shelfName1' key='shelfName1'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='项目名称' name='shelfNo6' key='shelfNo6'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='预计总金额' name='shelfNo13' key='shelfNo13'>
                                <InputNumber type="text" style={{ width: '60%' }}/> 万元
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='供应商数量' name='shelfNo12' key='shelfNo12'>
                                <InputNumber type="text" style={{ width: '100%' }}/> 
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='询价实施方式' name='shelfName21' key='shelfName21'>
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
                            <FormItem labelAlign="left" label='拟成交供应商' name='shelfNo2' key='shelfNo2'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1}>
                        <Col span={24}>
                            <FormItem labelAlign="left" label='不选用最低价的原因及说明' name='shelfNo3' key='shelfNo3' labelCol='6'>
                                <TextArea></TextArea>
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
export default InquiryResultApproval;

