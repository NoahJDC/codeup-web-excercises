#creating a git repository
1. git init
2. create a new repository on GitHub
1.  add your remote server 'git@github.com:codeupclassroom.ulysses-web-excercises.git
1. the default name of remote is always: Origin. git remote add origin git@github.com:codeupclassroom.ulysses-web-execersis
1. commit a file, generally the first file to commit is the 'README.md' file
1. start tracking the changes to your 'README' file
1. 'git add READE.md'
1. commit your changes: git commit -m "docs: Add initial notes about using hit"
1. Push to GitHub "git push origin master"'

##HTML

* **Goal** structure documents
* Main Components
    -Element
    * tags (opening and, optionally a closing tag)
    * attributes
        - name, Value (key-value pairs)
        - value is between quotes
        - value is optional, for instance 'checked', 'selected'
    *contents, if it's text or more elements, or both
    - Types of Elements
        * Inline -> 'span' 'strong' 'em' 'input'
        * Block -> 'div' 'h1' 'ul' 'p'
        * Void -> 'br (block)' 'img' (inline) 'hr(block)'

##CSS
* **Goal** Visual style of a page
* Main Components
    - Selector
        *selector, name
        *declaration
            *property
            *value
        * the content between the open and closing curly brace is called "declaration block"
    - Types of Selectors
        * class
        * ID
        * element
* Type of properties
    * color
    * font
    * text
    * layout
        -floats
        - positioning -> relative or absolute
    *box model
        - width, height, border, padding, and margin
*Types of Layouts
    -fixed. we use pixels
    -fluid. we use percents
    -responsive. we use media queries 

## CSS Framework
* Seperation of container and content
* 'component .component2 .modifier' (container)
        '.component-header'
        'component-body'
        '.component-footer'
        
        
##Making Nav
<head>
<style>
!-- FLEXBOX --!
.flexbox-container{
    display: flex;
    flex-wrap:wrap;
}
.flex-item{
    flex-basis:10%;
}
.flex-3{
    order:3;
}
    
    
</head>
</head>
<body>
<Nav>
    <ul class="flex-container">
        <li class="flex-item flex-1">One</li> ( will have links : a href)
        <li class="flex-item flex-3" >Two</li>
        <li class="flex-item flex-5">Three</li>
        <li class="flex-item">Four</li>
        <li class="flex-item">Five</li>
    </ul>
</Nav>
</body>

- for the styling portion: You can 0 out margin and padding. Box-sizing: border-box
    * padding at 0 will also move the bullets to the left ** bullets are inside of the padding** and make it "disappear"
        * also doing ul{ list-style-type: none} will remove bullets or numbers (ol)
        
- When changing something to "flex" ( style sheet) it'll make it horiztonally
    * when changing the flex-basis OVER the width of the line, it'll adjust itself and try to make it fit within the same line

-Using "order" (style) for flexbox will change the order of the <li>

## Getting help on the CommandLine
