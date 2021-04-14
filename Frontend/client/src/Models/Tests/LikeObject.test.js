import LikeObject from "../LikeObject";

test(`Проверка лайков LikeObject`, () =>{
    let likeObject = new LikeObject(`Стёпа`, 11, 11, false, false);
    for (let i=1;i<=107;++i)
        likeObject.like();
    expect(likeObject.amountLikes).toBe(12);
    let likeObj = new LikeObject(`Стёпа`, 11, 11, true, false);
    likeObj.like();
    expect(likeObj.amountLikes).toBe(10);
});
test(`Проверка дизлайков LikeObject`, () =>{
    let likeObject = new LikeObject(`Петя`, 30, 30, false, false);
    for (let i=1; i<=100;++i)
        likeObject.dislike();
    expect(likeObject.amountDislikes).toBe(30);
    let likeObj = new LikeObject(`Петя`, 30, 30, false, true);
    likeObj.dislike();
    expect(likeObj.amountDislikes).toBe(29);

});
