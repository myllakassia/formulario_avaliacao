import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  //função de click de botão avançae e voltar
  //função sendo exportada no App.jsx  dentro do botão voltar e form
  function changeStep(i, e) {
    //checa se eo evento do botão esta acontecendo
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currrentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    //o isLaste verifica se é o ultimo passo para então mudar o botão de avançar para enviar
    isFirstStep: currentStep === 0 ? true : false,
    // o isFirstStep mostra somente o botão avançar depois do clique mostra o avançar
  };
}
