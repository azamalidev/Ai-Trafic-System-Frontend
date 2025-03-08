import React from "react";
import { motion } from "framer-motion";

const ChooseUs = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations of children
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    show: { opacity: 1, y: 0 }, // Animate into view
  };

  const cards = [
    {
      title: "Competitive Quotes",
      description:
        "Get access to the most competitive quotes tailored for your needs.",
      color: "#56D9B9",
    },
    {
      title: "Hassle-Free Earnings",
      description: "Earn seamlessly with our simplified and transparent system.",
      color: "#56D9B9",
    },
    {
      title: "Simplified Process",
      description: "Enjoy a user-friendly process that saves time and effort.",
      color: "#56D9B9",
    },
  ];

  return (
    <section className=" pb-24 flex justify-center items-center mt-20 ">
      <motion.div
        className="text-center max-w-5xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is in view
      >
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-14"
          variants={item}
        >
          Why Choose LeadGenPro?
        </motion.h2>
        <div className="flex flex-col gap-8 ">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col text-left shadow p-3 rounded"
              variants={item}
            >
              <div className="flex items-center gap-4">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: card.color }}
                ></span>
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 ml-8">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ChooseUs;
