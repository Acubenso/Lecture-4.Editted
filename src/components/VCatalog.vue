<template>
  <div class="v-catalog">
    <router-link >

    </router-link>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Кошик: {{CART.length}}</div>
    </router-link>

    <h1>Каталог рекуператорів</h1>
    <div class="vCatalog__list">
      <VCatalog_item 
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>	
</template>

<script>
import VLogin from './VLogin'
import VCatalog_item from './VCatalog_item'
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'VCatalog',
    props: {},
    data() {
      return {
        
      }
    },
    components: {
      VCatalog_item
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if(response.data) {
        console.log('Data arrived!') 
      }
      })
    }
  }
</script>

<style>
.v-catalog__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;    
}
.v-catalog__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: 1px solid #aeaeae;
}

.vCatalog__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>