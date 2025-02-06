"use client";

import { Card } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "The Rise of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we write and maintain code.",
      author: "Sasi Varna Kumar",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "Why 5AM is the Perfect Time to Code",
      excerpt: "Discover the science behind early morning productivity and how it can supercharge your coding sessions.",
      author: "Sasi Varna Kumar",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Productivity"
    },
    {
      title: "Building a Developer Mindset",
      excerpt: "Learn the mental models and thought processes that separate great developers from good ones.",
      author: "Sasi Varna Kumar",
      date: "2024-03-05",
      readTime: "10 min read",
      category: "Career Growth"
    }
  ];

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">The Developer's Journal</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and stories from the coding trenches.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="p-6 card-hover">
              <article className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}