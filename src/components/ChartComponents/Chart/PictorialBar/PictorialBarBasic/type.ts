type CommonAxisConfig = Omit<ComponentData.ComponentXAxis, 'position'>;

export type TPictorialBarBasicConfig = {
  grid: ComponentData.ComponentGrid;
  xAxis: CommonAxisConfig & {
    max: number;
  };
  yAxis: CommonAxisConfig;
  tooltip: ComponentData.ComponentTooltip & {
    animation: ComponentData.ComponentTooltipAnimation;
  };
  series: {
    spirit: {
      show: boolean;
      value: string;
    };
    symbol: ComponentData.ComponentSymbol | string;
    symbolSize: [number, number];
    symbolRotate: number;
    symbolRepeat: boolean | 'fixed';
    symbolMargin: number;
    symbolRepeatDirection: 'start' | 'end';
    symbolColor: ComponentData.TColorConfig;
  };
  animation: ComponentData.ComponentChartAnimationConfig;
  condition: ComponentData.ComponentConditionConfig;
};
