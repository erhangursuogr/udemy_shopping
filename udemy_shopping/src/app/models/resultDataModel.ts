import { ResultModel } from "./resultModel";


export class ResultDataModel<T> extends ResultModel{
    data?: T[];
}