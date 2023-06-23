import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../css/gridLeft.css';

const GridBackgroundLeft = (props) => {
    const gridContainerRef = useRef(null);
    const { dotCount } = props;

    useEffect(() => {
        const gridContainer = gridContainerRef.current;

    // Clear existing elements
    gridContainer.innerHTML = '';

    // Create new elements
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('element');
        gridContainer.appendChild(dot);
    }

    // Select all elements
    const dotAll = gridContainer.querySelectorAll('.element');

    // Configure animation
    const animation = anime.timeline({
        targets: dotAll,
        easing: 'easeInOutExpo',
        loop: true,
        delay: anime.stagger(100, { grid: [10, 10], from: 'center' }),
    });

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

    return <div ref={gridContainerRef} className="gridContainer"></div>;
};

export default GridBackgroundLeft;