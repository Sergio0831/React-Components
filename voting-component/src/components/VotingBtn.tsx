import styles from './VotingBtn.module.css';

type VotingBtnProps = {
	icon: JSX.Element;
	name: string;
	ariaLabel: string;
	ariaPressed: boolean;
	handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const VotingBtn = ({
	icon,
	name,
	ariaLabel,
	ariaPressed,
	handleOnClick,
}: VotingBtnProps) => {
	return (
		<button
			type='button'
			className={`${styles['voting-btn']} `}
			onClick={handleOnClick}
			aria-pressed={ariaPressed}
			aria-label={ariaLabel}
			name={name}
		>
			{icon}
		</button>
	);
};

export default VotingBtn;
