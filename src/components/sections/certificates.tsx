"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypographyH2 } from "../ui/typography";

const certificates = [
  { src: "/assets/certificates/C neocolab.pdf", title: "C Programming", organization: "Neocolab", date: "2023", skills: ["C", "Programming"] },
  { src: "/assets/certificates/ChatGPT made easy.pdf", title: "ChatGPT Made Easy", organization: "Online", date: "2023", skills: ["ChatGPT", "AI"] },
  { src: "/assets/certificates/CloudComputingNPTEL.pdf", title: "Cloud Computing", organization: "NPTEL", date: "2023", skills: ["Cloud", "Infrastructure"] },
  { src: "/assets/certificates/Coursera 1VD3OPFT4MUZ.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/Coursera 1X0HR7EELWE1.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/Coursera 2S2AQA6JRBC4.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/Coursera 6PK619C2YYY8.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/Coursera 7K7SNCNRZQ5S.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/Coursera MN4QZ3C035I0.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/Coursera MOK0Z9DTS18R.pdf", title: "Course Certificate", organization: "Coursera", date: "2023", skills: ["Specialization"] },
  { src: "/assets/certificates/FreeodeCamp.pdf", title: "FreeCodeCamp", organization: "FreeCodeCamp", date: "2023", skills: ["Web Development"] },
  { src: "/assets/certificates/Java Neocolab.pdf", title: "Java Programming", organization: "Neocolab", date: "2023", skills: ["Java", "OOP"] },
  { src: "/assets/certificates/Master Genarative Ai.pdf", title: "Master Generative AI", organization: "Online", date: "2023", skills: ["Generative AI"] },
  { src: "/assets/certificates/build generative ai apps.pdf", title: "Build Generative AI Apps", organization: "Online", date: "2023", skills: ["AI Apps"] },
  { src: "/assets/certificates/build generative ai.pdf", title: "Build Generative AI", organization: "Online", date: "2023", skills: ["AI"] },
  { src: "/assets/certificates/c udemy.pdf", title: "C Programming", organization: "Udemy", date: "2023", skills: ["C", "Fundamentals"] },
  { src: "/assets/certificates/chat-gpt4 prompt engineering.pdf", title: "ChatGPT-4 Prompt Engineering", organization: "Online", date: "2023", skills: ["Prompt Engineering"] },
  { src: "/assets/certificates/computational theory.pdf", title: "Computational Theory", organization: "Online", date: "2023", skills: ["Theory", "Computer Science"] },
  { src: "/assets/certificates/dsa neocolab.pdf", title: "Data Structures & Algorithms", organization: "Neocolab", date: "2023", skills: ["DSA", "Problem Solving"] },
  { src: "/assets/certificates/oops neocolab.pdf", title: "Object Oriented Programming", organization: "Neocolab", date: "2023", skills: ["OOP", "Concepts"] },
  { src: "/assets/certificates/smg-certificate.pdf", title: "SMG Certificate", organization: "SMG", date: "2023", skills: ["Management"] },
  { src: "/assets/certificates/summer training.pdf", title: "Summer Training", organization: "Institute", date: "2023", skills: ["Training", "Internship"] },
];

const FlipperCard = ({ cert, className }: { cert: any, className?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group cursor-pointer perspective-1000", className)}
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-200 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-white/10 flex flex-col items-center justify-center backface-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full bg-white dark:bg-slate-800">
            {cert.src.endsWith('.pdf') ? (
              <iframe
                src={`${cert.src}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                className="w-full h-full border-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                title={cert.title}
              />
            ) : (
              <Image
                src={cert.src}
                alt={cert.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
            <h3 className="text-white text-xl font-bold">{cert.title}</h3>
            <p className="text-white/70 text-sm mt-1">Click to flip for details</p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-black/90 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-slate-300 dark:border-[#00ff99]/30 p-6 flex flex-col justify-center items-center text-center text-slate-800 dark:text-white backface-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,255,153,0.1)]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-[#00ff99] drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(0,255,153,0.5)]">{cert.title}</h3>
          
          <div className="space-y-4 w-full px-4 text-sm md:text-base">
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-2">
              <span className="text-slate-500 dark:text-gray-400 uppercase tracking-wider text-xs font-semibold">Organization</span>
              <span className="font-medium text-right">{cert.organization}</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-2">
              <span className="text-slate-500 dark:text-gray-400 uppercase tracking-wider text-xs font-semibold">Date</span>
              <span className="font-medium text-right">{cert.date}</span>
            </div>
            
            <div className="pt-4 flex flex-col items-start w-full">
              <span className="text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-3 block w-full text-left text-xs font-semibold">Skills Highlighted</span>
              <div className="flex flex-wrap gap-2 justify-start w-full">
                {cert.skills.map((skill: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-slate-200 dark:bg-[#00ff99]/10 border border-slate-300 dark:border-[#00ff99]/20 text-slate-700 dark:text-[#00ff99] rounded-full text-xs font-semibold tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CertificatesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardsElement = cardsRef.current;
      const titleElement = titleRef.current;
      const triggerElement = triggerRef.current;

      if (!cardsElement || !titleElement || !triggerElement) return;

      const totalWidth = cardsElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const moveAmount = Math.max(0, totalWidth - windowWidth + 100);
      const amountToScroll = moveAmount + 600; // Extra scroll distance

      const isDesktop = window.innerWidth > 768;

      if (isDesktop && amountToScroll > 0) {
        // Pin logic
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: `+=${amountToScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cardsElement, {
          x: -moveAmount, // Move to left
          ease: "none",
        });

        // Parallax Title
        gsap.to(titleElement, {
          x: 200,
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: `+=${amountToScroll}`,
            scrub: 1,
          },
        });

        // Initial Staggered Reveal
        gsap.fromTo(
          ".staggered-reveal",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-slate-100 dark:bg-transparent">
      {/* Mobile View */}
      <div className="md:hidden py-10 px-4">
        <TypographyH2 className="text-center mb-8">Certificates</TypographyH2>
        <div className="grid grid-cols-1 gap-6">
          {certificates.map((cert, index) => (
            <FlipperCard
              key={index}
              cert={cert}
              className="w-full aspect-[4/3]"
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div
        ref={triggerRef}
        className="hidden md:flex h-screen w-full items-center overflow-hidden relative"
      >
        <div className="relative h-full w-full flex flex-col justify-center pl-20">
          <h2
            ref={titleRef}
            className="staggered-reveal text-[10vw] font-bold text-neutral-800/5 dark:text-white/5 absolute top-20 left-10 pointer-events-none whitespace-nowrap z-0"
          >
            CERTIFICATES
          </h2>
          <div className="staggered-reveal mb-8 z-10">
            <TypographyH2>Certificates</TypographyH2>
          </div>

          <div ref={cardsRef} className="flex gap-10 z-10 pl-4 w-fit">
            {certificates.map((cert, index) => (
              <FlipperCard
                key={index}
                cert={cert}
                className="certificate-card staggered-reveal relative h-[400px] w-[600px] flex-shrink-0"
              />
            ))}
            {/* Added extra padding div to ensure scroll goes far enough */}
            <div className="w-[50vw] flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
