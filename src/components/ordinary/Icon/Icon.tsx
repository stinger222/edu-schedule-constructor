import { Icons } from "../../../core/types/types"
import * as icons from "../../../assets/icons"

interface IProps {
	name: Icons,
	fill?: string
}

const Icon: React.FC<IProps> = ({ name, fill }) => {
	
	const IconComponent = icons[name]

	return (
		IconComponent ? <IconComponent className="icon" fill={fill}/> : null
	)
}

export default Icon
