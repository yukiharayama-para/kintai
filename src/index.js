import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from "./viewrs/body";

const toDoubleDigits = (num) => {
    return num.toString().length === 1 ? "0" + num : num;
};

const getNowHour = () => {
    const date = new Date();
    const hh = toDoubleDigits(date.getHours());
    const mi = toDoubleDigits(date.getMinutes());
    return hh + ':' + mi;
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commuteTime: '',
            leftTime: '',
            titleDisplayText: 'Attendance App'
        };
    }

    canCommute() {
        return Boolean(this.state.commuteTime);
    };

    isExistLeftTime() {
        return Boolean(this.state.leftTime);
    }

    canLeft() {
        return [!this.canCommute(), this.isExistLeftTime()].some(bool => bool)
    }

    onClickCommute = () => {
        const curTime = getNowHour()
        this.setState({
            commuteTime: curTime,
            titleDisplayText: `commuteTime: ${curTime}`
        });
        alert(`${curTime} successfully completed`);
    };

    onClickLeave = () => {
        const curTime = getNowHour()
        this.setState({
            leftTime: curTime,
            titleDisplayText: `commuteTime: ${curTime}`
        });
        alert(`${curTime} successfully completed`);
    };

    render() {
        return Body(this);
        // return (
        //     <div>
        //         {title(this.state.titleDisplayText)}
        //         {actionHistory(this.state.commuteTime, this.state.leftTime)}
        //         <div className='buttonContainer'>
        //             {actionButton("Commute", this.canCommute(), this.onClickCommute)}
        //             {actionButton("Leave", this.canLeft(), this.onClickLeave)}
        //         </div>
        //     </div>
        // );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);