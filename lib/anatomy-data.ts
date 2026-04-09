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
    slug: "hips-groin",
    label: "Hips & Groin",
    tagline: "The center of power — and the source of a surprising amount of pain.",
    description:
      "Your hips are ball-and-socket joints connecting your legs to your pelvis. They're built for both stability and a wide range of motion, making them central to almost every movement you do — walking, sitting, running, climbing stairs. When hip muscles are tight or weak, the effects ripple out to the lower back, knees, and even the feet.",
    structures: [
      {
        name: "Psoas Major",
        type: "muscle",
        plain:
          "A deep muscle running from the front of your lumbar spine down through the pelvis to the top of your thigh bone. It's your primary hip flexor — the muscle that lifts your knee toward your chest and keeps you upright when you walk.",
        relevance:
          "Sitting all day shortens the psoas. A tight psoas tilts the pelvis forward, creating an exaggerated lower back arch and chronic low back pain. It's one of the most overlooked contributors to back pain.",
        feel:
          "Lie on your back and pull one knee toward your chest. The deep pulling sensation at the front of the opposite hip is your psoas stretching.",
        commonIssues: "Hip flexor tightness, lower back pain, anterior pelvic tilt — extremely common in people who sit for long periods.",
      },
      {
        name: "Gluteus Medius",
        type: "muscle",
        plain:
          "A fan-shaped muscle on the outer hip, running from the top of the pelvis to the side of the femur. It stabilizes the pelvis every time you take a step — preventing your hip from dropping to one side as your foot lifts off the ground.",
        relevance:
          "Weakness here causes the pelvis to drop on the opposite side when walking (Trendelenburg gait). This puts extra stress on the lower back, IT band, and knees. Many knee and hip injuries trace back to a weak glute med.",
        feel:
          "Stand on one leg. The side of the hip that's working to keep you level is the glute medius. If you feel yourself swaying, it's telling you something.",
        commonIssues: "Hip drop, IT band syndrome, knee pain, lower back pain — especially common in runners.",
      },
      {
        name: "Hip Labrum",
        type: "other",
        plain:
          "A ring of cartilage lining the socket of the hip joint, like a rubber seal. It deepens the socket and helps distribute pressure evenly across the joint, keeping the head of the femur seated properly.",
        relevance:
          "Labral tears cause a deep, hard-to-pinpoint ache in the groin or hip that worsens with prolonged sitting, twisting, or certain movements. They're often misdiagnosed as a groin strain.",
        feel:
          "You can't feel the labrum directly. But a sharp catch, click, or locking sensation deep in the hip during movement may indicate labral involvement.",
        commonIssues: "Hip labral tears — common in athletes and people with hip impingement (FAI).",
      },
      {
        name: "Adductors",
        type: "muscle",
        plain:
          "A group of five muscles running along the inner thigh from the pelvis to the femur. They pull the leg toward the midline of the body and help stabilize the hip and pelvis during movement.",
        relevance:
          "Adductor strains are the classic 'groin pull' — a sharp pain on the inner thigh from sudden direction changes or overuse. Tight adductors also restrict hip mobility and affect how you walk and run.",
        feel:
          "Sit and place your hands on the inner thighs. Press your knees together against resistance. The muscles contracting along your inner thigh are your adductors.",
        commonIssues: "Groin strains, adductor tendinopathy — common in soccer players, hockey players, and anyone who does lateral movement.",
      },
      {
        name: "Piriformis",
        type: "muscle",
        plain:
          "A small, deep muscle running from the sacrum (base of the spine) to the outer femur. Its job is to rotate the hip outward. The sciatic nerve runs directly beneath it — and in some people, through it.",
        relevance:
          "When the piriformis tightens, it can compress the sciatic nerve, causing buttock pain that radiates down the leg — a condition called piriformis syndrome, often confused with disc-related sciatica.",
        feel:
          "Sit and cross one ankle over the opposite knee (figure-four position). The deep ache in the back of the hip is the piriformis stretching.",
        commonIssues: "Piriformis syndrome, sciatic nerve compression, buttock pain — common in runners and people who sit for long periods.",
      },
    ],
  },
  {
    slug: "upper-arm",
    label: "Upper Arm",
    tagline: "More than a bicep flex — the full picture.",
    description:
      "The upper arm runs from the shoulder joint to the elbow, housing the muscles responsible for bending and straightening the arm, and rotating the forearm. The humerus (upper arm bone) is the anchor for several major muscle groups that control both the shoulder and the elbow.",
    structures: [
      {
        name: "Biceps Brachii",
        type: "muscle",
        plain:
          "The two-headed muscle on the front of the upper arm. Despite its fame, its main job isn't elbow flexion — it's supination (rotating the forearm so the palm faces up). It also assists in shoulder flexion and elbow bending.",
        relevance:
          "Biceps issues often manifest at the tendons (where the muscle attaches at the shoulder and elbow) rather than the muscle belly itself. The long head tendon at the shoulder is particularly prone to irritation.",
        feel:
          "Hold your arm out and turn your palm up, then down. The movement is driven by the biceps (palm up) and the pronator (palm down).",
        commonIssues: "Biceps tendinitis, distal biceps tendon rupture (the 'pop' at the elbow), SLAP tears at the shoulder attachment.",
      },
      {
        name: "Triceps Brachii",
        type: "muscle",
        plain:
          "The three-headed muscle on the back of the upper arm. It's responsible for straightening (extending) the elbow — the opposite of what the biceps does. The long head also contributes to shoulder extension.",
        relevance:
          "The triceps is the most underworked muscle in people who do a lot of pressing exercises. Weakness contributes to elbow instability and limits pushing strength. Triceps tendinopathy at the elbow is common in overhead athletes.",
        feel:
          "Straighten your arm against resistance — push down on a table while sitting. The hardening on the back of your upper arm is your triceps.",
        commonIssues: "Triceps tendinopathy, triceps rupture (rare, usually from heavy lifting), olecranon bursitis at the elbow.",
      },
      {
        name: "Humerus",
        type: "bone",
        plain:
          "The single long bone of the upper arm, running from the ball of the shoulder joint to the elbow. It serves as the attachment point for most of the muscles of the arm and shoulder.",
        relevance:
          "Humeral fractures are common in falls, particularly in older adults. The radial nerve runs in a groove along the shaft of the humerus, making mid-shaft fractures particularly risky for nerve injury.",
        feel:
          "You can feel the outer surface of the humerus along the outer side of your upper arm. The rounded bump at the top is the greater tubercle, where the rotator cuff attaches.",
        commonIssues: "Humeral shaft fractures, greater tubercle fractures (often with shoulder dislocations).",
      },
      {
        name: "Brachialis",
        type: "muscle",
        plain:
          "A flat muscle lying beneath the biceps, running from the lower front of the humerus to the ulna (forearm bone). It's actually the strongest elbow flexor — stronger than the biceps — but gets almost no attention.",
        relevance:
          "Because it lies under the biceps, brachialis tightness can compress the musculocutaneous nerve, causing a subtle ache in the outer forearm. It's a common culprit in unexplained elbow and forearm discomfort.",
        feel:
          "Bend your elbow halfway and press your fingers into the crease on the outer side. The firmness you feel deep to the biceps is the brachialis.",
      },
    ],
  },
  {
    slug: "forearm",
    label: "Forearm",
    tagline: "19 muscles controlling every grip and rotation your hands make.",
    description:
      "The forearm contains 19 muscles organized into flexor (palm side) and extensor (back of arm) groups. These muscles control wrist movement, finger movement, and forearm rotation. They're incredibly active in everyday tasks — typing, cooking, carrying, writing — which is why forearm fatigue and overuse injuries are so common.",
    structures: [
      {
        name: "Flexor Group",
        type: "muscle",
        plain:
          "A group of muscles on the palm side of the forearm that flex the wrist and fingers (curl them inward). They originate at the medial epicondyle — the bony bump on the inside of the elbow.",
        relevance:
          "Overuse of the flexor group causes medial epicondylitis (golfer's elbow) — pain on the inner elbow that worsens with gripping, lifting, or wrist flexion. Common in anyone who types, plays racket sports, or does repeated gripping.",
        feel:
          "Turn your palm up and make a fist. The muscles that harden along the inner forearm are your flexors.",
        commonIssues: "Golfer's elbow (medial epicondylitis), flexor tendinopathy, carpal tunnel syndrome (the tendons pass through the carpal tunnel at the wrist).",
      },
      {
        name: "Extensor Group",
        type: "muscle",
        plain:
          "A group of muscles on the back of the forearm that extend the wrist and fingers (pull them back). They originate at the lateral epicondyle — the bony bump on the outside of the elbow.",
        relevance:
          "Overuse of the extensor group causes lateral epicondylitis (tennis elbow) — one of the most common overuse injuries. Pain on the outer elbow that radiates down the forearm, made worse by gripping or lifting with the palm down.",
        feel:
          "Flip your hand over, palm down, and extend your wrist back. The muscles hardening on the back of the forearm are your extensors.",
        commonIssues: "Tennis elbow (lateral epicondylitis) — affects up to 3% of adults. Common in computer users, not just tennis players.",
      },
      {
        name: "Pronator & Supinator",
        type: "muscle",
        plain:
          "Two muscles that rotate the forearm: the pronator teres turns the palm down; the supinator turns it up. This rotation — called pronation and supination — is what lets you turn a doorknob or use a screwdriver.",
        relevance:
          "Pronator teres syndrome can compress the median nerve as it passes through, causing forearm aching and hand numbness — sometimes misdiagnosed as carpal tunnel syndrome.",
        feel:
          "Hold a pen and rotate it back and forth. The muscles working across the top and front of your forearm driving that motion are the pronator and supinator.",
      },
      {
        name: "Radius & Ulna",
        type: "bone",
        plain:
          "Two parallel bones running the length of the forearm. The radius is on the thumb side; the ulna is on the pinky side. They cross over each other when you rotate the forearm — you can watch them shift under the skin.",
        relevance:
          "Both bones are common fracture sites. A fall on an outstretched hand often breaks the radius near the wrist (Colles' fracture). The ulna's olecranon forms the point of the elbow and is prone to fracture in direct impacts.",
        feel:
          "Run your finger along the back of your forearm from elbow to wrist — the sharp bony ridge you feel on the pinky side is the ulna. The radius is harder to feel under muscle on the thumb side.",
        commonIssues: "Colles' fracture (wrist end of radius), ulnar styloid fractures, TFCC tears at the wrist joint.",
      },
    ],
  },
  {
    slug: "wrist-hand",
    label: "Wrist & Hand",
    tagline: "27 bones. More than the entire spine. And you use them constantly.",
    description:
      "The wrist and hand contain 27 bones — 8 carpal bones in the wrist, 5 metacarpals in the palm, and 14 phalanges in the fingers. This complexity gives the hand extraordinary dexterity, but it also means there's a lot that can go wrong. Most hand problems come from repetitive strain rather than acute injury.",
    structures: [
      {
        name: "Carpal Tunnel",
        type: "other",
        plain:
          "A narrow passageway at the base of the palm formed by the carpal bones and a tough ligament (the flexor retinaculum). Nine tendons and the median nerve pass through this tunnel to reach the hand.",
        relevance:
          "When the tunnel becomes narrowed — from inflammation, repetitive use, fluid retention, or wrist position — the median nerve gets compressed. This causes carpal tunnel syndrome: numbness and tingling in the thumb, index, middle, and part of the ring finger, especially at night.",
        feel:
          "Tap the center of your inner wrist with a finger. Tingling into the thumb and first two fingers (Tinel's sign) suggests median nerve sensitivity.",
        commonIssues: "Carpal tunnel syndrome — affects up to 10% of adults. More common in people who type, use vibrating tools, or are pregnant.",
      },
      {
        name: "Flexor Tendons",
        type: "tendon",
        plain:
          "Long tendons running from the forearm muscles through the carpal tunnel and along the palm to attach to each finger. They're what actually bend your fingers — the muscles are in the forearm, not the hand.",
        relevance:
          "Trigger finger happens when a flexor tendon's sheath thickens and the tendon catches as it glides through — causing the finger to lock or snap. Extremely common in people who do repetitive gripping.",
        feel:
          "Slowly curl your fingers one at a time. The gliding movement you can feel in your palm is the flexor tendons sliding through their sheaths.",
        commonIssues: "Trigger finger, flexor tendon lacerations, de Quervain's tenosynovitis (thumb side).",
      },
      {
        name: "Scaphoid",
        type: "bone",
        plain:
          "The most important of the 8 carpal bones — a small, canoe-shaped bone on the thumb side of the wrist. It's the bridge between the two rows of carpal bones and handles most of the load transmitted from the hand to the forearm.",
        relevance:
          "The scaphoid has notoriously poor blood supply. Fractures (often from falling on an outstretched hand) can fail to heal properly if missed or untreated, leading to avascular necrosis and long-term wrist problems.",
        feel:
          "Make a hitchhiker's thumbs-up. The hollow that forms at the base of your thumb (the anatomical snuffbox) sits directly over the scaphoid. Pain here after a wrist injury warrants imaging even if X-rays look normal.",
        commonIssues: "Scaphoid fractures — frequently missed because initial X-rays can appear normal. High index of suspicion required.",
      },
      {
        name: "Intrinsic Hand Muscles",
        type: "muscle",
        plain:
          "Small muscles that originate and insert entirely within the hand — unlike the forearm muscles that work the fingers from a distance. They control fine motor movements: spreading and closing the fingers, pinching, and the precise adjustments needed for writing or playing an instrument.",
        relevance:
          "These muscles atrophy quickly with disuse or nerve damage. The thenar muscles (the mound at the base of the thumb) are supplied by the median nerve — wasting here is a sign of advanced carpal tunnel syndrome.",
        feel:
          "Spread your fingers as wide as possible, then bring them back together. The muscles doing that work — both in the palm and between the fingers — are your intrinsic hand muscles.",
        commonIssues: "Thenar wasting (median nerve damage), hypothenar wasting (ulnar nerve damage), Dupuytren's contracture (thickening of palmar fascia).",
      },
    ],
  },
  {
    slug: "thigh",
    label: "Thigh",
    tagline: "The powerhouse of the lower body — and where a lot goes wrong.",
    description:
      "The thigh runs from the hip joint to the knee, containing some of the largest and most powerful muscles in the body. These muscles drive walking, running, squatting, and climbing. The femur — the thigh bone — is the longest and strongest bone in the body, but the soft tissues around it are among the most commonly injured in sport and daily life.",
    structures: [
      {
        name: "Quadriceps",
        type: "muscle",
        plain:
          "Four muscles on the front of the thigh that together straighten the knee. The largest, rectus femoris, also crosses the hip and helps flex it. The quads are the primary muscles used when you stand up from a chair, walk downstairs, or land from a jump.",
        relevance:
          "Quad weakness is one of the biggest risk factors for knee pain, ACL injury, and patellofemoral syndrome. Strong quads absorb the impact forces that would otherwise go straight into the knee joint.",
        feel:
          "Sit and straighten your leg. The entire front of your thigh that hardens is your quadriceps — all four heads working together.",
        commonIssues: "Quad strain, patellofemoral pain syndrome, patellar tendinopathy (jumper's knee), quad tendon rupture (usually in older adults).",
      },
      {
        name: "Hamstrings",
        type: "muscle",
        plain:
          "Three muscles on the back of the thigh — biceps femoris, semitendinosus, and semimembranosus. They bend the knee and extend the hip (push the leg backward). They're essential for running, jumping, and all hip-hinging movements.",
        relevance:
          "Hamstring strains are the most common muscle injury in sport. They often occur when the muscle is simultaneously lengthening and contracting at high speed — typically during sprinting. Recurrence is common if not fully rehabilitated.",
        feel:
          "Sit and press your heel into the floor as if trying to drag it toward you. The muscles that engage on the back of your thigh are your hamstrings.",
        commonIssues: "Hamstring strains (grades 1–3), proximal hamstring tendinopathy (sitting pain deep in the buttock), hamstring avulsion fractures.",
      },
      {
        name: "Iliotibial Band (IT Band)",
        type: "other",
        plain:
          "A thick band of connective tissue running along the outer thigh from the pelvis to just below the knee. It's not a muscle — it doesn't contract. It's a stabilizing structure that keeps the outer knee from collapsing inward during movement.",
        relevance:
          "IT band syndrome is one of the most common running injuries. The band repeatedly rubs over the outer femoral condyle as the knee bends and straightens, causing burning pain on the outer knee. Tightness, overtraining, and hip weakness all contribute.",
        feel:
          "Press your fingers firmly into the outer middle of your thigh and walk a few steps. The firm cord running down the outer side is the IT band.",
        commonIssues: "IT band syndrome — especially in runners who increase mileage too quickly. Often accompanied by weak hip abductors.",
      },
      {
        name: "Femur",
        type: "bone",
        plain:
          "The thigh bone — the longest and strongest bone in the body. It runs from the hip socket to the knee joint, where it articulates with the tibia and patella. Its neck (at the hip end) is angled to optimize weight distribution.",
        relevance:
          "Femoral neck fractures are serious injuries in older adults with osteoporosis, often from low-energy falls. Stress fractures of the femoral shaft occur in runners and military recruits from repetitive loading without adequate recovery.",
        feel:
          "You can feel the lateral (outer) surface of the femur through the IT band along the outer thigh. The greater trochanter — the bony bump at the top of the outer thigh — is the femur's widest point.",
        commonIssues: "Femoral neck fractures, stress fractures, femoral shaft fractures (high-energy trauma).",
      },
    ],
  },
  {
    slug: "lower-leg",
    label: "Lower Leg",
    tagline: "From knee to ankle — what keeps you upright and moving forward.",
    description:
      "The lower leg runs from the knee to the ankle and is built for endurance. It contains the muscles responsible for pushing off the ground, absorbing landing impact, and controlling the ankle. The tibia bears nearly all of your body weight; the fibula provides stability and attachment for muscles. Lower leg issues are extremely common in runners and anyone who stands for long periods.",
    structures: [
      {
        name: "Gastrocnemius",
        type: "muscle",
        plain:
          "The large, two-headed calf muscle visible on the back of the lower leg. It crosses both the knee and the ankle, contributing to both knee flexion and ankle plantarflexion (pointing the foot down). It's a fast-twitch muscle — built for power, not endurance.",
        relevance:
          "The gastrocnemius is the muscle that cramps at night, tears in middle-aged recreational athletes ('tennis leg'), and tightens with prolonged heel use. It's also part of the Achilles tendon complex.",
        feel:
          "Stand and rise onto your tiptoes. The rounded muscle that bulges on the back of the lower leg is your gastrocnemius.",
        commonIssues: "Calf strains, night cramps, deep vein thrombosis (calf pain + swelling warrants urgent evaluation).",
      },
      {
        name: "Soleus",
        type: "muscle",
        plain:
          "A flat, deeper calf muscle beneath the gastrocnemius. Unlike the gastrocnemius, it only crosses the ankle — not the knee. It's a slow-twitch endurance muscle, essential for standing and sustained walking.",
        relevance:
          "The soleus is the primary driver of ankle plantarflexion during walking at normal speed. Soleus strains are often deeper and slower to heal than gastrocnemius strains. Soleus tightness contributes to Achilles tendon problems and plantar fasciitis.",
        feel:
          "Bend your knee 90 degrees and rise onto your tiptoes. With the knee bent, the gastrocnemius is slack — so the muscle working now is primarily the soleus.",
        commonIssues: "Soleus strains, Achilles tendinopathy, plantar fasciitis (often linked to tight soleus).",
      },
      {
        name: "Tibialis Anterior",
        type: "muscle",
        plain:
          "A muscle on the front of the lower leg that runs from the outer tibia to the inside of the foot. It dorsiflexes the ankle (pulls the foot up toward the shin) and inverts the foot (turns the sole inward).",
        relevance:
          "Shin splints (medial tibial stress syndrome) involve pain along the inner tibia, often from overuse of the tibialis anterior and related muscles. Weakness here causes foot drop — inability to lift the foot — which creates a distinctive slapping gait.",
        feel:
          "Pull your foot up toward your shin. The muscle that pops up on the outer front of your lower leg is the tibialis anterior.",
        commonIssues: "Shin splints, anterior compartment syndrome, tibialis anterior tendinopathy.",
      },
      {
        name: "Tibia",
        type: "bone",
        plain:
          "The larger of the two lower leg bones — the shin bone. It's the primary weight-bearing bone and forms the main part of the knee joint above and the ankle joint below. You can feel its entire front surface under the skin.",
        relevance:
          "The tibia is one of the most common sites for stress fractures in runners, particularly the posteromedial (inner back) surface. A stress fracture feels like a localized, point-specific pain that worsens with activity and improves with rest — different from the diffuse ache of shin splints.",
        feel:
          "Run your finger down the front of your lower leg. The flat, hard surface from just below the knee to the ankle is the anterior tibia — no muscle covering it.",
        commonIssues: "Tibial stress fractures, tibial shaft fractures (high-energy), shin splints.",
      },
    ],
  },
  {
    slug: "ankle-foot",
    label: "Ankle & Foot",
    tagline: "26 bones absorbing every step, every landing, every mile.",
    description:
      "The foot and ankle form the foundation of the entire body. With 26 bones, 33 joints, and over 100 muscles, tendons, and ligaments, this complex structure absorbs shock, adapts to uneven ground, and propels you forward with every step. Most foot problems are biomechanical — the result of the foot compensating for issues elsewhere in the chain.",
    structures: [
      {
        name: "Achilles Tendon",
        type: "tendon",
        plain:
          "The thickest and strongest tendon in the body, connecting the calf muscles (gastrocnemius and soleus) to the heel bone (calcaneus). It transmits the enormous forces generated by the calf to propel the body forward with every step.",
        relevance:
          "The Achilles bears up to 8 times your body weight when running. Tendinopathy develops from repetitive overload — typically morning stiffness and pain 2–6 cm above the heel that warms up with movement. Rupture (a sharp 'pop' felt like being kicked) requires urgent care.",
        feel:
          "Pinch the cord at the back of your ankle above the heel. If it's tender to even light pressure, your Achilles may be irritated.",
        commonIssues: "Achilles tendinopathy, Achilles rupture — most common in men aged 30–50 who play recreational sports.",
      },
      {
        name: "Plantar Fascia",
        type: "other",
        plain:
          "A thick band of connective tissue on the sole of the foot, running from the heel bone to the base of the toes. It acts like a bowstring — maintaining the arch of the foot and absorbing impact as the foot hits the ground.",
        relevance:
          "Plantar fasciitis causes stabbing heel pain that's worst with the first steps in the morning or after sitting. The fascia gets micro-tears where it attaches to the heel, and the pain is from the healing process being constantly disrupted.",
        feel:
          "Flex your foot up (pull toes toward shin) and press firmly along the sole from heel toward the ball. Tenderness — especially near the heel — is the plantar fascia.",
        commonIssues: "Plantar fasciitis — affects 10% of people at some point. Common in runners, people who stand all day, and those with tight calves.",
      },
      {
        name: "Ankle Ligaments",
        type: "ligament",
        plain:
          "Three ligaments on the outer ankle (ATFL, CFL, PTFL) and a stronger complex on the inner ankle (deltoid ligament) hold the ankle bones together and prevent excessive rolling. The ATFL (anterior talofibular ligament) is the most commonly sprained ligament in the body.",
        relevance:
          "Most ankle sprains involve the outer ligaments from an inversion injury (ankle rolling outward). Incomplete healing leads to chronic ankle instability — the repeated 'giving way' sensation. Full rehabilitation matters more than people realize.",
        feel:
          "Press your finger just in front of and slightly below the outer ankle bone. This spot is the ATFL — the most commonly sprained ligament.",
        commonIssues: "Lateral ankle sprains (most common sports injury overall), chronic ankle instability, high ankle sprains (syndesmotic — slower to heal).",
      },
      {
        name: "Metatarsals",
        type: "bone",
        plain:
          "Five long bones forming the midfoot, connecting the ankle bones to the base of the toes. They spread the load of body weight across the forefoot and form the ball of the foot.",
        relevance:
          "The 5th metatarsal (pinky toe side) is particularly prone to fracture — both from acute inversion injuries (avulsion fracture) and stress fractures from repetitive loading. Morton's neuroma, a thickening of tissue around a nerve between the metatarsals, causes burning or numbness in the toes.",
        feel:
          "Press into the ball of your foot, between the bases of your toes. The bones you're pressing along are the metatarsals.",
        commonIssues: "Metatarsal stress fractures, Jones fracture (5th metatarsal), Morton's neuroma, metatarsalgia.",
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
