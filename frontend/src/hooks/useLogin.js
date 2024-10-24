import React, { useState } from 'react'
import backendUrl from '../components/backendUrl/backendUrl';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const login = async ({ email, password }) => {
        const success = handleInputErrors({ email, password })
        if (!success) return;
        setLoading(true)
        try {
            const res = await fetch(`${backendUrl}/auth/login`, {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json();
            if (data.error) {
                // toast.error(data.error);
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)

        }
    }
    return { loading, login }
}
export default useLogin

function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error("Please fill in all the fields")
        return false
    }
    return true
}
