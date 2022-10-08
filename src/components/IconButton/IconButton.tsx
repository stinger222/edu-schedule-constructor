import { StyledIconButton } from "./IconButton.styled";

interface IProps {
	iconPath?: string,
	onClick?: () => void;
}

const IconButton: React.FC<IProps> = ({iconPath, onClick}) => {
	return (
		<StyledIconButton onClick={onClick}>
			<img src={iconPath}/>
		</StyledIconButton>
	)
}

export default IconButton
