import { CustomIconProps } from "./CustomIcon.type"
export function CustomIcon(props: CustomIconProps) {
  const {icon: Icon} = props
    return (
    <div className="rounded-md
     p-2">
      <Icon strokeWidth ={1} className=" w-5 h-5" />
    </div>
  )
}
