import React, { useState } from 'react';
import './App.css';
import Grid from './grid';

function App() {
	// Need to create the matrix (10 x 10)
	const [ rows, setRows ] = useState(10);
	const [ cols, setCols ] = useState(10);
	const [ grid, setGrid ] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));

	function arrayClone(arr) {
		return JSON.parse(JSON.stringify(arr));
	}

	const addBombs = () => {
		let bombCount = rows;
		let clone = arrayClone(grid);
		for (var R = 0; R < rows; R++) {
			for (var C = 0; C < cols; C++) {
				let num = Math.floor(Math.random() * 8);
				if (bombCount > 0) {
					if (num === 1) {
						clone[R][C] = 'bomb';
						bombCount--;
					}
				}
			}
		}
		setGrid(clone);
	};

	function countBombs(current, arr) {
		var bombCount = 0;
		let clone = arrayClone(grid);
		arr.forEach((value) => {
			const row = value[0];
			const col = value[1];

			if (grid[row][col] === 'bomb') {
				bombCount++;
			}
		});
		// If no bombs are found then...
		if (bombCount === 0) {
			// Set the current brick to 0 (so it can't be searched again)
			clone[current[0]][current[1]] = 0;
			setGrid(clone);
			// loop over the surrounding spots
			arr.forEach((value) => {
				// For each of the spots - check to see if they have a value. If they don't check them
				if (grid[value[0]][value[1]] === false) {
					console.log('crazy if -->', value);
					// using REC run the count bombs and checker function. This should end once all spots have a number
					// ! return countBombs([ value[0], value[1] ], checker(value[0], value[1])); // Doesn't work - creates infinite loop
				}
			});
		}
		else {
			clone[current[0]][current[1]] = bombCount;
			setGrid(clone);
		}
	}

	function checker(row, col) {
		const spots = [
			[ row - 1, col - 1 ],
			[ row - 1, col ],
			[ row - 1, col + 1 ],
			[ row, col - 1 ],
			[ row, col + 1 ],
			[ row + 1, col - 1 ],
			[ row + 1, col ],
			[ row + 1, col + 1 ]
		];

		const trueSpots = [];

		spots.forEach((value) => {
			const row = value[0];
			const col = value[1];
			if (col != -1 && col != 10 && row != -1 && row != 10) {
				trueSpots.push(value);
			}
		});
		return trueSpots;
	}

	function breakBox(row, col) {
		let clone = arrayClone(grid);
		if (clone[row][col] === 'bomb') {
			console.log('YOU LOSE');
		}
		else {
			countBombs([ row, col ], checker(row, col));
		}
	}

	return (
		<div className="App">
			<Grid grid={grid} rows={rows} cols={cols} breakBox={breakBox} />
			<button
				onClick={() => {
					addBombs();
				}}
			>
				Bombs
			</button>
		</div>
	);
}

export default App;
