<script setup>
import { reactive, ref } from 'vue';

const userName=ref("yasaman")
const user=reactive({
  firstName:"yasaman",
  lastName:"alizadeh",

})
const colorController=ref(true)
const styleButton=reactive({
  background1:"bg-red-500",
  background2:"bg-green-500"
})

const checkbox=ref()

const users=reactive([
{id:1,name:"naser"},
{id:2,name:"zahra"},
{id:3,name:"hesam"},
])

const count=ref(0)

function increase(num){
  count.value+=num
}
function decrease(num){
  count.value-=num
}

</script>

<template>
  <div class="flex flex-col font-extralight p-3 ml-4 text-gray-700">
   <div>{{ userName }} was born in  {{ 2026-22 }} </div> 
    <div>{{ user.firstName}}</div>
   <div> {{ user.lastName  }}</div>
  </div>

  <button class="rounded-2xl p-3 transition-colors ml-[1%] text-white"
   v-bind:class="colorController ? styleButton.background1 :styleButton.background2 "
  @click="colorController=!colorController"
  >click me</button>

  <div class="flex gap-4 ml-4 mt-4">
  <input class="mt-1"  type="checkbox" v-model="checkbox">
  <div>is active?</div>
  <div v-bind:class="checkbox?'text-green-500':'text-red-500'">{{ checkbox?"active":"inactive" }}</div>
  </div>

<ul class="my-3">
  <hr>
  <li v-for="user in users" :key="user.id">
    <div v-for="(value, key) in user" :key="key">
      {{ key }} : {{ value }}
    </div>
    <hr>
  </li>
</ul>

<button class="bg-green-700 text-white rounded-full p-1 w-8 h-8 mx-3" @click="increase(1)">+</button>
<button class="bg-red-700 text-white rounded-full p-1 w-8 h-8 mx-4" @click="decrease(1)">-</button>
<p class="ml-13 font-serif text-gray-700">{{ count }}</p>

</template>