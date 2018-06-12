# Bamazon - Inventory Management System

## MySQL/Node.js/CLI application

#### Example User Flow

User is first greeted with a welcome message and a table of available products available for sale. The user is prompted to input the ID of the product they wish to purchase.

![Image 1](/images/img1.gif)

After entering a product ID, the user is prompted for the quantity they wish to purchase.

![Image 2](/images/img2.gif)

If there is sufficient inventory for this product, the app calculates the order total, Then thanks the user for their order.

![Image 3](/images/img3.gif)

The app then updates the database table to reflect the product new in stock quantity.

![Image 4](/images/img4.gif)

If the user tries to purchase more than there is in stock, they recieve a message that the invenory is to low for this order, informs them of how many are availble, then restarts the app.

![Image 5](/images/img5.gif)