const connections = [
  // Round of 16 → QF
  ["r16-1", "qf-1"],
  ["r16-2", "qf-1"],
  ["r16-3", "qf-2"],
  ["r16-4", "qf-2"],
  ["r16-5", "qf-3"],
  ["r16-6", "qf-3"],
  ["r16-7", "qf-4"],
  ["r16-8", "qf-4"],

  // QF → SF
  ["qf-1", "sf-1"],
  ["qf-2", "sf-1"],
  ["qf-3", "sf-2"],
  ["qf-4", "sf-2"],

  // SF → Final
  ["sf-1", "final"],
  ["sf-2", "final"],
];

const svg = document.getElementById("lines");

function center(el) {
  const rect = el.getBoundingClientRect();
  const parent = svg.getBoundingClientRect();
  return {
    x: rect.right - parent.left, // connect from right edge
    y: rect.top + rect.height / 2 - parent.top,
    left: rect.left - parent.left
  };
}

function clear() {
  svg.innerHTML = "";
}

function draw() {
  clear();
  connections.forEach(([fromId, toId]) => {
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    if (!from || !to) return;

    const p1 = center(from);
    const p2 = center(to);

    const midX = (p1.x + p2.left) / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute("d", `M${p1.x},${p1.y} C${midX},${p1.y} ${midX},${p2.y} ${p2.left},${p2.y}`);
    path.setAttribute("stroke", "rgba(255,255,255,0.3)");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");
    svg.appendChild(path);
  });
}

window.addEventListener("load", draw);
window.addEventListener("resize", draw);
