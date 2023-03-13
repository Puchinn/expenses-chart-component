import Bar from './Bar'
import data from '../data'

function Chart() {
	return (
		<div className='space-y-6 rounded-2xl bg-Very-pale-orange px-9 pt-7 pb-12'>
			<h1 className='text-3xl text-Dark-brown'>
				<strong>Spending - Last 7 days</strong>
			</h1>
			<div className='flex items-end justify-around gap-x-1 border-b-2 border-Cream pt-8 pb-7'>
				{data.map(item => {
					return <Bar key={item.day} day={item.day} amount={item.amount} />
				})}
			</div>
			<div className='flex justify-between'>
				<div>
					<h2 className='text-Medium-brown'>Total this month</h2>
					<p className='text-5xl font-bold text-Dark-brown'>$478.33</p>
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
