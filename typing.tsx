import React from "react";
import UseTypingSimulation from "./hook";

export default function Typing() {
  const words = ["one", "two", "three", "four", "five"];
  const more = UseTypingSimulation(words);

  return (
    <p className="mt-6 leading-7 sm:leading-8 font-extralight">
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-medium">
        sentence with words and stuff
        <span>{more}</span>
        <span className="animate-ping">|</span>
      </code>
    </p>
  );
}
