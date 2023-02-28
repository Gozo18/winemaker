import JarsInfoItem from "./JarsInfoItem"

export default function JarsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].jars.map((w: any, i: number) => (
        <JarsInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
