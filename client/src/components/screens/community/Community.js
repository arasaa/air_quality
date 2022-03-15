import './community.css'
import Post from '../post/Post'
import PostForm from '../../PostForm'

function Community({getPosts}) {

  
  return (
    <div className="">
      <Post />
      <PostForm getPosts={getPosts}/>
    </div>
  )
}

export default Community