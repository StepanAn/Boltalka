import Account from "./Accounts/Account";

export default class ContentObject {
    protected _author : Account;
    content = [];
    private readonly _date : Date;

constructor(author : Account) {
    this._author = author;
    this._date = new Date();
}
get author(){
    return this._author;
}
get date(){
    return this._date;
}
get UTCDate(){
    return new Date( this._date.getUTCFullYear(), this._date.getUTCMonth(), this._date.getUTCDate(), this._date.getUTCHours(), this._date.getUTCMinutes(), this._date.getUTCSeconds() );
    }
}
