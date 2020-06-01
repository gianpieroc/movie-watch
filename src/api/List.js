import ApiBuilder from "./ApiBuilder";
import { LIST_ENDPOINT } from "../constants";

export default class List extends ApiBuilder {
  constructor(listType) {
    const routeParams = LIST_ENDPOINT + listType;
    super(routeParams);
  }
}
