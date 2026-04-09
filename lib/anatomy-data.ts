export interface Structure {
  name: string;
  type: "muscle" | "bone" | "tendon" | "ligament" | "nerve" | "other";
  plain: string;        // plain-language description
  relevance: string;   // why it matters to you
  feel: string;        // how to feel/locate it
  commonIssues?: string;
}

export interface Region {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  structures: Structure[];
}

export const regions: Region[] = [
  {
    slug: "shoulders",
    label: "Shoulders",
    tagline: "The most mobile joint in your body — and the most vulnerable.",
    description:
      "Your shoulder is a ball-and-socket joint held together almost entirely by muscle rather than bone. This gives it extraordinary range of motion — but it also means the muscles around it have to work constantly to keep things stable. Most shoulder pain comes from imbalances in those surrounding muscles.",
    structures: [
      {
        name: "Rotator Cuff",
        type: "muscle",
        plain:
          "A team of four muscles — supraspinatus, infraspinatus, teres minor, and subscapularis — that wrap around the shoulder joint. They don't generate big power; they hold the ball of the joint in the socket while your bigger muscles do the work.",
        relevance:
          "When your rotator cuff is weak or tight, the shoulder mechanics go off and you get impingement, pain, or tears — often from everyday movements like reaching overhead.",
        feel:
          "Slowly rotate your arm through a full circle with your elbow slightly bent. The deep stability keeping that movement controlled is your rotator cuff.",
        commonIssues: "Impingement, rotator cuff tears, tendinitis — most common in people who do overhead work or heavy lifting.",
      },
      {
        name: "Deltoid",
        type: "muscle",
        plain:
          "The rounded cap of your shoulder — three sections (front, side, rear) that raise your arm in every direction. It's the main mover of shoulder flexion and abduction.",
        relevance:
          "The front deltoid gets overworked from pushing movements (bench press, push-ups). The rear deltoid is often neglected, which leads to rounded shoulders and poor posture.",
        feel:
          "Raise your arm straight out to the side. The rounded muscle on top of your shoulder that's doing the work is your deltoid.",
      },
      {
        name: "Trapezius",
        type: "muscle",
        plain:
          "A large diamond-shaped muscle running from the base of your skull down to your mid-back and out to both shoulders. It controls shrugging, pulling shoulder blades together, and supporting your neck.",
        relevance:
          "The upper trapezius is where most people carry stress. Chronic tension here contributes to headaches, neck pain, and poor posture.",
        feel:
          "Shrug your shoulders up toward your ears and hold. The muscle working hard between your neck and shoulder tip is your upper trapezius.",
        commonIssues: "Chronic tightness, tension headaches, knots — often from stress, poor posture, or too much screen time.",
      },
      {
        name: "Labrum",
        type: "other",
        plain:
          "A ring of cartilage that lines the socket of the shoulder joint, deepening it and giving the joint more stability. Think of it as a rubber seal that keeps the ball from slipping out.",
        relevance:
          "Labral tears are common from falls, sports, or repetitive overhead use. They create a deep ache, clicking, or a feeling of instability in the shoulder.",
        feel:
          "You can't feel the labrum directly — it's deep inside the joint. But if your shoulder clicks, catches, or feels like it 'slips,' the labrum may be involved.",
        commonIssues: "SLAP tears, Bankart lesions — common in athletes who throw overhead (baseball, volleyball).",
      },
      {
        name: "Biceps Tendon",
        type: "tendon",
        plain:
          "The tendon attaching your biceps muscle to the top of the shoulder socket. It runs through a groove in the front of the shoulder, which makes it prone to irritation.",
        relevance:
          "Pain at the front of the shoulder, especially with supination (turning your palm up) or lifting, often comes from biceps tendinitis.",
        feel:
          "Press your fingers into the front of your shoulder, just inside the rounded deltoid. Rotate your forearm back and forth — you may feel the tendon moving.",
        commonIssues: "Biceps tendinitis, rupture (the 'Popeye' bulge) — usually from overuse or heavy lifting.",
      },
    ],
  },
  {
    slug: "back",
    label: "Back",
    tagline: "The most complained-about part of the body. Here's why.",
    description:
      "Your back is a complex stack of bones, discs, muscles, and nerves spanning from the base of your skull to your pelvis. Most back pain isn't from injury — it's from imbalance: muscles that are too tight, too weak, or working too hard to compensate for something else.",
    structures: [
      {
        name: "Erector Spinae",
        type: "muscle",
        plain:
          "A group of long muscles running parallel to the spine on both sides, from the base of the skull all the way to the pelvis. They keep you upright and allow you to bend backward and side to side.",
        relevance:
          "These muscles work constantly — even when you're sitting. Long periods of sitting cause them to both fatigue and tighten, which is a major contributor to lower back pain.",
        feel:
          "Stand and place your hands on either side of your lower spine. Gently arch backward. The muscles that push against your hands are the erector spinae.",
        commonIssues: "Lower back pain, muscle fatigue, spasm — especially common in people who sit all day.",
      },
      {
        name: "Lumbar Discs",
        type: "other",
        plain:
          "Cushioning pads of cartilage sitting between each vertebra in your lower spine. They act as shock absorbers and allow the spine to move. Each disc has a tough outer ring and a gel-like center.",
        relevance:
          "When the outer ring weakens or tears, the gel can bulge outward — a herniated disc. If that bulge presses on a nerve, it causes radiating pain, numbness, or tingling down the leg (sciatica).",
        feel:
          "You can't feel the discs directly, but their health affects everything. Sharp pain that travels from your lower back down one leg is a disc pressing on a nerve.",
        commonIssues: "Herniated discs, disc degeneration, sciatica — most common in the lower two lumbar levels (L4-L5, L5-S1).",
      },
      {
        name: "Quadratus Lumborum",
        type: "muscle",
        plain:
          "A deep, square muscle connecting your lower ribs to your pelvis on each side. It stabilizes the pelvis, allows you to hike a hip to one side, and helps with breathing.",
        relevance:
          "Tightness here is responsible for a huge amount of one-sided lower back pain — the kind that's sharp when you first stand up or roll over in bed.",
        feel:
          "Lie on your back and notice if one side of your lower back feels tighter or closer to the floor than the other. That asymmetry often involves the QL.",
        commonIssues: "One-sided lower back pain, hip hiking, referred pain to the hip and buttock.",
      },
      {
        name: "Thoracic Vertebrae",
        type: "bone",
        plain:
          "The 12 bones in your mid-back, each attached to a pair of ribs. This section of the spine is naturally less mobile than the neck or lower back — it's built for stability, not range of motion.",
        relevance:
          "When the thoracic spine gets stiff (from sitting, screen time, or poor posture), the neck and lower back have to compensate with extra movement, leading to pain in those areas.",
        feel:
          "Sit in a chair and roll your shoulders forward into a hunch. Then open your chest and squeeze your shoulder blades together. The movement in your mid-back is thoracic mobility.",
        commonIssues: "Thoracic kyphosis (excessive rounding), stiffness, upper back pain between the shoulder blades.",
      },
      {
        name: "Latissimus Dorsi",
        type: "muscle",
        plain:
          "The broad, flat muscle covering most of the back — from the lower spine up to the armpits. It's the largest muscle of the upper body and is responsible for pulling the arm down and back.",
        relevance:
          "The lats are critical for shoulder stability and pulling movements (rows, pull-ups). Tight lats pull the shoulders forward and contribute to poor posture.",
        feel:
          "Place your hand under your armpit on the side of your ribcage. Now pull your elbow down toward your hip as if doing a pull-up. The muscle that contracts along your side is the lat.",
      },
    ],
  },
  {
    slug: "head-neck",
    label: "Head & Neck",
    tagline: "Seven bones supporting twelve pounds — all day, every day.",
    description:
      "Your head weighs about 10–12 pounds. For every inch it juts forward (toward a phone or screen), it adds effective weight on the neck — at 3 inches forward, that's 42 pounds of load. The neck is one of the most overworked and under-recovered parts of the body.",
    structures: [
      {
        name: "Cervical Vertebrae",
        type: "bone",
        plain:
          "The seven bones of your neck (C1–C7), stacked in a gentle inward curve. C1 (atlas) holds your skull; C2 (axis) allows rotation. The cervical spine is the most mobile section of the spine.",
        relevance:
          "The natural curve of the cervical spine is designed to distribute load. When posture flattens that curve (text neck), stress concentrates on the discs and joints.",
        feel:
          "Tilt your head back gently. The curve you feel in your neck is the cervical lordosis — its depth reflects your neck's alignment.",
        commonIssues: "Cervical herniation, text neck, stenosis, whiplash.",
      },
      {
        name: "Sternocleidomastoid (SCM)",
        type: "muscle",
        plain:
          "A prominent muscle running diagonally from behind your ear down to your collarbone. It tilts the head to one side and rotates it to the opposite direction. There are two, one on each side.",
        relevance:
          "Tightness in the SCM contributes to neck pain, headaches, jaw tension, and even dizziness. It's often tense in people who clench their jaw or hold their phone between ear and shoulder.",
        feel:
          "Turn your head to the right. The rope-like muscle that stands out on the left side of your neck is the SCM.",
        commonIssues: "Tension headaches, torticollis (neck spasm to one side), referred pain to the face.",
      },
      {
        name: "Suboccipital Muscles",
        type: "muscle",
        plain:
          "A group of small, deep muscles at the base of the skull. They make fine adjustments to head position and are packed with sensory receptors that help your brain know where your head is in space.",
        relevance:
          "These are among the first muscles to tighten from screen time and poor posture. Chronic tightness here is one of the most common causes of tension headaches.",
        feel:
          "Press your fingertips into the base of your skull, just above the neck. The tenderness you feel is often the suboccipitals — especially after long screen sessions.",
        commonIssues: "Tension headaches, cervicogenic headaches (headaches caused by the neck).",
      },
      {
        name: "Hyoid Bone",
        type: "bone",
        plain:
          "A U-shaped bone floating in the middle of your neck, not connected to any other bone. It's the only bone in the body that works this way. It anchors the tongue and supports swallowing and speaking.",
        relevance:
          "You're unlikely to think about your hyoid until it's injured (rare) or until you realize swallowing difficulty or voice changes can sometimes trace back to tension in the muscles around it.",
        feel:
          "Place two fingers gently in the front of your neck, midway between your chin and your Adam's apple. Swallow — you'll feel the hyoid move upward.",
      },
    ],
  },
];

export interface System {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  keyFacts: string[];
  structures: string[];
}

export const systems: System[] = [
  {
    slug: "skeletal",
    label: "Skeletal System",
    tagline: "Your body's framework — 206 bones doing far more than holding you up.",
    description:
      "The skeletal system is your structural scaffold, but it's also a living tissue. Bones produce blood cells, store minerals (especially calcium and phosphorus), and respond to stress by remodeling themselves. The skeleton is in constant conversation with the rest of the body.",
    keyFacts: [
      "You're born with ~270 bones. By adulthood, many fuse into the 206 you have as an adult.",
      "Bone is as strong as cast iron but four times lighter.",
      "About 10% of your bone mass is replaced every year through remodeling.",
      "Red blood cells are produced inside the marrow of large bones.",
      "The smallest bone in your body is the stirrup (stapes) in your ear — 3mm long.",
    ],
    structures: ["Axial skeleton (skull, spine, ribs)", "Appendicular skeleton (arms, legs, pelvis, shoulders)", "Joints", "Cartilage"],
  },
  {
    slug: "muscular",
    label: "Muscular System",
    tagline: "Over 600 muscles — from blinking to breathing to picking something up.",
    description:
      "The muscular system includes every muscle in your body: the voluntary ones you control (skeletal muscles), the involuntary ones running your organs (smooth muscle), and the cardiac muscle of your heart. Muscles only pull — they never push — which is why they work in opposing pairs.",
    keyFacts: [
      "You have over 600 skeletal muscles.",
      "The gluteus maximus is the largest muscle; the stapedius in the ear is the smallest.",
      "Muscles make up 35–45% of your body weight.",
      "Muscles can only contract — they cannot push. Extension happens because an opposing muscle pulls.",
      "Muscle memory is real: motor patterns are encoded in the nervous system, not the muscles themselves.",
    ],
    structures: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Tendons", "Fascia"],
  },
  {
    slug: "nervous",
    label: "Nervous System",
    tagline: "86 billion neurons running everything — including thoughts you don't know you're having.",
    description:
      "The nervous system is the body's electrical network, processing sensation, controlling movement, regulating organs, and generating every thought, emotion, and memory. It splits into two main parts: the central nervous system (brain and spinal cord) and the peripheral nervous system (everything else).",
    keyFacts: [
      "Your brain contains ~86 billion neurons.",
      "Nerve signals travel at up to 268 miles per hour.",
      "The peripheral nervous system has two modes: sympathetic (fight-or-flight) and parasympathetic (rest-and-digest).",
      "The gut has its own nervous system — the enteric system — containing 100–500 million neurons.",
      "Pain is constructed by the brain, not felt at the site of injury.",
    ],
    structures: ["Brain", "Spinal cord", "Peripheral nerves", "Autonomic nervous system", "Vagus nerve"],
  },
  {
    slug: "cardiovascular",
    label: "Cardiovascular System",
    tagline: "Your heart beats 100,000 times a day. It's never had a day off.",
    description:
      "The cardiovascular system — heart, blood, and blood vessels — is your body's delivery network. It circulates oxygen, nutrients, hormones, and immune cells to every cell, and carries waste products away. The heart is a pump that never rests, from before you're born until you die.",
    keyFacts: [
      "Your heart beats approximately 100,000 times per day.",
      "Your body has about 60,000 miles of blood vessels.",
      "Blood makes a complete circuit of the body in about 60 seconds.",
      "Red blood cells live for about 120 days before being recycled.",
      "The heart creates its own electrical impulses — it can beat even outside the body, given oxygen.",
    ],
    structures: ["Heart", "Arteries", "Veins", "Capillaries", "Blood"],
  },
  {
    slug: "respiratory",
    label: "Respiratory System",
    tagline: "You breathe 20,000 times a day. Almost never consciously.",
    description:
      "The respiratory system brings oxygen into the body and expels carbon dioxide. But breathing is also deeply connected to the nervous system — it's the only autonomic function you can consciously control, which is why breathwork has direct effects on stress, heart rate, and focus.",
    keyFacts: [
      "You breathe approximately 20,000 times per day.",
      "Your lungs contain about 480 million tiny air sacs (alveoli).",
      "Spread flat, your lung surface area would cover a tennis court.",
      "The diaphragm does 80% of the work of breathing.",
      "Slowing your exhale activates the parasympathetic nervous system, reducing stress.",
    ],
    structures: ["Lungs", "Diaphragm", "Trachea", "Bronchi", "Alveoli", "Intercostal muscles"],
  },
  {
    slug: "digestive",
    label: "Digestive System",
    tagline: "28 feet of tubing turning food into fuel — and mood.",
    description:
      "The digestive system breaks food down into usable nutrients and eliminates what's left. But it's far more than a processing plant — the gut has its own nervous system, produces most of the body's serotonin, and is in constant communication with the brain via the vagus nerve.",
    keyFacts: [
      "The digestive tract is about 28 feet long from mouth to rectum.",
      "About 95% of the body's serotonin is produced in the gut.",
      "The gut microbiome contains 38 trillion bacteria — more than human cells.",
      "Food takes 24–72 hours to travel the full length of the digestive tract.",
      "The stomach lining renews itself every 3–5 days.",
    ],
    structures: ["Esophagus", "Stomach", "Small intestine", "Large intestine", "Liver", "Pancreas"],
  },
  {
    slug: "endocrine",
    label: "Endocrine System",
    tagline: "Chemical messengers running your mood, metabolism, and sleep.",
    description:
      "The endocrine system is a network of glands that produce and release hormones — chemical signals that travel through the bloodstream to regulate nearly every body function: metabolism, sleep, mood, growth, reproduction, and stress response.",
    keyFacts: [
      "There are over 50 hormones in the human body.",
      "Cortisol (the stress hormone) is also essential for waking up in the morning.",
      "The thyroid regulates your metabolism — how fast or slow everything runs.",
      "Insulin doesn't just manage blood sugar; it also affects the brain and mood.",
      "Hormones can take minutes to hours to produce effects — unlike nerve signals that are near-instant.",
    ],
    structures: ["Hypothalamus", "Pituitary gland", "Thyroid", "Adrenal glands", "Pancreas", "Gonads"],
  },
  {
    slug: "immune",
    label: "Immune System",
    tagline: "A surveillance system that never sleeps — and learns on the job.",
    description:
      "The immune system is your body's defense network, identifying and destroying pathogens, cancer cells, and foreign substances. It has two layers: the innate immune system (fast, non-specific) and the adaptive immune system (slower but targeted, with memory).",
    keyFacts: [
      "The immune system produces about 100 billion new white blood cells per day.",
      "Fever is an immune response — the body raises its temperature to make conditions hostile for pathogens.",
      "The adaptive immune system remembers every pathogen it's ever encountered.",
      "Chronic stress suppresses immune function by elevating cortisol.",
      "The gut microbiome trains the immune system — 70% of immune cells live in the gut.",
    ],
    structures: ["White blood cells", "Lymph nodes", "Spleen", "Thymus", "Bone marrow"],
  },
  {
    slug: "lymphatic",
    label: "Lymphatic System",
    tagline: "The body's drainage system — and a key part of immunity.",
    description:
      "The lymphatic system is a network of vessels that drain excess fluid from tissues, transport immune cells, and absorb fats from the digestive tract. Unlike blood, lymph has no pump — it relies on muscle movement and breathing to circulate.",
    keyFacts: [
      "The lymphatic system drains about 3 liters of fluid from tissues per day.",
      "Lymph nodes filter lymph fluid and activate immune responses — swollen nodes signal infection.",
      "The spleen is the largest lymphatic organ.",
      "Unlike the circulatory system, the lymphatic system has no pump — movement and breathing drive flow.",
      "Lymphedema (chronic swelling) occurs when lymph vessels are damaged or blocked.",
    ],
    structures: ["Lymph nodes", "Lymph vessels", "Spleen", "Tonsils", "Thymus"],
  },
  {
    slug: "urinary",
    label: "Urinary System",
    tagline: "Your kidneys filter 200 liters of blood every single day.",
    description:
      "The urinary system filters blood, regulates fluid balance, controls blood pressure, and excretes waste. The kidneys are far more sophisticated than most people realize — they constantly adjust what stays in the blood and what gets excreted based on your body's needs.",
    keyFacts: [
      "Your kidneys filter about 200 liters of blood every day.",
      "The kidneys produce erythropoietin — a hormone that tells bones to make red blood cells.",
      "Kidneys regulate blood pressure by controlling fluid volume and secreting hormones.",
      "Urine is about 95% water.",
      "Each kidney contains about 1 million filtering units called nephrons.",
    ],
    structures: ["Kidneys", "Ureters", "Bladder", "Urethra"],
  },
  {
    slug: "reproductive",
    label: "Reproductive System",
    tagline: "The system most people learned about wrong.",
    description:
      "The reproductive system produces sex hormones that affect not just reproduction but mood, bone density, cardiovascular health, cognition, and aging. Understanding it goes far beyond fertility.",
    keyFacts: [
      "Sex hormones (estrogen, testosterone, progesterone) affect the brain, heart, bones, and skin.",
      "Testosterone is produced in significant amounts in people of all sexes — just in different quantities.",
      "The pelvic floor is a muscular hammock supporting the reproductive and urinary organs.",
      "Hormonal fluctuations across the menstrual cycle affect energy, cognition, and pain sensitivity.",
      "The reproductive system shares anatomy with the urinary system at multiple points.",
    ],
    structures: ["Gonads (ovaries/testes)", "Pelvic floor", "Uterus/prostate", "Sex hormones"],
  },
  {
    slug: "integumentary",
    label: "Integumentary System",
    tagline: "Your skin is an organ. Your largest one.",
    description:
      "The integumentary system — skin, hair, and nails — is the body's outer layer. Skin is a complex, living organ that regulates temperature, prevents water loss, synthesizes vitamin D, senses the environment, and acts as the first barrier against pathogens.",
    keyFacts: [
      "Skin is the largest organ by surface area — about 21 square feet in an adult.",
      "You shed and regrow your entire outer skin layer every 2–4 weeks.",
      "Skin synthesizes vitamin D when exposed to UVB radiation.",
      "The skin contains three layers: epidermis, dermis, and hypodermis.",
      "Skin has millions of sensory receptors detecting temperature, pressure, pain, and texture.",
    ],
    structures: ["Epidermis", "Dermis", "Hypodermis", "Hair follicles", "Sweat glands", "Sebaceous glands"],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getSystem(slug: string): System | undefined {
  return systems.find((s) => s.slug === slug);
}
