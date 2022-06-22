



const Info = document.getElementById("Info");
const Zoonosis = document.getElementById("Zoonosis");
const Virusexamples = document.getElementById("Virusexamples");
const Virusincrease = document.getElementById("Virusincrease");
const DiseaseX = document.getElementById("DiseaseX");
const linkA = document.querySelector(".linkA");
const linkB = document.querySelector(".linkB");
const linkC = document.querySelector(".linkC");
const linkD = document.querySelector(".linkD");
const linkE = document.querySelector(".linkE");

Info.addEventListener("click", () => {
  linkA.scrollIntoView({ behavior: "smooth", block: "center" });
});

Zoonosis.addEventListener("click", () => {
  linkB.scrollIntoView({ behavior: "smooth", block: "center" });
});

Virusexamples.addEventListener("click", () => {
  linkC.scrollIntoView({ behavior: "smooth", block: "center" });
});

Virusincrease.addEventListener("click", () => {
  linkD.scrollIntoView({ behavior: "smooth", block: "center" });
});

DiseaseX.addEventListener("click", () => {
  linkE.scrollIntoView({ behavior: "smooth", block: "center" });
});
