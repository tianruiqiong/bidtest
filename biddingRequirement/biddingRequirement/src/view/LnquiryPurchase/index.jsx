// 询价采购界面
import { useRef } from 'react';
import { Row, Col, Input, Form, Select, Button, InputNumber, Upload, DatePicker } from 'antd';
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
function LnquiryPurchase() {
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
            label: '5',
            value: '公开招标',
        },
        {
            label: '6',
            value: '邀请招标',
        },
        {
            label: '7',
            value: '询价招标',
        },
        {
            label: '8',
            value: '竞争性谈判',
        }
    ]
    const onFinish = (values) => {
        console.log(values);
        values.shelfNo12 = values.shelfNo12.format('YYYY-MM-DD HH:mm:ss')
        console.log();
        navigate('/InquiryResultApproval', {state: values});
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
                            <FormItem labelAlign="left" label='申请部门' name='shelfNo' key='shelfNo'>
                                <Select>
                                    {(areas || []).map((item) => (
                                        <Option key={item.label} value={item.label}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={8} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='申请人' name='shelfNo1' key='shelfNo1'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='申请人联系方式' name='shelfName1' key='shelfName1'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={12} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='招标类别' name='shelfNo5' key='shelfNo5'>
                                <Select>
                                    {(areas || []).map((item) => (
                                        <Option key={item.label} value={item.label}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
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
                            <FormItem labelAlign="left" label='单项合同估算金额' name='shelfNo1' key='shelfNo1'>
                                <InputNumber type="text" style={{ width: '60%' }}/> 万元
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='申请人联系方式' name='shelfName2' key='shelfName2'>
                            <Select>
                                    {(areas || []).map((item) => (
                                        <Option key={item.label} value={item.label}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1}>
                        <Col span={24}>
                            <FormItem labelAlign="left" label='项目背景' name='shelfNo2' key='shelfNo2' labelCol='6'>
                                <TextArea></TextArea>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1}>
                        <Col span={24}  labelCol={{sm: {span: 3, offset: 12}}}>
                            <FormItem labelAlign="left" label='主题内容' name='shelfNo3' key='shelfNo3'  labelCol='6'>
                                <TextArea></TextArea>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={12} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='计划招标方式' name='shelfNo' key='shelfNo'>
                                <Select>
                                    {(list || []).map((item) => (
                                        <Option key={item.label} value={item.label}>
                                            {item.value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='计划招标时间' name='shelfNo12' key='shelfNo12'>
                                <DatePicker  showTime/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={12} style={{ height: '50px' }}>
                        <Col span={12}>
                            <FormItem labelAlign="left" label='计划招标地点' name='shelfNo11' key='shelfNo11'>
                                <Input type="text" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle" gutter={1} style={{ height: '50px' }}>
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

export default LnquiryPurchase;