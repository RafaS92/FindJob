import React from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import Post from './Post.js';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption color="#70B5F9" Icon={ImageIcon} title="Photo" />
                    <InputOption color="#7FC15E" Icon={ImageIcon} title="Video" />
                    <InputOption color="#E7A33E" Icon={ImageIcon} title="Event" />
                    <InputOption color="#C0CBCD" Icon={ImageIcon} title="Write Article" />
                </div>
            </div>
            <Post
                name="Rafa Valdez"
                description="test"
                message="working"
            />
        </div>
    )
}

export default Feed