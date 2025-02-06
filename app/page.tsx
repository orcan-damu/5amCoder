"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/navbar";
import { Code2, Sunrise, Users, Award, PlayCircle, Sparkles, Brain, Rocket, Bot, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-background"
      style={{
        backgroundImage: `
          radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, 
            hsl(var(--primary) / 0.15), 
            transparent 40%),
          radial-gradient(800px at ${mousePosition.x * 0.8}px ${mousePosition.y * 1.2}px, 
            hsl(200 100% 50% / 0.1), 
            transparent 60%),
          radial-gradient(700px at ${mousePosition.x * 1.2}px ${mousePosition.y * 0.8}px, 
            hsl(160 100% 50% / 0.1), 
            transparent 50%)
        `
      }}
    >
      <Navbar />
      <ThemeToggle />
      
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-8 animate-fade-up">
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 leading-tight">
            Join the 5AM Coder Movement!
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Because coding deserves your clarity, commitment, and community.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Join the Movement Now →
          </Button>
        </section>

        {/* What is 5AM Coder Section */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-16">What is a 5AM Coder?</h2>
          <div className="grid md:grid-cols-2 gap-12 stagger-animation">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="text-primary" />
                The Problem
              </h3>
              <p className="text-muted-foreground">
                Let's face it—there's no shortage of knowledge or resources to learn coding in today's world. 
                But despite endless tutorials and courses, many struggle with consistency and real progress.
              </p>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="text-primary" />
                The Solution
              </h3>
              <p className="text-muted-foreground">
                5AM Coder provides the mental space, committed time, and a supportive community of like-minded 
                coders, along with expert guidance to help you master coding consistently.
              </p>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-16">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Thriving Community",
                description: "Connect with passionate coders who inspire and support your journey."
              },
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "21 Days of Guided Learning",
                description: "Work alongside experts, solving real problems and writing production-grade code."
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Certificate of Achievement",
                description: "Complete the 21-Day Code Challenge and earn recognition for your growth."
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Coding Section */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">Why Coding? Why Now?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Bot className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">"Is coding worth it in the age of AI?"</h3>
                </div>
                <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                  Yes. A thousand times YES.
                </p>
                <p className="text-muted-foreground">
                  Here's the thing. AI is impressive. No doubt. But do you know what powers AI?
                </p>
                <div className="stagger-animation space-y-2">
                  <p className="text-lg font-semibold">Coders.</p>
                  <p className="text-lg font-semibold">Developers.</p>
                  <p className="text-lg font-semibold">People like you.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Code className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">The Future is Building</h3>
                </div>
                <p className="text-muted-foreground">
                  Take the story of DeepSeek vs OpenAI. A small team of passionate coders and researchers 
                  took on a corporate giant — and know what, they<span className="text-lg font-semibold"> WON</span>.
                </p>
                <p className="text-muted-foreground">
                  They didn't just follow trends; they built the foundation from scratch with hardcore skills.
                </p>
                <div className="stagger-animation pt-4">
                  <p className="text-lg font-semibold text-primary">
                    The future isn't just about using AI.
                  </p>
                  <p className="text-lg font-semibold">
                    It's about creating it.
                  </p>
                  <p className="text-lg">
                    And coding is your gateway to building, not just consuming.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="space-y-12">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border border-border animate-fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                alt="Sasi Varna Kumar" 
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/50"
              />
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-4xl font-bold">Meet Your Mentor – Sasi Varna Kumar</h2>
                <p className="text-lg text-muted-foreground">
                  A seasoned tech leader with over 15 years of experience, Sasi brings his wealth of knowledge 
                  as CEO & Founder of Tealorca Software Solutions, Director of Deecodes, and Co-founder of J2Store.
                </p>
                <Button variant="outline" className="group">
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:text-primary" />
                  Watch Introduction Video
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Why 5AM Section */}
        <section className="space-y-12">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border border-border animate-fade-up">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Sunrise className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Why 5AM?</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Mornings are quiet. Distraction-free. And there's a special kind of magic in starting your day early with purpose.
                </p>
                <p>
                  At 5AM, it's just you, your thoughts, and your commitment. It's where clarity meets action.
                </p>
                <p>
                  This isn't just about coding. It's about building a lifestyle of discipline, focus, and growth.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 animate-fade-up">
          <h2 className="text-5xl font-bold">Ready to Rise at 5AM?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our next batch and become part of a movement that's transforming lives through code.
            This initiative is completely FREE - driven by passion, not profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Join Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:border-primary"
            >
              Learn More
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}