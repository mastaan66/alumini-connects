import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeGlobe = () => {
  const mountRef = useRef(null);
  const globeRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let scene, camera, renderer, globe, controls;

    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Transparent background
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Orbit controls setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.rotateSpeed = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Disable zoom and pan
    controls.enableZoom = false;
    controls.enablePan = false;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Globe
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeTexture = new THREE.TextureLoader().load('globe.jpg');
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: globeTexture,
      color: 0xffffff,
      shininess: 20,
      specular: 0x111111,
      transparent: false,
      opacity: 1,
    });

    globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.position.set(0, 0, 0);
    globeRef.current = globe;
    scene.add(globe);

    // Animation
    const animate = () => {
      if (isAnimating) {
        requestAnimationFrame(animate);
      }

      controls.update();

      if (globeRef.current) {
        globeRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Click event handling
    const handleClick = (event) => {
      setIsAnimating(!isAnimating);
    };

    mountRef.current.addEventListener('click', handleClick);

    // Prevent scrolling on the mountRef element
    const preventScroll = (event) => {
      event.preventDefault();
    };

    mountRef.current.addEventListener('wheel', preventScroll, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      mountRef.current.removeEventListener('click', handleClick);
      mountRef.current.removeEventListener('wheel', preventScroll);
    };
  }, [isAnimating]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ThreeGlobe;
