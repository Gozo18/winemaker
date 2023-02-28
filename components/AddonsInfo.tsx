import AddonsInfoItem from "./AddonsInfoItem"

export default function AddonsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].addons.map((w: any, i: number) => (
        <AddonsInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
