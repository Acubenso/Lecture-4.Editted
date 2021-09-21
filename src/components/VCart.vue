 <template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Назад в каталог</div>
    </router-link>
    <h1>Кошик</h1>
    <p v-if="!cart_data.length">Кошик пустий...</p>
    <VCart_item 
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>	
</template>

<script>
import VCart_item from './VCart_item'
import {mapActions} from 'vuex'

  export default {
    name: 'VCart',
    components: {
      VCart_item
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style>
  v-cart {
  }	
</style>