import {title} from "../components/title";
import {actionHistory} from "../components/actionHistory";
import {actionButton} from "../components/actionButton";

const Body = (props)=>{
    return (
        <div>
            {title(props.state.titleDisplayText)}
            {actionHistory(props.state.commuteTime, props.state.leftTime)}
            <div className='buttonContainer'>
                {actionButton("Commute", props.canCommute(), props.onClickCommute)}
                {actionButton("Leave", props.canLeft(), props.onClickLeave)}
            </div>
        </div>
    );
}

export default Body