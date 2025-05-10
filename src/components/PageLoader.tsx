import React, { useState, useEffect } from 'react';

const PageLoader = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fake delay to simulate asset loading; replace this with your own Three.js loader completion
        const timeout = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
                    <p className="text-lg animate-pulse">Loading...</p>
                </div>
            ) : (
                <div className="fade-in">{children}</div>
            )}
        </>
    );
};

export default PageLoader;
