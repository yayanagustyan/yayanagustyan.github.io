<template>
  <h2 class="page-title">Skills</h2>

  <div class="row">
    <div v-for="(sk, index) in skills.skills" :key="index" class="col-sm-6">
      <hr>
      <div v-for="skill in sk.data" :key="skill.name" class="mb-3">
        <label class="small-page-title">{{ skill.name }}</label>
        <div class="details ms-3">
          <div v-for="dt in skill.details" :key="dt.type" class="pt-2">
            <small v-if="dt.type != ''" class="dt-type">{{ dt.type }}</small>
            <div class="childs ms-3">
              <div class="row" v-for="ch in dt.childs" :key="ch.name">
                <div class="col-6"><small>{{ch.name}}</small></div>
                <div class="col-6">
                  <div class="skill" data-label="PHP" :data-value="ch.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>
  import { onMounted } from 'vue'

  /* eslint-disable no-unused-vars */
  import skills from "./../assets/datasets/skills.json"
  /* eslint-disable no-unused-vars */

  onMounted(() => {
    const totalSegments = 10;
    document.querySelectorAll('.skill').forEach(skillEl => {
      var value = parseInt(skillEl.dataset.value || '0');
      // const label = skillEl.dataset.label || '';
      const barval = value;
      value = value / 10;

      // Create a container
      const container = document.createElement('div');
      container.classList.add('skill-container');

      // Add label
      const labelEl = document.createElement('div');
      labelEl.classList.add('flex-row','pb-2');
      labelEl.textContent = `${barval}%`;
      labelEl.classList.add("font-10","pad-l-10");
      // container.appendChild(labelEl);


      // Create bar
      const bar = document.createElement('div');
      bar.classList.add('bar-wrapper');
      for (let i = 0; i < totalSegments; i++) {
        const segment = document.createElement('div');
        segment.classList.add('bar-segment');
        if (i < value) {
          segment.classList.add('filled');
        }
        bar.appendChild(segment);
      }

      const content = document.createElement("div");
      content.classList.add("flex-row");
      content.appendChild(bar);
      content.appendChild(labelEl);

      container.appendChild(content);

      skillEl.replaceWith(container); // Replace placeholder with generated UI
    });
  })

</script>
