import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../css/gridRight.css';

const GridBackgroundRight = (props) => {
    const gridContainerRef = useRef(null);
    const { dotCount } = props;

    useEffect(() => {
        const GridContainerRight = gridContainerRef.current;

    // Clear existing elements
    GridContainerRight.innerHTML = '';

    // Create new elements
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('element');
        GridContainerRight.appendChild(dot);
    }

    // Select all elements
    const dotAll = GridContainerRight.querySelectorAll('.element');

    // Configure animation
    const animation = anime.timeline({
        targets: dotAll,
        easing: 'easeInOutExpo',
        loop: true,
        delay: anime.stagger(100, { grid: [10, 10], from: 'center' }),
    });

    // Animasi Anime.js
    animation
    .add({
        rotateZ: 180,
    })
    .add({
        borderRadius: 50,
    })
    .add({
        scale: 0.2,
    })
    .add({
        scale: 1,
        borderRadius: 0
    });

    // Cleanup
    return () => {
        animation.pause();
    };
    }, [dotCount]);

    return <div ref={gridContainerRef} className="GridContainerRight"></div>;
};

export default GridBackgroundRight;