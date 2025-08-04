import { useEffect, useState } from 'react';

export default function useBadges() {
    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBadges() {
            try {
                const urls = [
                    'db.json',
                    'db-list.json',
                    'db-ordinal.json',
                    'db-quantity.json',
                    // 'db-score.json'
                ];

                const responses = await Promise.all(urls.map(url => fetch(url)));
                responses.forEach(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                });

                const data = await Promise.all(responses.map(response => response.json()));

                setBadges(data.flat());
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
