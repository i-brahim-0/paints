import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      hasSubCategories: true,
      subCategories: [
        {
          id: 101,
          name: 'Mobiles',
          parentCategoryId: 1,
          hasSubCategories: false,
        },
        {
          id: 102,
          name: 'Laptops',
          parentCategoryId: 1,
          hasSubCategories: false,
        },
        {
          id: 103,
          name: 'Tablets',
          parentCategoryId: 1,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Home Appliances',
      hasSubCategories: true,
      subCategories: [
        {
          id: 201,
          name: 'Refrigerators',
          parentCategoryId: 2,
          hasSubCategories: false,
        },
        {
          id: 202,
          name: 'Washing Machines',
          parentCategoryId: 2,
          hasSubCategories: false,
        },
        {
          id: 203,
          name: 'Microwaves',
          parentCategoryId: 2,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 3,
      name: 'Clothing',
      hasSubCategories: true,
      subCategories: [
        { id: 301, name: 'Men', parentCategoryId: 3, hasSubCategories: false },
        {
          id: 302,
          name: 'Women',
          parentCategoryId: 3,
          hasSubCategories: false,
        },
        { id: 303, name: 'Kids', parentCategoryId: 3, hasSubCategories: false },
      ],
    },
    {
      id: 4,
      name: 'Furniture',
      hasSubCategories: true,
      subCategories: [
        {
          id: 401,
          name: 'Living Room',
          parentCategoryId: 4,
          hasSubCategories: false,
        },
        {
          id: 402,
          name: 'Bedroom',
          parentCategoryId: 4,
          hasSubCategories: false,
        },
        {
          id: 403,
          name: 'Office',
          parentCategoryId: 4,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 5,
      name: 'Books',
      hasSubCategories: true,
      subCategories: [
        {
          id: 501,
          name: 'Fiction',
          parentCategoryId: 5,
          hasSubCategories: false,
        },
        {
          id: 502,
          name: 'Non-Fiction',
          parentCategoryId: 5,
          hasSubCategories: false,
        },
        {
          id: 503,
          name: 'Academic',
          parentCategoryId: 5,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 6,
      name: 'Beauty & Personal Care',
      hasSubCategories: true,
      subCategories: [
        {
          id: 601,
          name: 'Skin Care',
          parentCategoryId: 6,
          hasSubCategories: false,
        },
        {
          id: 602,
          name: 'Hair Care',
          parentCategoryId: 6,
          hasSubCategories: false,
        },
        {
          id: 603,
          name: 'Makeup',
          parentCategoryId: 6,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 7,
      name: 'Toys',
      hasSubCategories: true,
      subCategories: [
        {
          id: 701,
          name: 'Educational',
          parentCategoryId: 7,
          hasSubCategories: false,
        },
        {
          id: 702,
          name: 'Outdoor',
          parentCategoryId: 7,
          hasSubCategories: false,
        },
        {
          id: 703,
          name: 'Board Games',
          parentCategoryId: 7,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 8,
      name: 'Sports & Fitness',
      hasSubCategories: true,
      subCategories: [
        {
          id: 801,
          name: 'Gym Equipment',
          parentCategoryId: 8,
          hasSubCategories: false,
        },
        {
          id: 802,
          name: 'Outdoor Gear',
          parentCategoryId: 8,
          hasSubCategories: false,
        },
        {
          id: 803,
          name: 'Athletic Wear',
          parentCategoryId: 8,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 9,
      name: 'Automotive',
      hasSubCategories: true,
      subCategories: [
        {
          id: 901,
          name: 'Car Accessories',
          parentCategoryId: 9,
          hasSubCategories: false,
        },
        {
          id: 902,
          name: 'Motorcycle Gear',
          parentCategoryId: 9,
          hasSubCategories: false,
        },
        {
          id: 903,
          name: 'Tools',
          parentCategoryId: 9,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 10,
      name: 'Groceries',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1001,
          name: 'Fruits & Vegetables',
          parentCategoryId: 10,
          hasSubCategories: false,
        },
        {
          id: 1002,
          name: 'Dairy',
          parentCategoryId: 10,
          hasSubCategories: false,
        },
        {
          id: 1003,
          name: 'Snacks',
          parentCategoryId: 10,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 11,
      name: 'Health & Wellness',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1101,
          name: 'Supplements',
          parentCategoryId: 11,
          hasSubCategories: false,
        },
        {
          id: 1102,
          name: 'Medical Equipment',
          parentCategoryId: 11,
          hasSubCategories: false,
        },
        {
          id: 1103,
          name: 'Personal Care',
          parentCategoryId: 11,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 12,
      name: 'Music',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1201,
          name: 'Instruments',
          parentCategoryId: 12,
          hasSubCategories: false,
        },
        {
          id: 1202,
          name: 'Accessories',
          parentCategoryId: 12,
          hasSubCategories: false,
        },
        {
          id: 1203,
          name: 'Sheet Music',
          parentCategoryId: 12,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 13,
      name: 'Travel',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1301,
          name: 'Luggage',
          parentCategoryId: 13,
          hasSubCategories: false,
        },
        {
          id: 1302,
          name: 'Travel Accessories',
          parentCategoryId: 13,
          hasSubCategories: false,
        },
        {
          id: 1303,
          name: 'Camping Gear',
          parentCategoryId: 13,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 14,
      name: 'Pet Supplies',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1401,
          name: 'Food',
          parentCategoryId: 14,
          hasSubCategories: false,
        },
        {
          id: 1402,
          name: 'Toys',
          parentCategoryId: 14,
          hasSubCategories: false,
        },
        {
          id: 1403,
          name: 'Grooming',
          parentCategoryId: 14,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 15,
      name: 'Gardening',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1501,
          name: 'Plants',
          parentCategoryId: 15,
          hasSubCategories: false,
        },
        {
          id: 1502,
          name: 'Tools',
          parentCategoryId: 15,
          hasSubCategories: false,
        },
        {
          id: 1503,
          name: 'Outdoor Furniture',
          parentCategoryId: 15,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 16,
      name: 'Baby Products',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1601,
          name: 'Diapers',
          parentCategoryId: 16,
          hasSubCategories: false,
        },
        {
          id: 1602,
          name: 'Toys',
          parentCategoryId: 16,
          hasSubCategories: false,
        },
        {
          id: 1603,
          name: 'Feeding',
          parentCategoryId: 16,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 17,
      name: 'Office Supplies',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1701,
          name: 'Stationery',
          parentCategoryId: 17,
          hasSubCategories: false,
        },
        {
          id: 1702,
          name: 'Furniture',
          parentCategoryId: 17,
          hasSubCategories: false,
        },
        {
          id: 1703,
          name: 'Electronics',
          parentCategoryId: 17,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 18,
      name: 'Art & Crafts',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1801,
          name: 'Painting',
          parentCategoryId: 18,
          hasSubCategories: false,
        },
        {
          id: 1802,
          name: 'Sculpting',
          parentCategoryId: 18,
          hasSubCategories: false,
        },
        {
          id: 1803,
          name: 'Craft Supplies',
          parentCategoryId: 18,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 19,
      name: 'Technology',
      hasSubCategories: true,
      subCategories: [
        {
          id: 1901,
          name: 'Programming',
          parentCategoryId: 19,
          hasSubCategories: false,
        },
        {
          id: 1902,
          name: 'Networking',
          parentCategoryId: 19,
          hasSubCategories: false,
        },
        {
          id: 1903,
          name: 'AI & Machine Learning',
          parentCategoryId: 19,
          hasSubCategories: false,
        },
      ],
    },
    {
      id: 20,
      name: 'Ibrahim',
      hasSubCategories: true,
      subCategories: [
        {
          id: 2001,
          name: 'Programming',
          parentCategoryId: 20,
          hasSubCategories: false,
        },
        {
          id: 2002,
          name: 'Networking',
          parentCategoryId: 20,
          hasSubCategories: false,
        },
        {
          id: 2003,
          name: 'AI & Machine Learning',
          parentCategoryId: 20,
          hasSubCategories: false,
        },
      ],
    },
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 14',
      description: 'Latest Apple smartphone',
      price: 999,
      categoryId: 101,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Samsung smartphone',
      price: 899,
      categoryId: 101,
    },
    {
      id: 3,
      name: 'MacBook Pro',
      description: 'Powerful laptop from Apple',
      price: 1999,
      categoryId: 102,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      description: 'Compact and powerful laptop',
      price: 1199,
      categoryId: 102,
    },
    {
      id: 5,
      name: 'iPad Air',
      description: 'Lightweight Apple tablet',
      price: 599,
      categoryId: 103,
    },
    {
      id: 6,
      name: 'Samsung Tab S9',
      description: 'High-end Android tablet',
      price: 649,
      categoryId: 103,
    },
    {
      id: 7,
      name: 'LG Refrigerator',
      description: 'Energy-efficient refrigerator',
      price: 799,
      categoryId: 201,
    },
    {
      id: 8,
      name: 'Samsung Washing Machine',
      description: 'High-capacity washing machine',
      price: 699,
      categoryId: 202,
    },
    {
      id: 9,
      name: 'Panasonic Microwave',
      description: 'Compact and powerful microwave',
      price: 199,
      categoryId: 203,
    },
    {
      id: 10,
      name: "Men's Casual Shirt",
      description: "Stylish men's shirt",
      price: 29,
      categoryId: 301,
    },
    {
      id: 11,
      name: "Women's Dress",
      description: "Elegant women's dress",
      price: 59,
      categoryId: 302,
    },
    {
      id: 12,
      name: "Kids' T-shirt",
      description: 'Fun and colorful t-shirt for kids',
      price: 15,
      categoryId: 303,
    },
    {
      id: 13,
      name: 'Sofa Set',
      description: 'Comfortable living room sofa set',
      price: 999,
      categoryId: 401,
    },
    {
      id: 14,
      name: 'Queen Bed',
      description: 'Stylish and spacious bed',
      price: 799,
      categoryId: 402,
    },
    {
      id: 15,
      name: 'Office Chair',
      description: 'Ergonomic office chair',
      price: 199,
      categoryId: 403,
    },
    {
      id: 16,
      name: 'Fiction Book',
      description: 'Engaging fiction novel',
      price: 20,
      categoryId: 501,
    },
    {
      id: 17,
      name: 'Self-Help Book',
      description: 'Inspirational self-help book',
      price: 25,
      categoryId: 502,
    },
    {
      id: 18,
      name: 'Math Textbook',
      description: 'Comprehensive math textbook',
      price: 40,
      categoryId: 503,
    },
    {
      id: 19,
      name: 'Face Cream',
      description: 'Moisturizing face cream',
      price: 15,
      categoryId: 601,
    },
    {
      id: 20,
      name: 'Shampoo',
      description: 'Hair nourishing shampoo',
      price: 10,
      categoryId: 602,
    },
    {
      id: 21,
      name: 'Lipstick',
      description: 'Long-lasting lipstick',
      price: 8,
      categoryId: 603,
    },
    {
      id: 22,
      name: 'Lego Set',
      description: 'Creative building blocks for kids',
      price: 50,
      categoryId: 701,
    },
    {
      id: 23,
      name: 'Outdoor Swing',
      description: 'Fun outdoor swing',
      price: 120,
      categoryId: 702,
    },
    {
      id: 24,
      name: 'Chess Board',
      description: 'Classic chess set',
      price: 25,
      categoryId: 703,
    },
    {
      id: 25,
      name: 'Treadmill',
      description: 'Advanced treadmill for home gym',
      price: 899,
      categoryId: 801,
    },
    {
      id: 26,
      name: 'Camping Tent',
      description: 'Durable and spacious tent',
      price: 150,
      categoryId: 802,
    },
    {
      id: 27,
      name: 'Running Shoes',
      description: 'Comfortable athletic shoes',
      price: 70,
      categoryId: 803,
    },
    {
      id: 28,
      name: 'Car Cover',
      description: 'Protective car cover',
      price: 50,
      categoryId: 901,
    },
    {
      id: 29,
      name: 'Motorcycle Helmet',
      description: 'Safety helmet for bikers',
      price: 80,
      categoryId: 902,
    },
    {
      id: 30,
      name: 'Tool Kit',
      description: 'Comprehensive tool kit',
      price: 100,
      categoryId: 903,
    },
    {
      id: 31,
      name: 'Bananas',
      description: 'Fresh organic bananas',
      price: 2,
      categoryId: 1001,
    },
    {
      id: 32,
      name: 'Milk',
      description: 'Low-fat dairy milk',
      price: 3,
      categoryId: 1002,
    },
    {
      id: 33,
      name: 'Chips',
      description: 'Crunchy potato chips',
      price: 1.5,
      categoryId: 1003,
    },
    {
      id: 34,
      name: 'Multivitamins',
      description: 'Daily multivitamin supplement',
      price: 20,
      categoryId: 1101,
    },
    {
      id: 35,
      name: 'Blood Pressure Monitor',
      description: 'Portable blood pressure monitor',
      price: 50,
      categoryId: 1102,
    },
    {
      id: 36,
      name: 'Electric Toothbrush',
      description: 'Rechargeable toothbrush',
      price: 25,
      categoryId: 1103,
    },
    {
      id: 37,
      name: 'Guitar',
      description: 'Acoustic guitar for beginners',
      price: 120,
      categoryId: 1201,
    },
    {
      id: 38,
      name: 'Guitar Picks',
      description: 'Set of colorful picks',
      price: 5,
      categoryId: 1202,
    },
    {
      id: 39,
      name: 'Piano Sheet Music',
      description: 'Classic piano compositions',
      price: 15,
      categoryId: 1203,
    },
    {
      id: 40,
      name: 'Backpack',
      description: 'Durable travel backpack',
      price: 40,
      categoryId: 1301,
    },
    {
      id: 41,
      name: 'Travel Pillow',
      description: 'Comfortable neck pillow',
      price: 15,
      categoryId: 1302,
    },
    {
      id: 42,
      name: 'Sleeping Bag',
      description: 'Warm sleeping bag for camping',
      price: 60,
      categoryId: 1303,
    },
    {
      id: 43,
      name: 'Dog Food',
      description: 'Nutritious dog food',
      price: 25,
      categoryId: 1401,
    },
    {
      id: 44,
      name: 'Cat Toy',
      description: 'Interactive toy for cats',
      price: 10,
      categoryId: 1402,
    },
    {
      id: 45,
      name: 'Pet Shampoo',
      description: 'Gentle pet shampoo',
      price: 12,
      categoryId: 1403,
    },
    {
      id: 46,
      name: 'Rose Plant',
      description: 'Potted rose plant',
      price: 15,
      categoryId: 1501,
    },
    {
      id: 47,
      name: 'Gardening Gloves',
      description: 'Protective gloves for gardening',
      price: 8,
      categoryId: 1502,
    },
    {
      id: 48,
      name: 'Patio Chair',
      description: 'Comfortable outdoor chair',
      price: 50,
      categoryId: 1503,
    },
    {
      id: 49,
      name: 'Baby Diapers',
      description: 'Soft and absorbent diapers',
      price: 25,
      categoryId: 1601,
    },
    {
      id: 50,
      name: 'Baby Rattle',
      description: 'Colorful baby rattle',
      price: 7,
      categoryId: 1602,
    },
    {
      id: 51,
      name: 'Stroller',
      description: 'Lightweight baby stroller',
      price: 120,
      categoryId: 1603,
    },
    {
      id: 52,
      name: 'Fire Extinguisher',
      description: 'Portable fire extinguisher',
      price: 40,
      categoryId: 1701,
    },
    {
      id: 53,
      name: 'First Aid Kit',
      description: 'Comprehensive first aid kit',
      price: 25,
      categoryId: 1702,
    },
    {
      id: 54,
      name: 'Emergency Blanket',
      description: 'Compact emergency blanket',
      price: 10,
      categoryId: 1703,
    },
    {
      id: 55,
      name: 'Flashlight',
      description: 'Rechargeable flashlight',
      price: 15,
      categoryId: 1801,
    },
    {
      id: 56,
      name: 'Batteries',
      description: 'Pack of rechargeable batteries',
      price: 8,
      categoryId: 1802,
    },
    {
      id: 57,
      name: 'Solar Charger',
      description: 'Portable solar power bank',
      price: 35,
      categoryId: 1803,
    },
    {
      id: 58,
      name: 'Cooking Pot',
      description: 'Large cooking pot',
      price: 30,
      categoryId: 1901,
    },
    {
      id: 59,
      name: 'Knife Set',
      description: 'High-quality kitchen knives',
      price: 40,
      categoryId: 1902,
    },
    {
      id: 60,
      name: 'Blender',
      description: 'Smoothie and food blender',
      price: 60,
      categoryId: 1903,
    },
    {
      id: 61,
      name: 'Tent',
      description: '2-person camping tent',
      price: 100,
      categoryId: 2001,
    },
    {
      id: 62,
      name: 'Sleeping Mat',
      description: 'Comfortable sleeping mat',
      price: 25,
      categoryId: 2002,
    },
    {
      id: 63,
      name: 'Camping Stove',
      description: 'Portable stove for camping',
      price: 50,
      categoryId: 2003,
    },
    {
      id: 64,
      name: 'Chainsaw',
      description: 'Heavy-duty chainsaw',
      price: 150,
      categoryId: 2101,
    },
    {
      id: 65,
      name: 'Garden Sprayer',
      description: 'Sprayer for gardening use',
      price: 20,
      categoryId: 2102,
    },
    {
      id: 66,
      name: 'Hedge Trimmer',
      description: 'Electric hedge trimmer',
      price: 70,
      categoryId: 2103,
    },
    {
      id: 67,
      name: 'Drill Set',
      description: 'Complete drill set',
      price: 80,
      categoryId: 2201,
    },
    {
      id: 68,
      name: 'Hammer',
      description: 'Durable hammer for construction',
      price: 15,
      categoryId: 2202,
    },
    {
      id: 69,
      name: 'Screwdriver Set',
      description: 'Precision screwdriver set',
      price: 25,
      categoryId: 2203,
    },
    {
      id: 70,
      name: 'Laptop Case',
      description: 'Protective laptop case',
      price: 25,
      categoryId: 2301,
    },
    {
      id: 71,
      name: 'Phone Case',
      description: 'Stylish phone case',
      price: 10,
      categoryId: 2302,
    },
    {
      id: 72,
      name: 'Tablet Stand',
      description: 'Adjustable tablet stand',
      price: 20,
      categoryId: 2303,
    },
    {
      id: 73,
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker',
      price: 50,
      categoryId: 2401,
    },
    {
      id: 74,
      name: 'Headphones',
      description: 'Noise-canceling headphones',
      price: 100,
      categoryId: 2402,
    },
    {
      id: 75,
      name: 'Smartwatch',
      description: 'Fitness tracking smartwatch',
      price: 80,
      categoryId: 2403,
    },
    {
      id: 76,
      name: 'Camera Tripod',
      description: 'Adjustable tripod for cameras',
      price: 25,
      categoryId: 2501,
    },
    {
      id: 77,
      name: 'Drone',
      description: '4K camera drone',
      price: 200,
      categoryId: 2502,
    },
    {
      id: 78,
      name: 'Portable Charger',
      description: 'Compact power bank',
      price: 30,
      categoryId: 2503,
    },
    {
      id: 79,
      name: 'Camera Lens',
      description: 'Wide-angle camera lens',
      price: 120,
      categoryId: 2601,
    },
    {
      id: 80,
      name: 'Photo Album',
      description: 'Leather photo album',
      price: 20,
      categoryId: 2602,
    },
    {
      id: 81,
      name: 'Printer',
      description: 'High-quality color printer',
      price: 90,
      categoryId: 2701,
    },
    {
      id: 82,
      name: 'Laptop',
      description: 'Powerful gaming laptop',
      price: 1500,
      categoryId: 2702,
    },
    {
      id: 83,
      name: 'Mouse',
      description: 'Wireless mouse',
      price: 20,
      categoryId: 2703,
    },
    {
      id: 84,
      name: 'Electric Fan',
      description: 'Oscillating electric fan',
      price: 25,
      categoryId: 2801,
    },
    {
      id: 85,
      name: 'Air Conditioner',
      description: 'Portable air conditioner',
      price: 250,
      categoryId: 2802,
    },
    {
      id: 86,
      name: 'Heater',
      description: 'Portable room heater',
      price: 60,
      categoryId: 2803,
    },
    {
      id: 87,
      name: 'Washing Machine',
      description: 'Energy-efficient washing machine',
      price: 300,
      categoryId: 2901,
    },
    {
      id: 88,
      name: 'Dishwasher',
      description: 'Automatic dishwasher',
      price: 400,
      categoryId: 2902,
    },
    {
      id: 89,
      name: 'Dryer',
      description: 'Clothes dryer machine',
      price: 350,
      categoryId: 2903,
    },
    {
      id: 90,
      name: 'Refrigerator',
      description: 'Side-by-side refrigerator',
      price: 600,
      categoryId: 3001,
    },
    {
      id: 91,
      name: 'Freezer',
      description: 'Compact freezer',
      price: 250,
      categoryId: 3002,
    },
    {
      id: 92,
      name: 'Smart Refrigerator',
      description: 'Refrigerator with Wi-Fi connectivity',
      price: 700,
      categoryId: 3003,
    },
    {
      id: 93,
      name: 'Electric Stove',
      description: 'Modern electric stove',
      price: 120,
      categoryId: 3101,
    },
    {
      id: 94,
      name: 'Gas Stove',
      description: 'Efficient gas stove',
      price: 80,
      categoryId: 3102,
    },
    {
      id: 95,
      name: 'Induction Cooker',
      description: 'Portable induction cooker',
      price: 60,
      categoryId: 3103,
    },
    {
      id: 96,
      name: 'Microwave Oven',
      description: 'Compact microwave oven',
      price: 90,
      categoryId: 3201,
    },
    {
      id: 97,
      name: 'Toaster',
      description: '2-slice toaster',
      price: 30,
      categoryId: 3202,
    },
    {
      id: 98,
      name: 'Coffee Maker',
      description: 'Automatic coffee maker',
      price: 70,
      categoryId: 3203,
    },
    {
      id: 99,
      name: 'Air Fryer',
      description: 'Healthy air fryer',
      price: 80,
      categoryId: 3301,
    },
    {
      id: 100,
      name: 'Pressure Cooker',
      description: 'Multi-function pressure cooker',
      price: 90,
      categoryId: 3302,
    },
  ];

  // جلب الأقسام الرئيسية
  getMainCategories(): Observable<any[]> {
    const mainCategories = this.categories.filter(
      (category) => category.hasSubCategories // الأقسام التي لها أقسام فرعية تعد رئيسية
    );
    return of(mainCategories);
  }

  getSubCategories(): Observable<any[]> {
    const subCategories = this.categories
      .filter((category) => category.hasSubCategories)
      .flatMap((category) => category.subCategories || []);
    return of(subCategories);
  }

  // دالة لجلب القسم بناءً على ID
  getCategoryById(id: number): any {
    return this.findCategoryById(this.categories, id);
  }

  // دالة مساعدة للبحث في الأقسام المتداخلة
  findCategoryById(categories: any[], id: number): any {
    for (let category of categories) {
      if (category.id === id) {
        return category;
      }
      if (category.subCategories && category.subCategories.length > 0) {
        const subCategory = this.findCategoryById(category.subCategories, id);
        console.log(subCategory);
        if (subCategory) {
          return subCategory;
        }
      }
    }
    return null;
  }
  // OR

  // جلب المنتجات بناءً على ID الكتالوج
  getProductsByCategoryId(catalogId: number): Product[] {
    return this.products.filter((product) => product.categoryId === catalogId);
  }
}
