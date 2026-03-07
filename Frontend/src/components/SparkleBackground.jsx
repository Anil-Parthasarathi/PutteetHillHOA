import { useEffect, useState, useRef } from 'react';
import './SparkleBackground.css';

const SparkleBackground = () => {
    const [sparkles, setSparkles] = useState([]);

    // Store latest mouse coords to avoid spawning when standing still
    const lastMouseRef = useRef({ x: -100, y: -100 });
    const sparkleIdRef = useRef(0);

    useEffect(() => {
        let lastSpawnTime = 0;

        const handleMouseMove = (e) => {
            const now = Date.now();
            // Throttle spawning to every 40ms to avoid overwhelming the DOM
            if (now - lastSpawnTime < 40) return;

            // Check distance to ensure we only spawn on meaningful movement
            const dx = e.clientX - lastMouseRef.current.x;
            const dy = e.clientY - lastMouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 10) return; // Only if moved more than 10px

            lastSpawnTime = now;
            lastMouseRef.current = { x: e.clientX, y: e.clientY };

            // Generate 2-4 sparkles per movement tick
            const numSparkles = Math.floor(Math.random() * 3) + 2;
            const newSparkles = [];

            for (let i = 0; i < numSparkles; i++) {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 80 + 30; // Shorter burst range 30-110px
                const durationMs = Math.random() * 800 + 800; // 800-1600ms lifetime

                const id = sparkleIdRef.current++;

                newSparkles.push({
                    id,
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`,
                    animationDuration: `${durationMs / 1000}s`,
                    scale: Math.random() * 0.8 + 0.4,
                    tx: `${Math.cos(angle) * distance}px`,
                    ty: `${Math.sin(angle) * distance}px`,
                });

                // Set a timeout to remove this specific sparkle once its animation finishes
                setTimeout(() => {
                    setSparkles(prev => prev.filter(s => s.id !== id));
                }, durationMs);
            }

            setSparkles(prev => [...prev, ...newSparkles].slice(-60)); // Max 60 particles
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="sparkle-container">
            {sparkles.map(sparkle => (
                <div
                    key={sparkle.id}
                    className="sparkle"
                    style={{
                        left: sparkle.left,
                        top: sparkle.top,
                        animationDuration: sparkle.animationDuration,
                        '--tx': sparkle.tx,
                        '--ty': sparkle.ty,
                        '--scale': sparkle.scale,
                    }}
                />
            ))}
        </div>
    );
};

export default SparkleBackground;
