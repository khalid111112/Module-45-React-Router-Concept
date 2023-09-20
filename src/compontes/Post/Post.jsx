const Post = ({Post}) => {
    const {id, title} = post;
console.log(Post)
    return (
        <div>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
        </div>
    );
};

export default Post;