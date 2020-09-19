export interface ISucculent {
  id: number;
  name: string;
  type: string;
  imgSrc: string;
  shortDescription: string;
  description: string;
}

export interface ISucculentProp {
  succulent: ISucculent;
}
