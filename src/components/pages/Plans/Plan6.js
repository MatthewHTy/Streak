import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Plan6() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios
        .get('https://my-workout-api.herokuapp.com/upper')
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
                    <div className="upper-strength">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.name1}</li>
                    ))}
            </ul>
                    </div>
        </div>
    )

}

export default Plan6