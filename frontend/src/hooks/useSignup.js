import React, { useState } from 'react'
import toast from 'react-hot-toast';
import backendUrl from '../components/backendUrl/backendUrl';
import { useAuthContext } from '../context/AuthContext';

export default function useSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const signUp = async ({ fullName, email, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, email, password, confirmPassword, gender })

        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch(`${backendUrl}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, password, confirmPassword, gender })
            })
            const data = await res.json();
            console.log(data);
            if (data.message) {
                toast.success(data.message)
            }
            if (data.error) {
                // toast.error(data.error);
                throw new Error(data.error)
            }
            // localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }
    return { loading, signUp }
}

function handleInputErrors({ fullName, email, password, confirmPassword, gender }) {
    if (!fullName || !email || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all the fields")
        return false
    }
    if (!fullName.includes(' ')) {
        toast.error("Full name must contain at least one space");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match")
        return false
    }
    if (password.length < 4) {
        toast.error("Password must be at least 4 characters")
        return false
    }
    return true
}
