# **Nirvenity Gray Paper**
**Dee (David) Slawotsky, Nirvana Persaud, Thamesh Prittipaul, Jekari Rawls, Tanzina Eisha**

## HTML
```htmlembedded=
    <body>
  <div class="blur">
    <header>
        <div class="logo">
            <a href="index.html"><img src="https://media.discordapp.net/attachments/949160449411272724/954453932380401714/WhiteLogo.png"></a>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="tables.html">Table</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
```
**[index.html]**
1) Our navigation bar includes our logo and three links using an unordered list to our home page, tables page and contact page.

---
```htmlembedded=
 <div class="items">
            <div class="one">
                <h1>Take Our Maternity Quiz!</h1>
                <p>
                Find your maternity style with our quick personalized quiz! We include all body types and sizes
                so you can get your perfect fit.
                </p>
                <br>
                <a href="quiz.html">
                  <button class="quizButton" type="button" >Take Quiz</button>
                </a>
            </div>
            <a href="productPage.html"><div class="two">
                <div class="clothImage">
                    <img src="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0028/599/189/assets/220215_13-M6264_MAT_DP_Trimester.jpg">
                </div>
                <div class="clothText">
                    <h1>Ish</h1>
                </div>
            </div>
            </a>
            <div class="three">
                <div class="clothImage">
                    <img src="https://media.seraphine.com/catalog/product/cache/07d50f44375582bdbba32b6e24fcd0e3/R/e/Renata_BlueSpot_V2_01.jpg">
                </div>
                <div class="clothText">
                    <h1>Tee</h1>
                </div>
            </div>
            <div class="four">
                <div class="clothImage">
                    <img src="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0028/599/189/assets/220215_13-M6264_MAT_DP_Sale.jpg">
                </div>
                <div class="clothText">
                    <h1>Nini</h1>
                </div>
            </div>
            <div class="five">
                <div class="clothImage">
                    <img src="https://www.tiffanyrose.com/v3-img/products/ARIDMRP-zoom.jpg">
                </div>
                <div class="clothText">
                    <h1>Dee</h1>
                </div>
            </div>
            <div class="six">
                <div class="clothImage">
                    <img src="https://images.ctfassets.net/6m9bd13t776q/4mr23r1OR333h657KYR8t/74ad5c606746875387a6ce343c9b3a80/sexy-maternity-dress-getty-images-1351477928-660x367.jpg?q=75&w=660">
                </div>
                <div class="clothText">
                    <h1>Muscle</h1>
                </div>
            </div>
            <div class="seven">
                <div class="clothImage">
                    <img src="https://www.tiffanyrose.com/v3-img/products/ALESPS-zoom.jpg">
                </div>
                <div class="clothText">
                    <h1>Ken</h1>
                </div>
            </div>
            <div class="eight">
                <h1>Shop Our Spring Collection!</h1>
                <p>
                Our newest collection is out! Browse our floral, colorful outfits perfect for every occasion.
                </p>
                <br>
                <button type="button">Shop Around</button>
            </div>
        </div>
```
**[index.html]**
2) We put all the images and text on the home page into an items class. We used a 2x4 grid (shown in CSS later) to place the button to take the maternity quiz and the clothing items on one row and the button to shop around on the next row.

---
```htmlembedded=
    <main>
        <div class="containerSearch">
            <div class="search">
                <input type="text" class="input" placeholder="Search...">
                <button class="btnSearch">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
```
**[index.html]**
3) In this snippet, we implemented a search button with the help of JS in the middle of the home page so users can search our products.

----
``` htmlembedded=
<div class="centerItems">
            <div class="inliner">
            <label for="size">Size</label>
            <select id="size" name="size">
                <option value="1">XXS</option>
                <option value="2">XS</option>
                <option value="3">S</option>
                <option value="4">M</option>
                <option value="5">L</option>
                <option value="6">XL</option>
                <option value="7">2XL</option>
                <option value="8">3XL</option>
            </select>
            </div>
            <br>
            <div class="inliner">
            <label for="month">Month</label>
            <select id="month" name="month">
                <option value="1">Month 1</option>
                <option value="2">Month 2</option>
                <option value="3">Month 3</option>
                <option value="4">Month 4</option>
                <option value="5">Month 5</option>
                <option value="6">Month 6</option>
                <option value="7">Month 7</option>
                <option value="8">Month 8</option>
                <option value="9">Month 9</option>
            </select>
            </div><br>

            <button type="button">Add to Cart</button>
            </div>
        </div>
```
**[productPage.html]**
4) This is the drop down menu that allows users to pick their size and maternity month. This was an integral part of our website since we want to advertise the wide range of sizes we offer. Next to these menus is the Add to Cart button.
5) An issue we had with this is aligning the drop down menus next to the Add Cart button with the appropriate text (Size, Month) in line with each menu. We solved this with trial and error by adding divs and aligning them.

---
```htmlembedded=
 <div class="centerItems">
        <div class="formCSS">
            <form action="">
            <br>
            <h2 for="subject">Review it!</h2>
            <input type="text" id="firstname" name="firstname" placeholder="What's your first name?" style="width: 500px;">
            <br>
            <label for="purchaseAgain">Purchase Again?</label>
            <input type="radio" id="purchaseYes" name="type" value="purchaseYes">
            <label>Yes</label>
            <input type="radio" id="purchaseNo" name="type" value="purchaseNo">
            <label>No</label>
            <br>
            <textarea id="subject" name="subject" placeholder="What do you think of the product?" style="height: 200px; width: 500px;"></textarea>
            <br>
            <div class="centerItems">
                <input type="submit" value="Submit">
            </div>
            </form>
        </div>
    </div>
```
**[productPage.html]**
6) This is one of our three forms in our website which consists of a radio button, and text boxes. Users can input their first and last name, indicate if they will purchase the item again using the radio buttons and leave a review in the text area. A submit button is included in the form. 

---
```htmlembedded=
 <form action="">
            <div class="quizQuestion" id="firstQ">
                <h1>What's Your Name and Email?</h1>
                <label for="firstname">First Name</label><br>
                <input type="text" id="firstname" name="firstname" placeholder="What's your first name?">
                <br>
                <label for="lastname">Last Name</label><br>
                <input type="text" id="lastname" name="lastname" placeholder="What's your last name?"">
                <br>
                <label for="email">Email</label><br>
                <input type="email" id="email" name="email" placeholder="What's your email?">
            </div>
            <div class="quizQuestion" id="secondQ">
                <label for="country"><h1>What Country are you From?</h1></label> <br>
                <select id="country" name="country">
                    <option value="usa">United States of America</option>
                    <option value="canada">Canada</option>
                    <option value="guyana">Guyana</option>
                    <option value="bangladesh">Bangladesh</option>
                </select>
            </div>
            <div class="quizQuestion" id="thirdQ">
                <h1>What's Your Favourite Color?</h1>
                <class name="typeRadios">
                    <input type="radio" id="white" name="type" value="white">
                    <label for="white">White</label><br>
                    <input type="radio" id="red" name="type" value="red">
                    <label for="red">Red</label><br>
                    <input type="radio" id="red" name="type" value="red">
                    <label for="blue">Blue</label><br>
                    <input type="radio" id="red" name="type" value="blue">
                    <label for="blue">Black</label><br>
                    <input type="radio" id="yellow" name="type" value="yellow">
                    <label for="yellow">Yellow</label><br>
                    <input type="radio" id="green" name="type" value="green">
                    <label for="green">Green</label><br>
                    <input type="radio" id="pink" name="type" value="pink">
                    <label for="pink">Pink</label><br>
                    </class>
            </div>
            <div class="quizQuestion" id="fourthQ">
                <h1>What's Your Favourite Verse?</h1>
                <textarea id="verse" name="verse" placeholder="My favourite verse is..." style="height:200px"></textarea>
                <br>
                <input type="submit" value="Submit">
            </div>
        </form>
        <section class="buttons">
            <button class="btn" id="prev" disabled>Prev</button>
            <button class="btn" id="next">Next</button>
        </section>
```
**[quiz.html]**
7) This is the second form we have on our website. This form includes radio buttons, drop-down menus, and text areas as well as a submit button. Users also have previous and next buttons to backtrack in the form. Users take a personalized style quiz and get the results emailed to them via the one they provided.

----
```htmlembedded=

    <form action=""> <!--What Action?-->
        <label for="firstname">First Name</label><br>
        <input type="text" id="firstname" name="firstname" placeholder="What's your first name?">
        <br>
        <label for="lastname">Last Name</label><br>
        <input type="text" id="lastname" name="lastname" placeholder="What's your last name?">
        <br>
        <label for="country">Country</label> <br>
        <select id="country" name="country">
            <option value="usa">United States of America</option>
            <option value="canada">Canada</option>
            <option value="guyana">Guyana</option>
            <option value="bangladesh">Bangladesh</option>
        </select>
        <br>
        <class name="typeRadios">
        <input type="radio" id="complain" name="type" value="complain">
        <label for="complain">Complaint</label>
        <input type="radio" id="feedback" name="type" value="feedback">
        <label for="feedback">Feedback</label><br>
        </class>
        <br>
        <label for="subject">How can we help?</label>
        <br>
        <textarea id="subject" name="subject" placeholder="Your satisfaction is important to us!" style="height:200px"></textarea>
        <br>
        <input type="submit" value="Submit">
```
**[contact.html]**
8) This is our third form in our website. It consists of text areas, drop down menus, radio buttons, and a submit button. It is a contact form where users can submit feedback or complaints. 

---
```htmlembedded=
             <ul>
                <li>Made with 100% Cotton</li>
                <li>Tumble Dry Low</li>
                <li>Made by Children in Unsafe Conditions</li>
                <li>Product Code: 8800</li>
            </ul>
```
**[productPage.html]**
9) This snippet is an unordered list that is included on our website. It displays more information about our product.

---
```htmlembedded=
<h1 class="titles">How do you Select Your Month?</h1>

        <table class="weeklyTable">
            <tr>
                <th>Weeks</th>
                <th>Month</th>
            </tr>
            <tr>
                <th id="trimester" colspan="2">First Trimster</th>
            </tr>
            <tr>
                <td>Weeks 1-4</td>
                <td>Month 1</td>
            </tr>
            <tr>
                <td>Weeks 5-8</td>
                <td>Month 2</td>
            </tr>
            <tr>
                <td>Weeks 9-13</td>
                <td>Month 3</td>
            </tr>
            <tr>
                <th id="trimester" colspan="2">Second Trimster</th>
            </tr>
            <tr>
                <td>Weeks 14-17</td>
                <td>Month 4</td>
            </tr>
            <tr>
                <td>Weeks 18-21</td>
                <td>Month 5</td>
            </tr>
            <tr>
                <td>Weeks 22-26</td>
                <td>Month 6</td>
            </tr>
            <tr>
                <th id="trimester" colspan="2">Third Trimster</th>
            </tr>
            <tr>
                <td>Weeks 27-30</td>
                <td>Month 7</td>
            </tr>
            <tr>
                <td>Weeks 31-35</td>
                <td>Month 8</td>
            </tr>
            <tr>
                <td>Weeks 36-40</td>
                <td>Month 9</td>
            </tr>

        </table>
```
**[tables.html]**
10) This is a table that helps users decide how many months they are into their pregnancy. Column spans are used to break up the months into trimesters.

----

## CSS
```css=
li a {
    text-decoration: none;
    color:white;
    font-weight: bold;
    padding: 5em;
    transition-duration: 0.4s;
    border-radius: 0em;
}

li a:hover{
    color: black;
    background-color: pink;
    border: none;
    border-radius: 1em;
}
```
**[styles.css]**
11) This snippet is an effect we included in our navigation bar. The nav bar has a green background with white text. When the user hovers over one of the sections in the nav bar, the background turns pink with black letters. This matches our website theme colors of green and white.

----

```css=
.clothText {
    opacity: 0%;
    color:#2e2e2e;
    position:relative;
    padding-left: 1em;
    border-radius: 1em;
    padding-bottom: 0;
    background: linear-gradient(#ffc0cb00, #ffc0cb77, #ffc0cbad, #ffc0cbbd,  #ffc0cbb0, #ffc0cbf1);
    transition-duration: 0.4s;
}

.clothImage:hover + .clothText {
    opacity: 100%;
    pointer-events:none;
}
```
**[stylesHome.css]**
12) When a user hovers over the images of our products on our home page a pink linear gradient will pop up at the bottom of the images with the names of the product on it.
13) We had several issues implementing this feature. It was hard to get the names to show up within the image instead of beneath it. A grid which is shown in the next highlight helped to align everything and have the gradient and text be inside the image.

----
```css=
.items {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 1em;
    grid-auto-rows: minmax(100px, auto);
    transition: opacity .2s, visibility .2s;
    transition-duration: 0.4s;
  }
  .one {
    grid-column: 1;
    grid-row: 1;
  }
  .two {
    grid-column: 2;
    grid-row: 1;
  }
  .three {
    grid-column: 3;
    grid-row: 1;
  }
  .four {
    grid-column: 4;
    grid-row: 1;
  }
  .five {
    grid-column: 1;
    grid-row: 2;
  }
  .six {
    grid-column: 2;
    grid-row: 2;
  }
  .seven {
    grid-column: 3;
    grid-row: 2;
  }
  .eight {
    grid-column: 4;
    grid-row: 2;
  }

```
**[stylesHome.css]**
14) The top section of code makes the grid more animated when its loading using transition attributes. This is also the grid that is used to place our text and images on our home page. 

----

```css=
input[type=text]:focus, input[type=text]:focus-visible,  select:focus-visible, textarea:focus-visible {
    outline: 0px dashed #ffc0cb;
    padding: 12px;
    border: 2px solid #ffc0cb;
    border-radius: 16px;
}
```
**[styleProducts.css]**
15) This is one instance of an effect that is implemented throughout our website. When a user clicks any text areas, the outline of the area will turn from black to pink.

---

```css=
.circle{
    background-color: #fff;
    color:#999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    text-align: center;
    border: 3px solid #e0e0e0;
    transition: 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle.active{
    border-color: green;

```
**[stylesQuiz.css]**
16) This styles the circles for the progress step of our quiz. As users go through the quiz, the circles at the top will go from gray to green, indicating that the user is on the next part of the form. The transitions determine how long after the user presses the next button should the circle at the top turn green.
17) Another issue occurred while implementing this feature. The numbers (1,2,3,4) were not aligned inside the circle itself. Aligning the text into the center within each circle corrected the issue

----
```css=
.search.active .input{
    width: 200px;
    background-color:#ffc0cb;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 48px;
    font-size: 18px;
}

.search.active .btnSearch {
    transform: translateX(198px);
    background-color:#ffc0cb;
    color:black;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.containerSearch {
    width: 30vw;
    justify-content: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
}
```
**[styles.css]**
18) When the user clicks on the search button on the home screen, this code transforms the button into a text box where the user can input text. The JS event listener detects when a user clicks on the button and the CSS animates the button.
19) An issue we corrected is the search button still having a rounded radius after it was clicked on. It is supposed to extend/transform into a text box but it still had a rounded corner on the left side which made it the button itself look weird. To fix this, we set the radius to be 0 on the left side of the search button when it is clicked on.

-----
```css=
.search {
    position: relative;
    height: 50px;
    color:black;
}
```
20) Relative position sets the button relative to its normal position on the page. If it was absolute position, it would be relative to its parent's position. Adding this helped align the search button with the rest of the content on the page

----
```css=
.panel {
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 35vh;
    border-radius: 50px;
    cursor: pointer;
    flex: 0.5;
    position: relative;
    transition: flex 0.7s ease-in;
    margin: 10px;
  }

  .panel h3{
    margin-bottom: 0.67em;
  }

  .panel.active{
    flex: 3;

  }

  .panel.active h3{
    opacity: 1;
    border-radius: 50px;
  }

```
**[stylesContact.css]**

21) This panel animates the sliding images effect. When a panel is 'active' or clicked on which is detected by the JS event listener, the images will slide and expand.
-----
```css=
.buttons{
    position: absolute;
    bottom: 0;
}
```
**[stylesQuiz.css]**
22) This snippet of code helped to align the previous and next buttons in our quiz page. Originally we had an issue since the position of the buttons kept moving every time the user clicked it. It was moving in relation to each form widget. Making the position absolute fixed this error.

---
```css=
.weeklyTable tr:first-child th:first-child {
    border-top-left-radius: 16px;
  }

.weeklyTable tr:first-child th:last-child {
    border-top-right-radius: 16px;
}

.weeklyTable tr:last-child td:first-child {
    border-bottom-left-radius: 16px;
}

.weeklyTable tr:last-child td:last-child {
    border-bottom-right-radius: 16px;
}

.weeklyTable tr:nth-child(even){
    background-color: #f2f2f2;
}

.weeklyTable tr:hover {
    background-color: #ffc0cbf1;
    color:black;
    border-radius: 16px;
}

.weeklyTable tr{
    padding: 3em 3em;
}

```
**[stylesTable.css]**
23) This code stylizes the maternity table with rounded corners, which is a style that is present throughout our website. When you hover over a section of the table, the background color turns pink.

-----
## JavaScript
```javascript=
const bg = document.querySelector('.blur')

let load = 0
let int = setInterval(blurring, 10)

function blurring(){
  load++
  if (load > 99){
    clearInterval(int)
  }

  bg.style.filter = `blur(${scale(load, 0, 50, 10, 0)}px)`

}

```
**[script.js]**
24) The first concept we implemented from the Udemy course is the blurring effect. const bg is the variable to hold the class we selected. setInterval sets the time interval of the blur. This concept is implemented in all of our pages when it loads.

---
```javascript=
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
```
**[script.js]**
25) This is a function from the Udemy course. It scales the blur effect to another value so that they both are in synch. The blurring function calls the scale function. It is used in all of our pages.

---
```javascript=
function update(){
    circles.forEach((circle, idx) => {
        if(idx <currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled =true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}
```
**[scriptQuiz.js]**
26) The second concept we implemented from Udemy is the progress step effect. This was used for our maternity style quiz and shows the user how far along in the quiz they are by removing the active attribute from the previous circle and adds active to the next one on click of next. It also disables the previous/next buttons if there is no section to go to on click of each.

----
```javascript=
const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {

  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')

  })

})

function removeActiveClasses(){

  panels.forEach(panel => {

    panel.classList.remove('active')

  })

}
```
**[scriptContact.js]**
27) The third concept we implemented from Udemy was the sliding images. It is seen at the bottom of the contact page using images of the products from the home page. When you click on an image, it makes the image an active class and removes the active class on the other images for each panel.


-----
```javascript=
const search = document.querySelector('.search');
const btn = document.querySelector('.btnSearch');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
})
```
**[script.js]**
28) This is the fourth concept implemented from Udemy. The search button (which was highlighted in point 3) is activated from the user clicks on it. It then expands into a text box enabling a user to type.
29) There was an issue implementing this as well. In the Udemy course, the search button itself and the box to type was shown as two elements. When we tried to style the buttons in CSS with rounded corners the rounded corners were around the button itself instead of the whole text area, so we used additional CSS to correct it.

---

```javascript=
function showQuizQ(num){


    if (currentActive === 1) {
        targetDiv1.style.display = "block";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "none";
    }

    if (currentActive === 2) {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "block";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "none";
      }

    if (currentActive === 3) {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "block";
        targetDiv4.style.display = "none";
      }

    if (currentActive === 4) {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "block";
      }

}
```
**[scriptQuiz.js]**
30) This function allows us to have different displays in one page. We have const variables that gets id elements. Only one display is active at a time. When the user wants to go to the next question, the current display is hidden and another one is shown.

-----
