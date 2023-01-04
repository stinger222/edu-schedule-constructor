import { Icons } from "../../../core/types/types"
import * as icons from '../../../assets/icons'

interface IProps {
	name: Icons
}

const Icon: React.FC<IProps> = ({ name }) => {
	
	const IconComponent = icons[name]

	return (
		IconComponent ? <IconComponent/> : null
	)
}

export default Icon
