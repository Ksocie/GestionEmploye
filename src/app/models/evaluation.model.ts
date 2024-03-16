import {Questionnaire} from "./questionnaire.model";
import {ReponseEvaluation} from "./ReponseEvaluation.model";
import {User} from "./user";


export class Evaluation {
  id!:number;
  reference!:string;
  titre!:string;
  datePublication!:Date;
  description!:string;
  informerStatut!: boolean;
  dateExpiration!:Date;
  questionnaire!:Questionnaire;
  reponseEvaluation!:ReponseEvaluation[];
  user!: User;
}
