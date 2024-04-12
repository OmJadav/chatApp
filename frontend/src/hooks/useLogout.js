import React, { useState } from 'react'
import backendUrl from '../components/backendUrl/backendUrl';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();
    const logOut = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${backendUrl}/auth/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user")
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }
    return { loading, logOut };
}

export default useLogout