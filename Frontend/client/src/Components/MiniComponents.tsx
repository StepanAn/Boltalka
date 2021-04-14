import Avatar from "@material-ui/core/Avatar";
import React from 'react';

interface Props{
    className ?: string;
    src ?: string;
    alt ?: string;
}
export default function MyAvatar({src, alt, className} : Props){
    const colors = {
        0: '#a92dbe',
        1: '#d61c1c',
        2: '#72e04e',
        3: '#292dc1',
    };
    const colorsAmount = 3;
    const color: string = function (){
        const randomInt : number = Math.floor(Math.random() * Math.floor(colorsAmount));
        let color : string;
        for(const key in colors){
            if(key as unknown as number === randomInt)
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                color = colors[key];
                return color;
            }
        }
        return "#9819b1";

    }();
    return(
        <Avatar src={src} alt={alt} className={className} style={{backgroundColor: color}}/>
    );
}

