import Account from "./Account";
import Multimedia from "../Multimedia";
import Post from "../Post";


export function getMyAccount(){
    let account = new Account(3, new Multimedia(Symbol.for(`img`), `lyalyalya`, `https://loremflickr.com/640/360`));
    account.firstName = `Stepa`;
    account.surName = `Anufriev`;
    return account;
}
export function checkMyAuthentication(){
    return true;
}
export function getMyPosts(){
    let posts = [new Post(`oiu`, getMyAccount(), 34, 345, true, false, new Multimedia(Symbol.for(`img`), `jhh`, `jhb`))];
    return posts;
}
