import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Plan5.css';

function Plan5() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios
        .get('https://my-workout-api.herokuapp.com/lower')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        }) 
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
                    <div className="lower-strength-list">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.name1}</li>
                    ))}
            </ul>
                    </div>
        </div>
    )

}

export default Plan5
