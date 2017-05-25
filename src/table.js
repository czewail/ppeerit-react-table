import React from 'react'
import PropTypes from 'prop-types'

import Header from './components/Header'
import Body from './components/Body'

export default class Table extends React.Component {

    // 获取表格头部
    _getHeader = (columns) => {
        // 定义头部行
        let row = []
        columns.forEach(column => {
            // 定义每个头部格子内容
            const cell = {
                title: column.title,
                className: column.className || ''
            }
            // 将格子放到头部行里面
            row.push(cell)
        })
        // 返回头部
        return row
    }
    // 渲染组件
    render() {
        // 获取组件属性
        const {columns, data} = this.props
        // 返回组件
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <Header
                                rows={this._getHeader(columns)}
                            />
                            <Body
                                columns={columns}
                                data={data}
                            />
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

Table.propTypes = {
    columns: PropTypes.array, // 列信息
}