function Bar({ day, amount }) {
	const altura = Math.round(amount) * 3
	return (
		<div className='group relative w-min cursor-pointer space-y-3'>
			<div className='absolute -top-9 -left-3 hidden w-min rounded-md bg-Dark-brown py-2 px-3 font-semibold tracking-wide group-hover:block'>
				<p className='text-Very-pale-orange'>{amount}</p>
			</div>
			<div
				className={`mx-auto h-[${altura}px] w-12 rounded-md bg-Soft-red group-hover:bg-Cyan`}></div>
			<p className='text-center text-Medium-brown'>{day}</p>
		</div>
	)
}

export default Bar
