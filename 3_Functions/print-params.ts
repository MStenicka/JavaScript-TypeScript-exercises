// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...params: any[]): void {
  params.forEach((param) => console.log(param));
}
printParams(2, 5, 3);
printParams('one', 'two');
printParams(1, 2, 3);
printParams();
