import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "../config";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBalance = async () => {
            try{
                const response = await axios.get(`${API_BASE_URL}/account/balance`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance);
            } catch(error){
                console.error("Error fetching balance:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBalance();
    }, []);

    return <div>
        <Appbar />
        <div className="m-8">
            {loading ? (
                <div> Loading Balance...</div>
            ) : (
                <Balance value={parseFloat(balance).toFixed(2)} />
            )}
            <Users />
        </div>
    </div>
}