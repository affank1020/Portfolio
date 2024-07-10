// About.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './style.css';

export default function About({ isVisible }) {
    const sceneRef = useRef(null); // Reference to the div where the canvas will be

    useEffect(() => {
        const { Engine, Render, Runner, Bodies, World, Body, Vector, Mouse, MouseConstraint, Events } = Matter;

        // Create engine
        const engine = Engine.create();
        const { world } = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 2500,
                height: 1000,
                wireframes: false,
                background: 'rgba(17, 17, 17, 0)',
            },
        });

        render.canvas.style.boxSizing = 'border-box';

        Render.run(render);

        // Create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        let centerX = (2.5 * render.options.width) / 5;
        const centerY = render.options.height / 2;

        // Add bodies (bubbles)
        const bubbles = [];
        for (let i = 0; i < 200; i++) {
            const bubble = Bodies.circle(Math.random() * 600, Math.random() * 400, 20, {
                restitution: 0.9,
                render: { fillStyle: 'rgba(216, 155, 0, .25)' },
            });
            bubbles.push(bubble);
        }
        World.add(world, bubbles);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        World.add(world, mouseConstraint);

        // Allow scrolling while interacting with the canvas
        render.canvas.addEventListener('wheel', (event) => {
            event.preventDefault();
        });

        // Attract bubbles to center
        Events.on(engine, 'beforeUpdate', () => {
            bubbles.forEach((bubble) => {
                const direction = Vector.sub({ x: centerX, y: centerY }, bubble.position);
                const forceMagnitude = 0.0005 * bubble.mass;
                const force = Vector.mult(Vector.normalise(direction), forceMagnitude);
                Body.applyForce(bubble, bubble.position, force);
            });
        });

        // Repel bubbles from mouse
        Events.on(mouseConstraint, 'mousemove', (event) => {
            const mousePosition = event.mouse.position;
            bubbles.forEach((bubble) => {
                const direction = Vector.sub(bubble.position, mousePosition);
                const distance = Vector.magnitude(direction);
                if (distance < 100) {
                    const forceMagnitude = 0.02 * bubble.mass;
                    const force = Vector.mult(Vector.normalise(direction), forceMagnitude);
                    Body.applyForce(bubble, bubble.position, force);
                }
            });
        });

        engine.world.gravity.y = 0; // Disables gravity in the vertical direction
        engine.world.gravity.x = 0;

        // Adjust Matter.js center based on window resize
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                centerX = render.options.width / 8;
                console.log('at 700 - ' + width);
            } else if (width < 768) {
                centerX = render.options.width / 7;
                console.log('at 768 - ' + width);
            } else if (width < 1024) {
                centerX = render.options.width / 3;
                console.log('at 1024 - ' + width);
            } else if (width < 1274) {
                centerX = render.options.width / 2;
                console.log('at 1274 - ' + width);
            } else {
                centerX = render.options.width / 1.5;
                console.log('at else - ' + width);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial call to set positions
        handleResize();

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            World.clear(world);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    const opacityClass = isVisible ? 'opacity-100' : 'opacity-0'; // Adjust threshold as needed

    return (
        <section id="about" className={`about-section transition-opacity duration-500 ${opacityClass}`}>
            <div style={{ overflow: 'hidden' }}>
                <div className="container mx-auto bg-navy-darkest flex px-10 py-40 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                        style={{ zIndex: '1', display: 'flex', justifyContent: 'center', position: 'relative' }}
                    >
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gold">
                            Hi, I'm <span className="text-white">Affan.</span>
                            {/* <br className="hidden lg:inline-block" /> */}
                        </h1>
                        <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gold-dark">
                            I'm a Maths and Computer Science student.
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gold-darker">
                            Welcome to my Portfolio! Here are some of the projects I've made and the technical skills I've developed.
                        </p>
                        <div className="flex justify-center">
                            <a href="#projects" className="inline-flex text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-red-darker rounded text-lg">
                                See My Projects
                            </a>
                            <a href="#skills" className="ml-4 inline-flex text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-red-darker hover:text-white rounded text-lg">
                                See My Skills
                            </a>
                        </div>
                        <div
                            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 scene"
                            ref={sceneRef}
                            style={{ display: 'flex', justifyContent: 'flex-start', maxWidth: '100%', position: 'absolute', zIndex: '-1', marginLeft: '-50%' }}
                        >
                            {/* Scene for Matter.js */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
