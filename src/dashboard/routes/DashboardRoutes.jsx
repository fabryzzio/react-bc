import { Navigate, Route, Routes } from "react-router-dom"
import { AccountPage, DashBoardPage, DashBoardPage4, NotFoundPage, ProfilePage, ProductsPage, ComponentsPage, ChangePassPage, HomePage, SeguridadPage, PersonalesPage } from "../pages/"
import { permissionAuth } from "../../constants";




export const DashboardRoutes = ( { permission = "user2" }) => {
  return (
    <Routes>
      {/* ProductsPage is always accessible */}
      <Route path="/" element={<ProductsPage />} />

      {/* Restricted routes based on profile */}

      {permission === permissionAuth.ADMIN && (
        <>
          <Route path="/dashboard" element={<HomePage title="Home" />} />
          <Route path="/seguridad" element={<SeguridadPage title="Seguridad" />} />
          <Route path="/prendarios" element={<PersonalesPage title="Prendarios" />} />
          <Route path="/personales" element={<DashBoardPage4 title="Personales" />} />
          <Route path="/componentes" element={<ComponentsPage title="Components" />} />
        </>
      )}

      {permission === permissionAuth.USER && (
        <>
          <Route path="/dashboard" element={<DashBoardPage title="Home" />} />
          <Route path="/prendarios" element={<DashBoardPage3 title="Prendarios" />} />
          <Route path="/personlaes" element={<DashBoardPage4 title="Personales" />} />
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
      <Route path="/change-password" element={<ChangePassPage />} />

      {/* Not Found route */}
      <Route path="/not-found" element={<NotFoundPage />} />

      {/* Redirect to "/" for invalid URLs */}
      <Route path="/*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}
