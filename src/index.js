import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Btn from "./components/Btn";
import Time from "./components/Time";
import IndexView from "./views/Index.view";

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
        };
    }

    canCommute = () => Boolean(this.state.commuteTime);

    isExistLeftTime = () => Boolean(this.state.leftTime);

    canLeft = () => [!this.canCommute(), this.isExistLeftTime()].some(bool => bool);

    setCommuteTime = () => {
        const f = () => {}
        const curTime = getNowHour();
        this.setState({
            commuteTime: curTime,
        });
        alert(`${curTime} successfully completed`);
    };

    setLeftTime = () => {
        const curTime = getNowHour();
        this.setState({
            leftTime: curTime,
        });
        alert(`${curTime} successfully completed`);
    };

    handleView = () => ({
        default: IndexView
    });

    render() {
        return (
            // <IndexView/>
            <div>
                <div className='title'>Attendance App</div>
                {Time(this.state.commuteTime, this.state.leftTime)}
                <div className='buttonContainer'>
                    {Btn("Commute", this.canCommute(), this.setCommuteTime)}
                    {Btn("Leave", this.canLeft(), this.setLeftTime)}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);