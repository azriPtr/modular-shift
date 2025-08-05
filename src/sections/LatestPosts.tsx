import type { CollectionEntry } from "astro:content";
import { Card } from "../components/Card";
import { getPostColorfromCategory } from "../utils/postUtils";
import { Tag } from "../components/tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";

export const LatestPosts = (props: {
  latestPosts: CollectionEntry<"blog">[];
}) => {
  const { latestPosts } = props;
  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything without limits
          </h2>
          <p className="text-xl md:text-2xl text-center text-zinc-400 mt-8">
            Explore insights, trends, and stories that empower you to push
            boundaries and transform your web projects with confidence and
            creativity.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorfromCategory(category)}
                  className={twMerge(
                    (postIndex === 1 || postIndex === 3) && "md:hidden"
                  )}
                >
                  <Tag color={getPostColorfromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-4">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              )
            )}
          </div>
          <div className="hidden md:flex flex-col gap-8 mt-16">
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorfromCategory(category)}
                  className={twMerge(
                    (postIndex === 0 || postIndex === 2) && "md:hidden"
                  )}
                >
                  <Tag color={getPostColorfromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-4">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              )
            )}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <CutCornerButton>READ THE BLOG</CutCornerButton>
        </div>
      </div>
    </section>
  );
};
