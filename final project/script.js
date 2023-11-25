const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  let correctas = [3, 1, 2, 2, 3];
   let opcion_elegida=[];

   let cantidad_correctas =0;

   function respuesta(num_pregunta, selecionada){
    opcion_elegida[num_pregunta] = selecionada.value;
   }