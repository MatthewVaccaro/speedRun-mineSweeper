import React, { useEffect } from 'react';

const Box = ({ grid, row, col, breakBox, boxClass, bombClass, value, start }) => {
const colors = [ 'white', 'green', 'yellow', 'orange', 'red','red', 'red', 'red' ]


	return (
        <>
        {grid[row][col] === false || grid[row][col] === 'bomb' ? <div
			className={`box ${boxClass} ${bombClass} ${ start === true ? 'hover' : ''} `}
			onClick={() => {
				breakBox(row, col);
			}}
		/> : <div
			className={`box flex bg `}
		>
			<p className={`${value >= 4 ? colors[4] : colors[value]}`}>{typeof value === 'number' ? value : ``}</p>
			
		</div> }
        </>
	);
};

export default Box;
