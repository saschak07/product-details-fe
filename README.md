# Product search application

Basic product search system to filter and display the product catalog in a paginated manner

![searchPage](https://github.com/saschak07/image-store/blob/main/Screenshot%202021-06-20%20at%208.32.50%20PM.png)

**Few notes about the application**

The above screen-shot is a representation of the "search for product" landing page. which by default displays all available products from the database. 
From the navigation pane, title , catogory, price - min/max, ship from and ship to countries, suppliers, premium products etc. can be filtered, and all the filter options listed above, gets auto populated with responses received from the previous filters. To clear all the filters, `clear search` button must be clicked.

To search with a product title, any part of the title can be inserted in the keyword search text input box and `search` button must be clicked. The result will display all products having the searched keyword as part of their title in a case insensitive manner.

The displayed results are sorted by price low to high by default unless sort by price filter is selected for "High to Low"

The application also supports pagination, with 24 items on each page and 4 items in a row.

Test cases pertaining to the search API has been included in the backend segment with detailed instructions to run them.

**Tech stack**

* React.js

* axios

**Back end**

* Node.js

* Express

* Mongoose on MongoDB

Link to backend repository: https://github.com/saschak07/product-details-be#back-end-for-product-details-search-page

Live link: application has also been deployed at heroku .

https://product-fe-spock.herokuapp.com/

N.B.: The application takes a while to load both the backend and the front end for the first time, as those are deployed on heroku free dynos.

**How to start the application on local?**

* Start the node.js backend. to do that kindly follow the instructions as laid out here -> https://github.com/saschak07/product-details-be#back-end-for-product-details-search-page

* Point the backend search api's base url to the local instance. to do that, reach out to the below file in the project directory:

`spocket-fe/src/components/util/ProductEndpoints.js`

Insert the base url of the product search end point exposed by the backend 

```
export const Product_url = 'http://localhost:9000/spocket/items'

```

To start the dev instance on local, go to project directory and execute command:

```
npm install

npm start

```
N.B.: Node and npm should be preinstalled.


