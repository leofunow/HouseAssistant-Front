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
  type: string;
  owner_id: string;
  factial_user: string[];
  documents: string[];
  desc: string;
  responsibles: string[];
  status: string;
  area: number;
}
