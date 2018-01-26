export const EDIT_PRODUCT = 'edit_product'
export const FETCH_PRODUCTS = 'fetech_products'

export function editProduct(id, product) {
  return {
    type: EDIT_PRODUCT,
    payload: { id: id, product: product }
  }
}

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
    payload: {}
  }
}
