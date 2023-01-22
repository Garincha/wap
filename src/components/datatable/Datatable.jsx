import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

function Datatable() {

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: () => {
            return (
                <div className="actionCell">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        },
    },
    ]
    return (
        <div className='datatable' >
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div >
    )
}

export default Datatable