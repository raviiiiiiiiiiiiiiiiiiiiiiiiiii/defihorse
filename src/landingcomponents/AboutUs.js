import { Header } from "./Header";
import { AnimatedSection } from "./AnimatedSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styleAboutUs.css";

// Subtle fade up — starts slightly below, fades in
const getFadeTop = (inView) => ({
  transition: "opacity 0.8s ease, transform 0.8s ease",
  opacity: inView ? "1" : "0",
  transform: inView ? "translateY(0)" : "translateY(24px)",
});

const getFadeLeft = (inView) => ({
  transition: "opacity 0.9s ease, transform 0.9s ease",
  opacity: inView ? "1" : "0",
  transform: inView ? "translateX(0)" : "translateX(-40px)",
});

const getFadeRight = (inView) => ({
  transition: "opacity 0.9s ease, transform 0.9s ease",
  opacity: inView ? "1" : "0",
  transform: inView ? "translateX(0)" : "translateX(40px)",
});

// Hero is always visible — no animation needed since it's above the fold
const alwaysVisible = () => ({
  opacity: "1",
  transform: "none",
});

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Blockchain architect with 10+ years in decentralized systems and DeFi protocol design.",
    icon: "bi-person-circle",
    color: "#5F3DFF",
  },
  {
    name: "Sarah Chen",
    role: "Lead Game Developer",
    bio: "Former AAA game studio developer, passionate about bringing Web3 gaming to the mainstream.",
    icon: "bi-controller",
    color: "#C03DFF",
  },
  {
    name: "Marcus Riley",
    role: "Smart Contract Engineer",
    bio: "Solidity expert and auditor with deep experience in NFT protocols and staking mechanics.",
    icon: "bi-code-slash",
    color: "#5F3DFF",
  },
  {
    name: "Priya Nair",
    role: "Head of Community",
    bio: "Web3 community builder who has grown multiple DeFi protocols to 100k+ active users.",
    icon: "bi-people-fill",
    color: "#C03DFF",
  },
];

const stats = [
  { value: "668M", label: "DFH Max Supply", icon: "bi-coin" },
  { value: "120K+", label: "Community Members", icon: "bi-people" },
  { value: "3", label: "Smart Contracts", icon: "bi-file-earmark-code" },
  { value: "∞", label: "Races Available", icon: "bi-flag" },
];

const values = [
  {
    icon: "bi-shield-check",
    title: "Security First",
    desc: "Every contract is audited. Every transaction is transparent. We never compromise on safety.",
    color: "#5F3DFF",
  },
  {
    icon: "bi-lightning-charge",
    title: "Play to Earn",
    desc: "Real rewards for real players. Stake, race, breed — and earn DFH tokens doing what you love.",
    color: "#C03DFF",
  },
  {
    icon: "bi-globe2",
    title: "Decentralized",
    desc: "No middlemen. No gatekeepers. The Horseverse is owned and governed by its community.",
    color: "#5F3DFF",
  },
];

export const AboutUs = () => {
  return (
    <div className="AboutUs">

      {/* ── NAVBAR — same as homepage ── */}
      <Header />

      {/* ── HERO — always visible, no scroll needed ── */}
      <div className="au-hero">
        <div className="gradient gradient--about1"></div>
        <AnimatedSection getStyles={alwaysVisible}>
          <div className="topTitle">
            <div id="line"></div>
            <div className="text">
              <span className="title title1">About</span>
              <span className="title title2">&nbsp;DeFiHorse</span>
            </div>
            <div id="line"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection getStyles={alwaysVisible}>
          <p className="au-hero-sub">
            A horse racing Metaverse e-sports game built on Blockchain technology and NFTs.
            We're redefining what it means to play, earn, and own in the digital age.
          </p>
        </AnimatedSection>
      </div>

      {/* ── MISSION ── */}
      <div className="au-mission">
        <div className="gradient gradient--about2"></div>
        <AnimatedSection getStyles={getFadeLeft}>
          <div className="au-mission-text">
            <span className="title title2">Our&nbsp;</span>
            <span className="title title1">Mission</span>
            <p className="au-mission-body">
              DeFiHorse was born from a simple belief — that gaming should reward
              its players. We've merged the thrill of horse racing with the power
              of decentralized finance to create an ecosystem where every stable,
              every race, and every horse is truly yours.
            </p>
            <p className="au-mission-body">
              From the{" "}
              <span style={{ color: "#5F3DFF", fontWeight: 700 }}>TAP TO EARN</span>{" "}
              race mechanics to NFT breeding and land ownership in the Horseverse,
              every feature is designed to put value back into the hands of the
              community.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection getStyles={getFadeRight}>
          <div className="au-mission-card">
            <div className="au-mission-card-inner">
              <i className="bi bi-trophy-fill au-big-icon"></i>
              <span className="au-card-label">Play. Race. Earn.</span>
              <span className="au-card-sub">The DeFiHorse Promise</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── STATS ── */}
      <div className="au-stats">
        {stats.map((s, i) => (
          <AnimatedSection key={i} getStyles={getFadeTop}>
            <div className="au-stat-card">
              <i className={`bi ${s.icon} au-stat-icon`}></i>
              <span className="au-stat-value">{s.value}</span>
              <span className="au-stat-label">{s.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── VALUES ── */}
      <div className="au-values">
        <div className="gradient gradient--about3"></div>
        <AnimatedSection getStyles={getFadeTop}>
          <div className="topTitle">
            <div id="line"></div>
            <div className="text">
              <span className="title title1">What We&nbsp;</span>
              <span className="title title2">Stand For</span>
            </div>
            <div id="line"></div>
          </div>
        </AnimatedSection>
        <div className="au-values-grid">
          {values.map((v, i) => (
            <AnimatedSection key={i} getStyles={getFadeTop}>
              <div className="au-value-card">
                <div className="au-value-icon-wrap" style={{ borderColor: v.color }}>
                  <i className={`bi ${v.icon}`} style={{ color: v.color }}></i>
                </div>
                <span className="au-value-title" style={{ color: v.color }}>{v.title}</span>
                <p className="au-value-desc">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ── TEAM ── */}
      <div className="au-team">
        <AnimatedSection getStyles={getFadeTop}>
          <div className="topTitle">
            <div id="line"></div>
            <div className="text">
              <span className="title title2">Meet The&nbsp;</span>
              <span className="title title1">Team</span>
            </div>
            <div id="line"></div>
          </div>
        </AnimatedSection>
        <div className="au-team-grid">
          {teamMembers.map((m, i) => (
            <AnimatedSection key={i} getStyles={getFadeTop}>
              <div className="au-team-card">
                <div className="au-team-avatar" style={{ borderColor: m.color }}>
                  <i className={`bi ${m.icon}`} style={{ color: m.color }}></i>
                </div>
                <span className="au-team-name">{m.name}</span>
                <span className="au-team-role" style={{ color: m.color }}>{m.role}</span>
                <p className="au-team-bio">{m.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="au-cta">
        <div className="gradient gradient--about4"></div>
        <AnimatedSection getStyles={getFadeTop}>
          <div className="au-cta-inner">
            <span className="title title1">Ready to Enter the&nbsp;</span>
            <span className="title title2">Horseverse?</span>
            <p className="au-cta-sub">
              Stake ETH, collect NFT horses, and compete in infinite Cyberpunk races.
            </p>
            <div className="au-cta-btns">
              <a href="/token" className="au-btn-primary">
                Start Staking <i className="bi bi-chevron-right"></i>
              </a>
              <a href="/" className="au-btn-outline">
                Explore Games <i className="bi bi-controller"></i>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
};
