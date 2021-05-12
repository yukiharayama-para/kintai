   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';

    // const Btn = (props) => {
    //   return (
    //     <button className="btn">
    //       {props}
    //     </button>
    //   );
    // }

  const getNowHour = ()=>{
    const date1 = new Date();
    const dateCommute = date1.getHours() + ":" + date1.getMinutes();
    return dateCommute
  }

  class Main extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          isCommute: false,
          commuteTime:'',
          isLeft: false,
          leftTime:'',
        };
    }
    
    commuteClick(){
      if(this.state.isCommute){
        alert("already commuted");
        return;
      }
      this.setState({
        isCommute: !this.state.isCommute,
        commuteTime:getNowHour(),
      });
      alert(`${getNowHour()} successfully completed`);
    };
    leaveClick(){
      if(!this.state.isCommute || this.state.isLeft){
        alert("already left");
        return;
      }
      this.setState({
        isLeft: !this.state.isLeft,
        leftTime:getNowHour(),
      });
      alert(`${getNowHour()} successfully completed`);
    };
    renderButton(btn){
      if(btn==="Commute"){
        return (
          <button className="btn" onClick={()=>this.commuteClick()}>
              {btn}
          </button>
        );
      }else{
        return (
          <button className="btn" onClick={()=>this.leaveClick()}>
              {btn}
          </button>
        );
      }
    }
    render(){
        const title = "Attendance App";
        const commuting = "Commute";
        const leaving = "Leave";

        return (
          <div>
            <div className = 'title'>{title}</div>
            <div className = 'time'>
              <div>commute：{this.state.commuteTime}</div>
              <div>leave：{this.state.leftTime}</div>
            </div>
            <div className = 'buttonContainer'>
                {this.renderButton(commuting)}
                {this.renderButton(leaving)}
            </div>
          </div>
        );
      }
    }
    // class Square extends React.Component {
    //   render() {
    //     return (
    //       <button
    //         className="square"
    //         onClick={()=> this.props.onClick()}
    //         >
    //         {this.props.value}
    //       </button>
    //     );
    //   }
    // }

    // class Board extends React.Component {
    //   renderSquare(i) {
    //     return (
    //       <Square
    //         value={this.props.squares[i]}
    //         onClick={() => this.props.onClick(i)}
    //       />
    //     );
    //   }

    //   render() {
    //     return (
    //       <div>
    //         <div className="board-row">
    //           {this.renderSquare(0)}
    //           {this.renderSquare(1)}
    //           {this.renderSquare(2)}
    //         </div>
    //         <div className="board-row">
    //           {this.renderSquare(3)}
    //           {this.renderSquare(4)}
    //           {this.renderSquare(5)}
    //         </div>
    //         <div className="board-row">
    //           {this.renderSquare(6)}
    //           {this.renderSquare(7)}
    //           {this.renderSquare(8)}
    //         </div>
    //       </div>
    //     );
    //   }
    // }

//     class Game extends React.Component {
//       constructor(props){
//         super(props);
//         this.state = {
//           history:[{
//             squares: Array(9).fill(null),
//           }],
//           stepNumber: 0,
//           xIsNext: true,
//         };
//       }
//       handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]){
//           return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//           history: history.concat([{
//             squares: squares,
//           }]),
//           stepNumber: history.length,
//           xIsNext: !this.state.xIsNext,
//         });
//       }
      
//       jumpTo(step){
//         this.setState({
//           stepNumber: step,
//           xIsNext: (step %2) === 0,
//         });
//       }

//       render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step, move) =>{
//           const desc = move ?
//             'Go to move #' + move :
//             'Go to game start';
//           return (
//             <li key={move}>
//               <button onClick={() => this.jumpTo(move)}>{desc}</button>
//             </li>
//           );
//         });

//         let status;
//         if (winner) {
//           status = 'Winner: ' + winner;
//         } else {
//           status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }       

//         return (
//           <div className="game">
//             <div className="game-board">
//               <Board 
//                 squares={current.squares}
//                 onClick={(i) => this.handleClick(i)}
//               />

//             </div>
//             <div className="game-info">
//               <div>{status}</div>
//               <ol>{moves}</ol>
//             </div>
//           </div>
//         );
//       }
//     }

// const calculateWinner = (squares)=>{
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (const val of lines) {
//     const [a, b, c] = val;
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
//     // ========================================

    ReactDOM.render(
      <Main />,
      document.getElementById('root')
    );