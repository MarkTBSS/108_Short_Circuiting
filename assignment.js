"use strict";

// Sample books array
const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        programmingLanguage: 'Java',
        onlineContent: true
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter Baer Galvin', 'Greg Gagne'],
        programmingLanguage: 'C',
        onlineContent: false
    },
    // Add more book objects as needed
];

//5.1
function hasExamplesInJava(book) {
    return book.programmingLanguage === "Java" || "no data available";
}

//5.2
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent &&
        console.log(`"${books[i].title}" provides online content`);
}
