export interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface ProjectDescriptionProps {
  title: string;
  subtitle: string;
  text?: string;
  tags: string[];
  className?: string;
}

export interface ProjectCardProps {
  image: ProjectImageProps;
  description: ProjectDescriptionProps;
  visible: boolean;
}
