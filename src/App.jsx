import Balance from './components/Balance'
import Chart from './components/Chart'

function App() {
	return (
		<div className='App flex items-center justify-center bg-Cream px-4 py-12 md:h-screen'>
			<div className='w-full max-w-lg space-y-6'>
				<Balance />
				<Chart />
			</div>
		</div>
	)
}

export default App
