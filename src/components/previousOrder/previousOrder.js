import React, { useMemo } from 'react'
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import OrderData from './previousOrderData.json'
import { COLUMNS } from './columns'
import "../orderDetails/order.scss"
import { GlobalFilter } from '../orderDetails/globalFilter'
import "./previousOrder.scss"
import { Lens } from '../../assets'

export const PreviousOrder = () => {

    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>OrderData,[])

    

    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setPageSize,
        setGlobalFilter
    } = useTable({
        columns,
        data,
    },
    useGlobalFilter,usePagination
    )

    const { globalFilter , pageSize } = state

    return (
        <>
        <div className="orderListTable">
            <h1>Order List</h1>
        <div className="orderList">
            <ul>
                <li className="first">All Orders</li>
                <li>Active</li>
                <li>Completed</li>
                <li>Drafts</li>
            </ul>
        </div>
        <div className="search">
            <Lens/>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}  className="searchbar"  />
        <div className="filter">
            <h3>Show</h3> 
            <select value={pageSize} onChange = {e => setPageSize(Number(e.target.value))}>
                {[5,10,15,20,50].map(pageSize=>(
                    <option key={pageSize} value={pageSize}>{pageSize}</option>
                ))}
            </select>
            </div>
        </div>
        <table {...getTableProps()}>
            <thead >
                {headerGroups.map((headerGroup) =>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column)=>(
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                        
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row)=>{ prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell)=>{
                            return <td className="cell" {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        })}
                        
                    </tr>
                )
                    
                })}
                
            </tbody>
        </table>
        {/* <div>
            <button onClick = {() => previousPage()}>Previous</button>
            <button onClick = {() => nextPage()}>Next</button>
        </div> */}
        </div>
        </>
    )
}
