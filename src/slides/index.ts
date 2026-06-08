import type { Slide } from "../types";
import { introSlides } from "./01-intro";
import { versionControlSlides } from "./02-version-control";
import { gitBasicsSlides } from "./03-git-basics";
import { branchingSlides } from "./04-branching";
import { githubSlides } from "./05-github";
import { gitlabSlides } from "./06-gitlab";
import { educationSlides } from "./07-github-education";
import { labSlides } from "./08-lab";

export const slides: Slide[] = [
  ...introSlides,
  ...versionControlSlides,
  ...gitBasicsSlides,
  ...branchingSlides,
  ...githubSlides,
  ...gitlabSlides,
  ...educationSlides,
  ...labSlides,
];
