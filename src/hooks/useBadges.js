import { useEffect, useState } from 'react';

export default function useBadges() {
    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBadges() {
            try {
                const res = await fetch('db.json');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setBadges(data);
            } catch (err) {
                console.error('Error fetching badges:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchBadges();
    }, []);

    return { badges, loading, error };
}
