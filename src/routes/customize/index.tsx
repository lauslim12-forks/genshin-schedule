import { h } from "preact";

import Search from "./search";
import CharacterList from "./characterList";
import Help from "./help";
import { useConfig } from "../../configs";

const Customize = () => {
  const [search, setSearch] = useConfig("customizeQuery");

  return (
    <div className="container mx-auto p-4">
      <Search value={search} setValue={setSearch} />

      <div className="mt-2">
        <Help />
      </div>

      <div className=" mt-8">
        <CharacterList search={search} />
      </div>
    </div>
  );
};

export default Customize;
