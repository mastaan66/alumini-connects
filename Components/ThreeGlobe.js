// components/ThreeGlobe.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeGlobe = () => {
  const mountRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, globe;

    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Orbit controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.rotateSpeed = 0.35;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Globe geometry
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeMaterial = new THREE.MeshPhongMaterial({ color: 0x7fd0eb, shininess: 10 });
    globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeRef.current = globe; // Store reference for animation
    scene.add(globe);

    // Clickable sphere
    const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const clickableSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    clickableSphere.position.set(2, 0, 0); // Example position
    scene.add(clickableSphere);

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Event listeners for mouse interaction
    const onDocumentMouseMove = (event) => {
      event.preventDefault();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(clickableSphere);

      if (intersects.length > 0) {
        clickableSphere.scale.set(1.2, 1.2, 1.2);
      } else {
        clickableSphere.scale.set(1, 1, 1);
      }
    };

    const onDocumentMouseDown = (event) => {
      event.preventDefault();

      const intersects = raycaster.intersectObject(clickableSphere);

      if (intersects.length > 0) {
        console.log('Clicked on the sphere!');
        // Add your click action here
      }
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mousedown', onDocumentMouseDown, false);

    // Animate function
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Rotate globe
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Clean-up function
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mousedown', onDocumentMouseDown);
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.addEventListener('dblclick', null, false);
      mountRef.current.removeChild(renderer.domElement);
      renderer.renderLists.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ThreeGlobe;
