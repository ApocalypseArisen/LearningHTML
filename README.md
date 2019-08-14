# LearningHTML/CSS/PHP

This document and acompaning html files were created with the help of a [SoloLearn](https://www.sololearn.com) courses.
All documents were created as part of a learning process to master creation of your own custom websities. This documents contains information which I thought were the most usefull to have written down somewhere.

If you are looking to learn html/css/php skills yourself I highly recomend going through sololeaern courses first and look at my html files as reference.

* [HTML](https://www.sololearn.com/Course/PHP/) - **HyperText Markup Language**
* [CSS](https://www.sololearn.com/Course/HTML/) - ****
* [PHP](https://www.sololearn.com/Course/CSS/) - ****

## HTML section

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

### HTML 5

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

## CSS section

## php section
