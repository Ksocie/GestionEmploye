import {Questions} from "./questions.model";

export class Module {
  code!:string;
  nomModule!:any;
  description!:string;
  ordre!:number;
  noteMax!:number;
  questions!:Questions[];
}

