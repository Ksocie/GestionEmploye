import {Module} from "./module.model";


export class Questionnaire {
  code!:string;
  description!:string;
  designation!:string;
  actif!:boolean;
  module!: Module[];
}
