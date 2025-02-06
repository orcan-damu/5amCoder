"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      title: "Code in Action",
      description: "Early morning coding session at the 5AM Coder headquarters."
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      title: "Community Meetup",
      description: "5AM Coders gathering to share knowledge and experiences."
    },
    {
      url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
      title: "Workshop Session",
      description: "Hands-on learning with industry experts."
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      title: "Coding Challenge",
      description: "Participants during our 21-day coding challenge."
    },
    {
      url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop",
      title: "Tech Talk",
      description: "Knowledge sharing session on modern development practices."
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      title: "Team Collaboration",
      description: "5AM Coders working together on a project."
    }
  ];

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Moments captured from our journey of coding excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}