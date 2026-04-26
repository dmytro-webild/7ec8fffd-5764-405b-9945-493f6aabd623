"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Innovation",
          id: "about",
        },
        {
          name: "Impact",
          id: "metrics",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="GreenFuture"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Innovating the Future of Sustainability"
      description="Leading the transition to green energy through architectural marvels like Masdar City."
      kpis={[
        {
          value: "100%",
          label: "Renewable Potential",
        },
        {
          value: "0",
          label: "Carbon Footprint",
        },
        {
          value: "10K+",
          label: "Innovators Inspired",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/surreal-geometric-shapes-barren-desert_23-2151296290.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248478.jpg",
          alt: "Blending futuristic building seamlessly into desert landscape",
        },
        {
          src: "http://img.b2bpic.net/free-photo/futuristic-business-building-architecture_23-2151003670.jpg",
          alt: "Futuristic business building architecture",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-building-illuminated-night_1150-18357.jpg",
          alt: "Modern building illuminated at night",
        },
        {
          src: "http://img.b2bpic.net/free-photo/futuristic-business-building-architecture_23-2151003674.jpg",
          alt: "Futuristic business building architecture",
        },
        {
          src: "http://img.b2bpic.net/free-photo/detail-green-leaf_23-2148211960.jpg",
          alt: "Detail of a green leaf",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Net-Zero Architecture",
        },
        {
          type: "text",
          text: "Renewable Grid Systems",
        },
        {
          type: "text",
          text: "Sustainable Urbanism",
        },
        {
          type: "text",
          text: "Green Tech Innovation",
        },
        {
          type: "text",
          text: "Climate Neutrality",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="The Masdar City Vision"
      description="Masdar City stands as a global beacon for sustainable development, utilizing advanced urban planning to create a net-zero future through innovation."
      bulletPoints={[
        {
          title: "Zero Carbon Goals",
          description: "Designed from the ground up for extreme energy efficiency.",
        },
        {
          title: "Advanced Technology",
          description: "Integrating cutting-edge renewable power systems into city life.",
        },
        {
          title: "Living Laboratory",
          description: "Testing ground for future-facing sustainable urban solutions.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100368.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Architectural Design",
          author: "Research Division",
          description: "Construction methods that prioritize natural cooling and energy capture.",
          tags: [
            "Architecture",
            "Design",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/urban-skyline-reflection-brings-architecture-life-generated-by-ai_188544-27754.jpg",
        },
        {
          id: "f2",
          title: "Energy Integration",
          author: "Tech Hub",
          description: "Seamless integration of smart solar grids throughout urban architecture.",
          tags: [
            "Renewable",
            "Smart Grid",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-windmill-project_23-2148907401.jpg",
        },
        {
          id: "f3",
          title: "R&D Labs",
          author: "Innovation Unit",
          description: "Collaborative research and development for renewable technology efficiency.",
          tags: [
            "Labs",
            "Innovation",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-scientific-expert-reviewing-samples-high-tech-laboratory-setting-medical-discovery-process_482257-133658.jpg",
        },
      ]}
      title="Core Sustainability Pillars"
      description="The foundation of our commitment to a green energy reality."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "90%",
          description: "Less energy consumed compared to standard developments",
        },
        {
          id: "m2",
          value: "1.2M",
          description: "Tons of carbon reduction annually",
        },
        {
          id: "m3",
          value: "50+",
          description: "Patents filed for clean energy innovations",
        },
      ]}
      title="Our Impact at Scale"
      description="Measured progress toward a cleaner, greener planet."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          handle: "@smiller_energy",
          testimonial: "Masdar's approach to integrated green tech is revolutionary for modern cities.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-team-working-project_23-2148920608.jpg",
        },
        {
          id: "t2",
          name: "David Chan",
          handle: "@dchan_arch",
          testimonial: "The architectural processes here have changed how we view energy efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-doctor-clinic_23-2151997606.jpg",
        },
        {
          id: "t3",
          name: "Elena Rodriguez",
          handle: "@erodriguez_sustain",
          testimonial: "A true living lab that provides invaluable data for future urban planning.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-with-blueprints_23-2148890061.jpg",
        },
        {
          id: "t4",
          name: "James Wilson",
          handle: "@jwilson_innovate",
          testimonial: "The R&D labs are at the forefront of renewable energy technology globally.",
          imageSrc: "http://img.b2bpic.net/free-photo/writing-down-plan_1098-15897.jpg",
        },
        {
          id: "t5",
          name: "Amara Okafor",
          handle: "@aokafor_consult",
          testimonial: "Masdar City is exactly what the world needs for a net-zero future vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-posing-cv_23-2149927605.jpg",
        },
      ]}
      title="Global Expert Feedback"
      description="What researchers and developers say about our sustainable model."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How is energy stored?",
          content: "We utilize advanced battery and thermal storage systems integrated into infrastructure.",
        },
        {
          id: "q2",
          title: "What makes the city sustainable?",
          content: "Net-zero construction and renewable-exclusive energy sources ensure long-term sustainability.",
        },
        {
          id: "q3",
          title: "Can I visit for research?",
          content: "Yes, Masdar City welcomes industry partners and research institutions to collaborate.",
        },
      ]}
      title="Common Questions"
      description="Understanding the process behind green urban development."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact Us"
      title="Join the Innovation"
      description="Get in touch to learn more about our projects and potential research collaborations."
      imageSrc="http://img.b2bpic.net/free-photo/3d-abstract-science-background-with-flowing-particles_1048-17731.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Innovation",
              href: "#about",
            },
            {
              label: "Metrics",
              href: "#metrics",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="GreenFuture"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
