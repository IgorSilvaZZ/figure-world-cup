let isIgnite = true;

function changeCard(event) {
  const card = event.currentTarget;

  const bg = isIgnite ? "bg-ignite" : "bg-explorer";

  isIgnite = !isIgnite;

  card.style.backgroundImage = `url(./assets/${bg}.svg)`;
}
