import { Radar } from "react-chartjs-2";
import Surface from "../../../glass-ui/Surface";
import { ProfileChartProps } from "./interfaces";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { useVisible } from "../../../glass-ui/hooks";
import { useEffect, useRef, useState } from "react";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function ProfileChart(props: ProfileChartProps) {
  const [observe, visible] = useVisible();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe, ref]);

  return (
    <Surface theme={props.theme} ref={ref}>
      {visible && (
        <Radar
          data={{
            labels: props.labels,
            datasets: [
              {
                data: props.values,
                borderColor: props.theme.palette.secondary.main.string(),
                pointBackgroundColor: props.theme.palette.secondary.main.string(),
                backgroundColor: props.theme.palette.primary.main.alpha(0.5).string(),
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              radial: {
                suggestedMin: 0.0,
                suggestedMax: 1,
                ticks: {
                  display: false,
                },
                pointLabels: {
                  color: props.theme.palette.secondary.light.string(),
                },
                grid: {
                  color: props.theme.palette.secondary.dark.alpha(0.6).string(),
                },
                angleLines: {
                  color: props.theme.palette.secondary.dark.alpha(0.6).string(),
                },
              },
            },
          }}
        />
      )}
    </Surface>
  );
}
