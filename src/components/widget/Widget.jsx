import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, People, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'

function Widget({ type }) {
    let data

    //temp data
    const amount = 816
    const percentage = 20


    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <People className='widgetIcon text-[crimson] bg-red-200' />,
            }
            break
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartOutlined className='widgetIcon text-[goldenrod] bg-amber-200' />,
            }
            break
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className='widgetIcon text-[green] bg-green-200' />,
            }
            break
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "View balance",
                icon: <AccountBalanceOutlined className='widgetIcon text-[purple] bg-purple-200' />,
            }
            break
        default:
            break
    }

    return (
        <div className='widget flex flex-1 p-2.5 justify-between'>
            <div className='left'>
                <span className="widgetTitle">{data.title}</span>
                <span className="widgetCounter">{data.isMoney && "€"} {amount}</span>
                <span className="widgetLink">{data.link}</span>
            </div>
            <div className='right relative'>
                <div className="widgetPercentage positive">
                    <KeyboardArrowUp />
                    {percentage} %</div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget