const QUESTIONS = [
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A 20-day-old infant has poor feeding, hypothermia, and lethargy. Which feature most strongly changes the urgency of the evaluation?",
    "options": {
      "A": "The low temperature is reassuring because young infants often have weak fever responses",
      "B": "The combination of poor feeding, lethargy, and abnormal temperature suggests possible invasive bacterial infection",
      "C": "The infant should be observed at home because there is no cough or rash on examination",
      "D": "A urine test alone can safely exclude bloodstream and central nervous system infection"
    },
    "answer": "B",
    "explanation": "Young infants often do not mount a high fever, so a low temperature can be abnormal. Poor feeding and lethargy are signs of possible sepsis or meningitis. Absence of cough and rash does not exclude invasive disease, and urine testing cannot exclude infection in blood or cerebrospinal fluid.",
    "id": 1
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A child has recurrent infections. Which finding suggests a primary immune defect rather than repeated routine childhood illness?",
    "options": {
      "A": "Frequent colds in a toddler who attends group child care and recovers normally",
      "B": "Several episodes of otitis media during the first two years of life",
      "C": "Repeated severe infections with an unusual organism or poor response to appropriate treatment",
      "D": "A single episode of pneumonia in an otherwise healthy school-age child"
    },
    "answer": "C",
    "explanation": "Group child care and early childhood otitis media are common exposures rather than proof of immune deficiency. One pneumonia in a healthy older child may also be routine. Concerning immune deficiency is suggested by severity, unusual organisms, complications, family history, and poor response to treatment.",
    "id": 2
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A child with a ventriculoperitoneal shunt develops fever and headache. Why is shunt infection considered even when the neck is supple?",
    "options": {
      "A": "The shunt creates a protected surface that can support infection and obstruct cerebrospinal fluid flow",
      "B": "A supple neck proves that infection cannot involve the shunt or the ventricular system",
      "C": "Shunt infections always cause a visible rash around the abdominal catheter",
      "D": "Cerebrospinal fluid infection never produces headache in a child with a shunt"
    },
    "answer": "A",
    "explanation": "Devices provide a surface where organisms can form biofilm and persist. A supple neck does not exclude shunt infection or ventriculitis. A rash is not required, and headache is a common symptom when shunt function or cerebrospinal fluid inflammation is abnormal.",
    "id": 3
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "Acute otitis media is inflammation of the middle ear with fluid and signs of acute infection.",
      "B": "Small frequent feeds may help; a child who cannot feed safely may need nasogastric or intravenous fluids.",
      "C": "A child who is eligible for passive prevention should have the schedule coordinated with the specialty team.",
      "D": "Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body."
    },
    "answer": "D",
    "explanation": "The chapter states: Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body.",
    "id": 4
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "Supportive care includes oxygen when indicated, fluids, nutrition, and fever comfort.",
      "B": "Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption.",
      "C": "This chapter provides the working model used throughout the book.",
      "D": "Many children can be managed with pain control and observation under a clear plan."
    },
    "answer": "C",
    "explanation": "The chapter states: This chapter provides the working model used throughout the book.",
    "id": 5
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "B": "Young infants have limited reserve for maintaining airway tone, feeding, blood glucose, and perfusion.",
      "C": "Bone and joint infections require prompt recognition because delay can damage growth, cartilage, and function.",
      "D": "The clinician must separate a surgical emergency from a condition that can be managed medically."
    },
    "answer": "B",
    "explanation": "The chapter states: Young infants have limited reserve for maintaining airway tone, feeding, blood glucose, and perfusion.",
    "id": 6
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "B": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "C": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "D": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness."
    },
    "answer": "A",
    "explanation": "The chapter states: Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
    "id": 7
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "The clinician must identify the lesion, determine its source, and decide whether drainage is needed.",
      "B": "Fever, a new murmur, embolic findings, heart failure, or persistent bacteremia should prompt echocardiography and specialist review.",
      "C": "Eczema herpeticum causes clustered vesicles and erosions in areas of damaged skin and can spread rapidly.",
      "D": "Later in infancy and early childhood, immune memory expands through vaccines and natural exposure."
    },
    "answer": "D",
    "explanation": "The chapter states: Later in infancy and early childhood, immune memory expands through vaccines and natural exposure.",
    "id": 8
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "Necrotizing infection can follow surgery, trauma, varicella, or a deep wound and is a surgical emergency.",
      "B": "Surgery may be needed for severe valve dysfunction, large vegetations, persistent infection, or embolic complications.",
      "C": "The child becomes more capable of localizing infection and mounting a stronger inflammatory response.",
      "D": "Contrast-enhanced imaging is usually needed to characterize the lesion, its location, size, mass effect, and complications."
    },
    "answer": "C",
    "explanation": "The chapter states: The child becomes more capable of localizing infection and mounting a stronger inflammatory response.",
    "id": 9
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement is directly supported by the principles of pediatric infection and immune development chapter?",
    "options": {
      "A": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone.",
      "B": "Otitis media becomes common as the eustachian tube matures and children enter group care.",
      "C": "A child with fever, abnormal perfusion, altered mental status, or a device needs prompt cultures and treatment.",
      "D": "A child with rigid abdomen, shock, or rapid deterioration needs urgent resuscitation and surgical assessment."
    },
    "answer": "B",
    "explanation": "The chapter states: Otitis media becomes common as the eustachian tube matures and children enter group care.",
    "id": 10
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "A 2-month-old infant has a temperature of 38.1 degrees Celsius, is feeding poorly, and is less interactive than usual. What is the safest next step?",
    "options": {
      "A": "Reassure the family because the temperature is only mildly elevated and the child has no cough",
      "B": "Begin the local febrile infant pathway with urgent assessment, cultures, and treatment as indicated",
      "C": "Give an antipyretic and arrange a routine visit in one week if the fever continues",
      "D": "Obtain only a urine sample because meningitis and bacteremia are unlikely at this age"
    },
    "answer": "B",
    "explanation": "Young infants with fever can have serious bacterial infection without focal signs. A mildly elevated temperature and absence of cough do not make the child low risk. A urine test alone cannot exclude bloodstream or central nervous system infection, and delayed follow-up is unsafe for a child with poor feeding and reduced interaction.",
    "id": 11
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which finding in a febrile child is most concerning for impaired circulation?",
    "options": {
      "A": "Warm hands, normal capillary refill, and a playful response to a favorite toy",
      "B": "A temperature that falls after an appropriate dose of acetaminophen",
      "C": "Mottled skin, cool extremities, delayed capillary refill, and reduced alertness",
      "D": "A heart rate that increases while the child is crying and settles during sleep"
    },
    "answer": "C",
    "explanation": "Warm extremities, normal refill, and playful behavior suggest reasonable perfusion. A response to antipyretic does not prove the illness is benign. Mottled skin, cool limbs, delayed refill, and altered alertness are signs of poor perfusion that require urgent evaluation. Heart rate normally changes with crying and sleep.",
    "id": 12
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "A child returns from malaria-endemic travel with fever and fatigue. What history detail is most important for choosing urgent testing?",
    "options": {
      "A": "The exact destinations, dates, stopovers, protection measures, and possible mosquito exposure",
      "B": "Whether the child had a similar fever during a previous winter at home",
      "C": "The family's preferred brand of children's fever medicine and its flavor",
      "D": "Whether the child attends a school with a nurse available during the day"
    },
    "answer": "A",
    "explanation": "Malaria and other travel-associated infections are linked to place, date, incubation period, and specific exposures. A previous winter illness does not explain recent travel risk. Medicine brand and school staffing may affect care logistics but do not guide urgent testing for malaria or another imported infection.",
    "id": 13
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "Fever is a regulated rise in body temperature produced by the immune response.",
      "B": "A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter.",
      "C": "A child with bloody diarrhea, recent travel, or a household cluster may need investigation.",
      "D": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority."
    },
    "answer": "A",
    "explanation": "The chapter states: Fever is a regulated rise in body temperature produced by the immune response.",
    "id": 14
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "B": "Immune tests such as tuberculin skin testing or interferon-gamma release assays indicate infection, not necessarily active disease.",
      "C": "Bacteremia can occur with pneumonia, urinary infection, skin infection, bone infection, meningitis, or an abdominal source.",
      "D": "A child may shiver, seek warmth, and feel cool before the temperature rises."
    },
    "answer": "D",
    "explanation": "The chapter states: A child may shiver, seek warmth, and feel cool before the temperature rises.",
    "id": 15
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "The interpretation depends on age, immune status, prior antibiotics, traumatic tap, and clinical context.",
      "B": "Coagulase-negative staphylococci are common contaminants, but can cause true infection in a central line or prosthetic device.",
      "C": "When the set point falls, sweating and vasodilation help the child cool down.",
      "D": "Enlarged hilar or mediastinal lymph nodes, miliary patterns, consolidation, pleural disease, or cavitation may appear."
    },
    "answer": "C",
    "explanation": "The chapter states: When the set point falls, sweating and vasodilation help the child cool down.",
    "id": 16
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "Other organisms depend on age, vaccination, immune status, trauma, surgery, and exposure.",
      "B": "There is no single temperature at which every child requires antibiotics.",
      "C": "Epidural abscess may compress the spinal cord or brain and requires urgent neurosurgical assessment.",
      "D": "Marking the border helps detect spread, but the border can be difficult to see in darker skin."
    },
    "answer": "B",
    "explanation": "The chapter states: There is no single temperature at which every child requires antibiotics.",
    "id": 17
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "Rectal measurement is generally the most reliable in young infants when performed safely and according to policy.",
      "B": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "C": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "D": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa."
    },
    "answer": "A",
    "explanation": "The chapter states: Rectal measurement is generally the most reliable in young infants when performed safely and according to policy.",
    "id": 18
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "B": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "C": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness.",
      "D": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter."
    },
    "answer": "D",
    "explanation": "The chapter states: Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
    "id": 19
  },
  {
    "domain": "fever",
    "chapter": 2,
    "question": "Which statement is directly supported by the fever in infants and children chapter?",
    "options": {
      "A": "Eczema herpeticum causes clustered vesicles and erosions in areas of damaged skin and can spread rapidly.",
      "B": "A positive screening test should be confirmed and linked to care, not treated as an isolated result.",
      "C": "The height of the fever does not reliably separate viral from bacterial disease.",
      "D": "A child with a stable uncomplicated infection may transition to oral treatment once improving."
    },
    "answer": "C",
    "explanation": "The chapter states: The height of the fever does not reliably separate viral from bacterial disease.",
    "id": 20
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which question best shows diagnostic stewardship before a blood culture is obtained?",
    "options": {
      "A": "Will this culture change antibiotic selection, device management, or another important part of care?",
      "B": "Can the laboratory run every possible molecular test on the same blood sample at no extra cost?",
      "C": "Should the child receive a broad antibiotic before any culture so that no organism is missed?",
      "D": "Is the white blood cell count high enough that a culture no longer adds useful information?"
    },
    "answer": "A",
    "explanation": "A culture is useful when its result changes care and when it is obtained with enough volume and proper technique. Extra testing does not make a poor specimen valuable. Antibiotics should not be delayed dangerously, but cultures should be collected before treatment when feasible. A blood count cannot replace culture information.",
    "id": 21
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "A child with pneumonia is improving on antibiotics, but the blood culture identifies a susceptible organism that is covered by a narrower oral option. What is the best stewardship action?",
    "options": {
      "A": "Continue the broad intravenous regimen until all fever and cough have completely resolved",
      "B": "Review the source, clinical response, and options for narrow targeted oral therapy",
      "C": "Stop all antibiotics immediately because the culture confirms the diagnosis is resolved",
      "D": "Add a second broad antibiotic to cover organisms that the culture did not grow"
    },
    "answer": "B",
    "explanation": "Culture information should be used to narrow therapy when the child is stable and source control is adequate. Continuing a broad regimen unnecessarily increases harm. Stopping treatment immediately is not appropriate for a bacterial infection that still needs therapy. Adding coverage for organisms not implicated by the culture usually broadens without benefit.",
    "id": 22
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "A febrile child with a swollen joint is being evaluated. Why is joint aspiration more useful than delaying to see whether the pain improves?",
    "options": {
      "A": "Aspiration excludes all noninfectious causes and makes further clinical monitoring unnecessary",
      "B": "Aspiration can identify the pathogen and relieve pressure while septic arthritis remains an urgent possibility",
      "C": "Delay is safe because transient synovitis and septic arthritis have no overlap in presentation",
      "D": "Imaging alone can reliably distinguish infection from inflammation without examining joint fluid"
    },
    "answer": "B",
    "explanation": "Joint fluid can provide a pathogen and supports source control. It does not exclude every noninfectious disease, and monitoring remains necessary. Transient synovitis can overlap with infection, especially after a viral illness. Imaging helps show fluid and complications but cannot reliably replace fluid examination.",
    "id": 23
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "Brain abscess often requires a combination of antimicrobial therapy and drainage or excision.",
      "B": "The diagnostic process begins with a concise problem representation.",
      "C": "A positive test must be interpreted with age, immune status, vaccination history, exposure, and imaging.",
      "D": "Meningococcal disease can progress from fever to shock within hours."
    },
    "answer": "B",
    "explanation": "The chapter states: The diagnostic process begins with a concise problem representation.",
    "id": 24
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "B": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
      "C": "A blood count, liver tests, blood cultures, malaria smears, and targeted serology or molecular tests may be appropriate.",
      "D": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement."
    },
    "answer": "A",
    "explanation": "The chapter states: Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
    "id": 25
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "B": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "C": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "D": "A strong problem representation includes what is known, what is uncertain, and what would change the plan."
    },
    "answer": "D",
    "explanation": "The chapter states: A strong problem representation includes what is known, what is uncertain, and what would change the plan.",
    "id": 26
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "Asymptomatic bacteriuria is a positive culture without a urinary syndrome and generally should not be treated.",
      "B": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "C": "A test that does not help answer the central syndrome should justify its own place.",
      "D": "Bacteremia can occur with pneumonia, urinary infection, skin infection, bone infection, meningitis, or an abdominal source."
    },
    "answer": "C",
    "explanation": "The chapter states: A test that does not help answer the central syndrome should justify its own place.",
    "id": 27
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "During delivery, the newborn can be exposed to maternal blood, genital secretions, and other fluids.",
      "B": "A child with a swollen joint may have transient synovitis, septic arthritis, or osteomyelitis.",
      "C": "Other organisms may suggest anatomic obstruction, voiding dysfunction, a device, sexual exposure, or a resistant organism.",
      "D": "Oral rehydration solution is the preferred treatment for mild to moderate dehydration when the child can drink."
    },
    "answer": "B",
    "explanation": "The chapter states: A child with a swollen joint may have transient synovitis, septic arthritis, or osteomyelitis.",
    "id": 28
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "Missing septic arthritis can destroy the joint, so the dangerous diagnosis drives the tempo of evaluation.",
      "B": "Immunocompromised children may not mount fever, and a normal white blood cell count can be falsely reassuring.",
      "C": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
      "D": "A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly."
    },
    "answer": "A",
    "explanation": "The chapter states: Missing septic arthritis can destroy the joint, so the dangerous diagnosis drives the tempo of evaluation.",
    "id": 29
  },
  {
    "domain": "diagnostic_reasoning",
    "chapter": 3,
    "question": "Which statement is directly supported by the clinical reasoning and diagnostic stewardship chapter?",
    "options": {
      "A": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "B": "Fungi are often environmental, so exposure history and the immune defect help predict the organism.",
      "C": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "D": "A child with cough may have viral bronchitis, pneumonia, or a foreign body."
    },
    "answer": "D",
    "explanation": "The chapter states: A child with cough may have viral bronchitis, pneumonia, or a foreign body.",
    "id": 30
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "A child with a central line has fever but no redness at the exit site. Why should blood cultures be drawn from both the line and a peripheral vein?",
    "options": {
      "A": "The paired results can help determine whether the line is the source of the bloodstream infection",
      "B": "A peripheral culture always identifies the pathogen even when the central line is infected",
      "C": "Collecting two samples guarantees that no contaminating organism will ever be reported",
      "D": "The line culture is unnecessary whenever the child has a normal skin examination"
    },
    "answer": "A",
    "explanation": "Paired cultures with accurate labels help distinguish a line-associated infection from a bloodstream infection with another source. The peripheral culture is not infallible. Two samples reduce some uncertainty but do not eliminate contamination. A line infection can cause fever without an abnormal exit site.",
    "id": 31
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "A respiratory molecular panel is positive for rhinovirus in a child with hypoxia and focal crackles. Which conclusion is safest?",
    "options": {
      "A": "The positive result proves a bacterial infection cannot be present and antibiotics are unnecessary",
      "B": "The virus may explain the respiratory illness, but the child still needs assessment for pneumonia and complications",
      "C": "The test should be repeated because a molecular result is only preliminary and never clinically useful",
      "D": "The child should receive a broad antibiotic for every virus identified by the panel"
    },
    "answer": "B",
    "explanation": "A virus can cause or contribute to the illness without excluding bacterial coinfection or a complication. Hypoxia and focal findings require clinical assessment. Molecular tests are clinically useful but need context. Broad antibiotics are not indicated for every positive viral result.",
    "id": 32
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which result is most likely to represent contamination rather than true bloodstream infection?",
    "options": {
      "A": "The same organism grows from two peripheral cultures and from a central line culture",
      "B": "One of several cultures grows coagulase-negative staphylococcus with no device or repeated growth",
      "C": "A blood culture grows a virulent organism from a child with shock and a new heart murmur",
      "D": "A repeated culture from a child with a central line grows the same organism after a prior positive"
    },
    "answer": "B",
    "explanation": "Repeated growth from multiple sites or repeated cultures supports true infection. A virulent organism with shock and endocarditis findings is highly concerning. One positive culture from several samples, especially with a common skin organism and no supporting device evidence, may represent contamination, although the child must still be evaluated.",
    "id": 33
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "Imaging can show effusion, bone changes, or a collection, but early radiographs can be normal.",
      "B": "A child who is toxic, vomiting, dehydrated, or unable to take oral therapy may need intravenous treatment.",
      "C": "Microbiology is a conversation between the clinician and the laboratory.",
      "D": "Hand hygiene and covering lesions reduce spread in households and child care."
    },
    "answer": "C",
    "explanation": "The chapter states: Microbiology is a conversation between the clinician and the laboratory.",
    "id": 34
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "Epstein-Barr virus commonly causes infectious mononucleosis in adolescents, with fever, exudative pharyngitis, fatigue, and lymphadenopathy.",
      "B": "The laboratory identifies organisms, measures susceptibility, and supplies results at different speeds.",
      "C": "Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe.",
      "D": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection."
    },
    "answer": "B",
    "explanation": "The chapter states: The laboratory identifies organisms, measures susceptibility, and supplies results at different speeds.",
    "id": 35
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "A superficial swab samples the skin surface and may recover colonizers rather than the deep pathogen.",
      "B": "Parvovirus B19 can cause slapped-cheek rash, arthralgia, and transient aplastic crisis in a child with chronic hemolysis.",
      "C": "Perinatal prevention has greatly reduced transmission when pregnant people receive testing, antiretroviral treatment, and appropriate infant prophylaxis.",
      "D": "Ask about fresh-water exposure, animals, mosquitoes, ticks, food, sexual contact, tattoos, injections, and contact with sick people."
    },
    "answer": "A",
    "explanation": "The chapter states: A superficial swab samples the skin surface and may recover colonizers rather than the deep pathogen.",
    "id": 36
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "Small frequent volumes are often better tolerated than large amounts.",
      "B": "A child with varicella should avoid contact with susceptible high-risk people and follow local exclusion policy.",
      "C": "Many infections are asymptomatic, so screening is important when risk is present.",
      "D": "Blood culture volume should follow the laboratory's pediatric guidance."
    },
    "answer": "D",
    "explanation": "The chapter states: Blood culture volume should follow the laboratory's pediatric guidance.",
    "id": 37
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "Antiviral treatment should not be delayed for a visible rash when the clinical syndrome is concerning.",
      "B": "Antifungal selection depends on the organism, site, immune status, organ function, and interactions with other medicines.",
      "C": "Cerebrospinal fluid should be transported promptly and not allowed to sit at an inappropriate temperature.",
      "D": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority."
    },
    "answer": "C",
    "explanation": "The chapter states: Cerebrospinal fluid should be transported promptly and not allowed to sit at an inappropriate temperature.",
    "id": 38
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "Blood and tissue parasites may cause fever, anemia, organ disease, or severe neurologic illness.",
      "B": "Tissue should be kept moist and handled according to the tests requested.",
      "C": "HIV can be acquired perinatally, through sexual exposure, injection drug use, or contaminated blood products.",
      "D": "Blood cultures may be negative because the fungus invades tissue and blood vessels."
    },
    "answer": "B",
    "explanation": "The chapter states: Tissue should be kept moist and handled according to the tests requested.",
    "id": 39
  },
  {
    "domain": "diagnostics",
    "chapter": 4,
    "question": "Which statement is directly supported by the microbiology and rapid diagnostics chapter?",
    "options": {
      "A": "The clinician should document when antimicrobials were given relative to collection.",
      "B": "During delivery, the newborn can be exposed to maternal blood, genital secretions, and other fluids.",
      "C": "Typhoid fever, dengue, chikungunya, rickettsial disease, and other infections may also occur.",
      "D": "Bronchiolitis is concentrated in the first two years while the smallest airways are narrow."
    },
    "answer": "A",
    "explanation": "The chapter states: The clinician should document when antimicrobials were given relative to collection.",
    "id": 40
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "A liquid antibiotic comes in a new concentration at discharge. What is the most important safety step?",
    "options": {
      "A": "Use the same volume that was given in hospital because the child already responded to it",
      "B": "Recalculate the volume from the prescribed milligrams and the new concentration, then verify the device",
      "C": "Give a larger volume to make the liquid taste stronger and improve adherence",
      "D": "Stop the antibiotic because a concentration change always means the pharmacy made an error"
    },
    "answer": "B",
    "explanation": "The volume changes when the concentration changes, even if the intended dose in milligrams stays the same. Recalculation and verification prevent a tenfold error. Taste does not justify an altered amount. A concentration change can be a normal product substitution and should be reconciled rather than assumed to be an error.",
    "id": 41
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Why may a newborn require a different dosing interval than an older child of the same weight?",
    "options": {
      "A": "Newborns have mature kidney and liver clearance immediately after birth in every case",
      "B": "Drug distribution, protein binding, and organ clearance are changing rapidly during early life",
      "C": "Body weight alone cannot be measured in newborns, so all doses must be estimated",
      "D": "A newborn's immune system always destroys antibiotics before they reach the infection"
    },
    "answer": "B",
    "explanation": "Newborn physiology changes rapidly, including fluid compartments, protein binding, enzyme activity, and kidney filtration. These changes affect exposure and toxicity. Weight can be measured accurately. The immune system does not simply destroy antibiotics, and dosing decisions require neonatal guidance.",
    "id": 42
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "A child has an antibiotic allergy listed as \"rash.\" What history is most useful before choosing another antibiotic?",
    "options": {
      "A": "Whether the rash was accompanied by mucosal ulcers, blistering, swelling, breathing trouble, or organ injury",
      "B": "Whether the family prefers a liquid medicine with a fruit flavor rather than a tablet",
      "C": "Whether the child has previously taken any antibiotic from a completely unrelated class",
      "D": "Whether the child's school requires a note before the medicine can be given during lunch"
    },
    "answer": "A",
    "explanation": "The timing and features of the reaction determine whether it was severe and whether the allergy label is credible. Palatability and school administration are practical issues but do not define allergy. Exposure to an unrelated antibiotic does not clarify the reaction.",
    "id": 43
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "Surgery may be needed for severe valve dysfunction, large vegetations, persistent infection, or embolic complications.",
      "B": "Hand hygiene and safe food and water prevent spread within families and child care.",
      "C": "The child may present with fever, vomiting, pain, distention, tenderness, or shock.",
      "D": "An antibiotic prescription is a pharmacokinetic experiment performed on a child."
    },
    "answer": "D",
    "explanation": "The chapter states: An antibiotic prescription is a pharmacokinetic experiment performed on a child.",
    "id": 44
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "Giardia duodenalis causes diarrhea, bloating, malabsorption, and weight loss after contaminated water exposure or child care spread.",
      "B": "Cytomegalovirus, toxoplasmosis, syphilis, rubella, varicella, Zika virus, and herpes simplex virus deserve consideration based on the pattern.",
      "C": "The same milligram per kilogram dose can produce very different exposures across the pediatric age range.",
      "D": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone."
    },
    "answer": "C",
    "explanation": "The chapter states: The same milligram per kilogram dose can produce very different exposures across the pediatric age range.",
    "id": 45
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "Some organisms are intrinsically resistant to certain drug classes because of their cell wall, metabolism, or permeability.",
      "B": "Safe pediatric prescribing starts with the source and the pathogen rather than with the drug name.",
      "C": "Do not use antibiotics to cover travel generally; the risk pattern and clinical syndrome should guide therapy.",
      "D": "In adolescence, behavior, sexual health, mental health, and access to confidential care influence both diagnosis and prevention."
    },
    "answer": "B",
    "explanation": "The chapter states: Safe pediatric prescribing starts with the source and the pathogen rather than with the drug name.",
    "id": 46
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "The prescription must be practical for the family and tolerable for the child.",
      "B": "Epstein-Barr virus commonly causes infectious mononucleosis in adolescents, with fever, exudative pharyngitis, fatigue, and lymphadenopathy.",
      "C": "Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body.",
      "D": "Compared with the child in obvious shock, a fast and calm clinician might be most."
    },
    "answer": "A",
    "explanation": "The chapter states: The prescription must be practical for the family and tolerable for the child.",
    "id": 47
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "Candida species commonly cause bloodstream infection in premature infants and children with central lines.",
      "B": "Some infections can persist for years after a child leaves the place where exposure occurred.",
      "C": "Ask about fresh-water exposure, animals, mosquitoes, ticks, food, sexual contact, tattoos, injections, and contact with sick people.",
      "D": "It must also include a plan for monitoring, adverse effects, adherence, and completion."
    },
    "answer": "D",
    "explanation": "The chapter states: It must also include a plan for monitoring, adverse effects, adherence, and completion.",
    "id": 48
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption.",
      "B": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement.",
      "C": "Neonates have a higher proportion of total body water and lower fat content than older children.",
      "D": "A blood count, liver tests, blood cultures, malaria smears, and targeted serology or molecular tests may be appropriate."
    },
    "answer": "C",
    "explanation": "The chapter states: Neonates have a higher proportion of total body water and lower fat content than older children.",
    "id": 49
  },
  {
    "domain": "pharmacology",
    "chapter": 5,
    "question": "Which statement is directly supported by the antimicrobial pharmacology and pediatric dosing chapter?",
    "options": {
      "A": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "B": "Water-soluble drugs may therefore have a larger volume of distribution, while fat-soluble drugs may behave differently.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment."
    },
    "answer": "B",
    "explanation": "The chapter states: Water-soluble drugs may therefore have a larger volume of distribution, while fat-soluble drugs may behave differently.",
    "id": 50
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "A child with a viral cold has thick nasal mucus and a low-grade fever. What is the best antibiotic decision?",
    "options": {
      "A": "Start a broad antibiotic because the mucus is thick and the illness is lasting",
      "B": "Provide supportive care and return precautions because an uncomplicated cold is usually viral",
      "C": "Obtain a blood culture before deciding whether the child needs antibiotics",
      "D": "Give an antibiotic only at night when the fever is likely to be highest"
    },
    "answer": "B",
    "explanation": "Thick mucus and low-grade fever do not prove bacterial infection. Supportive care with clear return precautions is appropriate for an uncomplicated viral cold. A blood culture is not indicated routinely for a well child with a cold. Timing of doses does not make an unnecessary antibiotic useful.",
    "id": 51
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which action best describes de-escalation after a culture identifies a susceptible organism?",
    "options": {
      "A": "Continue the original broad regimen until the family requests a change",
      "B": "Narrow to a targeted effective medicine when the child is stable and the source is controlled",
      "C": "Add a second broad medicine to cover organisms the culture did not identify",
      "D": "Stop all treatment immediately because identification of an organism means infection is cured"
    },
    "answer": "B",
    "explanation": "De-escalation uses the organism and susceptibilities to choose a narrower effective treatment. The child still needs therapy and follow-up. Broad continuation increases harm. Adding broad coverage without evidence can increase resistance and adverse effects.",
    "id": 52
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Why can drainage of an abscess be a stewardship action?",
    "options": {
      "A": "Drainage reduces the bacterial burden and can shorten the antibiotic exposure needed for cure",
      "B": "Drainage makes antibiotics completely unnecessary for every infection in every child",
      "C": "Drainage changes the organism into a harmless normal colonizer in the bloodstream",
      "D": "Drainage allows the clinician to use a broader medicine for a longer period safely"
    },
    "answer": "A",
    "explanation": "Source control removes infected material and improves antibiotic effectiveness, often allowing a shorter course. Antibiotics may still be needed. Drainage does not turn a pathogen into a harmless colonizer. Source control is not a reason to broaden or prolong therapy without a clinical indication.",
    "id": 53
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "Antimicrobial stewardship is the careful use of medicines that kill or inhibit microorganisms.",
      "B": "Treatment with combination antiretroviral therapy reduces viral load, preserves immune function, prevents progression, and reduces transmission.",
      "C": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "D": "Otitis media becomes common as the eustachian tube matures and children enter group care."
    },
    "answer": "A",
    "explanation": "The chapter states: Antimicrobial stewardship is the careful use of medicines that kill or inhibit microorganisms.",
    "id": 54
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "Eczema herpeticum causes clustered vesicles and erosions in areas of damaged skin and can spread rapidly.",
      "B": "A positive screening test should be confirmed and linked to care, not treated as an isolated result.",
      "C": "A child with a central line needs line care and a plan for suspected bloodstream infection.",
      "D": "Stewardship is especially difficult in pediatrics because diagnostic certainty is often lower than in adults."
    },
    "answer": "D",
    "explanation": "The chapter states: Stewardship is especially difficult in pediatrics because diagnostic certainty is often lower than in adults.",
    "id": 55
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "It is a structured review of where the child went, when, what happened, and what prevention was used.",
      "B": "The clinical plan must name the immune defect and the support system around the child.",
      "C": "It creates a clear clinical explanation, a safety net, and a plan for reassessment.",
      "D": "The exposure history, syndrome, travel or migration pattern, and immune status should choose the test."
    },
    "answer": "C",
    "explanation": "The chapter states: It creates a clear clinical explanation, a safety net, and a plan for reassessment.",
    "id": 56
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "Record vaccines, malaria medications, repellents, bed nets, water treatment, and whether the child took medicines as prescribed.",
      "B": "Resistance genes can spread between organisms through mobile genetic elements.",
      "C": "Giardia duodenalis causes diarrhea, bloating, malabsorption, and weight loss after contaminated water exposure or child care spread.",
      "D": "Cytomegalovirus, toxoplasmosis, syphilis, rubella, varicella, Zika virus, and herpes simplex virus deserve consideration based on the pattern."
    },
    "answer": "B",
    "explanation": "The chapter states: Resistance genes can spread between organisms through mobile genetic elements.",
    "id": 57
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "Some organisms are intrinsically resistant to certain drug classes because of their cell wall, metabolism, or permeability.",
      "B": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment."
    },
    "answer": "A",
    "explanation": "The chapter states: Some organisms are intrinsically resistant to certain drug classes because of their cell wall, metabolism, or permeability.",
    "id": 58
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body.",
      "B": "Water-soluble drugs may therefore have a larger volume of distribution, while fat-soluble drugs may behave differently.",
      "C": "A vaccine reduces the chance of disease but may not prevent every infection.",
      "D": "The antibiotic may kill free-floating organisms while those inside the biofilm survive."
    },
    "answer": "D",
    "explanation": "The chapter states: The antibiotic may kill free-floating organisms while those inside the biofilm survive.",
    "id": 59
  },
  {
    "domain": "stewardship",
    "chapter": 6,
    "question": "Which statement is directly supported by the antimicrobial stewardship and resistance chapter?",
    "options": {
      "A": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "B": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "C": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
      "D": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting."
    },
    "answer": "C",
    "explanation": "The chapter states: Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
    "id": 60
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "A healthy child has missed several vaccine appointments after moving. What is the best approach?",
    "options": {
      "A": "Restart every vaccine series from the beginning because the interval has been too long",
      "B": "Verify the record, count valid doses, and complete the appropriate catch-up schedule",
      "C": "Wait until adolescence so that all vaccines can be given in one visit",
      "D": "Give only the vaccines required by school and omit the others indefinitely"
    },
    "answer": "B",
    "explanation": "Missed doses usually do not require restarting a series. Valid doses should be documented and remaining doses completed using the catch-up schedule. Waiting increases preventable risk. School requirements are not a complete immunization plan.",
    "id": 61
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which child may need a tailored prevention plan beyond the routine vaccine schedule?",
    "options": {
      "A": "A healthy school-age child who has completed all recommended vaccines",
      "B": "A child with a central line, a transplant, or functional asplenia",
      "C": "A toddler with a mild cold who is otherwise growing and developing normally",
      "D": "An adolescent who has no chronic illness and no travel or sexual exposure"
    },
    "answer": "B",
    "explanation": "Children with immune suppression, absent splenic function, or invasive devices have increased risk from specific organisms. They may need additional vaccines, prophylaxis, and a written fever plan. Routine prevention is still important for the other children, but it does not require the same specialized program.",
    "id": 62
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Why is hand hygiene still important when health care workers wear gloves?",
    "options": {
      "A": "Gloves replace hand hygiene completely, so washing is only needed after visible contamination",
      "B": "Gloves can become contaminated and hand hygiene is needed before and after patient contact",
      "C": "Hand hygiene is only needed when a child has a diagnosed resistant organism",
      "D": "Gloves protect the worker from infection but never affect transmission between children"
    },
    "answer": "B",
    "explanation": "Gloves reduce contact with body fluids but can become contaminated and can tear. Hand hygiene is required before and after contact and after glove removal. Transmission precautions are not limited to diagnosed resistant organisms, because many infections are unrecognized.",
    "id": 63
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
      "B": "Prevention is the part of infectious disease care that happens before the child becomes ill.",
      "C": "The evaluation combines maternal records, timing, examination, serology, cultures, molecular tests, imaging, and tissue when needed.",
      "D": "Immunocompromised children may not mount fever, and a normal white blood cell count can be falsely reassuring."
    },
    "answer": "B",
    "explanation": "The chapter states: Prevention is the part of infectious disease care that happens before the child becomes ill.",
    "id": 64
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "A vaccine reduces the chance of disease but may not prevent every infection.",
      "B": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "C": "Young infants have limited reserve for maintaining airway tone, feeding, blood glucose, and perfusion.",
      "D": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter."
    },
    "answer": "A",
    "explanation": "The chapter states: A vaccine reduces the chance of disease but may not prevent every infection.",
    "id": 65
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "B": "A febrile child returning from a malaria-endemic area needs urgent malaria testing.",
      "C": "Barrier failure from burns, devices, surgery, or mucosal injury creates local portals.",
      "D": "Hand hygiene reduces transmission but depends on consistent practice."
    },
    "answer": "D",
    "explanation": "The chapter states: Hand hygiene reduces transmission but depends on consistent practice.",
    "id": 66
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "A child with a central line needs line care and a plan for suspected bloodstream infection.",
      "B": "Fever is a regulated rise in body temperature produced by the immune response.",
      "C": "A mask or isolation room may reduce spread but cannot replace vaccination.",
      "D": "A positive screening test should be confirmed and linked to care, not treated as an isolated result."
    },
    "answer": "C",
    "explanation": "The chapter states: A mask or isolation room may reduce spread but cannot replace vaccination.",
    "id": 67
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "A dose that is appropriate for a newborn may need to be lower, less frequent, or both.",
      "B": "A medicine that prevents infection in one high-risk group may cause harm in another.",
      "C": "Rectal measurement is generally the most reliable in young infants when performed safely and according to policy.",
      "D": "A superficial swab samples the skin surface and may recover colonizers rather than the deep pathogen."
    },
    "answer": "B",
    "explanation": "The chapter states: A medicine that prevents infection in one high-risk group may cause harm in another.",
    "id": 68
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "Vaccines expose the immune system to a safe antigen or set of antigens.",
      "B": "Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment.",
      "C": "Neurologic dysfunction may appear as irritability, confusion, lethargy, poor interaction, or an abnormal response to pain.",
      "D": "A positive viral test does not change the need to assess bacterial complications when the child is deteriorating."
    },
    "answer": "A",
    "explanation": "The chapter states: Vaccines expose the immune system to a safe antigen or set of antigens.",
    "id": 69
  },
  {
    "domain": "prevention",
    "chapter": 7,
    "question": "Which statement is directly supported by the infection prevention and immunization chapter?",
    "options": {
      "A": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "B": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "C": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "D": "The immune system produces antibody and memory cells without the child having to experience the full disease."
    },
    "answer": "D",
    "explanation": "The chapter states: The immune system produces antibody and memory cells without the child having to experience the full disease.",
    "id": 70
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "A 10-day-old infant has apnea, poor feeding, and temperature instability. What is the safest interpretation?",
    "options": {
      "A": "These findings are normal for any infant born prematurely and can be observed at home",
      "B": "The infant needs prompt evaluation for possible sepsis, meningitis, or a focal infection",
      "C": "A normal oxygen saturation excludes serious bacterial infection in this age group",
      "D": "The infant should receive only an antipyretic and return if the temperature becomes higher"
    },
    "answer": "B",
    "explanation": "Apnea and poor feeding are dangerous newborn signs that can reflect invasive infection. Normal oxygen saturation does not exclude sepsis or meningitis. Prematurity may change the baseline, but a clear deterioration still requires urgent assessment and treatment.",
    "id": 71
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Why can a newborn with a central line develop a bloodstream infection without redness at the exit site?",
    "options": {
      "A": "The catheter can be colonized internally and seed the bloodstream while the skin appears normal",
      "B": "Newborn skin cannot show redness until the child is at least one year old",
      "C": "Central lines are sterile and cannot be infected if the dressing remains attached",
      "D": "Bloodstream infection in a newborn always begins with a rash on the chest and abdomen"
    },
    "answer": "A",
    "explanation": "The inside of a catheter can be colonized even when the external site looks clean. A dressing reduces but does not eliminate risk. Newborns can develop infection without a rash, and fever or apnea may be the main clue.",
    "id": 72
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which finding should raise concern for congenital infection in a newborn?",
    "options": {
      "A": "A single uncomplicated sneeze after feeding and a normal examination",
      "B": "Growth restriction, microcephaly, hearing abnormality, and thrombocytopenia occurring together",
      "C": "A small amount of vernix present in the skin folds at birth",
      "D": "A normal newborn examination with a normal maternal screening record"
    },
    "answer": "B",
    "explanation": "Congenital infection can affect growth, brain size, hearing, eyes, liver, skin, and blood counts. Vernix is a normal newborn finding. One sneeze or a normal examination alone is not a concern, but no screening program replaces evaluation when a concerning pattern appears.",
    "id": 73
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "Record the exact destinations and dates, including stopovers and rural or urban travel.",
      "B": "T-cell defects impair cell-mediated immunity and increase risk from viruses, fungi, mycobacteria, and intracellular organisms.",
      "C": "The newborn is the most time-sensitive patient in pediatric infectious disease.",
      "D": "Congenital infection can affect growth, brain, eye, ear, liver, bone, and skin."
    },
    "answer": "C",
    "explanation": "The chapter states: The newborn is the most time-sensitive patient in pediatric infectious disease.",
    "id": 74
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "Upper respiratory infections are the most frequent reason children receive antibiotics, and most of them are viral.",
      "B": "Signs are subtle, physiological reserve is limited, and a benign-appearing examination can precede rapid deterioration.",
      "C": "A strong problem representation includes what is known, what is uncertain, and what would change the plan.",
      "D": "The protection is specific to the pathogen and may change over time or with new strains."
    },
    "answer": "B",
    "explanation": "The chapter states: Signs are subtle, physiological reserve is limited, and a benign-appearing examination can precede rapid deterioration.",
    "id": 75
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "Late-onset infection often reflects the hospital, home, feeding, or device environment.",
      "B": "Immunocompromised children may not mount fever, and a normal white blood cell count can be falsely reassuring.",
      "C": "A child may shiver, seek warmth, and feel cool before the temperature rises.",
      "D": "A child with cough may have viral bronchitis, pneumonia, or a foreign body."
    },
    "answer": "A",
    "explanation": "The chapter states: Late-onset infection often reflects the hospital, home, feeding, or device environment.",
    "id": 76
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "B": "A mask or isolation room may reduce spread but cannot replace vaccination.",
      "C": "Cold shock with delayed refill, mottled skin, and weak pulses is another pattern.",
      "D": "The timing helps organize the differential, but no category is perfect."
    },
    "answer": "D",
    "explanation": "The chapter states: The timing helps organize the differential, but no category is perfect.",
    "id": 77
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "Antidiarrheal medicines are generally avoided in children because they can worsen some infections and cause serious adverse effects.",
      "B": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies.",
      "C": "Early-onset bacterial infection is commonly associated with organisms acquired from the maternal genital tract or during delivery.",
      "D": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness."
    },
    "answer": "C",
    "explanation": "The chapter states: Early-onset bacterial infection is commonly associated with organisms acquired from the maternal genital tract or during delivery.",
    "id": 78
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "B": "Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment.",
      "C": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "D": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia."
    },
    "answer": "B",
    "explanation": "The chapter states: Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment.",
    "id": 79
  },
  {
    "domain": "neonatal",
    "chapter": 8,
    "question": "Which statement is directly supported by the neonatal infections chapter?",
    "options": {
      "A": "The newborn examination and clinical course decide how urgently to evaluate and treat.",
      "B": "Warm shock with flash capillary refill and bounding pulses may occur, especially in early distributive shock.",
      "C": "Rapid antigen tests and molecular tests for group A streptococcus are useful when the diagnosis is plausible.",
      "D": "The child may have a history of household illness, child care exposure, or an older sibling in school."
    },
    "answer": "A",
    "explanation": "The chapter states: The newborn examination and clinical course decide how urgently to evaluate and treat.",
    "id": 80
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "A child with suspected sepsis has mottled skin, delayed capillary refill, and confusion but a blood pressure that is still normal. What is the most appropriate interpretation?",
    "options": {
      "A": "The normal blood pressure proves that shock is not present and fluids can be withheld",
      "B": "The child has signs of compensated shock and needs urgent stabilization and reassessment",
      "C": "The child should be observed at home because blood pressure is the only reliable measure",
      "D": "Antibiotics should be delayed until the child becomes hypotensive and can be confirmed as septic"
    },
    "answer": "B",
    "explanation": "Children may compensate for shock before blood pressure falls. Mottling, delayed refill, and altered mental status require urgent treatment. Observation and delayed antibiotics are unsafe. Blood pressure is useful but not the only measure of circulation.",
    "id": 81
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "A child with toxic shock has an infected retained packing. Why is removal of the packing important?",
    "options": {
      "A": "Removal eliminates the ongoing source of toxin and infected material that antibiotics cannot fully control",
      "B": "Removal makes supportive care unnecessary and proves the child no longer needs monitoring",
      "C": "Antibiotics cannot enter any tissue while a packing remains present in the body",
      "D": "The packing should remain until the fever has resolved for at least one week"
    },
    "answer": "A",
    "explanation": "A retained infected material can continue releasing toxin and sustaining infection. Removal is part of source control, but supportive care and antibiotics may still be required. Antibiotics can enter tissue, but they cannot replace removal of a focus. Leaving the packing in place can prolong severe illness.",
    "id": 82
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "After a fluid bolus, a child with sepsis develops worsening respiratory distress and fine crackles. What is the best next response?",
    "options": {
      "A": "Give repeated large fluid boluses without changing the assessment",
      "B": "Stop fluid resuscitation temporarily, reassess perfusion and breathing, and escalate support as needed",
      "C": "Discharge the child if the blood pressure is now normal",
      "D": "Continue the same fluid rate because respiratory distress is unrelated to the infusion"
    },
    "answer": "B",
    "explanation": "Fluid is a treatment with benefits and harms. New respiratory distress may reflect fluid overload or worsening lung injury. Reassessment should guide fluids, respiratory support, and vasoactive therapy. A normal blood pressure does not mean the child is ready for discharge.",
    "id": 83
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "A test that does not help answer the central syndrome should justify its own place.",
      "B": "The same milligram per kilogram dose can produce very different exposures across the pediatric age range.",
      "C": "Clear or colored nasal discharge, cough, sore throat, fever, hoarseness, and poor appetite are common.",
      "D": "Toxic shock is a special form of severe systemic illness caused by bacterial toxins."
    },
    "answer": "D",
    "explanation": "The chapter states: Toxic shock is a special form of severe systemic illness caused by bacterial toxins.",
    "id": 84
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "B": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "C": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "D": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment."
    },
    "answer": "C",
    "explanation": "The chapter states: Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
    "id": 85
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "A medicine that prevents infection in one high-risk group may cause harm in another.",
      "B": "Fever, rash, low blood pressure, multi-organ dysfunction, and rapid progression are important clues.",
      "C": "Cerebrospinal fluid should be transported promptly and not allowed to sit at an inappropriate temperature.",
      "D": "Body composition, organ function, disease severity, and the site of infection modify the exposure."
    },
    "answer": "B",
    "explanation": "The chapter states: Fever, rash, low blood pressure, multi-organ dysfunction, and rapid progression are important clues.",
    "id": 86
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "The first step is to compare the child with their usual baseline.",
      "B": "It creates a clear clinical explanation, a safety net, and a plan for reassessment.",
      "C": "The protection is specific to the pathogen and may change over time or with new strains.",
      "D": "Temperature instability may appear as fever, hypothermia, or a change from the child's usual thermal pattern."
    },
    "answer": "A",
    "explanation": "The chapter states: The first step is to compare the child with their usual baseline.",
    "id": 87
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly.",
      "B": "The clinician must assess severity, likely pathogen, vaccination history, exposure, and complications rather than relying on one test.",
      "C": "Most children recover with supportive care, but influenza can cause pneumonia, encephalopathy, myocarditis, secondary bacterial infection, and death.",
      "D": "Compared with the child in obvious shock, a fast and calm clinician might be most."
    },
    "answer": "D",
    "explanation": "The chapter states: Compared with the child in obvious shock, a fast and calm clinician might be most.",
    "id": 88
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "Respiratory syncytial virus is common, but rhinovirus, parainfluenza, influenza, adenovirus, and other viruses can produce a similar syndrome.",
      "B": "A child with fever, abnormal perfusion, altered mental status, or a device needs prompt cultures and treatment.",
      "C": "Warm shock with flash capillary refill and bounding pulses may occur, especially in early distributive shock.",
      "D": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa."
    },
    "answer": "C",
    "explanation": "The chapter states: Warm shock with flash capillary refill and bounding pulses may occur, especially in early distributive shock.",
    "id": 89
  },
  {
    "domain": "sepsis",
    "chapter": 9,
    "question": "Which statement is directly supported by the sepsis and toxic shock syndromes chapter?",
    "options": {
      "A": "It can progress rapidly, cause hearing loss, seizures, stroke, hydrocephalus, developmental injury, or death.",
      "B": "Cold shock with delayed refill, mottled skin, and weak pulses is another pattern.",
      "C": "Streptococcus pneumoniae, nontypeable Haemophilus influenzae, and Moraxella catarrhalis are important bacterial causes, but viruses also contribute.",
      "D": "Tuberculosis in children is a family and public health diagnosis as much as an individual infection."
    },
    "answer": "B",
    "explanation": "The chapter states: Cold shock with delayed refill, mottled skin, and weak pulses is another pattern.",
    "id": 90
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "A well-appearing child has a two-day cold with clear nasal discharge and a mild cough. What is the best management plan?",
    "options": {
      "A": "Start a broad antibiotic because nasal symptoms can progress to sinus infection",
      "B": "Provide supportive care with fluids and explain the expected course and return signs",
      "C": "Obtain a blood culture before deciding whether antibiotics are needed",
      "D": "Use an adult cough medicine at a reduced dose without checking the child's age"
    },
    "answer": "B",
    "explanation": "A routine cold is usually viral and does not need antibiotics or a blood culture. Supportive care with clear return precautions is appropriate. Some cough medicines are unsafe or ineffective in young children, so age-specific guidance is required.",
    "id": 91
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "A child has confirmed group A streptococcal pharyngitis and no allergy. Which treatment principle is correct?",
    "options": {
      "A": "Use a narrow effective antibiotic such as penicillin or amoxicillin according to the local guideline",
      "B": "Use a broad antibiotic that covers staphylococcus and gram-negative organisms",
      "C": "Avoid all treatment because streptococcal pharyngitis never causes complications",
      "D": "Use only a topical throat spray and do not give systemic treatment"
    },
    "answer": "A",
    "explanation": "Narrow therapy is preferred for confirmed streptococcal pharyngitis. Broad coverage adds resistance and adverse effects without benefit. Treatment reduces symptoms and prevents some complications. A topical spray does not reliably treat the infection.",
    "id": 92
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which finding in a child with sore throat requires urgent assessment for a deep neck or airway problem?",
    "options": {
      "A": "Mild runny nose with a playful child who drinks normally",
      "B": "Drooling, muffled voice, neck stiffness, and difficulty opening the mouth",
      "C": "A cough that is worse at night but improves with sitting upright",
      "D": "A negative rapid streptococcal test with mild tonsillar enlargement"
    },
    "answer": "B",
    "explanation": "Drooling, a muffled voice, neck stiffness, and trismus suggest a deep neck infection or airway threat. A mild cold and a nighttime cough are common. A negative test does not itself indicate a deep infection, but clinical deterioration requires reassessment.",
    "id": 93
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "Upper respiratory infections are the most frequent reason children receive antibiotics, and most of them are viral.",
      "B": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine."
    },
    "answer": "A",
    "explanation": "The chapter states: Upper respiratory infections are the most frequent reason children receive antibiotics, and most of them are viral.",
    "id": 94
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "Early-onset bacterial infection is commonly associated with organisms acquired from the maternal genital tract or during delivery.",
      "B": "Acute otitis media is inflammation of the middle ear with fluid and signs of acute infection.",
      "C": "Small frequent feeds may help; a child who cannot feed safely may need nasogastric or intravenous fluids.",
      "D": "Clear or colored nasal discharge, cough, sore throat, fever, hoarseness, and poor appetite are common."
    },
    "answer": "D",
    "explanation": "The chapter states: Clear or colored nasal discharge, cough, sore throat, fever, hoarseness, and poor appetite are common.",
    "id": 95
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption.",
      "B": "Latent tuberculosis infection means the child has evidence of immune response without clinical or radiographic disease.",
      "C": "Rhinoviruses, coronaviruses, adenoviruses, respiratory syncytial virus, influenza, parainfluenza, and other viruses cause colds.",
      "D": "Many children can be managed with pain control and observation under a clear plan."
    },
    "answer": "C",
    "explanation": "The chapter states: Rhinoviruses, coronaviruses, adenoviruses, respiratory syncytial virus, influenza, parainfluenza, and other viruses cause colds.",
    "id": 96
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "B": "Young children may have fever for several days, reduce feeding, and develop temporary sleep disruption.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment."
    },
    "answer": "B",
    "explanation": "The chapter states: Young children may have fever for several days, reduce feeding, and develop temporary sleep disruption.",
    "id": 97
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly.",
      "B": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine.",
      "C": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "D": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question."
    },
    "answer": "A",
    "explanation": "The chapter states: A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly.",
    "id": 98
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "Pleural fluid from a complicated effusion should be examined and cultured when drainage is performed.",
      "B": "Escalation may include high-flow oxygen, noninvasive support, or intubation according to the local pathway.",
      "C": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "D": "Testing is usually unnecessary in a well child with a typical cold."
    },
    "answer": "D",
    "explanation": "The chapter states: Testing is usually unnecessary in a well child with a typical cold.",
    "id": 99
  },
  {
    "domain": "upper_respiratory",
    "chapter": 10,
    "question": "Which statement is directly supported by the upper respiratory tract infections chapter?",
    "options": {
      "A": "Children under five and children with HIV or other immune compromise have a higher risk of rapid progression.",
      "B": "Young infants may have fever or hypothermia, poor feeding, lethargy, irritability, apnea, a bulging fontanelle, or seizures.",
      "C": "Group A streptococcus is more common in school-age children and adolescents.",
      "D": "Most children recover with supportive care, but influenza can cause pneumonia, encephalopathy, myocarditis, secondary bacterial infection, and death."
    },
    "answer": "C",
    "explanation": "The chapter states: Group A streptococcus is more common in school-age children and adolescents.",
    "id": 100
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which finding best supports acute otitis media rather than simple eardrum redness?",
    "options": {
      "A": "A red tympanic membrane in a crying child with a normal examination otherwise",
      "B": "A bulging tympanic membrane with middle-ear fluid and acute ear symptoms",
      "C": "A small amount of wax in the ear canal with no pain or fever",
      "D": "A red ear canal with normal tympanic membrane mobility and no middle-ear fluid"
    },
    "answer": "B",
    "explanation": "Redness alone is nonspecific. Acute otitis media requires middle-ear fluid and acute inflammatory signs. Wax does not establish infection. External ear canal inflammation is a different diagnosis from middle-ear infection.",
    "id": 101
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "A child with acute otitis media develops redness and swelling behind the ear with outward displacement of the ear. What is the best next step?",
    "options": {
      "A": "Continue home observation because all ear infections resolve without complication",
      "B": "Obtain urgent specialist assessment for mastoiditis and possible imaging",
      "C": "Insert cotton into the ear canal to reduce drainage and wait one week",
      "D": "Give an antihistamine and avoid antibiotics because the eardrum is not visible"
    },
    "answer": "B",
    "explanation": "Postauricular swelling and outward displacement suggest mastoiditis, which can extend to a subperiosteal abscess or the brain. Urgent specialist evaluation is required. Home observation and symptomatic treatment are unsafe for this presentation.",
    "id": 102
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "A child with sinus symptoms has eye swelling and pain with eye movement. Why is this more urgent than routine sinusitis?",
    "options": {
      "A": "It may indicate orbital extension that threatens vision and requires urgent imaging and specialist care",
      "B": "Eye swelling always means the child has a viral cold and can be managed with fluids",
      "C": "Sinus infection cannot spread to the orbit because bone separates the spaces completely",
      "D": "Pain with eye movement is a normal feature of sinus infection and never requires imaging"
    },
    "answer": "A",
    "explanation": "Sinus infection can spread into the orbit, causing severe infection, vision loss, or intracranial extension. Routine viral illness does not explain proptosis or painful eye movement. Bone does not provide an absolute barrier, and these eye findings require urgent evaluation.",
    "id": 103
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
      "B": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa.",
      "C": "Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment.",
      "D": "A positive viral test does not change the need to assess bacterial complications when the child is deteriorating."
    },
    "answer": "B",
    "explanation": "The chapter states: The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa.",
    "id": 104
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "Infection in one area can spread to another through direct extension, pressure, and impaired drainage.",
      "B": "A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter.",
      "C": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority.",
      "D": "Antiviral treatment should not be delayed for a visible rash when the clinical syndrome is concerning."
    },
    "answer": "A",
    "explanation": "The chapter states: Infection in one area can spread to another through direct extension, pressure, and impaired drainage.",
    "id": 105
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "B": "Immune tests such as tuberculin skin testing or interferon-gamma release assays indicate infection, not necessarily active disease.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "Acute otitis media is inflammation of the middle ear with fluid and signs of acute infection."
    },
    "answer": "D",
    "explanation": "The chapter states: Acute otitis media is inflammation of the middle ear with fluid and signs of acute infection.",
    "id": 106
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "A child who is eligible for passive prevention should have the schedule coordinated with the specialty team.",
      "B": "Enlarged hilar or mediastinal lymph nodes, miliary patterns, consolidation, pleural disease, or cavitation may appear.",
      "C": "It often follows a viral upper respiratory infection that causes eustachian tube dysfunction.",
      "D": "Small frequent feeds may help; a child who cannot feed safely may need nasogastric or intravenous fluids."
    },
    "answer": "C",
    "explanation": "The chapter states: It often follows a viral upper respiratory infection that causes eustachian tube dysfunction.",
    "id": 107
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "Marking the border helps detect spread, but the border can be difficult to see in darker skin.",
      "B": "Streptococcus pneumoniae, nontypeable Haemophilus influenzae, and Moraxella catarrhalis are important bacterial causes, but viruses also contribute.",
      "C": "Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption.",
      "D": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement."
    },
    "answer": "B",
    "explanation": "The chapter states: Streptococcus pneumoniae, nontypeable Haemophilus influenzae, and Moraxella catarrhalis are important bacterial causes, but viruses also contribute.",
    "id": 108
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "Redness alone can occur with crying, fever, or viral inflammation.",
      "B": "A newborn exposed to a contagious caregiver needs urgent evaluation and preventive planning.",
      "C": "A normal examination early in the illness does not exclude meningitis.",
      "D": "Bone and joint infections require prompt recognition because delay can damage growth, cartilage, and function."
    },
    "answer": "A",
    "explanation": "The chapter states: Redness alone can occur with crying, fever, or viral inflammation.",
    "id": 109
  },
  {
    "domain": "ear_sinus",
    "chapter": 11,
    "question": "Which statement is directly supported by the otitis media sinusitis and mastoiditis chapter?",
    "options": {
      "A": "Cerebrospinal fluid should be examined for cell count, protein, glucose, Gram stain, culture, and molecular testing.",
      "B": "Treatment with combination antiretroviral therapy reduces viral load, preserves immune function, prevents progression, and reduces transmission.",
      "C": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "D": "Many children can be managed with pain control and observation under a clear plan."
    },
    "answer": "D",
    "explanation": "The chapter states: Many children can be managed with pain control and observation under a clear plan.",
    "id": 110
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which finding most strongly suggests that a child with pneumonia needs hospital-level care?",
    "options": {
      "A": "A mild cough with normal oxygen saturation and good oral intake",
      "B": "Hypoxemia, increased work of breathing, and inability to maintain oral intake",
      "C": "A history of two colds during the previous winter season",
      "D": "A normal chest examination with a playful child and no fever"
    },
    "answer": "B",
    "explanation": "Hypoxemia, respiratory distress, and dehydration indicate physiologic compromise. A mild illness with normal oxygen and good intake can often be managed at home. Past colds do not set current severity, and a child with a normal examination and playful behavior is less concerning.",
    "id": 111
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Why are blood cultures not routine for every child with uncomplicated pneumonia?",
    "options": {
      "A": "They provide no information in any child with pneumonia and should never be obtained",
      "B": "Their yield is low in mild disease, so they are reserved for severe illness or specific risks",
      "C": "A normal white blood cell count proves that the blood is sterile in every case",
      "D": "Blood cultures should only be obtained after the child has completed antibiotics"
    },
    "answer": "B",
    "explanation": "Cultures can be useful but are not high-yield in every mild case. Severity, hospitalization, device status, immune risk, and complications increase their value. A blood count does not prove sterility. Cultures are best obtained before antibiotics when safe.",
    "id": 112
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "A child with pneumonia has persistent fever and increasing respiratory distress despite antibiotics. What complication should be considered?",
    "options": {
      "A": "A new viral cold that makes pneumonia completely impossible to treat",
      "B": "Empyema, lung abscess, necrotizing pneumonia, or another undrained complication",
      "C": "A harmless antibiotic taste that requires no further evaluation",
      "D": "A normal recovery pattern that never requires repeat examination"
    },
    "answer": "B",
    "explanation": "Persistent fever and worsening distress suggest a complication or inadequate treatment. Empyema, abscess, and necrotizing disease may require imaging and source control. Taste is not a cause of progressive respiratory failure, and worsening illness needs prompt reassessment.",
    "id": 113
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "B": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine.",
      "C": "The clinician must assess severity, likely pathogen, vaccination history, exposure, and complications rather than relying on one test.",
      "D": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia."
    },
    "answer": "C",
    "explanation": "The chapter states: The clinician must assess severity, likely pathogen, vaccination history, exposure, and complications rather than relying on one test.",
    "id": 114
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "A positive test must be interpreted with age, immune status, vaccination history, exposure, and imaging.",
      "B": "Tachypnea is a valuable sign when measured during a quiet period.",
      "C": "The child may have a history of household illness, child care exposure, or an older sibling in school.",
      "D": "Respiratory syncytial virus infects the small airways and can cause bronchiolitis or pneumonia."
    },
    "answer": "B",
    "explanation": "The chapter states: Tachypnea is a valuable sign when measured during a quiet period.",
    "id": 115
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "Retractions, nasal flaring, grunting, head bobbing, reduced air entry, crackles, and hypoxemia increase concern.",
      "B": "A positive viral test does not change the need to assess bacterial complications when the child is deteriorating.",
      "C": "Bacterial meningitis is inflammation of the meninges caused by bacterial infection of the cerebrospinal fluid.",
      "D": "A normal cell count does not completely exclude infection in a neonate or severely immunocompromised child."
    },
    "answer": "A",
    "explanation": "The chapter states: Retractions, nasal flaring, grunting, head bobbing, reduced air entry, crackles, and hypoxemia increase concern.",
    "id": 116
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter.",
      "B": "A child with bloody diarrhea, recent travel, or a household cluster may need investigation.",
      "C": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority.",
      "D": "Older children may complain of chest pain or abdominal pain from lower-lobe irritation."
    },
    "answer": "D",
    "explanation": "The chapter states: Older children may complain of chest pain or abdominal pain from lower-lobe irritation.",
    "id": 117
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "A stereotactic or surgical aspirate can provide the diagnosis and reduce pressure.",
      "B": "Bacteremia can occur with pneumonia, urinary infection, skin infection, bone infection, meningitis, or an abdominal source.",
      "C": "Group B Streptococcus and gram-negative organisms matter in neonates.",
      "D": "Neck stiffness may be absent in young infants and in some older children."
    },
    "answer": "C",
    "explanation": "The chapter states: Group B Streptococcus and gram-negative organisms matter in neonates.",
    "id": 118
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "A strong problem representation includes what is known, what is uncertain, and what would change the plan.",
      "B": "Children with hypoxemia, severe distress, dehydration, altered mental status, or a complicated course need hospital assessment.",
      "C": "Coagulase-negative staphylococci are common contaminants, but can cause true infection in a central line or prosthetic device.",
      "D": "Oral rehydration solution is the preferred treatment for mild to moderate dehydration when the child can drink."
    },
    "answer": "B",
    "explanation": "The chapter states: Children with hypoxemia, severe distress, dehydration, altered mental status, or a complicated course need hospital assessment.",
    "id": 119
  },
  {
    "domain": "lower_respiratory",
    "chapter": 12,
    "question": "Which statement is directly supported by the pneumonia and lower respiratory tract infections chapter?",
    "options": {
      "A": "Follow-up imaging is not routine for a child who recovers normally.",
      "B": "Other organisms depend on age, vaccination, immune status, trauma, surgery, and exposure.",
      "C": "Blood cultures should be obtained from separate sites before antibiotics when possible.",
      "D": "Source control includes relief of obstruction, drainage of an abscess, and management of a device."
    },
    "answer": "A",
    "explanation": "The chapter states: Follow-up imaging is not routine for a child who recovers normally.",
    "id": 120
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which treatment is most appropriate for an infant with typical bronchiolitis and no complications?",
    "options": {
      "A": "Supportive oxygen and hydration with close monitoring of breathing and feeding",
      "B": "Routine broad antibiotics and systemic corticosteroids for every infant",
      "C": "A cough suppressant to stop the child from coughing during sleep",
      "D": "Immediate chest tube placement regardless of imaging or examination findings"
    },
    "answer": "A",
    "explanation": "Typical bronchiolitis is managed supportively. Antibiotics and steroids are not routine for uncomplicated viral disease. Cough suppressants are unsafe or ineffective in young infants. A chest tube is used for a specific pleural complication.",
    "id": 121
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "An infant with bronchiolitis becomes sleepy and has pauses in breathing. What is the best response?",
    "options": {
      "A": "Continue home care because pauses are expected during sleep",
      "B": "Arrange urgent assessment for apnea and possible respiratory failure",
      "C": "Give a bronchodilator and discharge if the wheeze improves",
      "D": "Start antibiotics and avoid monitoring oxygen saturation"
    },
    "answer": "B",
    "explanation": "Apnea is a dangerous sign, especially in a young or premature infant. Urgent assessment and monitoring are required. A bronchodilator is not a safe substitute for escalation. Oxygen and breathing status must be assessed.",
    "id": 122
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Why may feeding be part of the severity assessment in bronchiolitis?",
    "options": {
      "A": "Feeding difficulty can signal fatigue, respiratory distress, and dehydration before oxygen falls",
      "B": "A child who feeds well can never develop worsening respiratory disease",
      "C": "Feeding only matters after the child has been intubated",
      "D": "Infants with bronchiolitis should never receive fluids or nutrition"
    },
    "answer": "A",
    "explanation": "Feeding is work for an infant with narrowed airways, and poor intake can reflect fatigue or respiratory compromise. Good feeding is useful but does not exclude later deterioration. Nutrition and fluids remain important, and supportive feeding may need to change route or volume.",
    "id": 123
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Apnea, poor feeding, hypoxemia, and increasing work of breathing are the important bedside findings.",
      "B": "A negative test does not always exclude infection in a young child or severely immunocompromised child.",
      "C": "Blood cultures, cerebrospinal fluid testing, and targeted molecular tests are central.",
      "D": "Inflammation, mucus, and airway narrowing increase resistance to airflow."
    },
    "answer": "D",
    "explanation": "The chapter states: Inflammation, mucus, and airway narrowing increase resistance to airflow.",
    "id": 124
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Antidiarrheal medicines are generally avoided in children because they can worsen some infections and cause serious adverse effects.",
      "B": "Do not use antibiotics to cover travel generally; the risk pattern and clinical syndrome should guide therapy.",
      "C": "Infants have small airways and limited reserve, so feeding, breathing, and energy balance can fail quickly.",
      "D": "A child who is toxic, vomiting, dehydrated, or unable to take oral therapy may need intravenous treatment."
    },
    "answer": "C",
    "explanation": "The chapter states: Infants have small airways and limited reserve, so feeding, breathing, and energy balance can fail quickly.",
    "id": 125
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
      "B": "Bronchiolitis is usually a clinical diagnosis and is managed primarily with supportive care.",
      "C": "Staphylococcus aureus is a common cause, and community-associated resistant strains may change empiric choices.",
      "D": "Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe."
    },
    "answer": "B",
    "explanation": "The chapter states: Bronchiolitis is usually a clinical diagnosis and is managed primarily with supportive care.",
    "id": 126
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Illness begins with nasal congestion, cough, and low-grade fever.",
      "B": "Brain abscess often requires a combination of antimicrobial therapy and drainage or excision.",
      "C": "A young infant may show pseudoparalysis rather than localizing pain.",
      "D": "It can also occur without an obvious focus, especially in young infants or immunocompromised children."
    },
    "answer": "A",
    "explanation": "The chapter states: Illness begins with nasal congestion, cough, and low-grade fever.",
    "id": 127
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Fluid is sent for cell count, Gram stain, culture, and molecular testing.",
      "B": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
      "C": "Treatment depends on age, severity, ability to take oral medicine, local resistance, and pyelonephritis risk.",
      "D": "Wheeze, crackles, retractions, tachypnea, and poor feeding may follow."
    },
    "answer": "D",
    "explanation": "The chapter states: Wheeze, crackles, retractions, tachypnea, and poor feeding may follow.",
    "id": 128
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "B": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "C": "The child may have a history of household illness, child care exposure, or an older sibling in school.",
      "D": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment."
    },
    "answer": "C",
    "explanation": "The chapter states: The child may have a history of household illness, child care exposure, or an older sibling in school.",
    "id": 129
  },
  {
    "domain": "bronchiolitis",
    "chapter": 13,
    "question": "Which statement is directly supported by the bronchiolitis and viral respiratory disease chapter?",
    "options": {
      "A": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "B": "Respiratory syncytial virus is common, but rhinovirus, parainfluenza, influenza, adenovirus, and other viruses can produce a similar syndrome.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal."
    },
    "answer": "B",
    "explanation": "The chapter states: Respiratory syncytial virus is common, but rhinovirus, parainfluenza, influenza, adenovirus, and other viruses can produce a similar syndrome.",
    "id": 130
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "A high-risk child has influenza-like illness and is seen early. Which treatment principle is most appropriate?",
    "options": {
      "A": "Consider antiviral therapy promptly according to current guidance and the child's risk",
      "B": "Give antibiotics routinely because influenza and bacterial pneumonia are identical",
      "C": "Avoid all testing because the virus name never affects care",
      "D": "Use aspirin for fever control in every child with influenza"
    },
    "answer": "A",
    "explanation": "Early antiviral treatment can benefit high-risk children. Antibiotics do not treat influenza itself. Testing can guide treatment and isolation. Aspirin is avoided in children because of Reye syndrome risk.",
    "id": 131
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which infant is at increased risk of severe respiratory syncytial virus disease?",
    "options": {
      "A": "A full-term infant with a mild runny nose and normal feeding",
      "B": "A premature infant with chronic lung disease and poor feeding",
      "C": "An adolescent with a mild sore throat and no chronic illness",
      "D": "A school-age child with a single sneeze and normal oxygen saturation"
    },
    "answer": "B",
    "explanation": "Prematurity and chronic lung disease increase the risk of severe bronchiolitis, apnea, and feeding failure. Mild illness in an otherwise healthy child is less concerning. Age and underlying conditions change the risk from the same virus.",
    "id": 132
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "A child with a viral respiratory infection improves and then develops persistent fever, focal chest findings, and worsening distress. What should be considered?",
    "options": {
      "A": "Secondary bacterial pneumonia or another complication rather than assuming the original virus explains everything",
      "B": "A harmless recurrence of the same cold that never needs evaluation",
      "C": "An allergy to the viral test rather than a new infection",
      "D": "That antibiotics should have been started before any culture in every viral illness"
    },
    "answer": "A",
    "explanation": "A biphasic course can indicate bacterial superinfection or another complication. Persistent fever and focal findings need reassessment. Viral testing does not exclude bacterial disease, but antibiotics are not automatically required for every viral illness.",
    "id": 133
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption.",
      "B": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine."
    },
    "answer": "A",
    "explanation": "The chapter states: Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption.",
    "id": 134
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "Contrast-enhanced imaging is usually needed to characterize the lesion, its location, size, mass effect, and complications.",
      "B": "Necrotizing infection can follow surgery, trauma, varicella, or a deep wound and is a surgical emergency.",
      "C": "The team should monitor pain, fever, function, inflammatory markers, and imaging when needed.",
      "D": "The clinician should avoid treating a virus name as a complete diagnosis."
    },
    "answer": "D",
    "explanation": "The chapter states: The clinician should avoid treating a virus name as a complete diagnosis.",
    "id": 135
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "A child with rigid abdomen, shock, or rapid deterioration needs urgent resuscitation and surgical assessment.",
      "B": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone.",
      "C": "Influenza usually begins abruptly with fever, headache, muscle aches, fatigue, sore throat, and cough.",
      "D": "A child with fever, abnormal perfusion, altered mental status, or a device needs prompt cultures and treatment."
    },
    "answer": "C",
    "explanation": "The chapter states: Influenza usually begins abruptly with fever, headache, muscle aches, fatigue, sore throat, and cough.",
    "id": 136
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "B": "Most children recover with supportive care, but influenza can cause pneumonia, encephalopathy, myocarditis, secondary bacterial infection, and death.",
      "C": "Antidiarrheal medicines are generally avoided in children because they can worsen some infections and cause serious adverse effects.",
      "D": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies."
    },
    "answer": "B",
    "explanation": "The chapter states: Most children recover with supportive care, but influenza can cause pneumonia, encephalopathy, myocarditis, secondary bacterial infection, and death.",
    "id": 137
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "Molecular testing is useful when the result will guide antiviral treatment, isolation, or cohorting.",
      "B": "Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe.",
      "C": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
      "D": "Epstein-Barr virus commonly causes infectious mononucleosis in adolescents, with fever, exudative pharyngitis, fatigue, and lymphadenopathy."
    },
    "answer": "A",
    "explanation": "The chapter states: Molecular testing is useful when the result will guide antiviral treatment, isolation, or cohorting.",
    "id": 138
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "B": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia."
    },
    "answer": "D",
    "explanation": "The chapter states: A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
    "id": 139
  },
  {
    "domain": "respiratory_viruses",
    "chapter": 14,
    "question": "Which statement is directly supported by the influenza rsv and emerging respiratory viruses chapter?",
    "options": {
      "A": "Soil-transmitted helminths such as Ascaris, Trichuris, and hookworm can cause intestinal symptoms, anemia, malnutrition, or obstruction.",
      "B": "A blood count, liver tests, blood cultures, malaria smears, and targeted serology or molecular tests may be appropriate.",
      "C": "Respiratory syncytial virus infects the small airways and can cause bronchiolitis or pneumonia.",
      "D": "A child with varicella should avoid contact with susceptible high-risk people and follow local exclusion policy."
    },
    "answer": "C",
    "explanation": "The chapter states: Respiratory syncytial virus infects the small airways and can cause bronchiolitis or pneumonia.",
    "id": 140
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "A young child has a positive tuberculosis immune test, a normal examination, and normal chest imaging after household exposure. What does the result most likely indicate?",
    "options": {
      "A": "The child definitely has active contagious pulmonary tuberculosis and must be isolated for months",
      "B": "The child may have latent tuberculosis infection and needs preventive treatment planning",
      "C": "The test proves the child has never encountered tuberculosis",
      "D": "A positive test should be ignored unless the child is coughing blood"
    },
    "answer": "B",
    "explanation": "A positive immune test indicates sensitization. A normal examination and imaging may fit latent infection, though active disease must be assessed. Preventive treatment can reduce progression in young or high-risk children. A negative test would not prove no exposure in every host.",
    "id": 141
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Why is household contact investigation part of pediatric tuberculosis care?",
    "options": {
      "A": "Young children usually acquire infection from a close infectious person and may reveal a source case",
      "B": "Children with tuberculosis are always the source of infection for every adult in the community",
      "C": "Household investigation replaces the need to treat the child with tuberculosis",
      "D": "Contact testing is only useful after the child has completed treatment"
    },
    "answer": "A",
    "explanation": "Children usually acquire tuberculosis from adults or older adolescents rather than transmitting it widely. Contact investigation finds the source and protects other vulnerable people. It does not replace treating the child, and it should happen promptly.",
    "id": 142
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which host factor increases the risk that latent tuberculosis will progress to active disease?",
    "options": {
      "A": "A healthy adolescent with a negative immune test and no exposure",
      "B": "A young child or an immunocompromised child with recent infection",
      "C": "A school-age child with a mild cold and no known tuberculosis contact",
      "D": "A child who has completed all routine vaccinations and has no chronic illness"
    },
    "answer": "B",
    "explanation": "Young age and immune suppression are major risk factors for progression after infection. Recent infection also increases risk. A negative test and no exposure do not establish latent infection. Routine vaccines do not replace tuberculosis prevention or treatment.",
    "id": 143
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "B": "Tuberculosis in children is a family and public health diagnosis as much as an individual infection.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment."
    },
    "answer": "B",
    "explanation": "The chapter states: Tuberculosis in children is a family and public health diagnosis as much as an individual infection.",
    "id": 144
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "B": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "C": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "D": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness."
    },
    "answer": "A",
    "explanation": "The chapter states: Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
    "id": 145
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "A positive screening test should be confirmed and linked to care, not treated as an isolated result.",
      "B": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "C": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
      "D": "Latent tuberculosis infection means the child has evidence of immune response without clinical or radiographic disease."
    },
    "answer": "D",
    "explanation": "The chapter states: Latent tuberculosis infection means the child has evidence of immune response without clinical or radiographic disease.",
    "id": 146
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "It is highly contagious and can cause pneumonia, encephalitis, and immune suppression.",
      "B": "Adolescents need sexual health care that is confidential, respectful, and developmentally appropriate.",
      "C": "Tuberculosis disease means the organism is causing symptoms or organ injury.",
      "D": "The child may present with fever, vomiting, pain, distention, tenderness, or shock."
    },
    "answer": "C",
    "explanation": "The chapter states: Tuberculosis disease means the organism is causing symptoms or organ injury.",
    "id": 147
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "Cytomegalovirus, toxoplasmosis, syphilis, rubella, varicella, Zika virus, and herpes simplex virus deserve consideration based on the pattern.",
      "B": "Active disease requires a multidrug regimen tailored to susceptibility, site, age, and response.",
      "C": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone.",
      "D": "Giardia duodenalis causes diarrhea, bloating, malabsorption, and weight loss after contaminated water exposure or child care spread."
    },
    "answer": "B",
    "explanation": "The chapter states: Active disease requires a multidrug regimen tailored to susceptibility, site, age, and response.",
    "id": 148
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "Children under five and children with HIV or other immune compromise have a higher risk of rapid progression.",
      "B": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment."
    },
    "answer": "A",
    "explanation": "The chapter states: Children under five and children with HIV or other immune compromise have a higher risk of rapid progression.",
    "id": 149
  },
  {
    "domain": "tuberculosis",
    "chapter": 15,
    "question": "Which statement is directly supported by the tuberculosis and nontuberculous mycobacteria chapter?",
    "options": {
      "A": "Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body.",
      "B": "Water-soluble drugs may therefore have a larger volume of distribution, while fat-soluble drugs may behave differently.",
      "C": "Compared with the child in obvious shock, a fast and calm clinician might be most.",
      "D": "A newborn exposed to a contagious caregiver needs urgent evaluation and preventive planning."
    },
    "answer": "D",
    "explanation": "The chapter states: A newborn exposed to a contagious caregiver needs urgent evaluation and preventive planning.",
    "id": 150
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "A young infant has fever, poor feeding, and unusual sleepiness but no neck stiffness. What is the safest assessment?",
    "options": {
      "A": "Meningitis is unlikely because the neck is supple and the infant is not vomiting",
      "B": "The infant needs urgent evaluation for possible meningitis and sepsis despite the soft neck",
      "C": "A normal temperature excludes central nervous system infection in a newborn",
      "D": "The infant should be sent home if the fontanelle is soft and the cry is present"
    },
    "answer": "B",
    "explanation": "Young infants often lack meningismus. Poor feeding and lethargy are concerning for sepsis or meningitis. A soft fontanelle and a cry do not exclude infection. Newborns may be hypothermic rather than febrile.",
    "id": 151
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "A child with suspected bacterial meningitis is unstable for lumbar puncture. What should happen next?",
    "options": {
      "A": "Delay antibiotics until cerebrospinal fluid is obtained safely",
      "B": "Start empiric antibiotics and obtain blood cultures while stabilizing the child",
      "C": "Send the child home because a lumbar puncture cannot be performed",
      "D": "Give only steroids and avoid antimicrobial therapy"
    },
    "answer": "B",
    "explanation": "Treatment must not be delayed for a procedure that cannot be performed safely. Blood cultures and clinical evaluation still provide information. Discharge is unsafe, and steroids do not replace antimicrobial therapy.",
    "id": 152
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which follow-up is especially important after childhood meningitis?",
    "options": {
      "A": "Hearing, developmental, and neurologic assessment according to the child's course",
      "B": "No follow-up if the fever resolves before discharge",
      "C": "Repeat lumbar puncture weekly for every child regardless of symptoms",
      "D": "Discontinuation of vaccines because the infection proves immunity"
    },
    "answer": "A",
    "explanation": "Meningitis can cause hearing loss, seizures, hydrocephalus, and developmental effects. Follow-up should match the child's risks. Routine weekly lumbar puncture is not indicated for every child, and infection does not cancel the need for routine vaccination.",
    "id": 153
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "Oral rehydration solution is the preferred treatment for mild to moderate dehydration when the child can drink.",
      "B": "A strong problem representation includes what is known, what is uncertain, and what would change the plan.",
      "C": "Bacterial meningitis is inflammation of the meninges caused by bacterial infection of the cerebrospinal fluid.",
      "D": "Other organisms may suggest anatomic obstruction, voiding dysfunction, a device, sexual exposure, or a resistant organism."
    },
    "answer": "C",
    "explanation": "The chapter states: Bacterial meningitis is inflammation of the meninges caused by bacterial infection of the cerebrospinal fluid.",
    "id": 154
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "The evaluation combines maternal records, timing, examination, serology, cultures, molecular tests, imaging, and tissue when needed.",
      "B": "It can progress rapidly, cause hearing loss, seizures, stroke, hydrocephalus, developmental injury, or death.",
      "C": "Hand hygiene, safe water, food preparation, and exclusion of symptomatic children from certain settings reduce transmission.",
      "D": "A focused parasite examination, antigen test, or serology is chosen from the geography and syndrome."
    },
    "answer": "B",
    "explanation": "The chapter states: It can progress rapidly, cause hearing loss, seizures, stroke, hydrocephalus, developmental injury, or death.",
    "id": 155
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "Viral meningitis is often self-limited but can look identical at the bedside.",
      "B": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "C": "Fungi are often environmental, so exposure history and the immune defect help predict the organism.",
      "D": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment."
    },
    "answer": "A",
    "explanation": "The chapter states: Viral meningitis is often self-limited but can look identical at the bedside.",
    "id": 156
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "B": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "C": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness.",
      "D": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement."
    },
    "answer": "D",
    "explanation": "The chapter states: Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement.",
    "id": 157
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "A positive screening test should be confirmed and linked to care, not treated as an isolated result.",
      "B": "A child with a central line needs line care and a plan for suspected bloodstream infection.",
      "C": "Older children may report fever, headache, photophobia, neck stiffness, vomiting, or confusion.",
      "D": "A positive antigen test needs clinical interpretation because false positives and colonization occur."
    },
    "answer": "C",
    "explanation": "The chapter states: Older children may report fever, headache, photophobia, neck stiffness, vomiting, or confusion.",
    "id": 158
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "Rectal measurement is generally the most reliable in young infants when performed safely and according to policy.",
      "B": "Kernig and Brudzinski signs can support the diagnosis but are not sensitive.",
      "C": "It is a structured review of where the child went, when, what happened, and what prevention was used.",
      "D": "The clinical plan must name the immune defect and the support system around the child."
    },
    "answer": "B",
    "explanation": "The chapter states: Kernig and Brudzinski signs can support the diagnosis but are not sensitive.",
    "id": 159
  },
  {
    "domain": "cns_infection",
    "chapter": 16,
    "question": "Which statement is directly supported by the meningitis and encephalitis chapter?",
    "options": {
      "A": "Young infants may have fever or hypothermia, poor feeding, lethargy, irritability, apnea, a bulging fontanelle, or seizures.",
      "B": "Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment.",
      "C": "A positive viral test does not change the need to assess bacterial complications when the child is deteriorating.",
      "D": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation."
    },
    "answer": "A",
    "explanation": "The chapter states: Young infants may have fever or hypothermia, poor feeding, lethargy, irritability, apnea, a bulging fontanelle, or seizures.",
    "id": 160
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "A child with sinusitis develops a focal deficit and a ring-enhancing brain lesion. What is the best next step?",
    "options": {
      "A": "Treat with supportive care alone because sinus infection cannot spread into the brain",
      "B": "Involve neurosurgery and infectious disease and plan imaging-guided diagnosis or drainage",
      "C": "Avoid blood cultures because the lesion already proves the diagnosis",
      "D": "Start steroids and delay antimicrobial therapy until the lesion resolves"
    },
    "answer": "B",
    "explanation": "Sinus infection can extend through bone into the orbit or brain. A focal lesion needs specialist management and source assessment. Blood cultures and lesion sampling can identify the organism. Steroids do not replace antimicrobial and source-control treatment.",
    "id": 161
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Why is lumbar puncture usually avoided when a large focal brain lesion is suspected?",
    "options": {
      "A": "It may create a risk of herniation when intracranial pressure is elevated",
      "B": "It always causes a permanent hearing loss in any child",
      "C": "It cannot examine cerebrospinal fluid for infection under any circumstance",
      "D": "It is only useful after a brain abscess has completely resolved"
    },
    "answer": "A",
    "explanation": "A focal lesion can raise pressure and change cerebrospinal fluid dynamics, making a lumbar puncture dangerous. The decision is individualized by specialists. Lumbar puncture can diagnose some central nervous system infections, but it is not safe in every child and is not necessary after complete resolution alone.",
    "id": 162
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which finding suggests that a child with a focal brain infection needs urgent rather than elective review?",
    "options": {
      "A": "A small stable lesion in a child who remains alert with no new symptoms",
      "B": "New weakness, decreasing consciousness, worsening headache, or signs of herniation",
      "C": "A mild runny nose that is already improving",
      "D": "A normal repeat examination after completing treatment"
    },
    "answer": "B",
    "explanation": "New neurologic deficits, altered consciousness, and signs of increased pressure require urgent specialist review. Stable findings may be monitored by a team, but deterioration changes the pace. A mild rhinovirus or a normal follow-up finding does not indicate an emergency by itself.",
    "id": 163
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority.",
      "B": "Antiviral treatment should not be delayed for a visible rash when the clinical syndrome is concerning.",
      "C": "Antifungal selection depends on the organism, site, immune status, organ function, and interactions with other medicines.",
      "D": "A collection may be bacterial, fungal, tuberculous, or parasitic depending on the host and exposure."
    },
    "answer": "D",
    "explanation": "The chapter states: A collection may be bacterial, fungal, tuberculous, or parasitic depending on the host and exposure.",
    "id": 164
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "Color, temperature gradient, pulses, mental status, urine output, lactate, and blood pressure should be interpreted together.",
      "B": "Children with hypoxemia, severe distress, dehydration, altered mental status, or a complicated course need hospital assessment.",
      "C": "The clinician must identify the lesion, determine its source, and decide whether drainage is needed.",
      "D": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large."
    },
    "answer": "C",
    "explanation": "The chapter states: The clinician must identify the lesion, determine its source, and decide whether drainage is needed.",
    "id": 165
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "The protection is specific to the pathogen and may change over time or with new strains.",
      "B": "Epidural abscess may compress the spinal cord or brain and requires urgent neurosurgical assessment.",
      "C": "During delivery, the newborn can be exposed to maternal blood, genital secretions, and other fluids.",
      "D": "A strong problem representation includes what is known, what is uncertain, and what would change the plan."
    },
    "answer": "B",
    "explanation": "The chapter states: Epidural abscess may compress the spinal cord or brain and requires urgent neurosurgical assessment.",
    "id": 166
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter.",
      "B": "Immunocompromised children may not mount fever, and a normal white blood cell count can be falsely reassuring.",
      "C": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
      "D": "A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly."
    },
    "answer": "A",
    "explanation": "The chapter states: A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter.",
    "id": 167
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "B": "Neutropenia impairs phagocytosis and raises the risk of bacterial and fungal infection.",
      "C": "Young infants have limited reserve for maintaining airway tone, feeding, blood glucose, and perfusion.",
      "D": "Dental infection, penetrating injury, and a neurosurgical device create additional pathways."
    },
    "answer": "D",
    "explanation": "The chapter states: Dental infection, penetrating injury, and a neurosurgical device create additional pathways.",
    "id": 168
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness.",
      "B": "A child who is toxic, vomiting, dehydrated, or unable to take oral therapy may need intravenous treatment.",
      "C": "Contrast-enhanced imaging is usually needed to characterize the lesion, its location, size, mass effect, and complications.",
      "D": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question."
    },
    "answer": "C",
    "explanation": "The chapter states: Contrast-enhanced imaging is usually needed to characterize the lesion, its location, size, mass effect, and complications.",
    "id": 169
  },
  {
    "domain": "focal_cns",
    "chapter": 17,
    "question": "Which statement is directly supported by the brain abscess and focal central nervous system infection chapter?",
    "options": {
      "A": "The prescription must be practical for the family and tolerable for the child.",
      "B": "Blood cultures and aspirated material should be obtained when safe.",
      "C": "Fever is a regulated rise in body temperature produced by the immune response.",
      "D": "Missing septic arthritis can destroy the joint, so the dangerous diagnosis drives the tempo of evaluation."
    },
    "answer": "B",
    "explanation": "The chapter states: Blood cultures and aspirated material should be obtained when safe.",
    "id": 170
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "A fluctuant skin lesion with central tenderness and surrounding redness is most likely to require which additional intervention?",
    "options": {
      "A": "Incision and drainage in addition to any indicated antibiotics",
      "B": "Only a topical moisturizer because the collection will always resolve",
      "C": "Immediate amputation for every cutaneous abscess",
      "D": "Avoidance of cultures because the surface is not sterile"
    },
    "answer": "A",
    "explanation": "A fluctuant lesion suggests an abscess, and drainage is often definitive. Moisturizer does not treat a collection. Amputation is not routine. Cultures may be useful, especially for recurrent, severe, or unusual infection, even though the skin surface is colonized.",
    "id": 171
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which feature most strongly suggests necrotizing soft tissue infection?",
    "options": {
      "A": "Mild redness around a healed insect bite with normal function",
      "B": "Severe pain out of proportion, rapid spread, dusky skin, and systemic illness",
      "C": "A single crusted lesion with no fever or pain",
      "D": "Itching without warmth, swelling, or tenderness"
    },
    "answer": "B",
    "explanation": "Necrotizing infection causes tissue injury that is more severe than the surface suggests. Systemic toxicity and disproportionate pain are red flags. A crusted lesion may be impetigo, and itching alone is usually not a deep infection.",
    "id": 172
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Why should a child with a skin infection have a full examination rather than only a lesion check?",
    "options": {
      "A": "Infection can spread to lymph nodes, blood, joints, or other deep structures and may occur with systemic illness",
      "B": "Skin infections never cause fever unless the child has a separate illness",
      "C": "The lesion is always the only source and does not require a history",
      "D": "Antibiotics should be prescribed before the depth of infection is assessed"
    },
    "answer": "A",
    "explanation": "A full examination finds spread, portals, complications, and systemic illness. Skin infection can cause fever or be associated with a deeper process. The history and depth assessment guide treatment. Antibiotics should follow a diagnosis and source-control plan.",
    "id": 173
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "Skin and soft tissue infections range from superficial impetigo to necrotizing fasciitis.",
      "B": "Candida species commonly cause bloodstream infection in premature infants and children with central lines.",
      "C": "Some infections can persist for years after a child leaves the place where exposure occurred.",
      "D": "Ask about fresh-water exposure, animals, mosquitoes, ticks, food, sexual contact, tattoos, injections, and contact with sick people."
    },
    "answer": "A",
    "explanation": "The chapter states: Skin and soft tissue infections range from superficial impetigo to necrotizing fasciitis.",
    "id": 174
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "Soil-transmitted helminths such as Ascaris, Trichuris, and hookworm can cause intestinal symptoms, anemia, malnutrition, or obstruction.",
      "B": "A blood count, liver tests, blood cultures, malaria smears, and targeted serology or molecular tests may be appropriate.",
      "C": "A child with a T-cell defect may need viral monitoring and specific antimicrobial prophylaxis.",
      "D": "Impetigo is a superficial infection that causes honey-colored crusts, blisters, or small pustules."
    },
    "answer": "D",
    "explanation": "The chapter states: Impetigo is a superficial infection that causes honey-colored crusts, blisters, or small pustules.",
    "id": 175
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "Confirm access to safe water, malaria protection, vaccines, and a plan for medication while away.",
      "B": "The regimen should cover likely bacterial pathogens while the team searches for a source.",
      "C": "It is usually caused by Staphylococcus aureus or Streptococcus pyogenes.",
      "D": "A positive test may reflect past maternal infection or passive antibody rather than child infection."
    },
    "answer": "C",
    "explanation": "The chapter states: It is usually caused by Staphylococcus aureus or Streptococcus pyogenes.",
    "id": 176
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "The height of the fever does not reliably separate viral from bacterial disease.",
      "B": "Scratching, insect bites, eczema, and minor trauma create portals.",
      "C": "T-cell defects impair cell-mediated immunity and increase risk from viruses, fungi, mycobacteria, and intracellular organisms.",
      "D": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large."
    },
    "answer": "B",
    "explanation": "The chapter states: Scratching, insect bites, eczema, and minor trauma create portals.",
    "id": 177
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "Hand hygiene and covering lesions reduce spread in households and child care.",
      "B": "Bronchiolitis is concentrated in the first two years while the smallest airways are narrow.",
      "C": "A strong problem representation includes what is known, what is uncertain, and what would change the plan.",
      "D": "It creates a clear clinical explanation, a safety net, and a plan for reassessment."
    },
    "answer": "A",
    "explanation": "The chapter states: Hand hygiene and covering lesions reduce spread in households and child care.",
    "id": 178
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "A child with cough may have viral bronchitis, pneumonia, or a foreign body.",
      "B": "It must also include a plan for monitoring, adverse effects, adherence, and completion.",
      "C": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
      "D": "It presents with warmth, redness, swelling, tenderness, and often fever."
    },
    "answer": "D",
    "explanation": "The chapter states: It presents with warmth, redness, swelling, tenderness, and often fever.",
    "id": 179
  },
  {
    "domain": "skin_soft_tissue",
    "chapter": 18,
    "question": "Which statement is directly supported by the skin and soft tissue infections chapter?",
    "options": {
      "A": "Respiratory syncytial virus is common, but rhinovirus, parainfluenza, influenza, adenovirus, and other viruses can produce a similar syndrome.",
      "B": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone.",
      "C": "Marking the border helps detect spread, but the border can be difficult to see in darker skin.",
      "D": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa."
    },
    "answer": "C",
    "explanation": "The chapter states: Marking the border helps detect spread, but the border can be difficult to see in darker skin.",
    "id": 180
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "A febrile child refuses to move a swollen joint. What is the most important next step?",
    "options": {
      "A": "Assume transient synovitis and discharge with pain medicine",
      "B": "Obtain urgent joint assessment and aspiration for possible septic arthritis",
      "C": "Wait two weeks to see whether the child begins walking normally",
      "D": "Give antibiotics without examining or culturing the joint"
    },
    "answer": "B",
    "explanation": "Fever and a joint that cannot move require urgent exclusion of septic arthritis. Transient synovitis may resemble infection but is a diagnosis of exclusion in a febrile, unwell child. Delay can damage the joint. Antibiotics alone do not replace aspiration and source control.",
    "id": 181
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Why can an early radiograph be normal in a child with osteomyelitis?",
    "options": {
      "A": "Bone changes take time to become visible even when infection is present",
      "B": "A normal radiograph proves that the bone cannot be infected",
      "C": "Osteomyelitis only affects soft tissue and never changes bone",
      "D": "MRI is never useful in a child with bone pain"
    },
    "answer": "A",
    "explanation": "Early bone infection may not yet produce visible destruction. A normal radiograph does not exclude disease. Osteomyelitis involves bone and marrow, and MRI can show early marrow and soft tissue changes.",
    "id": 182
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Why is source control important in septic arthritis?",
    "options": {
      "A": "Removing infected joint fluid reduces bacterial burden and pressure and helps preserve joint function",
      "B": "Drainage makes antibiotics unnecessary in every case",
      "C": "Source control is only needed when the blood culture is negative",
      "D": "Joint infection never causes permanent damage"
    },
    "answer": "A",
    "explanation": "Drainage removes infected material and reduces pressure, supporting recovery. Antibiotics are still needed. Source control does not depend on a negative blood culture, and untreated arthritis can cause lasting damage.",
    "id": 183
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "Safe pediatric prescribing starts with the source and the pathogen rather than with the drug name.",
      "B": "Bone and joint infections require prompt recognition because delay can damage growth, cartilage, and function.",
      "C": "Do not use antibiotics to cover travel generally; the risk pattern and clinical syndrome should guide therapy.",
      "D": "In adolescence, behavior, sexual health, mental health, and access to confidential care influence both diagnosis and prevention."
    },
    "answer": "B",
    "explanation": "The chapter states: Bone and joint infections require prompt recognition because delay can damage growth, cartilage, and function.",
    "id": 184
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "Fever, swelling, warmth, and systemic illness support the diagnosis.",
      "B": "For a newly arrived family, use an interpreter and avoid assuming literacy.",
      "C": "Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body.",
      "D": "There is no single temperature at which every child requires antibiotics."
    },
    "answer": "A",
    "explanation": "The chapter states: Fever, swelling, warmth, and systemic illness support the diagnosis.",
    "id": 185
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "Later in infancy and early childhood, immune memory expands through vaccines and natural exposure.",
      "B": "A fever that falls with an antipyretic does not prove the illness is benign.",
      "C": "Tissue should be kept moist and handled according to the tests requested.",
      "D": "A young infant may show pseudoparalysis rather than localizing pain."
    },
    "answer": "D",
    "explanation": "The chapter states: A young infant may show pseudoparalysis rather than localizing pain.",
    "id": 186
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "The same milligram per kilogram dose can produce very different exposures across the pediatric age range.",
      "B": "Clear or colored nasal discharge, cough, sore throat, fever, hoarseness, and poor appetite are common.",
      "C": "Osteomyelitis may cause focal bone tenderness, swelling, fever, and refusal to use the limb.",
      "D": "A test that does not help answer the central syndrome should justify its own place."
    },
    "answer": "C",
    "explanation": "The chapter states: Osteomyelitis may cause focal bone tenderness, swelling, fever, and refusal to use the limb.",
    "id": 187
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "Toxoid vaccines use a modified toxin to teach the immune system to neutralize the natural toxin.",
      "B": "Chronic or indolent infection can present with pain and imaging changes without high fever.",
      "C": "Neonates have a higher proportion of total body water and lower fat content than older children.",
      "D": "Prevention is the part of infectious disease care that happens before the child becomes ill."
    },
    "answer": "B",
    "explanation": "The chapter states: Chronic or indolent infection can present with pain and imaging changes without high fever.",
    "id": 188
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "The differential includes transient synovitis, trauma, inflammatory arthritis, bone tumor, and other infection.",
      "B": "A medicine that prevents infection in one high-risk group may cause harm in another.",
      "C": "Color, temperature gradient, pulses, mental status, urine output, lactate, and blood pressure should be interpreted together.",
      "D": "Infection in one area can spread to another through direct extension, pressure, and impaired drainage."
    },
    "answer": "A",
    "explanation": "The chapter states: The differential includes transient synovitis, trauma, inflammatory arthritis, bone tumor, and other infection.",
    "id": 189
  },
  {
    "domain": "bone_joint",
    "chapter": 19,
    "question": "Which statement is directly supported by the bone and joint infections chapter?",
    "options": {
      "A": "Temperature instability may appear as fever, hypothermia, or a change from the child's usual thermal pattern.",
      "B": "Upper respiratory infections are the most frequent reason children receive antibiotics, and most of them are viral.",
      "C": "Pleural fluid from a complicated effusion should be examined and cultured when drainage is performed.",
      "D": "Fluid is sent for cell count, Gram stain, culture, and molecular testing."
    },
    "answer": "D",
    "explanation": "The chapter states: Fluid is sent for cell count, Gram stain, culture, and molecular testing.",
    "id": 190
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "A child with a central line has one positive culture with a common skin organism and no symptoms. What is the best approach?",
    "options": {
      "A": "Repeat cultures and assess the device and clinical course before committing to prolonged therapy",
      "B": "Treat every single positive culture as definite endocarditis for six weeks",
      "C": "Ignore the result because a central line can never be infected",
      "D": "Remove the line without any cultures or clinical assessment"
    },
    "answer": "A",
    "explanation": "A single positive culture may be contamination, but device risk and symptoms matter. Repeat cultures and assessment improve interpretation. Routine long treatment for every positive result is not justified, and ignoring the result is unsafe. Device removal is a major decision that requires context.",
    "id": 191
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which finding should prompt evaluation for infective endocarditis?",
    "options": {
      "A": "Persistent bacteremia with a new heart murmur or embolic findings",
      "B": "A single sneeze with a normal examination and no fever",
      "C": "A mild viral rash that resolves in two days",
      "D": "A negative blood culture with no device or cardiac history"
    },
    "answer": "A",
    "explanation": "Persistent bacteremia, a new murmur, and embolic findings are classic clues. Mild viral symptoms or a resolving rash do not suggest endocarditis. A negative culture in a low-risk child is not a reason to pursue echocardiography without another indication.",
    "id": 192
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Why is device removal sometimes necessary even when the organism is susceptible?",
    "options": {
      "A": "Biofilm on the device can protect organisms from antibiotics and sustain infection",
      "B": "Antibiotics never enter the bloodstream in a child with a central line",
      "C": "Removal is required for every positive culture regardless of symptoms",
      "D": "A device cannot cause infection after the exit site heals"
    },
    "answer": "A",
    "explanation": "Biofilm and infected hardware can persist despite active antibiotics. Catheter salvage is possible in selected cases, so removal is not automatic for every culture. A healed exit site does not exclude internal colonization.",
    "id": 193
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "Rectal measurement is generally the most reliable in young infants when performed safely and according to policy.",
      "B": "A superficial swab samples the skin surface and may recover colonizers rather than the deep pathogen.",
      "C": "Bloodstream infection can be transient, intermittent, or persistent.",
      "D": "This chapter provides the working model used throughout the book."
    },
    "answer": "C",
    "explanation": "The chapter states: Bloodstream infection can be transient, intermittent, or persistent.",
    "id": 194
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "A positive viral test does not change the need to assess bacterial complications when the child is deteriorating.",
      "B": "Bacteremia can occur with pneumonia, urinary infection, skin infection, bone infection, meningitis, or an abdominal source.",
      "C": "The immune system produces antibody and memory cells without the child having to experience the full disease.",
      "D": "Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment."
    },
    "answer": "B",
    "explanation": "The chapter states: Bacteremia can occur with pneumonia, urinary infection, skin infection, bone infection, meningitis, or an abdominal source.",
    "id": 195
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "It can also occur without an obvious focus, especially in young infants or immunocompromised children.",
      "B": "Safe pediatric prescribing starts with the source and the pathogen rather than with the drug name.",
      "C": "Some organisms are intrinsically resistant to certain drug classes because of their cell wall, metabolism, or permeability.",
      "D": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies."
    },
    "answer": "A",
    "explanation": "The chapter states: It can also occur without an obvious focus, especially in young infants or immunocompromised children.",
    "id": 196
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "B": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "C": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine.",
      "D": "A child with fever, abnormal perfusion, altered mental status, or a device needs prompt cultures and treatment."
    },
    "answer": "D",
    "explanation": "The chapter states: A child with fever, abnormal perfusion, altered mental status, or a device needs prompt cultures and treatment.",
    "id": 197
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "Acute otitis media is inflammation of the middle ear with fluid and signs of acute infection.",
      "B": "Small frequent feeds may help; a child who cannot feed safely may need nasogastric or intravenous fluids.",
      "C": "Staphylococcus aureus, Streptococcus pneumoniae, group A Streptococcus, and gram-negative organisms can cause severe disease.",
      "D": "Early-onset bacterial infection is commonly associated with organisms acquired from the maternal genital tract or during delivery."
    },
    "answer": "C",
    "explanation": "The chapter states: Staphylococcus aureus, Streptococcus pneumoniae, group A Streptococcus, and gram-negative organisms can cause severe disease.",
    "id": 198
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly.",
      "B": "Coagulase-negative staphylococci are common contaminants, but can cause true infection in a central line or prosthetic device.",
      "C": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement.",
      "D": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex."
    },
    "answer": "B",
    "explanation": "The chapter states: Coagulase-negative staphylococci are common contaminants, but can cause true infection in a central line or prosthetic device.",
    "id": 199
  },
  {
    "domain": "bloodstream",
    "chapter": 20,
    "question": "Which statement is directly supported by the bacteremia endocarditis and intravascular infections chapter?",
    "options": {
      "A": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
      "B": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "C": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "D": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter."
    },
    "answer": "A",
    "explanation": "The chapter states: A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
    "id": 200
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "A child with a positive bag urine culture has no urinary symptoms and feels well. What is the best response?",
    "options": {
      "A": "Treat every positive bag culture as definite urinary infection",
      "B": "Confirm the result with a better specimen and assess whether a urinary syndrome is present",
      "C": "Ignore all future urine testing because bag samples are always useless",
      "D": "Start long intravenous therapy without additional evaluation"
    },
    "answer": "B",
    "explanation": "Bag cultures are prone to contamination. A positive result needs confirmation and clinical correlation. A negative bag result can be useful for screening. Long therapy without a confirmed diagnosis creates avoidable harm.",
    "id": 201
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which child may need imaging after a febrile urinary infection?",
    "options": {
      "A": "A child with recurrent infection, suspected obstruction, or poor response to treatment",
      "B": "Every child with a single uncomplicated cystitis episode and normal follow-up",
      "C": "A child with no urinary symptoms and a negative urinalysis",
      "D": "A child whose infection resolves and who has no anatomic concern"
    },
    "answer": "A",
    "explanation": "Imaging is reserved for cases where anatomy or complications could change management. Routine imaging is not needed for every uncomplicated episode. A negative urinalysis and no symptoms do not justify a urinary imaging workup.",
    "id": 202
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Why is treating constipation relevant to recurrent urinary infection?",
    "options": {
      "A": "Constipation can impair bladder emptying and increase urinary stasis and recurrence",
      "B": "Constipation causes a positive culture only through contamination of the blood",
      "C": "Constipation is unrelated to bladder function and should never be addressed",
      "D": "Treating constipation replaces the need for antibiotics in acute pyelonephritis"
    },
    "answer": "A",
    "explanation": "A full rectum can affect bladder emptying and contribute to urinary stasis. Bowel care is part of prevention but does not replace appropriate treatment for acute kidney infection. Blood contamination is not the mechanism.",
    "id": 203
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "Stewardship is especially difficult in pediatrics because diagnostic certainty is often lower than in adults.",
      "B": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness.",
      "C": "The newborn examination and clinical course decide how urgently to evaluate and treat.",
      "D": "Cystitis causes dysuria, frequency, urgency, suprapubic discomfort, or new incontinence."
    },
    "answer": "D",
    "explanation": "The chapter states: Cystitis causes dysuria, frequency, urgency, suprapubic discomfort, or new incontinence.",
    "id": 204
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
      "B": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "C": "Asymptomatic bacteriuria is a positive culture without a urinary syndrome and generally should not be treated.",
      "D": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture."
    },
    "answer": "C",
    "explanation": "The chapter states: Asymptomatic bacteriuria is a positive culture without a urinary syndrome and generally should not be treated.",
    "id": 205
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "Rapid antigen tests and molecular tests for group A streptococcus are useful when the diagnosis is plausible.",
      "B": "Urinalysis can show pyuria, nitrite, leukocyte esterase, or bacteriuria.",
      "C": "Signs are subtle, physiological reserve is limited, and a benign-appearing examination can precede rapid deterioration.",
      "D": "Warm shock with flash capillary refill and bounding pulses may occur, especially in early distributive shock."
    },
    "answer": "B",
    "explanation": "The chapter states: Urinalysis can show pyuria, nitrite, leukocyte esterase, or bacteriuria.",
    "id": 206
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "Culture confirms the organism and supports susceptibility testing.",
      "B": "Neurologic dysfunction may appear as irritability, confusion, lethargy, poor interaction, or an abnormal response to pain.",
      "C": "It often follows a viral upper respiratory infection that causes eustachian tube dysfunction.",
      "D": "Respiratory viral testing can guide isolation and antiviral decisions."
    },
    "answer": "A",
    "explanation": "The chapter states: Culture confirms the organism and supports susceptibility testing.",
    "id": 207
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "The exact age thresholds and observation rules differ by guideline and should be checked locally.",
      "B": "A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter.",
      "C": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority.",
      "D": "Clean-catch technique is useful in a toilet-trained child when it can be performed reliably."
    },
    "answer": "D",
    "explanation": "The chapter states: Clean-catch technique is useful in a toilet-trained child when it can be performed reliably.",
    "id": 208
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "Immune tests such as tuberculin skin testing or interferon-gamma release assays indicate infection, not necessarily active disease.",
      "B": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "C": "Other organisms may suggest anatomic obstruction, voiding dysfunction, a device, sexual exposure, or a resistant organism.",
      "D": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia."
    },
    "answer": "C",
    "explanation": "The chapter states: Other organisms may suggest anatomic obstruction, voiding dysfunction, a device, sexual exposure, or a resistant organism.",
    "id": 209
  },
  {
    "domain": "urinary",
    "chapter": 21,
    "question": "Which statement is directly supported by the urinary tract and renal infections chapter?",
    "options": {
      "A": "Oral rehydration solution is the preferred treatment for mild to moderate dehydration when the child can drink.",
      "B": "Treatment depends on age, severity, ability to take oral medicine, local resistance, and pyelonephritis risk.",
      "C": "A child who is eligible for passive prevention should have the schedule coordinated with the specialty team.",
      "D": "Coagulase-negative staphylococci are common contaminants, but can cause true infection in a central line or prosthetic device."
    },
    "answer": "B",
    "explanation": "The chapter states: Treatment depends on age, severity, ability to take oral medicine, local resistance, and pyelonephritis risk.",
    "id": 210
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "A child with watery diarrhea is alert, drinking, and making normal urine. What is the best initial treatment?",
    "options": {
      "A": "Oral rehydration solution with continued age-appropriate feeding",
      "B": "Immediate broad antibiotics before obtaining any stool sample",
      "C": "An antidiarrheal medicine that stops all stool output",
      "D": "No fluids because diarrhea will remove excess water"
    },
    "answer": "A",
    "explanation": "Oral rehydration and continued feeding are central for a child who can drink. Antibiotics are not routine for watery diarrhea. Antidiarrheal medicines can cause harm. Fluid replacement is necessary to prevent dehydration.",
    "id": 211
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which child with diarrhea most clearly needs stool testing?",
    "options": {
      "A": "A well child with one day of mild watery stool and no exposure",
      "B": "A child with bloody diarrhea, high fever, or recent international travel",
      "C": "A child who drinks well and has normal urine output after a brief illness",
      "D": "A child with a single soft stool and no systemic symptoms"
    },
    "answer": "B",
    "explanation": "Blood, high fever, travel, outbreak exposure, and severe illness increase the value of stool testing. Mild short-lived disease usually does not need a pathogen-specific test. Clinical hydration remains important in every case.",
    "id": 212
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Why are antidiarrheal medicines often avoided in children?",
    "options": {
      "A": "They can worsen some infections and cause serious complications rather than correct the cause",
      "B": "They always cure dehydration without the need for fluids",
      "C": "They are effective only for bloody diarrhea and severe colitis",
      "D": "They eliminate the need to assess urine output and perfusion"
    },
    "answer": "A",
    "explanation": "Slowing stool can retain pathogens and toxins, and some medicines have serious adverse effects. They do not treat dehydration. They are not a treatment for severe colitis, and they do not replace hydration assessment.",
    "id": 213
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe.",
      "B": "A cough can last for weeks after the acute infection because airway inflammation and mucus production resolve slowly.",
      "C": "The clinician must assess severity, likely pathogen, vaccination history, exposure, and complications rather than relying on one test.",
      "D": "Most children recover with supportive care, but influenza can cause pneumonia, encephalopathy, myocarditis, secondary bacterial infection, and death."
    },
    "answer": "A",
    "explanation": "The chapter states: Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe.",
    "id": 214
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa.",
      "B": "Respiratory syncytial virus is common, but rhinovirus, parainfluenza, influenza, adenovirus, and other viruses can produce a similar syndrome.",
      "C": "A negative test does not always exclude infection in a young child or severely immunocompromised child.",
      "D": "Hand hygiene and safe food and water prevent spread within families and child care."
    },
    "answer": "D",
    "explanation": "The chapter states: Hand hygiene and safe food and water prevent spread within families and child care.",
    "id": 215
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "Assess the child repeatedly because work of breathing can increase over hours.",
      "B": "Tuberculosis in children is a family and public health diagnosis as much as an individual infection.",
      "C": "Viral enteric infections cause watery diarrhea, vomiting, fever, and abdominal cramps.",
      "D": "Streptococcus pneumoniae, nontypeable Haemophilus influenzae, and Moraxella catarrhalis are important bacterial causes, but viruses also contribute."
    },
    "answer": "C",
    "explanation": "The chapter states: Viral enteric infections cause watery diarrhea, vomiting, fever, and abdominal cramps.",
    "id": 216
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "Active disease requires a multidrug regimen tailored to susceptibility, site, age, and response.",
      "B": "Rotavirus, norovirus, adenovirus, and astrovirus are common depending on age and vaccination.",
      "C": "Infants have small airways and limited reserve, so feeding, breathing, and energy balance can fail quickly.",
      "D": "Influenza usually begins abruptly with fever, headache, muscle aches, fatigue, sore throat, and cough."
    },
    "answer": "B",
    "explanation": "The chapter states: Rotavirus, norovirus, adenovirus, and astrovirus are common depending on age and vaccination.",
    "id": 217
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "Bacterial infections such as Salmonella, Shigella, Campylobacter, Yersinia, and pathogenic E.",
      "B": "Respiratory syncytial virus infects the small airways and can cause bronchiolitis or pneumonia.",
      "C": "A positive test must be interpreted with age, immune status, vaccination history, exposure, and imaging.",
      "D": "Brain abscess often requires a combination of antimicrobial therapy and drainage or excision."
    },
    "answer": "A",
    "explanation": "The chapter states: Bacterial infections such as Salmonella, Shigella, Campylobacter, Yersinia, and pathogenic E.",
    "id": 218
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "Bacterial meningitis is inflammation of the meninges caused by bacterial infection of the cerebrospinal fluid.",
      "B": "A normal cell count does not completely exclude infection in a neonate or severely immunocompromised child.",
      "C": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
      "D": "Parasites may cause prolonged diarrhea, malabsorption, growth failure, or eosinophilia depending on exposure."
    },
    "answer": "D",
    "explanation": "The chapter states: Parasites may cause prolonged diarrhea, malabsorption, growth failure, or eosinophilia depending on exposure.",
    "id": 219
  },
  {
    "domain": "gastrointestinal",
    "chapter": 22,
    "question": "Which statement is directly supported by the gastroenteritis and enteric infections chapter?",
    "options": {
      "A": "An abscess is a localized collection with fluctuance, pain, or a central punctum.",
      "B": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority.",
      "C": "Stool testing is not required for every child with mild watery diarrhea.",
      "D": "A congenital heart lesion with right-to-left shunt can allow bacteria to bypass the pulmonary capillary filter."
    },
    "answer": "C",
    "explanation": "The chapter states: Stool testing is not required for every child with mild watery diarrhea.",
    "id": 220
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "A child with a perforated appendix and a drainable abscess is started on antibiotics. What else is required?",
    "options": {
      "A": "Source control through drainage or surgery and close reassessment",
      "B": "No further treatment because antibiotics sterilize every collection",
      "C": "Discharge without imaging or follow-up",
      "D": "A long course of antibiotics without evaluating the collection"
    },
    "answer": "A",
    "explanation": "Antibiotics cannot reliably cure a large infected collection. Drainage or surgery reduces bacterial burden. A persistent collection can sustain sepsis, and follow-up must confirm improvement and resolution.",
    "id": 221
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which finding in a child with abdominal pain requires urgent surgical assessment?",
    "options": {
      "A": "Rigid abdomen, shock, or free air on imaging",
      "B": "Mild cramping after a large meal with normal examination",
      "C": "A transient stomachache that resolves after using the toilet",
      "D": "A normal appetite with no tenderness and no fever"
    },
    "answer": "A",
    "explanation": "Rigidity, shock, and free air suggest perforation or peritonitis. Mild symptoms with a normal examination are less urgent but still require context. A resolving stomachache and normal findings do not indicate a surgical emergency.",
    "id": 222
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Why should hepatitis be evaluated as a syndrome rather than assumed to be viral?",
    "options": {
      "A": "Medicines, obstruction, metabolic disease, and infection can all cause liver injury",
      "B": "All hepatitis is caused by one virus and requires the same treatment",
      "C": "Jaundice never requires laboratory testing",
      "D": "Liver disease cannot cause altered mental status or bleeding"
    },
    "answer": "A",
    "explanation": "The differential includes infections, drugs, biliary disease, and inherited conditions. Treatment differs by cause. Jaundice requires assessment, and severe liver dysfunction can cause encephalopathy and coagulopathy.",
    "id": 223
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "B": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
      "C": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine.",
      "D": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal."
    },
    "answer": "B",
    "explanation": "The chapter states: Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
    "id": 224
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "The child may present with fever, vomiting, pain, distention, tenderness, or shock.",
      "B": "Pleural fluid from a complicated effusion should be examined and cultured when drainage is performed.",
      "C": "Escalation may include high-flow oxygen, noninvasive support, or intubation according to the local pathway.",
      "D": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting."
    },
    "answer": "A",
    "explanation": "The chapter states: The child may present with fever, vomiting, pain, distention, tenderness, or shock.",
    "id": 225
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "Most children recover with supportive care, but influenza can cause pneumonia, encephalopathy, myocarditis, secondary bacterial infection, and death.",
      "B": "Children under five and children with HIV or other immune compromise have a higher risk of rapid progression.",
      "C": "Young infants may have fever or hypothermia, poor feeding, lethargy, irritability, apnea, a bulging fontanelle, or seizures.",
      "D": "The clinician must separate a surgical emergency from a condition that can be managed medically."
    },
    "answer": "D",
    "explanation": "The chapter states: The clinician must separate a surgical emergency from a condition that can be managed medically.",
    "id": 226
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "Skin and soft tissue infections range from superficial impetigo to necrotizing fasciitis.",
      "B": "Osteomyelitis may cause focal bone tenderness, swelling, fever, and refusal to use the limb.",
      "C": "Fever, guarding, pain with movement, and refusal to walk are concerning.",
      "D": "A negative test does not always exclude infection in a young child or severely immunocompromised child."
    },
    "answer": "C",
    "explanation": "The chapter states: Fever, guarding, pain with movement, and refusal to walk are concerning.",
    "id": 227
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "Imaging can show effusion, bone changes, or a collection, but early radiographs can be normal.",
      "B": "Imaging and surgical consultation should follow the local pathway.",
      "C": "A collection may be bacterial, fungal, tuberculous, or parasitic depending on the host and exposure.",
      "D": "Hand hygiene and covering lesions reduce spread in households and child care."
    },
    "answer": "B",
    "explanation": "The chapter states: Imaging and surgical consultation should follow the local pathway.",
    "id": 228
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "A child with rigid abdomen, shock, or rapid deterioration needs urgent resuscitation and surgical assessment.",
      "B": "Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe.",
      "C": "Water-soluble drugs may therefore have a larger volume of distribution, while fat-soluble drugs may behave differently.",
      "D": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia."
    },
    "answer": "A",
    "explanation": "The chapter states: A child with rigid abdomen, shock, or rapid deterioration needs urgent resuscitation and surgical assessment.",
    "id": 229
  },
  {
    "domain": "abdomen_hepatitis",
    "chapter": 23,
    "question": "Which statement is directly supported by the intra-abdominal infections and hepatitis chapter?",
    "options": {
      "A": "It can also occur without an obvious focus, especially in young infants or immunocompromised children.",
      "B": "Parvovirus B19 can cause slapped-cheek rash, arthralgia, and transient aplastic crisis in a child with chronic hemolysis.",
      "C": "Perinatal prevention has greatly reduced transmission when pregnant people receive testing, antiretroviral treatment, and appropriate infant prophylaxis.",
      "D": "A perforated appendix, obstructed bowel, or infected bile duct must be addressed."
    },
    "answer": "D",
    "explanation": "The chapter states: A perforated appendix, obstructed bowel, or infected bile duct must be addressed.",
    "id": 230
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "A child has fever and petechiae and appears unwell. What is the best initial response?",
    "options": {
      "A": "Urgent stabilization and assessment for invasive bacterial infection or another emergency",
      "B": "Reassure the family because petechiae are always a benign viral finding",
      "C": "Start an antihistamine and wait for the rash to fade",
      "D": "Perform only a skin scraping and avoid checking vital signs"
    },
    "answer": "A",
    "explanation": "Petechiae with systemic illness can indicate meningococcemia or another emergency. Antihistamines and observation are unsafe. Vital signs and perfusion assessment are essential, and skin findings do not replace urgent clinical evaluation.",
    "id": 231
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "A newborn has vesicles and poor feeding. Which diagnosis must be considered urgently?",
    "options": {
      "A": "Neonatal herpes simplex virus infection with possible disseminated or central nervous system disease",
      "B": "A harmless heat rash that can be managed without examination",
      "C": "Varicella exposure that never requires antiviral assessment in a newborn",
      "D": "A food allergy that explains vesicles and lethargy"
    },
    "answer": "A",
    "explanation": "Neonatal herpes can cause skin, eye, mouth, brain, or disseminated infection. Vesicles and poor feeding require urgent assessment and treatment. A benign rash does not explain lethargy, and varicella in a newborn can also be serious. Food allergy does not explain vesicles with systemic illness.",
    "id": 232
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Why should antibiotics not be started routinely for a child with suspected infectious mononucleosis and no bacterial evidence?",
    "options": {
      "A": "They do not treat the viral infection and some can cause a prominent rash",
      "B": "Antibiotics cure mononucleosis but should be saved for adults",
      "C": "Mononucleosis cannot cause fever or sore throat",
      "D": "A viral infection always excludes a bacterial complication"
    },
    "answer": "A",
    "explanation": "Antibiotics do not treat Epstein-Barr virus and may cause a rash. They are used when a bacterial complication is documented or strongly suspected. Mononucleosis commonly causes fever and pharyngitis, and viral infection does not eliminate the possibility of a bacterial complication.",
    "id": 233
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "Latent tuberculosis infection means the child has evidence of immune response without clinical or radiographic disease.",
      "B": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement.",
      "C": "Measles causes fever, cough, coryza, conjunctivitis, and a descending maculopapular rash.",
      "D": "Seasonal respiratory viruses create a large share of pediatric illness, school absence, hospital visits, and family disruption."
    },
    "answer": "C",
    "explanation": "The chapter states: Measles causes fever, cough, coryza, conjunctivitis, and a descending maculopapular rash.",
    "id": 234
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "The clinician must separate a surgical emergency from a condition that can be managed medically.",
      "B": "It is highly contagious and can cause pneumonia, encephalitis, and immune suppression.",
      "C": "A newborn exposed to a contagious caregiver needs urgent evaluation and preventive planning.",
      "D": "Bone and joint infections require prompt recognition because delay can damage growth, cartilage, and function."
    },
    "answer": "B",
    "explanation": "The chapter states: It is highly contagious and can cause pneumonia, encephalitis, and immune suppression.",
    "id": 235
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "Isolation and public health notification are urgent when measles is suspected.",
      "B": "Cerebrospinal fluid should be examined for cell count, protein, glucose, Gram stain, culture, and molecular testing.",
      "C": "Impetigo is a superficial infection that causes honey-colored crusts, blisters, or small pustules.",
      "D": "Chronic or indolent infection can present with pain and imaging changes without high fever."
    },
    "answer": "A",
    "explanation": "The chapter states: Isolation and public health notification are urgent when measles is suspected.",
    "id": 236
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "Fever, a new murmur, embolic findings, heart failure, or persistent bacteremia should prompt echocardiography and specialist review.",
      "B": "A positive screening test should be confirmed and linked to care, not treated as an isolated result.",
      "C": "A child with a central line needs line care and a plan for suspected bloodstream infection.",
      "D": "Rubella is generally milder but can cause severe congenital infection if acquired in pregnancy."
    },
    "answer": "D",
    "explanation": "The chapter states: Rubella is generally milder but can cause severe congenital infection if acquired in pregnancy.",
    "id": 237
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "The child may have a history of household illness, child care exposure, or an older sibling in school.",
      "B": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "C": "Parvovirus B19 can cause slapped-cheek rash, arthralgia, and transient aplastic crisis in a child with chronic hemolysis.",
      "D": "It is a structured review of where the child went, when, what happened, and what prevention was used."
    },
    "answer": "C",
    "explanation": "The chapter states: Parvovirus B19 can cause slapped-cheek rash, arthralgia, and transient aplastic crisis in a child with chronic hemolysis.",
    "id": 238
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "Giardia duodenalis causes diarrhea, bloating, malabsorption, and weight loss after contaminated water exposure or child care spread.",
      "B": "Roseola typically causes high fever followed by a rash as the fever resolves.",
      "C": "A child with rigid abdomen, shock, or rapid deterioration needs urgent resuscitation and surgical assessment.",
      "D": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone."
    },
    "answer": "B",
    "explanation": "The chapter states: Roseola typically causes high fever followed by a rash as the fever resolves.",
    "id": 239
  },
  {
    "domain": "viral_exanthem",
    "chapter": 24,
    "question": "Which statement is directly supported by the viral exanthems and herpesvirus infections chapter?",
    "options": {
      "A": "Varicella causes crops of vesicles at different stages, often with fever and itching.",
      "B": "Antidiarrheal medicines are generally avoided in children because they can worsen some infections and cause serious adverse effects.",
      "C": "Do not use antibiotics to cover travel generally; the risk pattern and clinical syndrome should guide therapy.",
      "D": "In adolescence, behavior, sexual health, mental health, and access to confidential care influence both diagnosis and prevention."
    },
    "answer": "A",
    "explanation": "The chapter states: Varicella causes crops of vesicles at different stages, often with fever and itching.",
    "id": 240
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Why is antibody testing alone not used to diagnose HIV in a young infant?",
    "options": {
      "A": "Maternal antibody can persist and produce a false-positive result, so virologic testing is needed",
      "B": "Infants cannot produce any antibodies to HIV at any age",
      "C": "HIV cannot be transmitted from a pregnant person to a newborn",
      "D": "Antibody tests are only valid after a child reaches adulthood"
    },
    "answer": "A",
    "explanation": "Maternal HIV antibody may remain in the infant without infection. Virologic tests detect the virus and are used in the appropriate age window. Perinatal transmission can occur, and pediatric testing follows a specific algorithm.",
    "id": 241
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "An adolescent with abdominal pain and fever has cervical motion tenderness. Why is prompt treatment of pelvic inflammatory disease important?",
    "options": {
      "A": "Early treatment reduces the risk of infertility, chronic pain, and serious complications",
      "B": "The diagnosis excludes ectopic pregnancy and appendicitis completely",
      "C": "Pelvic infection always resolves without treatment",
      "D": "Confidential care should be avoided because it prevents partner treatment"
    },
    "answer": "A",
    "explanation": "Prompt treatment reduces long-term reproductive harm. Other emergencies can mimic pelvic infection and still need evaluation. Pelvic infection can cause serious complications. Confidential care supports disclosure and partner treatment.",
    "id": 242
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which approach best supports an adolescent during sexual health testing?",
    "options": {
      "A": "Explain confidentiality and ask nonjudgmental questions in private",
      "B": "Discuss results with every family member before confirming the adolescent's preference",
      "C": "Avoid asking about partners because the information is too sensitive",
      "D": "Require the adolescent to disclose all sexual activity before offering testing"
    },
    "answer": "A",
    "explanation": "Privacy and respectful communication improve trust and care. Disclosure should follow local law and the adolescent's safety and preferences. A useful history includes partners and risk but should be gathered sensitively, without making testing a condition.",
    "id": 243
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "Neck stiffness may be absent in young infants and in some older children.",
      "B": "Bacteremia can occur with pneumonia, urinary infection, skin infection, bone infection, meningitis, or an abdominal source.",
      "C": "Asymptomatic bacteriuria is a positive culture without a urinary syndrome and generally should not be treated.",
      "D": "Adolescents need sexual health care that is confidential, respectful, and developmentally appropriate."
    },
    "answer": "D",
    "explanation": "The chapter states: Adolescents need sexual health care that is confidential, respectful, and developmentally appropriate.",
    "id": 244
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "B": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting."
    },
    "answer": "C",
    "explanation": "The chapter states: HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
    "id": 245
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "Immunocompromised children may not mount fever, and a normal white blood cell count can be falsely reassuring.",
      "B": "HIV can be acquired perinatally, through sexual exposure, injection drug use, or contaminated blood products.",
      "C": "Hand hygiene, safe water, food preparation, and exclusion of symptomatic children from certain settings reduce transmission.",
      "D": "The evaluation combines maternal records, timing, examination, serology, cultures, molecular tests, imaging, and tissue when needed."
    },
    "answer": "B",
    "explanation": "The chapter states: HIV can be acquired perinatally, through sexual exposure, injection drug use, or contaminated blood products.",
    "id": 246
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "Perinatal prevention has greatly reduced transmission when pregnant people receive testing, antiretroviral treatment, and appropriate infant prophylaxis.",
      "B": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "C": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "D": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa."
    },
    "answer": "A",
    "explanation": "The chapter states: Perinatal prevention has greatly reduced transmission when pregnant people receive testing, antiretroviral treatment, and appropriate infant prophylaxis.",
    "id": 247
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "B": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "C": "Some vaccines prevent infection at the entry point, some reduce severe disease, and some prevent a toxin-mediated illness.",
      "D": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone."
    },
    "answer": "D",
    "explanation": "The chapter states: Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone.",
    "id": 248
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "B": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection.",
      "C": "Treatment with combination antiretroviral therapy reduces viral load, preserves immune function, prevents progression, and reduces transmission.",
      "D": "A positive screening test should be confirmed and linked to care, not treated as an isolated result."
    },
    "answer": "C",
    "explanation": "The chapter states: Treatment with combination antiretroviral therapy reduces viral load, preserves immune function, prevents progression, and reduces transmission.",
    "id": 249
  },
  {
    "domain": "hiv_sti",
    "chapter": 25,
    "question": "Which statement is directly supported by the hiv sexually transmitted infections and adolescent care chapter?",
    "options": {
      "A": "The clinical plan must name the immune defect and the support system around the child.",
      "B": "Adherence support, drug interactions, mental health, school, and family support are part of care.",
      "C": "The exposure history, syndrome, travel or migration pattern, and immune status should choose the test.",
      "D": "It is a structured review of where the child went, when, what happened, and what prevention was used."
    },
    "answer": "B",
    "explanation": "The chapter states: Adherence support, drug interactions, mental health, school, and family support are part of care.",
    "id": 250
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "A profoundly neutropenic child has persistent fever and a new lung lesion despite broad antibiotics. What should be considered?",
    "options": {
      "A": "Invasive fungal infection and the need for targeted imaging, sampling, and antifungal planning",
      "B": "A viral cold that requires no further assessment even with a new lung lesion",
      "C": "The antibiotic is failing only because the child needs a stronger antibiotic class",
      "D": "Fungal disease can be excluded because blood cultures are negative"
    },
    "answer": "A",
    "explanation": "Persistent fever and a new lesion in a high-risk host suggest fungal or another opportunistic infection. A new lung lesion needs assessment. Blood cultures are insensitive for molds. Broadening antibacterial therapy without addressing the host and lesion is not sufficient.",
    "id": 251
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Why is urgent surgical review important in necrotic sinus disease?",
    "options": {
      "A": "Debridement removes dead infected tissue that antifungal medicines cannot reach effectively",
      "B": "Surgery makes antifungal therapy unnecessary in every case",
      "C": "Necrotic tissue is always caused by a bacterial infection and never by fungi",
      "D": "Imaging can replace examination of the nose and eye"
    },
    "answer": "A",
    "explanation": "Dead tissue and poor blood supply limit drug delivery. Surgical debridement is essential, but antifungal therapy may still be required. Mold infections can cause necrosis. Imaging supports, but does not replace, careful examination.",
    "id": 252
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which child has a major risk factor for invasive fungal disease?",
    "options": {
      "A": "A healthy child with a brief cold and no chronic illness",
      "B": "A child with prolonged neutropenia, transplant, or a central line",
      "C": "A child with a mild rash that clears after moisturizer",
      "D": "A well adolescent with a single episode of seasonal sneezing"
    },
    "answer": "B",
    "explanation": "Severe immune suppression, prolonged low neutrophils, transplant, and invasive devices increase fungal risk. Mild viral symptoms in a healthy child do not. A resolving rash is not a fungal risk factor by itself.",
    "id": 253
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "Fungal infections range from superficial skin disease to life-threatening invasive infection.",
      "B": "Fluid is sent for cell count, Gram stain, culture, and molecular testing.",
      "C": "A repeated culture with the same organism, clinical signs of line infection, or a prosthesis changes the interpretation.",
      "D": "Treatment depends on age, severity, ability to take oral medicine, local resistance, and pyelonephritis risk."
    },
    "answer": "A",
    "explanation": "The chapter states: Fungal infections range from superficial skin disease to life-threatening invasive infection.",
    "id": 254
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "Antimicrobials should cover enteric organisms when intra-abdominal infection is likely, with source control as the priority.",
      "B": "Antiviral treatment should not be delayed for a visible rash when the clinical syndrome is concerning.",
      "C": "Neonates have a higher proportion of total body water and lower fat content than older children.",
      "D": "Fungi are often environmental, so exposure history and the immune defect help predict the organism."
    },
    "answer": "D",
    "explanation": "The chapter states: Fungi are often environmental, so exposure history and the immune defect help predict the organism.",
    "id": 255
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "HIV can be acquired perinatally, through sexual exposure, injection drug use, or contaminated blood products.",
      "B": "Blood and tissue parasites may cause fever, anemia, organ disease, or severe neurologic illness.",
      "C": "Blood cultures may be negative because the fungus invades tissue and blood vessels.",
      "D": "Rubella is generally milder but can cause severe congenital infection if acquired in pregnancy."
    },
    "answer": "C",
    "explanation": "The chapter states: Blood cultures may be negative because the fungus invades tissue and blood vessels.",
    "id": 256
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "The protection is specific to the pathogen and may change over time or with new strains.",
      "B": "Candida species commonly cause bloodstream infection in premature infants and children with central lines.",
      "C": "During delivery, the newborn can be exposed to maternal blood, genital secretions, and other fluids.",
      "D": "A strong problem representation includes what is known, what is uncertain, and what would change the plan."
    },
    "answer": "B",
    "explanation": "The chapter states: Candida species commonly cause bloodstream infection in premature infants and children with central lines.",
    "id": 257
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "Aspergillus can invade the sinuses, lungs, brain, or skin, especially during severe neutropenia.",
      "B": "Pelvic inflammatory disease can cause abdominal pain, fever, cervical motion tenderness, or abnormal discharge.",
      "C": "A focused parasite examination, antigen test, or serology is chosen from the geography and syndrome.",
      "D": "The evaluation combines maternal records, timing, examination, serology, cultures, molecular tests, imaging, and tissue when needed."
    },
    "answer": "A",
    "explanation": "The chapter states: Aspergillus can invade the sinuses, lungs, brain, or skin, especially during severe neutropenia.",
    "id": 258
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "Intestinal parasites may cause diarrhea, abdominal discomfort, poor growth, or eosinophilia.",
      "B": "The timing narrows the likely organism but does not replace examination.",
      "C": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "D": "Cryptococcus can cause meningitis, particularly with defective T-cell immunity."
    },
    "answer": "D",
    "explanation": "The chapter states: Cryptococcus can cause meningitis, particularly with defective T-cell immunity.",
    "id": 259
  },
  {
    "domain": "fungal",
    "chapter": 26,
    "question": "Which statement is directly supported by the fungal and opportunistic infections chapter?",
    "options": {
      "A": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "B": "A febrile child returning from a malaria-endemic area needs urgent malaria testing.",
      "C": "Endemic fungi can cause pneumonia or disseminated disease after environmental exposure.",
      "D": "Cryptosporidium can cause watery diarrhea and can be severe in immunocompromised children."
    },
    "answer": "C",
    "explanation": "The chapter states: Endemic fungi can cause pneumonia or disseminated disease after environmental exposure.",
    "id": 260
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "A febrile child returned two days ago from a malaria-endemic country. What is the best next step?",
    "options": {
      "A": "Obtain urgent malaria testing and assess severity while arranging treatment",
      "B": "Give a cold medicine and arrange a routine visit in one week",
      "C": "Assume malaria is impossible because the family used a mosquito net",
      "D": "Obtain only a stool test because travel illness always affects the gut"
    },
    "answer": "A",
    "explanation": "Malaria can progress rapidly, and prophylaxis is not perfect. Urgent testing and severity assessment are required. A routine delay is unsafe, and stool testing alone does not address the travel-related fever.",
    "id": 261
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Why may multiple stool samples be needed for intestinal parasites?",
    "options": {
      "A": "Shedding of parasites can be intermittent, so one sample may miss the infection",
      "B": "Multiple samples guarantee that every organism is identified on the first day",
      "C": "Stool sampling is unnecessary when a child has eosinophilia",
      "D": "Parasites cannot cause diarrhea or growth failure"
    },
    "answer": "A",
    "explanation": "Intermittent shedding can cause false-negative examinations. Multiple focused samples improve detection when the exposure and syndrome fit. Eosinophilia is a clue, not a reason to skip stool evaluation. Parasites can cause diarrhea and growth failure.",
    "id": 262
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which prevention measure best matches the child's exposure?",
    "options": {
      "A": "Safe water and sanitation for a child with recurrent watery diarrhea and contaminated water exposure",
      "B": "A broad parasite antibiotic for every child who travels internationally",
      "C": "Avoiding all outdoor play without considering location or disease risk",
      "D": "Using a mosquito net while eating raw shellfish to prevent malaria"
    },
    "answer": "A",
    "explanation": "Safe water and sanitation match the fecal-oral transmission risk. Travel alone does not justify broad treatment. The details of location, time, and exposure determine prevention. A mosquito net does not prevent shellfish-associated infection.",
    "id": 263
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "Epstein-Barr virus commonly causes infectious mononucleosis in adolescents, with fever, exudative pharyngitis, fatigue, and lymphadenopathy.",
      "B": "Parasites are common worldwide, but a generic parasite test rarely helps.",
      "C": "Acute gastroenteritis is usually viral and usually self-limited, but dehydration and electrolyte disturbance can be severe.",
      "D": "Intra-abdominal infection can arise from a perforated organ, obstructed duct, ischemic bowel, abscess, or infected fluid collection."
    },
    "answer": "B",
    "explanation": "The chapter states: Parasites are common worldwide, but a generic parasite test rarely helps.",
    "id": 264
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "The exposure history, syndrome, travel or migration pattern, and immune status should choose the test.",
      "B": "Parvovirus B19 can cause slapped-cheek rash, arthralgia, and transient aplastic crisis in a child with chronic hemolysis.",
      "C": "Perinatal prevention has greatly reduced transmission when pregnant people receive testing, antiretroviral treatment, and appropriate infant prophylaxis.",
      "D": "Ask about fresh-water exposure, animals, mosquitoes, ticks, food, sexual contact, tattoos, injections, and contact with sick people."
    },
    "answer": "A",
    "explanation": "The chapter states: The exposure history, syndrome, travel or migration pattern, and immune status should choose the test.",
    "id": 265
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "A child with varicella should avoid contact with susceptible high-risk people and follow local exclusion policy.",
      "B": "Many infections are asymptomatic, so screening is important when risk is present.",
      "C": "Fungal diagnosis combines culture, antigen tests, molecular tests, imaging, and tissue examination.",
      "D": "Intestinal parasites may cause diarrhea, abdominal discomfort, poor growth, or eosinophilia."
    },
    "answer": "D",
    "explanation": "The chapter states: Intestinal parasites may cause diarrhea, abdominal discomfort, poor growth, or eosinophilia.",
    "id": 266
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "A positive test may reflect past maternal infection or passive antibody rather than child infection.",
      "B": "Confirm access to safe water, malaria protection, vaccines, and a plan for medication while away.",
      "C": "Blood and tissue parasites may cause fever, anemia, organ disease, or severe neurologic illness.",
      "D": "Antifungal selection depends on the organism, site, immune status, organ function, and interactions with other medicines."
    },
    "answer": "C",
    "explanation": "The chapter states: Blood and tissue parasites may cause fever, anemia, organ disease, or severe neurologic illness.",
    "id": 267
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "Children with hypoxemia, severe distress, dehydration, altered mental status, or a complicated course need hospital assessment.",
      "B": "Some infections can persist for years after a child leaves the place where exposure occurred.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "Color, temperature gradient, pulses, mental status, urine output, lactate, and blood pressure should be interpreted together."
    },
    "answer": "B",
    "explanation": "The chapter states: Some infections can persist for years after a child leaves the place where exposure occurred.",
    "id": 268
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "Giardia duodenalis causes diarrhea, bloating, malabsorption, and weight loss after contaminated water exposure or child care spread.",
      "B": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "C": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "D": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia."
    },
    "answer": "A",
    "explanation": "The chapter states: Giardia duodenalis causes diarrhea, bloating, malabsorption, and weight loss after contaminated water exposure or child care spread.",
    "id": 269
  },
  {
    "domain": "parasitic",
    "chapter": 27,
    "question": "Which statement is directly supported by the parasitic and helminthic infections chapter?",
    "options": {
      "A": "Infants and children with chronic disease may become dehydrated or severely ill faster during travel.",
      "B": "Immunocompromised children may not mount fever, and a normal white blood cell count can be falsely reassuring.",
      "C": "A child may shiver, seek warmth, and feel cool before the temperature rises.",
      "D": "Cryptosporidium can cause watery diarrhea and can be severe in immunocompromised children."
    },
    "answer": "D",
    "explanation": "The chapter states: Cryptosporidium can cause watery diarrhea and can be severe in immunocompromised children.",
    "id": 270
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Why can congenital infection cause hearing loss after the newborn examination appears normal?",
    "options": {
      "A": "The infection can injure the auditory system over time even when signs are initially subtle",
      "B": "Hearing loss is unrelated to congenital infections and only appears in adolescence",
      "C": "A normal examination proves that no infection occurred during pregnancy",
      "D": "Hearing screening should be repeated only if the child has a visible rash"
    },
    "answer": "A",
    "explanation": "Congenital infections can affect hearing and development after the newborn period. A normal examination does not exclude infection. Hearing should be monitored according to the infant's risk and screening results, even without a rash.",
    "id": 271
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which prevention approach best fits a transplanted child?",
    "options": {
      "A": "Coordinate vaccines, prophylaxis, immune suppression, and exposure plans with the transplant team",
      "B": "Stop all preventive medicines when the child feels well",
      "C": "Use broad antibiotics continuously without any monitoring",
      "D": "Avoid all vaccines forever because the immune system is suppressed"
    },
    "answer": "A",
    "explanation": "Transplant prevention is a coordinated, time-dependent plan. Prophylaxis should not be stopped without the transplant team. Continuous broad antibiotics create resistance and toxicity. Selected vaccines are important and should be timed with specialist guidance.",
    "id": 272
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which blood test result in a newborn can reflect maternal antibody rather than infection?",
    "options": {
      "A": "A positive antibody test without a positive virologic test in the age-appropriate window",
      "B": "A positive urine culture from a sterile collection with the same organism",
      "C": "A persistently positive molecular test confirmed by a specialist",
      "D": "Imaging showing a pathogen-specific pattern with compatible findings"
    },
    "answer": "A",
    "explanation": "Maternal antibody can remain in the newborn and cause a positive antibody result without infection. Virologic testing and age-specific algorithms clarify the diagnosis. Sterile-site cultures and confirmed molecular results are not explained by passive maternal antibody.",
    "id": 273
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "Maternal antibody can remain present in a young infant, so virologic testing is needed rather than antibody alone.",
      "B": "Aspergillus can invade the sinuses, lungs, brain, or skin, especially during severe neutropenia.",
      "C": "The timing narrows the likely organism but does not replace examination.",
      "D": "Roseola typically causes high fever followed by a rash as the fever resolves."
    },
    "answer": "C",
    "explanation": "The chapter states: The timing narrows the likely organism but does not replace examination.",
    "id": 274
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "A child without a spleen needs vaccination, education, and urgent care for fever.",
      "B": "Congenital infection can affect growth, brain, eye, ear, liver, bone, and skin.",
      "C": "Testing should use the specimen and method appropriate for the site and infection.",
      "D": "Do not use antibiotics to cover travel generally; the risk pattern and clinical syndrome should guide therapy."
    },
    "answer": "B",
    "explanation": "The chapter states: Congenital infection can affect growth, brain, eye, ear, liver, bone, and skin.",
    "id": 275
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "Transplacental infection can occur when a pathogen reaches the fetus during pregnancy.",
      "B": "Pediatric infectious disease is therefore not adult infectious disease applied to a smaller body.",
      "C": "Water-soluble drugs may therefore have a larger volume of distribution, while fat-soluble drugs may behave differently.",
      "D": "A vaccine reduces the chance of disease but may not prevent every infection."
    },
    "answer": "A",
    "explanation": "The chapter states: Transplacental infection can occur when a pathogen reaches the fetus during pregnancy.",
    "id": 276
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "B": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "C": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "D": "Cytomegalovirus, toxoplasmosis, syphilis, rubella, varicella, Zika virus, and herpes simplex virus deserve consideration based on the pattern."
    },
    "answer": "D",
    "explanation": "The chapter states: Cytomegalovirus, toxoplasmosis, syphilis, rubella, varicella, Zika virus, and herpes simplex virus deserve consideration based on the pattern.",
    "id": 277
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "Encephalitis is inflammation of brain tissue and may cause altered mental status, seizures, focal deficits, or abnormal movement.",
      "B": "Repeated courses in early childhood have been associated with later metabolic and immune effects, although causality is complex.",
      "C": "Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
      "D": "A blood count, liver tests, blood cultures, malaria smears, and targeted serology or molecular tests may be appropriate."
    },
    "answer": "C",
    "explanation": "The chapter states: Hearing loss can develop after the newborn period, so follow-up matters even when the newborn examination is normal.",
    "id": 278
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "B": "During delivery, the newborn can be exposed to maternal blood, genital secretions, and other fluids.",
      "C": "Neonates have a higher proportion of total body water and lower fat content than older children.",
      "D": "Toxoid vaccines use a modified toxin to teach the immune system to neutralize the natural toxin."
    },
    "answer": "B",
    "explanation": "The chapter states: During delivery, the newborn can be exposed to maternal blood, genital secretions, and other fluids.",
    "id": 279
  },
  {
    "domain": "special_hosts",
    "chapter": 28,
    "question": "Which statement is directly supported by the congenital perinatal and transplant-associated infections chapter?",
    "options": {
      "A": "Early after transplant, surgical and device-associated bacterial and fungal infections are common.",
      "B": "The height of the fever does not reliably separate viral from bacterial disease.",
      "C": "Cerebrospinal fluid should be transported promptly and not allowed to sit at an inappropriate temperature.",
      "D": "Body composition, organ function, disease severity, and the site of infection modify the exposure."
    },
    "answer": "A",
    "explanation": "The chapter states: Early after transplant, surgical and device-associated bacterial and fungal infections are common.",
    "id": 280
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "A child returns from a malaria-endemic area with fever. What is the most important first question?",
    "options": {
      "A": "When and where did the child travel, and can malaria be tested urgently?",
      "B": "Did the child have a cold at any time during the previous year?",
      "C": "Does the child prefer flavored medicine or tablets?",
      "D": "Can the family wait until the next routine appointment for assessment?"
    },
    "answer": "A",
    "explanation": "Malaria is a time-critical diagnosis, so travel details and urgent testing come first. Past colds do not explain recent travel fever. Medicine preference is practical but not urgent. A febrile returning traveler should not wait without assessment.",
    "id": 281
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Why should refugee screening results be linked to treatment and follow-up?",
    "options": {
      "A": "A positive screening test may need confirmation, treatment, and continuity rather than a standalone label",
      "B": "Screening results never require action if the child looks well",
      "C": "All screening tests are perfectly accurate and require no additional assessment",
      "D": "Families should be given the results without interpretation or a care plan"
    },
    "answer": "A",
    "explanation": "Screening detects possible disease, not a complete diagnosis. Confirmation and treatment planning matter. A well appearance does not rule out latent infection or parasites. Results should be explained sensitively with a clear follow-up plan.",
    "id": 282
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which prevention plan is most appropriate before international travel with a young child?",
    "options": {
      "A": "Check vaccines, malaria risk, safe food and water, insect protection, and access to care",
      "B": "Use a broad antibiotic daily to prevent every possible infection",
      "C": "Avoid all vaccines because travel is too short to matter",
      "D": "Rely only on a mosquito net and skip food and water precautions"
    },
    "answer": "A",
    "explanation": "Travel prevention is tailored to destination, age, duration, and activities. Routine antibiotics are not a general prophylaxis strategy. Vaccines and preventive medicines may be needed. Insect protection and food and water safety address different transmission routes.",
    "id": 283
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "B": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "C": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "D": "It is a structured review of where the child went, when, what happened, and what prevention was used."
    },
    "answer": "D",
    "explanation": "The chapter states: It is a structured review of where the child went, when, what happened, and what prevention was used.",
    "id": 284
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "Children usually acquire Mycobacterium tuberculosis from an infectious adult or adolescent in the household or another close setting.",
      "B": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "C": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "D": "The child may have a history of household illness, child care exposure, or an older sibling in school."
    },
    "answer": "C",
    "explanation": "The chapter states: Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
    "id": 285
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "The immune system produces antibody and memory cells without the child having to experience the full disease.",
      "B": "Record the exact destinations and dates, including stopovers and rural or urban travel.",
      "C": "Complement defects increase susceptibility to encapsulated organisms and, in some complement pathways, meningococcal disease.",
      "D": "The child becomes more capable of localizing infection and mounting a stronger inflammatory response."
    },
    "answer": "B",
    "explanation": "The chapter states: Record the exact destinations and dates, including stopovers and rural or urban travel.",
    "id": 286
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "Ask about fresh-water exposure, animals, mosquitoes, ticks, food, sexual contact, tattoos, injections, and contact with sick people.",
      "B": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies.",
      "C": "HIV and other sexually transmitted infections can be asymptomatic, and fear of judgment can delay testing and treatment.",
      "D": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter."
    },
    "answer": "A",
    "explanation": "The chapter states: Ask about fresh-water exposure, animals, mosquitoes, ticks, food, sexual contact, tattoos, injections, and contact with sick people.",
    "id": 287
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "B": "Their signs are often subtle, their deterioration can be abrupt, and the consequences of delayed treatment are large.",
      "C": "Coinfection with bacteria is uncommon in an otherwise healthy child with classic bronchiolitis, and antibiotics are not routine.",
      "D": "Record vaccines, malaria medications, repellents, bed nets, water treatment, and whether the child took medicines as prescribed."
    },
    "answer": "D",
    "explanation": "The chapter states: Record vaccines, malaria medications, repellents, bed nets, water treatment, and whether the child took medicines as prescribed.",
    "id": 288
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "Vaccines expose the immune system to a safe antigen or set of antigens.",
      "B": "Early-onset bacterial infection is commonly associated with organisms acquired from the maternal genital tract or during delivery.",
      "C": "A febrile child returning from a malaria-endemic area needs urgent malaria testing.",
      "D": "A child with malnutrition may have low protein binding or altered fluid compartments."
    },
    "answer": "C",
    "explanation": "The chapter states: A febrile child returning from a malaria-endemic area needs urgent malaria testing.",
    "id": 289
  },
  {
    "domain": "travel_global",
    "chapter": 29,
    "question": "Which statement is directly supported by the travel refugee and globally mobile child health chapter?",
    "options": {
      "A": "Many children can be managed with pain control and observation under a clear plan.",
      "B": "Typhoid fever, dengue, chikungunya, rickettsial disease, and other infections may also occur.",
      "C": "Feeding intolerance, abdominal distention, jaundice, glucose instability, and poor perfusion all deserve attention.",
      "D": "Clear or colored nasal discharge, cough, sore throat, fever, hoarseness, and poor appetite are common."
    },
    "answer": "B",
    "explanation": "The chapter states: Typhoid fever, dengue, chikungunya, rickettsial disease, and other infections may also occur.",
    "id": 290
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "A neutropenic child has fever but a normal absolute neutrophil count because it was measured after recovery began. What should guide care?",
    "options": {
      "A": "The child's current immune status, history, examination, cultures, and local neutropenic fever pathway",
      "B": "A single normal blood count proves that infection cannot be present",
      "C": "Antibiotics should be withheld until the neutrophil count becomes abnormal",
      "D": "The child can be discharged without a source assessment if the fever is below 39 degrees"
    },
    "answer": "A",
    "explanation": "Neutropenic fever is a clinical emergency, and counts may change. Evaluation follows the host, examination, cultures, and protocol. A normal count does not erase the risk. Discharge without assessment is unsafe.",
    "id": 291
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Why does a child with a T-cell defect need a different infection prevention plan from a child with an antibody defect?",
    "options": {
      "A": "T-cell defects particularly increase risk from viruses, fungi, and intracellular organisms",
      "B": "T-cell defects have no effect on infection risk",
      "C": "Antibody defects increase risk only from parasites and never from bacteria",
      "D": "Every immune defect requires exactly the same prophylaxis"
    },
    "answer": "A",
    "explanation": "Different immune defects create different vulnerability patterns. T cells are important for viral, fungal, and intracellular control, while antibody defects increase risk from encapsulated bacteria. Prevention should be tailored rather than identical for every child.",
    "id": 292
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which action best supports a safe transition to home for a medically complex child?",
    "options": {
      "A": "A written fever and device plan, prophylaxis schedule, responsible contact, and teaching for the family",
      "B": "No follow-up because the hospital team has already treated the infection",
      "C": "Stopping all preventive medicines because the child is no longer in hospital",
      "D": "Relying on the family to remember verbal instructions without written confirmation"
    },
    "answer": "A",
    "explanation": "Complex children need written escalation, device, and prophylaxis plans with clear ownership. Hospital discharge is not the end of infection risk. Preventive medicines should be managed with the specialty team. Verbal instructions alone are fragile in a high-risk home setting.",
    "id": 293
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "The clinical plan must name the immune defect and the support system around the child.",
      "B": "Fever after travel, diarrhea, rash, cough, and eosinophilia can reflect commonplace infections or diseases that require urgent treatment.",
      "C": "Axillary, oral, tympanic, and temporal readings can be useful in older children, but technique and device performance matter.",
      "D": "The middle ear, mastoid air cells, nasal cavity, and paranasal sinuses are connected spaces lined by respiratory mucosa."
    },
    "answer": "A",
    "explanation": "The chapter states: The clinical plan must name the immune defect and the support system around the child.",
    "id": 294
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "Otitis media becomes common as the eustachian tube matures and children enter group care.",
      "B": "Instead of saying \"fever and abnormal labs,\" describe the child, the time course, the syndrome, and the question.",
      "C": "Stewardship is especially difficult in pediatrics because diagnostic certainty is often lower than in adults.",
      "D": "Neutropenia impairs phagocytosis and raises the risk of bacterial and fungal infection."
    },
    "answer": "D",
    "explanation": "The chapter states: Neutropenia impairs phagocytosis and raises the risk of bacterial and fungal infection.",
    "id": 295
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "Staphylococcus aureus and Streptococcus pyogenes are the classic organisms, but other toxin-producing bacteria can produce a similar picture.",
      "B": "Infants have small airways and limited reserve, so feeding, breathing, and energy balance can fail quickly.",
      "C": "T-cell defects impair cell-mediated immunity and increase risk from viruses, fungi, mycobacteria, and intracellular organisms.",
      "D": "Missing septic arthritis can destroy the joint, so the dangerous diagnosis drives the tempo of evaluation."
    },
    "answer": "C",
    "explanation": "The chapter states: T-cell defects impair cell-mediated immunity and increase risk from viruses, fungi, mycobacteria, and intracellular organisms.",
    "id": 296
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "Signs are subtle, physiological reserve is limited, and a benign-appearing examination can precede rapid deterioration.",
      "B": "B-cell and antibody defects increase risk from encapsulated bacteria and enteroviruses.",
      "C": "A superficial swab samples the skin surface and may recover colonizers rather than the deep pathogen.",
      "D": "A dose that is appropriate for a newborn may need to be lower, less frequent, or both."
    },
    "answer": "B",
    "explanation": "The chapter states: B-cell and antibody defects increase risk from encapsulated bacteria and enteroviruses.",
    "id": 297
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "Complement defects increase susceptibility to encapsulated organisms and, in some complement pathways, meningococcal disease.",
      "B": "The immune system produces antibody and memory cells without the child having to experience the full disease.",
      "C": "Listeria monocytogenes remains a concern in some maternal risk settings, especially with fever, preterm labor, or inadequate treatment.",
      "D": "Neurologic dysfunction may appear as irritability, confusion, lethargy, poor interaction, or an abnormal response to pain."
    },
    "answer": "A",
    "explanation": "The chapter states: Complement defects increase susceptibility to encapsulated organisms and, in some complement pathways, meningococcal disease.",
    "id": 298
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "They generally produce strong, durable immunity but are usually avoided in severely immunocompromised children or during some pregnancies.",
      "B": "Toxic shock is a special form of severe systemic illness caused by bacterial toxins.",
      "C": "Rhinoviruses, coronaviruses, adenoviruses, respiratory syncytial virus, influenza, parainfluenza, and other viruses cause colds.",
      "D": "Barrier failure from burns, devices, surgery, or mucosal injury creates local portals."
    },
    "answer": "D",
    "explanation": "The chapter states: Barrier failure from burns, devices, surgery, or mucosal injury creates local portals.",
    "id": 299
  },
  {
    "domain": "immunocompromised",
    "chapter": 30,
    "question": "Which statement is directly supported by the infection in immunocompromised and medically complex children chapter?",
    "options": {
      "A": "Retractions, nasal flaring, grunting, head bobbing, reduced air entry, crackles, and hypoxemia increase concern.",
      "B": "A child who worsens after initial improvement or develops focal chest findings needs evaluation for secondary bacterial pneumonia.",
      "C": "A child with neutropenia may need fever precautions and tailored prophylaxis.",
      "D": "Compared with the child in obvious shock, a fast and calm clinician might be most."
    },
    "answer": "C",
    "explanation": "The chapter states: A child with neutropenia may need fever precautions and tailored prophylaxis.",
    "id": 300
  }
];
