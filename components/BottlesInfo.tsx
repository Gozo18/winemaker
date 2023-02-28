import BottleInfoItem from "./BottleInfoItem"

export default function BottlesInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].bottles.map((w: any, i: number) => (
        <BottleInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
