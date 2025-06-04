<template>

  <div id="app" class="">
    <!-- Sidebar -->

    <div class="row">
      <div class="col-sm-3">
        <nav id="sidebar" class="bg-dark text-white px-2 py-5 flex-shrink-0">
          <div class="text-center mb-0 profile-wrapper">
            <div class="profile-image">
              <img :src="Me" alt="Me"/>
            </div>
            <div class="profile-name">
              <span class="fname">Yayan</span>
              <span class="lname">Agustian</span>
            </div>
            <p class="small text-grey">Software Developer</p>
          </div>
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
          <div class="divider"></div>

          <div class="social-medias">
            <i class="icon-social-instagram"></i>
            <i class="icon-social-twitter"></i>
            <i class="icon-social-facebook"></i>
          </div>
        </nav>
      </div>
      <div class="col-sm-9">
        <!-- Main Content -->
        <main class="">
          <transition name="fade" mode="out-in">
            <div :key="activeSection">
              <section v-if="activeSection === 'about'">
                <AboutPage />
              </section>

              <section v-if="activeSection === 'skills'">
                <SkillsPage />
              </section>

              <section v-if="activeSection === 'experiences'">
                <ExperincePage />
              </section>

              <section v-if="activeSection === 'projects'" class="pt-3">
                <ProjectPage />
              </section>

              <section v-if="activeSection === 'contact'" class="pt-3">
                <ContactPage />
              </section>
            </div>

          </transition>

        </main>
        
      </div>
    </div>




  </div>
</template>

<script setup>
  import AboutPage from './views/AboutPage'
  import SkillsPage from './views/SkillsPage'
  import ExperincePage from './views/ExperiencePage'
  import ProjectPage from './views/ProjectPage'
  import ContactPage from './views/ContactPage'

  import Me from './assets/images/me-in-suit.png'// @ = src

  import {
    activeSection,
    navItems,
    setActiveSection
  } from "./assets/js/appLogic"

</script>










