import FiltersInfoItem from "./FiltersInfoItem"

export default function FiltersInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].filters.map((w: any, i: number) => (
        <FiltersInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
