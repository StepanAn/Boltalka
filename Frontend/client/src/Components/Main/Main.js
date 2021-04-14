import {AccountInfo} from "./AccountInfo";
import {PostsList} from "../PostComponent";
import {getMyPosts} from "../../Models/Accounts/AccountController";

export default function Main(){
    return (
        <>
        <AccountInfo />
        <PostsList posts={getMyPosts()} />
        </>
    );
}
