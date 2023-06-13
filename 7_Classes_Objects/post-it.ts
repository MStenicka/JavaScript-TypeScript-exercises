// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

export default class PostIt {
  private _backgroundColor: string;
  private _text: string;
  private _textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this._backgroundColor = backgroundColor;
    this._text = text;
    this._textColor = textColor;
  }
}

let object1 = new PostIt('orange', 'Idea 1', 'blue'); // new object 1
let object2 = new PostIt('pink', 'Awesome', 'black'); // new object 2
let object3 = new PostIt('yellow', 'Superb!', 'green'); // new object 3

console.log(object1, object2, object3);
