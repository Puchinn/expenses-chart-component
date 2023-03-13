function Balance() {
	return (
		<div className='flex w-full items-center justify-between rounded-2xl bg-Soft-red py-7 px-10 text-Very-pale-orange'>
			<div className='space-y-2'>
				<h1 className='text-lg'>My balance</h1>
				<p className='text-3xl'>
					<strong>$921.48</strong>
				</p>
			</div>
			<div>
				<svg
					width='72'
					height='48'
					viewBox='0 0 72 48'
					xmlns='http://www.w3.org/2000/svg'>
					<g fill='none' fillRule='evenodd'>
						<circle fill='#382314' cx='48' cy='24' r='24' />
						<circle stroke='#FFF' strokeWidth='2' cx='24' cy='24' r='23' />
					</g>
				</svg>
			</div>
		</div>
	)
}

export default Balance
