import '../assets/css/home.css'
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
