// Your code goes here!


import { modulo, percentage, percentageOf, difference } from "/modules/percentage.js";
import { calculateAspectRatio } from "/modules/aspect-ratio.js"

const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

modulo1.addEventListener("input", function () {
    const outputModulo = modulo(parseFloat(modulo1.value), parseFloat(modulo2.value));

    moduloResult.value = outputModulo;
}
);

modulo2.addEventListener("input", function () {
    const outputModulo = modulo(parseFloat(modulo1.value), parseFloat(modulo2.value));

    moduloResult.value = outputModulo;
}
);

const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");

percentage1.addEventListener("input", function () {
    const outputPercentage = percentage(parseFloat(percentage1.value), parseFloat(percentage2.value));

    percentageResult.value = outputPercentage;
}
);

percentage2.addEventListener("input", function () {
    const outputPercentage = percentage(parseFloat(percentage1.value), parseFloat(percentage2.value));

    percentageResult.value = outputPercentage;
}
);

const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");

percentageOf1.addEventListener("input", function () {
    const outputPercentageOf = percentageOf(parseFloat(percentageOf1.value), parseFloat(percentageOf2.value));

    percentageOfResult.value = outputPercentageOf;
}
);

percentageOf2.addEventListener("input", function () {
    const outputPercentageOf = percentageOf(parseFloat(percentageOf1.value), parseFloat(percentageOf2.value));

    percentageOfResult.value = outputPercentageOf;
}
);

const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const differenceResult = document.querySelector("#difference_result");

difference1.addEventListener("input", function () {
    const outputDifference = difference(parseFloat(difference1.value), parseFloat(difference2.value));

    differenceResult.value = outputDifference;
}
);

difference2.addEventListener("input", function () {
    const outputDifference = difference(parseFloat(difference1.value), parseFloat(difference2.value));

    differenceResult.value = outputDifference;
}
);







