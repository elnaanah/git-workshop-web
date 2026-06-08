import type { ComponentType } from "react";

export type Slide = {
  id: string;
  section: string;
  title: string;
  keywords: string[];
  notes: string;
  component: ComponentType;
};

export type CommandInfo = {
  command: string;
  explanation: string;
  when: string;
  example: string;
  output: string;
};
