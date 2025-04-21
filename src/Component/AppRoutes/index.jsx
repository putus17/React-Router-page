import { Route, Routes } from "react-router-dom"
import NotFound from "../../Layout/NotFound"
import Home from "../../Layout/Home"
import User from "../../Layout/User"
import Search from "../../Layout/Search"
import Login from "../../Layout/Login"
import ProtectedRoute from "../ProtectedRoute"
import Dashboard from "../../Layout/Dashboard"
import Products from "../../Layout/Products"
import FeaturedProduct from "../../Layout/FeaturedProduct"
import NewProduct from "../../Layout/NewProducts"
import Signup from "../../Component/SignUp"

export const AppRoutes = ({ isAuthenticated, handleLogin }) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:userID' element={<User />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login onLogin={handleLogin } />} />
            <Route path='/signup' element={<Signup onLogin={handleLogin} />} />
<Route path='/dashboard' element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Dashboard />
    </ProtectedRoute>
} />
<Route path='/products' element={<Products />}>
    <Route
        index
        element={
            <strong
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '16px',
                }}
            >
                Select a category
            </strong>
        }
    />
    <Route path='featured' element={<FeaturedProduct />} />
    <Route path='new' element={<NewProduct />} />
</Route>
<Route path='*' element={<NotFound />} />
        </Routes>
    )
}