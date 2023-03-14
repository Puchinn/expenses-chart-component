import Bar from './Bar'
import data from '../data'

function Chart() {
	const today =
		new Date().getDay() - 1 < 0 ? data.length - 1 : new Date().getDay() - 1

	return (
		<div className='space-y-6 rounded-2xl bg-Very-pale-orange px-4 pt-7 pb-6 sm:px-9 sm:pb-12'>
			<h1 className='text-3xl text-Dark-brown'>
				<strong>Spending - Last 7 days</strong>
			</h1>
			<div className='flex items-end justify-around gap-x-2 border-b-2 border-Cream pt-8 pb-7 sm:gap-x-3'>
				{data.map((item, i) => {
					if (i === today) {
						return <Bar key={item.day} day={item.day} amount={item.amount} today={true} />
					}
					return <Bar key={item.day} day={item.day} amount={item.amount} today={false} />
				})}
			</div>
			<div className='flex justify-between'>
				<div>
					<h2 className='text-Medium-brown'>Total this month</h2>
					<p className='text-3xl font-bold text-Dark-brown'>$478.33</p>
				</div>
				<div className='self-end'>
					<p className='text-end font-bold text-Dark-brown'>+2.4%</p>
					<p className='text-Medium-brown'>from last month</p>
				</div>
			</div>
		</div>
	)
}

export default Chart
