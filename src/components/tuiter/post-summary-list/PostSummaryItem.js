const PostSummaryItem = ({
                             post = {
                                 topic: "Web Development",
                                 userName: "ReactJS",
                                 time: "2h",
                                 title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 image: "../../../images/react-blue.png"
                             }
                         }
) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center mt-2">
            <div className="col-8">
                <p className="h6 text-white-50">{post.topic}</p>
                <p className="h6 text-white">{post.userName  ? post.userName : ''}
                    {post.userName ? <i className="fa fa-circle-check fa-inverse ps-1"></i> : " "}
                        <span
                    className="h6 text-white-50"> {post.time}</span></p>
                <p className="h6 text-white">{post.title}</p>
                <p className="h6">{post.tweets ? post.tweets : ' '}</p>
            </div>
            <div className="col-2">
                <img src={post.image} className="wd-feed-picture-lg" alt="..."/>
            </div>
        </li>
    );
}

export default PostSummaryItem