import ApiGateway from "./Api";
import { LIST_ENDPOINT } from "../constants";

export default class List extends ApiGateway {
  constructor(listType) {
    const routeParams = LIST_ENDPOINT + listType;
    super(routeParams);
  }
}
