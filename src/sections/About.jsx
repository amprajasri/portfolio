import { useEffect, useRef } from "react";
import { C, ABOUT } from "../data/data";

function About() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const animRef = useRef(null);

  // 🖱️ Canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const ACCENT1 = { r: 167, g: 141, b: 120 };
    const ACCENT2 = { r: 110, g: 71, b: 59 };
    const COUNT = 70;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    class Particle {
      constructor(init = false) {
        this.reset(init);
      }

      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height : canvas.height + 10;
        this.r = 1.2 + Math.random() * 3;
        const c = Math.random() > 0.5 ? ACCENT1 : ACCENT2;
        this.cr = c.r;
        this.cg = c.g;
        this.cb = c.b;
        this.speedY = 0.25 + Math.random() * 0.65;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.opacity = 0;
        this.targetOpacity = 0.35 + Math.random() * 0.5;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.008 + Math.random() * 0.018;
        this.wobbleAmp = 0.2 + Math.random() * 0.5;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 160;
        this.repelRadius = 50 + Math.random() * 60;
        this.repelStrength = 1.2 + Math.random() * 0.8;
        // Occasional "spark" particle (faster, smaller, brighter)
        this.isSpark = Math.random() < 0.12;
        if (this.isSpark) {
          this.r = 0.8 + Math.random() * 1.2;
          this.speedY = 0.8 + Math.random() * 1.4;
          this.targetOpacity = 0.7 + Math.random() * 0.3;
          this.maxLife = 100 + Math.random() * 80;
        }
      }

      update() {
        this.life++;
        this.wobble += this.wobbleSpeed;

        const progress = this.life / this.maxLife;
        if (progress < 0.12) {
          this.opacity = lerp(0, this.targetOpacity, progress / 0.12);
        } else if (progress > 0.78) {
          this.opacity = lerp(
            this.targetOpacity,
            0,
            (progress - 0.78) / 0.22
          );
        } else {
          this.opacity = this.targetOpacity;
        }

        // Drifting sine wobble + upward float
        this.x +=
          this.speedX + Math.sin(this.wobble) * this.wobbleAmp;
        this.y -= this.speedY;

        // Mouse repulsion
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const dx = this.x - mx;
        const dy = this.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.repelRadius && dist > 0) {
          const force =
            ((this.repelRadius - dist) / this.repelRadius) *
            this.repelStrength;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }

        if (this.life >= this.maxLife || this.y < -12) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        if (this.isSpark) {
          // Star/cross shape for sparks
          ctx.beginPath();
          const size = this.r * 2;
          ctx.moveTo(this.x - size, this.y);
          ctx.lineTo(this.x + size, this.y);
          ctx.moveTo(this.x, this.y - size);
          ctx.lineTo(this.x, this.y + size);
          ctx.strokeStyle = `rgba(${this.cr},${this.cg},${this.cb},1)`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          // Regular circle with soft glow
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${this.cr},${this.cg},${this.cb})`;
          ctx.shadowColor = `rgba(${this.cr},${this.cg},${this.cb},0.55)`;
          ctx.shadowBlur = this.r * 2.5;
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const particles = Array.from(
      { length: COUNT },
      () => new Particle(true)
    );

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      animRef.current = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // 🖱️ Mouse tracking
  useEffect(() => {
    const move = (e) => {
      const glow = document.getElementById("mouseGlow");
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
      // Store mouse relative to viewport for canvas repulsion
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        padding: "80px 60px",
        maxWidth: 1200,
        margin: "0 auto",
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      {/* 🔥 INLINE CSS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float1 {
          50% { transform: translate(40px, 30px); }
        }
        @keyframes float2 {
          50% { transform: translate(-30px, -40px); }
        }
        @keyframes float3 {
          50% { transform: translate(20px, -20px); }
        }
      `}</style>

      {/* 🌈 Gradient Mesh */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(167,141,120,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(110,71,59,0.2), transparent 50%)",
          zIndex: 0,
        }}
      />

      {/* 🔲 Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* 🫧 Blobs */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            background: "rgba(167,141,120,0.2)",
            borderRadius: "50%",
            filter: "blur(50px)",
            top: -50,
            left: -50,
            animation: "float1 12s infinite ease-in-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 250,
            height: 250,
            background: "rgba(110,71,59,0.2)",
            borderRadius: "50%",
            filter: "blur(50px)",
            bottom: -60,
            right: -40,
            animation: "float2 14s infinite ease-in-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            background: "rgba(167,141,120,0.15)",
            borderRadius: "50%",
            filter: "blur(40px)",
            top: "40%",
            left: "60%",
            animation: "float3 10s infinite ease-in-out",
          }}
        />
      </div>

      {/* ✨ Canvas Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 🖼️ Image */}
      <div
        style={{
          flex: "1 1 420px",
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: "32px",
            overflow: "hidden",
            border: `3px solid ${C.accent}`,
            boxShadow: "0 20px 60px rgba(41,28,14,.25)",
            transform: "rotate(-6deg)",
            transition: "all .5s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "rotate(0deg) scale(1.06)";
            e.currentTarget.style.boxShadow =
              "0 30px 90px rgba(41,28,14,.4), 0 0 30px rgba(167,141,120,.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotate(-6deg)";
            e.currentTarget.style.boxShadow =
              "0 20px 60px rgba(41,28,14,.25)";
          }}
        >
          <img
            src={ABOUT.avatar}
            alt={ABOUT.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      </div>

      {/* 📝 Text */}
      <div
        style={{
          flex: "1 1 520px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: C.brown,
            fontWeight: 600,
            fontSize: ".75rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom: 10,
            animation: "fadeUp .6s ease .2s both",
          }}
        >
          {ABOUT.subtitle}
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            color: C.dark,
            marginBottom: 14,
            animation: "fadeUp .6s ease .4s both",
          }}
        >
          {ABOUT.name}
          <br />
          <em style={{ color: C.brown }}>{ABOUT.title}</em>
        </h1>

        <p
          style={{
            color: C.brown,
            fontSize: "1rem",
            lineHeight: 1.9,
            marginBottom: 28,
            animation: "fadeUp .6s ease .6s both",
          }}
        >
          {ABOUT.bio}
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            animation: "fadeUp .6s ease .8s both",
          }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=10IASYlynvXcxdb-luHB8FwRbk9ccIqUi"
            className="btn btn-solid"
          >
            ⬇ Download Resume
          </a>
          <a href="#contact" className="btn btn-outline">
            Say Hello →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;