import products from '../seeders/products'

const state = () => ({
  products,
});

const actions = {}

const mutations = {}

const getters = {
  getProducts: (state) => state.products,
  getProduct: (state) => (alias) => state.products.find(el => el.alias === alias)
}


export default {
  state,
  actions,
  mutations,
  getters
}
