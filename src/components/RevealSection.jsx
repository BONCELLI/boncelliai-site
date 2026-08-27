import { motion, useReducedMotion } from "framer-motion";

// Wrap any section in <RevealSection> to get a fade + slide-up animation
// that plays once when the section scrolls into view. Automatically
// disables motion for users with prefers-reduced-motion enabled.
export default function RevealSection({
  children,
  className = "",
  delay = 0,
  as = "section",
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.section;

  const hidden = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 };
  const visible = { opacity: 1, y: 0 };

  return (
    <Component
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
