import {Param} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetParams {                              //TODO ask about params description and shortDescription

  getParams(obj: any) {
    if (obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.parameters]) {
      return obj[CommonOptions.signatures][0][CommonOptions.parameters]
        .map((item: any) => this.parseParam(item));
    }
  }

  parseParam(obj: any) {
    return new Param({
      name: obj[CommonOptions.name],
      type: this.getType(obj),
      required: null,
      shortDescription: '',
      description: ''
    });
  }

  getType(obj: any): string {
    if(obj && obj[CommonOptions.type]) {
      return obj[CommonOptions.type][CommonOptions.name]
    } else {
      return '';
    }
  }
}