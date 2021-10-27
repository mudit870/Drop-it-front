import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span className="search">
            {' '}
            <input value = {filter || ''} onChange = {(e) => setFilter(e.target.value)} placeholder="Search Order"/>
        </span>
    )
}
