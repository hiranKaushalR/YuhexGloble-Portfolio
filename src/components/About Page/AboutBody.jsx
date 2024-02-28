import React from "react";
import { motion } from "framer-motion";
import { aboutPage } from "../../assets";

function AboutWhoAreWe() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-30 py-12  flex flex-wrap-reverse justify-evenly gap-6 items-center"
    >
      <div className="w-2/4 min-w-[280px]">
        <h1 className="text-white text-3xl  font-bold">Who Are We ?</h1>
        <p className="text-justify font-poppins">
          Yuhex Global Software is a leading provider of custom web, app, and
          software development solutions. Established in 2022 by Induwara
          Surasinghe, a visionary undergraduate at Birmingham City University in
          the UK, our company is committed to driving innovation and excellence
          in the digital landscape. <br />
          <br />
          We specialize in creating high-quality, customized web applications
          that meet the unique needs of our clients. From e-commerce platforms
          to content management systems and everything in between, we leverage
          the latest technologies and best practices to deliver reliable,
          scalable, and user-friendly web solutions. <br />
          <br />
          Our team of skilled professionals is also proficient in mobile app
          development, offering comprehensive services for both iOS and Android
          platforms. Whether it's a consumer-facing mobile app or a
          business-focused solution, we're dedicated to delivering engaging and
          intuitive apps that enhance user experiences and drive results. <br />
          <br />
          In addition to web and app development, we excel in software
          development, creating tailored solutions that streamline processes,
          improve efficiency, and solve complex business challenges. From custom
          software applications to enterprise-level systems, our goal is to
          empower businesses with innovative software solutions that drive
          success and growth. <br />
          <br />
          At Yuhex Global Software, we pride ourselves on our commitment to
          quality, creativity, and collaboration. We work closely with our
          clients to understand their unique requirements and provide
          personalized solutions that exceed expectations. With a focus on
          delivering exceptional results and building long-term partnerships, we
          are dedicated to helping businesses thrive in the digital age. <br />
          <br />
          Join us on our journey as we continue to innovate, transform
          industries, and redefine the future of software development. Together,
          we can unlock new possibilities and drive positive change in the
          digital world. <br />
          <br />
        </p>
      </div>
      <div>
        <img src={aboutPage} alt="" className="w-[350px]" />
      </div>
    </motion.div>
  );
}

export default AboutWhoAreWe;
