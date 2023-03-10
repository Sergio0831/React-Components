type VotingBtnProps = {
	icon: JSX.Element;
};

const VotingBtn = ({ icon }: VotingBtnProps) => {
	return <button type='button'>{icon}</button>;
};

export default VotingBtn;
