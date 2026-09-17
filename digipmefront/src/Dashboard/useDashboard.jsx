import { useState, useEffect } from "react";
import api from "../api/axios";

export function useDashboard(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        api
            .get(url)
            .then((res) => {
                if (isMounted) setData(res.data);
            })
            .catch((err) => {
                if (isMounted) setError(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading, error };
}