import { ForwardedRef, forwardRef } from "react";
import { useTheme } from "styled-components";
import { LoaderSection, LoaderParticle } from "./style";

const Loader = forwardRef<HTMLElement, any>((props: any, ref: ForwardedRef<HTMLElement>) => {
  const theme = useTheme();
  return (
    <LoaderSection theme={theme} ref={ref}>
      <div className="loader">
        <div className="caption">Chargement...</div>
        <div className="loaderLeft"></div>
        <div className="loaderRight"></div>
        <LoaderParticle size="30px" yOffset="calc(45% - 15px)" delay="0.5s" />
        <LoaderParticle size="40px" yOffset="calc(55% - 20px)" delay="0s" />
        <LoaderParticle size="30px" yOffset="calc(50% - 15px)" delay="1s" />
        <LoaderParticle size="15px" yOffset="calc(40% - 7.5px)" delay="1.5s" />
        <LoaderParticle size="15px" yOffset="calc(55% - 7.55px)" delay="2s" />
        <LoaderParticle size="40px" yOffset="calc(45% - 20px)" delay="2.5s" />
        <LoaderParticle size="30px" yOffset="calc(50% - 15px)" delay="3s" />
      </div>
    </LoaderSection>
  );
});

Loader.displayName = "Loader";

export default Loader;
