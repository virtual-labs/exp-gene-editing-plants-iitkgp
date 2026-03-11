## Procedure

#### 1. Target Gene Selection
The first step involves identifying the gene or genomic region of interest. This may be based on:
- **Functional studies**, transcriptomic or proteomic data.
- **Phenotypic traits** (e.g., drought resistance, disease susceptibility).
- **Bioinformatic analysis** to predict gene functions or pathways.
Once selected, a **reference genome** of the plant species is consulted to locate the exact sequence.

#### 2. Designing sgRNA (Single Guide RNA)
The sgRNA is a synthetic RNA molecule that guides the Cas9 enzyme to the target DNA.
- **Bioinformatics tools** (e.g., CRISPR-P, Benchling, CHOPCHOP) are used to design sgRNAs that:
  - Are 20 nucleotides long.
  - Are adjacent to a PAM sequence (usually NGG for SpCas9).
  - Minimize off-target binding.
- Multiple sgRNAs may be designed to increase editing efficiency or target multiple loci.

#### 3. Constructing the CRISPR/Cas9 Vector
A binary plasmid vector is built for delivery into plant cells, often containing:
- **Cas9 gene** under a plant-compatible promoter (e.g., CaMV 35S, Ubiquitin).
- **sgRNA cassette** driven by a Pol III promoter (e.g., U6 promoter).
- **Selectable marker** (e.g., antibiotic or herbicide resistance gene).
- Optional: Reporter gene (e.g., GFP) for tracking transformation.
This construct is often assembled using **Golden Gate**, Gibson Assembly, or restriction enzyme cloning.

#### 4. Delivery into Plant Cells
The vector is introduced into plant cells using one of the following methods:

#### a. Agrobacterium tumefaciens–mediated transformation
- Most common for dicots (e.g., tomato, tobacco).
- The CRISPR/Cas9 plasmid is transformed into Agrobacterium.
- Plant tissues (e.g., leaf discs, cotyledons) are co-cultivated with the bacteria.
- T-DNA carrying the CRISPR/Cas9 components integrates into the plant genome.

#### b. Biolistic (gene gun) transformation
- DNA-coated gold/tungsten particles are shot into plant cells.
- Often used in monocots like maize and rice.

#### c. PEG-mediated transfection
- Used for **protoplasts** (cell wall-less plant cells).
- CRISPR plasmid or ribonucleoprotein (RNP) complex is introduced via polyethylene glycol.

#### 5. Plant Regeneration and Selection
After successful transformation:
- The cells are cultured on **selective media** to promote shoot and root formation.
- Only transformed cells survive and regenerate into whole plants due to selection markers.
- **Tissue culture techniques** vary by species and transformation method

#### 6. Screening and Validation of Mutants
Once transgenic plants are obtained:
- **DNA is extracted** from leaves or other tissues.
- PCR is used to amplify the target gene region.
- **Mutation detection**:
  - **T7E1 assay** (mismatch cleavage).
  - **Sanger sequencing or Next-Generation Sequencing** for precise indel characterization.
  - **High-resolution melting (HRM) analysis** for mutation scanning.

#### 7. Segregation and Generation Advancement
- Plants may be **self-pollinated** to obtain homozygous edited lines.
- In some cases, transgene-free (CRISPR/Cas9-free) progeny are selected through segregation.
- This is important to **meet regulatory criteria** in countries that do not classify transgene-free edited plants as GMOs.

#### 8. Phenotypic and Molecular Analysis
- Confirm that gene editing has produced the **expected phenotypic change**.
- Perform **expression analysis** (e.g., qRT-PCR, Western blot) to assess gene disruption.
- Evaluate **off-target effects** if necessary, using whole-genome sequencing or bioinformatic prediction tools.

#### 9. Preservation and Field Trials
- Edited lines are preserved through seed banking or tissue culture.
- Promising lines are tested in **greenhouse and field trials** to assess agronomic performance, trait stability, and biosafety.


##### Here is an example of gene editing in Indian mustard plant (Brassica juncea L.) through CRISPR-Cas9 mediated approach.
Indian mustard *(Brassica juncea L.)* is a significant oilseed crop of substantial commercial and nutritional value worldwide. The seed oil provides significant dietary advantages owing to its balanced ratio of essential fatty acids; nevertheless, traditional high oil-yielding types possess a heightened concentration of erucic acid (EA, C22:1), which is linked to negative health consequences. Elevated levels of EA in food and feedstock may have detrimental health effects. Growing evidence indicates that elevated EA consumption may negatively impact human health, especially concerning cardiovascular function, including the onset of myocardial lipidosis (fat accumulation within cardiac cells) and heightened blood cholesterol levels, as observed in certain mammalian models [16, 17].  

EA is predominantly located in the seeds of many plant species within the *Brassicaceae family*. In plants, the preliminary stages of fatty acid biosynthesis, resulting in the production of C18 chain length fatty acids, transpire within the plastids [18]. Subsequently, these C18 fatty acids are employed by specific fatty acid elongases in the endoplasmic reticulum to further elongate C18-CoA (Coenzyme A) into longer-chain fatty acids [19]. The production of EA entails a four-step elongation process that requires four enzymes: 3-ketoacyl-CoA synthase (KCS), 3-ketoacyl-CoA reductase, 3-hydroxyacyl-CoA dehydratase, and trans-2,3-enoyl-CoA reductase, which facilitate the elongation of the C18:1 chain to C22:1 (Bach and Faure, 2010). The KCS enzyme, encoded by the fatty acid elongase1 (FAE1) gene, catalyzes the rate-limiting and substrate-specific first condensation step for elongating the fatty acyl chain length from C18:0- or C18:1-CoA to commence very long chain fatty acid (VLCFA) production. The diploid Brassica species (B. rapa, B. nigra) contain a single copy of the FAE1 gene, while the amphidiploid B. juncea has two copies of FAE1 homologs, specifically FAE1.1 and FAE1.2, with one homolog derived from each diploid species, contributing additively to seed EA accumulation [20].  

This study utilized the CRISPR/Cas9 technology to effectuate targeted disruption of the FAE1 genes at two distinct locations within the complicated amphidiploid B. juncea genome. The effective application of CRISPR/Cas9 technology to target BjFAE1 homeoalleles *(BjFAE1.1 and BjFAE1.2)* in two superior cultivars, PCR7 and JD6, of B. juncea significantly diminished the EA concentration in seed oil. Consistent with expectations, these genome-edited lines demonstrate markedly elevated levels of nutritionally advantageous fatty acids, including C18:1, C18:2, and C18:3 in seed oil. Significantly, these CRISPR/Cas9 knockout lines exhibit plant growth metrics (during both vegetative and reproductive phases) and oil content akin to unedited control cultivars [21].  

In this study, out of 5 B. juncea cultivars, two cultivars – PCR7 and JD6 were chosen, because of their high seed oil content. The seed oil contents were quantified gravimetrically, and their FA composition were determined by GC-MS. The complete coding DNA sequences (CDS) of *BjFAE1.1* and *BjFAE1.2*, which regulate seed EA levels, were PCR amplified from growing seed-specific cDNA samples of the cultivars PCR7 and JD6 using specified primer pairs. The CDSs (1521 bp) were cloned onto the pUC19 plasmid and transformed into competent *Escherichia coli* TOP10 cells. The positive clones were identified using restriction digestion analysis and validated by Sanger sequencing. The sequenced CDSs were used to design 20nt guide RNAs (gRNAs) using softwares like CRISPR-P v2.0, CRISPOR and Cas-OFFinder. The cutting frequency determination (CFD) specificity score of the gRNAs were calculated and the on-target efficiency of designed gRNAs were determined to search off-targets having 0 to 4 nt mismatch/es against reference B. *juncea genome* (v1.5 from Brassica Database). 4 single guide RNAs (sgRNA 1 – 4) were selected on the basis of their high (>95) CFD score and less than 3 nt mismatches with the off-target sequence. These gRNAs were synthesised and cloned into the dual guide acceptor CRISPR plasmid, and transformed into competent E. coli TOP10 cells. The positive clones were verified by colony PCR generating amplicons of 590 bp and 327 bp. Two chimeric constructs, pBjFAE13 and pBjFAE24, both containing dual sgRNAs of distinct combinations, were prepared and verified by sequencing. These chimeric contructs were first used to transform competent *Agrobacterium tumefaciens* LBA4404 cells and the positive cloned were verified for agrobacterium-mediated transformation of *B. juncea*. Hypocotyl explants of B. juncea from 6-day-old PCR7 and JD6 cultivar seedlings were used for transformation. Putative transformants were regenerated from the infected hypocotyls and screened on 30 mg/L of hygromycin-supplemented medium across ten successive culture passages, comprising the initial six passages on shoot induction medium and the subsequent four passages on root induction medium. Viable plantlets were relocated to the greenhouse [21].
Genomic DNA (gDNA) was extracted from young leaves for mutation analysis utilizing the CTAB method. For High-Resolution Melting (HRM) screening, equal quantities of gDNAs were combined from untransformed control plants and groups of potential transformants. Approximately 200 base pairs of the genomic sequence adjacent to the target locations of each BjFAE1 homeoallele were amplified using gene-specific primers and MeltDoctor HRM Master Mix (Applied Biosystems). HRM experiments were conducted using the StepOnePlus instrument (Applied Biosystems) in accordance with the manufacturer's instructions. Melting curves were produced by incrementally raising the temperature from 65 °C to 95 °C in 0.2 °C steps. The resultant melting curves were examined with HRM v3.0.1 (Applied Biosystems). PCR products produced with HRM primers and Q5 High-Fidelity DNA Polymerase (New England Biolabs) were gel-eluted and subjected to Sanger sequencing. Mutations in the target genes were identified by comparing the sequence chromatogram files of each edited/mutant plant line with those of the control non-edited plant, utilizing the ICE analysis program version 3.0 (Synthego Corporation) [21].   

The genomic incorporation of the T-DNA segment from CRISPR/Cas9 constructs was verified by hygromycin- and Cas9-specific PCRs. According to PCR screening results, 27 of 72 T0 plantlets of the PCR7 cultivar and 32 of 86 T0 plantlets of the JD6 cultivar, which tested positive, were cultivated till maturity, and seeds were harvested individually from each line. Additional molecular validations of T0 lines were conducted through high-resolution melting (HRM) analysis of approximately 200 bp PCR-amplified fragments that include a potential Cas9 cleavage site, subsequently followed by Sanger sequencing and Inference of CRISPR Edits (ICE) analysis utilizing the acquired sequencing data [21].  

A comparative fatty acid profile analysis of mature T2 generation seeds using gas chromatography-mass spectrometry was performed to evaluate the effect of BjFAE1 knockout on seed oil quality. The FAE1 double knockout lines of the PCR7 cultivar demonstrated a significant decrease in seed EA content, reducing from roughly 40% in wild-type plants to below 0.5%. The significant reduction in C22:1 was paralleled by a compensatory elevation in the concentrations of beneficial fatty acids, specifically C18:1, C18:2, and C18:3, which increased from approximately 18% to 30%, 14% to 26%, and 8% to 20%, respectively, in seed oil. Similarly, two single mutant lines of the PCR7 cultivar exhibited a reduction in seed C22:1 content to approximately one-third and one-half respectively, relative to the untransformed control PCR7 plants. Comparable results were observed in seed FA profiles of JD6 lines. Observations during the growth cycle, encompassing flowering and seed maturation, indicated no substantial developmental differences between the CRISPR-modified and control plants. Upon reaching maturity, the KO lines displayed plant morphology and mature seed size akin to that of untransformed controls. Comprehensive evaluations of essential agronomic characteristics, including plant height, branch count, inflorescence length, silique count and length, thousand-seed weight, and seed germination rate, revealed no significant changes in the single or double mutant lines relative to the untransformed control cultivars [21].  

This study clearly exhibits that the CRISPR-Cas9 mechanism of gene editing showed the desired reduction of erucic acid in the knockout plants without hampering the normal growth and development of the plant. [Note: A simplified figure is shown in the simulation tab].


<div>
<img src="./images/Procedure Flowchart image.png" style="max-width:100%; height:auto;">
<p>A schematic flowchart of all the necessary steps in a gene editing experiment by CRISPR-Cas9 technology</p>
</div>