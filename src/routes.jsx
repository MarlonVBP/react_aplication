import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Login from './pages/Login'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
