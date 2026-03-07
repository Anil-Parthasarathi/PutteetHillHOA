import { useEffect, useState } from 'react';
import './SparkleBackground.css';

const SparkleBackground = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        // Generate random sparkles
        const generateSparkles = () => {
            const newSparkles = [];
            const numSparkles = 50; // Adjust for density

            for (let i = 0; i < numSparkles; i++) {
                newSparkles.push({
                    id: i,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    scale: Math.random() * 0.5 + 0.5,
                });
            }
            setSparkles(newSparkles);
        };

        generateSparkles();
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
                        animationDelay: sparkle.animationDelay,
                        transform: `scale(${sparkle.scale})`
                    }}
                />
            ))}
        </div>
    );
};

export default SparkleBackground;
