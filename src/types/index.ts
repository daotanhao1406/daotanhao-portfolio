// types.ts

// Các kiểu cơ bản cho props UI
export interface MousePosition {
  x?: number;
  y?: number;
}

export interface TransitionContextProps {
  isPending: boolean;
  pageEnter: () => Promise<void>;
  pageExit: (href: string) => Promise<void>;
}

// Các kiểu dữ liệu cho content (About | Skills | Links)

export type LinkObject = {
  label: string;
  value: string;
};

export interface Content {
  name?: string;
  about?: string[];
  skills?: string[];
  navLinks: { data: string[] };
  contacts: { [key: string]: LinkObject[] };
}

// Các kiểu dữ liệu cho Project

export interface ProjectCards {
  index: number;
  name: string;
  slug: string;
  image?: {
    src: string;
    alt?: string;
  };
  tags?: string[];
}

export interface Project extends ProjectCards {
  mdx?: string;
  github?: string;
  live?: string;
}

export interface ProjectProperties {
  name: string;
  slug: string;
  tags?: string[];
  image: {
    src: string;
    alt?: string;
    base64?: string;
  };
  mdx?: string;
  github?: string;
  live?: string;
}
