import crab1 from "./Crab/Crab Phyllo Cups.jpeg"
import crab2 from "./Crab/Crab Rangoon.jpeg"
import crab3 from "./Crab/Crab Sushi Rolls.jpeg"
import crab4 from "./Crab/Crab Tostadas.jpeg"
import crab5 from "./Crab/Crab_Bisque.jpeg"
import crab6 from "./Crab/Crab_Cakes.jpeg"
import crab7 from "./Crab/Crab_Linguine.jpeg"
import crab8 from "./Crab/Crab_Stuffed_Mushrooms.jpeg"
import crab9 from "./Crab/Garlic_Butter_Crab_Legs.jpeg"
import crab10 from "./Crab/Singapore_Chilli_Crab.jpeg"
import fish1 from "./Fish/Ceviche.jpeg"
import fish2 from "./Fish/Crispy Barramundi with Fish Sauce Vinaigrette.jpeg"
import fish3 from "./Fish/Fish Tacos.jpeg"
import fish4 from "./Fish/Grilled Salmon with Lemon and Dill.jpeg"
import fish5 from "./Fish/Grilled Salmon.jpeg"
import fish6 from "./Fish/Grilled Spanish Scallops.jpeg"
import fish7 from "./Fish/Miso Glazed Black Cod.jpeg"
import fish8 from "./Fish/Pan-Seared Swordfish.jpeg"
import fish9 from "./Fish/Spanish Mackerel Fry.jpeg"
import fish10 from "./Fish/Spicy Baked Fish Fry.jpeg"
import Shrimp1 from "./Shrimp/Bang Bang Shrimp.jpeg"
import Shrimp2 from "./Shrimp/Coconut Curry Shrimp.jpeg"
import Shrimp3 from "./Shrimp/Garlic Butter Shrimp.jpeg"
import Shrimp4 from "./Shrimp/Prawn Curry.jpeg"
import Shrimp5 from "./Shrimp/Prawn Risotto.jpeg"
import Shrimp6 from "./Shrimp/Prawn Tacos.jpeg"
import Shrimp7 from "./Shrimp/Prawn and Chorizo Paella.jpeg"
import Shrimp8 from "./Shrimp/Shrimp Pad Thai.jpeg"
import Shrimp9 from "./Shrimp/Shrimp Scampi.jpeg"
import Shrimp10 from "./Shrimp/Tequila Lime Shrimp.jpeg"


let all_recipies = [
    {
      id: 1,
      name: "Crab Phyllo Cups",
      category: "crab",
      image: crab1,
      new_price: 50.0,
      old_price: 80.5,
    },
    {
        id: 2,
        name: "Crab Rangoon",
        category: "crab",
        image: crab2,
        new_price: 85.0,
        old_price: 120.5,
      },
      {
        id: 3,
        name: "Crab Sushi Rolls",
        category: "crab",
        image: crab3,
        new_price: 60.0,
        old_price: 100.5,
      },
      {
        id: 4,
        name: "Crab Tostadas",
        category: "crab",
        image: crab4,
        new_price: 100.0,
        old_price: 150.0,
      },
      {
        id: 5,
        name: "Crab_Bisque",
        category: "crab",
        image: crab5,
        new_price: 85.0,
        old_price: 120.5,
      },
      {
        id: 6,
        name: "Crab_Cakes",
        category: "crab",
        image: crab6,
        new_price: 95.0,
        old_price: 180.5,
      },
      {
        id: 7,
        name: "Crab_Linguine",
        category: "crab",
        image: crab7,
        new_price: 65.0,
        old_price: 140.5,
      },
      {
        id: 8,
        name: "Crab_Stuffed_Mushrooms",
        category: "crab",
        image: crab8,
        new_price: 105.0,
        old_price: 125.5,
      },
      {
        id: 9,
        name: "Garlic_Butter_Crab_Legs",
        category: "crab",
        image: crab9,
        new_price: 90.0,
        old_price: 130.5,
      },
      {
        id: 10,
        name: "Singapore_Chilli_Crab",
        category: "crab",
        image: crab10,
        new_price: 125,
        old_price: 180.5,
      },
      {
        id: 11,
        name: "Ceviche",
        category: "fish",
        image: fish1,
        new_price: 185.0,
        old_price: 320.5,
      },
      {
        id: 12,
        name: "Crispy Barramundi",
        category: "fish",
        image: fish2,
        new_price: 85.0,
        old_price: 120.5,
      },
      {
        id: 13,
        name: "Fish Tacos",
        category: "fish",
        image: fish3,
        new_price: 100.0,
        old_price: 120.5,
      },
      {
        id: 14,
        name: "Salmon with Lemon and Dill",
        category: "fish",
        image: fish4,
        new_price: 105.0,
        old_price: 155.5,
      },
      {
        id: 15,
        name: "Grilled Salmon",
        category: "fish",
        image: fish5,
        new_price: 65.0,
        old_price: 110.5,
      },
      {
        id: 16,
        name: "Grilled Spanish Scallops",
        category: "fish",
        image: fish6,
        new_price: 85.0,
        old_price: 100.5,
      },
      {
        id: 17,
        name: "Miso Glazed Black Cod",
        category: "fish",
        image: fish7,
        new_price: 55.0,
        old_price: 95.5,
      },
      {
        id: 18,
        name: "Pan-Seared Swordfish",
        category: "fish",
        image: fish8,
        new_price: 125.0,
        old_price: 185.5,
      },
      {
        id: 19,
        name: "Spanish Mackerel Fry",
        category: "fish",
        image: fish9,
        new_price: 85.0,
        old_price: 120.5,
      },
      {
        id: 20,
        name: "Spicy Baked Fish Fry",
        category: "fish",
        image: fish10,
        new_price: 75.0,
        old_price: 150.5,
      },
      {
        id: 21,
        name: "Bang Bang Shrimp",
        category: "Shrimp",
        image: Shrimp1,
        new_price: 85.0,
        old_price: 140.5,
      },
      {
        id: 22,
        name: "Coconut Curry Shrimp",
        category: "Shrimp",
        image: Shrimp2,
        new_price: 115.0,
        old_price: 120.5,
      },
      {
        id: 23,
        name: "Garlic Butter Shrimp",
        category: "Shrimp",
        image: Shrimp3,
        new_price: 85.0,
        old_price: 140.5,
      },
      {
        id: 24,
        name: "Prawn and Chorizo Paella",
        category: "Shrimp",
        image: Shrimp4,
        new_price: 185.0,
        old_price: 220.5,
      },
      {
        id: 25,
        name: "Prawn Curry",
        category: "Shrimp",
        image: Shrimp5,
        new_price: 45.0,
        old_price: 65.5,
      },
      {
        id: 26,
        name: "Prawn Risotto",
        category: "Shrimp",
        image: Shrimp6,
        new_price: 80.0,
        old_price: 130.5,
      },
      {
        id: 27,
        name: "Prawn Tacos",
        category: "Shrimp",
        image: Shrimp7,
        new_price: 65.0,
        old_price: 119.5,
      },
      {
        id: 28,
        name: "Shrimp Pad Thai",
        category: "Shrimp",
        image: Shrimp8,
        new_price: 112.0,
        old_price: 128.5,
      },
      {
        id: 29,
        name: "Shrimp Scampi",
        category: "Shrimp",
        image: Shrimp9,
        new_price: 116.0,
        old_price: 130.5,
      },
      {
        id: 30,
        name: "Tequila Lime Shrimp",
        category: "Shrimp",
        image: Shrimp10,
        new_price: 82.0,
        old_price: 123.5,
      }
];


export default all_recipies;