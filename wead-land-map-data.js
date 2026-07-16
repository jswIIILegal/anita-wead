window.WEAD_LAND_MAP_DATA = {
  mapCenter: [39.735, -84.005],
  mapZoom: 9,
  groups: [
    {
      id: "ebenezer",
      title: "Ebenezer Wead and related Dayton/Oakwood land",
      shortTitle: "Dayton / Oakwood",
      focus: [39.73, -84.17],
      zoom: 12,
      description:
        "Research layers for Ebenezer Wead's unresolved personal farm, the later Oakwood Wead-family tract associated with John and Robert Wead and their heirs, historic road-name evidence, and the separate Babbitt Wead Street.",
      features: [
        {
          id: "ebenezer-research-zone",
          type: "circle",
          center: [39.71, -84.16],
          radiusMeters: 6500,
          title: "Ebenezer Wead personal-farm research zone",
          dateRange: "c. 1799–1830",
          confidence: "research-area",
          source:
            "Ebenezer_Wead.html; early Van Buren Township records; Beavertown Cemetery evidence",
          note:
            "Broad working area only. The exact parcel owned or occupied by Ebenezer has not yet been established. Do not substitute the later Oakwood tract of John and Robert Wead for Ebenezer's personal farm without a deed or probate link."
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
            "Family research identifies Beavertown Cemetery as Ebenezer's burial place. The displayed circle remains deliberately broad until an authoritative coordinate is entered."
        },
        {
          id: "oakwood-wead-tract-candidate",
          type: "circle",
          center: [39.731, -84.162],
          radiusMeters: 1500,
          title: "Oakwood Wead-family tract — candidate area",
          dateRange: "c. 1820s–1919",
          confidence: "candidate-tract",
          source:
            "Oakwood Historical Society synthesis; 1872 and 1901 Montgomery County road records; Library of Congress Olmsted Job 6720",
          note:
            "Approximate search area for land associated with John and Robert Wead and later heirs. Historic descriptions place it west of the railroad, east of present Shafor Boulevard, south from Irving Avenue to historic Wead Road/current Patterson Road. This circle is not a deed boundary."
        },
        {
          id: "babbitt-wead-street-zone",
          type: "circle",
          center: [39.746, -84.17],
          radiusMeters: 850,
          title: "Babbitt Wead Street / later Lawnview Avenue",
          dateRange: "19th–20th century",
          confidence: "separate-historic-feature",
          source:
            "Published University of Dayton neighborhood history; original plat or renaming ordinance still needed",
          note:
            "This street lies north of the Oakwood tract in the former Babbitt settlement. It is a separate feature from the Oakwood section-line road that became Patterson Road."
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
      subject: "Ebenezer Wood military identity",
      status: "identity-hypothesis",
      statement:
        "Lee's Legion and bounty-land materials naming Ebenezer Wood are retained as a research lead for Ebenezer Wead, but the site no longer treats the identity as proved until the full affidavit, heir, residence, and land-record chain is reconciled.",
      source: "Ebenezer_Wead.html; family archive materials under review"
    },
    {
      subject: "Ebenezer's exact farm",
      status: "unresolved",
      statement:
        "The precise Ohio parcel owned or occupied by Ebenezer has not yet been established and must remain separate from the better-documented Oakwood holdings of later Weads.",
      source: "Current deed-chain research"
    },
    {
      subject: "Exact Library of Congress record",
      status: "primary-source-supported",
      statement:
        "The remembered Wade/Wead tract file is Olmsted Associates Job 6720: Patterson, John H.; Wade tract, subdivision 'Woodside'; Dayton, Ohio, 1919–1921.",
      source: "Library of Congress item mss5257104274"
    },
    {
      subject: "Wade versus Wead",
      status: "primary-source-supported",
      statement:
        "The Olmsted file uses Wade, while contemporary McCann advertisements identify the same development context as the former Wead Farm.",
      source: "Olmsted Job 6720; 1917–1918 McCann Plat advertisements"
    },
    {
      subject: "Oakwood family tract",
      status: "supported-local-history",
      statement:
        "Oakwood historical research traces Patterson-family acreage to John and Robert Wead, then through Wead heirs and Nancy Davis's family before a 53.74-acre remnant passed to John H. Patterson in 1919.",
      source: "Oakwood Historical Society; deed and probate citations still required"
    },
    {
      subject: "1872 road record",
      status: "primary-source-supported",
      statement:
        "A Montgomery County record for James J. Bradford Road shows the corridor beginning at the Dayton and Lebanon Pike and passing land marked J. S. Wade. It is a strong predecessor lead for the later Wead/Wade Road corridor.",
      source: "1872 Montgomery County road record supplied by David Schmidt"
    },
    {
      subject: "1901 Wade Road",
      status: "primary-source-supported",
      statement:
        "A 1901 county survey explicitly labels Wade Road at its junction with the Dayton and Lebanon Pike and shows Patterson ownership beside the junction.",
      source: "1901 Montgomery County road survey supplied by David Schmidt"
    },
    {
      subject: "Wead Road renamed Patterson Road",
      status: "supported-local-history",
      statement:
        "Oakwood Historical Society research dates John H. Patterson's successful court petition renaming Wead Road as Patterson Road to 1909. The original petition and order remain a primary-source target.",
      source: "Oakwood Historical Society street-name research"
    },
    {
      subject: "Dorothy Lane and Patterson Boulevard",
      status: "supported-local-history",
      statement:
        "Dorothy Lane was formerly O'Neil Road, and John H. Patterson Boulevard was a separate proposed or early road name. Neither is the replacement name for Wead Road.",
      source: "Oakwood Historical Society street-name research"
    },
    {
      subject: "J. S. Wade identity",
      status: "identity-hypothesis",
      statement:
        "The J. S. Wade shown in the 1872 road record may be John Stewart Wead, but the identification requires deeds, census records, or probate evidence before it is stated as fact.",
      source: "Family hypothesis; primary identity proof needed"
    },
    {
      subject: "Robert Wead identity",
      status: "identity-hypothesis",
      statement:
        "David Schmidt could not confirm whether the Oakwood Robert Wead was Robert E. Wead (1781–1857), son of Ebenezer and brother of James.",
      source: "David Alan Schmidt correspondence, January 13, 2025"
    },
    {
      subject: "Separate Babbitt Wead Street",
      status: "separate-historic-feature",
      statement:
        "Published neighborhood history identifies a Wead Street in Babbitt that later became Lawnview Avenue. It is geographically distinct from the Oakwood road that became Patterson Road.",
      source: "University of Dayton neighborhood-history lead; original plat needed"
    },
    {
      subject: "James at Massie's Creek",
      status: "supported",
      statement:
        "James is buried at Stevenson Cemetery and is documented within the Massie's Creek, Sugar Creek, and Xenia Presbyterian network.",
      source: "James_Wead.html; Sugar Creek Presbyterian correspondence"
    },
    {
      subject: "James's Survey 870 parcel",
      status: "targeted-research-path",
      statement:
        "The former J. Wade / James Wead land lead is now tied to William Darke Survey No. 870. The likely post-death conveyance should be searched in Greene County direct deed index volume 6-7 (1873-1889), DGS 8330821, under Wead/Wade/Waid/Weed/Wood, Stevenson, Grove, and Eckman, then verified from the deed image.",
      source: "research/james-wead-survey-870-deed-research.md"
    },
    {
      subject: "James's exact farm",
      status: "unresolved",
      statement:
        "Family research places James beside or near the Stevenson family, but an exact parcel polygon requires the Survey 870 deed image, tax duplicates, probate cross-checks, and historic-map reconciliation.",
      source: "Research lead supplied by Jimmy Wead; Survey 870 deed-search memo"
    }
  ]
};
