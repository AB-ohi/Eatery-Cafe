import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = () => {
    const [ans, setAns] = useState([]);
    
    
    useEffect(() => {
        fetch("https://chef-server-ab-ohi.vercel.app/ans")
            .then((res) => res.json())
            .then((data) => setAns(data))
            .catch((error) => console.log(error))
    },[])
    return (
        <div>
            {
                ans.map((ans) =>(
                    <div
                    key={ans.id}
                    className='blog-body'
                    >
                    <h2>Question:{ans.question}</h2>
                    <h3>Ans:{ans.ans}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Blog;