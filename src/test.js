import React from 'react'
import ReactDOM from 'react-dom'

import Table from './table'
import data from '../tests/data.js'


import 'bootstrap/dist/css/bootstrap.css'
import '../tests/styles/pages.less'

const columns = [
    { title: '标示号', key: 'id' },
    { title: '姓名', key: 'name' },
    { title: '邮箱', key: 'email' },
    { title: '生日', key: 'birthday' },
]

ReactDOM.render(
    <Table
        columns={columns}
        data={[]}
        tableStyle='table table-hover table-condensed dataTable no-footer'
    />,
    document.getElementById('table')
)