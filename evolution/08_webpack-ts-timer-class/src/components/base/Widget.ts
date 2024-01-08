abstract class Widget {
  abstract isLogical: boolean;
  abstract build(): string;
  abstract applyLogic(): void;
}

export default Widget;
