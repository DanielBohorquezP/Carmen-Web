"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Microscope, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const credentialIcons = [Stethoscope, Microscope, Brain];

interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  logo?: {
    url: string;
    alt: string;
  };
  title: React.ReactNode;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  credentials: string[];
  /** Mirrors the layout so the image sits on the left and content on the right. */
  imageOnLeft?: boolean;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      title,
      subtitle,
      primaryCta,
      secondaryCta,
      backgroundImage,
      credentials,
      imageOnLeft = true,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" as const },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#FFC7DB] text-dark",
          imageOnLeft ? "md:flex-row" : "md:flex-row-reverse",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Image side */}
        <motion.div
          className={cn(
            "order-2 aspect-[1024/1215] w-full bg-contain bg-center bg-no-repeat",
            "md:order-none md:aspect-auto md:min-h-full md:w-1/2",
            imageOnLeft ? "md:bg-right" : "md:bg-left"
          )}
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Content side */}
        <div className="relative order-1 flex w-full flex-col justify-between p-8 pt-28 pb-2 md:order-none md:w-1/2 md:pb-10 md:pl-16 md:pr-10 md:pt-40 lg:pb-12 lg:pl-24 lg:pr-12 lg:pt-44">
          <div>
            <motion.main variants={containerVariants}>
              <motion.h1
                className="font-hero-title text-4xl leading-[1.15] pb-1 sm:text-5xl md:text-7xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-1 w-16 bg-pastel-yellow"
                variants={itemVariants}
              />
              <motion.p
                className="mb-8 max-w-lg text-base leading-relaxed text-dark/80"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href={primaryCta.href}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-xl bg-cream px-6 py-3 text-sm font-semibold tracking-wide text-dark"
                >
                  {primaryCta.text}
                </motion.a>
                <motion.a
                  href={secondaryCta.href}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-xl border-2 border-dark px-6 py-3 text-sm font-semibold tracking-wide text-dark"
                >
                  {secondaryCta.text}
                </motion.a>
              </motion.div>
            </motion.main>
          </div>

          <motion.footer className="mt-6 w-full md:mt-12" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-4 text-xs text-dark/75 sm:grid-cols-3">
              {credentials.map((credential, i) => {
                const Icon = credentialIcons[i % credentialIcons.length];
                return (
                  <div key={credential} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
                    <span>{credential}</span>
                  </div>
                );
              })}
            </div>
          </motion.footer>
        </div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
