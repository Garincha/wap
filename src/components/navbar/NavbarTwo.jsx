import React from 'react'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined, Menu } from '@mui/icons-material'

function NavbarTwo() {
    return (

        <div class="fixed w-full flex items-center justify-between h-14 text-white z-10" >
            <div class="flex flex-row items-center justify-start md:justify-start w-14 md:w-72 h-14 bg-white  dark:bg-gray-800 border-b border-b-neutral-100">
                <span className='md:mr-10'><button className='sbitem navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Menu className='icon' />
                </button></span>
                <span className="hidden md:block logo text-xl font-bold text-[#6439ff]">WAP</span>
            </div>
            <div class="flex justify-between items-center h-14 bg-white dark:bg-gray-800 header-right navBar text-sm text-gray-500 dark:text-white dark:border-b-neutral-500  border-b border-b-neutral-100">
                <div class="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                    <button class="outline-none focus:outline-none">
                        <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <input type="search" name="" id="" placeholder="Search" class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                </div>

                <ul className="navItems hidden md:flex items-center">
                    <li className='navItem hover:text-[#d0c8f6]'>
                        <LanguageOutlined className='navIcon mr-1' />
                        English
                    </li>
                    <li className='navItem'>
                        <DarkModeOutlined className='navIcon' titleAccess='Dark mode' />
                    </li>
                    <li className='navItem'>
                        <FullscreenExitOutlined className='navIcon' titleAccess='Full screen' />
                    </li>
                    <li className='navItem'>
                        <NotificationsNoneOutlined className='navIcon' titleAccess='Notifications' />
                        <div className="counter">1</div>
                    </li>
                    <li className='navItem'>
                        <ChatBubbleOutlineOutlined className='navIcon' titleAccess='Messages' />
                        <div className="counter">12</div>
                    </li>
                    <li className='navItem'>
                        <ListOutlined className='navIcon' titleAccess='Lists' />
                    </li>
                    <li className='navItem'>
                        <img className='h-8 w-8 rounded-full avatar' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                    </li>
                </ul>
                <ul className='flex md:hidden items-center'>
                    <li className='mobileNavItem'>
                        <ListOutlined className='navIcon' titleAccess='Lists' />
                    </li>
                    <li className='mobileNavItem'>
                        <img className='w-16 rounded-full avatar' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarTwo