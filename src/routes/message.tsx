import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/message")({
  head: () => ({
    meta: [
      { title: "A Little Message — Khushiii Foundation" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MessagePage,
});

function MessagePage() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(1000px 700px at 50% 20%, oklch(0.94 0.06 10 / 0.8), transparent 60%), radial-gradient(800px 500px at 80% 90%, oklch(0.9 0.08 5 / 0.6), transparent 60%), var(--color-background)",
      }}>
      {/* floating hearts */}
      <FloatingHearts />

      <div className="relative text-center max-w-3xl">
        <p className="text-xs tracking-[0.4em] uppercase text-primary/80 font-semibold">A little note</p>

        <h1 className="mt-8 text-4xl md:text-6xl leading-tight font-bold text-foreground"
          style={{ fontFamily: "Playfair Display, serif" }}>
          Sapne tum dekhna,
          <br />
          pure ham karenge.
        </h1>

        <p className="mt-10 text-3xl md:text-5xl text-primary flex items-center justify-center gap-3"
          style={{ fontFamily: "Dancing Script, cursive", fontWeight: 700 }}>
          I Love You
          <span aria-hidden className="text-4xl md:text-6xl" style={{ color: "#e11d48" }}>❤</span>
        </p>

        <div className="mt-14 flex items-center justify-center gap-6">
          <span className="h-px w-16 bg-border" />
          <span className="text-2xl md:text-3xl font-display tracking-[0.3em] text-foreground/80">11 : 11</span>
          <span className="h-px w-16 bg-border" />
        </div>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground italic">
          i love you
        </p>

        <div className="mt-16">
          <Link to="/" className="btn-ghost">← Back home</Link>
        </div>
      </div>
    </div>
  );
}

function FloatingHearts() {
  const hearts = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => {
        const left = (i * 73) % 100;
        const delay = (i * 0.6) % 6;
        const duration = 8 + ((i * 1.3) % 6);
        const size = 14 + ((i * 7) % 22);
        const opacity = 0.15 + ((i * 0.07) % 0.35);
        return (
          <span
            key={i}
            className="absolute bottom-[-40px] text-primary"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              opacity,
              animation: `floatUp ${duration}s linear ${delay}s infinite`,
            }}
          >
            ❤
          </span>
        );
      })}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
