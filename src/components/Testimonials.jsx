import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import p1 from "./../assets/p1.jpg";
import p2 from "./../assets/p2.jpg";
import p3 from "./../assets/p3.jpg";
import p4 from "./../assets/p4.jpg";
import p5 from "./../assets/p5.jpg";
import p6 from "./../assets/p6.jpg";

const testimonials = [
  { name: "John Doe", quote: "This is an amazing service!", photo: p1 },
  { name: "Jane Smith", quote: "A great experience!", photo: p2 },
  { name: "Michael Brown", quote: "The best service I've used.", photo: p3 },
  { name: "Emily Davis", quote: "Fantastic experience!", photo: p4 },
  { name: "Chris Johnson", quote: "Highly recommended!", photo: p5 },
  { name: "Sarah Lee", quote: "Exceeded expectations!", photo: p6 }
];

const Testimonials = () => {
  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <h1 className="text-4xl text-[var(--text-color)] font-bold text-center mb-12">
        Testimonials
      </h1>
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex gap-8 overflow-x-auto scroll-smooth pb-8"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              photo={testimonial.photo}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
