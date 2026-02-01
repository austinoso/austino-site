import { Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  icon: LucideIcon;
  publishedDate: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  sections: {
    heading: string;
    content: string;
  }[];
}

const stakeSight: Project = {
  slug: "stake-sight",
  title: "Stake Sight: Professional Data & Licensing Ecosystem",
  excerpt:
    "A complete commercial platform built from the ground up—combining a high-performance browser extension with custom licensing infrastructure and automated crypto payments.",
  category: "Full-Stack Platform",
  readTime: "14 min read",
  icon: Target,
  publishedDate: "January 20, 2026",
  challenge:
    "Build a comprehensive commercial platform that combines a high-performance browser extension capable of managing 10,000+ data points with a complete licensing infrastructure, payment processing, and administrative tools—all from scratch.",
  solution:
    "Engineered a dual-system architecture: a performance-optimized browser extension with persistent local storage for real-time data tracking, paired with a full commercial platform featuring custom authentication, automated crypto payments, and comprehensive admin tools.",
  results: [
    "Handles 10,000+ data points without performance degradation",
    "Zero-friction automated crypto payment processing",
    "Real-time license verification across all user sessions",
    "Complete user lifecycle management from acquisition to support",
    "Seamless cross-platform synchronization and data persistence",
  ],
  techStack: [
    "TypeScript",
    "React",
    "Chrome Extension APIs",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Crypto Payment APIs",
    "IndexedDB",
  ],
  sections: [
    {
      heading: "The Extension: High-Volume Data Management",
      content:
        "Stake Sight is a specialized toolkit designed for high-frequency gaming platforms. At its core is a persistent, local database that automatically stores and organizes thousands of rounds for Stake Keno and Stake Mines. The extension provides strategic insights by visualizing historical patterns and session data, allowing users to make more informed decisions based on their own strategies. The system is engineered for reliability—built to handle 10,000+ data points without impacting browser performance or system stability. Every technical decision prioritized speed and data integrity.",
    },
    {
      heading: "Technical Architecture: Performance-First Design",
      content:
        "The extension leverages IndexedDB for efficient client-side storage, allowing instant data retrieval even with massive datasets. Built with React and TypeScript, the UI renders thousands of data points with virtualized lists and optimized render cycles. Background scripts handle data capture and synchronization without blocking the user interface. Memory management was critical—implemented automatic data cleanup and archival strategies to prevent browser memory bloat during extended sessions. The result is a tool that feels instant regardless of dataset size.",
    },
    {
      heading: "The Platform: Custom Commercial Infrastructure",
      content:
        "To support the tool, I engineered a full-scale commercial platform from the ground up to manage the entire user lifecycle and revenue stream. The licensing and security system consists of a custom-built dashboard that handles user accounts and verifies premium access in real-time. Automated crypto payment processing enables seamless, automated license acquisition without manual intervention. An admin suite provides private internal tools for managing user data, monitoring system health, and overseeing business operations. Every component was built to scale and operate autonomously.",
    },
    {
      heading: "Payment & Licensing Flow",
      content:
        "The payment system integrates cryptocurrency processing APIs to handle license purchases automatically. When a user initiates a purchase, the system generates a unique payment address, monitors the blockchain for transaction confirmation, and immediately provisions access upon verification. License keys are generated server-side with cryptographic security, then verified in real-time by the extension before granting premium features. This creates a completely automated pipeline from purchase intent to feature access—no manual processing required.",
    },
    {
      heading: "Admin & Operations Dashboard",
      content:
        "Built a comprehensive internal dashboard for business operations: user management with detailed activity logs and license status, system health monitoring with real-time metrics on extension usage and performance, payment tracking with transaction history and revenue analytics, and support tools for quickly resolving user issues and managing refunds. The dashboard provides complete visibility into every aspect of the platform, enabling data-driven decisions and rapid issue resolution.",
    },
    {
      heading: "Security & Data Integrity",
      content:
        "Security was paramount for handling payments and user data. Implemented JWT-based authentication with secure token rotation, encrypted all sensitive data both at rest and in transit, built rate limiting and abuse prevention into the API layer, and designed the license verification system to be tamper-resistant. The extension validates its license on every session start and periodically during use, ensuring only legitimate users access premium features. All payment processing follows best practices with no storage of sensitive financial information.",
    },
    {
      heading: "Results & Business Impact",
      content:
        "Stake Sight demonstrates the full spectrum of product engineering—from low-level performance optimization in the browser extension to high-level business infrastructure for monetization and operations. The platform runs autonomously, handling payments, provisioning access, and supporting users without manual intervention. The extension delivers a professional-grade user experience even under extreme data loads. This project showcases the ability to build complete commercial systems from concept to production, handling both technical complexity and business requirements.",
    },
  ],
};

export default stakeSight;
