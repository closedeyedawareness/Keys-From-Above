"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Music,
  Instagram,
  Youtube,
  Mail,
  Globe,
  Headphones,
  CalendarDays,
  Sparkles,
  Piano,
  PlayCircle,
} from "lucide-react";

const links = [
  {
    label: "Official Website",
    description: "Explore music, releases, and the world of Keys From Above",
    href: "https://www.keysfromabove.com",
    icon: Globe,
  },
  {
    label: "Listen on YouTube",
    description: "Piano pieces, cinematic soundscapes, and live moments",
    href: "https://www.youtube.com/@Keysfromabove",
    icon: Youtube,
  },
  {
    label: "Instagram",
    description: "Behind the keys, new music, reels, and updates",
    href: "https://www.instagram.com/keysfromabove/",
    icon: Instagram,
  },
  {
    label: "Book / Contact",
    description: "Performances, compositions, collaborations, and enquiries",
    href: "mailto:keysfromabove@gmail.com",
    icon: Mail,
  },
  {
    label: "Cinematic Piano Music",
    description: "Neo-classical piano and emotional soundtrack work",
    href: "https://www.keysfromabove.com",
    icon: Headphones,
  },
  {
    label: "Guided Meditations",
    description: "Atmospheric piano for calm, reflection, and inner focus",
    href: "https://www.keysfromabove.com",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-1/2 top-[-8rem] h-96 w-96 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-2xl backdrop-blur"
        >
          <Piano className="h-11 w-11 text-amber-200" />
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-amber-100">
            <Music className="h-3.5 w-3.5" /> Piano • Soundscapes • Meditation
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Keys From Above
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Neo-classical piano, cinematic soundscapes, movie soundtrack music,
            and guided meditations by Adelmar van Dijk.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur"
        >
          <div className="grid h-24 grid-cols-14 gap-1 overflow-hidden rounded-[1.45rem] bg-neutral-950 p-2">
            {Array.from({ length: 14 }).map((_, index) => (
              <div key={index} className="relative rounded-b-lg bg-white shadow-inner">
                {[1, 2, 4, 5, 6].includes(index % 7) && (
                  <div className="absolute left-1/2 top-0 h-14 w-3/5 -translate-x-1/2 rounded-b-md bg-neutral-950" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <section className="mt-6 space-y-3">
          {links.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.06, duration: 0.45 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-white/[0.11]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-amber-100 transition group-hover:bg-amber-200 group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold">{item.label}</span>
                  <span className="mt-0.5 block text-sm leading-5 text-white/55">
                    {item.description}
                  </span>
                </span>
                <PlayCircle className="h-5 w-5 text-white/30 transition group-hover:text-amber-100" />
              </motion.a>
            );
          })}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-5 shadow-xl backdrop-blur"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-200 text-black">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">For bookings & collaborations</h2>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Available for intimate performances, cinematic piano compositions,
                meditative music projects, and custom soundtrack work.
              </p>
            </div>
          </div>
        </motion.section>

        <footer className="mt-auto pt-8 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Keys From Above</p>
          <p className="mt-2">Where silence becomes sound.</p>
        </footer>
      </section>
    </main>
  );
}
