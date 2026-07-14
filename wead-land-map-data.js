window.WEAD_LAND_MAP_DATA = {
  mapCenter: [39.735, -84.005],
  mapZoom: 9,
  groups: [
    {
      id: "ebenezer",
      title: "Ebenezer Wead — Dayton / Van Buren Township",
      shortTitle: "Ebenezer area",
      focus: [39.72, -84.17],
      zoom: 12,
      description:
        "Research area for Ebenezer Wead's Ohio land, the historic Wead/Wade tract, later Patterson ownership, road-name history, and Beavertown Cemetery.",
      features: [
        {
          id: "ebenezer-research-zone",
          type: "circle",
          center: [39.72, -84.17],
          radiusMeters: 6500,
          title: "Ebenezer Wead land-reconstruction zone",
          dateRange: "c. 1799–1830",
          confidence: "research-area",
          source: "Ebenezer_Wead.html; historic map image assets/Wead Road.jpg",
          note:
            "Broad working area only. It is not an asserted deed boundary. Replace this circle with deed-based polygons after the Montgomery County chain of title and historic plats are reconciled."
        },
        {
          id: "beavertown-cemetery-zone",
          type: "circle",
          center: [39.695, -84.15],
          radiusMeters: 1800,
          title: "Beavertown Cemetery vicinity",
          dateRange: "1830",
          confidence: "location-to-verify",
          source: "Ebenezer_Wead.html",
          note:
            "Existing site research identifies Beavertown Cemetery as Ebenezer's burial place. The displayed circle is deliberately broad until an authoritative coordinate is entered."
        }
      ]
    },
    {
      id: "james",
      title: "James Wead — Massie's Creek / Greene County",
      shortTitle: "James area",
      focus: [39.735, -83.84],
      zoom: 12,
      description:
        "Research area for James and Elizabeth Winter Wead near Massie's Creek, Stevenson Cemetery, the Stevenson and Winter neighbors, and James's Greene County farm.",
      features: [
        {
          id: "james-research-zone",
          type: "circle",
          center: [39.735, -83.84],
          radiusMeters: 7000,
          title: "James Wead / Massie's Creek reconstruction zone",
          dateRange: "c. 1812–1873",
          confidence: "research-area",
          source: "James_Wead.html; Sugar Creek Presbyterian correspondence",
          note:
            "Broad working area centered on the Jones Road, Wilberforce–Clifton Road, Massie's Creek, and Stevenson Cemetery neighborhood. It is not yet an asserted farm boundary."
        },
        {
          id: "stevenson-cemetery-zone",
          type: "circle",
          center: [39.745, -83.84],
          radiusMeters: 2200,
          title: "Stevenson Cemetery vicinity",
          dateRange: "1804–present",
          confidence: "location-to-verify",
          source: "James_Wead.html; family cemetery survey and photographs",
          note:
            "The cemetery is confirmed as James Wead's burial place. The displayed circle is intentionally broad until the exact mapped coordinate is verified."
        }
      ]
    }
  ],
  evidenceLedger: [
    {
      subject: "Ebenezer's Ohio settlement",
      status: "supported",
      statement:
        "Ebenezer migrated to the Dayton-area frontier around 1799 and appears in early regional records in Van Buren Township.",
      source: "Ebenezer_Wead.html"
    },
    {
      subject: "Historic Wead Road map",
      status: "supported-with-source-image",
      statement:
        "The repository contains a historical Wead Road image attributed in the page narrative to Charlotte Reeve Conover and supplied by David Schmidt.",
      source: "assets/Wead Road.jpg; Ebenezer_Wead.html"
    },
    {
      subject: "Patterson acquisition",
      status: "needs-primary-verification",
      statement:
        "Family research indicates that land associated with Ebenezer later passed to the Patterson family. The deed sequence and exact tract boundary still need to be entered.",
      source: "Research lead supplied by Jimmy Wead"
    },
    {
      subject: "Road-name petition",
      status: "unresolved",
      statement:
        "A remembered Patterson petition may have changed a Wead road name around 1904, possibly to Patterson Boulevard or Dorothy Lane. This must be verified from the petition, plat, or municipal record.",
      source: "Library of Congress / local-history research lead"
    },
    {
      subject: "Possible second Wead street",
      status: "separate-until-proven",
      statement:
        "Published neighborhood history identifies a Wead Street in Babbitt that later became Lawnview Avenue. Do not assume it is the same road as the Oakwood/Van Buren farm-road evidence.",
      source: "University of Dayton neighborhood-history lead"
    },
    {
      subject: "James at Massie's Creek",
      status: "supported",
      statement:
        "James is buried at Stevenson Cemetery and is documented within the Massie's Creek, Sugar Creek, and Xenia Presbyterian network.",
      source: "James_Wead.html; Sugar Creek Presbyterian correspondence"
    },
    {
      subject: "James's exact farm",
      status: "unresolved",
      statement:
        "Family research places James beside or near the Stevenson family, but an exact parcel polygon requires Greene County deeds, tax duplicates, and historic plats.",
      source: "Research lead supplied by Jimmy Wead"
    }
  ]
};
