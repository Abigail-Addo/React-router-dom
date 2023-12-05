import '../assets/css/home.module.css'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
           
            <Outlet />

        </>
    )
}

export default Home
