<template>
	<div class="p-3">

      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in navItems" :key="item.id">
          <a
            href="javascript:void(0)"
            class="nav-link text-white"
            :class="{ active: activeSection === item.id }"
            @click="setActiveSection(item.id)"
            >{{ item.label }}</a
          >
        </li>
      </ul>

	</div>
</template>


<script setup>

</script>

<script>
  import logic from "../assets/js/appLogic.js";
  export default {
    ...logic
  }
</script>
