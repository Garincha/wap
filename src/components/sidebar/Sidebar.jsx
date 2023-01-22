import React from 'react'
import { People, Store, Payment, LocalShipping, Assessment, NotificationsNone, SettingsSystemDaydreamOutlined, LogoDevOutlined, Tune, AccountBox, Logout, Dashboard } from '@mui/icons-material'

function Sidebar() {
    return (
        <div class="sideBar">
            <div class="collapse navbar-collapse no-scrollbar overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow text-gray-800 dark:text-white" id="navbarSupportedContent">
                <ul className='py-4 space-y-1'>
                    <li class="sbtitleitem">
                        <div class="sbtitlecontainer">
                            <div class="sbtitle">Main</div>
                        </div>
                    </li>
                    <li><a href="/" className='sbitem'>
                        <Dashboard className='icon' />
                        <span className='sbitemtext'>Dashboard</span>
                    </a>
                    </li>
                    <li class="sbtitleitem">
                        <div class="sbtitlecontainer">
                            <div class="sbtitle">LISTS</div>
                        </div>
                    </li>
                    <li>
                        <a href="/users" className='sbitem'>
                            <People className='icon' />
                            <span className='sbitemtext'>Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="/products" className='sbitem'>
                            <Store className='icon' />
                            <span className='sbitemtext'>Products</span>
                        </a>
                    </li>
                    <li>
                        <a href="/orders" className='sbitem'>
                            <Payment className='icon' />
                            <span className='sbitemtext'>Orders</span>
                        </a>
                    </li>
                    <li>
                        <a href="/delivery" className='sbitem'>
                            <LocalShipping className='icon' />
                            <span className='sbitemtext'>Delivery</span>
                        </a>
                    </li>
                    <li class="sbtitleitem">
                        <div class="sbtitlecontainer">
                            <div class="sbtitle">USEFUL</div>
                        </div>
                    </li>
                    <li>
                        <a href="/stats" className='sbitem'>
                            <Assessment className='icon' />
                            <span className='sbitemtext'>Statistics</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className='sbitem'>
                            <NotificationsNone className='icon' />
                            <span className='sbitemtext'>Notifications</span>
                        </a>
                    </li>
                    <li class="sbtitleitem">
                        <div class="sbtitlecontainer">
                            <div class="sbtitle">SERVICE</div>
                        </div>
                    </li>
                    <li>
                        <a href="/#" className='sbitem'>
                            <SettingsSystemDaydreamOutlined className='icon' />
                            <span className='sbitemtext'>System Health</span>
                        </a>
                    </li>
                    <li>
                        <a href="/logs" className='sbitem'>
                            <LogoDevOutlined className='icon' />
                            <span className='sbitemtext'>Logs</span>
                        </a>
                    </li>
                    <li class="sbtitleitem">
                        <div class="sbtitlecontainer">
                            <div class="sbtitle">SETTINGS</div>
                        </div>
                    </li>
                    <li>
                        <a href="/settings" className='sbitem'>
                            <Tune className='icon' />
                            <span className='sbitemtext'>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className='sbitem'>
                            <AccountBox className='icon' />
                            <span className='sbitemtext'>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className='sbitem'>
                            <Logout className='icon' />
                            <span className='sbitemtext'>Log out</span>
                        </a>
                    </li>
                    <li className='hidden'>
                        <ul class="px-2.5 h-12 flex items-center flex-col">
                            <li className="colorOption"></li>
                            <li className="colorOption"></li>
                        </ul>
                    </li>
                </ul>

                <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
            </div>
        </div>
    )
}

export default Sidebar