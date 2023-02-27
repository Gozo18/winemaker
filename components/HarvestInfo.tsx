import HarvestInfoItem from "./HarvestInfoItem"

export default function HarvestInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].harvest.map((w: any, i: number) => (
        <HarvestInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
