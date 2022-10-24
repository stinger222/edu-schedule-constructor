import { observer } from "mobx-react";
import { StyledIconButton } from "./IconButton.styled";

interface IProps {
	iconPath?: string,
	onClick?: () => void;
	title?: string
}

const IconButton: React.FC<IProps> = ({iconPath, onClick, title}) => {
	return (
		<StyledIconButton title={title} onClick={onClick}>
			<img src={iconPath}/>
		</StyledIconButton>
	)
}

export default observer(IconButton)
