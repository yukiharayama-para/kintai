  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';

  const toDoubleDigits = (num)=> {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
    return num;     
  };
  // 日付をHH:MI形式で取得
  const getNowHour = ()=>{
    const date = new Date();
    const hh = toDoubleDigits(date.getHours());
    const mi = toDoubleDigits(date.getMinutes());
    return hh + ':' + mi;
  }
  
  class Main extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          commuteTime:'',
          leftTime:'',
        };
    }

    isCommuted() {
      return Boolean(this.state.commuteTime);
    };

    isExistLeftTime() {
      return Boolean(this.state.leftTime);
    }

    canLeft() {
      return [!this.isCommuted(), this.isExistLeftTime()].some(bool => bool)
    }

    commuteClick(){
      this.setState({
        commuteTime:getNowHour(),
      });
      alert(`${getNowHour()} successfully completed`);
    };

    leaveClick(){
      this.setState({
        leftTime:getNowHour(),
      });
      alert(`${getNowHour()} successfully completed`);
    };

    renderBtn(name, classNm, idName, disabledFunc, onClickFunc){
      return (
        <button className ={classNm} id={idName} disabled={disabledFunc} onClick={onClickFunc}>
            {name}
        </button>
      );
    }
    
    render(){
        const title = "Attendance App";
        const commuting = "Commute";
        const leaving = "Leave";
        let disableCom = this.isCommuted();
        let disableLea = this.canLeft();
        let onClickCom = ()=>this.commuteClick();
        let onClickLea = ()=>this.leaveClick();
        const btnNameCom = !this.isCommuted()? "btn":"btn inview";
        const btnNameLea = !this.canLeft()? "btn":"btn inview";

        return (
          <div>
            <div className = 'title'>{title}</div>
            <div className = 'time'>
              <div>commute：{this.state.commuteTime}</div>
              <div>leave：{this.state.leftTime}</div>
            </div>
            <div className = 'buttonContainer'>
                {this.renderBtn(commuting, btnNameCom, "commute", disableCom, onClickCom)}
                {this.renderBtn(leaving, btnNameLea, "leaving", disableLea, onClickLea)}
            </div>
          </div>
        );
      }
    }

    ReactDOM.render(
      <Main />,
      document.getElementById('root')
    );