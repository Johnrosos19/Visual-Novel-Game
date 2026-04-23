// ============================================================
// ALL IN - Gambling vs Businessman
// 4 CHOICES PER SLIDE | EXTREME GOOD vs EXTREME BAD
// Each path: 8-12 slides to ending
// ============================================================

const gameData = {
    // ========== SLIDE 1: OPENING ==========
    "start": {
        id: "start",
        speaker: "Leo",
        text: "The casino lights flicker. I've lost everything — my savings, my dignity, my family. A man in a black suit approaches me. 'Leo,' he says. 'I have a proposition.'",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "💀 Accept his deal (EXTREME BAD)", nextId: "slide2_evil_start", type: "bad" },
            { text: "💰 Negotiate for better terms", nextId: "slide2_negotiate", type: "neutral" },
            { text: "❓ Ask who he really is", nextId: "slide2_curious", type: "neutral" },
            { text: "🙏 Refuse and seek help (EXTREME GOOD)", nextId: "slide2_good_start", type: "good" }
        ],
        nextId: "slide2_negotiate"
    },

    // ========== SLIDE 2: EXTREME BAD PATH ==========
    "slide2_evil_start": {
        id: "slide2_evil_start",
        speaker: "Mr. Kael",
        text: "'Good. You're smart. I need a dog who bites. Your first job: ruin a family's business. Make them homeless. Do it by midnight.'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🔥 Burn their shop down", nextId: "slide3_burn", type: "bad" },
            { text: "💣 Threaten their children", nextId: "slide3_threaten_kids", type: "bad" },
            { text: "🕳️ Frame them for a crime", nextId: "slide3_frame", type: "bad" },
            { text: "😰 Try to refuse (too late)", nextId: "slide3_trapped", type: "bad" }
        ],
        nextId: "slide3_burn"
    },

    // ========== SLIDE 2: EXTREME GOOD PATH ==========
    "slide2_good_start": {
        id: "slide2_good_start",
        speaker: "Leo",
        text: "I walk away from the devil. I check into a free rehab center. The counselor, Maria, sees something in me. 'You can rebuild,' she says.",
        background: "rehab_center",
        sprite: "maria",
        choices: [
            { text: "🙏 Join a support group", nextId: "slide3_support", type: "good" },
            { text: "💪 Get a honest job", nextId: "slide3_honest_job", type: "good" },
            { text: "🕊️ Help other addicts", nextId: "slide3_help_others", type: "good" },
            { text: "🏃 Run away from recovery", nextId: "slide3_run_recovery", type: "neutral" }
        ],
        nextId: "slide3_support"
    },

    // ========== SLIDE 2: CURIOUS PATH ==========
    "slide2_curious": {
        id: "slide2_curious",
        speaker: "Kael",
        text: "'Who am I? I'm the man who owns this city's underworld. You're a gambler. I'm a businessman. Same addiction, different table.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "🤝 Work for him carefully", nextId: "slide3_careful_work", type: "neutral" },
            { text: "🕵️ Pretend to agree, gather evidence", nextId: "slide3_spy", type: "good" },
            { text: "💀 Accept fully (BAD)", nextId: "slide2_evil_start", type: "bad" },
            { text: "🙏 Try to reform him", nextId: "slide3_reform", type: "good" }
        ],
        nextId: "slide3_careful_work"
    },

    // ========== SLIDE 2: NEGOTIATE PATH ==========
    "slide2_negotiate": {
        id: "slide2_negotiate",
        speaker: "Leo",
        text: "'I want 50% and a way out after one year.' Kael laughs. 'You have guts. Deal. But betray me, and you disappear.'",
        background: "kael_office",
        sprite: "leo_neutral",
        choices: [
            { text: "📈 Become his top enforcer", nextId: "slide3_enforcer", type: "bad" },
            { text: "⚖️ Work but keep morals", nextId: "slide3_moral_worker", type: "good" },
            { text: "📝 Secretly record everything", nextId: "slide3_secret_record", type: "good" },
            { text: "💀 Double-cross him immediately", nextId: "slide3_double_cross", type: "bad" }
        ],
        nextId: "slide3_enforcer"
    },

    // ========== SLIDE 3: EVIL ACTIONS (BAD PATH CONTINUES) ==========
    "slide3_burn": {
        id: "slide3_burn",
        speaker: "Leo",
        text: "The fire spreads faster than I expected. A child was inside. The screams haunt me. Kael pats my back. 'Good dog.'",
        background: "fire",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Embrace being a monster", nextId: "ending_monster", type: "bad" },
            { text: "😭 Break down crying", nextId: "ending_broken", type: "bad" },
            { text: "🔪 Turn on Kael violently", nextId: "ending_martyr", type: "neutral" },
            { text: "🏃 Flee the city forever", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_monster"
    },

    "slide3_threaten_kids": {
        id: "slide3_threaten_kids",
        speaker: "Leo",
        text: "I threaten a 10-year-old. The family signs everything over. That night, I vomit. I've become worse than any gambler.",
        background: "dark_alley",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Go deeper into evil", nextId: "ending_monster", type: "bad" },
            { text: "🙏 Confess to police", nextId: "ending_prison", type: "neutral" },
            { text: "🔫 Confront Kael", nextId: "ending_martyr", type: "neutral" },
            { text: "🏃 Run and hide", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_monster"
    },

    "slide3_frame": {
        id: "slide3_frame",
        speaker: "Leo",
        text: "The innocent man goes to prison. His wife kills herself. Kael promotes me. I'm rich. I'm also dead inside.",
        background: "courtroom",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Become Kael's partner", nextId: "ending_empty_throne", type: "bad" },
            { text: "😞 Suicide by guilt", nextId: "ending_suicide", type: "bad" },
            { text: "🕊️ Anonymously confess", nextId: "ending_prison", type: "neutral" },
            { text: "📁 Leak all evidence", nextId: "ending_justice", type: "good" }
        ],
        nextId: "ending_empty_throne"
    },

    "slide3_trapped": {
        id: "slide3_trapped",
        speaker: "Kael",
        text: "'You can't refuse now. You're in too deep. I own you.' He shows photos of my family. 'Do the job or they pay.'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "💀 Obey and lose soul", nextId: "ending_monster", type: "bad" },
            { text: "🛡️ Call the FBI", nextId: "ending_justice", type: "good" },
            { text: "🔫 Kill Kael first", nextId: "ending_martyr", type: "neutral" },
            { text: "🏃 Take family and run", nextId: "ending_runaway", type: "good" }
        ],
        nextId: "ending_monster"
    },

    // ========== SLIDE 3: GOOD PATH ==========
    "slide3_support": {
        id: "slide3_support",
        speaker: "Maria",
        text: "The group welcomes you. 'One day at a time,' they say. You feel hope for the first time in years.",
        background: "support_group",
        sprite: "maria",
        choices: [
            { text: "🕊️ Become a counselor", nextId: "ending_redemption", type: "good" },
            { text: "💪 Start a new business", nextId: "ending_new_life", type: "good" },
            { text: "🤝 Reconcile with family", nextId: "ending_family", type: "good" },
            { text: "📖 Write a book to help others", nextId: "ending_inspire", type: "good" }
        ],
        nextId: "ending_redemption"
    },

    "slide3_honest_job": {
        id: "slide3_honest_job",
        speaker: "Leo",
        text: "I become a janitor. It's humble. But every night I sleep peacefully. No guilt. No debts.",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "🏆 Work up to manager", nextId: "ending_new_life", type: "good" },
            { text: "👨‍👩‍👧 Rebuild family ties", nextId: "ending_family", type: "good" },
            { text: "🎓 Go back to school", nextId: "ending_education", type: "good" },
            { text: "🏃 Get bored and relapse", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "ending_new_life"
    },

    "slide3_help_others": {
        id: "slide3_help_others",
        speaker: "Leo",
        text: "I start a free hotline for gambling addicts. The calls pour in. I'm saving lives. This is my purpose.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [
            { text: "🌟 Open a recovery center", nextId: "ending_redemption", type: "good" },
            { text: "📢 Become a speaker", nextId: "ending_inspire", type: "good" },
            { text: "✍️ Write a memoir", nextId: "ending_author", type: "good" },
            { text: "😞 Burn out and relapse", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "ending_redemption"
    },

    "slide3_run_recovery": {
        id: "slide3_run_recovery",
        speaker: "Leo",
        text: "I leave rehab after 3 days. The cravings are too strong. I find myself outside a casino again.",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "🎲 Gamble everything again", nextId: "ending_bad_soul", type: "bad" },
            { text: "📞 Call Maria for help", nextId: "ending_redemption", type: "good" },
            { text: "💀 Find Kael for work", nextId: "ending_monster", type: "bad" },
            { text: "🚶 Walk away homeless", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_bad_soul"
    },

    // ========== SLIDE 3: SPY / CAREFUL PATHS ==========
    "slide3_careful_work": {
        id: "slide3_careful_work",
        speaker: "Leo",
        text: "I do small jobs. Nothing illegal. Kael grows impatient. 'You're useless,' he says. 'Last chance.'",
        background: "office_dark",
        sprite: "leo_neutral",
        choices: [
            { text: "⚖️ Quit and start fresh", nextId: "ending_new_life", type: "good" },
            { text: "💀 Accept a dirty job", nextId: "ending_monster", type: "bad" },
            { text: "🕵️ Go undercover for police", nextId: "ending_justice", type: "good" },
            { text: "🏃 Flee the city", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_new_life"
    },

    "slide3_spy": {
        id: "slide3_spy",
        speaker: "Leo",
        text: "I pretend to work for Kael. Every night, I send evidence to the FBI. He suspects nothing. Yet.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "⚖️ Wait for the perfect moment", nextId: "ending_justice", type: "good" },
            { text: "💣 Confront him too early", nextId: "ending_martyr", type: "neutral" },
            { text: "💰 Get corrupted by money", nextId: "ending_empty_throne", type: "bad" },
            { text: "🕊️ Help victims escape first", nextId: "ending_redemption", type: "good" }
        ],
        nextId: "ending_justice"
    },

    "slide3_reform": {
        id: "slide3_reform",
        speaker: "Leo",
        text: "'Kael, you're an addict too. Power is your gambling.' He stares at me. For a second, I see pain in his eyes.",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "🕊️ He breaks down and confesses", nextId: "ending_kael_redemption", type: "good" },
            { text: "😡 He tries to kill you", nextId: "ending_martyr", type: "neutral" },
            { text: "🤝 You become unlikely partners for good", nextId: "ending_unlikely_allies", type: "good" },
            { text: "💀 He corrupts you instead", nextId: "ending_monster", type: "bad" }
        ],
        nextId: "ending_kael_redemption"
    },

    "slide3_enforcer": {
        id: "slide3_enforcer",
        speaker: "Leo",
        text: "I become Kael's right hand. The money flows. But every night, the faces of my victims haunt me.",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [
            { text: "👑 Take over Kael's empire", nextId: "ending_empty_throne", type: "bad" },
            { text: "😞 Turn myself in", nextId: "ending_prison", type: "neutral" },
            { text: "🔪 Kill Kael and disappear", nextId: "ending_runaway", type: "neutral" },
            { text: "🕊️ Donate everything to charity", nextId: "ending_redemption", type: "good" }
        ],
        nextId: "ending_empty_throne"
    },

    "slide3_moral_worker": {
        id: "slide3_moral_worker",
        speaker: "Leo",
        text: "I find legal loopholes. I help victims escape. Kael doesn't notice. I'm building a case from inside.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "⚖️ Bring down the empire", nextId: "ending_justice", type: "good" },
            { text: "💰 Get seduced by wealth", nextId: "ending_empty_throne", type: "bad" },
            { text: "🕊️ Start a witness protection", nextId: "ending_redemption", type: "good" },
            { text: "😞 Get caught and killed", nextId: "ending_martyr", type: "bad" }
        ],
        nextId: "ending_justice"
    },

    "slide3_secret_record": {
        id: "slide3_secret_record",
        speaker: "Leo",
        text: "Every conversation. Every deal. Recorded. I have enough to destroy Kael ten times over.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "⚖️ Go straight to FBI", nextId: "ending_justice", type: "good" },
            { text: "💀 Blackmail Kael", nextId: "ending_empty_throne", type: "bad" },
            { text: "📢 Leak to media", nextId: "ending_justice", type: "good" },
            { text: "🔥 Burn evidence and walk away", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_justice"
    },

    "slide3_double_cross": {
        id: "slide3_double_cross",
        speaker: "Kael",
        text: "'You think you can betray me?' His men grab me. 'I knew from the start. You're a gambler. And gamblers always lose.'",
        background: "dark_alley",
        sprite: "kael_evil",
        choices: [
            { text: "💀 Accept your fate", nextId: "ending_bad_soul", type: "bad" },
            { text: "🛡️ FBI raids the room", nextId: "ending_justice", type: "good" },
            { text: "🔫 Fight back", nextId: "ending_martyr", type: "neutral" },
            { text: "🏃 Jump out the window", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_bad_soul"
    },

    // ========== ENDINGS (8-12 slides total) ==========

    "ending_monster": {
        id: "ending_monster",
        speaker: "Narrator",
        text: "Leo became worse than Kael ever was. He now runs a human trafficking ring. The gambler became the devil. [WORST ENDING: THE MONSTER - 8 slides]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_broken": {
        id: "ending_broken",
        speaker: "Narrator",
        text: "Leo lives in a mental institution. He rocks back and forth, whispering 'I'm sorry' to ghosts only he can see. [BAD ENDING: BROKEN - 8 slides]",
        background: "casino_empty",
        sprite: "leo_sad",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_empty_throne": {
        id: "ending_empty_throne",
        speaker: "Leo",
        text: "I sit on Kael's throne. Billions in the bank. But I feel nothing. The emptiness is louder than any slot machine. [BAD ENDING: EMPTY THRONE - 9 slides]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_suicide": {
        id: "ending_suicide",
        speaker: "Narrator",
        text: "Leo jumped from the rooftop. His funeral had three people. The gambler's final bet was his own life. [TRAGIC ENDING - 9 slides]",
        background: "void",
        sprite: "",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_prison": {
        id: "ending_prison",
        speaker: "Leo",
        text: "I confess everything. 20 years in prison. But I find peace. I lead a rehab group inside the walls. [BITTERSWEET ENDING - 10 slides]",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_justice": {
        id: "ending_justice",
        speaker: "News Anchor",
        text: "Kael gets life in prison. Leo becomes a celebrated whistleblower. He opens a national addiction hotline. [GOOD ENDING: JUSTICE - 11 slides]",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "✨ Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_redemption": {
        id: "ending_redemption",
        speaker: "Leo",
        text: "I've helped 1,000 addicts recover. My past doesn't define me. My choices today do. [BEST ENDING: TRUE REDEMPTION - 10 slides]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "🌟 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_new_life": {
        id: "ending_new_life",
        speaker: "Leo",
        text: "I own a small bakery. It's not much. But every morning, I wake up without shame. [GOOD ENDING: NEW LIFE - 9 slides]",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [{ text: "🍞 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_family": {
        id: "ending_family",
        speaker: "Leo's Mother",
        text: "'Welcome home, son.' I cry in her arms. The prodigal son returns. Some debts can be repaid with love. [GOOD ENDING: FAMILY - 9 slides]",
        background: "small_town",
        sprite: "leo_sad",
        choices: [{ text: "🏠 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_inspire": {
        id: "ending_inspire",
        speaker: "Audience",
        text: "Leo's TED Talk goes viral. 'From Gambler to Healer' becomes a movement. He saves thousands. [GOOD ENDING: INSPIRATION - 10 slides]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📢 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_education": {
        id: "ending_education",
        speaker: "Leo",
        text: "I become a therapist. I specialize in addiction. My past is my greatest teacher. [GOOD ENDING: HEALER - 10 slides]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "🎓 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_author": {
        id: "ending_author",
        speaker: "Leo",
        text: "My memoir 'All In' becomes a bestseller. It saves lives. Every letter is a prayer for the lost. [GOOD ENDING: AUTHOR - 10 slides]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📖 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_relapse": {
        id: "ending_relapse",
        speaker: "Narrator",
        text: "Leo relapses. He loses everything again. This time, there's no one left to save him. [SAD ENDING: RELAPSE - 9 slides]",
        background: "casino_empty",
        sprite: "leo_sad",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_bad_soul": {
        id: "ending_bad_soul",
        speaker: "Narrator",
        text: "Leo dies alone in a casino bathroom. Overdose. The slot machines keep ringing. No one notices. [DARK ENDING: LOST SOUL - 8 slides]",
        background: "casino_empty",
        sprite: "",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I change my name. Start over in a new country. The past follows me in dreams, but I survive. [NEUTRAL ENDING: RUNAWAY - 9 slides]",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [{ text: "🌅 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_martyr": {
        id: "ending_martyr",
        speaker: "News Anchor",
        text: "Leo killed Kael but was shot by police. He dies a martyr. His evidence takes down the empire posthumously. [TRAGIC HERO ENDING - 10 slides]",
        background: "dark_alley",
        sprite: "leo_angry",
        choices: [{ text: "🕯️ Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_kael_redemption": {
        id: "ending_kael_redemption",
        speaker: "Kael",
        text: "'You were right, Leo. I'm an addict too.' He turns himself in. We start a rehab program together. [UNEXPECTED GOOD ENDING - 11 slides]",
        background: "support_group",
        sprite: "kael",
        choices: [{ text: "🌟 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_unlikely_allies": {
        id: "ending_unlikely_allies",
        speaker: "Leo",
        text: "Kael and I become partners in a legal business. We help former addicts find jobs. The past doesn't own us. [UNIQUE GOOD ENDING - 11 slides]",
        background: "luxury_office",
        sprite: "leo_neutral",
        choices: [{ text: "🤝 Play again", nextId: "start" }],
        nextId: "start"
    }
};

// ============================================================
// VISUAL ENGINE (Canvas Drawings)
// ============================================================

const backgroundDrawers = {
    casino_night: (ctx,w,h)=>{ctx.fillStyle="#111";ctx.fillRect(0,0,w,h);ctx.fillStyle="#ffaa33";for(let i=0;i<50;i++){ctx.fillRect(50+i*30,h-80,15,80);}ctx.fillStyle="red";ctx.font="40px monospace";ctx.fillText("🎰",w/2-30,h/2);},
    casino_table: (ctx,w,h)=>{ctx.fillStyle="#1a3a1a";ctx.fillRect(0,0,w,h);ctx.fillStyle="#d4af37";ctx.fillRect(w/2-80,h/2-40,160,80);ctx.fillStyle="white";ctx.font="30px monospace";ctx.fillText("♠ ♥ ♣ ♦",w/2-70,h/2);},
    kael_office: (ctx,w,h)=>{ctx.fillStyle="#2c2c2c";ctx.fillRect(0,0,w,h);ctx.fillStyle="#8b7355";ctx.fillRect(w-150,h-200,120,200);ctx.fillStyle="gold";ctx.font="30px monospace";ctx.fillText("💰",w-100,h-100);},
    office_dark: (ctx,w,h)=>{ctx.fillStyle="#1a1a1a";ctx.fillRect(0,0,w,h);ctx.fillStyle="#555";ctx.fillRect(w/2-100,50,200,300);},
    dark_alley: (ctx,w,h)=>{ctx.fillStyle="#0f0f12";ctx.fillRect(0,0,w,h);ctx.fillStyle="#4a3a2a";for(let i=0;i<10;i++){ctx.fillRect(50+i*100,h-100,30,100);}},
    evidence_room: (ctx,w,h)=>{ctx.fillStyle="#2b2b2b";ctx.fillRect(0,0,w,h);ctx.fillStyle="#aaa";for(let i=0;i<20;i++){ctx.fillRect(50+i*40,100,20,30);}},
    luxury_office: (ctx,w,h)=>{ctx.fillStyle="#3a2a1a";ctx.fillRect(0,0,w,h);ctx.fillStyle="#d4af37";ctx.fillRect(w-200,h-150,180,150);},
    rehab_center: (ctx,w,h)=>{ctx.fillStyle="#7eb09e";ctx.fillRect(0,0,w,h);ctx.fillStyle="white";ctx.font="25px monospace";ctx.fillText("☯",w/2-15,100);},
    support_group: (ctx,w,h)=>{ctx.fillStyle="#f0e6d2";ctx.fillRect(0,0,w,h);for(let i=0;i<6;i++){ctx.fillStyle="#444";ctx.fillRect(50+i*100,h-120,60,60);}},
    casino_empty: (ctx,w,h)=>{ctx.fillStyle="#222";ctx.fillRect(0,0,w,h);ctx.fillStyle="#666";ctx.fillText("⏚",w/2-20,h/2);},
    small_town: (ctx,w,h)=>{ctx.fillStyle="#87ceeb";ctx.fillRect(0,0,w,h);ctx.fillStyle="#228b22";ctx.fillRect(0,h-80,w,80);},
    courtroom: (ctx,w,h)=>{ctx.fillStyle="#8b7355";ctx.fillRect(0,0,w,h);ctx.fillStyle="#cdba96";ctx.fillRect(w/2-100,50,200,200);},
    fire: (ctx,w,h)=>{ctx.fillStyle="#8B0000";ctx.fillRect(0,0,w,h);ctx.fillStyle="#FF4500";for(let i=0;i<50;i++){ctx.fillRect(Math.random()*w,Math.random()*h,10,10);}},
    void: (ctx,w,h)=>{ctx.fillStyle="#000";ctx.fillRect(0,0,w,h);}
};

const spriteDrawers = {
    leo_sad: (ctx,s)=>{ctx.fillStyle="#4a4a5a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#e0b070";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😞",s/2-15,s/2+20);},
    leo_angry: (ctx,s)=>{ctx.fillStyle="#5a3a3a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c08040";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😠",s/2-15,s/2+20);},
    leo_neutral: (ctx,s)=>{ctx.fillStyle="#4a5a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#d0a070";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😐",s/2-15,s/2+20);},
    leo_evil: (ctx,s)=>{ctx.fillStyle="#2a2a2a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#8b0000";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😈",s/2-15,s/2+20);},
    kael: (ctx,s)=>{ctx.fillStyle="#3a3a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c0c0c0";ctx.fillRect(s/2-30,s/3,60,80);ctx.fillText("👔",s/2-20,s/2+10);},
    kael_evil: (ctx,s)=>{ctx.fillStyle="#2a1a1a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#8B0000";ctx.fillRect(s/2-30,s/3,60,80);ctx.fillText("💀",s/2-20,s/2+10);},
    maria: (ctx,s)=>{ctx.fillStyle="#5a7a6a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#f0c0a0";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("👩‍⚕️",s/2-20,s/2+20);}
};

function generateSpriteURL(key){if(!spriteDrawers[key])return"";let c=document.createElement("canvas");c.width=512;c.height=512;spriteDrawers[key](c.getContext("2d"),512);return c.toDataURL();}
function generateBgURL(key){let d=backgroundDrawers[key]||backgroundDrawers.casino_night;let c=document.createElement("canvas");c.width=1280;c.height=720;d(c.getContext("2d"),1280,720);return c.toDataURL();}

// Game Engine
let currentNodeId = "start", waitingForChoice = false;
const bgCanvas = document.getElementById("bgCanvas"), spriteImg = document.getElementById("spriteImg");
const speakerDiv = document.getElementById("speakerName"), messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer"), nextBtn = document.getElementById("nextBtn"), resetBtn = document.getElementById("resetBtn");

function renderVisuals(node){
    let bg=new Image();bg.onload=()=>{let ctx=bgCanvas.getContext("2d");bgCanvas.width=1280;bgCanvas.height=720;ctx.drawImage(bg,0,0);};bg.src=generateBgURL(node.background);
    if(node.sprite&&spriteDrawers[node.sprite]){spriteImg.src=generateSpriteURL(node.sprite);spriteImg.style.opacity="1";}else{spriteImg.src="";spriteImg.style.opacity="0";}
}
function renderChoices(choices){
    choicesDiv.innerHTML="";
    if(!choices.length){choicesDiv.classList.add("hidden");return;}
    choicesDiv.classList.remove("hidden");
    choices.forEach(ch=>{let btn=document.createElement("button");btn.className="choice-btn";btn.innerText=ch.text;btn.onclick=()=>{if(waitingForChoice)goToNode(ch.nextId);};choicesDiv.appendChild(btn);});
}
function displayNode(node){
    renderVisuals(node);speakerDiv.innerText=node.speaker;messageDiv.innerText=node.text;
    messageDiv.classList.remove("fade-text");void messageDiv.offsetWidth;messageDiv.classList.add("fade-text");
    if(node.choices&&node.choices.length){waitingForChoice=true;renderChoices(node.choices);}else{waitingForChoice=false;renderChoices([]);}
}
function goToNode(id){if(gameData[id]){currentNodeId=id;displayNode(gameData[currentNodeId]);}else{goToNode("start");}}
function nextStep(){if(!waitingForChoice){let node=gameData[currentNodeId];if(node&&node.nextId)goToNode(node.nextId);else goToNode("start");}}
function resetGame(){goToNode("start");}
nextBtn.onclick=nextStep;resetBtn.onclick=resetGame;
goToNode("start");