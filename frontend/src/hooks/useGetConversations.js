import React, { useEffect, useState } from 'react'
import backendUrl from '../components/backendUrl/backendUrl';
import toast from 'react-hot-toast';

function useGetConversations() {
    const [loading, setLoading] = useState(false);

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${backendUrl}/users`)
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getConversations();
    }, []);
    return { loading, conversations }
}

export default useGetConversations