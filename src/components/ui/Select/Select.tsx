import { IOption } from "../../../core/types/types"
import { StyledSelect } from "./Select.styled"


interface IProps {
	caption?: string,
 	options: IOption[],
	selectedOption: IOption | null,
	onChange: (value: IOption | null) => void
}

const Select: React.FC<IProps> = ({ caption, options, selectedOption, onChange }) => {
	return (
		<StyledSelect>
			<span className="value">{selectedOption?.label || '<Не выбрано>'}</span>
			<button className="btn btn-close" onClick={() => onChange(null)}>&times;</button>
			<span className="divider"></span>
			<span className="caret"></span>
			
			<ul className="options">
				{options.map(o => ( 
					<li
						className={`option ${o.id === selectedOption?.id ? 'selected' : ''}`}
						onClick={() => onChange(o)}
						key={o.id}
					>
						{o.label}
					</li>
				))}
			</ul>
		</StyledSelect>
	)
}

export default Select
