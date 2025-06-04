const slider = document.getElementById('progressSlider');
const fill = document.getElementById('fill');
const valueLabel = document.getElementById('valueLabel');

slider.addEventListener('input', () => {
	console.log("OKE");
	const value = slider.value;
	fill.style.width = value + '%';
	valueLabel.textContent = value;
});
