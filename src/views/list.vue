<template>
    <div class="list" v-show="list.length">
        <div class="list-control">
            <div class="list-control-filter">
                <span>品牌：</span>
                <span class="list-control-filter-item" :class="{on: item === filterBrand}" v-for="item in brands" @click="handleFilterBrand(item)">{{ item }}</span>
            </div>
            <div class="list-control-filter">
                <span>颜色：</span>
                <span
                    class="list-control-filter-item"
                    :class="{on: item === filterColor}"
                    v-for="(item,index) in colors"
                    @click="handleFilterColor(item)">{{ item }}</span>
            </div>
            <div class="list-control-order">
                <span>排序：</span>
                <span
                    class="list-control-order-item"
                    :class="{on: order === ''}"
                    @click="handleOrderDefault">默认</span>
                <span
                    class="list-control-order-item"
                    :class="{on: order === 'sales'}"
                    @click="handleOrderSales">
                    销量
                    <template v-if="order === 'sales'">↓</template>
                </span>
                <span
                    class="list-control-order-item"
                    :class="{on: order.indexOf('cost') > -1}"
                    @click="handleOrderCost">
                    价格
                    <template v-if="order === 'cost-asc'">↑</template>
                    <template v-if="order === 'cost-desc'">↓</template>
                </span>
            </div>
        </div>
        <product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></product>
        <div class="product-not-found" v-show="!filteredAndOrderedList.length">暂无相关商品</div>
    </div>
</template>
<script>
import product from "@/components/product.vue";
export default {
  components: { product },
  data() {
    return {
      filterBrand: "",
      filterColor: "",
      // sales 销量 cost-desc 价格降序 cost-asc价格升序
      order: ""
    };
  },
  computed: {
    list() {
      return this.$store.state.productList;
    },
    brands() {
      return this.$store.getters.brands;
    },
    colors() {
      return this.$store.getters.colors;
    },
    filteredAndOrderedList() {
      let list = [...this.list];
      // 按品牌过滤
      if (this.filterBrand !== "") {
        list = list.filter(item => item.brand === this.filterBrand);
      }
      // 按颜色过滤
      if (this.filterColor !== "") {
        list = list.filter(item => item.color === this.filterColor);
      }
      // 排序
      if (this.order !== "") {
        if (this.order === "sales") {
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this.order === "cost-desc") {
          list = list.sort((a, b) => b.cost - a.cost);
        } else if (this.order === "cost-asc") {
          list = list.sort((a, b) => a.sales - b.sales);
        }
      }
      return list;
    }
  },
  mounted() {
    this.$store.dispatch("getProductList");
  }
};
</script>
<style scoped>
.product-not-found {
  text-align: center;
  padding: 32px;
}
</style>
