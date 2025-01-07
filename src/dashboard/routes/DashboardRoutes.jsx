import { Navigate, Route, Routes } from "react-router-dom"
import { DashBoardPage } from "../pages/DashBoardPage"
import { ProductsPage } from "../pages/ProductsPage"


//export const JournalRoutes = () => {
export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DashBoardPage /> } />
        {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}
        <Route path="/products" element={ <ProductsPage /> } />
    </Routes>
  )
}
