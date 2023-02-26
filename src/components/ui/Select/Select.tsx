import { StyledSelect } from "./Select.styled"

interface IOption {
	id: string,
	label: string
}

interface IProps {
	caption?: string,
 	options?: IOption[],
	onChange?: (value?: IOption) => void
}

const Select: React.FC<IProps> = ({ caption, options, onChange }) => {
	return (
		<StyledSelect>
			<span className="value">Option 1</span>
			<button className="btn btn-close">&times;</button>
			<span className="divider"></span>
			<span className="caret"></span>
			
			<ul className="options">
				{options?.map(i => (
					<li className="option">{i.label}</li>
				))}
				{!options?.[0] && <li>{"Тут нихуя нету)00)"}</li>}
			</ul>
		</StyledSelect>
	)
}

Select.defaultProps = {
	options: [
		{label: 'Математика', id:'fkmi-3fdd-d342'},
		{label: 'Анонизм', id:'gj39-fn39-fg7c'},
	]
}

export default Select
