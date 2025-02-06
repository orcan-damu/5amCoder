"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Code2, Coffee, Rocket, Users } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Started the journey in software development"
    },
    {
      year: "2015",
      title: "Founded Tealorca",
      description: "Established Tealorca Software Solutions"
    },
    {
      year: "2018",
      title: "Co-founded J2Store",
      description: "Launched successful e-commerce solution"
    },
    {
      year: "2024",
      title: "5AM Coder Movement",
      description: "Started the revolutionary coding movement"
    }
  ];

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold gradient-text"
          >
            About 5AM Coder
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A movement dedicated to transforming developers through early morning focus,
            disciplined learning, and community support.
          </motion.p>
        </section>

        {/* Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-8 space-y-6 card-hover">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              To create a global community of developers who embrace the power of early morning
              coding, turning potential into excellence through discipline, focus, and continuous learning.
            </p>
          </Card>
          <Card className="p-8 space-y-6 card-hover">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower developers with the habits, knowledge, and community support they need
              to achieve their coding goals and build remarkable careers.
            </p>
          </Card>
        </section>

        {/* Leader Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leader</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The driving force behind the 5AM Coder movement
            </p>
          </div>
          
          <Card className="p-12 card-hover">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                alt="Sasi Varna Kumar" 
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/50"
              />
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-2xl font-bold">Sasi Varna Kumar</h3>
                <p className="text-lg text-muted-foreground">
                  A seasoned tech leader with over 15 years of experience, Sasi brings his wealth of knowledge 
                  as CEO & Founder of Tealorca Software Solutions, Director of Deecodes, and Co-founder of J2Store.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                    CEO @ Tealorca
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                    Co-founder @ J2Store
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                    Director @ Deecodes
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Journey Timeline */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 card-hover">
                  <div className="space-y-4">
                    <span className="text-4xl font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Excellence in Code",
                description: "We believe in writing clean, efficient, and maintainable code."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Community First",
                description: "Supporting and learning from each other makes us stronger."
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Continuous Growth",
                description: "Never stop learning, never stop improving."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center card-hover">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}