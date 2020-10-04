import React from 'react';
import Box from './box';

const Gird = ({ grid, cols, rows, breakBox, gameOver }) => {
	const boxArray = [];

	for (var R = 0; R < rows; R++) {
		for (var C = 0; C < cols; C++) {
			const boxClass = grid[R][C] === true ? 'on' : 'off';
			const bombClass = grid[R][C] === 'bomb' && gameOver === true ? 'bomb' : '';
			boxArray.push(
				<Box
					grid={grid}
					row={R}
					col={C}
					key={`${R}_${C}`}
					breakBox={breakBox}
					boxClass={boxClass}
					bombClass={bombClass}
					value={grid[R][C]}
					gameOver={gameOver}
				/>
			);
		}
	}

	return <div className="gridContainer">{boxArray}</div>;
};

export default Gird;
