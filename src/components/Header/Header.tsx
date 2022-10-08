import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";

export default function Header() {
	return (
		<StyledHeader>
			<IconButton
				iconPath={require('../../assets/add-icon.png')}
			/>
			<IconButton
				iconPath={require('../../assets/add-icon.png')}
			/>
			<IconButton
				iconPath={require('../../assets/add-icon.png')}
			/>
			<IconButton
				iconPath={require('../../assets/add-icon.png')}
			/>
		</StyledHeader>
	)
}
