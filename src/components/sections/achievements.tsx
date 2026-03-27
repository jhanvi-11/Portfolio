"use client";

import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Dean's List",
    organization: "Lovely Professional University",
    date: "Nov’ 25",
    description: "Recognized on the Dean’s List at Lovely Professional University for academic excellence.",
  },
  {
    id: 2,
    title: "Top 1% Silver Certificate",
    organization: "NPTEL Cloud Computing",
    date: "Nov’ 25",
    description: "Awarded a Silver Certificate for ranking in the top 1% in the NPTEL Cloud Computing course.",
  },
  {
    id: 3,
    title: "Special Recognition",
    organization: "Zinnovatio 3.0 Hackathon",
    date: "Oct’ 25",
    description: "Offered a Winter Internship as a special recognition in the Zinnovatio 3.0 Hackathon.",
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper
      id="achievements"
      className="flex flex-col items-center justify-center py-20 z-10 relative overflow-hidden bg-slate-100 dark:bg-transparent"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Milestones and recognitions."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 gap-6 relative">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: (typeof ACHIEVEMENTS)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/30 transition-colors duration-300",
          "shadow-sm hover:shadow-md relative overflow-hidden group"
        )}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00ff99] opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <CardHeader className="pb-3 pt-5">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pl-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-border bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <Trophy size={20} className="text-[#00ff99]" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg md:text-xl font-bold tracking-tight">
                  {achievement.title}
                </CardTitle>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {achievement.organization}
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal mt-2 md:mt-0 shadow-none border-transparent bg-slate-200 dark:bg-slate-800 relative z-10">
              {achievement.date}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pl-8 md:pl-20 pb-6 relative z-10">
          <p className="text-base text-slate-600 dark:text-gray-300 leading-relaxed font-medium">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
