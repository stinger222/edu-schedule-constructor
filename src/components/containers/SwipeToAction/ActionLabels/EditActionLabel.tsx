import { IActionLabelProps } from "../../../../core/types/types"
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit.svg"

const EditActionLabel: React.FC<IActionLabelProps> = ({ className }) => {
  return (
    <div className={className} style={{background: "#2677e8"}}>
      <EditIcon fill="white"/>
    </div>
  )
}

export default EditActionLabel
