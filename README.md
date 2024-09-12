Short Circuiting (&& and ||)

5.1 Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

```
{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  ...
  programmingLanguage: 'Java',     // <-- HERE
}
```

Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

Use short-circuiting.

Example 1
Code:

```
hasExamplesInJava(books[0]);
```

5.2 Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

```
{
  title: 'Operating System Concepts',
  // ... removed for clarity
  onlineContent: false,          // <-- HERE
},
```

Expected output: true

# Run

```
node script.js
node assignment.js
```
