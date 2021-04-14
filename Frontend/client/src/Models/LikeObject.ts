import ContentObject from "./ContentObject";
import { makeObservable, observable, computed, action } from "mobx"
import Account from "./Accounts/Account";

export default class LikeObject extends ContentObject{
    constructor(author : Account, amountLikes : number, amountDislikes : number, iLikeThis : boolean, iDislikeThis : boolean) {
        super(author);
        this._likes = 0;
        makeObservable<this, "_likes" | "_dislikes" | "_iLikeThis" | "_iDisLikeThis">(this,{
            _likes: observable,
            _dislikes: observable,
            _iLikeThis: observable,
            _iDisLikeThis: observable,
            like: action,
            dislike: action,
            amountLikes: computed,
            amountDislikes: computed,
            iLikeThis: computed,
            iDislikeThis: computed,
        });
        this._likes = amountLikes;
        this._dislikes = amountDislikes;
        this._iLikeThis = iLikeThis;
        this._iDisLikeThis = iDislikeThis;
    }
    private _likes  = 0;
    private _dislikes  = 0;
    private _iLikeThis = false;
    private _iDisLikeThis = false;
    public like(){
        if(!this._iLikeThis) {
            if (this._iDisLikeThis) {
                ++this._likes;
                --this._dislikes;
                this._iLikeThis = true;
                this._iDisLikeThis = false;
            } else {
                ++this._likes;
                this._iLikeThis = true;
            }
        }
        else {
            this._iLikeThis = false;
            --this._likes;
        }
    }
    public dislike(){
        if(!this._iDisLikeThis){
            if(this._iLikeThis){
                ++this._dislikes;
                --this._likes;
                this._iDisLikeThis = true;
                this._iLikeThis = false;
            } else {
                ++this._dislikes;
                this._iDisLikeThis = true;
            }
        }
        else {
            this._iDisLikeThis = false;
            --this._dislikes;
        }
    }
    get amountLikes(){
        return this._likes;
    }
    get amountDislikes(){
        return this._dislikes;
    }
    get iLikeThis(){
        return this._iLikeThis;
    }
    get iDislikeThis(){
        return this._iDisLikeThis;
    }
}
