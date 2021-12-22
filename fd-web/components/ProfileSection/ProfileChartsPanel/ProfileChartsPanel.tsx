import { useTheme } from "styled-components";

import { ProfilePanel } from "./style";
import { ProfileChart } from "./ProfileChart";

export default function ProfileChartsPanel(props: any) {
  const theme = useTheme();
  return (
    <ProfilePanel>
      <div className="charts">
        <div>
          <h3>Web</h3>
          <div className="chart">
            <ProfileChart
              theme={theme}
              labels={["Typescript", "Javascript", "SASS", "HTML/CSS", "Tailwind", "React", "Node"]}
              values={[0.85, 0.9, 0.7, 0.9, 0.7, 0.7, 0.85]}
            />
          </div>
        </div>
        <div>
          <h3>Application</h3>
          <div className="chart">
            <ProfileChart
              theme={theme}
              labels={["C/C++", "Python", "Electron", "React Native", "Open GL", "Unity 3d", "UE"]}
              values={[0.95, 0.75, 0.7, 0.7, 0.85, 0.75, 0.7]}
            />
          </div>
        </div>
      </div>
    </ProfilePanel>
  );
}
