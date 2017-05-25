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

    // 样式转换器
    // 字符串用className属性
    // 对象用style属性
    _getStyles = (params) => {
        let styles = {}
        switch (typeof params) {
            case 'object':
                styles = {
                    ...styles,
                    style: {...params}
                }
                break
            case 'string':
                styles = {
                    ...styles,
                    className: params
                }
                break
        }
        return styles
    }

    // 渲染组件
    render() {
        // 获取组件属性
        const {columns, data, tableStyle, wrapStyle} = this.props
        // 获取表格父级div样式
        const wrapStyles = this._getStyles(wrapStyle)
        // 获取表格样式
        const tableStyles = this._getStyles(tableStyle)

        // 生成组件
        return (
            <div {...wrapStyles}>
                <table {...tableStyles}>
                    <Header
                        rows={this._getHeader(columns)}
                    />
                    <Body
                        columns={columns}
                        data={data}
                    />
                </table>
            </div>
        )
    }
}

Table.propTypes = {
    columns: PropTypes.array, // 列信息
    data: PropTypes.array, // 表格数据
    wrapStyle: PropTypes.oneOfType([ // 表格外部div样式
        PropTypes.object,
        PropTypes.string
    ]),
    tableStyle: PropTypes.oneOfType([ // 表格样式
        PropTypes.object,
        PropTypes.string
    ]),
}
Table.defaultProps = {
    columns: [],
    data: [],
    tableStyle: 'table'
}