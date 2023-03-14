function Bar({ day, amount, today }) {
	const altura = Math.round(amount) * 3.5
	return (
		<div className='group relative w-min cursor-pointer space-y-3'>
			<div className='absolute -top-9 -left-3 z-10 hidden w-min rounded-md bg-Dark-brown p-2 font-semibold tracking-wide group-hover:block'>
				<p className='text-Very-pale-orange'>${amount}</p>
			</div>
			<div
				className={`mx-auto ${
					today ? 'bg-Cyan' : 'bg-Soft-red'
				} w-7 rounded-md group-hover:bg-Cyan  sm:w-12`}
				style={{ height: altura }}></div>
			<p className='text-center text-Medium-brown'>{day}</p>
		</div>
	)
}

export default Bar
