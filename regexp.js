//basic Syntax
const pattern = /hello/;  // Literal pattern to match "hello"
const text = "hello world";
console.log(pattern.test(text));  // Output: true


// Flags 
const caseInsensitivePattern = /hello/i;  // Case-insensitive match
const flag = "Hello world";
console.log(caseInsensitivePattern.test(flag));  // Output: true


// Literal Characters
const literalPattern = /cat/;
console.log(literalPattern.test("I have a cat."));  // Output: true


// Special Characters
const anyCharacter = /.at/;  // Matches "cat", "bat", "hat", etc.
console.log(anyCharacter.test("I have a bat."));  // Output: true

const digitPattern = /\d/;  // Matches any digit
console.log(digitPattern.test("There are 3 cats."));  // Output: true

const wordBoundaryPattern = /\bcat\b/;  // Matches "cat" as a whole word
console.log(wordBoundaryPattern.test("I have a cat."));  // Output: true
console.log(wordBoundaryPattern.test("category"));  // Output: false


//Quantifiers
const zeroOrMorePattern = /ca*t/;  // Matches "ct", "cat", "caat", etc.
console.log(zeroOrMorePattern.test("cat"));  // Output: true

const oneOrMorePattern = /ca+t/;  // Matches "cat", "caat", but not "ct"
console.log(oneOrMorePattern.test("ct"));  // Output: false

const optionalPattern = /ca?t/;  // Matches "cat" or "ct"
console.log(optionalPattern.test("ct"));  // Output: true

const exactPattern = /a{3}/;  // Matches exactly 3 "a" characters
console.log(exactPattern.test("aaa"));  // Output: true


//Character Classes
const charClassPattern = /[aeiou]/;  // Matches any vowel
console.log(charClassPattern.test("hello"));  // Output: true

const rangePattern = /[a-z]/;  // Matches any lowercase letter
console.log(rangePattern.test("HELLO"));  // Output: false

const negationPattern = /[^aeiou]/;  // Matches any non-vowel
console.log(negationPattern.test("hello"));  // Output: true


// Grouping and Capturing
const groupPattern = /(abc)+/;  // Matches one or more "abc"
console.log(groupPattern.test("abcabc"));  // Output: true

const nonCapturingPattern = /(?:abc)+/;  // Matches but does not capture
console.log(nonCapturingPattern.exec("abcabc"));  // Output: ["abcabc"]


// Alternation
const alternationPattern = /cat|dog/;  // Matches "cat" or "dog"
console.log(alternationPattern.test("I have a dog."));  // Output: true


// Anchors
const startAnchorPattern = /^Hello/;  // Must start with "Hello"
console.log(startAnchorPattern.test("Hello world"));  // Output: true

const endAnchorPattern = /world$/;  // Must end with "world"
console.log(endAnchorPattern.test("Hello world"));  // Output: true


//Lookahead and Lookbehind
//Lookahead:
const lookaheadPattern = /\d(?=px)/;  // Matches a digit followed by "px"
console.log(lookaheadPattern.exec("20px"));  // Output: ["2"]

//Negative Lookahead:
const negLookaheadPattern = /\d(?!px)/;  // Matches digit not followed by "px"
console.log(negLookaheadPattern.exec("20px"));  // Output: null

//Lookbehind:
const lookbehindPattern = /(?<=\$)\d+/;  // Matches digits preceded by "$"
console.log(lookbehindPattern.exec("$100"));  // Output: ["100"]

//Negative Lookbehind:
const negLookbehindPattern = /(?<!\$)\d+/;  // Matches digits not preceded by "$"
console.log(negLookbehindPattern.exec("100"));  // Output: ["100"]

// String Methods
// test()
const testPattern = /world/;
console.log(testPattern.test("Hello world"));  // Output: true

// exec()
const execPattern = /(\d+)/;
console.log(execPattern.exec("There are 123 cats."));  // Output: ["123", "123"]

// match() 
const matchPattern = /\d+/g;  // Global match for digits
console.log("123 and 456".match(matchPattern));  // Output: ["123", "456"]

// replace() 
const replacePattern = /cat/;
console.log("I have a cat.".replace(replacePattern, "dog"));  // Output: "I have a dog."

// search() 
const searchPattern = /world/;
console.log("Hello world".search(searchPattern));  // Output: 6

// split() 
const splitPattern = /,/;
console.log("a,b,c".split(splitPattern));  // Output: ["a", "b", "c"]

//Flags
// g 
const globalPattern = /o/g;
console.log("Hello world".match(globalPattern));  // Output: ["o", "o"]

// // i 
// const caseInsensitivePattern = /hello/i;
// console.log(caseInsensitivePattern.test("HELLO"));  // Output: true

// m 
const multilinePattern = /^hello/m;
console.log(multilinePattern.test("world\nhello"));  // Output: true

// s 
const dotAllPattern = /.+/s;
console.log(dotAllPattern.test("Hello\nworld"));  // Output: true

// u 
const unicodePattern = /\u{1F600}/u;  // Matches the emoji "😀"
console.log(unicodePattern.test("😀"));  // Output: true

// y 
const stickyPattern = /hello/y;
console.log(stickyPattern.test("hello world"));  // Output: true
stickyPattern.lastIndex = 5;
console.log(stickyPattern.test("hello world"));  // Output: false


// Common Use Cases
//Form Validation
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
console.log(emailPattern.test("example@example.com"));  // Output: true

//Search and Replace
const censorPattern = /badword/gi;
console.log("This is a badword".replace(censorPattern, "****"));  // Output: "This is a ****"

//Text Parsing
const urlPattern = /(https?):\/\/([\w\-]+(\.[\w\-]+)+)/;
const textpattern = "Visit http://example.com for more info.";
console.log(textpattern.match(urlPattern));  // Output: ["http://example.com", "http", "example.com"]
