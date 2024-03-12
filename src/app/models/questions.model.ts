import {CodeDesignation} from "./codeDesignation.model";
import {ValeurQuestion} from "./valeurQuestion.model";


export class Questions {
  code!:string;
  designation!:string;
  description!:string;
  typeQuestion!:CodeDesignation;
  obligatoire!:boolean;
  aSupprimer!:boolean;
  ordre!:number;
  valeurQuestions!:ValeurQuestion[];
}
