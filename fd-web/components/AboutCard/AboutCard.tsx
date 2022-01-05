import { useTheme } from "styled-components";

import { CardHeader } from "./utils";

import { Card, AboutCardContainer } from "./style";
import { ForwardedRef, forwardRef } from "react";
import { IntroductionCardProps } from "./interfaces";

const IntroductionCard = forwardRef<HTMLDivElement, IntroductionCardProps>(
  (props: IntroductionCardProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const theme = useTheme();
    return (
      <AboutCardContainer
        {...props}
        ref={ref}
        blurSize="xs"
        backdropFilter={[
          {
            name: "brightness",
            value: "0.5",
          },
        ]}
      >
        <Card theme={theme}>
          <CardHeader />
          <div className="aboutText">
            <p>{"Ingénieur en développement d'applications ─ 7 ans d'expérience"}</p>
            <p>
              {`
                Au cours de ces dernières années, j'ai eu l'occasion de réaliser des projets variés et
                innovants dans des domaines allant de la finance, à l'industrie automobile, en passant
                par l'intelligence artificielle et la 3D.
              `}
            </p>
            <p>
              {`Je suis familier à la méthodologie agile (type SCRUM), à la CI/CD, à la programmation
              orientée objet, à la programmation asynchrone, à la parallélisation, au TDD et à la
              gestion de version sous Git.`}
            </p>
            <p>
              {`Je me définirais comme pragmatique et astucieux, comme tout le monde je suis
              rigoureux, mais j'ai deux impératifs en tête :`}
              <ul>
                <li>Il faut livrer.</li>
                <li>Il faut livrer de la qualité.</li>
              </ul>{" "}
            </p>
            <p>
              {`Je veux définir avec vous les objectifs de notre collaboration et planifier le
              développement de vos projets afin d'assurer la qualité de ce que nous réaliserons
              ensemble.`}
            </p>
            <p>
              {`J'ai réalisé le tableau de bord, et le système de gestion de la caméra de recul du
              Renault EZ Flex présenté au salon de l'automobile en 2019. Un projet réalisé en C++ et
              OpenGL ES sur système embarqué Android Automotive.`}
            </p>
            <p>
              {`J'ai également participé au développement des systèmes Infotainment des McLaren GT
              2020, Speedtail et Artura, des projets également réalisés en C++ Open GL et QML sur
              des systèmes Linux et Android.`}
            </p>
            <p>
              {`Côté web, j'ai travaillé avec les équipes de Mediarithmics sur la réalisation d'outils
              pour le web marketing et l'analytics, en Typescript avec un stack Node.js, React,
              GraphQL, Docker, Jest.`}
            </p>
            <p>
              {`J'ai également participé au développement du système de consolidation financière SAP
              FC ; avec un back end en C++ et C# ASP.NET et un front end en Javascript avec le
              framework SAPUI5.`}
            </p>
            <p>
              {`J'espère vous avoir convaincu à faire appel à moi. Si toutefois vous souhaitez avoir
              plus d'informations sur moi n'hésitez pas à me contacter.`}
            </p>
          </div>
        </Card>
      </AboutCardContainer>
    );
  }
);

IntroductionCard.displayName = "IntroductionCard";

IntroductionCard.defaultProps = {
  visible: true,
};

export default IntroductionCard;
