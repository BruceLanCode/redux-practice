/**
 * Created by lantu on 2017/11/3.
 */

import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {' '}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {' '}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
)

export default Footer
