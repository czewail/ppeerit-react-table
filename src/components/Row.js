import React from 'react'

export default class Row extends React.Component {
    render() {
        const {data, cells} = this.props
        return (
            <tr>
                {cells.map((cell, key) => {
                    return (
                        <td key={key}>
                            {data[cell.key]}
                        </td>
                    )
                })}
            </tr>
        )
    }
}