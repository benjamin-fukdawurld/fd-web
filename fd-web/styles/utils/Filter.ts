import { FilterFunction } from "./interfaces";

export default class Filter {
  public funcs: FilterFunction[];
  constructor(funcs?: FilterFunction[]) {
    this.funcs = funcs ?? [];
  }

  public toString(): string {
    const func2str = (func: FilterFunction) => {
      if (!func.name) {
        return;
      }

      return `${func.name}(${func.value}${func.unit ?? ""})`;
    };

    return this.funcs
      .map((f: FilterFunction): string | undefined => func2str(f))
      .filter((value: string | undefined): boolean => !!value)
      .join(" ");
  }
}
