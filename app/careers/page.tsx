"use client";

import { useState, useEffect } from "react";
import { FaBriefcase, FaBuilding, FaUsers, FaTimes } from "react-icons/fa";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../gallery/personalDetails";
import { AnimatedHeader } from "@/components/animated-header"

// Define job array
const jobs = [
  {
    id: 1,
    title: "Model Maker",
    description: "The ideal candidate should be skilled in working with various materials, tools, and techniques to create accurate and high-quality physical models. Strong attention to detail and manual dexterity Ability to interpret technical drawings and plans.",
  },
  {
    id: 2,
    title: "3D Visualizer (SketchUp Expert)",
    description: "We are looking for a creative 3D visualizer with strong proficiency in Google SketchUp. The candidate will be responsible for developing detailed 3D models and visual representations for architectural and conceptual presentations. Ability to create precise and visually compelling 3D models Understanding of architectural drawings and spatial design",
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://formcarry.com/s/ZurztHP1rNK", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus("Thank you! Your application has been submitted.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsModalOpen(false), 2000); // Close modal after 2s
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error submitting form. Please try again later.");
    }
  };

  // Handle modal toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormStatus(""); // Reset form status when opening/closing
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-outfit">
      <AnimatedHeader />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750412397/rdmod/gen/vvaip8gfkcaldawtzkiv.png')`,
        }}
      >
        <div className="text-center text-white prose prose-headings:font-forum">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Join Our Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover exciting career opportunities and become part of our innovative, collaborative community.
          </p>
          <button
            onClick={toggleModal}
            className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-card w-full">
        <div className="container mx-auto px-0">
          <h2 className="text-3xl md:text-4xl font-forum text-center mb-8">At RD Models</h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
            <p>
              At RD Models, we’re more than a model-making company — we’re a team of innovators, designers,
              and problem-solvers dedicated to shaping impactful ideas into reality. We believe in a culture of
              collaboration, creativity, and continuous growth.
            </p>
            <p>
              Join us to work on cutting-edge projects, grow your skills, and contribute to a vision that inspires change.
            </p>
          </div>
        </div>
      </section>

      {/* Work Environment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-forum text-center mb-8">Our Work Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUsers className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-jost font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground">
                Work alongside talented individuals in a supportive, team-oriented environment.
              </p>
            </div>
            <div className="text-center">
              <FaBuilding className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-jost font-semibold mb-2">Modern Workspace</h3>
              <p className="text-muted-foreground">
                Enjoy a well-equipped studio filled with the latest tools and resources.
              </p>
            </div>
            <div className="text-center">
              <FaBriefcase className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-jost font-semibold mb-2">Career Growth</h3>
              <p className="text-muted-foreground">
                Access opportunities for professional development and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-forum text-center mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-background p-6 rounded-md shadow-md border border-border"
              >
                <h3 className="text-xl font-jost font-semibold text-primary">{job.title}</h3>
                <p className="text-muted-foreground mt-2">{job.description}</p>
                <button
                  onClick={toggleModal}
                  className="mt-4 inline-block text-primary hover:underline"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-card p-8 rounded-md shadow-xl max-w-lg w-full relative animate-appear">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close modal"
            >
              <FaTimes className="h-5 w-5" />
            </button>
            <h2 id="modal-title" className="text-2xl font-forum mb-6 text-center">
              Apply Now
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-jost text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-input rounded-md focus:ring focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-jost text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-input rounded-md focus:ring focus:ring-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-jost text-foreground">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-input rounded-md focus:ring focus:ring-primary"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-jost text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-input rounded-md focus:ring focus:ring-primary"
                  placeholder="Tell us about yourself and the position you're interested in"
                  rows={4}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Submit Application
              </button>
              {formStatus && (
                <p className={`text-center mt-4 ${formStatus.includes("Error") ? "text-destructive" : "text-primary"}`}>
                  {formStatus}
                </p>
              )}
              <p className="text-center text-muted-foreground mt-4">
                message us on{" "}
                <a
                  href={`https://wa.me/919672232299`}
                  className="text-primary hover:underline"
                >
                  WhatsApp
                </a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}