<script setup lang="ts">
import { ref } from "vue";
import LoginModal from './LoginModal.vue'

const imgProfile = ref<HTMLInputElement | null>(null);
const showMenu = ref<boolean>(false);
const showLogin = ref<boolean>(false);
const isLoggedIn = ref<boolean>(false);
const userName = ref<string>("");
const userImage = ref<string>(
  "https://ui-avatars.com/api/?name=User&background=gold&color=fff"
);

function handleLogin(name: string): void {
  if (name) {
    isLoggedIn.value = true;
    userName.value = name;
    userImage.value = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=gold&color=fff`;
  }
  showLogin.value = false;
}

function handleLogout(): void {
  isLoggedIn.value = false;
  userName.value = "";
  userImage.value =
    "https://ui-avatars.com/api/?name=User&background=gold&color=fff";
}

function newimg(): void {
  imgProfile.value?.click();
}

function handleFileUpload(event: Event): void {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    userImage.value = URL.createObjectURL(file);
  }
}
</script>

<template>
  <div class="flex justify-end gap-4 p-6 text-gold-custom">
    <template v-if="!isLoggedIn">
      <button
        @click="showLogin = true"
        class="px-6 py-2 border-2 rounded-3xl border-gold-custom"
      >
        Sign In
      </button>
    </template>

    <template v-else>
      <div class="relative flex items-center gap-2">
        <span
          class="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
        >
          {{ userName }}
        </span>

        <img
          :src="userImage"
          alt="User"
          class="border-2 rounded-full border-gold-custom sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          @click="showMenu = !showMenu"
        />
        <div
          v-if="showMenu"
          class="absolute right-0 top-12 mt-2 w-32 bg-[#181818] border border-gold-custom rounded shadow-lg z-50"
        >
          <button
            @click="
              newimg();
              showMenu = false;
            "
            class="block w-full px-4 py-2 text-xs text-left rounded text-gold-custom hover:bg-gold-custom hover:text-black"
          >
            img-profile
          </button>

          <button
            @click="
              handleLogout();
              showMenu = false;
            "
            class="block w-full px-4 py-2 text-xs text-left rounded text-gold-custom hover:bg-gold-custom hover:text-black"
          >
            Logout
          </button>

          <input
            type="file"
            ref="imgProfile"
            @change="handleFileUpload"
            accept="image/*"
            class="hidden"
          />
        </div>
      </div>
    </template>
    <LoginModal :visible="showLogin" @close="(name) => handleLogin(name)" />
  </div>
</template>
