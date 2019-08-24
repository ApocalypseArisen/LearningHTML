# LearningHTML/CSS/PHP

This document and acompaning html files were created with the help of a [SoloLearn](https://www.sololearn.com) courses. Some example code is my own while some is taken from the SoloLearn website.
All documents were created as part of a learning process to master creation of your own custom websities. This documents contains information which I thought were the most usefull to have written down somewhere.

If you are looking to learn html/css/php skills yourself I highly recomend going through sololeaern courses first and look at my html files as reference.

* [HTML](https://www.sololearn.com/Course/PHP/) - **HyperText Markup Language**
* [CSS](https://www.sololearn.com/Course/HTML/) - ****
* [PHP](https://www.sololearn.com/Course/CSS/) - ****

## HTML

### Basic info

* `<tagname>` - openning a tag
* `</tagname>` - closing tag

```HTML
<html>
    <head>
    <title>Hello World!</title>
    </head>
    <body>Hello World!</body>
</html>
```

Html tag contains the whole contents of a single html page. Head tag is like backend of a html page. It handles stuff which are not visible to the end user.
The title tag sets the name of the page which will be visible as the tab name within your browser
Body tag is where the real fun begins. It's what will be visible to the edn user. The code above will dispaly the simplest html page.

### Formatting

Refer to textformating.html to see examples.

* `<p>` - starts new paragraph
* `<h1>` to `<h6>` are headings
* `<hr />` - horizontal line
* You can add coments by `<!-- something -->`

You can change additional things like color of a aligment of a object by using arguments. Arguments are additional variables added to arguments added to a opening tag like `<p  align="center">`. This one will cause the text between the `<p>` tag to be centred on the screen.
It' s not neccesary to add argument to a closing of a tag. It's also possible to use multible arguments in a single tag.

You can also use style argument whiuch allows you to chaneg look and feel of almost every object: `<p style="color:yellow;somethingelse;etc">`

### Links

You can create links by using `<a href = "google.com">this text will become a hyperlink</a>`
By adding `target="_blank"` argument you will force the link to open in a new card or a new page. But be aware this does not always work.

### Images

Using `<img src ="image.com"/>` you will add an image to  your html document. `src` argument specifies the origin of a image. It can come from other websities on the internet or come from the path on the computer harddrive. If image lives in the same folder where the html file is located it will be enough to use `src="iamge.jpg"`.

By using additiona tags like `width="328px" height="400px" border="2px"` you can adjust size of the image or add borders. With `border` you can onlu use pixels **px** but `width` and `height` argument you can use **%** to scale the image.

If you want to allign the image you need to put `img` between `<p allign="center"></p>`.
By putting `img` tag between `<a href = "google.com"></a>` you can make image act like a hyperlink. 

### Lists

You can create lists by using `ol` tag:

```HTML
<ol>
    <li>First element</li>
    <li>Second element</li>
</ol>
```

As you can see in the example above `ol` opens list while `li` tag creates single elemnt on the list.

Code above will produce this results:
<ol>
    <li>First element</li>
    <li>Second element</li>
</ol>

If you don't wan't to use numerated lists you can change `ol` tag for `ul` tag which will change the list like that:

<ul>
    <li>First element</li>
    <li>Second element</li>
</ul>

### Tables

<table>
        <tr>
            <td> blue</td>
            <td> yellow</td>
        </tr>
</table>
Table above was created as example using code bellow.

```HTML
<table>
        <tr>
            <td> blue</td>
            <td> yellow</td>
        </tr>
</table>
```

* `table` tag contains the entire table
* `tr` tag creates rows
* `td` tag creates columns
* `bgcolor` allows you to change bacgroun color of specific column/row/entire table dependig where you place it.
* `border = "`number`"` you can specify the size of the border

Using `colspan = "2"` determines how wide given column is.

### Forms

Forms allow you to collect informations from user. In html section we only handle gathering data but not actually process it.

```HTML
<form method="POST">
            <input type="text" name="username"/><br />
            <input type="password" name="password"/><br />
            <input type="radio" name="food" value="nalesniki" />Naleśniki<br />
            <input type="checkbox" name="food" value="placki" />Placki<br />
            <textarea name"message"></textarea>d
            <input type="submit" value="Submit" />
</form>
```

`form` tag contains all interactions with the user. `input` tag contains defrent methods user input.

`type` specifies what method of input will be used:

* `text` accepts plain text
* `password` also accepts text but it hides input and is more secure to use with passwords
* `radio` is a checkbox which allows multible selection
* `checkbox` is regular old chceckbox. Only one selection available
* `submit` creates a button which will 'accept` user input and set it to processing

Only diffrent field `textarea` allows user to input multible lines of text.

Argument `method` dictates how data will be sent. `post` hides data which means it is usefull for sending sensitive infdormation like passwords. `get` on the other hand sends data as open plain text visible in the address bar of the site loaded after pressing submit button. It is also default way of sending information.

### Frames

```HTML
<frameset cols="25%,50%"> 
    <frame src="a.htm" noresize="noresize" />
    <frame src="b.htm" />
    <noframe> Frames are not supported in your browser </noframe>
</frameste>
```

Here is a example of a frame. On most modern browsers this will display message contained in noframe tag as frames are no longer supported in **HTML 5**
It used to allow you to divide page into individual frames which could be customized with diffrent atributes such as scrolling, resizing, borders etc.
Better avoid using this unless absolutlly necesarry.

### Customizing whole page

Using arguments within `body` tag will affect whole page 

For example `<body bgcolor=#002b3c text="white">`

`bgcolor` will set background color for the entire page while `text` will set default color of a text within whole body tag.

### Dividing page into sections

By using:

```HTML
<div class="section">
</div>
```

You can divide your page into sections which will allow you to easilly find things you ca modify and will also clear up tge page for the end user.

## HTML 5

### Introduction

It is a most modern version of HTML which adds new ways od interacting with user.
Forms 2.0, drag and drop, audio and vudeo, offline webapps, history, local storage, geolocation and web messaging.

Thera are introduced 7 new data models:

* metada - sets up behaviour of the rest of the conntent. Found in the head section
* embeded - content that imports other resources into the document
* interactive - contnent intended for interaction wit user
* heading - defines a section header
* phrasing - similiar to inline elements of HTML 4 (img, span etc.)
* flow - conatins most of the rest of models that would be included in the normal flow of the document
* sectioning- defines navigation, footers and other site design elements

### Page structure

* on the of the page is header which contains things like website logo
* second is nav which contains navigation information
* article and aside on the same level - one contains main information and other additional resources like images
* footer contains legal information/privacy or terms of use

Header is operated by usage of `<header> </header>` tag. Footer uses `<footer></footer>` tag.

Nav element links to other pages/elements of existimg page and can be created like in a example below

```HTML
<nav>
    <ul>
        <li><a href="link">Link 1</a></li>
        <li><a href="link">Link 2</a></li>
    </ul>
</nav>
```

`<article>` replaces HTML 4 `<div>` tag.
`<section>` contains logical structures within article. For example it can be used to divied the page into pieces.

### Audio

HTML 5 intorduces `<audio controls>` tag which allows to easilly include audio element into the website

Source is added by adding `src="source.mp3"` argument to `<audio controls>` tag. 
If you want to use  multible sources instead of using `<src>` argument you can use `<source src="">` tag to specify multible sources.
The order by which `<source>` tags are specifeis which ones will be used first.

The text which can be added between `<audio controls>` tag will be displayed when the host website is unaible to play audio files.

Additiona arguments which can be added to `<audio controls>` tag are:

* autoplay - makes the audio file play automathicly when teh page is loaded
* loop - makes the file replay when it raches end.

### Video

Video elementh is essentialy the same as audio element the only diffrence being using a `<video controls>` tag. Rest of the information above stays true for the video element.

### Progress Bar

By usage of `<progress>` tag you can create progress bars on thje website

This arguments specify the look of the bar:

* `min=""` sets minimal value of the bar
* `max=""` sets maximal value of the bar
* `value=""` sets the current value dispaled on the bar

### Web storage

HTML 5 introduces API which allows to store data on local host more effinietly.

Ther are two types of storage objects avialable:

* `sessionStorage()`
* `localStorage()`

The diffrence between the two being that local storage lasts after the user closes their website.

Setting new value: `localStorage.setItem("key","value");`
Getting existing value: `alert(localStorage.getItem("key"));`
Deleteing value: `localStorage.removeItem("key");`
Clear all values: `localStorage.clear();`

### Geolocation

Onether API introduced with HTML 5 allows website to get user location.

It is used by calling `navigator.geolocation.getCurrentPosition();`

Parametres:

* `showLocation` - mandatory, defines how retrived data will be handled
* `ErrorHandler` - defines how any errors will be dealt with
* `Options` - additional setting on how the data will be retrived

**To understand and use this API I recomend at least some familiarity with [javaScript](https://www.sololearn.com/Course/JavaScript/)**

### Drag&Drop

Most HTML elemts can be made draggable by adding a `draggable="true"` argument.

API is event based.

First you need to define three functions:

```JAVASCRIPT
function allowDrop(ev)
{
    ev.preventDefault();
}
```

This function prevents default web browser behaviour which is to open a object in it.

```JAVASCRIPT
function dragobject(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}
```

This code allows user to click and drag desired object identufied by id.

```JAVASCRIPT
function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
```

This function places draggable object in new location.

All this code needs to be placed in a `<head>` section within `<script>` tag.

Ther are also some modifications which need to be introduced within `<body>` section.

First you need to create section where draggable item can be dropped:

```HTML
<div id="box" ondrop="drop(event)" ondragover="allowDrop(event)" width:200px; height:200px">
</div>
```

Second you need to have item whch can be dragged:

```HTML
<img id="draggable" src="src.jpg" draggable=true />
```

### Drawing Shapes (SVG)

**S**calabale **V**ector **G**raphics is used to draw shapes using HTML-style markup.

HTML can use svg images. You can add them like any other jpg img.

To draw a cirvle using SVG

```HTML
<svg width="1000" height="1000">
    <circle cx="50" cy="50" r="10" fill="red" />
</svg>
```

* cx and cy detremin the sie of teh circle
* r detrmins radian of the circle
* fill sets the color of the circle
* width and height determ,in the size of the canvas

There is a number of fugures which can be used with svg

* rect - draws and rectangle, needs height and width arguments
* line - draws line on the screen needs x1,y1,x2,y2 coordinats of starting and ending point
* eclispe draws eclispe, it needs r1 and r2
* polygon - it spans the figure between atleast three specified points with argument `points="100 100, 200 200, 300 300"`

### Animations

Using a `<animate>` within a fugure tag you can make simple animations

```HTML
<rect width="10" height="20" fill="yellow">
    <animate attributeName="x" from="20" to="100" dur="4s" fill="freeze" repeatCount="5">
</rect>
```

* attributeName - which atrribute will be affected by the animation
* from - startin point
* to end point
* dur - how long the animation will take
* fill - what to do with object after finishing the animation (remove, freeze)
* repeatCount - how many time wile the animation play

By using additional `<path />` tag you can define how object will move. The path is defined i `p=""` argument

Some most uisefull p commands:

* M x y places virtual pen at x,y cordinats
* L x y draws a line x pixels left and y pixels up
* Z closes the shape

### Canvas

Canvas in pricnciple is similiar to SVG only that it uses JavaScript

By using a `<canvas>` tag you create a space in which you can draw using `<script>` tag. The canvas needs to have `id=""` argument to be identufied by the script.

Upper rleft corner is coordinates (0,0) and bottom right corner is (x,y) coordints for canvas of size x and y.

Let's drew a simple rectangle with canvas

```JAVASCRIPT
var canvas=document.getElementId("canvasid")
var ctx=canvas.getContext("2d");
ctx.fillStyle="rgba(0,100,90,11)";
ctx.fillRect (36, 10, 22, 80);
```

The first two lines identify teh canvas in which we will be drawing.

Second line sets how next figure will be filled and the next command draws a rectangle at (36,10) with wall size of 22 and 80.

### Basic editing with Canvas

`ctx.font="bold 12px Arial"` sets the look and the fill of teh text. `ctx=textAligb="test"` ustawia treść, a `ctx.fillText("test", 10, 30) rysuje tekst we wskazanym miejscu.

`ctx.translate(x,y);` przesuwa element o x i  y względem poprzedniego.

`ctx.rotate((Math.PI/180)*x)` obraca element o x radianów.

`ctx.scale(1.8, 5)` skaluje następy element względem poprzedniego w obu wymiarach.

### Canvas vs SVG

**SVG** is better for simple animations, drowing is done with vectors. Best suited for aplications like maps.

**Canvas** is better for graphics intensive aplications as it's more resourcces intensive. Drawing is done programmaticly with pixels.

### Forms 2

Usage of forms in HTML 5 is similiar to HTML 4 wit addition of couple new atributes.

* `placeholder="text"` will display generic value to user in the field he will fill.
* `autofocus` will autmaticly focus keyboard on this field when the page is loaded.
* `required` will force user to input something in this field
* `type="search"` introduces searchboxes
* New fields which were also added are: `email`, `url`, `tel`

```HTML
<datalist id="example">
    <option value="1">
    <option value="2">
</datalist>
```

This list will give user some preconfigured values to choose from

## CSS

## PHP
