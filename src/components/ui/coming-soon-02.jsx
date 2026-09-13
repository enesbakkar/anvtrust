"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "@/components/ui/coming-soon-02-utils/sparkles";

const TRANSLATIONS = {
  tr: {
    badge: "YAKINDA HİZMETİNİZDE",
    headline: "ANV Trust Portal Çok Yakında Açılıyor",
    description: "African National View Trust (ANV Trust) dijital portalı hazırlık aşamasında. Burs başvuruları, akademisyen paneli ve insani yardım süreçleri çok yakında tek bir platformda birleşiyor.",
    cta: "Haberdar Olun",
    emailPlaceholder: "E-posta adresinizi girin...",
    notifyBtn: "Abone Ol",
    successMsg: "✨ Teşekkürler! Portal açıldığında size bildirim göndereceğiz.",
    f1Title: "🎓 Burs & Eğitim",
    f1Desc: "Online burs başvurusu ve öğrenci takip portalı.",
    f2Title: "🌍 İnsani Yardım",
    f2Desc: "Şeffaf ve hızlı yardım koordinasyon paneli.",
    f3Title: "📊 Akademik Panel",
    f3Desc: "Uluslararası danışmanlık ve ağ yönetimi.",
    footer: "© 2026 African National View Trust (ANV Trust). Tüm hakları saklıdır."
  },
  en: {
    badge: "LAUNCHING SOON",
    headline: "ANV Trust Portal Is Coming Soon",
    description: "African National View Trust (ANV Trust) digital portal is finishing the last pieces now. Scholarship applications, academic panel, and aid coordination will soon be unified in one console.",
    cta: "Stay Tuned",
    emailPlaceholder: "Enter your email address...",
    notifyBtn: "Subscribe",
    successMsg: "✨ Thank you! We will notify you as soon as the portal launches.",
    f1Title: "🎓 Scholarship & Education",
    f1Desc: "Online applications & student tracking portal.",
    f2Title: "🌍 Humanitarian Aid",
    f2Desc: "Transparent and fast aid management console.",
    f3Title: "📊 Academic Panel",
    f3Desc: "International consulting and networking panel.",
    footer: "© 2026 African National View Trust (ANV Trust). All rights reserved."
  }
};

const Headline = ({ lang }) => {
  const reduce = useReducedMotion();
  const text = TRANSLATIONS[lang].headline;
  const words = text.split(" ");
  const half = Math.floor(words.length / 2);

  return (
    <h1
      data-slot="coming-soon-title"
      className="max-w-2xl font-sans text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}-${lang}`}
          className={cn(
            "inline-block",
            i < half ? "text-[#007A87]" : "text-[#FF6500]"
          )}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.07 }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </h1>
  );
};

const ComingSoon02 = () => {
  const reduce = useReducedMotion();
  const [lang, setLang] = React.useState("tr");
  const [subscribed, setSubscribed] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const t = TRANSLATIONS[lang];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section
      data-slot="coming-soon"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-[#070d14] text-slate-100 pt-8 pb-12"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#007A87]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FF6500]/15 blur-[140px]" />

      {/* Top Header / Brand & Language Switcher */}
      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* ANV Logo Branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#007A87] to-[#FF6500] text-xl font-black text-white shadow-lg shadow-[#007A87]/30">
            ANV
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-lg leading-tight">
              AFRICAN NATIONAL VIEW
            </span>
            <span className="text-xs font-bold tracking-widest text-[#FF6500] uppercase">
              TRUST PORTAL
            </span>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center rounded-full border border-white/10 bg-slate-900/60 p-1 backdrop-blur-md">
          <button
            onClick={() => setLang("tr")}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
              lang === "tr"
                ? "bg-gradient-to-r from-[#007A87] to-[#00a3b4] text-white shadow-md"
                : "text-slate-400 hover:text-white"
            )}
          >
            TR
          </button>
          <button
            onClick={() => setLang("en")}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
              lang === "en"
                ? "bg-gradient-to-r from-[#FF6500] to-[#ff8533] text-white shadow-md"
                : "text-slate-400 hover:text-white"
            )}
          >
            EN
          </button>
        </div>
      </header>

      {/* Main Body */}
      <motion.div
        data-slot="coming-soon-body"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center mt-6"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Status Badge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Badge
            variant="outline"
            data-slot="coming-soon-badge"
            className="flex items-center gap-2 rounded-full border-[#007A87]/40 bg-slate-900/80 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00a3b4] backdrop-blur-md shadow-lg shadow-[#007A87]/10"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF6500] animate-ping" />
            {t.badge}
          </Badge>
        </motion.div>

        {/* Dynamic Animated Headline */}
        <Headline lang={lang} />

        {/* Description */}
        <motion.p
          data-slot="coming-soon-description"
          className="max-w-2xl text-pretty text-base text-slate-300 sm:text-lg leading-relaxed"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t.description}
        </motion.p>

        {/* Subscription Form */}
        <motion.div
          data-slot="coming-soon-actions"
          className="w-full max-w-md mt-2"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl focus-within:border-[#FF6500]/50 transition-all">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-[#FF6500] to-[#ff8533] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#FF6500]/25 transition-all hover:brightness-110 active:scale-95"
              >
                {t.notifyBtn}
              </button>
            </form>
          ) : (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-sm font-medium text-emerald-400 backdrop-blur-md">
              {t.successMsg}
            </div>
          )}
        </motion.div>

        {/* Feature Teasers */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-6"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col items-start p-4 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md text-left transition-all hover:border-[#007A87]/50">
            <span className="text-xl mb-1">{t.f1Title}</span>
            <span className="text-xs text-slate-400">{t.f1Desc}</span>
          </div>

          <div className="flex flex-col items-start p-4 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md text-left transition-all hover:border-[#FF6500]/50">
            <span className="text-xl mb-1">{t.f2Title}</span>
            <span className="text-xs text-slate-400">{t.f2Desc}</span>
          </div>

          <div className="flex flex-col items-start p-4 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md text-left transition-all hover:border-[#007A87]/50">
            <span className="text-xl mb-1">{t.f3Title}</span>
            <span className="text-xs text-slate-400">{t.f3Desc}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Horizon Glow & Sparkles Particle Canvas */}
      <div
        data-slot="coming-soon-horizon"
        aria-hidden
        className="relative -mt-16 h-64 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,black,transparent)] after:absolute after:-start-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#007A87]/30 after:bg-slate-950/80 after:content-['']"
      >
        <div
          data-slot="coming-soon-horizon-glow"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,101,0,0.25),transparent_70%)] opacity-60"
        />
        <Sparkles
          density={5}
          size={1.6}
          color="#007A87"
          className="[mask-image:radial-gradient(50%_50%,black,transparent_85%)]"
        />
      </div>

      {/* Footer */}
      <footer className="relative z-20 text-center text-xs text-slate-500 pt-4">
        {t.footer}
      </footer>
    </section>
  );
};

export default ComingSoon02;
