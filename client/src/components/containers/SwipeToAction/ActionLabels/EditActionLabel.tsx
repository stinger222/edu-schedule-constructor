import { IActionLabelProps } from "../../../../core/types/types"
import EditIcon from "../../../../assets/icons/edit.svg?react"

const EditActionLabel = ({ className }: IActionLabelProps) => {
  return (
    <div className={className} style={{background: "#2677e8"}}>
      <EditIcon fill="white"/>
    </div>
  )
}

export default EditActionLabel
