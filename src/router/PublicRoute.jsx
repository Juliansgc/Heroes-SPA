import { useContext } from "react"
import { AuthContext, AuthProvider } from "../auth"
import { Navigate, useLocation } from "react-router"

export const PublicRoute = ( { children }) => {

    const { logged } = useContext( AuthContext)
    
    return( !logged )
    ? children
    : <Navigate to="/marvel"/>
}