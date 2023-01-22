
import React from 'react'
import FeaturedChart from '../../components/featured/FeaturedChart'
import Chart from '../../components/chart/Chart'
import NavbarTwo from '../../components/navbar/NavbarTwo'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Table from '../../components/table/Table'

function Home() {
    return (
        <div className='home min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
            <NavbarTwo />
            <Sidebar />

            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <FeaturedChart />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />

                </div>
                <div className="homeListContainer">
                    <div className="homeListTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home