import Post from "../Post";
import {action, makeObservable, observable} from "mobx";
import Multimedia from "../Multimedia";

export default class Account{
    constructor(id : number, avatar : Multimedia, posts: Post[]) {
        this._avatar = avatar;
        makeObservable<this, "_avatar" | "_posts">(this,{
           firstName: observable,
           surName: observable,
           _posts: observable,
           groups: observable,
            _avatar:observable,
           addPost: action,
        });
        this._id = id;
        this._posts = posts;
    }

    private readonly _id: number;
    private _avatar: Multimedia;
    firstName = ``;
    surName = ``;
    private _posts: Post[] = [];
    groups = [];

    addPost(title : string, ava : Multimedia, id : number){
        const post : Post = new Post(title, this, 0, 0, false, false, ava, id);
        this._posts.unshift(post);
        return post;
    }

    get id(){
        return this._id;
    }
    get avatar(){
        return this._avatar;
    }
}
