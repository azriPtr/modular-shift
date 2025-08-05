import { CutCornerButton } from "../components/CutCornerButton";

export const HeaderSection = () => {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg px-1 py-7 z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-zinc-50">
              Modular Shift
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <CutCornerButton className="hidden md:inline-flex">
              GET STARTED
            </CutCornerButton>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
