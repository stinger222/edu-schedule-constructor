import { IActionLabelProps } from "../../../../core/types/types"
import { ReactComponent as TrashCanIcon } from "../../../../assets/icons/trash-can.svg"

const RemoveActionLabel: React.FC<IActionLabelProps> = ({ className }) => {
  return (
    <div className={className} style={{background: "#e82626"}}>
      <TrashCanIcon fill="white"/>
    </div>
  )
}

export default RemoveActionLabel
