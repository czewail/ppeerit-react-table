import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
    render() {
        const {rows} = this.props
        return (
            <thead>
                <tr>
                    {rows.map((row, i) => <th {...row} key={i} > {row.title} </th>)}
                </tr>
            </thead>
        )
    }
}

Header.propTypes = {
    rows: PropTypes.array,
}