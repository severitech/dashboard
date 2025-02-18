import { CardSumaryProps } from "./CardSumary.types";
import { CustomIcon } from "@/components/Customicon";
export function CardSumary(props: CardSumaryProps) {
  const { icon, total, average, title, tooltip } = props;
  return (
    <div
      className=" shadow-md bg-background rounded-xl  p-5 py-3
    hover:shadow-lg transition"
    >
      <div className="flex justify-between">
        <CustomIcon icon={icon} />
        {title}
        </div>
    </div>
  );
}
