"use client";

import React, { useState } from "react";
import { MdArrowBack, MdArrowForward, MdOutlineStar } from "react-icons/md";
import manPhoto1 from "../assets/portrait-man-laughing.jpg";
import womanPhoto from "../assets/portrait-young-girl-smiling.jpg";
import manPhoto2 from "../assets/portrait-modern-man.jpg";
import Image, { StaticImageData } from "next/image";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  photo: string | StaticImageData;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Marketing Manager",
    photo: womanPhoto,
    rating: 5,
    text: "This product has completely transformed my workflow. Highly recommended!",
  },
  {
    id: 2,
    name: "Bob Smith",
    position: "Software Engineer",
    photo: manPhoto1,
    rating: 4,
    text: "Great service and support. I'm very satisfied with my purchase.",
  },
  {
    id: 3,
    name: "Carol Williams",
    position: "Product Designer",
    photo: manPhoto2,
    rating: 5,
    text: "Exceptional quality and attention to detail. Will definitely buy again!",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <h2 className="text-white text-[40px] text-2xl mb-4 leading-[50px]">
            100+ Customers gave their <strong>Feedback</strong>
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="rounded-md border-[1px] p-2"
            >
              <MdArrowBack className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-md border-[1px] p-2"
            >
              <MdArrowForward className="text-white" />
            </button>
          </div>
        </div>
        <div className="lg:w-2/3 h-[300px] flex flex-col">
          <div className="bg-slate-800 rounded-md flex-grow flex flex-col justify-between p-6">
            <div className="flex-shrink-0 flex flex-row items-center space-x-4 p-6">
              <Image
                src={currentTestimonial.photo}
                alt={`${currentTestimonial.name}'s photo`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-semibold">
                  {currentTestimonial.name}
                </h3>
                <p className="text-white text-sm text-muted-foreground">
                  {currentTestimonial.position}
                </p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStar
                  key={index}
                  className={`w-4 h-4 ${
                    index < currentTestimonial.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-white text-lg overflow-y-auto">
              {currentTestimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
