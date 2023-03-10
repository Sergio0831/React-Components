import { useRef, useState } from 'react';
import VotingBtn from './components/VotingBtn';
import { ThumbsDown, ThumbsUp } from './icons';
import styles from './App.module.css';

function App() {
	const [likes, setLikes] = useState<number>(5);
	const [dislikes, setDislikes] = useState<number>(1);

	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [isDisliked, setIsDisliked] = useState<boolean>(false);

	const likeBtn = useRef<HTMLButtonElement>(null);
	const dislikeBtn = useRef<HTMLButtonElement>(null);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const button: HTMLButtonElement = e.currentTarget;

		if (button.name === 'like') {
			if (isDisliked) {
				setIsDisliked(false);
				setDislikes((prev) => prev - 1);
			}
			isLiked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
			setIsLiked(!isLiked);
		}

		if (button.name === 'dislike') {
			if (isLiked) {
				setIsLiked(false);
				setLikes((prev) => prev - 1);
			}
			isDisliked
				? setDislikes((prev) => prev - 1)
				: setDislikes((prev) => prev + 1);
			setIsDisliked(!isDisliked);
		}
	};

	const handleOnKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
			e.preventDefault();
			e.currentTarget.getAttribute('aria-label')?.includes('dislike')
				? likeBtn.current?.focus()
				: dislikeBtn.current?.focus();
		}
	};

	return (
		<div className={styles['voting-container']}>
			<div className={styles['voting-body']}>
				<h1 className={styles['voting-title']}>Was this article helpful?</h1>
				<div className={styles['voting-btns']}>
					<VotingBtn
						icon={<ThumbsUp />}
						name='like'
						handleOnClick={handleOnClick}
						handleOnKeyPress={handleOnKeyPress}
						ariaLabel='like article'
						ariaPressed={isLiked}
						btnRef={likeBtn}
					/>
					<VotingBtn
						icon={<ThumbsDown />}
						name='dislike'
						handleOnClick={handleOnClick}
						handleOnKeyPress={handleOnKeyPress}
						ariaLabel='dislike article'
						ariaPressed={isDisliked}
						btnRef={dislikeBtn}
					/>
				</div>
				<p className={styles.muted}>
					{likes} out of {likes + dislikes} found this helpful
				</p>
			</div>
			<p className={styles['voting-footer']}>
				Have more questions? <a href='#'>Submit a request</a>
			</p>
		</div>
	);
}

export default App;
