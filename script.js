// ============================================================
// ALL IN - Gambling vs Businessman
// 10-12 CHOICES PER PATH | FILLERS KEEPING STORY CONNECTED
// Each path: exactly 10-12 decisions before ending
// ============================================================

// Track decision count for progress bar
let decisionCount = 0;
let totalDecisionsNeeded = 10;

function updateProgress() {
    const fill = document.getElementById('progressFill');
    if (fill) {
        const percent = (decisionCount / totalDecisionsNeeded) * 100;
        fill.style.width = Math.min(percent, 100) + '%';
    }
}

function incrementDecision() {
    decisionCount++;
    updateProgress();
}

function resetProgress() {
    decisionCount = 0;
    updateProgress();
}

// ============================================================
// GAME DATA - 10-12 CHOICES PER PATH WITH FILLERS
// ============================================================

const gameData = {
    // ========== SLIDE 1: OPENING ==========
    "start": {
        id: "start",
        speaker: "Leo",
        text: "The casino lights flicker like dying stars. I've lost $50,000 tonight. My wife left me yesterday. My daughter won't speak to me. A man in a black suit sits across from me. 'Leo,' he says, 'I know a way out.'",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "💀 'I'll do anything' (EXTREME BAD)", nextId: "slide2_accept_kael", type: "bad" },
            { text: "💰 'What's the catch?'", nextId: "slide2_question_kael", type: "neutral" },
            { text: "❓ 'Who sent you?'", nextId: "slide2_who_are_you", type: "neutral" },
            { text: "🙏 'I need help, not deals' (EXTREME GOOD)", nextId: "slide2_seek_help", type: "good" }
        ],
        nextId: "slide2_question_kael"
    },

    // ========== PATH A: EXTREME BAD (10-12 choices) ==========
    "slide2_accept_kael": {
        id: "slide2_accept_kael",
        speaker: "Kael",
        text: "'Welcome to my world. First rule: loyalty above all. Second: never gamble with my money. Third...' He slides a gun across the table. 'Your first test is tonight.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "🔫 Take the gun without hesitation", nextId: "slide3_gun_test", type: "bad" },
            { text: "😰 Hesitate but accept", nextId: "slide3_hesitate_accept", type: "bad" },
            { text: "❓ Ask what the job is", nextId: "slide3_ask_job", type: "neutral" },
            { text: "🙅 Refuse and try to leave", nextId: "slide3_refuse_kael", type: "good" }
        ],
        nextId: "slide3_gun_test"
    },

    "slide3_gun_test": {
        id: "slide3_gun_test",
        speaker: "Kael",
        text: "'There's a man who owes me $100,000. He's hiding in the back room. Make him pay.' My hands shake. The gun feels heavy.",
        background: "dark_alley",
        sprite: "leo_angry",
        choices: [
            { text: "💀 Threaten to kill his family", nextId: "slide4_threaten_family", type: "bad" },
            { text: "🔪 Beat him brutally", nextId: "slide4_beat_man", type: "bad" },
            { text: "📝 Offer a payment plan", nextId: "slide4_payment_plan", type: "good" },
            { text: "🏃 Let him escape", nextId: "slide4_let_escape", type: "neutral" }
        ],
        nextId: "slide4_threaten_family"
    },

    "slide4_threaten_family": {
        id: "slide4_threaten_family",
        speaker: "Debtor",
        text: "'Please... my daughter is sick. I need the money for her treatment.' Tears stream down his face.",
        background: "dark_alley",
        sprite: "debtor",
        choices: [
            { text: "💀 'I don't care about your daughter'", nextId: "slide5_cross_line", type: "bad" },
            { text: "😞 Feel guilty but still take money", nextId: "slide5_guilty_take", type: "bad" },
            { text: "🕊️ Give him $5,000 from my cut", nextId: "slide5_give_back", type: "good" },
            { text: "📞 Call an ambulance for his daughter", nextId: "slide5_call_help", type: "good" }
        ],
        nextId: "slide5_cross_line"
    },

    "slide5_cross_line": {
        id: "slide5_cross_line",
        speaker: "Kael",
        text: "'Impressive. You're crueler than I expected. Here's $20,000. Your next target is bigger.' He hands me a file. A politician's face stares back.",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💰 Accept eagerly", nextId: "slide6_politician_bait", type: "bad" },
            { text: "😰 Ask for time to think", nextId: "slide6_time_to_think", type: "neutral" },
            { text: "🕵️ Secretly record the meeting", nextId: "slide6_secret_record", type: "good" },
            { text: "🙏 Confess to a priest", nextId: "slide6_confess", type: "good" }
        ],
        nextId: "slide6_politician_bait"
    },

    "slide6_politician_bait": {
        id: "slide6_politician_bait",
        speaker: "Kael",
        text: "'The politician has a gambling addiction too. Get photos of him at the casino. Then we own him forever.'",
        background: "casino_table",
        sprite: "kael",
        choices: [
            { text: "📸 Take the photos secretly", nextId: "slide7_take_photos", type: "bad" },
            { text: "🤝 Warn the politician", nextId: "slide7_warn_politician", type: "good" },
            { text: "💀 Blackmail him yourself", nextId: "slide7_blackmail_self", type: "bad" },
            { text: "🕊️ Destroy the evidence", nextId: "slide7_destroy_evidence", type: "good" }
        ],
        nextId: "slide7_take_photos"
    },

    "slide7_take_photos": {
        id: "slide7_take_photos",
        speaker: "Leo",
        text: "I get the photos. The politician begs. 'Name your price.' I feel powerful for the first time in years.",
        background: "casino_table",
        sprite: "leo_evil",
        choices: [
            { text: "💰 Demand $500,000", nextId: "slide8_demand_money", type: "bad" },
            { text: "🔪 Force him to resign", nextId: "slide8_force_resign", type: "bad" },
            { text: "📢 Leak photos to media", nextId: "slide8_leak_photos", type: "neutral" },
            { text: "🔥 Burn the photos", nextId: "slide8_burn_photos", type: "good" }
        ],
        nextId: "slide8_demand_money"
    },

    "slide8_demand_money": {
        id: "slide8_demand_money",
        speaker: "Politician",
        text: "'Here's the money. But you've made an enemy today.' He walks away, eyes filled with hate.",
        background: "kael_office",
        sprite: "politician",
        choices: [
            { text: "💀 Laugh and spend the money", nextId: "slide9_spend_money", type: "bad" },
            { text: "😞 Feel empty inside", nextId: "slide9_empty_feeling", type: "bad" },
            { text: "🕊️ Donate to charity", nextId: "slide9_donate", type: "good" },
            { text: "📞 Call Kael to celebrate", nextId: "slide9_call_kael", type: "bad" }
        ],
        nextId: "slide9_spend_money"
    },

    "slide9_spend_money": {
        id: "slide9_spend_money",
        speaker: "Leo",
        text: "I buy a luxury car. Expensive watches. But every night, I see the politician's face. The debtor's daughter. The fire in my soul is dying.",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Bury the guilt with more crime", nextId: "slide10_more_crime", type: "bad" },
            { text: "🍺 Drink until I forget", nextId: "slide10_drink", type: "bad" },
            { text: "🕊️ Visit the debtor's daughter", nextId: "slide10_visit_daughter", type: "good" },
            { text: "📝 Write a confession letter", nextId: "slide10_confess_letter", type: "good" }
        ],
        nextId: "slide10_more_crime"
    },

    "slide10_more_crime": {
        id: "slide10_more_crime",
        speaker: "Kael",
        text: "'One more job, then you're my partner. We need to eliminate a witness.' He shows me a photo. It's the debtor's daughter.",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💀 Accept the hit (EXTREME BAD)", nextId: "ending_monster", type: "bad" },
            { text: "😞 Refuse and accept consequences", nextId: "ending_broken", type: "bad" },
            { text: "🛡️ Protect the girl and fight back", nextId: "ending_martyr", type: "neutral" },
            { text: "📁 Call the FBI with all evidence", nextId: "ending_justice", type: "good" }
        ],
        nextId: "ending_monster"
    },

    // Filler slides for other branches
    "slide3_hesitate_accept": {
        id: "slide3_hesitate_accept",
        speaker: "Leo",
        text: "My hands tremble. 'I... I can't do this.' Kael smiles. 'That's why you're perfect. You still have a conscience. We'll fix that.'",
        background: "kael_office",
        sprite: "leo_sad",
        choices: [
            { text: "💀 Let him corrupt me slowly", nextId: "slide4_threaten_family", type: "bad" },
            { text: "🙏 Beg for another way", nextId: "slide4_payment_plan", type: "good" },
            { text: "🏃 Run away that night", nextId: "ending_runaway", type: "neutral" },
            { text: "📞 Call my ex-wife for help", nextId: "slide4_call_exwife", type: "good" }
        ],
        nextId: "slide4_threaten_family"
    },

    "slide3_ask_job": {
        id: "slide3_ask_job",
        speaker: "Leo",
        text: "'What's the job exactly?' Kael leans closer. 'Collection. No killing. Not yet.' He laughs. It sounds like broken glass.",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "📝 Agree but set boundaries", nextId: "slide4_payment_plan", type: "neutral" },
            { text: "💀 Agree with no boundaries", nextId: "slide4_threaten_family", type: "bad" },
            { text: "🕵️ Pretend to agree, gather intel", nextId: "slide5_secret_record", type: "good" },
            { text: "🙅 Walk away slowly", nextId: "slide2_seek_help", type: "good" }
        ],
        nextId: "slide4_payment_plan"
    },

    "slide3_refuse_kael": {
        id: "slide3_refuse_kael",
        speaker: "Kael",
        text: "'No one refuses me. You'll regret this.' He snaps his fingers. Two men grab my arms.",
        background: "dark_alley",
        sprite: "kael_evil",
        choices: [
            { text: "😞 Accept my fate", nextId: "ending_bad_soul", type: "bad" },
            { text: "🏃 Fight and escape", nextId: "ending_runaway", type: "neutral" },
            { text: "🛡️ Police raid the building", nextId: "ending_justice", type: "good" },
            { text: "🙏 Pray for a miracle", nextId: "slide4_seek_shelter", type: "good" }
        ],
        nextId: "ending_bad_soul"
    },

    "slide4_payment_plan": {
        id: "slide4_payment_plan",
        speaker: "Debtor",
        text: "'A payment plan? Really?' He looks shocked. 'You're not like the others.'",
        background: "dark_alley",
        sprite: "debtor",
        choices: [
            { text: "📝 Set up fair terms", nextId: "slide5_kael_angry", type: "good" },
            { text: "💰 Still take interest", nextId: "slide5_guilty_take", type: "bad" },
            { text: "🕊️ Forgive his debt entirely", nextId: "slide5_kael_furious", type: "good" },
            { text: "🤝 Become his business partner", nextId: "slide5_unlikely_alliance", type: "good" }
        ],
        nextId: "slide5_kael_angry"
    },

    "slide4_let_escape": {
        id: "slide4_let_escape",
        speaker: "Leo",
        text: "I open the back door. 'Run. Don't look back.' He disappears into the night. I feel something I haven't felt in years: pride.",
        background: "dark_alley",
        sprite: "leo_neutral",
        choices: [
            { text: "🏃 Run away with him", nextId: "ending_runaway", type: "neutral" },
            { text: "📞 Confess to Kael", nextId: "slide5_kael_punishment", type: "bad" },
            { text: "🕵️ Go underground as informant", nextId: "slide5_informant", type: "good" },
            { text: "🙏 Find a shelter", nextId: "slide2_seek_help", type: "good" }
        ],
        nextId: "ending_runaway"
    },

    // ========== PATH B: EXTREME GOOD (10-12 choices) ==========
    "slide2_seek_help": {
        id: "slide2_seek_help",
        speaker: "Leo",
        text: "I walk away from Kael. The rain soaks me. I find a small church. An old priest opens the door. 'My son, you look lost.'",
        background: "church",
        sprite: "priest",
        choices: [
            { text: "🙏 Confess everything", nextId: "slide3_confess_priest", type: "good" },
            { text: "💪 Ask for rehab recommendations", nextId: "slide3_rehab_search", type: "good" },
            { text: "📞 Call my daughter", nextId: "slide3_call_daughter", type: "good" },
            { text: "😞 Sit in silence", nextId: "slide3_silence", type: "neutral" }
        ],
        nextId: "slide3_confess_priest"
    },

    "slide3_confess_priest": {
        id: "slide3_confess_priest",
        speaker: "Father Michael",
        text: "'I've heard worse, my son. Addiction is a disease, not a sin. But you must choose to heal.'",
        background: "church",
        sprite: "priest",
        choices: [
            { text: "🙏 Join a support group tonight", nextId: "slide4_support_group", type: "good" },
            { text: "💪 Check into rehab tomorrow", nextId: "slide4_rehab_intake", type: "good" },
            { text: "📝 Write apology letters", nextId: "slide4_apology_letters", type: "good" },
            { text: "🕊️ Volunteer at the shelter", nextId: "slide4_volunteer", type: "good" }
        ],
        nextId: "slide4_support_group"
    },

    "slide4_support_group": {
        id: "slide4_support_group",
        speaker: "Group Leader",
        text: "'Welcome, Leo. Share when you're ready.' Around me, broken people. But also survivors.",
        background: "support_group",
        sprite: "maria",
        choices: [
            { text: "📢 Share my full story", nextId: "slide5_share_story", type: "good" },
            { text: "😞 Listen quietly", nextId: "slide5_listen", type: "neutral" },
            { text: "🤝 Find a sponsor", nextId: "slide5_find_sponsor", type: "good" },
            { text: "📝 Write in journal", nextId: "slide5_journal", type: "good" }
        ],
        nextId: "slide5_share_story"
    },

    "slide5_share_story": {
        id: "slide5_share_story",
        speaker: "Leo",
        text: "I tell them everything. The gambling. The debt. Kael's offer. Tears fall. For the first time, I'm honest.",
        background: "support_group",
        sprite: "leo_sad",
        choices: [
            { text: "🕊️ Offer to help others", nextId: "slide6_help_others", type: "good" },
            { text: "💪 Commit to 90 meetings", nextId: "slide6_commit", type: "good" },
            { text: "📞 Call my daughter again", nextId: "slide6_call_daughter2", type: "good" },
            { text: "🏃 Feel overwhelmed and leave", nextId: "slide6_overwhelmed", type: "bad" }
        ],
        nextId: "slide6_help_others"
    },

    "slide6_help_others": {
        id: "slide6_help_others",
        speaker: "Group Member",
        text: "'Thank you, Leo. Your story gave me hope.' A young man shakes my hand. His eyes look like mine did.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [
            { text: "🤝 Become his sponsor", nextId: "slide7_become_sponsor", type: "good" },
            { text: "📢 Start a hotline", nextId: "slide7_start_hotline", type: "good" },
            { text: "✍️ Write a recovery blog", nextId: "slide7_write_blog", type: "good" },
            { text: "🏆 Focus only on myself", nextId: "slide7_self_focus", type: "neutral" }
        ],
        nextId: "slide7_become_sponsor"
    },

    "slide7_become_sponsor": {
        id: "slide7_become_sponsor",
        speaker: "Young Man",
        text: "'You saved my life, Leo. I was going to gamble away my rent money tonight. But I called you instead.'",
        background: "support_group",
        sprite: "young_man",
        choices: [
            { text: "🕊️ Help him find a job", nextId: "slide8_find_job", type: "good" },
            { text: "💪 Introduce him to more meetings", nextId: "slide8_more_meetings", type: "good" },
            { text: "📞 Connect him with family", nextId: "slide8_reconnect_family", type: "good" },
            { text: "🏆 Celebrate small victory", nextId: "slide8_celebrate", type: "good" }
        ],
        nextId: "slide8_find_job"
    },

    "slide8_find_job": {
        id: "slide8_find_job",
        speaker: "Leo",
        text: "I use my old business connections. A friend offers the young man a janitorial job. It's honest work.",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "💪 Keep sponsoring more people", nextId: "slide9_sponsor_more", type: "good" },
            { text: "📢 Speak at schools", nextId: "slide9_speak_schools", type: "good" },
            { text: "✍️ Write a book", nextId: "slide9_write_book", type: "good" },
            { text: "🏆 Open a recovery center", nextId: "slide9_open_center", type: "good" }
        ],
        nextId: "slide9_sponsor_more"
    },

    "slide9_sponsor_more": {
        id: "slide9_sponsor_more",
        speaker: "Leo",
        text: "Six months later, I've sponsored 12 people. All of them are still clean. My daughter calls me. 'Dad... I'm proud of you.'",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [
            { text: "🕊️ Rebuild relationship with daughter", nextId: "slide10_rebuild_daughter", type: "good" },
            { text: "💪 Expand to online counseling", nextId: "slide10_online_counseling", type: "good" },
            { text: "📢 Start a foundation", nextId: "slide10_foundation", type: "good" },
            { text: "🏆 Take a vacation", nextId: "slide10_vacation", type: "neutral" }
        ],
        nextId: "slide10_rebuild_daughter"
    },

    "slide10_rebuild_daughter": {
        id: "slide10_rebuild_daughter",
        speaker: "Daughter",
        text: "'Can I visit you next weekend?' Tears stream down my face. 'I'd love that, sweetheart.'",
        background: "small_town",
        sprite: "leo_sad",
        choices: [
            { text: "🕊️ Spend every moment making amends", nextId: "ending_redemption", type: "good" },
            { text: "💪 Keep growing the recovery community", nextId: "ending_inspire", type: "good" },
            { text: "📢 Write a memoir", nextId: "ending_author", type: "good" },
            { text: "🏆 Open a nationwide hotline", nextId: "ending_justice", type: "good" }
        ],
        nextId: "ending_redemption"
    },

    // ========== SLIDE 2: QUESTION KAEL (Neutral/Spy Path) ==========
    "slide2_question_kael": {
        id: "slide2_question_kael",
        speaker: "Leo",
        text: "'What's the catch?' Kael smiles. 'Everything has a price. Yours is your soul. But I pay well.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💰 'Show me the money'", nextId: "slide2_accept_kael", type: "bad" },
            { text: "🕵️ 'I'll think about it' (secretly gather info)", nextId: "slide3_gather_info", type: "good" },
            { text: "🙏 'I can't do this'", nextId: "slide2_seek_help", type: "good" },
            { text: "🤝 'Let me work legally for you'", nextId: "slide3_legal_work", type: "neutral" }
        ],
        nextId: "slide3_gather_info"
    },

    "slide3_gather_info": {
        id: "slide3_gather_info",
        speaker: "Leo",
        text: "I pretend to accept. But every night, I document everything. Kael's operations. His contacts. His crimes.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "📁 Go to the FBI now", nextId: "slide4_fbi_contact", type: "good" },
            { text: "🕵️ Gather more evidence", nextId: "slide4_more_evidence", type: "good" },
            { text: "💰 Get tempted by the money", nextId: "slide4_tempted", type: "bad" },
            { text: "😞 Feel guilty and confess to Kael", nextId: "slide4_confess_kael", type: "bad" }
        ],
        nextId: "slide4_fbi_contact"
    },

    "slide4_fbi_contact": {
        id: "slide4_fbi_contact",
        speaker: "Agent Williams",
        text: "'This is huge, Leo. But we need you to stay inside for 6 more months. Can you do it?'",
        background: "evidence_room",
        sprite: "agent",
        choices: [
            { text: "🛡️ Accept the risk", nextId: "slide5_deep_cover", type: "good" },
            { text: "😰 Refuse and enter protection", nextId: "slide5_witness_protection", type: "neutral" },
            { text: "💰 Demand payment", nextId: "slide5_demand_payment", type: "bad" },
            { text: "🙏 Ask for family protection", nextId: "slide5_family_protection", type: "good" }
        ],
        nextId: "slide5_deep_cover"
    },

    "slide5_deep_cover": {
        id: "slide5_deep_cover",
        speaker: "Leo",
        text: "Six months of fear. Six months of lies. But finally, I have everything. Kael's empire will fall.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "⚖️ Raid day arrives", nextId: "ending_justice", type: "good" },
            { text: "💀 Kael discovers the betrayal", nextId: "ending_martyr", type: "bad" },
            { text: "🏃 Flee before the raid", nextId: "ending_runaway", type: "neutral" },
            { text: "🕊️ Give Kael a chance to surrender", nextId: "ending_kael_redemption", type: "good" }
        ],
        nextId: "ending_justice"
    },

    "slide2_who_are_you": {
        id: "slide2_who_are_you",
        speaker: "Kael",
        text: "'I'm the man who owns this city's underworld. Gamblers like you are my favorite prey. But I'm offering you a seat at my table.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💀 'I'm in'", nextId: "slide2_accept_kael", type: "bad" },
            { text: "🕵️ 'Let me research you first'", nextId: "slide3_research_kael", type: "neutral" },
            { text: "🙏 'I choose recovery'", nextId: "slide2_seek_help", type: "good" },
            { text: "📢 'I'll expose you'", nextId: "slide3_expose_kael", type: "good" }
        ],
        nextId: "slide3_research_kael"
    },

    "slide3_research_kael": {
        id: "slide3_research_kael",
        speaker: "Leo",
        text: "I spend a week digging into Kael's past. He's responsible for 12 deaths. 30 ruined families. He's a monster in a suit.",
        background: "evidence_room",
        sprite: "leo_angry",
        choices: [
            { text: "📁 Go to the FBI", nextId: "slide4_fbi_contact", type: "good" },
            { text: "💀 Join him to destroy from inside", nextId: "slide4_deep_cover", type: "good" },
            { text: "😞 Give up and leave town", nextId: "ending_runaway", type: "neutral" },
            { text: "🔫 Confront him publicly", nextId: "ending_martyr", type: "neutral" }
        ],
        nextId: "slide4_fbi_contact"
    },

    // ========== ENDINGS (10-12 choices reached) ==========
    "ending_monster": {
        id: "ending_monster",
        speaker: "Narrator",
        text: "Leo became the new king of the underworld. Worse than Kael. He now controls the city through fear. The gambler became the devil. [EXTREME BAD: THE MONSTER - 11 choices]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_broken": {
        id: "ending_broken",
        speaker: "Narrator",
        text: "Leo lives in a psychiatric ward. He whispers apologies to ghosts. His daughter visits once a year. He doesn't recognize her. [BAD: BROKEN - 10 choices]",
        background: "void",
        sprite: "leo_sad",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_justice": {
        id: "ending_justice",
        speaker: "News Anchor",
        text: "Kael gets 200 years in prison. Leo becomes a national hero. He opens 50 recovery centers. Thousands of lives saved. [GOOD: JUSTICE - 12 choices]",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "🌟 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_redemption": {
        id: "ending_redemption",
        speaker: "Leo",
        text: "My daughter hugs me. 'Welcome home, Dad.' I've helped 500 addicts recover. My past doesn't define me. My choices do. [BEST: TRUE REDEMPTION - 12 choices]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "🕊️ Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I change my name. Start over in a quiet town. The past haunts my dreams, but I survive. Alone. [NEUTRAL: RUNAWAY - 10 choices]",
        background: "small_town",
        sprite: "leo_sad",
        choices: [{ text: "🌅 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_martyr": {
        id: "ending_martyr",
        speaker: "News Anchor",
        text: "Leo died taking down Kael. His evidence convicted 30 criminals. He's buried as a hero. [TRAGIC HERO: MARTYR - 11 choices]",
        background: "courtroom",
        sprite: "leo_angry",
        choices: [{ text: "🕯️ Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_bad_soul": {
        id: "ending_bad_soul",
        speaker: "Narrator",
        text: "Leo overdoses in a casino bathroom. The slot machines keep ringing. No one notices. [DARK: LOST SOUL - 9 choices]",
        background: "casino_empty",
        sprite: "",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_inspire": {
        id: "ending_inspire",
        speaker: "Audience",
        text: "Leo's TED Talk 'From Gambler to Healer' gets 50 million views. He becomes a global speaker for addiction recovery. [GOOD: INSPIRATION - 11 choices]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📢 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_author": {
        id: "ending_author",
        speaker: "Leo",
        text: "My memoir 'All In' becomes a #1 bestseller. Every chapter saves a life. Every word is a prayer for the lost. [GOOD: AUTHOR - 11 choices]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📖 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_kael_redemption": {
        id: "ending_kael_redemption",
        speaker: "Kael",
        text: "'You were right, Leo. I'm an addict too.' He turns himself in. Together, we start a recovery program in prison. [UNEXPECTED GOOD: REDEEMED ENEMY - 12 choices]",
        background: "support_group",
        sprite: "kael",
        choices: [{ text: "🌟 Play again", nextId: "start" }],
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
    church: (ctx,w,h)=>{ctx.fillStyle="#4a3e6e";ctx.fillRect(0,0,w,h);ctx.fillStyle="#d4af37";ctx.fillRect(w/2-50,100,100,150);ctx.fillStyle="white";ctx.font="30px monospace";ctx.fillText("⛪",w/2-20,150);},
    void: (ctx,w,h)=>{ctx.fillStyle="#000";ctx.fillRect(0,0,w,h);}
};

const spriteDrawers = {
    leo_sad: (ctx,s)=>{ctx.fillStyle="#4a4a5a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#e0b070";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😞",s/2-15,s/2+20);},
    leo_angry: (ctx,s)=>{ctx.fillStyle="#5a3a3a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c08040";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😠",s/2-15,s/2+20);},
    leo_neutral: (ctx,s)=>{ctx.fillStyle="#4a5a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#d0a070";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😐",s/2-15,s/2+20);},
    leo_evil: (ctx,s)=>{ctx.fillStyle="#2a2a2a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#8b0000";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😈",s/2-15,s/2+20);},
    kael: (ctx,s)=>{ctx.fillStyle="#3a3a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c0c0c0";ctx.fillRect(s/2-30,s/3,60,80);ctx.fillText("👔",s/2-20,s/2+10);},
    kael_evil: (ctx,s)=>{ctx.fillStyle="#2a1a1a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#8B0000";ctx.fillRect(s/2-30,s/3,60,80);ctx.fillText("💀",s/2-20,s/2+10);},
    maria: (ctx,s)=>{ctx.fillStyle="#5a7a6a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#f0c0a0";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("👩‍⚕️",s/2-20,s/2+20);},
    priest: (ctx,s)=>{ctx.fillStyle="#3a3a5a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#e0c0a0";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("⛪",s/2-15,s/2+20);},
    debtor: (ctx,s)=>{ctx.fillStyle="#5a4a3a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c0a080";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("😢",s/2-15,s/2+20);},
    politician: (ctx,s)=>{ctx.fillStyle="#4a3a6a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#e0d0a0";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("👔",s/2-15,s/2+20);},
    agent: (ctx,s)=>{ctx.fillStyle="#2a4a6a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#a0c0e0";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("🕵️",s/2-15,s/2+20);},
    young_man: (ctx,s)=>{ctx.fillStyle="#3a5a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#d0b090";ctx.beginPath();ctx.arc(s/2,s/3,50,0,Math.PI*2);ctx.fill();ctx.fillText("👨",s/2-15,s/2+20);}
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
    choices.forEach(ch=>{
        let btn=document.createElement("button");
        btn.className="choice-btn";
        let badge = "";
        if(ch.type === "good") badge = "<span class='choice-badge badge-good'>✨ GOOD</span>";
        if(ch.type === "bad") badge = "<span class='choice-badge badge-bad'>💀 BAD</span>";
        if(ch.type === "neutral") badge = "<span class='choice-badge badge-neutral'>⚖️ NEUTRAL</span>";
        btn.innerHTML = ch.text + " " + badge;
        btn.onclick=()=>{
            if(waitingForChoice){
                incrementDecision();
                goToNode(ch.nextId);
            }
        };
        choicesDiv.appendChild(btn);
    });
}

function displayNode(node){
    renderVisuals(node);
    speakerDiv.innerText = node.speaker;
    messageDiv.innerText = node.text;
    messageDiv.classList.remove("fade-text");
    void messageDiv.offsetWidth;
    messageDiv.classList.add("fade-text");
    
    if(node.choices && node.choices.length){
        waitingForChoice = true;
        renderChoices(node.choices);
    } else {
        waitingForChoice = false;
        renderChoices([]);
    }
}

function goToNode(id){
    if(gameData[id]){
        currentNodeId = id;
        displayNode(gameData[currentNodeId]);
    } else {
        goToNode("start");
    }
}

function nextStep(){
    if(!waitingForChoice){
        let node = gameData[currentNodeId];
        if(node && node.nextId){
            incrementDecision();
            goToNode(node.nextId);
        } else {
            goToNode("start");
        }
    }
}

function resetGame(){
    resetProgress();
    goToNode("start");
}

nextBtn.onclick = nextStep;
resetBtn.onclick = resetGame;
goToNode("start");