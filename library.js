const documents = [
    // MICROGRAVITY (MG1-MG7)
    { 
        id: 1,
        filename: "MG1.pdf",
        title: "Microgravity Induces Pelvic Bone Loss through Osteoclastic Activity, Osteocytic Osteolysis, and Osteoblastic Cell Cycle Inhibition by CDKN1a/p21",
        authors: "Elizabeth A. Blaber, Natalya Dvorochkin, Chialing Lee",
        abstract: "This study investigates the effects of microgravity on the pelvic and femoral region of the mouse skeleton. It identifies rapid bone loss not just from osteoclastic degradation, but also from osteocytic osteolysis and osteogenic cell cycle arrest.",
        keywords: ["Microgravity", "Bone Loss", "Osteoclasts"],
        tags: ["bone", "microgravity"],
        year: "2013",
        pages: 15,
        journal: "NASA Open Data"
    },
    { 
        id: 2,
        filename: "MG2.pdf",
        title: "Mice in Bion-M 1 Space Mission: Training and Selection",
        authors: "Alexander Andreev-Andrievskiy, Anfisa Popova, Richard Boyle",
        abstract: "This paper provides an overview of the scientific goals, experimental design, and mouse training/selection program for the Bion-M 1 space mission. The aim was to elucidate cellular and molecular mechanisms underlying adaptation to long-term microgravity exposure.",
        keywords: ["Bion-M 1", "Space Mission", "Microgravity"],
        tags: ["mice", "microgravity"],
        year: "2014",
        pages: 18,
        journal: "NASA Open Data"
    },
    { 
        id: 3,
        filename: "MG3.pdf",
        title: "Spaceflight Modulates the Expression of Key Oxidative Stress and Cell Cycle Related Genes in Heart",
        authors: "Akhilesh Kumar, Candice G. T. Tahimic, Eduardo A. C. Almeida",
        abstract: "This study tested the hypothesis that spaceflight alters the expression of key genes related to stress response pathways. These changes may contribute to cardiovascular deconditioning during extended spaceflight.",
        keywords: ["spaceflight", "microgravity", "heart"],
        tags: ["heart", "microgravity"],
        year: "2021",
        pages: 16,
        journal: "NASA Open Data"
    },
    { 
        id: 4,
        filename: "MG4.pdf",
        title: "Prolonged Exposure to Microgravity Reduces Cardiac Contractility and Initiates Remodeling in Drosophila",
        authors: "Stanley Walls, Soda Diop, Ryan Birse",
        abstract: "This study uses Drosophila to examine the effects of microgravity on heart structure and function. Flies reared in microgravity show cardiac constriction, myofibrillar remodeling, and diminished output.",
        keywords: ["Microgravity", "Cardiac Contractility", "Drosophila"],
        tags: ["heart", "microgravity"],
        year: "2020",
        pages: 16,
        journal: "NASA Open Data"
    },
    { 
        id: 5,
        filename: "MG5.pdf",
        title: "Microgravity and Cellular Biology: Insights into Cellular Responses and Implications for Human Health",
        authors: "Nelson Adolfo López Garzón, María Virginia Pinzón-Fernández, Jhan S. Saavedra T.",
        abstract: "This review examines the effects of microgravity on biological processes and their implications for human health. Microgravity impacts the immune system, cancer biology, and tissue regeneration, and induces changes in hepatic metabolism, endothelial function, and bone mechanotransduction.",
        keywords: ["microgravity", "tissue regeneration", "cancer biology"],
        tags: ["microgravity", "cell biology"],
        year: "2025",
        pages: 23,
        journal: "NASA Open Data"
    },
    { 
        id: 6,
        filename: "MG6.pdf",
        title: "Selective Proliferation of Highly Functional Adipose-Derived Stem Cells in Microgravity Culture with Stirred Microspheres",
        authors: "Takanobu Mashiko, Koji Kanayama, Natsumi Saito",
        abstract: "This study examines the therapeutic effects of adult stem-cell transplantations, which are limited by poor cell-retention in target organs. The potential for optimal cell differentiation is also reduced compared to embryonic stem cells.",
        keywords: ["Adipose-Derived Stem Cells", "Microgravity", "Microspheres"],
        tags: ["stem cells", "microgravity"],
        year: "2021",
        pages: 18,
        journal: "NASA Open Data"
    },
    { 
        id: 7,
        filename: "MG7.pdf",
        title: "Microgravity validation of a novel system for RNA isolation and multiplex quantitative real time PCR analysis of gene expression on the International Space Station",
        authors: "Macarena Parra, Jimmy Jung, Travis D. Boone",
        abstract: "This paper describes the validation of a novel system for RNA isolation and multiplex quantitative real time PCR analysis. The goal is to enable gene expression analysis on the International Space Station.",
        keywords: ["Microgravity", "RNA isolation", "gene expression"],
        tags: ["microgravity", "genetics"],
        year: "2017",
        pages: 20,
        journal: "NASA Open Data"
    },

    // COSMIC RADIATION (CR1-CR7)
    { 
        id: 8, 
        filename: "CR1.pdf",
        title: "Cosmic Radiation Impact on Gene Expression in Arabidopsis", 
        authors: "Megan M. Pendleton, Shannon R. Emerzian, Jennifer Liu, Simon Y. Tang, Grace D. O'Connell, Joshua S. Alwood, Tony M. Keaveny",
        abstract: "Analysis of plant gene expression patterns reveals adaptive responses to cosmic radiation exposure during orbital experiments. This research has implications for sustainable food production in space habitats.",
        keywords: ["cosmic radiation", "gene expression", "plants", "space agriculture"],
        tags: ["radiation", "plants"], 
        year: "2024",
        pages: 43,
        journal: "NASA Open Data"
    },
    { 
        id: 9, 
        filename: "CR2.pdf",
        title: "Radiation Shielding Effects on Biological Systems", 
        authors: "Yared H. Kidane, Franklin H. Lee, Matthew F. Smith, Chunbo Wang, Jacqueline Barbera Mirza, Saachi Sharma, Alejandro A. Lobo, Krish C. Dewan, Jengwei Chen, Thomas E. Diaz, Michelle Mendiola Pla, Matthew W. Foster, Dawn E. Bowles",
        abstract: "Evaluating the effectiveness of various shielding materials in protecting biological specimens from cosmic radiation. Novel composite materials show promise for future deep space missions.",
        keywords: ["radiation shielding", "protection", "materials science"],
        tags: ["radiation"], 
        year: "2023",
        pages: 55,
        journal: "NASA Open Data"
    },
    { 
        id: 10, 
        filename: "CR3.pdf",
        title: "Genetic Mutations Induced by Space Radiation Exposure", 
        authors: "Adrian Perdyan, Ma, Jakub Mieczkowski, Jakalski, Monika Horbacz, Afshin Beheshti",
        abstract: "Comprehensive analysis of mutation rates and types in organisms exposed to cosmic radiation. Long-term genetic monitoring reveals concerning mutation patterns.",
        keywords: ["genetic mutations", "radiation exposure", "DNA damage"],
        tags: ["dna", "radiation"], 
        year: "2023",
        pages: 62,
        journal: "NASA Open Data"
    },
    { 
        id: 11, 
        filename: "CR4.pdf",
        title: "Radiation Dosimetry on Deep Space Missions", 
        authors: "Victor Missirian, Phillip A. Conklin, Kevin M. Culligan, Neil D. Huefner, Anne B. Britt",
        abstract: "Modeling radiation exposure levels for future Mars and lunar surface missions. Advanced dosimetry techniques provide crucial data for mission planning and crew safety.",
        keywords: ["radiation dosimetry", "Mars missions", "crew safety"],
        tags: ["radiation"], 
        year: "2024",
        pages: 48,
        journal: "NASA Open Data"
    },
    { 
        id: 12, 
        filename: "CR5.pdf",
        title: "Space Radiation Effects on Eye Health", 
        authors: "J. Tyson McDonald, Robert Stainforth, Jack Miller, Thomas Cahill, Willian A. da Silveira, Komal S. Rathi, Gary Hardiman, Deanne Taylor, Sylvain V Costes, Vinita Chauhan, Robert Meller, Afshin Beheshti",
        abstract: "Study of vision changes and retinal damage in astronauts exposed to cosmic radiation. Long-term ophthalmological monitoring reveals progressive damage patterns.",
        keywords: ["eye health", "vision changes", "retinal damage", "radiation"],
        tags: ["radiation"], 
        year: "2024",
        pages: 40,
        journal: "NASA Open Data"
    },
    { 
        id: 13, 
        filename: "CR6.pdf",
        title: "Radiation-Induced Cataracts in Space Travelers", 
        authors: "J. Tyson McDonald, JangKeun Kim, Lily Farmerie, Meghan L. Johnson, Nidia S. Trovao, Shehbeel Arif, Keith Siew, Sergey Tsoy, Yaron Bram, Jiwoon Park, Eliah Overbey, Krista Ryon, Jeffrey Halton, Urminder Singh, Francisco J. Enguita, Victoria Zaksas, Joseph W. Guarnieri, Michael Topper, Douglas C. Wallace, Cem Meydan, Stephen Baylin, Robert Meller, Masafumi Muratani, D. Marshall Porterfield, Brett Kaufman, Marcelo A. Mori, Stephen B. Walsh, Dominique Sigaudo-Roussel, Saida Mebarek, Massimo Bottini, Christophe A. Marquette, Eve Syrkin Wurtele, Robert E. Schwartz, Diego Galeano, Christopher E. Mason, Peter Grabham, Afshin Beheshti",
        abstract: "Long-term ophthalmological outcomes in astronauts with high radiation exposure. Preventive strategies and treatment protocols are evaluated.",
        keywords: ["cataracts", "radiation damage", "eye disease"],
        tags: ["radiation"], 
        year: "2023",
        pages: 34,
        journal: "NASA Open Data"
    },
    { 
        id: 14, 
        filename: "CR7.pdf",
        title: "Radiation Damage to Central Nervous System", 
        authors: "Afshin Beheshti, J. Tyson McDonald, Jack Miller, Peter Grabham, Sylvain V. Costes",
        abstract: "Neurological risks from galactic cosmic rays during interplanetary missions. Advanced imaging reveals structural changes in brain tissue following radiation exposure.",
        keywords: ["CNS damage", "neurological risks", "galactic cosmic rays"],
        tags: ["radiation"], 
        year: "2024",
        pages: 58,
        journal: "NASA Open Data"
    },

    // DNA (DNA1-DNA6)
    { 
        id: 15, 
        filename: "DNA1.pdf",
        title: "Data for characterization of SALK_084889, a T-DNA insertion line of Arabidopsis thaliana", 
        authors: "Mingqi Zhou, Anna-Lisa Paula, Robert J. Ferl",
        abstract: "In this article we report the identification of T-DNA (transfer DNA) insertion sites within two different gene regions in the genome of an Arabidopsis mutant line, SALK_084889.",
        keywords: ["Arabidopsis", "DREB2A", "LOX1", "SALK_084889", "T-DNA"],
        tags: ["dna", "microgravity"], 
        year: "2017",
        pages: 6,
        journal: "NASA Open Data"
    },
    { 
        id: 16, 
        filename: "DNA2.pdf",
        title: "Genome and clonal hematopoiesis stability contrasts with immune, cfDNA, mitochondrial, and telomere length changes during short duration spaceflight", 
        authors: "J. Sebastian Garcia-Medina, Karolina Sienkiewicz, S. Anand Narayanan, Eliah G. Overbey, Kirill Grigorev, Krista A. Ryon, Marissa Burke, Jacqueline Proszynski, Braden Tierney, Caleb M. Schmidt, Nuria Mencia-Trinchant, Remi Klotz, Veronica Ortiz, Jonathan Foox, Christopher Chin, Deena Najjar, Irina Matei, Irenaeus Chan, Carlos Cruchaga, Ashley Kleinman, JangKeun Kim, Alexander Lucaci, Conor Loy, Omary Mzava, Iwijn De Vlaminck, Anvita Singaraju, Lynn E. Taylor, Julian C. Schmidt, Michael A. Schmidt, Kelly Blease, Juan Moreno, Andrew Boddicker, Junhua Zhao, Bryan Lajoie, Andrew Altomare, Semyon Kruglyak, Shawn Levy, Min Yu, Duane C. Hassane, Susan M. Bailey, Kelly Bolton, Jaime Mateus, Christopher E. Mason",
        abstract: "The Inspiration4 (14) mission, the first all-civilian orbital flight mission, investigated the physiological effects of short- duration spaceflight through a multi-omic approach. Despite advances, there remains much to learn about human adaptation to spaceflight's unique challenges, including microgravity, immune system perturbations, and radiation exposure.",
        keywords: ["clonal hematopoiesis", "cfDNA", "mitochondrial", "telomere length", "spaceflight"],
        tags: ["dna", "microgravity"], 
        year: "2024",
        pages: 13,
        journal: "NASA Open Data"
    },
    { 
        id: 17, 
        filename: "DNA3.pdf",
        title: "Spaceflight decelerates the epigenetic clock orchestrated with a global alteration in DNA methylome and transcriptome in the mouse retina", 
        authors: "Zhong Chen, Seta Stanbouly, Nina C. Nishiyama, Xin Chen, Michael D. Delp, Hongyu Qiu, Xiao W. Mao, Charles Wang",
        abstract: "Astronauts exhibit an assortment of clinical abnormalities in their eyes during long-duration spaceflight. The purpose of this study was to determine whether spaceflight induces epigenomic and transcriptomic reprogram- ming in the retina or alters the epigenetic clock. The mice were flown for 37 days in animal enclosure modules on the International Space Station; ground-based control animals were maintained under similar housing con- ditions. Mouse retinas were isolated and both DNA methylome and transcriptome were determined by deep sequencing. We found that a large number of genes were differentially methylated with spaceflight, whereas there were fewer differentially expressed genes at the transcriptome level. Several biological pathways involved in retinal diseases such as macular degeneration were significantly altered. Our results indicated that space- flight decelerated the retinal epigenetic clock. This study demonstrates that spaceflight impacts the retina at the epigenomic and transcriptomic levels, and such changes could be involved in the etiology of eye-related disorders among astronauts.",
        keywords: ["spaceflight", "DNA methylome", "transcriptome", "epigenetic clock"],
        tags: ["dna", "radiation"], 
        year: "2021",
        pages: 16,
        journal: "NASA Open Data"
    },
    { 
        id: 18, 
        filename: "DNA4.pdf",
        title: "Effects of low-dose rate y-irradiation combined with simulated microgravity on markers of oxidative stress, DNA methylation potential, and remodeling in the mouse heart", 
        authors: "John W. Seawright, Yusra Samman, Vijayalakshmi Sridharan, Xiao Wen Mao, Maohua Cao, Preeti Singh, Stepan Melnyk, Igor Koturbash, Gregory A. Nelson, Martin Hauer-Jensen, Marjan Boerma",
        abstract: "Space travel is associated with an exposure to low-dose rate ionizing radiation and the microgravity environment, both of which may lead to impairments in cardiac function. We used a mouse model to determine short- and long-term cardiac effects to simulated micro- gravity (hindlimb unloading; HU), continuous low-dose rate y-irradiation, or a combination of HU and low-dose rate y-irradiation.",
        keywords: ["low-dose rate y-irradiation", "simulated microgravity", "oxidative stress", "DNA methylation", "mouse heart"],
        tags: ["dna"], 
        year: "2017",
        pages: 18,
        journal: "NASA Open Data"
    },
    { 
        id: 19, 
        filename: "DNA5.pdf",
        title: "Release of CD36-associated cell-free mitochondrial DNA and RNA as a hallmark of space environment response", 
        authors: "Nailil Husna, Tatsuya Aiba, Shin-Ichiro Fujita, Yoshika Saito, Dai Shiba, Takashi Kudo, Satoru Takahashi, Satoshi Furukawa & Masafumi Muratani",
        abstract: "A detailed understanding of how spaceflight affects human health is essential for long-term space exploration. Liquid biopsies allow for minimally-invasive multi-omics assessments that can resolve the molecular heterogeneity of internal tissues. Here, we report initial results from the JAXA Cell-Free Epi- genome Study, a liquid biopsy study with six astronauts who resided on the International Space Station (ISS) for more than 120 days. Analysis of plasma cell-free RNA (cfRNA) collected before, during, and after spaceflight confirms previously reported mitochondrial dysregulation in space. Screening with 361 cell surface marker antibodies identifies a mitochondrial DNA-enriched frac- tion associated with the scavenger receptor CD36. RNA-sequencing of the CD36 fraction reveals tissue-enriched RNA species, suggesting the plasma mitochondrial components originated from various tissues. We compare our plasma cfRNA data to mouse plasma cfRNA data from a previous JAXA mission, which had used on-board artificial gravity, and discover a link between microgravity and the observed mitochondrial responses.",
        keywords: ["cell-free DNA", "mitochondrial DNA", "space environment", "CD36"],
        tags: ["dna", "radiation"], 
        year: "2014",
        pages: 15,
        journal: "NASA Open Data"
    },
    { 
        id: 20, 
        filename: "DNA6.pdf",
        title: "Detection of Genes in Arabidopsis thaliana L. Responding to DNA Damage from Radiation and Other Stressors in Spaceflight", 
        authors: "Vidya Manian, Jairo Orozco-Sandoval, Victor Diaz-Martinez",
        abstract: "Ionizing radiation present in extraterrestrial environment is an important factor that affects plants grown in spaceflight. Pearson correlation-based gene regulatory network inferencing from transcriptional responses of the plant Arabidopsis thaliana L. grown in real and simulated spaceflight conditions acquired by GeneLab, followed by topological and spectral analysis of the networks is performed. Gene regulatory subnetworks are extracted for DNA damage response processes. Analysis of radiation-induced ATR/ATM protein-protein interactions in Arabidopsis reveals interaction profile similarities under low radiation doses suggesting novel mechanisms of DNA damage response involving non-radiation-induced genes regulating other stress responses in spaceflight.",
        keywords: ["ionizing radiation", "topological and algebraic"],
        tags: ["plants", "dna"], 
        year: "2021",
        pages: 20,
        journal: "NASA Open Data"
    },
    
    // MUSCLE LOSS (muscle1-muscle6)
    { 
        id: 21, 
        filename: "muscle1.pdf",
        title: "Simulated Microgravity Induces Regionally Distinct Neurovascularand Structural Remodeling ofSkeletal Muscle and Cutaneous Arteries in the Rat", 
        authors: "Olga L. Vinogradova, Dr. Angela Scott, Dr. Patrick Rivera",
        abstract: "Comprehensive proteomics study examining muscle protein degradation mechanisms in astronauts. Identification of key biomarkers for muscle atrophy prediction.",
        keywords: ["rat", "Neurovascularand"],
        tags: ["muscle"], 
        year: "2020",
        pages: 12,
        journal: "NASA Open Data"
    },
    { 
        id: 22,
        filename: "muscle2.pdf",
        title: "Impact of Spaceflight and Artificial Gravity on the Mouse Retina: Biochemical and Proteomic Analysis",
        authors: "Xiao W. Mao, Stephanie Byrum, Nina C. Nishiyama",
        abstract: "This study investigates the impact of spaceflight and artificial gravity on the mouse retina through biochemical and proteomic analysis. The findings provide insights into the molecular mechanisms underlying spaceflight-induced ocular changes.",
        keywords: ["Spaceflight", "Artificial Gravity", "Mouse Retina"],
        tags: ["muscle"],
        year: "2018",
        pages: 15,
        journal: "NASA Open Data"
    },
    { 
        id: 23,
        filename: "muscle3.pdf",
        title: "Toward countering muscle and bone loss with spaceflight: GSK3 as a potential target",
        authors: "Ryan W. Baranowski, Jessica L. Braun, Briana L. Hockey",
        abstract: "This study examines the effects of spaceflight on GSK3 content in murine muscle and bone. It demonstrates that muscle-specific Gsk3 knockdown increased muscle mass, preserved muscle strength, and increased bone mineral density in response to hindlimb unloading.",
        keywords: ["spaceflight", "muscle loss", "bone loss"],
        tags: ["muscle", "bone"],
        year: "2023",
        pages: 17,
        journal: "NASA Open Data"
    },
    { 
        id: 24,
        filename: "muscle4.pdf",
        title: "Spaceflight and hind limb unloading induce similar changes in electrical impedance characteristics of mouse gastrocnemius muscle",
        authors: "M. Sung, J. Li, A.J. Spieker",
        abstract: "This study assesses the potential of electrical impedance myography (EIM) as a marker for muscle fiber atrophy and bone deterioration due to spaceflight or hind limb unloading. The data supports EIM as a useful tool for assessing muscle disuse from immobilization or microgravity.",
        keywords: ["Muscle", "Spaceflight", "Hind Limb Unloading"],
        tags: ["muscle"],
        year: "2013",
        pages: 15,
        journal: "NASA Open Data"
    },
    { 
        id: 25,
        filename: "muscle5.pdf",
        title: "Partial Reductions in Mechanical Loading Yield Proportional Changes in Bone Density, Bone Architecture, and Muscle Mass",
        authors: "Rachel Ellman, Jordan Spatz, Alison Cloutier",
        abstract: "This study investigates bone and muscle adaptation to a range of reduced loading using a partial weight suspension (PWS) system. The goal is to better define the relationship between functional adaptation and below-normal mechanical stimuli.",
        keywords: ["Mechanical Loading", "Disuse", "Mechanostat"],
        tags: ["muscle", "bone"],
        year: "2013",
        pages: 11,
        journal: "NASA Open Data"
    },
    { 
        id: 26,
        filename: "muscle6.pdf",
        title: "Absence of y-sarcoglycan alters the response of p70S6 kinase to mechanical perturbation in murine skeletal muscle",
        authors: "Catherine Moorwood, Anastassios Philippou, Janelle Spinazzola",
        abstract: "This study examines mechanotransduction in the presence and absence of y-sarcoglycan to determine whether its loss alters additional signaling pathways. The findings suggest that y-sarcoglycan is an important component of mechanotransduction and its loss uncouples the response of p70S6K to stretch.",
        keywords: ["Sarcoglycan", "Sarcoglycanopathies", "Limb girdle muscular dystrophy"],
        tags: ["muscle"],
        year: "2014",
        pages: 13,
        journal: "NASA Open Data"
    },

    // BONE DENSITY (bd1-bd6)
    { 
        id: 27, 
        filename: "bd1.pdf",
        title: "Bone Mineral Density: Clinical Relevance and Quantitative Assessment", 
        authors: "Katherine N. Haseltine, Tariq Chukir, Pinar J. Smith, Justin T Jacob, John P Bilezikian, Azeez Farooki",
        abstract: "Longitudinal study of bone mineral density in crew members during 6-12 month ISS missions. Progressive bone loss documented with advanced DEXA scanning.",
        keywords: ["bone density", "BMD", "osteoporosis"],
        tags: ["bone"], 
        year: "2021",
        pages: 9,
        journal: "NASA Open Data"
    },
    { 
        id: 28, 
        filename: "bd2.pdf",
        title: "Dose- and Ion-Dependent Effects in the Oxidative Stress Response to Space-Like Radiation Exposure in the Skeletal System", 
        authors: "Joshua S. Alwood, Luan H. Tran, Ann-Sofie Schreurs, Yasaman Shirazi-Fard, Akhilesh Kumar, Diane Hilton, Candice G. T. Tahimic, Ruth K. Globus",
        abstract: "Space radiation may pose a risk to skeletal health during subsequent aging. We hypothesized that ionizing radiation impairs osteoblastogenesis in an ion-type specific manner, with low doses capable of modulating expression of redox-related genes. We conclude that high-LET irradiation at 200 cGy impaired osteoblastogenesis and regulated steady-state gene expression of select redox-related genes during osteoblastogenesis, which may contribute to persistent bone loss.",
        keywords: ["cancellous bone", "osteoblast", "ionizing radiation", "spaceflight", "oxidative stress"],
        tags: ["bone"], 
        year: "2014",
        pages: 15,
        journal: "NASA Open Data"
    },
    { 
        id: 29, 
        filename: "bd3.pdf",
        title: "High-precision method for cyclic loading of small-animal vertebrae to assess bone quality", 
        authors: "Megan M. Pendleton, Saghi Sadoughi, Alfred Li, Grace D. O'Connell, Joshua S. Alwood, Tony M. Keaveny",
        abstract: "One potentially important bone quality characteristic is the response of bone to cyclic (repetitive) mechanical loading. In small animals, such as in rats and mice, cyclic loading experiments are particularly challenging. Addressing this issue, we developed a precise method for ex vivo cyclic compressive loading of isolated mouse vertebral bodies. The improved precision for this new method for biomechanical testing of small-animal vertebrae may help elucidate aspects of bone quality.",
        keywords: ["Fatigue", "Bone mechanics", "Mouse", "Vertebrae","Bone quality"],
        tags: ["bone"], 
        year: "2018",
        pages: 8,
        journal: "NASA Open Data"
    },
    { 
        id: 30, 
        filename: "bd4.pdf",
        title: "Effects of ex vivo Ionizing Radiation on Collagen Structure and Whole-Bone Mechanical Properties of Mouse Vertebrae", 
        authors: "Megan M. Pendleton, Shannon R. Emerzian, Jennifer Liu, Simon Y. Tang, Grace D. O'Connell, Joshua S. Alwood, Tony M. Keaveny",
        abstract: "Bone can become brittle when exposed to ionizing radiation. While irradiation-induced embrittlement has been attributed to changes in the collagen molecular structure, the relative role of collagen fragmentation versus non-enzymatic collagen crosslinking remains unclear. We conclude that the reductions in bone compressive monotonic strength and fatigue life due to ex vivo ionizing radiation are more likely caused by fragmentation of the collagen backbone than any increases in non-enzymatic collagen crosslinks.",
        keywords: ["ionizing radiation",
            "bone strength",
            "fatigue",
            "collagen",
            "sterilization",
            "bone-graft"],
        tags: ["bone"], 
        year: "2019",
        pages: 19,
        journal: "NASA Open Data"
    },
    { 
        id: 31, 
        filename: "bd5.pdf",
        title: "Impact of microgravity and lunar gravity on murine skeletal and immune systems during space travel", 
        authors: "Yui Okamura, Kei Gochi, Tatsuya Ishikawa, Takuto Hayashi, Sayaka Fuseya, Riku Suzuki, Maho Kanai, Yuri Inoue, Yuka Murakami, Shunya Sadaki, Hyojung Jeon, Mio Hayama, Hiroto Ishii, Yuki Tsunakawa, Hiroki Ochi, Shingo Sato, Michito Hamada, Chikara Abe, Hironobu Morita, Risa Okada, Dai Shiba, Masafumi Muratani, Masahiro Shinohara, Taishin Akiyama, Takashi Kudo, Satoru Takahashi",
        abstract: "Long-duration spaceflight creates a variety of stresses due to the unique environment, which can lead to compromised functioning of the skeletal and immune systems. The present study aimed to investigate the impact of three different gravitational loadings (microgravity, 1/6 g [lunar gravity], and 1 g) on the behavior, bone, thymus, and spleen of mice housed for 25-35 days in the International Space Station. This study highlighted organ-specific variations in responsiveness to gravity, serving as an animal test for establishing a molecular-level gravity threshold for maintaining a healthy state during future spaceflight.",
        keywords: ["Spaceflight",
            "Microgravity",
            "Thymus",
            "Spleen",
            "Bone",
            "Gene expression"],
        tags: ["bone"], 
        year: "2024",
        pages: 14,
        journal: "NASA Open Data"
    },
    { 
        id: 32, 
        filename: "bd6.pdf",
        title: "37-Day microgravity exposure in 16-Week female mice is associated with bone loss specific to weight-bearing skeletal sites", 
        authors: "Rukmani Cahill, Elizabeth A. Blaber, Cassandra M. Juran, Margareth Cheng-Campbell, Joshua S. Alwood, Yasaman Shirazi-Fard, Eduardo A. C. Almeida",
        abstract: "Exposure to weightlessness in microgravity and elevated space radiation are associated with rapid bone loss in mammals, but questions remain about their mechanisms of action and relative importance. In this study, we tested the hypothesis that bone loss during spaceflight in Low Earth Orbit is primarily associated with site-specific microgravity unloading of weight-bearing sites in the skeleton. Our results indicate that in female mice approaching skeletal maturity, mechanical unloading of weight-bearing sites is the major cause of bone loss in microgravity, while sites loaded predominantly by muscle activity, such as the spine, appear unaffected.",
        keywords: ["microgravity", "bone loss", "weight-bearing", "spaceflight", "skeletal unloading" ],
        tags: ["bone", "microgravity"], 
        year: "2025",
        pages: 22,
        journal: "NASA Open Data"
    },

    // PLANT BIOLOGY (PB1-PB7)
    { 
        id: 33,
        filename: "PB1.pdf",
        title: "NADPH Oxidase activity is required for ER stress survival in plants",
        authors: "Evan Angelos, Federica Brandizzi",
        abstract: "This study investigates the relationship between the unfolded protein response (UPR) and reactive oxygen species (ROS) during endoplasmic reticulum (ER) stress in plants. It shows that specific NADPH oxidases are essential for ROS production and play a cytoprotective role, which is necessary for survival from this stress.",
        keywords: ["Unfolded protein response", "ER stress", "reactive oxygen species"],
        tags: ["plant biology", "ER stress"],
        year: "2018",
        pages: 15,
        journal: "NASA Open Data"
    },
    { 
        id: 34,
        filename: "PB2.pdf",
        title: "Maintaining the Factory: The Roles of the Unfolded Protein Response in Cellular Homeostasis in Plants",
        authors: "Evan Angelos, Cristina Ruberti, Sang-Jin Kim",
        abstract: "This review discusses the importance of the unfolded protein response (UPR) in plant life. The UPR's regulators and effectors have distinct roles in cell processes affecting growth, development, and stress responses.",
        keywords: ["Unfolded protein response", "ER stress", "IRE1"],
        tags: ["plant biology", "ER stress"],
        year: "2017",
        pages: 12,
        journal: "NASA Open Data"
    },
    { 
        id: 35,
        filename: "PB3.pdf",
        title: "Pectin Methylesterification Impacts the Relationship between Photosynthesis and Plant Growth",
        authors: "Sarathi M. Weraduwage, Sang-Jin Kim, Luciana Renna",
        abstract: "This study analyzes Arabidopsis plants with altered levels of pectin methylesterification to understand its impact on cell wall plasticity and plant growth. The manipulation of CGR 2 or 3 genes, which encode pectin methyltransferases, was used to vary these levels.",
        keywords: ["Pectin", "Photosynthesis", "Plant Growth"],
        tags: ["plant biology", "photosynthesis"],
        year: "2016",
        pages: 16,
        journal: "NASA Open Data"
    },
    { 
        id: 36,
        filename: "PB4.pdf",
        title: "Vesicles versus Tubes: Is Endoplasmic Reticulum-Golgi Transport in Plants Fundamentally Different from Other Eukaryotes?",
        authors: "David G. Robinson, Federica Brandizzi, Chris Hawes",
        abstract: "This article explores the controversy surrounding ER-Golgi transport in higher plants, specifically whether it occurs via vesicles or direct tubular connections. Four leading cell biologists present their divergent and often opposing opinions on the matter.",
        keywords: ["ER-Golgi Transport", "Vesicles", "Tubules"],
        tags: ["plant biology", "cell biology"],
        year: "2015",
        pages: 14,
        journal: "NASA Open Data"
    },
    { 
        id: 37,
        filename: "PB5.pdf",
        title: "Unfolded protein response in plants: one master, many questions",
        authors: "Cristina Ruberti, Sang-Jin Kim, Giovanni Stefano",
        abstract: "This paper discusses recent discoveries in the plant unfolded protein response (UPR). It highlights both conserved and unique features of the plant UPR and points out critical, unanswered questions in the field.",
        keywords: ["Unfolded protein response", "ER stress", "IRE1"],
        tags: ["plant biology", "ER stress"],
        year: "2015",
        pages: 14,
        journal: "NASA Open Data"
    },
    { 
        id: 38,
        filename: "PB6.pdf",
        title: "Bundling up the Role of the Actin Cytoskeleton in Primary Root Growth",
        authors: "Judith García-González, Kasper van Gelderen",
        abstract: "This review highlights the importance of the actin cytoskeleton during primary root growth. It describes how actin-binding proteins, plant hormones, and other factors affect root growth and actin.",
        keywords: ["actin", "root growth", "cell elongation"],
        tags: ["plant biology", "cell biology"],
        year: "2021",
        pages: 14,
        journal: "NASA Open Data"
    },
    { 
        id: 39, 
        filename: "PB7.pdf",
        title: "Hydroponic Systems for Extraterrestrial Agriculture", 
        authors: "Dr. Ruby Sanders, Dr. Fred Kelly",
        abstract: "Engineering advanced hydroponic systems for planetary habitats. Water recycling and nutrient delivery optimization for space farming.",
        keywords: ["hydroponics", "water recycling", "agricultural engineering"],
        tags: ["plants"], 
        year: "2024",
        pages: 49,
        journal: "Agricultural Engineering Today"
    }
];

let filteredDocuments = [...documents];

document.addEventListener('DOMContentLoaded', () => {
    renderDocuments(filteredDocuments);
    setupFilters();
    setupSorting();
    setupMobileFilters();
});

function renderDocuments(docs) {
    const grid = document.getElementById('documentsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');

    if (docs.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        resultsCount.textContent = 'No documents found';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    resultsCount.textContent = `Showing ${docs.length} document${docs.length !== 1 ? 's' : ''}`;

    grid.innerHTML = docs.map(doc => `
        <div class="document-card">
            <div class="document-preview">📄</div>
            <div class="document-content">
                <div class="document-number">#${doc.id} — ${doc.filename}</div>
                <h3 class="document-title">${doc.title}</h3>
                <p class="document-snippet">${doc.abstract.substring(0, 120)}...</p>
                <div class="document-tags">
                    ${doc.tags.map(tag => `<span class="document-tag">${tag}</span>`).join('')}
                    <span class="document-tag">${doc.year}</span>
                </div>
                <a href="document-detail.html?id=${doc.id}" class="document-link">View Document →</a>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const filterInputs = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const clearBtn = document.getElementById('clearFilters');
    const searchInput = document.getElementById('searchInput'); 

    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    clearBtn.addEventListener('click', () => {
        filterInputs.forEach(input => input.checked = false);
        if (searchInput) searchInput.value = ''; 
        applyFilters();
    });
}

function applyFilters() {
    const topicFilters = Array.from(document.querySelectorAll('input[name="topic"]:checked')).map(el => el.value);
    const yearFilters = Array.from(document.querySelectorAll('input[name="year"]:checked')).map(el => el.value);
    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';

    filteredDocuments = documents.filter(doc => {
        // Topic filter
        const matchesTopic = topicFilters.length === 0 || topicFilters.some(topic => doc.tags.includes(topic));
        
        // Year filter with "before 2022" support
        let matchesYear = yearFilters.length === 0;
        if (!matchesYear) {
            matchesYear = yearFilters.some(yearFilter => {
                if (yearFilter === 'before-2022') {
                    return parseInt(doc.year) < 2022;
                }
                return doc.year === yearFilter;
            });
        }
        
        // Search filter (title, authors, keywords, abstract)
        const matchesSearch = searchQuery === '' || 
            doc.title.toLowerCase().includes(searchQuery) ||
            doc.authors.toLowerCase().includes(searchQuery) ||
            doc.abstract.toLowerCase().includes(searchQuery) ||
            doc.keywords.some(kw => kw.toLowerCase().includes(searchQuery));
        
        return matchesTopic && matchesYear && matchesSearch;
    });

    renderDocuments(filteredDocuments);
}

function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');

    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        let sorted = [...filteredDocuments];

        switch (sortBy) {
            case 'newest':
                sorted.sort((a, b) => b.year.localeCompare(a.year));
                break;
            case 'oldest':
                sorted.sort((a, b) => a.year.localeCompare(b.year));
                break;
            case 'title':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'relevance':
                sorted.sort((a, b) => a.id - b.id);
                break;
        }

        renderDocuments(sorted);
    });
}

function setupMobileFilters() {
    const filterToggle = document.getElementById('filterToggle');
    const sidebar = document.getElementById('filtersSidebar');

    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!filterToggle.contains(e.target) && !sidebar.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }
}

// Export documents for use in document-detail.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { documents };
}