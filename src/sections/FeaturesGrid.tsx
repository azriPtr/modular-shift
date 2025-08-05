import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "Automated Migration Workflows",
  "Seamless Integration Support",
  "Performance Analytics Dashboard",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:6xl">
                Modernize. Optimize. Accelerate.
              </h2>
              <p className="text-xl text-zinc-400 mt-8">
                Everything you need to upgrade your web project with confidence.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D Image"
                  className="size-96 max-w-none"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Image"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0">
                <img
                  src="/assets/images/cone.png"
                  alt="Cone 3D Image"
                  className="size-96 max-w-none z-0 rotate-12"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere 3D Image"
                  className="absolute top-3/4 -z-10 left-0"
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:6xl">
                Confidence in Every Transition
              </h2>
              <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
                <p>
                  Upgrading your website can feel overwhelming, but Modular
                  Shift turns uncertainty into peace of mind. Our expert team
                  guides you through every phase, ensuring your content, design,
                  and integrations move safely—without any headaches or
                  surprises.
                </p>
                <p>
                  As your business evolves, your site can too. We build for the
                  future, so you can pivot, scale, and adapt quickly, always
                  backed by secure foundations and the latest technology.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
