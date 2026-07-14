(() => {
  const data = window.WEAD_LAND_MAP_DATA;
  const mapElement = document.getElementById("weadLandMap");

  if (!data || !mapElement || typeof L === "undefined") {
    return;
  }

  const map = L.map(mapElement, {
    scrollWheelZoom: false,
    preferCanvas: true
  }).setView(data.mapCenter, data.mapZoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const layerControl = {};
  const bounds = [];

  function confidenceLabel(value) {
    const labels = {
      supported: "Supported",
      "supported-with-source-image": "Supported by source image",
      "research-area": "Approximate research area",
      "location-to-verify": "Location requires coordinate verification",
      "needs-primary-verification": "Needs primary-source verification",
      unresolved: "Unresolved",
      "separate-until-proven": "Keep separate until proven"
    };
    return labels[value] || value;
  }

  function featurePopup(group, feature) {
    return `
      <div class="map-popup">
        <h3>${feature.title}</h3>
        <p><strong>Family area:</strong> ${group.title}</p>
        <p><strong>Date range:</strong> ${feature.dateRange}</p>
        <p><strong>Status:</strong> ${confidenceLabel(feature.confidence)}</p>
        <p>${feature.note}</p>
        <p class="map-popup-source"><strong>Current source lead:</strong> ${feature.source}</p>
      </div>
    `;
  }

  data.groups.forEach((group) => {
    const groupLayer = L.layerGroup().addTo(map);
    layerControl[group.shortTitle] = groupLayer;

    group.features.forEach((feature) => {
      let layer;

      if (feature.type === "circle") {
        layer = L.circle(feature.center, {
          radius: feature.radiusMeters,
          weight: 2,
          opacity: 0.9,
          fillOpacity: 0.12,
          dashArray:
            feature.confidence === "research-area" ? "8 7" : "3 6"
        });
        bounds.push(feature.center);
      }

      if (!layer) return;

      layer.bindPopup(featurePopup(group, feature), {
        maxWidth: 360
      });
      layer.addTo(groupLayer);
    });
  });

  L.control.layers(null, layerControl, {
    collapsed: false,
    position: "topright"
  }).addTo(map);

  document.querySelectorAll("[data-map-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = data.groups.find(
        (item) => item.id === button.dataset.mapFocus
      );
      if (!group) return;
      map.flyTo(group.focus, group.zoom, { duration: 0.8 });
    });
  });

  const resetButton = document.querySelector("[data-map-reset]");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      map.flyTo(data.mapCenter, data.mapZoom, { duration: 0.8 });
    });
  }

  const ledgerBody = document.getElementById("evidenceLedgerBody");
  if (ledgerBody) {
    data.evidenceLedger.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.subject}</td>
        <td><span class="evidence-status evidence-${entry.status}">${confidenceLabel(entry.status)}</span></td>
        <td>${entry.statement}</td>
        <td>${entry.source}</td>
      `;
      ledgerBody.appendChild(row);
    });
  }

  window.addEventListener("resize", () => map.invalidateSize());
})();
