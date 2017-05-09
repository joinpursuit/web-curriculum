- title:  Intro To HTML and CSS Part 1
- tags:  html

# Objectives
* Be able to explain and properly use foundational HTML tags (head, body, a, div, p)
* Be able to use Chrome Dev Tools to inspect HTML

# Introduction
## HTML Basics
HTML stands for HyperText Markup Language. It is used to organize the content on a webpage. Web browsers recognize files with the suffix - `.html`. Content that you want displayed onto a webpage is placed between one opening and one closing tag:

```html
<div> Hello World </div>
```

The opening tag is characterized by the tag name enclosed in angled brackets: `< tagName >`. The closing tag is also characterized by angled brackets, but the tag name is preceded with a backslash: `< / tagName >`

## Common HTML
* [Tags](http://www.htmldog.com/references/html/tags/)
* [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
### Headers
```html
<h1> Hello World </h1>
```

### Images
```html
<tag attribute="value"></tag>
```

```html
<img src="http://www.arborbrothers.org/wp-content/uploads/2014/10/C4Q_official-logo-horizontal-color-green.jpg" alt="c4q-logo"/>
```
The source(src) attribute specifies what image is being rendered onto the page, whereas the alternate(alt) attribute provides what text to display if the image cannot render.

Notice anything weird about the code above? It's called a self-closing tag. Because the image doesn't have any text content, we don't need two tags.

### Links
```html
<a href="https://developer.mozilla.org">MDN</a>
```

### Lists
```html
  <ul> Numbers
    <li> 1 </li>
    <li> 2 </li>
    <li> 3 </li>
  </ul>
```
```html
  <ol> Pokemon
    <li>Bulbasaur</li>
    <li>Charmander</li>
    <li>Squirtle</li>
  </ol>
```

**Discussion** What’s the importance of having a standardized structure for web pages? What types of elements (e.g. headers, paragraphs) do we see repeatedly across different web pages?

# Resources
[Introduction to HTML (MDN)] (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)
[HTML Basics (W3)] (http://www.w3schools.com/html/html_basic.asp)
[HTML Cheatsheet] (http://www.simplehtmlguide.com/cheatsheet.php)

##Demo
- Loading HTML files in browser
- Inspecting a web page
- `<head>` / `<body>`
- `<a>`
- `<div>`
- `<p>`
- `<h1> ... <h6>`
- `<img>`
- `<span>`
- `<button>`
- `<ul>` / `<ol>` / `<li>`
