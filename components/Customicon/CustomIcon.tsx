import { CustomIconProps } from "./CustomIcon.type"
export function CustomIcon(props: CustomIconProps) {
  const {icon: Icon} = props
    return (
    <div>
      <Icon strokeWidth ={1} className=" w-4 h-4" />
    </div>
  )
}
