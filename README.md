# Regular Expressions (RegEx) in JavaScript

Regular Expressions (RegEx) in JavaScript are powerful tools for matching patterns within strings. They are used for tasks like searching, replacing, and validating text. Here’s a comprehensive guide to what you need to know:

## 1. Basic Syntax

- **Literals**: Regular expressions are typically enclosed between slashes, e.g., `/pattern/`.
- **Flags**: After the closing slash, you can add flags to modify the behavior of the RegEx, e.g., `/pattern/g` (global search), `/pattern/i` (case-insensitive search), `/pattern/m` (multiline search).

## 2. Common Patterns

- **Literal Characters**: Most characters match themselves, e.g., `/cat/` matches "cat".
- **Special Characters**: Some characters have special meanings:
  - `.`: Matches any character except a newline.
  - `\d`: Matches any digit (0-9).
  - `\D`: Matches any non-digit.
  - `\w`: Matches any word character (alphanumeric + underscore).
  - `\W`: Matches any non-word character.
  - `\s`: Matches any whitespace character (spaces, tabs, line breaks).
  - `\S`: Matches any non-whitespace character.
  - `\b`: Matches a word boundary.
  - `\B`: Matches a non-word boundary.
  - `\t`: Matches a tab character.
- **Escaping Special Characters**: Use a backslash `\` to escape special characters, e.g., `\.` to match a literal period.

## 3. Quantifiers

- `*`: Matches 0 or more occurrences of the preceding element.
- `+`: Matches 1 or more occurrences.
- `?`: Matches 0 or 1 occurrence.
- `{n}`: Matches exactly n occurrences.
- `{n,}`: Matches n or more occurrences.
- `{n,m}`: Matches between n and m occurrences.

## 4. Character Classes

- `[abc]`: Matches any one of the characters a, b, or c.
- `[a-z]`: Matches any lowercase letter.
- `[^abc]`: Matches any character except a, b, or c (negation).
- `[0-9]`: Matches any digit.

## 5. Grouping and Capturing

- **Parentheses `()`**: Groups parts of a pattern and captures the matched subpattern. For example, `/(abc)/` captures "abc".
- **Non-Capturing Groups `(?:)`**: Groups without capturing, e.g., `/(?:abc)/`.

## 6. Alternation

- **Pipe `|`**: Acts like a logical OR, e.g., `a|b` matches "a" or "b".

## 7. Anchors

- `^`: Matches the start of a string.
- `$`: Matches the end of a string.

## 8. Lookahead and Lookbehind

- **Lookahead `(?=...)`**: Asserts that the pattern must be followed by the specified subpattern without including it in the match.
  - Example: `\d(?=px)` matches a digit followed by "px" but doesn't include "px" in the match.
- **Negative Lookahead `(?!...)`**: Asserts that the pattern is not followed by the specified subpattern.
  - Example: `\d(?!px)` matches a digit not followed by "px".
- **Lookbehind `(?<=...)`**: Asserts that the pattern must be preceded by the specified subpattern.
  - Example: `(?<=\$)\d+` matches digits preceded by a "$" sign.
- **Negative Lookbehind `(?<!...)`**: Asserts that the pattern is not preceded by the specified subpattern.
  - Example: `(?<!\$)\d+` matches digits not preceded by a "$" sign.

## 9. String Methods with RegEx

- **`test()`**: Tests if a pattern exists in a string. Returns true or false.
  - Example: `/abc/.test('abcdef')` returns true.
- **`exec()`**: Executes a search for a match and returns an array of matched results.
  - Example: `/abc/.exec('abcdef')` returns `['abc']`.
- **`match()`**: Searches a string for a match and returns an array or null.
  - Example: `'abcdef'.match(/abc/)` returns `['abc']`.
- **`replace()`**: Replaces matches with a new substring.
  - Example: `'abcdef'.replace(/abc/, '123')` returns `'123def'`.
- **`search()`**: Searches a string for a match and returns the index of the match or -1.
  - Example: `'abcdef'.search(/abc/)` returns `0`.
- **`split()`**: Splits a string into an array of substrings.
  - Example: `'a,b,c'.split(/,/)` returns `['a', 'b', 'c']`.

## 10. Flags in Detail

- **`g`**: Global search, finds all matches.
- **`i`**: Case-insensitive search.
- **`m`**: Multiline search, where `^` and `$` match the start and end of a line.
- **`s`**: Allows `.` to match newline characters as well.
- **`u`**: Enables full Unicode support.
- **`y`**: Performs a "sticky" search that matches from the last `lastIndex`.

## 11. Common Use Cases

- **Form Validation**: Validate input fields like emails, phone numbers, passwords, etc.
- **Search and Replace**: Find and replace patterns within text.
- **Text Parsing**: Extract specific patterns from text.

