import { achievements } from "@/constants";
import { HoverEffect } from "./ui/card-hover-effect"
import Heading from "./Heading";

const Achievements = () => {
  return (
    <div id="achievements" className="max-w-5xl mx-auto px-8 my-60 flex-col items-center justify-center">
      <Heading head="Achievements"/>
      <HoverEffect items={achievements} />
    </div>
  );
}

export default Achievements