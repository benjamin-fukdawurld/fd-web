import { useTheme } from "styled-components";
import { ProfileSkill } from "./ProfileSkill";

export function ProfileSkills(props: any) {
  const theme = useTheme();
  return (
    <div className="skills">
      <h3>Compétences</h3>
      <ul>
        <li>
          <ProfileSkill theme={theme} name="Front End" value={75} />
        </li>
        <li>
          <ProfileSkill theme={theme} name="Back End" value={90} />
        </li>
        <li>
          <ProfileSkill theme={theme} name="Applications" value={70} />
        </li>
        <li>
          <ProfileSkill theme={theme} name="Dev Ops" value={75} />
        </li>
      </ul>
    </div>
  );
}
