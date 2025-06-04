<template>
  <h2 class="page-title">Experiences</h2>

  <hr>
  <div class="row">
    <div class="col-sm-6">

      <div class="exp-header">
        <div class="exp-icon">
          <i class="ion-trophy"></i>
        </div>
        <h3>Previous Positions</h3>
      </div>
      
      <div class="exp-container">
        <div class="exp-wrapper" v-for="(item, index) in exps" :key="index">
          <div class="black-dot"></div>
          <div class="exp-content">
            <div class="exp-title">
              <div>
                <b>{{ item.company }}</b>
                <div>
                  <span>{{ item.position }}</span> - <small>{{ item.venue }}</small>
                </div>
              </div>
              <div>
                <span>{{ item.periode_year }}</span>
                <div class="space-between">
                  <span class="font-12" v-for="e in item.periode_month" :key="e" >{{e}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="exp-header">
        <div class="exp-icon">
          <i class="ion-university"></i>
        </div>
        <h3>Academic Background</h3>
      </div>

      <div class="exp-container">
        <div class="exp-wrapper" v-for="(item, index) in educ" :key="index">
          <div class="black-dot"></div>
          <div class="exp-content">
            <div class="exp-title">
              <div>
                <b>{{ item.name }}</b>
                <div>
                  <span>{{ item.desc }}</span><br>
                  <span>{{ item.info }}</span>
                </div>
              </div>
              <div>
                <span>{{ item.year }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>



</template>

<script setup>

  import exps from "./../assets/datasets/experiences.json"
  import educ from "./../assets/datasets/academic.json"

</script>