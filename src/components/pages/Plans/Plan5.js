import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Plan5() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios
        .get('https://my-workout-api.herokuapp.com/results')
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
            <div className="lower-strength-text">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.name}</li>
                    ))}
            </ul>
                    </div>
                    <div className="lower-strength">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.name}</li>
                    ))}
            </ul>
                    </div>
        </div>
    )
}

export default Plan5
