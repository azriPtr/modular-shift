import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

twMerge;

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
  const { className, children, color } = props;
  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-400",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500"
      )}
    >
      {children}
    </button>
  );
};
