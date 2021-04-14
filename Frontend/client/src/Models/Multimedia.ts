import { ContentType } from "../Data/ContentType";

export default class Multimedia{
    constructor(type : ContentType, name : string, content : string) {
        this.type = type;
        this.name = name;
        this.content = content;
    }
    public readonly type : ContentType;
    public readonly content : string;
    public readonly name : string;
}
