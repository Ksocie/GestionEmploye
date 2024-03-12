import {Evaluation} from "./evaluation.model";
import {DetailsCandidature} from "./DetailsCandidature.model";
import {User} from "./user";


export class Candidature {
  date!:string | null;
  evaluation!:Evaluation;
  user!:User | null;
  detailsCandidatures!: any[];
}
