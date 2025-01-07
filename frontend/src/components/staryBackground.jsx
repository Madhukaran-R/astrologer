import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 200; // Number of stars

    // Star class
    class Star {
      constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
      }

      // Draw the star
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      // Update star position
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0; // Reset position when star goes off screen
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2; // Star size
      const speed = Math.random() * 1 + 0.2; // Star speed
      stars.push(new Star(x, y, radius, speed));
    }
    if (Math.random() < 0.01) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + 10, this.y - 10); // Adjust trail size
      ctx.strokeStyle = "white";
      ctx.stroke();
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.update());
      requestAnimationFrame(animate);
    };

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0; // Clear existing stars
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        const speed = Math.random() * 1 + 0.2;
        stars.push(new Star(x, y, radius, speed));
      }
    };

    window.addEventListener("resize", handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "black",
      }}
    ></canvas>
  );
};

export default StarryBackground;
