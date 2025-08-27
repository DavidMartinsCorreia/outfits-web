<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: Boolean,
});

const emits = defineEmits(["close"]);

const userName = ref("");
const password = ref("");

async function submit() {
  if (password.value.length < 5) {
    alert("A palavra-passe deve ter no mínimo 5 caracteres");
    return;
  }

  try {
    const response = await fetch("http://localhost:4000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userName.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Conta criada com sucesso!");
      emits("close", userName.value);
    } else {
      alert(data.error || "Erro ao criar conta.");
    }
  } catch (err) {
    console.error(err);
    alert("Erro de rede ao contactar o servidor.");
  }
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
  >
    <div
      class="bg-white p-6 rounded-2xl w-[300px] shadow-lg flex flex-col gap-4"
    >
      <div class="flex items-center justify-between mb-4">
        
        <h2 class="text-lg font-bold text-center">Sign In</h2>
  
        <button
          class="flex justify-end px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
          @click="emits('close')"
        >
          ✕
        </button>
      </div>

      <form @submit.prevent="submit" class="flex flex-col gap-3">
        <input
          v-model="userName"
          type="text"
          placeholder="Username"
          class="w-full p-2 border rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 border rounded"
        />
        <button class="w-full p-2 text-white rounded bg-gold-custom">
          Entry
        </button>
      </form>
    </div>
  </div>
</template>
