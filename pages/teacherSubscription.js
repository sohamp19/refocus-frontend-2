import React from 'react';

const teacherSubscription = () => {
	return (
		<div>
			<form action='/api/getData' method='get'>
				<input
					type='text'
					placeholder='Enter meet code'
					className='border border-gray-400'
				/>
				<input
					type='submit'
					value='submit'
					className='bg-purple text-white border rounded-full px-2'
				/>
			</form>
		</div>
	);
};

export default teacherSubscription;
