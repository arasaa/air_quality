import PostList from './PostList'

const PostItem = ({postt, User}) => {

  return (
    <div>
         {postt && Object.values(postt).map((post) => 
      <div className="card1" key={post._id}>
        <div className="thumbnail">
          <img
            src="https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="left"
          />
        </div>

        <div className="right">
          <h1 className="title">
            {post.title}
          </h1>
          <div className="author">
            <img
              src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2 className="conH2">{post.user.firstname}</h2>
          </div>
          <div className="seperator">
            <p className="postP">
             {post.content}
            </p>
          </div>
        </div>

       
      </div>
      )}
      <PostList />
    </div>
  )
}

export default PostItem