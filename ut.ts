class ExampleClass {
  private _exp: any;

  constructor(exp: any) {
    this._exp = exp;
  }

  // Getter for 'exp'
  get exp(): any {
    return this._exp;
  }

  // Setter for 'exp'
  set exp(value: any) {
    this._exp = value;
  }
}

// Usage
const exampleInstance = new ExampleClass('initialValue');
console.log(exampleInstance.exp); // Output: initialValue
exampleInstance.exp = 'newValue';
console.log(exampleInstance.exp); // Output: newValue
