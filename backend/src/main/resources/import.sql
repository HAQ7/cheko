INSERT INTO restaurant (id, name, description, location) VALUES
                                                             (1, 'La Bella Italia', 'Authentic Italian cuisine with fresh ingredients and traditional recipes passed down through generations', 'Downtown Milano District, Riyadh'),
                                                             (2, 'Spice Route', 'Traditional Indian and Pakistani flavors with aromatic spices and tandoor specialties', 'Al Olaya District, Riyadh'),
                                                             (3, 'The Grill House', 'Premium steakhouse featuring the finest cuts of meat and classic American dishes', 'King Fahd Road, Riyadh'),
                                                             (4, 'Tokyo Ramen Bar', 'Authentic Japanese ramen and sushi prepared by experienced Japanese chefs', 'Tahlia Street, Riyadh'),
                                                             (5, 'Mediterranean Breeze', 'Fresh Mediterranean cuisine with healthy options and coastal flavors', 'Al Malaz District, Riyadh');

INSERT INTO menu (id, restaurant_id, categories) VALUES
                                                     (1, 1, '{"Pizza", "Pasta", "Main Course", "Dessert", "Salad", "Appetizer"}'),
                                                     (2, 2, '{"Rice Dishes", "Curry", "Grilled", "Vegetarian", "Bread", "Appetizer", "Beverages"}'),
                                                     (3, 3, '{"Steaks", "Seafood", "BBQ", "Sides", "Salads", "Desserts"}'),
                                                     (4, 4, '{"Ramen", "Main Dishes", "Sushi", "Noodles", "Appetizers", "Rice Bowls", "Desserts"}'),
                                                     (5, 5, '{"Seafood", "Grilled", "Salads", "Appetizers", "Main Dishes", "Wraps", "Desserts"}');

INSERT INTO dish (id, name, description, calories, price, best_seller, category, menu_id) VALUES
                                                                                              (1, 'Margherita Pizza', 'Classic pizza with fresh mozzarella, tomato sauce, and basil', 650, 45, true, 'Pizza', 1),
                                                                                              (2, 'Spaghetti Carbonara', 'Traditional Roman pasta with eggs, cheese, pancetta, and black pepper', 720, 38, true, 'Pasta', 1),
                                                                                              (3, 'Lasagna Bolognese', 'Layers of pasta with meat sauce, béchamel, and melted cheese', 850, 42, false, 'Pasta', 1),
                                                                                              (4, 'Chicken Parmigiana', 'Breaded chicken breast with marinara sauce and mozzarella', 680, 48, false, 'Main Course', 1),
                                                                                              (5, 'Tiramisu', 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone', 320, 25, true, 'Dessert', 1),
                                                                                              (6, 'Caesar Salad', 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing', 280, 28, false, 'Salad', 1),
                                                                                              (7, 'Risotto ai Funghi', 'Creamy risotto with mixed mushrooms and parmesan cheese', 580, 40, false, 'Main Course', 1),
                                                                                              (8, 'Bruschetta', 'Toasted bread topped with fresh tomatoes, garlic, and basil', 180, 22, false, 'Appetizer', 1);

INSERT INTO dish (id, name, description, calories, price, best_seller, category, menu_id) VALUES
                                                                                              (9, 'Chicken Biryani', 'Aromatic basmati rice with spiced chicken, saffron, and fried onions', 780, 35, true, 'Rice Dishes', 2),
                                                                                              (10, 'Butter Chicken', 'Tender chicken in creamy tomato-based curry sauce', 650, 32, true, 'Curry', 2),
                                                                                              (11, 'Lamb Karahi', 'Spicy lamb cooked with tomatoes, ginger, and traditional spices', 720, 42, false, 'Curry', 2),
                                                                                              (12, 'Tandoori Chicken', 'Marinated chicken cooked in traditional clay oven', 520, 38, true, 'Grilled', 2),
                                                                                              (13, 'Palak Paneer', 'Cottage cheese cubes in creamy spinach curry', 480, 28, false, 'Vegetarian', 2),
                                                                                              (14, 'Naan Bread', 'Soft flatbread baked in tandoor oven', 220, 8, false, 'Bread', 2),
                                                                                              (15, 'Samosas', 'Crispy pastries filled with spiced potatoes and peas', 160, 15, false, 'Appetizer', 2),
                                                                                              (16, 'Mango Lassi', 'Refreshing yogurt drink blended with sweet mango', 180, 12, false, 'Beverages', 2),
                                                                                              (17, 'Dal Makhani', 'Slow-cooked black lentils in rich creamy sauce', 420, 25, false, 'Vegetarian', 2);

INSERT INTO dish (id, name, description, calories, price, best_seller, category, menu_id) VALUES
                                                                                              (18, 'Ribeye Steak', 'Prime 12oz ribeye steak grilled to perfection', 980, 85, true, 'Steaks', 3),
                                                                                              (19, 'Filet Mignon', 'Tender 8oz beef tenderloin with herb butter', 620, 95, true, 'Steaks', 3),
                                                                                              (20, 'Grilled Salmon', 'Atlantic salmon with lemon herb seasoning', 540, 55, false, 'Seafood', 3),
                                                                                              (21, 'BBQ Ribs', 'Full rack of baby back ribs with house BBQ sauce', 1200, 65, false, 'BBQ', 3),
                                                                                              (22, 'Lobster Tail', 'Grilled lobster tail with garlic butter', 320, 75, false, 'Seafood', 3),
                                                                                              (23, 'Loaded Baked Potato', 'Baked potato with cheese, bacon, and sour cream', 450, 18, false, 'Sides', 3),
                                                                                              (24, 'Caesar Salad with Chicken', 'Classic Caesar salad topped with grilled chicken', 480, 32, false, 'Salads', 3),
                                                                                              (25, 'Chocolate Lava Cake', 'Warm chocolate cake with molten center and vanilla ice cream', 580, 28, true, 'Desserts', 3);

INSERT INTO dish (id, name, description, calories, price, best_seller, category, menu_id) VALUES
                                                                                              (26, 'Tonkotsu Ramen', 'Rich pork bone broth with chashu pork, egg, and green onions', 720, 32, true, 'Ramen', 4),
                                                                                              (27, 'Miso Ramen', 'Savory soybean paste broth with corn, bamboo shoots, and nori', 580, 28, false, 'Ramen', 4),
                                                                                              (28, 'Chicken Teriyaki', 'Grilled chicken with sweet teriyaki glaze and steamed rice', 620, 35, false, 'Main Dishes', 4),
                                                                                              (29, 'Sushi Combo', 'Assorted nigiri sushi with tuna, salmon, and shrimp', 450, 48, true, 'Sushi', 4),
                                                                                              (30, 'Tempura Udon', 'Thick wheat noodles in dashi broth with crispy tempura', 680, 30, false, 'Noodles', 4),
                                                                                              (31, 'Gyoza', 'Pan-fried pork dumplings with dipping sauce', 280, 18, true, 'Appetizers', 4),
                                                                                              (32, 'Chirashi Bowl', 'Assorted sashimi over seasoned sushi rice', 520, 42, false, 'Rice Bowls', 4),
                                                                                              (33, 'Mochi Ice Cream', 'Sweet rice cake filled with ice cream', 180, 15, false, 'Desserts', 4),
                                                                                              (34, 'Edamame', 'Steamed soybeans with sea salt', 120, 12, false, 'Appetizers', 4);

INSERT INTO dish (id, name, description, calories, price, best_seller, category, menu_id) VALUES
                                                                                              (35, 'Grilled Sea Bass', 'Fresh sea bass with Mediterranean herbs and olive oil', 420, 52, true, 'Seafood', 5),
                                                                                              (36, 'Lamb Souvlaki', 'Marinated lamb skewers with tzatziki and pita bread', 680, 38, false, 'Grilled', 5),
                                                                                              (37, 'Greek Salad', 'Fresh tomatoes, cucumbers, olives, and feta cheese', 320, 25, true, 'Salads', 5),
                                                                                              (38, 'Hummus Platter', 'Creamy chickpea dip with warm pita bread and vegetables', 380, 22, false, 'Appetizers', 5),
                                                                                              (39, 'Moussaka', 'Layered eggplant casserole with meat sauce and béchamel', 750, 35, false, 'Main Dishes', 5),
                                                                                              (40, 'Falafel Wrap', 'Crispy chickpea balls with tahini sauce in pita wrap', 520, 28, true, 'Wraps', 5),
                                                                                              (41, 'Grilled Halloumi', 'Grilled Cypriot cheese with herbs and olive oil', 280, 20, false, 'Appetizers', 5),
                                                                                              (42, 'Baklava', 'Flaky pastry with nuts and honey syrup', 420, 18, false, 'Desserts', 5),
                                                                                              (43, 'Tabbouleh', 'Fresh parsley salad with tomatoes, mint, and bulgur', 180, 22, false, 'Salads', 5);