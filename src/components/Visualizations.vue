<template>
  <div class="">
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4>
        <div class="headline pb-3">{{ msg }}</div>
        <transition-group name="list-complete" tag="p">
          <span
            v-for="item in items"
            v-bind:key="item"
            class="list-complete-item"
          >
            {{ item }}
          </span>
        </transition-group>
        <v-btn class="primary" v-on:click="shuffle">Shuffle</v-btn>
        <v-btn class="primary" v-on:click="order">Order</v-btn>
        <v-btn class="secondary" v-on:click="add">Add</v-btn>
        <v-btn class="accent" v-on:click="remove">Remove</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <v-card-title><h4>Array Summarizing</h4></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Min:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ min }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Max:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ max }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Sum:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ sum }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Selected:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ currentValue }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <area-chart @select="onSelect" class="area-chart" :data="items" :ceil="30"></area-chart>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import areaChart from './areaChart';

export default {
  name: "visualizations",
  components: {
    areaChart
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      currentValue: null
    };
  },
  props: {
    msg: String
  },
  computed: {
    min() {
      return this.$d3.min(this.items);
    },
    max() {
      return this.$d3.max(this.items);
    },
    sum() {
      return this.$d3.sum(this.items);
    }
  },
  methods: {
    onSelect(value) {
      this.currentValue = value;
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.items = this.$lodash.shuffle(this.items);
    },
    order: function() {
      this.items = this.items.sort((a, b) => a - b);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.area-chart {
  height: 100px
}
</style>
