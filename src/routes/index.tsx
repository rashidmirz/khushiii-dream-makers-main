import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/khushiii-logo.png";
import heroImg from "@/assets/hero-children.jpg";
import educationImg from "@/assets/education.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import developmentImg from "@/assets/development.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset} alt="Khushiii Foundation" className="h-12 w-12 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-display text-xl text-primary" style={{ fontFamily: "Dancing Script, cursive", fontWeight: 700 }}>Khushiii</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Foundation</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#work" className="hover:text-primary transition">What We Do</a>
          <a href="#impact" className="hover:text-primary transition">Impact</a>
          <a href="#volunteer" className="hover:text-primary transition">Volunteer</a>
        </nav>
        <a href="https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">Donate</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary">
            Educate • Nourish • Empower
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Together, We Can Build a{" "}
            <span className="text-primary" style={{ fontFamily: "Dancing Script, cursive", fontWeight: 700 }}>
              Better Future
            </span>{" "}
            for Every Child.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Khushiii Foundation is dedicated to empowering underprivileged children through
            education, nutritious meals, healthcare, and opportunities that help them build
            a brighter future.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>❤</span> Donate Now
            </a>
            <a href="https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm" target="_blank" rel="noopener noreferrer" className="btn-ghost">Become a Volunteer</a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="text-2xl font-display font-bold text-foreground">10k+</div>Children reached</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">100%</div>Transparent</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">50+</div>Communities</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-rose/30 via-blush/40 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border">
            <img src={heroImg} alt="Smiling children reading together" width={1600} height={1200} className="w-full h-[540px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 soft-card px-5 py-4 flex items-center gap-3">
            <img src={logoAsset} alt="" className="h-12 w-12 rounded-full" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">A better tomorrow</div>
              <div className="font-display text-lg text-primary">for every child</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-transparent to-secondary/40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">About Us</div>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold">Every child deserves love, dignity, and a chance to dream.</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Khushiii Foundation is a non-profit organization committed to creating a world where every
          child has access to quality education, healthy food, essential healthcare, and equal
          opportunities. We work with compassion, transparency, and dedication to support children
          from economically weaker backgrounds and help them become confident, educated, and
          independent individuals.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-16 grid md:grid-cols-2 gap-6">
        <div className="soft-card p-8">
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Our Mission</div>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            To provide quality education, nutritious food, healthcare support, and life-changing
            opportunities to underprivileged children while creating a society where every child
            can grow with dignity, hope, and confidence.
          </p>
        </div>
        <div className="soft-card p-8">
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Our Vision</div>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            A world where no child is deprived of education, nutrition, healthcare, or the
            opportunity to achieve their dreams.
          </p>
        </div>
      </div>
    </section>
  );
}

const values = [
  { icon: "❤️", label: "Compassion" },
  { icon: "📚", label: "Education" },
  { icon: "🤝", label: "Equality" },
  { icon: "🌱", label: "Empowerment" },
  { icon: "🔍", label: "Transparency" },
  { icon: "🌍", label: "Community" },
];

function Values() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">Our Values</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">The principles that guide us</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((v) => (
            <div key={v.label} className="soft-card p-6 text-center hover:-translate-y-1 transition">
              <div className="text-3xl">{v.icon}</div>
              <div className="mt-3 font-semibold text-foreground">{v.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const works = [
  { img: educationImg, title: "Education", desc: "School support, books, uniforms, stationery, scholarships and digital learning for children in need." },
  { img: nutritionImg, title: "Nutrition", desc: "Distributing healthy meals and nutrition kits so no child learns on an empty stomach." },
  { img: healthcareImg, title: "Healthcare", desc: "Health check-up camps, medical assistance, and preventive care for children and families." },
  { img: developmentImg, title: "Child Development", desc: "Skill development, personality building, career guidance and long-term mentorship." },
];

function WhatWeDo() {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">What We Do</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Programs that change lives, every single day.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {works.map((w) => (
            <article key={w.title} className="group soft-card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={w.img} alt={w.title} width={1200} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-primary">{w.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const impacts = [
  "Educate children",
  "Feed hungry families",
  "Support school admissions",
  "Organize health camps",
  "Build a brighter future",
];

function Impact() {
  return (
    <section id="impact" className="py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">Our Impact</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Every contribution helps us do more.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Small acts of kindness are the seeds of lasting change. Here's what your support makes possible.
          </p>
        </div>
        <ul className="space-y-3">
          {impacts.map((i, idx) => (
            <li key={i} className="soft-card px-6 py-5 flex items-center gap-4">
              <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-medium text-lg">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const reasons = [
  { t: "100% Transparent", d: "Every rupee is tracked and reported. You always know where your donation goes." },
  { t: "Child-Centered Programs", d: "Designed around the real needs of children, not top-down assumptions." },
  { t: "Dedicated Volunteers", d: "A passionate team giving time, skills, and love every single day." },
  { t: "Community Driven", d: "We work with families and local leaders to create lasting change." },
  { t: "Long-Term Impact", d: "We stay for the long haul — from first classroom to first job." },
];

function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">Why Choose Us</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trust, transparency, and heart.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.t} className="soft-card p-7">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">❤</div>
              <h3 className="mt-4 text-xl font-bold">{r.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Volunteer() {
  return (
    <section id="volunteer" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.16 4) 0%, oklch(0.5 0.2 2) 100%)" }}>
          <div className="text-xs tracking-[0.3em] uppercase text-white/80 font-semibold">Become a Volunteer</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Your time can change someone's future.</h2>
          <p className="mt-5 text-white/90 max-w-2xl mx-auto text-lg">
            Join Khushiii Foundation and become part of our mission to bring hope, happiness,
            and opportunities into the lives of children.
          </p>
          <a href="https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex btn-ghost" style={{ borderColor: "white", color: "white" }}>
            Message us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-14 w-14 rounded-full" />
            <div>
              <div className="font-bold text-xl text-primary" style={{ fontFamily: "Dancing Script, cursive" }}>Khushiii Foundation</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Educate • Nourish • Empower</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A non-profit building a better tomorrow for every child through education,
            nutrition, healthcare, and opportunity.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-foreground">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#work" className="hover:text-primary">What We Do</a></li>
            <li><a href="#impact" className="hover:text-primary">Impact</a></li>
            <li><a href="#volunteer" className="hover:text-primary">Volunteer</a></li>
            <li><a href="https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Donate</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-foreground">Get in touch</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:khushiiifoundation1111@gmail.com" className="hover:text-primary break-all">khushiiifoundation1111@gmail.com</a></li>
            <li><a href="https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram: @teamkhf1111</a></li>
            <li>India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between text-xs text-muted-foreground">
          <div>
            <div>© {new Date().getFullYear()} Khushiii Foundation. All rights reserved.</div>
            <div>You dream it. I’ll make it happen.</div>
            <div>I Love You. ❤️</div>
          </div>
          <Link to="/message" className="inline-flex items-center gap-1.5 hover:text-primary transition">
            Made with <span className="text-primary">❤</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Values />
        <WhatWeDo />
        <Impact />
        <WhyUs />
        <Volunteer />
        
      </main>
      <Footer />
    </div>
  );
}
