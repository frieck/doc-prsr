import {CommonOptions} from './typedoc.parser.options';
import {
  Model,
  Class
} from '../model';

import {
  GetProperties,
  GetMethods,
  GetStyles,
  GetExamples
} from './getters';
import {Metadata} from "../model/metadata/metadata";

export class TypedocParser {
  protected examples: GetExamples = new GetExamples();
  protected styles: GetStyles = new GetStyles();
  protected methods: GetMethods = new GetMethods();
  protected props: GetProperties = new GetProperties();
  protected json: any;
  protected classes: any[] = [];

  saveJSON(json: any) {
    this.json = json;
  }

  parse(json: any, metadata: Metadata): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json), metadata);
  }

  findAllClasses(obj: any) {
    if (obj && obj[CommonOptions.children]) {
      obj[CommonOptions.children].forEach((item: any) => {
        if (item[CommonOptions.primKind] === 'Class' || item[CommonOptions.primKind] === 'Interface') {
          this.classes.push(item);
        } else {
          this.findAllClasses(item);
        }
      })
    }
  }

  getClasses(obj: any): Class[] {
    this.findAllClasses(obj);
    let tempClasses: any[] = [];

    tempClasses = this.classes
      .filter((item: any) => {
        if (item[CommonOptions.primKind] === 'Class' || item[CommonOptions.primKind] === 'Interface') {
          return item;
        }
      })
      .filter((item: any) => item[CommonOptions.comment])
      .map((item: any) => {
        if (!item[CommonOptions.decorators]) {
          if (item[CommonOptions.primKind] === 'Class') {
            return this.parseClass(item);
          } else if (item[CommonOptions.primKind] === 'Interface') {
            return this.parseInterface(item);
          }
        } else if (item[CommonOptions.decorators]) {
          if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Component') {
            return this.parseComponent(item);
          } else if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Injectable') {
            return this.parseService(item);
          } else if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Directive') {
            return this.parseDirective(item);
          } else if (item[CommonOptions.decorators][0][CommonOptions.name] === 'NgModule') {
            return this.parseNgModule(item);
          }
        }
      });
    return tempClasses;
  }

  parseComponent(obj: any) {
    return new Class({
      kind: 'component',
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  parseClass(obj: any) {
    return new Class({
      kind: 'class',
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  parseDirective(obj: any) {
    return new Class({
      kind: 'directive',
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  parseService(obj: any) {
    return new Class({
      kind: 'service',
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  parseInterface(obj: any) {
    return new Class({
      kind: 'interface',
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  parseNgModule(obj: any) {
    return new Class({
      kind: 'class',
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  getDescription(obj: any): string {
    if (obj && obj[CommonOptions.comment]) {
      return obj[CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CommonOptions.comment]) {
      return obj[CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }
}