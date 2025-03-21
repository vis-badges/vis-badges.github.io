import { useEffect, useState } from 'react';

export default function useQuantitativeBadges() {
    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBadges() {
            try {
                const res = await fetch('./quantitativeBadges.json', {});
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                console.log('Fetched ordinal badges:', data);
                // Check if data is wrapped in an object
                if (data.badges) {
                    setBadges(data.badges);
                } else {
                    setBadges(data);
                }
            } catch (err) {
                console.error('Error fetching badges:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchBadges();
    }, []);

    return { quantitativeBadges: badges, loading, error };
}
