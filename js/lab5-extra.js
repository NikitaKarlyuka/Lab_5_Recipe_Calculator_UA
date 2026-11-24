const BUTTER_GRAMS_PER_SERVING = 14;
const BUTTER_PACK_WEIGHT = 200;

const butterPacksResult = document.querySelector("#butter-packs-result");

function calculateButterPacks(
  servingsCount,
  gramsPerServing = BUTTER_GRAMS_PER_SERVING,
  packWeight = BUTTER_PACK_WEIGHT
) {
  if (!Number.isInteger(servingsCount) || servingsCount < 1) {
    return null;
  }

  const totalGrams = servingsCount * gramsPerServing;
  const packs = Math.ceil(totalGrams / packWeight);
  const remainder = packs * packWeight - totalGrams;

  return {
    totalGrams,
    packs,
    remainder
  };
}

function updateButterPacks() {
  const result = calculateButterPacks(servings);
  if (result === null) return;

  const packWord = result.packs === 1 ? "pack" : "packs";
  butterPacksResult.textContent =
    `For ${servings} serving(s) (${result.totalGrams} g at 14 g/serving): ` +
    `${result.packs} ${packWord} of ${BUTTER_PACK_WEIGHT} g, remainder: ${result.remainder} g.`;
}

decreaseButton.addEventListener("click", updateButterPacks);
increaseButton.addEventListener("click", updateButterPacks);
applyButton.addEventListener("click", updateButterPacks);

servingsInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updateButterPacks();
  }
});

updateButterPacks();