To use Framer Motion animations, install the package with:
npm install framer-motion

Then, you can use the <motion.div> component to animate elements as they enter the viewport.

Example usage for hero cards:

import { motion } from 'framer-motion';

<motion.div
  className="hero-card"
  initial={{ opacity: 0, y: 60, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0 }}
  viewport={{ once: true, amount: 0.5 }}
>
  ...card content...
</motion.div>

You can adjust the delay for each card to create a staggered effect.
