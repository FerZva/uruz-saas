interface Navigation {
  name: string;
  href: string;
}

export const navigation: Navigation[] = [
  { name: "Our Services", href: "#" },
  { name: "Our Clients", href: "#" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "About Us", href: "/about-us" },
];

export const categories = [
  { id: 1, category: "Sales" },
  { id: 2, category: "Finances" },
  { id: 3, category: "Medicine" },
  { id: 4, category: "Human Resources" },
  { id: 5, category: "E-commerce" },
  { id: 6, category: "Management" },
  { id: 7, category: "Logistic" },
];

export const products = [
  {
    id: 1,
    name: "Salesforce",
    category: "Sales",
    description: "The best CRM tool",
    price: 100,
  },
  {
    id: 2,
    name: "Quickbooks",
    category: "Finances",
    description: "The best accounting tool",
    price: 200,
  },
  {
    id: 3,
    name: "MediSoft",
    category: "Medicine",
    description: "The best medical tool",
    price: 300,
  },
  {
    id: 4,
    name: "Workday",
    category: "Human Resources",
    description: "The best HR tool",
    price: 400,
  },
  {
    id: 5,
    name: "Shopify",
    category: "E-commerce",
    description: "The best e-commerce tool",
    price: 500,
  },
  {
    id: 6,
    name: "Asana",
    category: "Management",
    description: "The best management tool",
    price: 600,
  },
  {
    id: 7,
    name: "FedEx",
    category: "Logistic",
    description: "The best logistic tool",
    price: 700,
  },
];
