import React from "react";
import { HeroLeistungen } from "./HeroLeistungen";
import { VideoScrollSection } from "../home/VideoScrollSection";
import { Layout239 } from "./Layout239";
import { Layout16 } from "./Layout16";
import { Layout239_1 } from "./Layout239_1";

export default function Page() {
  return (
    <div>
      <HeroLeistungen />
      <VideoScrollSection />
      <Layout239 />
      <Layout16 />
      <Layout239_1 />
    </div>
  );
}
