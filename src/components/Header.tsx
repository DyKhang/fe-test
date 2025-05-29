import { List } from "lucide-react";

import { Search } from "@/components/Search";
import { Filter } from "@/components/Filter";

export const Header = () => {
  return (
    <header className="flex lg:items-center p-4 pt-6 flex-wrap flex-col lg:flex-row gap-3 lg:gap-0">
      <div className="flex items-center justify-center lg:justify-start">
        <List size={20} />

        <h1 className="ml-2.5">My Projects</h1>
      </div>

      <div className="ml-auto w-full lg:w-[300px] ">
        <Search />
      </div>

      <div className="lg:ml-3">
        <Filter />
      </div>
    </header>
  );
};
