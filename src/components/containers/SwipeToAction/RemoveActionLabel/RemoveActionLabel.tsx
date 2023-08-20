import { IActionLabelProps } from "../../../../core/types/types"
import { ReactComponent as TrashCan } from "../../../../assets/icons/trash-can.svg"

const RemoveActionLabel: React.FC<IActionLabelProps> = ({ className }) => {
  return (
    <div className={className} style={{background: "#e82626"}}>
      <TrashCan fill="white"/>
    </div>
  )
}

export default RemoveActionLabel
