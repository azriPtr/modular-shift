import { twMerge } from "tailwind-merge";

const testimonial = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Hightly recommended!",
    name: "Nevior",
    title: "Product Manager - Roblox",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "The upgrade to Astro was flawless thanks to Modular Shift. Their team handled every detail and even improved our SEO.",
    name: "Amrior",
    title: "Senior Engineer - Blocklink",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
  {
    text: "Modular Shift made what seemed like an impossible migration not just possible, but painless. Our site is now faster, easier to maintain, and the transition didn’t disrupt business for a second!",
    name: "Yeyey",
    title: "CEO - Blast",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonial.map((testimonial, testimonialsIndex) => (
            <blockquote
              key={testimonialsIndex}
              className={twMerge(
                testimonialsIndex === 2 && "md:hidden lg:block"
              )}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${testimonial.avatarImage})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg non-italic font-black">
                      {testimonial.name}
                    </div>
                    <div className="text-zinc-400 non-italic">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
