/**
 * Production menu synced from https://www.mojolatin.com/menu
 * (Dinner / Lunch / Brunch / Dessert / Drinks & Cocktails — audited 2026-09-23)
 * Dinner prices used as the primary listing when dayparts differ.
 */

export type MenuCategory =
  | 'APPETIZERS'
  | 'SALADS'
  | 'CEVICHE'
  | 'ENTREES'
  | 'SANDWICHES'
  | 'BRUNCH'
  | 'DESSERTS'
  | 'COCKTAILS'

export type MenuItem = {
  id: string
  name: string
  category: MenuCategory
  description: string
  ingredients: string[]
  price: string
  tags?: string[]
  image: string
  featured?: boolean
}

export const menuCategories: MenuCategory[] = [
  'APPETIZERS',
  'SALADS',
  'CEVICHE',
  'ENTREES',
  'SANDWICHES',
  'BRUNCH',
  'DESSERTS',
  'COCKTAILS',
]

export const menuItems: MenuItem[] = [
  // ── Appetizers ──────────────────────────────────────────────
  {
    id: 'guac-chips',
    name: 'Guac & Chips',
    category: 'APPETIZERS',
    description:
      'Fresh homemade guacamole, habanero peppers, tortillas, cilantro micro-greens.',
    ingredients: ['Avocado', 'Habanero', 'Cilantro', 'Tortillas'],
    price: '$13',
    tags: ['Vegan'],
    image: '/media/food-guac.jpg',
    featured: true,
  },
  {
    id: 'chorizo-tostada',
    name: 'Chorizo Tostada',
    category: 'APPETIZERS',
    description:
      'Vegan chorizo & cactus mix, shredded lettuce, vegan mozzarella, habanero-avocado sauce, pickled onions, micro cilantro on white corn tostadas.',
    ingredients: ['Vegan chorizo', 'Cactus', 'Tostada', 'Habanero avocado'],
    price: '$13',
    tags: ['Vegetarian'],
    image: '/media/crave-fresh.jpg',
  },
  {
    id: 'chicken-taquitos',
    name: 'Chicken Taquitos',
    category: 'APPETIZERS',
    description:
      'Chicken thighs marinated in antichuchera, white corn tortillas, onions, Oaxaca cheese, tomatillo sauce and cilantro.',
    ingredients: ['Chicken', 'Oaxaca', 'Tomatillo', 'Corn tortilla'],
    price: '$14',
    tags: ['Mild'],
    image: '/media/food-taquitos.jpg',
  },
  {
    id: 'fried-calamari',
    name: 'Fried Calamari',
    category: 'APPETIZERS',
    description:
      'Crispy calamari, yuca fries, pickled onions served with tartare sauce and lime wedge.',
    ingredients: ['Calamari', 'Yuca', 'Pickled onion', 'Tartare'],
    price: '$17',
    image: '/media/hit-02.jpg',
  },
  {
    id: 'empanada-beef',
    name: 'Beef Empanada',
    category: 'APPETIZERS',
    description: 'Hand-folded beef empanada — diced skirt steak, red onions, aji panca.',
    ingredients: ['Beef', 'Aji panca', 'Onion'],
    price: '$13',
    image: '/media/hit-04.jpg',
    featured: true,
  },
  {
    id: 'empanada-chicken',
    name: 'Chicken Empanada',
    category: 'APPETIZERS',
    description:
      'Hand-folded chicken empanada with roasted red pepper, onions, green olives, tomato paste, cilantro.',
    ingredients: ['Chicken', 'Olives', 'Red pepper'],
    price: '$11',
    image: '/media/food-empanada.jpg',
  },
  {
    id: 'mojo-wings',
    name: 'Mojo Wings',
    category: 'APPETIZERS',
    description:
      '6 mild wings in a mango-Valentina glaze, garnished with scallions and served with homemade blue cheese dressing.',
    ingredients: ['Chicken', 'Mango', 'Valentina', 'Blue cheese'],
    price: '$17',
    tags: ['Mild'],
    image: '/media/crave-heat.jpg',
    featured: true,
  },
  {
    id: 'baja-shrimp-tacos',
    name: 'Baja Shrimp Tacos',
    category: 'APPETIZERS',
    description:
      'Battered shrimp, mini flour tortillas, mango slaw, avocado crema, micro cilantro.',
    ingredients: ['Shrimp', 'Mango slaw', 'Avocado crema', 'Flour tortilla'],
    price: '$15',
    image: '/media/hit-01.jpg',
    featured: true,
  },
  {
    id: 'corn-ribs',
    name: 'Corn Ribs',
    category: 'APPETIZERS',
    description: 'Tajín chipotle crema, butter herbs, cotija cheese, cilantro.',
    ingredients: ['Corn', 'Tajín', 'Cotija', 'Chipotle'],
    price: '$12',
    tags: ['Vegetarian'],
    image: '/media/crave-fresh.jpg',
  },
  {
    id: 'shrimp-al-ajillo',
    name: 'Shrimp Al Ajillo',
    category: 'APPETIZERS',
    description:
      'Shrimp sautéed in creamy garlic sauce served with sliced toasted baguette.',
    ingredients: ['Shrimp', 'Garlic', 'Cream', 'Baguette'],
    price: '$19',
    image: '/media/hit-01.jpg',
  },
  {
    id: 'chicken-pozole',
    name: 'Chicken Pozole',
    category: 'APPETIZERS',
    description:
      'Hominy in a rich red chicken broth, topped with lettuce, radish, micro cilantro, served with tortilla chips.',
    ingredients: ['Chicken', 'Hominy', 'Radish', 'Broth'],
    price: '$17',
    image: '/media/crave-heat.jpg',
  },

  // ── Salads ──────────────────────────────────────────────────
  {
    id: 'avocado-tropical-salad',
    name: 'Avocado Tropical Salad',
    category: 'SALADS',
    description:
      'Mixed greens, avocado, mango, pineapple, red onions, cucumber, maracuyá Tajín vinaigrette.',
    ingredients: ['Avocado', 'Mango', 'Pineapple', 'Maracuyá'],
    price: '$17',
    tags: ['Vegan'],
    image: '/media/crave-fresh.jpg',
  },
  {
    id: 'apple-kale-salad',
    name: 'Apple Kale Salad',
    category: 'SALADS',
    description:
      'Spinach, kale, apple, endive, cotija cheese, crispy Tajín chickpeas, apple vinaigrette.',
    ingredients: ['Kale', 'Apple', 'Cotija', 'Chickpeas'],
    price: '$15',
    image: '/media/crave-fresh.jpg',
  },
  {
    id: 'mexican-caesar',
    name: 'Mexican Caesar Salad',
    category: 'SALADS',
    description:
      'Romaine, pickled cactus, radish, plantain croutons, shaved Parmesan, smoked chipotle dressing.',
    ingredients: ['Romaine', 'Cactus', 'Plantain', 'Chipotle'],
    price: '$15',
    image: '/media/crave-fresh.jpg',
  },

  // ── Ceviche Bar ─────────────────────────────────────────────
  {
    id: 'down-the-hatch',
    name: 'Down the Hatch',
    category: 'CEVICHE',
    description:
      'Diced white fish, calamari, shrimp, red onions in a zesty Aji Amarillo lime sauce topped with fried calamari and chifles.',
    ingredients: ['White fish', 'Calamari', 'Shrimp', 'Aji Amarillo', 'Lime'],
    price: '$19',
    image: '/media/hit-02.jpg',
    featured: true,
  },
  {
    id: 'peruvian-ceviche',
    name: 'Peruvian Ceviche',
    category: 'CEVICHE',
    description:
      'Shrimp & white fish cured in jalapeño leche de tigre, onions, cilantro, diced sweet potatoes, crispy cancha, micro cilantro, served with chifles.',
    ingredients: ['Shrimp', 'White fish', 'Leche de tigre', 'Sweet potato'],
    price: '$21',
    image: '/media/crave-citrus.jpg',
  },
  {
    id: 'salmon-tartar-tacos',
    name: 'Salmon Tartar Tacos',
    category: 'CEVICHE',
    description:
      'Cucumber, onions, watermelon radish, chili-garlic, soy wasabi aioli, micro arugula in a wonton shell.',
    ingredients: ['Salmon', 'Wasabi', 'Wonton', 'Radish'],
    price: '$15',
    image: '/media/food-ceviche-2.jpg',
  },
  {
    id: 'vegan-ceviche',
    name: 'Mojo Vegan Ceviche',
    category: 'CEVICHE',
    description:
      'Cured red cabbage topped with avocado, sweet potatoes, onions, cucumber, cilantro tossed in cocktail sauce, heirloom tomatoes, micro cilantro, crispy cancha.',
    ingredients: ['Red cabbage', 'Avocado', 'Sweet potato', 'Tomato'],
    price: '$13',
    tags: ['Vegan'],
    image: '/media/food-vegan-ceviche.jpg',
  },

  // ── Entrees ─────────────────────────────────────────────────
  {
    id: 'chicken-mojo',
    name: 'Chicken MOJO',
    category: 'ENTREES',
    description:
      'Seared chicken breast, beurre blanc cream sauce served with white rice, black beans and maduros. (Can sub maduros for grilled veggies)',
    ingredients: ['Chicken', 'Beurre blanc', 'Rice', 'Black beans', 'Maduros'],
    price: '$29',
    image: '/media/food-chicken-mojo.jpg',
    featured: true,
  },
  {
    id: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    category: 'ENTREES',
    description:
      'Grilled char siu marinated diced chicken thighs, white rice, onions, ginger, scallions, scrambled eggs tossed with soy sauce & sesame oil. (Vegetarian option available)',
    ingredients: ['Chicken', 'Rice', 'Soy', 'Sesame', 'Egg'],
    price: '$24',
    image: '/media/crave-smoke.jpg',
  },
  {
    id: 'jumpin-lomo',
    name: "Jumpin' Lomo",
    category: 'ENTREES',
    description:
      'Stir fry skirt steak chunks, tomatoes, and red onions in a smoked soy sauce reduction served with white rice on a bed of truffle fries.',
    ingredients: ['Skirt steak', 'Soy', 'Tomato', 'Truffle fries'],
    price: '$33',
    image: '/media/hit-03.jpg',
    featured: true,
  },
  {
    id: 'churrasco',
    name: 'Churrasco',
    category: 'ENTREES',
    description:
      'Medium grilled 8oz skirt steak drizzled in chimichurri sauce, white rice, black beans, and maduros. (Can sub maduros for grilled veggies)',
    ingredients: ['Skirt steak', 'Chimichurri', 'Rice', 'Maduros'],
    price: '$45',
    image: '/media/food-churrasco.jpg',
    featured: true,
  },
  {
    id: 'seasonal-salmon',
    name: 'Seasonal Salmon',
    category: 'ENTREES',
    description:
      'Pan seared salmon filet, wild mushroom truffle mashed potato, wilted kale, potato chips, micro arugula.',
    ingredients: ['Salmon', 'Truffle mash', 'Kale'],
    price: '$31',
    image: '/media/food-salmon.jpg',
  },
  {
    id: 'ropa-vieja',
    name: 'Ropa Vieja',
    category: 'ENTREES',
    description:
      'Shredded braised beef in tomatoes, green olives, bell peppers, onions — served with rice, black beans, avocado and maduros.',
    ingredients: ['Braised beef', 'Olives', 'Peppers', 'Avocado'],
    price: '$22',
    image: '/media/food-ropa.jpg',
  },
  {
    id: 'hongos-saltado',
    name: 'Hongos Saltado',
    category: 'ENTREES',
    description:
      'Stir fry diced mushrooms, tomatoes, red onions in a smokey soy sauce reduction served with truffle fries and garlic rice.',
    ingredients: ['Mushrooms', 'Soy', 'Truffle fries', 'Garlic rice'],
    price: '$23',
    tags: ['Vegetarian'],
    image: '/media/crave-smoke.jpg',
  },
  {
    id: 'grilled-chicken-chimichurri',
    name: 'Grilled Chicken Chimichurri',
    category: 'ENTREES',
    description: 'Grilled chicken breast, chimichurri, garlic white rice, maduros, black beans.',
    ingredients: ['Chicken', 'Chimichurri', 'Rice', 'Maduros'],
    price: '$25',
    image: '/media/food-chicken-mojo.jpg',
  },

  // ── Sandwiches & Burgers ────────────────────────────────────
  {
    id: 'mojo-burger',
    name: 'Mojo Burger',
    category: 'SANDWICHES',
    description:
      '8oz beef blend, remoulade, spicy ketchup, lettuce, tomatoes, sharp cheddar, bacon on a brioche bun.',
    ingredients: ['Beef', 'Cheddar', 'Bacon', 'Brioche'],
    price: '$23',
    image: '/media/crave-smoke.jpg',
  },
  {
    id: 'quinoa-burger',
    name: 'Quinoa Black Bean Burger',
    category: 'SANDWICHES',
    description:
      'Quinoa, black bean, asparagus, zucchini, red peppers, jalapeño, panko, arugula, tomato, avocado, chipotle aioli on brioche — served with house fries.',
    ingredients: ['Quinoa', 'Black bean', 'Avocado', 'Chipotle'],
    price: '$15',
    tags: ['Vegetarian'],
    image: '/media/crave-fresh.jpg',
  },
  {
    id: 'poblano-chicken-sandwich',
    name: 'Poblano Fried Chicken Sandwich',
    category: 'SANDWICHES',
    description:
      'Buttermilk chicken breast, queso frito, roasted poblano aioli, jícama sauce, avocado cream on a brioche bun. Comes with cut fries or salad.',
    ingredients: ['Chicken', 'Poblano', 'Queso frito', 'Brioche'],
    price: '$17',
    image: '/media/crave-heat.jpg',
  },
  {
    id: 'steak-sandwich',
    name: 'Steak Sandwich',
    category: 'SANDWICHES',
    description:
      'Chopped grilled skirt steak, baby arugula, Swiss cheese, caramelized onions, chipotle aioli on ciabatta. Comes with cut fries or salad.',
    ingredients: ['Skirt steak', 'Swiss', 'Chipotle', 'Ciabatta'],
    price: '$23',
    image: '/media/hit-03.jpg',
  },

  // ── Brunch (Sat–Sun 11am–3pm) ───────────────────────────────
  {
    id: 'tres-golpes',
    name: 'Tres Golpes',
    category: 'BRUNCH',
    description:
      'Mashed green plantains, pickled onions, fried cheese, fried salami, and 2 eggs sunny side up.',
    ingredients: ['Plantain', 'Salami', 'Fried cheese', 'Eggs'],
    price: '$17',
    image: '/media/crave-smoke.jpg',
    featured: true,
  },
  {
    id: 'chicken-waffles',
    name: 'Chicken & Waffles',
    category: 'BRUNCH',
    description:
      'Fried buttermilk-battered chicken breast, classic Belgian waffle, turkey bacon gravy and maple syrup.',
    ingredients: ['Chicken', 'Waffle', 'Gravy', 'Maple'],
    price: '$25',
    image: '/media/crave-sweet.jpg',
    featured: true,
  },
  {
    id: 'steak-eggs',
    name: 'Steak & Eggs',
    category: 'BRUNCH',
    description:
      'Grilled marinated skirt steak with 2 eggs sunny side up and home fries.',
    ingredients: ['Skirt steak', 'Eggs', 'Home fries'],
    price: '$29',
    image: '/media/food-churrasco.jpg',
  },
  {
    id: 'churros-pancakes',
    name: 'Churros Pancakes',
    category: 'BRUNCH',
    description:
      'Stacked sugar-dusted churro pancakes with salted caramel sauce, strawberries, whipped cream and churro crumbs.',
    ingredients: ['Churro', 'Caramel', 'Strawberry', 'Cream'],
    price: '$18',
    image: '/media/food-churro.jpg',
  },
  {
    id: 'creme-brulee-french-toast',
    name: 'Crème Brûlée French Toast',
    category: 'BRUNCH',
    description:
      'Baked brioche, fresh berries, vanilla mascarpone, served with syrup.',
    ingredients: ['Brioche', 'Berries', 'Mascarpone'],
    price: '$17',
    image: '/media/crave-sweet.jpg',
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    category: 'BRUNCH',
    description:
      'Mashed avocado on grilled garlic multigrain bread, heirloom tomatoes, chipotle sour cream, micro basil. Add egg $2.50 / bacon $2.',
    ingredients: ['Avocado', 'Tomato', 'Chipotle', 'Multigrain'],
    price: '$13',
    tags: ['Vegetarian'],
    image: '/media/crave-fresh.jpg',
  },
  {
    id: 'steak-eggs-benedict',
    name: 'Steak n Eggs Benedict',
    category: 'BRUNCH',
    description:
      'English muffin topped with steak, poached eggs, chipotle hollandaise, wilted spinach — served with home fries or house salad.',
    ingredients: ['Steak', 'Eggs', 'Hollandaise', 'Spinach'],
    price: '$22',
    tags: ['Featured'],
    image: '/media/hit-03.jpg',
  },
  {
    id: 'fried-catfish',
    name: 'Fried Catfish',
    category: 'BRUNCH',
    description: 'Served with white rice, maduros, and salad. Also on lunch.',
    ingredients: ['Catfish', 'Rice', 'Maduros', 'Salad'],
    price: '$14',
    image: '/media/hit-02.jpg',
  },

  // ── Desserts ────────────────────────────────────────────────
  {
    id: 'churros',
    name: 'Churros',
    category: 'DESSERTS',
    description:
      'Churros dusted in cinnamon sugar served with a hazelnut dipping sauce.',
    ingredients: ['Cinnamon', 'Sugar', 'Hazelnut'],
    price: '$8',
    image: '/media/food-churro.jpg',
    featured: true,
  },
  {
    id: 'cuatro-leches',
    name: 'Cuatro Leches',
    category: 'DESSERTS',
    description: 'Tres leche sponge cake topped with crunchy milk.',
    ingredients: ['Milk', 'Sponge', 'Cream'],
    price: '$9',
    image: '/media/crave-sweet.jpg',
    featured: true,
  },
  {
    id: 'passion-cheesecake',
    name: 'Passion Fruit Cheesecake',
    category: 'DESSERTS',
    description:
      'Cinnamon graham crust, cream cheese, passion fruit, fresh whipped cream, blueberry, passion galette.',
    ingredients: ['Passion fruit', 'Cheesecake', 'Blueberry'],
    price: '$11',
    image: '/media/food-dessert.jpg',
  },
  {
    id: 'dessert-trio',
    name: 'Dessert Trio',
    category: 'DESSERTS',
    description: 'Churros, passionfruit cheesecake & peach flan.',
    ingredients: ['Churros', 'Cheesecake', 'Flan'],
    price: '$29',
    image: '/media/food-dessert.jpg',
  },

  // ── Signature Cocktails ─────────────────────────────────────
  {
    id: 'passion-mula',
    name: 'Passion Mula',
    category: 'COCKTAILS',
    description: 'Ketel One vodka, passion fruit, grapefruit, ginger beer.',
    ingredients: ['Vodka', 'Passion fruit', 'Grapefruit', 'Ginger beer'],
    price: '$15',
    image: '/media/hit-05.jpg',
    featured: true,
  },
  {
    id: 'coco-mojo',
    name: 'Coco Mojo #6',
    category: 'COCKTAILS',
    description: 'Coconut vodka, cachaça, lime, strawberry, agave.',
    ingredients: ['Coconut vodka', 'Cachaça', 'Strawberry', 'Lime'],
    price: '$15',
    image: '/media/drink-mojito.jpg',
  },
  {
    id: 'chocolate-old-fashioned',
    name: 'Chocolate Old Fashioned',
    category: 'COCKTAILS',
    description:
      'Smoked Bulleit bourbon, crème de cacao, orange & chocolate bitters.',
    ingredients: ['Bourbon', 'Cacao', 'Orange bitters'],
    price: '$17',
    image: '/media/drink-mezcal.jpg',
  },
  {
    id: 'el-chamuco',
    name: 'El Chamuco',
    category: 'COCKTAILS',
    description:
      'Union Joven mezcal, Don Julio Blanco, blood orange, jalapeño, lime.',
    ingredients: ['Mezcal', 'Tequila', 'Blood orange', 'Jalapeño'],
    price: '$18',
    image: '/media/drink-mezcal.jpg',
    featured: true,
  },
  {
    id: 'verde-santo',
    name: 'Verde Santo',
    category: 'COCKTAILS',
    description:
      'Cucumber mint vodka, mezcal, lime, Citrónge, jalapeño syrup.',
    ingredients: ['Vodka', 'Mezcal', 'Cucumber', 'Jalapeño'],
    price: '$15',
    image: '/media/drink-paloma.jpg',
  },
  {
    id: 'guava-spark',
    name: 'Guava Spark',
    category: 'COCKTAILS',
    description: 'Gin, elderflower, guava puree, habanero agave, lime juice.',
    ingredients: ['Gin', 'Elderflower', 'Guava', 'Habanero'],
    price: '$15',
    image: '/media/social-1.jpg',
  },
  {
    id: 'lulada-spritz',
    name: 'Lulada Spritz',
    category: 'COCKTAILS',
    description:
      'Ketel One Peach Blossom, peach, agave, lime, lulo, sparkling.',
    ingredients: ['Vodka', 'Peach', 'Lulo', 'Sparkling'],
    price: '$17',
    image: '/media/drink-margarita.jpg',
  },
  {
    id: 'mandarin-sunrise',
    name: 'Mandarin Sunrise',
    category: 'COCKTAILS',
    description:
      'Mandarin-infused tequila, brandy, Cointreau, lime, agave, mole bitters.',
    ingredients: ['Tequila', 'Mandarin', 'Cointreau', 'Mole bitters'],
    price: '$15',
    image: '/media/drink-margarita.jpg',
  },
  {
    id: 'jamaica-royale',
    name: 'Jamaica Royale',
    category: 'COCKTAILS',
    description: 'Cognac, amaretto, Lillet Blanc, hibiscus, orange bitters.',
    ingredients: ['Cognac', 'Amaretto', 'Hibiscus'],
    price: '$17',
    image: '/media/social-1.jpg',
  },
  {
    id: 'pisco-passion',
    name: 'Pisco Passion',
    category: 'COCKTAILS',
    description: 'Pisco, passion fruit, Aperol, lime.',
    ingredients: ['Pisco', 'Passion fruit', 'Aperol', 'Lime'],
    price: '$15',
    image: '/media/hit-05.jpg',
    featured: true,
  },
  {
    id: 'margarita',
    name: 'Margarita',
    category: 'COCKTAILS',
    description:
      'Tequila, lime juice, agave. Add flavor +$2 (mango, passion, mora, strawberry, coconut, tamarind, watermelon, hibiscus, peach).',
    ingredients: ['Tequila', 'Lime', 'Agave'],
    price: '$12',
    image: '/media/drink-margarita.jpg',
  },
  {
    id: 'mojito',
    name: 'Mojito',
    category: 'COCKTAILS',
    description:
      'Cruzan rum, mint, lime, club soda, mint syrup. Add flavor +$2.',
    ingredients: ['Rum', 'Mint', 'Lime', 'Soda'],
    price: '$12',
    image: '/media/drink-mojito.jpg',
    featured: true,
  },
  {
    id: 'frozen-margarita',
    name: 'Frozen Margarita',
    category: 'COCKTAILS',
    description: 'Fresh lime juice, tequila, agave. Happy hour $9.',
    ingredients: ['Tequila', 'Lime', 'Agave'],
    price: '$12',
    image: '/media/drink-margarita.jpg',
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    category: 'COCKTAILS',
    description: 'Rum, coconut milk, pineapple, vanilla.',
    ingredients: ['Rum', 'Coconut', 'Pineapple'],
    price: '$12',
    image: '/media/social-1.jpg',
  },
  {
    id: 'froze',
    name: 'Frozé',
    category: 'COCKTAILS',
    description:
      'Rosé wine, Smirnoff watermelon vodka, vermouth, strawberry, watermelon, peach.',
    ingredients: ['Rosé', 'Vodka', 'Strawberry', 'Watermelon'],
    price: '$12',
    image: '/media/hit-05.jpg',
  },
  {
    id: 'blue-hawaiian',
    name: 'Blue Hawaiian',
    category: 'COCKTAILS',
    description:
      'Vodka, rum, blue curaçao, coconut water, coconut cream, pineapple.',
    ingredients: ['Vodka', 'Rum', 'Curaçao', 'Pineapple'],
    price: '$12',
    image: '/media/social-1.jpg',
  },
  {
    id: 'pink-flamingo',
    name: 'Pink Flamingo',
    category: 'COCKTAILS',
    description: 'Frozé + Margarita.',
    ingredients: ['Frozé', 'Margarita'],
    price: '$12',
    image: '/media/hit-05.jpg',
  },
  {
    id: 'rosa-azul',
    name: 'Rosa Azul',
    category: 'COCKTAILS',
    description: 'Frozé + Blue Hawaiian.',
    ingredients: ['Frozé', 'Blue Hawaiian'],
    price: '$12',
    image: '/media/social-1.jpg',
  },
  {
    id: 'henny-colada',
    name: 'Henny Colada',
    category: 'COCKTAILS',
    description: 'Hennessy twist on the classic piña colada.',
    ingredients: ['Hennessy', 'Coconut', 'Pineapple'],
    price: '$18',
    image: '/media/social-1.jpg',
  },
  {
    id: 'virgin-nojito',
    name: 'Virgin Nojito',
    category: 'COCKTAILS',
    description: 'Non-alcoholic — lime, club soda, mint.',
    ingredients: ['Lime', 'Mint', 'Soda'],
    price: '$9',
    tags: ['Mocktail'],
    image: '/media/drink-mojito.jpg',
  },
  {
    id: 'bloody-nono-maria',
    name: 'Bloody Nono Maria',
    category: 'COCKTAILS',
    description: 'Non-alcoholic Bloody Maria.',
    ingredients: ['Tomato', 'Spice', 'Lime'],
    price: '$9',
    tags: ['Mocktail'],
    image: '/media/crave-heat.jpg',
  },
  {
    id: 'passion-ginger-mule',
    name: 'Passion Fruit Ginger Mule',
    category: 'COCKTAILS',
    description: 'Non-alcoholic passion fruit ginger mule.',
    ingredients: ['Passion fruit', 'Ginger'],
    price: '$11',
    tags: ['Mocktail'],
    image: '/media/hit-05.jpg',
  },
]

export const featuredDishes = menuItems.filter((d) => d.featured)
