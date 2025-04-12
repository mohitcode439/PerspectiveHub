import type { Post } from "./types"

export const blogPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    slug: "getting-started-with-nextjs",
    excerpt:
      "Next.js is a powerful React framework that makes building web applications easier and more efficient. In this guide, we'll explore the basics of Next.js and how to get started with your first project.",
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and API routes. It's designed to make building React applications easier and more efficient.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js offers several advantages over a plain React application:</p>
      <ul>
        <li>Server-side rendering for improved performance and SEO</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple page-based routing system</li>
        <li>API routes to build your API alongside your app</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      <p>To create a new Next.js project, you can use the following command:</p>
      <pre><code>npx create-next-app my-next-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary configurations. Once the installation is complete, navigate to your project directory and start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <h2>Understanding the File Structure</h2>
      <p>A typical Next.js project has the following structure:</p>
      <ul>
        <li><strong>pages/</strong>: Contains your application's pages. Each file in this directory becomes a route.</li>
        <li><strong>public/</strong>: Stores static assets like images and fonts.</li>
        <li><strong>styles/</strong>: Contains your CSS or SCSS files.</li>
        <li><strong>components/</strong>: A place to store your React components.</li>
      </ul>
      
      <h2>Creating Your First Page</h2>
      <p>In Next.js, pages are React components exported from files in the <code>pages</code> directory. To create a new page, simply add a new file to the pages directory:</p>
      <pre><code>// pages/about.js
export default function About() {
  return (
    &lt;div&gt;
      &lt;h1&gt;About Us&lt;/h1&gt;
      &lt;p&gt;This is the about page of our Next.js application.&lt;/p&gt;
    &lt;/div&gt;
  )
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a powerful and flexible framework for building modern web applications with React. By leveraging its features like server-side rendering, static site generation, and simplified routing, you can create fast, SEO-friendly, and user-friendly applications.</p>
      
      <p>In future articles, we'll dive deeper into advanced Next.js concepts and best practices. Stay tuned!</p>
    `,
    date: "2023-06-15T10:00:00Z",
    readTime: 8,
    coverImage: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: "2",
    title: "Mastering CSS Grid Layout: A Complete Tutorial",
    slug: "mastering-css-grid-layout",
    excerpt:
      "CSS Grid Layout is a powerful tool for creating complex web layouts. This tutorial will guide you through the basics and advanced techniques of CSS Grid to help you create responsive and flexible designs.",
    content: `
      <h2>Introduction to CSS Grid</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to organize content into rows and columns and has many features that make building complex layouts straightforward.</p>
      
      <h2>Basic Concepts</h2>
      <p>To get started with CSS Grid, you need to understand a few key concepts:</p>
      <ul>
        <li><strong>Grid Container</strong>: The element on which <code>display: grid</code> is applied.</li>
        <li><strong>Grid Items</strong>: The direct children of the grid container.</li>
        <li><strong>Grid Lines</strong>: The horizontal and vertical lines that divide the grid.</li>
        <li><strong>Grid Tracks</strong>: The spaces between grid lines (rows and columns).</li>
        <li><strong>Grid Areas</strong>: Rectangular spaces surrounded by four grid lines.</li>
      </ul>
      
      <h2>Creating a Basic Grid</h2>
      <p>To create a basic grid, you need to set the <code>display</code> property to <code>grid</code> and define your columns and rows:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}</code></pre>
      
      <p>This creates a 3-column grid with 2 rows. The <code>fr</code> unit represents a fraction of the available space.</p>
      
      <h2>Placing Items on the Grid</h2>
      <p>You can place items on the grid using the <code>grid-column</code> and <code>grid-row</code> properties:</p>
      <pre><code>.item {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
  grid-row: 1 / 2; /* Start at line 1, end at line 2 */
}</code></pre>
      
      <h2>Creating Responsive Layouts</h2>
      <p>CSS Grid makes it easy to create responsive layouts. You can use the <code>repeat()</code> function with <code>auto-fit</code> or <code>auto-fill</code> to create flexible grids:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>
      
      <p>This creates a grid where each column is at least 250px wide, and the number of columns adjusts automatically based on the available space.</p>
      
      <h2>Grid Areas</h2>
      <p>Grid areas provide a more visual way to define your layout:</p>
      <pre><code>.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
      
      <h2>Conclusion</h2>
      <p>CSS Grid is a powerful layout tool that makes it easier to create complex, responsive web designs. By understanding the basic concepts and techniques covered in this tutorial, you'll be well on your way to mastering CSS Grid and creating beautiful, flexible layouts for your web projects.</p>
    `,
    date: "2023-07-22T14:30:00Z",
    readTime: 10,
    coverImage: "/placeholder.svg?height=600&width=1200",
    tags: ["CSS", "Web Design", "Responsive Design"],
  },
  {
    id: "3",
    title: "JavaScript Promises: Async Programming Made Simple",
    slug: "javascript-promises-async-programming",
    excerpt:
      "JavaScript Promises are a powerful way to handle asynchronous operations. Learn how to use promises effectively to write cleaner, more maintainable asynchronous code.",
    content: `
      <h2>Understanding Asynchronous JavaScript</h2>
      <p>JavaScript is single-threaded, which means it can only execute one piece of code at a time. However, many operations in web development are asynchronous, such as fetching data from an API, reading files, or waiting for user input.</p>
      
      <p>Before Promises, asynchronous operations were typically handled using callbacks, which could lead to "callback hell" - deeply nested callbacks that made code difficult to read and maintain.</p>
      
      <h2>What are Promises?</h2>
      <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation. It serves as a proxy for a value that may not be known when the promise is created.</p>
      
      <p>A Promise can be in one of three states:</p>
      <ul>
        <li><strong>Pending</strong>: Initial state, neither fulfilled nor rejected.</li>
        <li><strong>Fulfilled</strong>: The operation completed successfully.</li>
        <li><strong>Rejected</strong>: The operation failed.</li>
      </ul>
      
      <h2>Creating a Promise</h2>
      <p>You can create a new Promise using the Promise constructor:</p>
      <pre><code>const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* operation successful */) {
    resolve(result);
  } else {
    reject(error);
  }
});</code></pre>
      
      <h2>Using Promises</h2>
      <p>Once you have a Promise, you can use the <code>then()</code> method to specify what should happen when the Promise is fulfilled, and the <code>catch()</code> method to handle rejections:</p>
      <pre><code>myPromise
  .then(result => {
    console.log('Operation successful:', result);
  })
  .catch(error => {
    console.error('Operation failed:', error);
  });</code></pre>
      
      <h2>Chaining Promises</h2>
      <p>One of the most powerful features of Promises is the ability to chain them together:</p>
      <pre><code>fetchUserData(userId)
  .then(userData => fetchUserPosts(userData.username))
  .then(posts => displayPosts(posts))
  .catch(error => handleError(error));</code></pre>
      
      <h2>Promise.all and Promise.race</h2>
      <p>JavaScript provides utility methods for working with multiple promises:</p>
      <ul>
        <li><code>Promise.all()</code>: Takes an array of promises and returns a new promise that fulfills when all the promises in the array fulfill, or rejects if any of them reject.</li>
        <li><code>Promise.race()</code>: Takes an array of promises and returns a new promise that fulfills or rejects as soon as one of the promises in the array fulfills or rejects.</li>
      </ul>
      
      <pre><code>// Wait for all promises to resolve
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([user, posts, comments]) => {
    // All data is available
  })
  .catch(error => {
    // At least one promise was rejected
  });

// Use the result of the first promise to resolve
Promise.race([fetchFromAPI1(), fetchFromAPI2()])
  .then(result => {
    // Use the result from whichever API responded first
  });</code></pre>
      
      <h2>Async/Await: Syntactic Sugar for Promises</h2>
      <p>ES2017 introduced async/await, which provides a more synchronous-looking way to work with Promises:</p>
      <pre><code>async function fetchUserData() {
  try {
    const user = await fetchUser();
    const posts = await fetchUserPosts(user.id);
    return { user, posts };
  } catch (error) {
    handleError(error);
  }
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Promises have revolutionized asynchronous programming in JavaScript, making it easier to write, read, and maintain asynchronous code. By understanding how to create, use, and chain Promises, you can write more efficient and elegant code for handling asynchronous operations.</p>
    `,
    date: "2023-08-10T09:15:00Z",
    readTime: 12,
    coverImage: "/placeholder.svg?height=600&width=1200",
    tags: ["JavaScript", "Async", "Web Development"],
  },
  {
    id: "4",
    title: "Responsive Web Design: Best Practices for 2023",
    slug: "responsive-web-design-best-practices",
    excerpt:
      "Responsive web design is more important than ever in today's multi-device world. Discover the latest best practices and techniques to create websites that look great on any device.",
    content: `
      <h2>The Importance of Responsive Design</h2>
      <p>With the increasing variety of devices used to access the web, responsive design has become essential. A responsive website adapts its layout and content to provide an optimal viewing experience across a wide range of devices, from desktop computers to smartphones.</p>
      
      <h2>Core Principles of Responsive Design</h2>
      <h3>Fluid Grids</h3>
      <p>Use relative units like percentages instead of fixed units like pixels for layout elements. This allows your layout to scale proportionally to the screen size.</p>
      <pre><code>.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}</code></pre>
      
      <h3>Flexible Images</h3>
      <p>Images should scale with their containing element to prevent them from overflowing on smaller screens.</p>
      <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
      
      <h3>Media Queries</h3>
      <p>Use media queries to apply different styles based on the device's characteristics, such as screen width, height, or orientation.</p>
      <pre><code>/* Base styles for mobile devices */
.element {
  width: 100%;
}

/* Styles for tablets and larger */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Styles for desktops and larger */
@media (min-width: 1024px) {
  .element {
    width: 33.33%;
  }
}</code></pre>
      
      <h2>Modern Responsive Design Techniques</h2>
      <h3>Mobile-First Approach</h3>
      <p>Start by designing for the smallest screen size and progressively enhance the design for larger screens. This approach ensures that your core content and functionality work well on all devices.</p>
      
      <h3>CSS Grid and Flexbox</h3>
      <p>Use modern CSS layout techniques like Grid and Flexbox for more flexible and powerful layouts.</p>
      <pre><code>/* Flexbox example */
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 300px;
  margin: 10px;
}

/* CSS Grid example */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}</code></pre>
      
      <h3>Responsive Typography</h3>
      <p>Use viewport units or the calc() function to create responsive text that scales with the viewport size.</p>
      <pre><code>h1 {
  font-size: calc(1.5rem + 2vw);
}

p {
  font-size: clamp(1rem, 0.5rem + 1vw, 1.5rem);
}</code></pre>
      
      <h2>Performance Considerations</h2>
      <h3>Optimizing Images</h3>
      <p>Use responsive images with the srcset attribute to serve different image sizes based on the device's screen resolution.</p>
      <pre><code>&lt;img 
  src="image-small.jpg" 
  srcset="image-small.jpg 500w, image-medium.jpg 1000w, image-large.jpg 1500w" 
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
  alt="Responsive image"
&gt;</code></pre>
      
      <h3>Lazy Loading</h3>
      <p>Implement lazy loading for images and other heavy content to improve initial page load times.</p>
      <pre><code>&lt;img src="image.jpg" loading="lazy" alt="Lazy loaded image"&gt;</code></pre>
      
      <h2>Testing Responsive Designs</h2>
      <p>Always test your responsive designs on actual devices or using browser developer tools that simulate different screen sizes. Pay attention to:</p>
      <ul>
        <li>Layout integrity across different screen sizes</li>
        <li>Touch targets (buttons, links) being large enough on mobile</li>
        <li>Font sizes being readable on all devices</li>
        <li>Load times and performance on mobile networks</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Responsive web design is no longer optional—it's a necessity. By following these best practices, you can create websites that provide an excellent user experience across all devices, leading to higher engagement, better conversion rates, and improved SEO rankings.</p>
    `,
    date: "2023-09-05T16:45:00Z",
    readTime: 9,
    coverImage: "/placeholder.svg?height=600&width=1200",
    tags: ["Web Design", "Responsive Design", "CSS"],
  },
  {
    id: "5",
    title: "Introduction to TypeScript: Why You Should Use It",
    slug: "introduction-to-typescript",
    excerpt:
      "TypeScript is a superset of JavaScript that adds static typing to the language. Learn why TypeScript is becoming increasingly popular and how it can improve your development workflow.",
    content: `
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static typing and other features to help you build more robust and maintainable applications.</p>
      
      <p>Developed and maintained by Microsoft, TypeScript compiles to plain JavaScript, which means it can run anywhere JavaScript runs: in a browser, on Node.js, or in your apps.</p>
      
      <h2>Why Use TypeScript?</h2>
      <h3>Static Typing</h3>
      <p>The most significant advantage of TypeScript is its static typing system. By defining types for your variables, function parameters, and return values, you can catch errors at compile time rather than at runtime.</p>
      <pre><code>// JavaScript
function add(a, b) {
  return a + b;
}

// TypeScript
function add(a: number, b: number): number {
  return a + b;
}</code></pre>
      
      <h3>Better IDE Support</h3>
      <p>TypeScript provides excellent tooling support with features like:</p>
      <ul>
        <li>Intelligent code completion</li>
        <li>Refactoring tools</li>
        <li>Navigation features</li>
        <li>Inline documentation</li>
      </ul>
      
      <h3>Enhanced Code Quality</h3>
      <p>TypeScript helps you write more maintainable code by:</p>
      <ul>
        <li>Making your code more self-documenting</li>
        <li>Enabling safer refactoring</li>
        <li>Reducing the need for certain types of tests</li>
        <li>Facilitating better collaboration in teams</li>
      </ul>
      
      <h2>TypeScript Basics</h2>
      <h3>Basic Types</h3>
      <pre><code>// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Object type with explicit definition
let user: { name: string; age: number } = {
  name: "John",
  age: 30
};</code></pre>
      
      <h3>Interfaces</h3>
      <p>Interfaces define the structure that objects must adhere to.</p>
      <pre><code>interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

function greet(person: Person): string {
  return \`Hello, \${person.name}!\`;
}

const john: Person = { name: "John", age: 30 };
console.log(greet(john)); // "Hello, John!"</code></pre>
      
      <h3>Classes</h3>
      <p>TypeScript supports class-based object-oriented programming with features like inheritance, access modifiers, and more.</p>
      <pre><code>class Animal {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  move(distance: number = 0): void {
    console.log(\`\${this.name} moved \${distance}m.\`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  
  bark(): void {
    console.log('Woof! Woof!');
  }
  
  move(distance = 5): void {
    console.log('Running...');
    super.move(distance);
  }
}</code></pre>
      
      <h3>Generics</h3>
      <p>Generics allow you to create reusable components that work with a variety of types.</p>
      <pre><code>function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");  // type of output will be 'string'
let output2 = identity<number>(100);         // type of output will be 'number'</code></pre>
      
      <h2>Integrating TypeScript into Your Projects</h2>
      <h3>Setting Up TypeScript</h3>
      <p>To start using TypeScript in your project:</p>
      <pre><code>// Install TypeScript
npm install -g typescript

// Initialize a TypeScript project
tsc --init

// Compile TypeScript to JavaScript
tsc</code></pre>
      
      <h3>TypeScript with Popular Frameworks</h3>
      <p>TypeScript works well with popular frameworks and libraries:</p>
      <ul>
        <li><strong>React</strong>: Use TypeScript to type your props, state, and events.</li>
        <li><strong>Angular</strong>: Angular is built with TypeScript and provides excellent integration.</li>
        <li><strong>Vue</strong>: Vue 3 was rewritten in TypeScript and offers improved TypeScript support.</li>
        <li><strong>Node.js</strong>: TypeScript can help you build more robust server-side applications.</li>
      </ul>
      
      <h2>Common TypeScript Patterns</h2>
      <h3>Type Guards</h3>
      <p>Type guards help you narrow down the type of a variable within a conditional block:</p>
      <pre><code>function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    // TypeScript knows padding is a number here
    return " ".repeat(padding) + value;
  }
  // TypeScript knows padding is a string here
  return padding + value;
}</code></pre>
      
      <h3>Utility Types</h3>
      <p>TypeScript provides several utility types to facilitate common type transformations:</p>
      <pre><code>interface User {
  email: string;
  password: string;
  name: string;
  token: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Extract a subset of properties
type UserCredentials = Pick<User, "email" | "password">;

// Omit certain properties
type PublicUser = Omit<User, "password" | "token">;</code></pre>
      
      <h2>Conclusion</h2>
      <p>TypeScript offers significant advantages for developers looking to build more robust and maintainable applications. By adding static typing to JavaScript, it helps catch errors earlier in the development process, improves code quality, and enhances the development experience with better tooling.</p>
      
      <p>While there is a learning curve, the benefits of TypeScript typically outweigh the initial investment, especially for larger projects or teams. As you become more familiar with TypeScript, you'll find that it not only helps prevent bugs but also makes your code more self-documenting and easier to understand.</p>
    `,
    date: "2023-10-18T11:20:00Z",
    readTime: 11,
    coverImage: "/placeholder.svg?height=600&width=1200",
    tags: ["TypeScript", "JavaScript", "Web Development"],
  },
]
