import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'

function Navbar() {
    return (
        <div className='navBar h-12 border-b flex items-center text-sm text-gray-500 dark:text-white dark:border-b-neutral-500 dark:bg-neutral-900'>
            <div className="wrapper flex p-5 justify-between w-full ">
                <div className="search flex items-center border-[0.5px] p-1 h-10 dark:border-neutral-500" >
                    <input className='outline-none bg-transparent text-xs ml-2' type="text" name="search" placeholder='Search...' />
                    <SearchOutlined className='searchIcon hover:text-[#d0c8f6] cursor-pointer' />
                </div>
                <div className="navItems flex items-center">
                    <div className='navItem hover:text-[#d0c8f6]'>
                        <LanguageOutlined className='navIcon mr-1' />
                        English
                    </div>
                    <div className='navItem'>
                        <DarkModeOutlined className='navIcon' titleAccess='Dark mode' />
                    </div>
                    <div className='navItem'>
                        <FullscreenExitOutlined className='navIcon' titleAccess='Full screen' />
                    </div>
                    <div className='navItem'>
                        <NotificationsNoneOutlined className='navIcon' titleAccess='Notifications' />
                        <div className="counter">1</div>
                    </div>
                    <div className='navItem'>
                        <ChatBubbleOutlineOutlined className='navIcon' titleAccess='Messages' />
                        <div className="counter">12</div>
                    </div>
                    <div className='navItem'>
                        <ListOutlined className='navIcon' titleAccess='Lists' />
                    </div>
                    <div className='navItem'>
                        <img className='h-8 w-8 rounded-full avatar' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar