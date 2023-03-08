import WineyardDoingsItem from "./WineyardDoingsItem"

export default function WineyardDoings({ thisWineyard }: any) {
  return (
    <>
      {thisWineyard[0].doings.map((w: any, i: number) => (
        <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
      ))}
    </>
  )
}
