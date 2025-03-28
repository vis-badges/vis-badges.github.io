import { useEffect, useState } from 'react';

export default function useBadges() {
    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBadges() {
            try {
                const [res1, res2] = await Promise.all([
                    fetch('db.json'),
                    fetch('db-genres.json'),
                ]);

                if (!res1.ok || !res2.ok) {
                    throw new Error(
                        `HTTP error! status: ${res1.status}, ${res2.status}`
                    );
                }

                const [data1, data2] = await Promise.all([
                    res1.json(),
                    res2.json(),
                ]);

                setBadges([...data1, ...data2]);
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
