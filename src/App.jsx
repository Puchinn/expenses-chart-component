import Balance from './components/Balance'
import Chart from './components/Chart'

function App() {
	return (
		<div className='App flex h-screen items-center justify-center bg-Cream'>
			<div className='w-full max-w-lg space-y-6'>
				<Balance />
				<Chart />
			</div>
		</div>
	)
}

export default App
