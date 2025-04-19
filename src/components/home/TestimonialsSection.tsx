
import { useState } from "react";
import { mockTestimonials } from "@/data/mockData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === mockTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? mockTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-blood-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our donors, recipients, and partners about their experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="absolute top-6 left-6 text-blood-100">
              <Quote className="h-20 w-20 opacity-30" />
            </div>
            
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-700 font-light italic">
                "{mockTestimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  {mockTestimonials[activeIndex].imageUrl ? (
                    <img 
                      src={mockTestimonials[activeIndex].imageUrl} 
                      alt={mockTestimonials[activeIndex].name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-blood-200 flex items-center justify-center">
                      <span className="text-blood-600 font-semibold">
                        {mockTestimonials[activeIndex].name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold">{mockTestimonials[activeIndex].name}</p>
                  <p className="text-gray-500 text-sm">{mockTestimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              className="mr-2 rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
