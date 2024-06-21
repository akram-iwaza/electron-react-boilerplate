export interface ITab {
  name: string;
  icon?: JSX.Element;
  subTabs?: ITab[];
}
