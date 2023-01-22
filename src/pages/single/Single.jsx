import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Table from '../../components/table/Table'
import Chart from '../../components/chart/Chart'




function Single() {
    return (
        <div className='single'>
            <Sidebar />
            <div className="pageContainer">
                <Navbar />
                <div className="singleTop">
                    <div className="singleTopLeft">
                        <div className="editButton">Edit</div>
                        <h1 className="singleTitle">Information</h1>
                        <div className="singleItem">
                            <img className="singleItemImg" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Single item img" />
                            <div className="singleDetails">
                                <h2 className="singleItemTitle">Jane Doe</h2>
                                <div className="singleDetailItem">
                                    <span className='singleItemKey'>Email: </span>
                                    <span className='singleItemValue'>janedoe@gmail.com </span>
                                </div>
                                <div className="singleDetailItem">
                                    <span className='singleItemKey'>Phone: </span>
                                    <span className='singleItemValue'>+31 6123 1234 </span>
                                </div>
                                <div className="singleDetailItem">
                                    <span className='singleItemKey'>Adress: </span>
                                    <span className='singleItemValue'>Blaak 16 3011 TA Rotterdam </span>
                                </div>
                                <div className="singleDetailItem">
                                    <span className='singleItemKey'>Country: </span>
                                    <span className='singleItemValue'>The Netherlands </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Chart className="singleTopRight" title={"User Spending (Last 6 Months)"} aspect={3 / 1} />
                </div>
                <div className="singleBottom">
                    <div className="singleBottomListTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div >
    )
}

export default Single