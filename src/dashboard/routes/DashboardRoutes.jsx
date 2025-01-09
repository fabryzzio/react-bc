import { Navigate, Route, Routes } from "react-router-dom"
import { AccountPage, DashBoardPage, DashBoardPage2, DashBoardPage3, DashBoardPage4, NotFoundPage, ProfilePage, ProductsPage } from "../pages/"
import { permissionAuth } from "../../constants";




export const DashboardRoutes = ( { permission = "user2" }) => {
  return (
    <Routes>
      {/* ProductsPage is always accessible */}
      <Route path="/" element={<ProductsPage />} />

      {/* Restricted routes based on profile */}

      {permission === permissionAuth.ADMIN && (
        <>
          <Route path="/dashboard" element={<DashBoardPage title="Home" />} />
          <Route path="/dashboard2" element={<DashBoardPage2 title="Seguridad" />} />
          <Route path="/dashboard3" element={<DashBoardPage3 title="Prendarios" />} />
          <Route path="/dashboard4" element={<DashBoardPage4 title="Personales" />} />
        </>
      )}

      {permission === permissionAuth.USER && (
        <>
          <Route path="/dashboard" element={<DashBoardPage title="Home" />} />
          <Route path="/dashboard3" element={<DashBoardPage3 title="Prendarios" />} />
          <Route path="/dashboard4" element={<DashBoardPage4 title="Personales" />} />
        </>
      )}

      {permission === permissionAuth.DEFAULT && (
        <>
          <Route path="/dashboard" element={<DashBoardPage title="Home" />} />          
        </>
      )}  


      {/* Profile and Account pages are always accessible */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/account" element={<AccountPage />} />

      {/* Not Found route */}
      <Route path="/not-found" element={<NotFoundPage />} />

      {/* Redirect to "/" for invalid URLs */}
      <Route path="/*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}
