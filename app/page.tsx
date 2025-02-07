"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { 
  Code2, Sunrise, Users, CheckCircle2, Clock, Target, 
  Brain, Code, Coffee, ArrowRight, Terminal, Book, 
  Lightbulb, Star, RocketIcon, HelpCircle
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import codingAnimation from '@/public/animations/coding-animation.json';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
        backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 40%)`
      }}
    >
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* 1. Hero Section - Split Screen Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="text-7xl font-bold">
              <span className="text-primary">Join the 5AM Coder</span> Movement!
            </h1>
            <p className="text-xl text-muted-foreground">
              Coding deserves your clarity, commitment, and community.
            </p>
            <Button size="lg" className="text-lg px-8">
              Start Your Coding Journey Today <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="relative h-[500px]">
          <Lottie 
              animationData={require('@/public/animations/coffee.json')}
              className="w-full h-full"
            />
            {/* Floating code snippets animation overlay */}
            
          </div>
        </section>

        {/* 2. Introduction Section - Two Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">What is a 5AM Coder?</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Let's face it—there's no shortage of knowledge or resources to learn coding in today's world. 
                You've seen the endless tutorials, free courses, and YouTube videos.
              </p>
              <div className="space-y-4">
                <p className="text-xl font-semibold">But, let's be honest with ourselves for a moment.</p>
                <p className="text-xl font-bold text-primary">Did you actually learn anything? Did you stay consistent?</p>
                <p className="text-xl font-bold">No?<br/>Why?</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Because even though the internet is bursting with information, what it lacks is:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-lg"><strong>Clarity.</strong> Where do I even start?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-lg"><strong>Commitment.</strong> Am I really sticking to this?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-lg"><strong>Support.</strong> Who's guiding me when I feel stuck?</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                That's where <span className="text-primary font-bold">5AM Coder</span> steps in.
              </p>
              <p className="text-lg">
                We're not just another platform or course.<br/>
                We're a <strong>community</strong>, a <strong>support system</strong>, and a <strong>movement</strong> for budding coders and wannabe software engineers like you.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-xl font-semibold">Oh, and did I mention?</p>
                <p className="text-2xl font-bold text-primary">This initiative is FREE.</p>
                <p className="text-lg">Absolutely no commercial intent. Just passion, purpose, and the drive to help you succeed.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <Lottie 
              animationData={require('@/public/animations/Animation - 1738866576765 (1).json')}
              className="w-full h-full"
            />
          </div>
        </section>

        {/* New: Why Coding Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Why Coding? Why Now?</h2>
          <div className="space-y-6">
            <div className="bg-secondary/10 p-8 rounded-lg">
              <p className="text-2xl font-semibold mb-4">"Is coding even worth it in the age of AI?"</p>
              <p className="text-xl font-bold text-primary mb-4">Yes. A thousand times YES.</p>
              <p className="text-lg">
                Here's the thing. AI is impressive. No doubt. But do you know what powers AI?<br/>
                <span className="font-bold">Coders. Developers. People like you.</span>
              </p>
            </div>
            <Card className="p-6">
              <p className="text-lg">
                Take the story of DeepSeek vs OpenAI. A small team of passionate coders and researchers 
                took on a corporate giant—and won. They didn't just follow trends; they built the 
                foundation from scratch with hardcore skills.
              </p>
            </Card>
            <p className="text-xl">
              The future isn't just about <em>using</em> AI. It's about creating it. 
              And coding is your gateway to building, not just consuming.
            </p>
          </div>
        </section>

        {/* Updated: Meet Your Mentor Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Meet Your Mentor – Sasi Varna Kumar</h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg">
                  5AM Coder is led by <strong>Sasi Varna Kumar</strong>, a seasoned tech leader 
                  with over <strong>15 years of experience</strong> in software development and IT consulting.
                </p>
                <p className="text-lg">
                  When you join 5AM Coder, you're not just learning code—you're learning from someone 
                  who's been where you are and knows exactly how to help you succeed.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold">Current Roles:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      CEO & Founder of Tealorca Software Solutions Pvt. Ltd.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Director of Deecodes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Co-founder of J2Store
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Lottie 
                  animationData={require('@/public/animations/mentor.json')}
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Updated: Why 5AM Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2">
            <Sunrise className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Why 5AM?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <Coffee className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Quiet Mornings</h3>
              <p className="text-muted-foreground">
                Mornings are quiet. Distraction-free. And there's a special kind of magic 
                in starting your day early with purpose.
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <Brain className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Mental Clarity</h3>
              <p className="text-muted-foreground">
                At 5AM, it's just you, your thoughts, and your commitment. 
                It's where clarity meets action.
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Lifestyle of Growth</h3>
              <p className="text-muted-foreground">
                This isn't just about coding. It's about building a lifestyle of 
                discipline, focus, and growth.
              </p>
            </Card>
          </div>
        </section>

        {/* Updated: Final CTA Section */}
        <section className="text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Start?</h2>
          <div className="space-y-4">
            <p className="text-xl">
              We're opening up enrollment for our next batch!<br/>
              Don't wait. Don't overthink.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Join the Movement Now <ArrowRight className="ml-2" />
            </Button>
            <div className="mt-8">
              <p className="text-lg text-muted-foreground">
                Coding isn't just a skill. It's a journey—and you don't have to do it alone.<br/>
                Let's rise together. At 5AM.
              </p>
            </div>
          </div>
          <Lottie 
            animationData={require('@/public/animations/celebration.json')}
            className="w-32 h-32 mx-auto"
          />
        </section>

        {/* 3. Course Highlights - Horizontal Cards */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Course Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intro to Programming",
                icon: <Terminal className="w-8 h-8" />,
                description: "Start your journey with the basics"
              },
              {
                title: "Scratch Programming",
                icon: <Code2 className="w-8 h-8" />,
                description: "Learn visual programming concepts"
              },
              {
                title: "Developer Mindset",
                icon: <Brain className="w-8 h-8" />,
                description: "Think like a professional developer"
              }
            ].map((module, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
                  <div className="text-primary">{module.icon}</div>
                  <h3 className="text-xl font-semibold">{module.title}</h3>
                  <p className="text-muted-foreground">{module.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Why Choose Us - Grid Layout */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 space-y-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">A Thriving Community of Coders</h3>
              <p className="text-muted-foreground">
                Surround yourself with like-minded individuals who inspire, support, and challenge you to grow.
              </p>
            </Card>
            <Card className="p-8 space-y-4">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">21 Days of Guided Learning</h3>
              <p className="text-muted-foreground">
                You won't be doing this alone. You'll work alongside a real expert, solving problems, 
                writing code, and breaking through barriers.
              </p>
            </Card>
            <Card className="p-8 space-y-4">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Certificate of Achievement</h3>
              <p className="text-muted-foreground">
                Complete the 5AM 21-Day Code Challenge, and walk away with a sense of pride, 
                a community, and a certificate to prove it.
              </p>
            </Card>
          </div>
          <div className="text-center space-y-4">
            <p className="text-2xl font-bold">500+ Students</p>
            <p className="text-xl">Rated 4.9/5 by beginners</p>
          </div>
        </section>

        {/* 5. Testimonials - Carousel */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Success Stories</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {/* Add testimonial cards here */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* 6. Interactive Demo - Tabs */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Try it Yourself</h2>
          <Tabs defaultValue="scratch" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="scratch">Scratch Demo</TabsTrigger>
              <TabsTrigger value="python">Python Basics</TabsTrigger>
            </TabsList>
            <TabsContent value="scratch">
              {/* Embed Scratch demo */}
            </TabsContent>
            <TabsContent value="python">
              {/* Embed Python editor */}
            </TabsContent>
          </Tabs>
        </section>

        {/* 7. Pricing Plans - Three Column */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Join the Movement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add pricing cards here */}
          </div>
        </section>

        {/* 8. FAQ - Accordion */}
        <section className="space-y-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need prior experience?</AccordionTrigger>
              <AccordionContent>
                No prior coding experience needed! We start from the absolute basics.
              </AccordionContent>
            </AccordionItem>
            {/* Add more FAQ items */}
          </Accordion>
        </section>
      </div>
    </div>
  );
}