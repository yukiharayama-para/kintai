import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const toDoubleDigits = (num) => {
    num += "";
    if (num.length === 1) {
        num = "0" + num;
    }
    return num;
};
// 日付をHH:MI形式で取得
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

    canCommute() {
        return Boolean(this.state.commuteTime);
    };

    isExistLeftTime() {
        return Boolean(this.state.leftTime);
    }

    canLeft() {
        return [!this.canCommute(), this.isExistLeftTime()].some(bool => bool)
    }

    clickBtn(state) {
        const curTime = getNowHour();
        this.setState({
            [state]: curTime,
        });
        alert(`${curTime} successfully completed`);
    };

    creatBtnComponent(name, classNm, idName, disabledFunc, onClickFunc) {
        return (
            <button className={classNm} id={idName} disabled={disabledFunc} onClick={onClickFunc}>
                {name}
            </button>
        );
    }
    createBtnName(bool){
        return bool? "btn" : "btn disable";
    }

    render() {
        const disableCommute = this.canCommute();
        const disableLeave = this.canLeft();
        const onClickCommute = () => this.clickBtn('commuteTime');
        const onClickLeave = () => this.clickBtn('leftTime');
        const btnNameCommute = this.createBtnName(!disableCommute);
        const btnNameLeave = this.createBtnName(!disableLeave);


        return (
            <div>
                <div className='title'>Attendance App</div>
                <div className='time'>
                    <div>commute：{this.state.commuteTime}</div>
                    <div>leave：{this.state.leftTime}</div>
                </div>
                <div className='buttonContainer'>
                    {this.creatBtnComponent("Commute", btnNameCommute, "commute", disableCommute, onClickCommute)}
                    {this.creatBtnComponent("Leave", btnNameLeave, "leaving", disableLeave, onClickLeave)}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);