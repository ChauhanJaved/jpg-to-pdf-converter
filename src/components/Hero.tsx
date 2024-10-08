"use client";

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { FileProvider } from "@/context/FileContext";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/UI/resizable";

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 xl:max-w-screen-xl"
      >
        <SectionHeader
          caption="JPG to PDF Converter"
          desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
          className="mt-10"
        />
        <ResizablePanelGroup
          direction="horizontal"
          className="mb-10 mt-10 min-h-[200px] w-full rounded-lg border"
        >
          <ResizablePanel defaultSize={75}>
            <Dropzone />
          </ResizablePanel>
          <ResizableHandle withHandle className="invisible sm:visible" />
          <ResizablePanel className="hidden items-center justify-center sm:flex">
            Settings
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </FileProvider>
  );
};

export default Hero;
