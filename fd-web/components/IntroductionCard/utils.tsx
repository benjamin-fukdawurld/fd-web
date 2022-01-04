import { JobSectionProps } from "./interfaces";

export function CardHeader() {
  return (
    <div className="heading">
      <h2 className="jobTitle">Ingénieur Fullstack</h2>
      <h3 className="jobDescription">Node 🚀 React 🚀 Typescript </h3>
    </div>
  );
}

export function JobSection(props: JobSectionProps) {
  return (
    <div className="jobSection">
      {props.children}
      <h3>{props.title}</h3>
      <ul>
        {props.highlights.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  );
}
