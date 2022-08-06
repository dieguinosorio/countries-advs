export abstract class Mapper<S,T> {​​
  abstract fromMap(entity: S): T;
  abstract fromMap(array: S[]): T[];
  abstract fromMap(entityOrArray: S | S[]): T | T[]
​}


export abstract class MapperService<S,T> implements Mapper<S,T> {

  protected abstract map(entity: S): T;

  fromMap(entity: S): T;
  fromMap(array: S[]): T[];
  fromMap(entityOrArray: S | S[]): T | T[] {
      return Array.isArray(entityOrArray) ?
          entityOrArray.map((item: S) => this.map(item)) :
          this.map(entityOrArray);
  }
}
