import LikeObject from "./LikeObject";
import {makeObservable, observable, action} from "mobx"
import Account from "./Accounts/Account";
import Multimedia from "./Multimedia";

export default class Post extends LikeObject{
    constructor(title : string, author : Account, amountLikes : number, amountDislikes : number, iLikeThis : boolean, iDislikeThis : boolean, ava : Multimedia, id : number) {
        super(author,amountLikes,amountDislikes,iLikeThis,iDislikeThis);
        makeObservable<this, never>(this, {
            comments: observable,
            addComent: action,
        });
        this.title = title;
        this._ava = ava;
        this._id = id;
    }

    private readonly _ava;
    private readonly _id : number;
    title = "";
    comments = [];
    get ava(){
        return this._ava;
    }
    // eslint-disable-next-line class-methods-use-this
    addComent(){
        console.log("d");
    }
}

