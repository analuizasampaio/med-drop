import { Tipo } from './tipo';
import { Campo } from './campo';

export type CamposForm = {
  [key in Tipo]: Array<Campo>;
};
