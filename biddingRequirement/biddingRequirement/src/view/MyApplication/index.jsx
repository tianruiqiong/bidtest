// 我的申请
import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'antd';
import { useLocation } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css'
function MyApplication() {
    const location = useLocation();
    const columns = [
        {
          title: '序号',
          dataIndex: 'index',
          render: (text, record, index) => `${index + 1}`
        },
        {
          title: '项目名称',
          dataIndex: 'name'
        },
        {
          title: '进度',
          dataIndex: 'progress'
        }
    ];
    const data = [
    {
        key: '1',
        name: 'xxxxxxxxxxxxxxx',
        progress: '已提交，等待部门领带审批'
    },
    {
        key: '2',
        name: 'xxxxxxxxxxxxxxx',
        progress: '部门领导审批完成，等待分管领导审批'
    },
    {
        key: '3',
        name: 'xxxxxxxxxxxxxxx',
        progress: '审批完成'
    }
    ];

    useEffect(() => {
        console.log(location);
    })
    return (
        <>
            <div className='container'>
                <Table columns={columns} dataSource={data} bordered pagination={false}/>
            </div>
        </>
    )
}

export default MyApplication;