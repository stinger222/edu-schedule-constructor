import Container from "../../containers/Container/Container"
import { StyledInput } from "./Input.styled"

interface IProps {
	caption?: string,
	type?: "submit" | "text" | "time",
	onChange?: () => void,
}

const Input: React.FC<IProps> = ({ caption, type = 'text', onChange }) => {
	return (
		<Container>
			<StyledInput style={{position: 'absolute', top: "50px"}}>
				<span className="caption">{caption}</span>
				<input
					type={type}
					onChange={onChange}
				/>
			</StyledInput>
		</Container>
	)
}

export default Input
