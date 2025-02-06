import React from "react";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company, mission, and values." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="max-w-3xl p-6 bg-white rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-lg text-gray-700 text-center mb-4">
            Welcome to our company! We are committed to innovation and excellence in everything we do.
          </p>
          <p className="text-lg text-gray-700 text-center mb-4">
            Our mission is to create cutting-edge solutions that empower businesses and improve everyday lives.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Join us on our journey as we continue to push the boundaries of technology and innovation.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
