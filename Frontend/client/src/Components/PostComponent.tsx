import {observer} from "mobx-react-lite";
import Post from "../Models/Post";
import Multimedia from "../Models/Multimedia";
import {getMyAccount} from "../Models/Accounts/AccountController";
import {ContentType} from "../Data/ContentType";

interface IPostComponentProps{
    post : Post;
}
export const PostComponent = observer(function PostComponent({ post } : IPostComponentProps){
    return(
        // {props.post.ava.type == Symbol.for(`img`) ? <img src={this.props.ava.content}/> : `Ляяляля`}
        <img src={post.ava.content} />
    );
});
interface IPostsListProps{
    posts : Post[];
}
export const PostsList = observer(function PostsList({posts} : IPostsListProps){
    // /**@type{[Post]}*/
    // const array = props.posts.map(element => <PostComponent post={element} />);
    // return(
    //     {array}
    // )
    const numbers = [new Post(`oiu`, getMyAccount(), 34, 345, true, false, new Multimedia( ContentType.Img, `jhh`, `jhb`), 6)];
    return (
        <ul>
            {/*{numbers.map((number) =>
                <La number={number.title} />
            )}*/}
        </ul>
    );
});
