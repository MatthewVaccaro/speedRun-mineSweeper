import React, { useEffect } from 'react';

const Box = ({ grid, row, col, breakBox, boxClass, bombClass, value }) => {
	return (
		<div
			className={`box ${boxClass} ${bombClass} `}
			onClick={() => {
				breakBox(row, col);
			}}
		>
			{typeof value === 'number' ? value : `${row}, ${col}`}
		</div>
	);
};

export default Box;
