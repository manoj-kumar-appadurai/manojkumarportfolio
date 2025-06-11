// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Manoj Kumar Appadurai",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "manojkumarappadurai@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/manoj-kumar-appadurai/",
  instagram: "https://www.instagram.com/____mxnoj__/",
  facebook: "https://www.facebook.com/manoj.appadurai",
  behance: "https://www.behance.net/manojkumar_",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "SIDBI Website",
    image: "/projects/sidbi.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Official marketing website for SIDBI, a financial institution offering banking and loan services to support small and medium enterprises in India.",
    gradient: ["#00B6F0", "#D2DF43"],
    url: "https://www.sidbi.in/en/",
    tech: ["html", "css", "javascript", "jQuery", "bootstrap"],
  },
  {
    name: "Zenro",
    image: "/projects/zenro.jpg",
    blurImage: "/projects/blur/zenro-blur.jpg",
    description: "A modern payroll application with an integrated CMS, designed to simplify payroll management and streamline HR operations for businesses.ss",
    gradient: ["#631DD0", "#2871FA"],
    url: "https://zenropayroll.com/",
    tech: ["figma", "gsap", "html", "css", "javascript", "jQuery", "bootstrap"],
  },
  {
    name: "Farmaze",
    image: "/projects/farmaze.jpg",
    blurImage: "/projects/blur/farmaze-blur.jpg",
    description: "A tech-driven platform transforming the fresh produce supply chain by enhancing efficiency, sustainability, and accessibility for businesses and consumers.",
    gradient: ["#16A34A", "#4ade80"],
    url: "https://www.farmaze.com/",
    tech: ["react", "AI"],
  },

];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "gsap",
    "tailwind",
    "html",
    "css",
    "jquery",
    "bootstrap",
  ],
  userInterface: ["figma", "photoshop", "canva"],
  other: ["git"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Designer at Touchmark Descience Pvt Ltd",
    size: ItemSize.SMALL,
    subtitle:
      "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
    image: "/timeline/touchmark.svg",
    slideImage: "/timeline/touchmark.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Trainee at Active Vertex Pvt Ltd",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems around Livingroom device performance",
    image: "/timeline/activevertex.svg",
    slideImage: "/timeline/activevertex.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
