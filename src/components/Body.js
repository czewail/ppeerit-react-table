import React from 'react'

import Row from '../components/Row'

export default class Body extends React.Component {

    _getCells = (columns) => {
        // 获取组件属性
        let cells = []
        columns.forEach(column => {
            const cell = {
                key: column.key
            }
            cells.push(cell)
        })
        return cells
    }
    render() {
        const {columns, data} = this.props
        const cells = this._getCells(columns)

        console.log(columns)
        return (
            <tbody>
            {data.length ?
                data.map((rowItem, i) => {
                return (
                    <Row
                        key={i}
                        data={rowItem}
                        cells={cells}
                    />
                )
            }) :
                <tr>
                    <td style={{'textAlign': 'center'}} colSpan={cells.length}>没有数据</td>
                </tr>
            }
            </tbody>
        )
    }
}