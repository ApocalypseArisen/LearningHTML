# LearningHTML/CSS/PHP
This document and acompaning html files were created with the help of a [SoloLearn](https://www.sololearn.com) courses.
All documents were created as part of a learning process to master creation of your own custom websities. This documents contains information which I thought were the most usefull to have written down somewhere.

If you are looking to learn html/css/php skills yourself I highly recomend going through sololeaern courses first and look at my html files as reference.
 * [HTML](https://www.sololearn.com/Course/PHP/) - **HyperText Markup Language**
 * [CSS](https://www.sololearn.com/Course/HTML/) - ****
 * [PHP](https://www.sololearn.com/Course/CSS/) - ****

# HTML section

### Basic info:
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


### Formatting:
Refer to textformating.html to see examples.
* `<p>` - starts new paragraph
* `<h1>` to `<h6>` are headings
* `<hr />` - horizontal line
* You can add coments by `<!-- something -->`

You can change additional things like color of a aligment of a object by using arguments. Arguments are additional variables added to arguments added to a opening tag like `<p  align="center">`. This one will cause the text between the `<p>` tag to be centred on the screen.
It' s not neccesary to add argument to a closing of a tag. It's also possible to use multible arguments in a single tag.

You can also use style argument whiuch allows you to chaneg look and feel of almost every object: `<p style="color:yellow;somethingelse;etc">`

### Links:
You can create links by using `<a href = "google.com">this text will become a hyperlink</a>`
By adding `target="_blank"` argument you will force the link to open in a new card or a new page. But be aware this does not always work.

### Images:
* Img are adde by img tab, thier source specified by the src atribute
* If you want to allign image you need to put img tag in a p tag w ith allign atribute
* You can add borders with border atribute (1px, 2px, etc)
* href and a tag work also on iamges!

### Lists:
* Lists are created by using ol tag
* Items are listed using a li tag
* Alternativly if you want to have unlisted list use ul tag instead of ol

### Tables:
* Tables are created using table tag
* You can add atributes to by adding them in opening table tag
* Possible atributes are align, border - specifies the size of a table border
* tr tag creates rows and a td tag blaced within tr tag creates columns
* Using colspan argument with td tag allows to spcify how long should siad column be
* bgcolor argument allows to set color of column or entire row tebendin whether used with tr or td tag

### Forms:
* Basicly they allow you to collect data fro  user and send them to process somewhere else
* form tag opens a form section
* action atribute specifies where to send data (for example to a php script/backend of a website)
* method specifies how you will send data. Get will display data in the address bar (it's used by default) while post will hide the data (more secure)
* input tag placed within form tag dictates how user will input data
* There are two types of checkboxes - radio will allow only one choice while checkbox will allow multilble choices (bot are atributes)
* name atribute dictates how input field will be named vale on the other hand dictates whta is the value of the input
* Example < input type="radio" name="food" value="placki" />Placki< br />
* type text and password will accept input from a keyboad
* Example Password: < input type="password" name="password"/>< br />
* form results are submitted by using input type submit which creates sumbit button

### Frames:
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

### Customizing whole page:
* Using arguments within opning body tag will afect whole page 

'<body bgcolor=#002b3c text="white">' 
bgcolor will set background color for entire page while text will set default color of a text within whole body tag.


# CSS section

# php section
