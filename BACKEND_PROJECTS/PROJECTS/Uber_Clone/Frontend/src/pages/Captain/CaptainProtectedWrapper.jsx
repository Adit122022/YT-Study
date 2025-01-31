import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
            return;
        }

        const fetchCaptainProfile = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (res.status === 200) {
                    setCaptain(res.data.captain);
                }
            } catch (error) {
                console.error("Error fetching captain profile:", error);
                localStorage.removeItem("token");
                navigate("/captain-login");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCaptainProfile();
    }, [token, navigate, setCaptain]);

    if (isLoading) return <h1>Loading...</h1>;

    return <>{children}</>;
};

export default CaptainProtectedWrapper;
