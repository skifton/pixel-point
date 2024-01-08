export interface INav {
  id: number;
  name: string;
  to: string;
  subNav?: INav[];
}
