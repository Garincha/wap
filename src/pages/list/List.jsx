import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'



function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className="pageContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    )
}

export default List