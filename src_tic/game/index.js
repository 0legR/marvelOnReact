import React from 'react';
import Board from '../border/index';
import calculateWinner from '../winner/index';

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			xIsNext: true,
			stepNumber: 0
		};
	}

	handleClick(i) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const squares = current.squares.slice(0, this.state.stepNumber + 1);

		if (calculateWinner(squares) || squares[i]) { return; };

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares: squares
			}]),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) ? false : true
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? 'Move #' + move : 'Game start';

			return (
				<li key={move}>
					<a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
				</li>
			);
		});

		let status;
		if (winner) {
			status = 'Winner is '+winner;
		}else{
			status = 'Next player => '+this.state.xIsNext ? 'X' : 'O';
		};

		return (
			<div className="game">
				<div className="board">
					<Board
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default Game;