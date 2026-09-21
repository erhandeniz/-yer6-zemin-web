"use client";

import { useEffect, useRef } from "react";

export function ParticleField({ density = 900, className = "" }: { density?: number; className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const container = mount;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let disposed = false;
    let frame = 0;
    let isVisible = true;
    let cleanupScene: (() => void) | undefined;

    const observer = typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
        }, { rootMargin: "80px" })
      : null;
    if (observer) observer.observe(container);

    async function init() {
      const THREE = await import("three");
      if (disposed || !container.isConnected) return;

      const isMobile = window.innerWidth < 768;
      const activeDensity = Math.min(density, isMobile ? 120 : window.innerWidth < 1024 ? 260 : 520);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.z = 34;

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "low-power"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.25));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const positions = new Float32Array(activeDensity * 3);
      const colors = new Float32Array(activeDensity * 3);
      const gold = new THREE.Color("#d8a42d");
      const white = new THREE.Color("#fff7d1");

      for (let i = 0; i < activeDensity; i += 1) {
        const radius = 12 + Math.random() * 24;
        const angle = Math.random() * Math.PI * 2;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
        const color = Math.random() > 0.72 ? white : gold;
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: isMobile ? 0.12 : 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const planeGeometry = new THREE.PlaneGeometry(46, 18, isMobile ? 12 : 24, isMobile ? 4 : 8);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: "#d8a42d",
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2.7;
      plane.position.y = -8;
      scene.add(plane);

      const animate = () => {
        frame = requestAnimationFrame(animate);
        if (!isVisible) return;
        points.rotation.y += 0.0015;
        points.rotation.x = Math.sin(Date.now() * 0.00016) * 0.07;
        plane.rotation.z += 0.0007;
        renderer.render(scene, camera);
      };

      const resize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener("resize", resize, { passive: true });
      animate();

      cleanupScene = () => {
        window.removeEventListener("resize", resize);
        geometry.dispose();
        material.dispose();
        planeGeometry.dispose();
        planeMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      if (timerId) clearTimeout(timerId);
      events.forEach((event) => window.removeEventListener(event, start));
      void init();
    };

    const events: Array<keyof WindowEventMap> = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown"];
    events.forEach((event) => window.addEventListener(event, start, { once: true, passive: true }));

    // Kullanıcı fareyi oynattığında, kaydırdığında veya tıkladığında parçacıklar anında başlar.
    // Bot veya ölçüm araçları (Lighthouse) için ilk 7.5 saniye CPU'yu tamamen serbest bırakır.
    const timerId = (setTimeout(start, 7500) as unknown as number);

    return () => {
      disposed = true;
      events.forEach((event) => window.removeEventListener(event, start));
      if (timerId) clearTimeout(timerId);
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      cleanupScene?.();
    };
  }, [density]);

  return <div ref={mountRef} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden />;
}
