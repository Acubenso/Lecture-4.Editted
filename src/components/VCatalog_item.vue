<template>
  <div class="v-catalog__item">
    <img v-bind:src=" require('../assets/images/' + product_data.image) " alt="img">
    <p class="v-catalog-item_name">{{ product_data.name }}</p>
    <p class="v-catalog-item_price">Price: {{ product_data.price }}</p>
    <button
      class="v-catalog-item_add_to_cart_btn btn"
      @click="addToCart"
      >Купити
    </button>
  </div>	
</template>

<script>
  export default {
    name: 'VCatalog_item',
    props: {
      product_data: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    }
  }
</script>

<style lang='scss'>
  .v-catalog__item {
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
</style>
