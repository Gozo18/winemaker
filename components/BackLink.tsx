import { useRouter } from "next/router"
import { VscArrowLeft } from "react-icons/vsc"

export default function BackLink() {
  const router = useRouter()

  return (
    <a onClick={() => router.back()} className="backLink">
      <VscArrowLeft /> zpět
    </a>
  )
}
