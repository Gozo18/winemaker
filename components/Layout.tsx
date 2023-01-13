import Nav from "./Nav"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Layout({children}: any) {
  return (
    <>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
    </>
  )
}
