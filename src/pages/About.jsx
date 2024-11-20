import React from "react";

const About = () => {
  return (
    <div className="mt-8 mb-24">
      <h1 className="text-center text-4xl font-bold mb-6 underline underline-offset-8">
        About Me
      </h1>
      <div data-aos="fade-up" className=" p-12 shadow-lg border rounded-xl">
        <h2 className="text-3xl mb-3 font-semibold">
          Hi, I’m Ansarul Islam Riyad
        </h2>
        <p className="text-gray-600 mx-auto">
          I’m a web development student at{" "}
          <span className="text-purple-500 font-medium">Programming Hero.</span>{" "}
          Currently, I’m focused on building user-friendly, responsive websites
          and web applications. My goal is to create impactful and functional
          web solutions, and this platform, <strong>Discount Pro</strong>, is an
          example of my ongoing learning and growth. In addition to working on
          this project, I enjoy exploring new technologies and continuously
          challenging myself to improve my skills. Below are some of my other
          projects that showcase my growth as a developer.
        </p>
      </div>
      <h2 className="text-3xl font-semibold text-center mt-12 mb-8">
        My Other Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div data-aos="fade-up" className="border p-6 text-center shadow-md rounded-2xl">
          <div className="p-4 border rounded-xl h-56">
            <img
              className="h-full mx-auto"
              src="https://i.ibb.co.com/C5wbHKP/gadget-hvn.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-semibold mt-2 mb-2">Gadget Heaven</h2>
          <p className="text-gray-500">GadgetHeaven is an e-commerce site for buying the latest gadgets with a seamless shopping experience.</p>
          <button className="btn bg-[#28b5f6] text-white rounded-md mt-3">
            <a href="https://gadget-heaven-10.netlify.app/" target="_blank">
              View Website
            </a>
          </button>
        </div>
        <div data-aos="fade-up" className="border p-6 text-center shadow-md rounded-2xl">
          <div className="p-4 border rounded-xl h-56">
            <img className="h-full mx-auto" src="https://i.ibb.co.com/6NRWMK3/bpl.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold mt-2 mb-2">BPL Dream 11</h2>
          <p className="text-gray-500">BPL Dream 11 is a web app that lets users claim credits, build their dream cricket squad, and manage player selections with ease.</p>
          <button className="btn bg-[#28b5f6] text-white rounded-md mt-3">
            <a href="https://react-bpl-dream-11.netlify.app/" target="_blank">
              View Website
            </a>
          </button>
        </div>
        <div data-aos="fade-up" className="border p-6 text-center shadow-md rounded-2xl">
          <div className="p-4 border rounded-xl h-56">
            <img className="h-full mx-auto" src="https://i.ibb.co.com/pPkr8LC/pet.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold mt-2 mb-2">Peddy - Pet Adoption</h2>
          <p className="text-gray-500">Peddy is a pet adoption platform where you can browse, choose, and adopt pets from various categories.Description</p>
          <button className="btn bg-[#28b5f6] text-white rounded-md mt-3">
            <a
              href="https://assignment-06-pet-adoption.netlify.app/"
              target="_blank"
            >
              View Website
            </a>
          </button>
        </div>
        <div data-aos="fade-up" className="border p-6 text-center shadow-md rounded-2xl">
          <div className="p-4 border rounded-xl h-56">
            <img className="h-full mx-auto" src="https://i.ibb.co.com/Fnf0X9r/chef.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold mt-2 mb-2">Chefs Table</h2>
          <p className="text-gray-500">Chef's Table is a recipe platform where you can search, discover, and cook a variety of delicious dishes.</p>
          <button className="btn bg-[#28b5f6] text-white rounded-md mt-3">
            <a href="https://react-chefs-table-10.netlify.app/" target="_blank">
              View Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
