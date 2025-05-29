import { useTaskContext } from "@/hooks/useTaskContext";
import clsx from "clsx";

export const Search = () => {
  const { setQuery, query } = useTaskContext();

  return (
    <label className="h-[44px] relative transition-all duration-200 block rounded-sm border-slate-300 border px-2 group focus-within:border-[#141522]">
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="h-full outline-none w-full"
      />

      <p
        className={clsx(
          "absolute bg-white text-[14px] top-1/2 left-2 -translate-y-1/2 group-focus-within:top-[-2px] group-focus-within:text-[#141522] transition-all duration-200",
          `${query ? "text-[#141522] top-[-2px]" : "text-slate-500"}`
        )}
      >
        Search your task
      </p>
    </label>
  );
};
