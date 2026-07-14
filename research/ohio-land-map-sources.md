# Ohio Land Map Source Ledger

This document supports the interactive map in `land_maps.html`. It separates verified facts, repository evidence, research leads, and unresolved hypotheses so that approximate map geometry is never mistaken for a deed boundary.

## 1. Ebenezer Wead — Dayton / Van Buren Township

### Supported in the repository

- `Ebenezer_Wead.html` places Ebenezer in Van Buren Township in the Dayton-area frontier around 1799 and records his burial at Beavertown Cemetery in 1830.
- `Ebenezer_Wead.html` includes a section titled **Wead Road and Legacy**.
- The repository contains `assets/Wead Road.jpg`, described on the page as a map shared by David Schmidt and appearing in Charlotte Reeve Conover's *Concerning the Forefathers*.

### Family-research leads to verify

1. Land associated with Ebenezer or his heirs eventually passed to the Patterson family.
2. A Patterson petition sought to rename Wead Road around 1904.
3. The replacement name may have been Patterson Boulevard, Dorothy Lane, or another road.
4. A relevant Library of Congress item may be indexed under a title or description similar to **Wade Tract**, Oakwood, Dayton, or Van Buren Township.
5. David Schmidt supplied substantial historical context and map evidence; his exact former institutional affiliation and any written notes should be preserved accurately.

### Critical distinction

A published history of the University of Dayton's Babbitt neighborhood identifies a **Wead Street**, later **Lawnview Avenue**. This may be a separate road from the Wead Road shown in the farm/tract material. The two should remain separate map features unless deed, plat, or petition evidence proves they are connected.

### Records needed

- Montgomery County deed index: Ebenezer Wead, John Stewart Wead, other heirs, Robert Patterson, Jefferson Patterson, John H. Patterson, and related grantees/grantors.
- Van Buren Township tax duplicates and early road records.
- County commissioner road petitions, municipal annexation records, and subdivision plats.
- Oakwood and Dayton historic plat books.
- Library of Congress catalog item and stable identifier.
- Full bibliographic citation and page number for the Conover map.

## 2. James Wead — Massie's Creek / Greene County

### Supported in the repository and family archive

- `James_Wead.html` records James's burial at Stevenson Cemetery, the surviving Massie's Creek burial ground.
- Sugar Creek Presbyterian correspondence explains that Sugar Creek and Massie's Creek were historically yoked congregations and identifies Stevenson Cemetery as the former Massie's Creek church graveyard.
- Family research identifies Elizabeth Winter as James's wife and Stephen Winter, a Revolutionary War veteran buried in the cemetery, as her father.
- The family archive includes James's probate packet, cemetery photographs, church records, and the 1866 letter from James to John Steele Wead.

### Family-research leads to verify spatially

1. James owned or occupied land beside or near Stevenson family property.
2. The relevant neighborhood is near Jones Road, Wilberforce–Clifton Road, Massies Creek, and Stevenson Cemetery.
3. Winter, Stevenson, and Wead burial clusters may reflect adjoining or nearby family farms, but cemetery adjacency alone is not a land-title conclusion.
4. John Steele Wead's Civil War association with a Stevenson may reflect the same neighborhood network.

### Records needed

- Greene County deed index and deed books for James Wead and Elizabeth Wead.
- Deeds and probate records for adjacent Stevenson and Winter owners.
- Tax duplicates, township maps, road records, and historical atlases.
- Exact modern coordinates for Stevenson Cemetery, the former church site, Jones Road, Wilberforce–Clifton Road, and relevant Massies Creek crossings.
- Parcel-by-parcel chain of title before drawing a final polygon.

## 3. Mapping confidence rules

- **Verified point:** an authoritative location or coordinate supported by a cited source.
- **Approximate research area:** a broad search zone used to organize work; never presented as a property boundary.
- **Candidate tract:** geometry inferred from historical descriptions but not yet closed by a full deed chain.
- **Verified tract:** boundary reconstructed from deeds, surveys, plats, or other sufficiently precise primary records.
- **Unresolved claim:** a remembered or secondary-source statement retained as a lead without being presented as fact.

## 4. Next implementation steps

1. Find the Library of Congress Wade/Wead Tract item.
2. Enter exact cemetery and road coordinates from authoritative sources.
3. Scan or export the Conover/Schmidt map at the highest available resolution.
4. Identify control points that appear on both the historical map and modern geography.
5. Georeference the historical map.
6. Build separate deed-chain tables for Ebenezer and James.
7. Add GeoJSON polygons only after the evidence supports them.
8. Attach a source ID and confidence field to every point, line, and polygon.
