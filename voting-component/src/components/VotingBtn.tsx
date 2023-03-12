import styles from './VotingBtn.module.css';

type VotingBtnProps = {
	icon: JSX.Element;
	name: string;
	ariaLabel: string;
	ariaPressed: boolean;
	btnRef: React.Ref<HTMLButtonElement>;
	handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleOnKeyPress: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const VotingBtn = ({
	icon,
	name,
	ariaLabel,
	ariaPressed,
	btnRef,
	handleOnClick,
	handleOnKeyPress,
}: VotingBtnProps) => {
	return (
		<button
			type='button'
			className={`${styles['voting-btn']} `}
			onClick={handleOnClick}
			onKeyDown={handleOnKeyPress}
			aria-pressed={ariaPressed}
			aria-label={ariaLabel}
			name={name}
			ref={btnRef}
		>
			{icon}
		</button>
	);
};

export default VotingBtn;
