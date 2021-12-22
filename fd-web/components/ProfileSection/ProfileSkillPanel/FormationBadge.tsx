import { FormationBadgeProps } from "./interfaces";
import { FormationBadgeContainer } from "./style";

export function FormationBadge(props: FormationBadgeProps) {
  let src = "";
  let alt = "";

  switch (props.grade) {
    case "bac+2":
      src = "/images/bac_2.png";
      alt = "Bac + 2";
      break;
    case "bac+3":
      src = "/images/bac_3.png";
      alt = "Bac + 3";
      break;
    case "bac+5":
      src = "/images/bac_5.png";
      alt = "Bac + 5";
      break;
  }

  return (
    <FormationBadgeContainer forwardedProps={{ title: props.long }}>
      <img src={src} alt={alt} />
      <div>
        <p className="title">{props.short}</p>
        <p className="year">{props.year}</p>
      </div>
    </FormationBadgeContainer>
  );
}
