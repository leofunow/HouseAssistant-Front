import { Stage } from './stage';

export interface ObjectInfo {
  stages: Stage[];
  _id: string;
  firstdate: Date;
  lastdate: Date;
  name: string;
  field: string;
  district: string;
  address: string;
  pictures: string[];
  type: string;
  owner: {
    _id: string;
    name: string;
    picture: string;
  };
  fact_us: {
    _id: string;
    name: string;
    picture: string;
  }[];
  documents: {
    name: string;
    path: string;
    exts: string;
  }[];
  desc: string;
  status: string;
  area: number;
}
