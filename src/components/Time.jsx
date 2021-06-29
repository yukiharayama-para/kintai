import React from "react";

const Time = (commuteTime,leftTime)=>{
    return(
        <div className='time'>
            <div>commute：{commuteTime}</div>
            <div>leave：{leftTime}</div>
        </div>
    )
}

export default Time