<template>
  <h2 class="page-title">About Me</h2>
  <hr>
  <p class="about-desc" >
    An enthusiastic and self-motivated Software Engineer with an extensive experience more than 8 years in designing, developing and testing software. Strong background in process-oriented software development. Capable of working in a team environment or working independently. I am continually seeking new challenges and a desire to expand knowledge and experience.
  </p>
  <br>

  <h3 class="page-title">Services</h3>
  <hr>

  <div class="row">
    <div class="col-sm-4 mb-2">
      <div class="services">
        <div class="icon">
          <i class="flaticon-web-programming"></i>
        </div>
        <div class="pt-3">
          <p class="service-title">Web Development</p>
          <p class="service-desc">Developing and designing web-based applications.</p>
        </div>
      </div>
    </div>

    <div class="col-sm-4 mb-2">
      <div class="services" >
        <div class="icon" >
          <i class="flaticon-android"></i>
        </div>
        <div class="pt-3">
          <p class="service-title">Android Developer</p>
          <p class="service-desc">Make an android based apps using Flutter, Java or Kotlin.</p>
        </div>
      </div>
    </div>

    <div class="col-sm-4 mb-2">
      <div class="services" >
        <div class="icon" >
          <i class="flaticon-paint-palette"></i>
        </div>
        <div class="pt-3">
          <p class="service-title">Design</p>
          <p class="service-desc">Design skills for web prototype or application needs.</p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'AboutPage',
    props: {
      msg: String
    }
  }
</script>
