"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2, Rocket, Shield } from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold gradient-text">
              Join the 5AM Coder Movement
            </h1>
            <p className="text-xl text-muted-foreground">
              Take the first step towards transforming your coding journey.
              Join a community of passionate developers who rise early to achieve more.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Expert-Led Learning</h3>
                  <p className="text-muted-foreground">Learn from industry veterans</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Lifetime Access</h3>
                  <p className="text-muted-foreground">Join once, learn forever</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Career Growth</h3>
                  <p className="text-muted-foreground">Accelerate your development</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Coding Experience</Label>
                <Input
                  id="experience"
                  placeholder="Beginner / Intermediate / Advanced"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Join Now
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}