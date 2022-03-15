import React from 'react'
import Post from './Post'
const PostList = ({posts,getPosts}) => {
    console.log({posts});
  return (
    <div>
        {posts.map(post =>(
             <Post post={post} getPosts={getPosts}/>
             ))}
    </div>
  )
}

export default PostList