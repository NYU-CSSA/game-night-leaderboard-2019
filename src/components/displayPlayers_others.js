import React from 'react';

export default function DisplayOtherFivePlayer({ nickname, score, rank }) {
    return (
        <div className={`otherFive ${rank}`}>
            <div className={"rank"}>{rank}</div>
            <div className={"nickname"}>{nickname}</div>
            <div className={"score"}>{score}</div>
        </div>
    )
}