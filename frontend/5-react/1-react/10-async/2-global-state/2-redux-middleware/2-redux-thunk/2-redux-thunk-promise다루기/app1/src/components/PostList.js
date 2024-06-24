import React from 'react'

function PostList ({ posts }) {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    )
}

export default PostList
