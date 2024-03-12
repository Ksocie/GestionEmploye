import {Questionnaire} from "./questionnaire.model";


export class Evaluation {
  id!:number;
  reference!:string;
  titre!:string;
  datePublication!:Date;
  description!:string;
  dateExpiration!:Date;
  questionnaire!:Questionnaire;
}
