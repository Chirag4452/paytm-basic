import { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "../config";
import { useNavigate } from "react-router-dom"


export const Appbar = () => {

    const [user, setUser] = useState("User");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/user/me`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setUser(response.data.firstName + " " + response.data.lastName);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    fetchUser();
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    }
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex items-center">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello, {user}
            </div>
            
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user && user[0].toUpperCase() || "U"}
                </div>
            </div>
            <button onClick={handleLogout} 
            className="text-sm px-3 py-1 rounded bg-gray-800 text-white hover: bg-gray-900 mr-6">
                Logout
            </button>
        </div>
    </div>
}