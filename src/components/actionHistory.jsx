import React from "react";

export const actionHistory = (commuteTime, leftTime) => {
    return (
        <div className='time'>
            <div>commute：{commuteTime}</div>
            <div>leave：{leftTime}</div>
        </div>
    )
}
