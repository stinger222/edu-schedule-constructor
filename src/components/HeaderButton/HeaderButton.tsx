import StyledHeaderButton from "./HeaderButton.styled"

interface IProps {
	children?: any,
	onClick?: () => void,
	active?: boolean
}

const HeaderButton: React.FC<IProps> = ({children, active, onClick}) => {
	return (
		<StyledHeaderButton className={`${active ? 'active' : ''}`}>
			{children}
		</StyledHeaderButton>
	)
}

export default HeaderButton
