import TendsInfoItem from "./TendsInfoItem"

export default function TendsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].tends.map((w: any, i: number) => (
        <TendsInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
