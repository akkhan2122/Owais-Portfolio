import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Pic from "../../public/2-artguru-removebg-preview.png"
import { 
  ArrowRight, 
  Code2, 
  Layout, 
  ShoppingCart, 
  Smartphone, 
  CheckCircle2, 
  MessageSquareShare,
  Mail,
  Send,
  Globe,
  Monitor,
  Rocket
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useContactForm } from "@/hooks/use-contact";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";

// Custom Icon wrapper since Lucide doesn't have WhatsApp by default in older versions
const WhatsAppIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

export default function Home() {
  const contactMutation = useContactForm();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

 const projects = [
    {
    title: "Framistan Store",
    category: "E-commerce",
    description:
      "An e-commerce store providing high-quality products across various categories with smooth shopping and checkout experience.",
    url: "https://www.framistan.store/",
  },
     {
  title: "Digital Marketings UK",
  category: "Digital Marketing Agency",
  description:
    "A full-service UK digital marketing agency providing tailored online solutions, including SEO, web development, social media marketing, content creation, and branding to help businesses grow their online presence and generate leads.",
  url: "https://digitalmarketings.uk/",
},
  {
    title: "Cara",
    category: "E-commerce",
    description:
      "A complete e-commerce clothing brand website featuring secure checkout, inventory management, and a responsive design optimized for sales.",
    url: "https://akkhan2122.github.io/E-commerce-website/",
  },
 

  {
  title: "Novixa Digital",
  category: "Digital Marketing & Creative Agency",
  description:
    "A Karachi-based digital agency offering comprehensive services including web development, social media management, video editing, graphic design, AI chatbot automation, and branding to help businesses grow their online presence with creative and strategic digital solutions.",
  url: "https://novixa.digital/",
},

];


  const services = [
    { title: "Web Design", description: "Creating visually appealing and user-friendly interfaces that align with your brand identity.", icon: Layout },
    { title: "Front-End Development", description: "Building responsive, interactive, and high-performance web applications using React & Next.js.", icon: Code2 },
    { title: "E-Commerce Solutions", description: "Developing secure online stores with seamless shopping experiences and payment integration.", icon: ShoppingCart },
    { title: "Mobile Optimization", description: "Ensuring your website functions perfectly across all devices, from desktops to smartphones.", icon: Smartphone },
    { title: "Website Redesign", description: "Transforming outdated websites into modern, high-converting digital assets.", icon: Monitor },
    { title: "Speed Optimization", description: "Enhancing website performance for better SEO rankings and user retention.", icon: Rocket },
  ];

  const testimonials = [
    {
      name: "Ali Khan",
      role: "E-commerce Store Owner",
      content: "Owais  developed our online store with seamless functionality and beautiful design. The conversion rate increased by 40% after launch!",
      projectType: "E-commerce Website",
    },
    {
      name: "Zara Shah",
      role: "Fashion Boutique Owner",
      content: "Our website was delivered in just 5 days with all the features we requested. The attention to detail was exceptional.",
      projectType: "Fashion E-commerce Platform",
    },
    {
      name: "Bilal Ahmed",
      role: "Startup CEO",
      content: "Owais understood our complex requirements and delivered a scalable solution that's both user-friendly and technically robust.",
      projectType: "SaaS Application",
    },
    {
      name: "Ayesha Noor",
      role: "Marketing Director",
      content: "The SEO optimization work Owais did helped us rank on the first page of Google within 2 months. Highly recommended!",
      projectType: "Corporate Website + SEO",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 opacity-50" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">Available for new projects</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight">
              Transforming Ideas Into <span className="text-gradient-primary">Digital Excellence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hi, I'm <span className="text-white font-semibold">Owais Khan</span> – a passionate Full stack web developer crafting high-performance, responsive websites that drive business growth and deliver exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25"
                asChild
              >
                <a href="https://wa.me/923708622217?text=Hi%20Owais%2C%20I%20want%20to%20discuss%20a%20project">
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> Start a Conversation
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-primary/5"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {["Web Development", "Mobile Responsive", "SEO Optimized"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Decorative elements around image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl -rotate-6 opacity-20 blur-xl" />
              
              {/* hero scenic tech laptop */}
              <img 
                src={Pic} 
                alt="Modern web development setup"
                className="relative rounded-3xl shadow-2xl border border-white/10 w-full h-full object-cover z-10"
              />
              
              {/* Floating cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-card border border-border p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 max-w-xs"
              >
                <div className="bg-green-500/10 p-3 rounded-full">
                  <Code2 className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-white">Clean Code</p>
                  <p className="text-xs text-muted-foreground">Modern Best Practices</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 bg-card border border-border p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 max-w-xs"
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Rocket className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-white">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">On Time, Every Time</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* developer working on code */}
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
                alt="Developer working"
                className="rounded-3xl shadow-2xl border border-white/5 w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-3xl pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1">About Me</Badge>
              <h2 className="text-4xl font-bold font-heading">Crafting Digital <br /><span className="text-primary">Excellence</span></h2>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm <strong className="text-white">Owais Khan</strong>, a passionate full-stack developer with expertise in modern web technologies. With over <strong className="text-white">6+ Months</strong> of experience, I specialize in creating high-performance websites using <strong className="text-white">React, Node.js</strong>, and modern CSS frameworks.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I partner with businesses to establish their digital presence with websites that are not just visually stunning but also optimized for performance, accessibility, and conversion.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                {[
                  { value: "5+", label: "Projects Completed" },
                  { value: "6+", label: "Months Experience" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1 mb-4">Portfolio</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">A curated collection of my recent work, showcasing innovative solutions across various industries.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">Interested in working together?</p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1 mb-4">Services</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Web Development Services</h2>
            <p className="text-muted-foreground">I specialize in crafting powerful, responsive websites tailored for businesses, creators, and startups.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border border-primary/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Need a custom solution?</h3>
              <p className="text-muted-foreground">Let's discuss your project with a free consultation.</p>
            </div>
            <Button className="whitespace-nowrap bg-white text-primary hover:bg-white/90 font-bold px-8">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1 mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground">Discover what our clients have to say about their experience working with us.</p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME SECTION */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1">Why Work With Me</Badge>
                <h2 className="text-4xl font-bold font-heading">My Commitment to You</h2>
                <p className="text-muted-foreground">Discover the advantages of choosing a dedicated web developer who prioritizes your success.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { title: "Fast Delivery", desc: "5-8 Days turnaround" },
                  { title: "Affordable Pricing", desc: "Transparent quotes" },
                  { title: "100% Mobile Friendly", desc: "Perfect on all devices" },
                  { title: "Bilingual Support", desc: "Urdu + English" },
                  { title: "WhatsApp Support", desc: "Direct communication" },
                  { title: "Hosting Setup", desc: "Deployment guidance" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full h-fit">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border-l-4 border-primary">
                <p className="italic text-muted-foreground">
                  "I believe in building long-term relationships with my clients by delivering exceptional results and providing ongoing support even after project completion."
                </p>
              </div>
            </div>

            <div className="relative">
               {/* modern workspace setup */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Workspace" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-white/80 text-sm uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1 mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Let's Bring Your Vision to Life</h2>
            <p className="text-muted-foreground">Ready to create something amazing? Let's discuss your project and turn your ideas into reality.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card h-full">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white">Contact Info</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <a 
                    href="https://wa.me/923708622217?text=Hi%20Owais%2C%20I%20want%20to%20discuss%20a%20project"
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="bg-green-500/10 p-3 rounded-full text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                      <p className="font-semibold text-white group-hover:text-primary transition-colors">+92 370 8622217</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:owaiskhanii444@gmail.com"
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="bg-blue-500/10 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-white group-hover:text-primary transition-colors">owaiskhanii444@gmail.com</p>
                    </div>
                  </a>

                  <div className="p-4 bg-secondary/50 rounded-xl border border-white/5 mt-8">
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <p className="text-white font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Within 2 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="bg-secondary/50 border-white/10 h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} className="bg-secondary/50 border-white/10 h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project..." 
                                className="min-h-[150px] bg-secondary/50 border-white/10 resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-semibold"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"} 
                        {!contactMutation.isPending && <Send className="ml-2 w-4 h-4" />}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-white/5 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-heading mb-2">Owais<span className="text-primary"> Khan</span></h3>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Owais Khan. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="mailto:owaiskhanii444@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="https://wa.me/923708622217" className="text-muted-foreground hover:text-primary transition-colors"><WhatsAppIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
