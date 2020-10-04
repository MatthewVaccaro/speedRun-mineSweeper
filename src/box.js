import React, { useEffect } from 'react';

const Box = ({ grid, row, col, breakBox, boxClass, bombClass, value }) => {



	return (
        <>
        {grid[row][col] === false || grid[row][col] === 'bomb' ? <div
			className={`box ${boxClass} ${bombClass}`}
			onClick={() => {
				breakBox(row, col);
			}}
		/> : <div
			className={`box ${boxClass} ${bombClass} clicked`}
			onClick={() => {
				breakBox(row, col);
			}}
		>
			{typeof value === 'number' ? value : ``}
		</div> }
        </>
	);
};

export default Box;
