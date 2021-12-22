import { ProfileSkillValue, ProfileSkillContainer } from "./style";
import { ProfileSkillProps } from "./interfaces";
import { useVisible } from "../../../glass-ui/hooks";
import { useEffect, useRef } from "react";

export function ProfileSkill({ name, value, ...props }: ProfileSkillProps) {
  const [observe, visible] = useVisible();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe, ref]);

  return (
    <ProfileSkillContainer name={name} value={value} {...props}>
      <p>{name}</p>
      <ProfileSkillValue ref={ref} visible={visible} />
    </ProfileSkillContainer>
  );
}
