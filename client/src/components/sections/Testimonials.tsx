import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Ryan is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
  },
  {
    id: 2,
    text: "Working with Ryan was a great experience. He understood our requirements perfectly and created an elegant solution that perfectly fits our needs.",
    author: "Michael Chen",
    position: "Product Manager, Innovation Labs",
  },
  {
    id: 3,
    text: "Ryan's technical expertise and professional approach made our collaboration smooth and successful. I highly recommend him for any web development project.",
    author: "Emma Davis",
    position: "Director, Digital Solutions",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Client Testimonials</h2>
          <p className="text-muted-foreground mt-2">What others say about my work</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-[0_0_100%] min-w-0 pl-4 relative"
                >
                  <Card className="mx-4 h-full">
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                      <p className="text-lg mb-6 italic">{testimonial.text}</p>
                      <div className="mt-auto">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full -translate-x-1/2"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full translate-x-1/2"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-4"
                    : "bg-primary/20"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}