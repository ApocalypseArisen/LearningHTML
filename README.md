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
* just put b (for bold) in tag bracekts like with p and others
* examples in textformating.html
* headings are added by mext h(number) tags
* < hr /> - horizontal line
* comments are added by < !-- something -->
* atributes - arguments added to a tag like < p  align="center"> will center the text.
It' s not neccesary to add argument to a closing of a tag. Yo can use more than two arguments
* style arument allows you to chaneg look and feel of almost every object: style="color:yellow;somethingelse;etc"

### Links:
* you can add hyperlinks by using a tag with href argument
* adding argument target = "_blank" will force links to open in cart/windows

### Images:
* img are adde by img tab, thier source specified by the src atribute
* if you want to allign image you need to put img tag in a p tag w ith allign atribute
* you can add borders with border atribute (1px, 2px, etc)
* href and a tag work also on iamges!

### Lists:
* lists are created by using ol tag
* items are listed using a li tag
* alternativly if you want to have unlisted list use ul tag instead of ol

### Tables:
* tables are created using table tag
* you can add atributes to by adding them in opening table tag
* possible atributes are align, border - specifies the size of a table border
* tr tag creates rows and a td tag blaced within tr tag creates columns
* using colspan argument with td tag allows to spcify how long should siad column be
* bgcolor argument allows to set color of column or entire row tebendin whether used with tr or td tag

### Forms:
* Basicly they allow you to collect data fro  user and send them to process somewhere else
* form tag opens a form section
* action atribute specifies where to send data (for example to a php script/backend of a website)
* method specifies how you will send data. Get will display data in the address bar (it's used by default) while post will hide the data (more secure)
* input tag placed within form tag dictates how user will input data
* there are two types of checkboxes - radio will allow only one choice while checkbox will allow multilble choices (bot are atributes)
* name atribute dictates how input field will be named vale on the other hand dictates whta is the value of the input
* example < input type="radio" name="food" value="placki" />Placki< br />
* type text and passwprd will accept input from a keyboad
* example Password: < input type="password" name="password"/>< br />
* form results are submitted byusing input type submit which creates sumbit button

### Customizing whole page
* Using arguments with opening body tag will afect whole page 
* text = "color" argument will set the color of text for the entire page
* bgcolor will set background color of the entire page

# CSS section

# php section
