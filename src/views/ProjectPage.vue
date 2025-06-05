<template>
	<h2 class="page-title">Projects</h2>
	<hr>

	<div class="row">
		<div class="col-12 mb-3" v-for="pj in prjs" :key="pj.type" >
			<span class="small-page-title">{{ pj.type }}</span>
			<div class="row mt-2">
				<div class="col-sm-4 col-12 mb-4" v-for="p in pj.data" :key="p.id" >
					<div class="project-card" @click="openPopup(p)">
						<img class="img-fluid" :src="getImageUrl(`projects/${p.image}`)">
						<div class="px-0">
							<b class="font-14">{{ p.company }}</b>
							<div class="font-12 flex-wraps">
								<p class="font-12 mb-0">{{ p.project }}</p>
								<div class="badge bg-secondary rounded-pill" v-for="tg in p.tags" :key="tg">{{tg}}</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<hr>

	<p class="font-12">*) and many projects which can't be shown here</p>

	<!-- Popup Overlay -->
	<div v-show="popupVisible" class="popup-overlay">
		<div class="popup-content">
			<div class="popup-close" @click="closePopup">&times;</div>
			<img :src="popupImage" alt="" class="img-fluid popup-image" />
			<div class="popup-desc">
				<p v-html="popupDesc" class="mb-0"></p>
				<div v-for="(en,index) in engines" :key="index" >
					<b>{{en.type}} : </b> {{ en.engine.join(', ') }} 
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
	import prjs from './../assets/datasets/projects.json'
	import { ref, onMounted, onUnmounted } from 'vue'
	import DOMPurify from 'dompurify';

	const popupVisible = ref(false)
	const popupImage = ref(null)
	const popupDesc = ref(null)
	const engines = ref(null)

	function safeHtml(content) {
		return DOMPurify.sanitize(content);
	}

	function openPopup(src) {
		var width = window.innerWidth;
		console.log(width);

		popupImage.value = getImageUrl(`projects/${src.image_large}`)
		popupDesc.value = safeHtml(src.desc.title)
		engines.value = src.desc.details
		setTimeout(function() {
			const img = document.querySelector('.popup-image')
			const text = document.querySelector('.popup-desc')
			const content = document.querySelector('.popup-content')

			// var width = img.clientWidth
			if (img.clientWidth < 900) {
				width = width - 30
				content.style.width = `${width}px`;
				console.log(width)
			}else{
				width = img.clientWidth
			}
			img.style.width = `${width}px`;
			text.style.width = `${width}px`;
			text.style.backgroundColor = src.color;

		}, 10);

		popupVisible.value = true

	}

	function closePopup() {
		popupVisible.value = false
		popupImage.value = null
		popupDesc.value = null
	}

	const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
	function getImageUrl(filename) {
		return images[`/src/assets/images/${filename}`]
		// return 'assets/images/${filename}';
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closePopup()
		}
	}

	onMounted(() => {
		window.addEventListener('keydown', handleKeydown)
	})

	onUnmounted(() => {
		window.removeEventListener('keydown', handleKeydown)
	})


</script>









