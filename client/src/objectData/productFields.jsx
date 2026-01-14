export const productFields = [
  {
    id: "name",
    label: "Product Name",
    type: "text",
    placeholder: "Enter product name",
  },
  {
    id: "seoUrlName",
    label: "SEO URL Name",
    type: "text",
    placeholder: "Enter SEO friendly URL",
  },

  
  {
    id: "unit",
    label: "Unit",
    type: "select",
    options: ["liter", "kg", "gram", "packet", "bag"],
    multiple: true,
  },
  {
    id: "category",
    label: "Category",
    type: "text",
    placeholder: "Enter category",
  },
  {
    id: "subCategory",
    label: "Sub Category",
    type: "text",

    placeholder: "Enter sub-category",
  },
  {
    id: "brand",
    label: "Brand",
    type: "text",
    placeholder: "Enter brand name",
  },
  {
    id: "price",
    label: "Price",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    id: "discountPrice",
    label: "Discount Price",
    type: "number",
    placeholder: "Enter discount price",
  },
  {
    id: "stock",
    label: "Stock",
    type: "number",
    placeholder: "Enter stock quantity",
  },
  
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter product description",
  },
  {
    id: "images",
    label: "Upload products images",
    type: "file",
    multiple: true,
  },
  {
    id: "isOrganic",
    label: "Check this box if the product is organic.",
    type: "checkbox",

  },
  {
    id: "isActive",
    label: "Check this box if the product should be visible and available for sale.",
    type: "checkbox",

  },
];
