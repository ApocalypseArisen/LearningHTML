# LearningHTML/CSS/PHP
Learning basics of creating websities uding modern solutions with the help of <a href = "https://www.sololearn.com/" target = "_blank">SoloLearn courses</a>
 * HTML - HyperText Markup Language
 * CSS -
 * php -

# HTML section

### Basic info:
* <> - openning a tag
* <> - closing tag
* html - "html code tag"
* head - backend/non-visual elemnts of a website
* body - text images hyperlings etc.
* head/body - both necessary to create a basic site
* title tag - name of the page
* p tag - basic paragraph
* < br /> - line break

### Formatting:
* Just put b (for bold) in tag bracekts like with p and others
* Examples in textformating.html
* Headings are added by mext h(number) tags
* < hr /> - horizontal line
* Comments are added by < !-- something -->
* Atributes - arguments added to a tag like < p  align="center"> will center the text.
It' s not neccesary to add argument to a closing of a tag. You can use more than two arguments
* Style arument allows you to chaneg look and feel of almost every object: style="color:yellow;somethingelse;etc"

### Links:
* You can add hyperlinks by using a tag with href argument
* Adding argument target = "_blank" will force links to open in cart/windows

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
Here is a example of a frame. On most modern browsers this will display message contained in noframe tag as frames are no longer supported in *HTML 5*
It used to allow you to divide page into individual frames which could be customized with diffrent atributes such as scrolling, resizing, borders etc.
Better avoid using this unless absolutlly necesarry.

### Customizing whole page
* Using arguments with opening body tag will afect whole page 
* text = "color" argument will set the color of text for the entire page
* bgcolor will set background color of the entire page

# CSS section

# php section
