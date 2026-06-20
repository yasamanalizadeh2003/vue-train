


<!-- <script setup>
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

</template> -->

<!-- <script setup>
import { reactive, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const users = reactive([])

const name = ref('')
const email = ref('')

function addUser() {
  users.push({
    id: uuidv4(),
    fullName: name.value,
    email: email.value,
  })

  name.value = ''
  email.value = ''
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id)
  users.splice(index, 1)
}
</script>

<template>
  <div class="flex justify-center">
    <div class="bg-gray-50 flex flex-col w-98 h-min mt-32 rounded-2xl shadow-lg shadow-gray-200">
      <h1 class="text-gray-700 text-4xl p-4 self-center mt-7">User Form</h1>
      <form @submit.prevent="addUser">
       
        <div class="flex flex-col mx-4 gap-1">
          <label for="name" class="font-bold">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            v-model="name"
            class="bg-white border-2 border-gray-200 rounded-sm p-1 outline-0 hover:border-gray-300 focus:border-gray-400 transition"
          />
        </div>
      
        <div class="flex flex-col mx-4 gap-1 mt-5">
          <label for="email" class="font-bold">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            v-model="email"
            class="bg-white border-2 border-gray-200 rounded-sm p-1 outline-0 hover:border-gray-300 focus:border-gray-400 transition"
          />
        </div>
     
        <p v-if="name.length == 0 || email.length == 0" class="text-gray-500 ml-4 mt-3">
          please fill in both fields
        </p>
        <button
          type="submit"
          v-else
          class="bg-green-700 text-white h-8 w-18 rounded-xl ml-4 mt-3 hover:bg-green-800 transition"
        >
          save
        </button>
      </form>

     
      <h1 class="text-gray-700 text-3xl p-4 self-center mt-3">User list</h1>
      <p class="text-gray-600 ml-3 mb-2" v-if="users.length == 0">there is no user yet.</p>
      <ul>
        <li v-for="user in users" :key="user.id" class="flex justify-between py-5 px-7">
          <div class="text-gray-600">{{ user.fullName }} - {{ user.email }}</div>
          <button
            @click="deleteUser(user.id)"
            class="bg-red-500 text-white rounded-sm px-2 py-1 hover:bg-red-600 transition"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template> -->

<!-- <script setup>
import { computed, reactive ,watch, watchEffect} from 'vue'

const numbers = reactive([1, 2, 3, 4, 5, 6, 7, 8])

const sumEvenNumbers = computed(() => {
  let sum = 0
  numbers.forEach((n) => {
    if (n % 2 == 0) {
      sum = sum + n
    }
  })
  return sum
})

watch(numbers,(oldValue,newValue)=>{
  console.log(`array is ${newValue}`)
})
watchEffect(()=>{
    console.log(`array is ${numbers}`)
})
</script>

<template>
  <h1>Numbers:{{ numbers }}</h1>
  <h1>sum is {{ sumEvenNumbers }}</h1>
  <button @click="numbers.push(numbers.length + 1)">click to add number</button>
</template> -->

<!-- <script setup>
import useCounter from './usecounter'

const { count, increase, decrease } = useCounter()
</script>

<template>
 
  <button class="bg-green-600 shadow-sm shadow-green-800 text-white hover:bg-green-700 transition p-2 rounded-2xl mx-3 mt-2" @click="increase">increase</button>
  <button class="bg-red-600 shadow-sm shadow-red-800 text-white hover:bg-red-700 transition p-2 rounded-2xl mx-3 mt-2" @click="decrease">decrease</button>
   <p class="font-serif my-3 ml-19 text-gray-800 bg-gray-50 w-10 text-center rounded-2xl p-2">{{ count }}</p>
</template> -->

<!-- <template>
<ParentComponent/>
</template>

<script setup>
import ParentComponent from './ParentComponent.vue';

</script> -->

<!-- <template>
 <CardBox>
 <template #header>
   <h1 class="text-center text-gray-600 font-semibold text-2xl mt-3">{{ header }}</h1>
   <p class="text-gray-500 mt-3 mx-3">Lorem ipsum dolor sit amet, consectetur
     adipisicing elit. Ea praesentium blanditiis quis dicta illum ipsa necessitatibus reprehenderit,
     hic corrupti sunt nobis recusandae ipsam, iste consequuntur vitae molestias, impedit accusamus voluptates?</p>
 </template>
 </CardBox>
</template>

<script setup>
import { ref } from 'vue';
import CardBox from './CardBox.vue';

const header=ref("cardbox")
</script> -->

<template>
  <ParentComponent/>
</template>

<script setup>
import ParentComponent from './ParentComponent.vue';


</script>
