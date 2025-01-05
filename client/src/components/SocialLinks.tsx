import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/ryanhoffman",
    color: "hover:text-[#333]",
    description: "Check out my open source projects"
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "https://linkedin.com/in/ryanhoffman",
    color: "hover:text-[#0077b5]",
    description: "Connect with me professionally"
  },
  {
    name: "Twitter",
    icon: SiTwitter,
    href: "https://twitter.com/ryanhoffman",
    color: "hover:text-[#1da1f2]",
    description: "Follow me for tech insights"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <HoverCard key={social.name}>
          <HoverCardTrigger asChild>
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-muted-foreground transition-colors ${social.color} dark:hover:text-white`}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            <div className="flex justify-between space-x-4">
              <div>
                <h4 className="text-sm font-semibold">{social.name}</h4>
                <p className="text-sm text-muted-foreground">{social.description}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
