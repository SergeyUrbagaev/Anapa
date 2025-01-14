import React, { useEffect, useRef, useState } from 'react';
import '../style/scrolling.css';

export default function Scrolling() {
    const marqueeRef = useRef(null);
    const [speed, setSpeed] = useState(10); // Начальная скорость

    useEffect(() => {
        const handleScroll = () => {
            if (marqueeRef.current) {
                const rect = marqueeRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top >= 0 && rect.bottom <= windowHeight) {
                    setSpeed(20); // Замедляем скорость
                } else {
                    setSpeed(10); // Восстанавливаем начальную скорость
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='wrap-scrolling'>
            <div className="scrolling" ref={marqueeRef} style={{ animationDuration: `${speed}s` }}>
                Уютная квартира в Анапе 800 метров до моря
            </div>
        </div>
    );
}