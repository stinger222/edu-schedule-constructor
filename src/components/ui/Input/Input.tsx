import Container from "../../containers/Container/Container"
import { StyledInput } from "./Input.styled"

interface IProps {
	caption?: string,
	type?: "submit" | "text" | "time",
	onChange?: () => void,
}

const Input: React.FC<IProps> = ({ caption, type = 'text', onChange }) => {
	return (
		<StyledInput>
			<span className="caption">{caption}</span>
			<input
				type={type}
				onChange={onChange}
			/>
		</StyledInput>
	)
}

export default Input