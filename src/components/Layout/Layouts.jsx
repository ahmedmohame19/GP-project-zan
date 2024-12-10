import Navbar from "../Navbar/Navbar";
import "./Layout.scss"
// import { isTokenExpired } from '../../helpers/JwtUtils';
import { Outlet } from "react-router-dom";

export default function Layout() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('medtoken');
    //     if (!token || isTokenExpired(token)) {
    //         navigate('/login');
    //     }
    // }, [navigate]);
    return (
        <div className="all w-full overflow-hidden">
            <Navbar />
            <Outlet>
            </Outlet>
        </div>
    )
}
