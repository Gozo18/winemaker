import HarvestInfoItem from "./HarvestInfoItem"
import styles from "../styles/Wine.module.scss"

export default function HarvestInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].harvest.map((w: any, i: number) => (
        <HarvestInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
