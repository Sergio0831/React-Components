import { useState } from 'react';
import VotingBtn from './components/VotingBtn';
import { ThumbsDown, ThumbsUp } from './icons';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.container}>
			<h1>Was this article helpful?</h1>
			<div className='votingBtns'>
				<VotingBtn icon={<ThumbsUp />} />
				<VotingBtn icon={<ThumbsDown />} />
			</div>
			<p>5 out of 6 found this helpful</p>
			<p>
				Have more questions? <span>Submit a request</span>
			</p>
		</div>
	);
}

export default App;
