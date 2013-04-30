  var cheesesteaks_out ="";
  var hoagies_out =""; 
  var fries_out ="";
  var snacks_out = "";


function dataStore() {
                cheesesteaks_out = $('#cheesesteaks_out').text('Loading data...');
                hoagies_out = $('#hoagies_out').text('Loading data...');
                fries_out = $('#fries_out').text('Loading data...');
                snacks_out = $('#snacks_out').text('Loading data...');
          loadCheesesteaks()  
          loadHoagies()
          loadFries()
          loadSnacks()
        


function loadCheesesteaks(){
               $.ajax({
                   url: 'http://menu.phillysct.com/cheese-steaks.php',
                   dataType: 'jsonp',
                   jsonp: 'jsoncallback',
                   timeout: 5000,
                   success: function (data, status) {
                       cheesesteaks_out.empty();

                       $.each(data, function (i, item) {
                           var cheesesteak = 
                               '<div data-role="collapsible">' +
                               '<h3>' + item.name + '</h3>' +
                              
                              
                            '<p>' + item.disc + '</p>' + 
                           '<p class="price">' + item.price + '</p>' +
                              '</div>';
                         
                           
                           cheesesteaks_out.append(cheesesteak);
                           
                       });
                   },
                   error: function () {



                       $('#cheesesteaks_out').html('<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset"> <h3>The Philly</h3> <p>The Original Cheese Steak, Fried Onions, and Cheez Whiz</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>The Kobe</h3> <p>Provolone, Pepperoni Philly Pizza Sauce, and Cheez Whiz</p> <p>$8.49</p> </div> <div data-role="collapsible"> <h3>The Doctor</h3> <p>American, Fried Onions, Cheez Whiz, Sweet and Hot Peppers</p> <p>$8.49</p> </div> <div data-role="collapsible"> <h3>The Broad Street Bully(The Works)</h3> <p>Extra Meat, Provolone, Fried Onions, Mushroom, Sweet and Hot Peppers, Pickles, and Cheez Whiz</p> <p>$9.99</p> </div> <div data-role="collapsible"> <h3>The Ivo</h3> <p>Provolone, Fried Onions, Cheez Whiz and Mushrooms</p> <p>$7.99</p> </div> <div data-role="collapsible"> <h3>The Stilt(Cheese Steak Hoagie)</h3> <p>Provolone, Raw Onions, Lettuce, Tomatoes, Pickles and Mayo</p> <p>$8.49</p> </div> <div data-role="collapsible"> <h3>The Barkley</h3> <p>American, Provolone, Ribeye Steak, Shaved Chicken, Fried Onions, Mayo, Ketchup and Cheez Whiz</p> <p>$8.99</p> </div>');
                     
             
                                
                   }
               });
                 }


function loadHoagies(){
               $.ajax({
                   url: 'http://menu.phillysct.com/hoagies.php',
                   dataType: 'jsonp',
                   jsonp: 'jsoncallback',
                   timeout: 5000,
                   success: function (data, status) {
                       hoagies_out.empty();

                       $.each(data, function (i, item) {
                           var hoagie = 
                               '<div data-role="collapsible">' +
                               '<h3>' + item.name + '</h3>' +
                              
                              
                            '<p>' + item.disc + '</p>' + 
                           '<p class="price">' + item.price + '</p>' +
                              '</div>';
                          
                           
                           hoagies_out.append(hoagie);
                           
                       });
                   },
                   error: function () {



                       $('#hoagies_out').html('<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset"> <h3>Italian</h3> <p>Capicola, Ham, Genoa, Sweet and Hot Peppers</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>Turkey</h3> <p>Capicola, Ham, Genoa, Sweet and Hot Peppers</p> <p>$5.99</p> </div> <div data-role="collapsible"> <h3>Salami</h3> <p>Capicola, Ham, Genoa, Sweet and Hot Peppers</p> <p>$5.99</p> </div> <div data-role="collapsible"> <h3>Buffalo Chicken Cutlet</h3> <p>Buffalo Crispy Chicken Breast, Ranch Dressing, Lettuce and Tomato</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>Ham</h3> <p>Capicola, Ham, Genoa, Sweet and Hot Peppers</p> <p>$5.99</p> </div> <div data-role="collapsible"> <h3>Capicola</h3> <p>Capicola, Ham, Genoa, Sweet and Hot Peppers</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>Chicken Cutlet</h3> <p>Crispy Bread Chicken Breast, American Cheese, Lettuce, Tomato, Onion, and Mayo</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>Chicken Parmesan Cutlet</h3> <p>Crispy Breaded Chicken, Melted Provolone, Philly Pizza Sauce and Parmesan Cheese</p> <p>$6.99</p> </div>');
                     
             
                                
                   }
               });
                 }







function loadFries(){
               $.ajax({
                   url: 'http://menu.phillysct.com/fries.php',
                   dataType: 'jsonp',
                   jsonp: 'jsoncallback',
                   timeout: 5000,
                   success: function (data, status) {
                       fries_out.empty();

                       $.each(data, function (i, item) {
                           var frie = 
                               '<div data-role="collapsible">' +
                               '<h3>' + item.name + '</h3>' +
                               
                              
                            '<p>' + item.disc + '</p>' + 
                           '<p class="price">' + item.price + '</p>' +
                              '</div>';
                          
                           
                           fries_out.append(frie);
                           
                       });
                   },
                   error: function () {



                       $('#fries_out').html('<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset"> <h3>Philly Fries</h3> <p>Steak, Fried Onions, and Cheez Whiz</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>Kobe Pizza Fries</h3> <p>Provolone, Philly Pizza Sauce, Cheez Whiz and Pepperoni</p> <p>$6.99</p> </div> <div data-role="collapsible"> <h3>Bully Fries</h3> <p>Extra Steak, Provolone, Fried Onions, Mushroom, Sweet and Hot Peppers, Pickles, and Cheez Whiz</p> <p>$9.99</p> </div> <div data-role="collapsible"> <h3>Ivo Fries</h3> <p>Steak, Provolone, Fried Onions, Cheez Whiz and Mushrooms</p> <p>$7.99</p> </div> <div data-role="collapsible"> <h3>Doctor Fries</h3> <p>Steak, American, Cheez Whiz, Fried Onions, Sweet and Hot Peppers</p> <p>$8.49</p> </div> <div data-role="collapsible"> <h3>Buffalo Chicken Fries</h3> <p>Crispy Buffalo Chicken Pieces, Buttery Buffalo Sauce</p> <p>$6.99</p> </div>');
                     
             
                                
                   }
               });
                 }




                 function loadSnacks() {
                     $.ajax({
                         url: 'http://menu.phillysct.com/snacks.php',
                         dataType: 'jsonp',
                         jsonp: 'jsoncallback',
                         timeout: 5000,
                         success: function (data, status) {
                             snacks_out.empty();

                             $.each(data, function (i, item) {
                                 var snack =
                               '<div data-role="collapsible">' +
                               '<h3>' + item.name + '</h3>' +


                            '<p>' + item.disc + '</p>' +
                           '<p class="price">' + item.price + '</p>' +
                              '</div>';


                                 snacks_out.append(snack);

                             });
                         },
                         error: function () {



                             $('#snacks_out').html('<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset"> <h3>Regular Fries Large</h3> <p></p> <p>$2.99</p> </div> <div data-role="collapsible"> <h3>Chips</h3> <p></p> <p>$0.50</p> </div> <div data-role="collapsible"> <h3>Regular Fries Small</h3> <p></p> <p>$1.99</p> </div> <div data-role="collapsible"> <h3>Wings</h3> <p>Plain, Mild, Hot, Xtra Hot, Atomic, BBQ, Teriyaki, Jerk, Vinnys Sweet Ranch, Butter Buffalo</p> <p>$5.99</p> </div> <div data-role="collapsible"> <h3>Soda</h3> <p></p> <p>$1.79</p> </div>');



                         }
                     });
                 }











           }








