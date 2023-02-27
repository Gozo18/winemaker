import AnalyticsInfoItem from "./AnalyticsInfoItem"

export default function AnalyticsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].analytics.map((w: any, i: number) => (
        <AnalyticsInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
