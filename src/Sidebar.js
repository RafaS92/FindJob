import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Rafael Valdez</h2>
                <h3>rvaldezdev.2020@gmail.com</h3>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>1,544</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className='sidebar__statNumber'>944</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("developer")}
                {recentItem("design")}
                {recentItem("developer")}
                {recentItem("code")}
            </div>
        </div>
    )
}

export default Sidebar