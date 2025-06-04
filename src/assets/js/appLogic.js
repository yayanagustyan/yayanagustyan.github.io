import { ref, reactive } from "vue";

export const activeSection = ref("about");

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];


export const form = reactive({
  name: "",
  email: "",
  message: "",
});
export const submitted = ref(false);

export function setActiveSection(id) {
  activeSection.value = id;
}

export function submitForm() {
  if (form.name && form.email && form.message) {
    submitted.value = true;
    form.name = "";
    form.email = "";
    form.message = "";
  }
}
