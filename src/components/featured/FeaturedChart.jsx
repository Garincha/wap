import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function FeaturedChart() {
    return (
        <div className='featuredChart'>
            <div className='fc-top'>
                <h1 className="fc-title">Total Revenue</h1>
                <MoreVert className='cursor-pointer' fontSize='small' />
            </div>
            <div className='fc-bottom'>
                <div className="fc-chart">
                    <CircularProgressbar value={60} text='60%' strokeWidth={5} />
                </div>
                <p className="fc-chartTitle">Total sales made today</p>
                <p className="fc-amount">€ 825</p>
                <p className="fc-desc">Processing previous transactions. Last payments may not be included.</p>
                <div className="fc-summary">
                    <div className="fc-summaryItem">
                        <div className="fc-summaryItemTitle">Target</div>
                        <div className="fc-summaryItemResult negative">
                            <KeyboardArrowDown fontSize='small' className='fc-summaryItemIcon' />
                            <div className="fc-resultAmount">€12.4k</div>
                        </div>
                    </div>
                    <div className="fc-summaryItem">
                        <div className="fc-summaryItemTitle">Last Week</div>
                        <div className="fc-summaryItemResult positive">
                            <KeyboardArrowUp fontSize='small' className='fc-summaryItemIcon' />
                            <div className="fc-resultAmount">€12.4k</div>
                        </div>
                    </div>
                    <div className="fc-summaryItem">
                        <div className="fc-summaryItemTitle">Last Month</div>
                        <div className="fc-summaryItemResult positive">
                            <KeyboardArrowUp fontSize='small' className='fc-summaryItemIcon' />
                            <div className="fc-resultAmount">€12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedChart