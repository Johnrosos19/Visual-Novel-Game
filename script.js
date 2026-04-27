// ============================================================
// ALL IN - Gambling vs Businessman
// WITH YOUR CUSTOM IMAGES
// ============================================================

// ========== IMAGE PATHS (Using YOUR exact file names) ==========
const IMAGE_PATHS = {
    // Background images
    backgrounds: {
        casino_night: "casino_night.png",
        casino_table: "casino_night.png",
        kael_office: "kael_office.png",
        dark_alley: "dark_alley.png",
        evidence_room: "evidence_rome.png",
        luxury_office: "luxury_office.png",
        church: "church.png",
        support_group: "support_group.png",
        courtroom: "courtroom.png",
        small_town: "small_town.png",
        hospital: "hospital_room.png",
        void: "void.png",
        casino_empty: "casino_empty.png",
        default: "casino_night.png"
    },
    
    // Character portraits
    characters: {
        leo_sad: "leo_sad.png",
        leo_angry: "leo_angry.png",
        leo_neutral: "leo_neutral.png",
        leo_evil: "leo_evil.png",
        kael: "kael.png",
        kael_evil: "kael_evil.png",
        maria: "maria.png",
        priest: "priest.png",
        debtor: "debtor.png",
        politician: "politician.png",
        agent: "agent.png",
        daughter: "daughter.png",
        default: "leo_neutral.png"
    }
};

// ========== GAME DATA ==========
const gameData = {
    "start": {
        id: "start",
        speaker: "Leo",
        text: "The casino lights flicker like dying stars, casting blood-red shadows across the velvet carpet. I've lost everything tonight. Not just money—my wife's tear-streaked face as she walked out, my daughter's voice cracking on the phone: 'Daddy, why don't you love us anymore?' Fifty thousand dollars gone in three hours. The whiskey burns my throat, but it can't drown the screams in my head. Then a shadow falls over my table. A man in an impeccable black suit, silver cufflinks gleaming. His eyes are like frozen mercury. 'Leo Marino,' he says, sliding into the seat across from me. 'I've been watching you. You're not a gambler. You're a man who's forgotten how to win. I can remind you.'",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "💀 'I don't care anymore. Tell me the deal.' (Extreme Bad)", nextId: "accept_kael", type: "bad" },
            { text: "💰 'How much are we talking?' (Greedy path)", nextId: "question_kael", type: "neutral" },
            { text: "❓ 'Why me? I'm nobody.' (Curious)", nextId: "who_are_you", type: "neutral" },
            { text: "🙏 'I need help, not another demon.' (Extreme Good)", nextId: "seek_help", type: "good" }
        ],
        nextId: "accept_kael"
    },
    
    "accept_kael": {
        id: "accept_kael",
        speaker: "Kael",
        text: "'Welcome to my world. First rule: loyalty above all. Second: never gamble with my money. Third...' He slides a gun across the table. 'Your first test is tonight. A man named Victor Ross owes me two hundred thousand. He's hiding in a rundown apartment on Fifth. Make him pay. Not with words—with presence. Show him what happens when someone steals from me. Do this, and your debt disappears. You'll have a place at my table. Refuse...' He leaves the threat hanging in the air like a guillotine blade.",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🔫 Take the gun without hesitation", nextId: "collect_cruel", type: "bad" },
            { text: "😰 Hesitate but accept", nextId: "collect_hesitate", type: "bad" },
            { text: "❓ Ask what the job is", nextId: "collect_ask", type: "neutral" },
            { text: "🙅 Refuse and try to leave", nextId: "refuse_kael", type: "good" }
        ],
        nextId: "collect_cruel"
    },
    
    "collect_cruel": {
        id: "collect_cruel",
        speaker: "Leo",
        text: "The apartment smells of cheap beer and regret. Victor Ross is a broken man—gray stubble, trembling hands, a photo of a little girl on the wall. 'Please,' he whispers, 'my daughter needs surgery. I took the money for her.' His eyes are wet. I've seen that look in the mirror. But Kael's voice echoes in my head. I slam his head against the table. Blood drips onto the photo. He signs over everything—his savings, his car, his dignity. As I walk out, I hear him sobbing. I tell myself he deserves it. But that night, I can't sleep. The sobs echo in my skull like a broken slot machine.",
        background: "dark_alley",
        sprite: "leo_evil",
        choices: [
            { text: "💰 Celebrate with Kael's money", nextId: "celebrate", type: "bad" },
            { text: "😞 Drink until I forget", nextId: "drink_away", type: "bad" },
            { text: "🕊️ Send an anonymous donation to his daughter's surgery", nextId: "donate_guilt", type: "good" },
            { text: "📞 Call a hotline for help", nextId: "seek_help", type: "good" }
        ],
        nextId: "celebrate"
    },
    
    "celebrate": {
        id: "celebrate",
        speaker: "Kael",
        text: "'Impressive. You're crueler than I expected. Here's $20,000. Your next target is bigger.' He hands me a file. A politician's face stares back—Senator Hayes. 'He's been skimming from my construction funds. I need leverage. Photos. Secrets. His family is his weakness. Find it.' The money feels good. The power feels better. But somewhere deep inside, a small voice whispers: You're becoming the monster you always feared.",
        background: "luxury_office",
        sprite: "kael_evil",
        choices: [
            { text: "📸 Take the job. Dig up dirt on Hayes.", nextId: "politician_bad", type: "bad" },
            { text: "🕵️ Pretend to accept, then warn Hayes", nextId: "warn_hayes", type: "good" },
            { text: "🙅 Refuse again and walk away", nextId: "walk_away_kael", type: "good" },
            { text: "💰 Demand more money for the risk", nextId: "demand_money", type: "neutral" }
        ],
        nextId: "politician_bad"
    },
    
    "politician_bad": {
        id: "politician_bad",
        speaker: "Leo",
        text: "Senator Hayes lives in a gated community. I watch him from across the street. He has a wife, two kids, a golden retriever. At night, he sneaks out to a casino on the outskirts of town. He's just like me. A gambler hiding behind a perfect smile. I follow him, take photos of him snorting cocaine off a bathroom counter, kissing a woman who isn't his wife. Kael laughs when I hand them over. 'Beautiful. Now we own him.' But as I leave, I see Hayes's daughter in the hallway. She's maybe twelve. Innocent. She has no idea her father's world is about to collapse.",
        background: "casino_night",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Destroy him. Kael pays well.", nextId: "destroy_hayes", type: "bad" },
            { text: "😞 Feel sick. Try to undo the damage.", nextId: "undo_damage", type: "good" },
            { text: "📢 Leak the photos to the press yourself", nextId: "leak_photos", type: "neutral" },
            { text: "🕊️ Confess everything to Hayes and help him", nextId: "confess_hayes", type: "good" }
        ],
        nextId: "destroy_hayes"
    },
    
    "destroy_hayes": {
        id: "destroy_hayes",
        speaker: "News Anchor",
        text: "The scandal breaks. Senator Hayes resigns in disgrace. His wife files for divorce. His daughter is bullied at school. Kael gives me a bonus—$100,000 in cash. I buy a new car, expensive watches. But every time I see a little girl with pigtails, I see her face. The money feels like blood on my hands. Kael calls me his 'golden boy.' I've become the monster. And there's no turning back.",
        background: "courtroom",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Bury the guilt in more crime", nextId: "ending_monster", type: "bad" },
            { text: "🍺 Drink until I can't feel", nextId: "ending_bad_soul", type: "bad" },
            { text: "🕊️ Donate the money to addiction charities", nextId: "ending_redemption", type: "good" },
            { text: "📞 Turn myself in to the FBI", nextId: "ending_justice", type: "good" }
        ],
        nextId: "ending_monster"
    },
    
    "seek_help": {
        id: "seek_help",
        speaker: "Leo",
        text: "I walk away from Kael. The rain soaks through my jacket, mixing with tears I didn't know I had left. I find a small church, the door unlocked as if waiting for me. An old priest sits in the front pew. 'My son, you look like you've been carrying a mountain.' I collapse into the seat beside him. 'Father, I've lost everything. My family, my money, my soul.' He places a hand on my shoulder. 'Then you've come to the right place. Let's start with a cup of coffee and a story.' For the first time in years, I feel something other than despair—a tiny flicker of hope.",
        background: "church",
        sprite: "leo_sad",
        choices: [
            { text: "🙏 Confess everything", nextId: "confess_priest", type: "good" },
            { text: "💪 Ask for rehab recommendations", nextId: "rehab_search", type: "good" },
            { text: "📞 Call my daughter", nextId: "call_daughter", type: "good" },
            { text: "😞 Sit in silence and then leave", nextId: "back_to_casino", type: "bad" }
        ],
        nextId: "confess_priest"
    },
    
    "confess_priest": {
        id: "confess_priest",
        speaker: "Father Michael",
        text: "'I've heard worse, my son. Addiction is a disease, not a sin. But you must choose to heal. There's a woman named Elena who comes here every Tuesday. She lost her husband to gambling. She might understand.' He gives me a card for a Gamblers Anonymous meeting. 'Go tonight. Don't think. Just go.' I take the card, my hands still shaking. Outside, the rain has stopped. A sliver of moonlight breaks through the clouds. Maybe—just maybe—there's a way out.",
        background: "church",
        sprite: "priest",
        choices: [
            { text: "🙏 Join a support group tonight", nextId: "support_group1", type: "good" },
            { text: "💪 Check into rehab tomorrow", nextId: "rehab_intake", type: "good" },
            { text: "📝 Write apology letters to my family", nextId: "apology_letters", type: "good" },
            { text: "🕊️ Volunteer at the shelter", nextId: "volunteer", type: "good" }
        ],
        nextId: "support_group1"
    },
    
    "support_group1": {
        id: "support_group1",
        speaker: "Elena",
        text: "The meeting is in a church basement. Folding chairs in a circle, stale coffee, and broken people. I sit in the back, ready to run. Then a woman with kind eyes sits next to me. 'First time?' she asks. I nod. 'I'm Elena. My husband was a gambler. He lost our house, our savings, then his life. He drove his car into a bridge after losing everything.' She touches my hand. 'Don't let the same demons win.' When it's my turn to speak, my voice cracks. 'I'm Leo. I'm a compulsive gambler.' The shame doesn't crush me. It lifts.",
        background: "support_group",
        sprite: "maria",
        choices: [
            { text: "🕊️ Commit to 90 meetings in 90 days", nextId: "ninety_days", type: "good" },
            { text: "💪 Ask Elena to be your sponsor", nextId: "elena_sponsor", type: "good" },
            { text: "📞 Call my daughter and apologize", nextId: "call_daughter2", type: "good" },
            { text: "🏃 Leave halfway through—it's too much", nextId: "back_to_casino", type: "bad" }
        ],
        nextId: "ninety_days"
    },
    
    "ninety_days": {
        id: "ninety_days",
        speaker: "Leo",
        text: "Ninety days. No gambling. No Kael. No late nights in casinos. Elena calls me every morning. Frank, an old-timer with 20 years clean, becomes my sponsor. I get a job at a diner—minimum wage, grease burns on my arms, but honest work. On day 87, Kael finds me. 'You think you can hide?' he snarls. 'You owe me.' Elena steps between us. 'He owes you nothing. Leave him alone or I call the police.' Kael laughs, but he leaves. That night, I hold Elena's hand. 'Thank you,' I whisper. She squeezes back. 'You saved yourself. I just pointed the way.'",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "❤️ Ask Elena to be more than a friend", nextId: "romance", type: "good" },
            { text: "💪 Focus on recovery alone", nextId: "alone_recovery", type: "good" },
            { text: "📢 Speak at other meetings to help others", nextId: "speaker_path", type: "good" },
            { text: "😞 Relapse under pressure", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "romance"
    },
    
    "romance": {
        id: "romance",
        speaker: "Elena",
        text: "'Leo, I've been hurt before. I can't be your reason for staying clean. You have to do it for yourself.' I nod, understanding. 'But,' she adds, 'I can be your friend. And maybe someday, when you're strong enough... we can see where this goes.' It's not the answer I wanted, but it's the one I needed. For the first time, I have something to look forward to that isn't a roulette wheel. I hug her goodbye, then walk to my next meeting. The sun is rising. So am I.",
        background: "small_town",
        sprite: "maria",
        choices: [
            { text: "🕊️ Keep working on yourself, one day at a time", nextId: "ending_redemption", type: "good" },
            { text: "💪 Start a recovery blog to help others", nextId: "ending_inspire", type: "good" },
            { text: "📖 Write a memoir about your journey", nextId: "ending_author", type: "good" },
            { text: "😞 Push her away and relapse", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "ending_redemption"
    },
    
    "call_daughter": {
        id: "call_daughter",
        speaker: "Sarah (Daughter)",
        text: "The phone rings three times. I almost hang up. Then her voice: 'Dad?' It's fragile, like thin ice. 'I'm in recovery, Sarah. I'm trying to be better.' Silence. Then crying. 'I've wanted to hear that for two years.' We talk for an hour. She tells me about school, her new puppy, how she still has the teddy bear I gave her when she was five. 'Can I visit you?' she asks. My throat closes. 'I'd like that, sweetheart. I'd like that very much.'",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🤝 Invite her to visit next weekend", nextId: "daughter_visit", type: "good" },
            { text: "💪 Promise to call every day", nextId: "daily_calls", type: "good" },
            { text: "😞 Tell her you're not ready yet", nextId: "back_to_casino", type: "bad" }
        ],
        nextId: "daughter_visit"
    },
    
    "call_daughter2": {
        id: "call_daughter2",
        speaker: "Sarah (Daughter)",
        text: "The phone rings three times. I almost hang up. Then her voice: 'Dad?' It's fragile, like thin ice. 'I'm in recovery, Sarah. I'm trying to be better.' Silence. Then crying. 'I've wanted to hear that for two years.' We talk for an hour. She tells me about school, her new puppy, how she still has the teddy bear I gave her when she was five. 'Can I visit you?' she asks. My throat closes. 'I'd like that, sweetheart. I'd like that very much.'",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🤝 Invite her to visit next weekend", nextId: "daughter_visit", type: "good" },
            { text: "💪 Promise to call every day", nextId: "daily_calls", type: "good" },
            { text: "😞 Tell her you're not ready yet", nextId: "back_to_casino", type: "bad" }
        ],
        nextId: "daughter_visit"
    },
    
    "daughter_visit": {
        id: "daughter_visit",
        speaker: "Sarah",
        text: "She shows up with a bouquet of sunflowers. 'Mom said I shouldn't come. She said you'd disappoint me again.' I hug her, and she doesn't pull away. 'I won't,' I whisper. 'I promise.' We spend the day at the park. I push her on the swings like I used to. For a few hours, I forget about Kael, about the debts, about the casino. I'm just a dad. And maybe that's enough.",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🕊️ Make amends with your ex-wife too", nextId: "amends_ex", type: "good" },
            { text: "💪 Keep focusing on recovery for her", nextId: "ending_family", type: "good" },
            { text: "📢 Share your story at her school", nextId: "ending_inspire", type: "good" }
        ],
        nextId: "ending_family"
    },
    
    // Fallback nodes
    "collect_hesitate": { id: "collect_hesitate", speaker: "Leo", text: "I hesitated, but Kael's men forced me. I did the job. The guilt never left.", background: "dark_alley", sprite: "leo_sad", choices: [{ text: "Continue", nextId: "celebrate", type: "neutral" }], nextId: "celebrate" },
    "collect_ask": { id: "collect_ask", speaker: "Leo", text: "I asked too many questions. Kael got suspicious. He gave me one more chance.", background: "kael_office", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "collect_cruel", type: "neutral" }], nextId: "collect_cruel" },
    "refuse_kael": { id: "refuse_kael", speaker: "Kael", text: "'No one refuses me. You'll regret this.' His men grabbed me.", background: "kael_office", sprite: "kael_evil", choices: [{ text: "Continue", nextId: "ending_bad_soul", type: "bad" }], nextId: "ending_bad_soul" },
    "question_kael": { id: "question_kael", speaker: "Leo", text: "'What's the catch?' Kael smiled. 'Everything has a price.'", background: "kael_office", sprite: "kael", choices: [{ text: "💰 Accept the deal", nextId: "accept_kael", type: "bad" }, { text: "🙏 Walk away", nextId: "seek_help", type: "good" }], nextId: "accept_kael" },
    "who_are_you": { id: "who_are_you", speaker: "Kael", text: "'I'm the man who owns this city's underworld.'", background: "kael_office", sprite: "kael", choices: [{ text: "Accept", nextId: "accept_kael", type: "bad" }, { text: "Walk away", nextId: "seek_help", type: "good" }], nextId: "accept_kael" },
    "warn_hayes": { id: "warn_hayes", speaker: "Leo", text: "I warned Hayes. He tried to run. Kael found out. I became a target.", background: "dark_alley", sprite: "leo_angry", choices: [{ text: "Continue", nextId: "ending_martyr", type: "neutral" }], nextId: "ending_martyr" },
    "walk_away_kael": { id: "walk_away_kael", speaker: "Leo", text: "I walked away. But Kael never forgets. He sent his men after me.", background: "dark_alley", sprite: "leo_angry", choices: [{ text: "Continue", nextId: "ending_runaway", type: "neutral" }], nextId: "ending_runaway" },
    "donate_guilt": { id: "donate_guilt", speaker: "Leo", text: "I donated the money. It didn't erase the guilt, but it was a start.", background: "church", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "seek_help", type: "good" }], nextId: "seek_help" },
    "drink_away": { id: "drink_away", speaker: "Leo", text: "I drowned the guilt in whiskey. But the nightmares never stopped.", background: "casino_night", sprite: "leo_sad", choices: [{ text: "Continue", nextId: "ending_bad_soul", type: "bad" }], nextId: "ending_bad_soul" },
    "back_to_casino": { id: "back_to_casino", speaker: "Leo", text: "I went back to the casino. The lights called me home.", background: "casino_night", sprite: "leo_sad", choices: [{ text: "Continue", nextId: "ending_relapse", type: "bad" }], nextId: "ending_relapse" },
    "rehab_search": { id: "rehab_search", speaker: "Leo", text: "I found a rehab center. It was the hardest decision of my life.", background: "hospital_room", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "support_group1", type: "good" }], nextId: "support_group1" },
    "rehab_intake": { id: "rehab_intake", speaker: "Leo", text: "I checked into rehab. Thirty days of hell. But I survived.", background: "hospital_room", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "support_group1", type: "good" }], nextId: "support_group1" },
    "apology_letters": { id: "apology_letters", speaker: "Leo", text: "I wrote letters to everyone I'd hurt. It was painful. Necessary.", background: "church", sprite: "leo_sad", choices: [{ text: "Continue", nextId: "support_group1", type: "good" }], nextId: "support_group1" },
    "volunteer": { id: "volunteer", speaker: "Leo", text: "I volunteered at the shelter. Helping others helped me heal.", background: "church", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "support_group1", type: "good" }], nextId: "support_group1" },
    "elena_sponsor": { id: "elena_sponsor", speaker: "Elena", text: "I agreed to be your sponsor. But you have to do the work.", background: "support_group", sprite: "maria", choices: [{ text: "Continue", nextId: "ninety_days", type: "good" }], nextId: "ninety_days" },
    "alone_recovery": { id: "alone_recovery", speaker: "Leo", text: "I focused on myself. It was lonely. But I stayed clean.", background: "small_town", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "ending_redemption", type: "good" }], nextId: "ending_redemption" },
    "speaker_path": { id: "speaker_path", speaker: "Leo", text: "I started speaking at meetings. Sharing my story saved others.", background: "support_group", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "ending_inspire", type: "good" }], nextId: "ending_inspire" },
    "daily_calls": { id: "daily_calls", speaker: "Leo", text: "I called Sarah every day. Slowly, she started to trust me again.", background: "small_town", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "ending_family", type: "good" }], nextId: "ending_family" },
    "amends_ex": { id: "amends_ex", speaker: "Leo", text: "I made amends with my ex-wife. She didn't forgive me. But she listened.", background: "small_town", sprite: "leo_sad", choices: [{ text: "Continue", nextId: "ending_family", type: "good" }], nextId: "ending_family" },
    "undo_damage": { id: "undo_damage", speaker: "Leo", text: "I tried to undo the damage. Some things can't be undone.", background: "dark_alley", sprite: "leo_sad", choices: [{ text: "Continue", nextId: "ending_justice", type: "good" }], nextId: "ending_justice" },
    "leak_photos": { id: "leak_photos", speaker: "Leo", text: "I leaked the photos. The scandal imploded. I became a target.", background: "courtroom", sprite: "leo_angry", choices: [{ text: "Continue", nextId: "ending_martyr", type: "neutral" }], nextId: "ending_martyr" },
    "confess_hayes": { id: "confess_hayes", speaker: "Leo", text: "I confessed to Hayes. He helped me take down Kael from the inside.", background: "evidence_rome", sprite: "leo_neutral", choices: [{ text: "Continue", nextId: "ending_justice", type: "good" }], nextId: "ending_justice" },
    "demand_money": { id: "demand_money", speaker: "Kael", text: "'You dare demand more?' He laughed. 'You're brave. I'll give you double.'", background: "luxury_office", sprite: "kael", choices: [{ text: "Continue", nextId: "politician_bad", type: "bad" }], nextId: "politician_bad" },
    
    // ========== ENDINGS ==========
    "ending_redemption": {
        id: "ending_redemption",
        speaker: "Leo (Years Later)",
        text: "I stand at the podium, looking out at a room full of strangers. 'My name is Leo, and I'm a recovering gambler.' They applaud. Elena sits in the front row, holding my hand. Sarah is next to her, now a teenager, beaming. I've been clean for five years. I run a recovery center that has helped over a thousand addicts. Kael is in prison—thanks to the evidence I helped gather. The casino lights no longer call to me. Instead, I see the light in people's eyes when they take their first step toward healing. The gambler died that night in the church. What rose from the ashes was a man who finally understands: the biggest win isn't money. It's forgiveness.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "🌟 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_justice": {
        id: "ending_justice",
        speaker: "News Anchor",
        text: "In a historic trial, Kael is convicted on 47 counts, including racketeering, bribery, and three murders. Leo Marino, once a broke gambler, is hailed as a hero. He testifies for three days, his voice steady, his eyes clear. After the verdict, he visits Victor's daughter in the hospital—her surgery was paid for by an anonymous donor. She doesn't know it was Leo. He prefers it that way. 'I didn't do it for fame,' he tells a reporter. 'I did it because some debts can't be paid with money. Only with truth.' He opens a chain of recovery centers called 'The Second Deal.' His daughter visits every weekend.",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "⚖️ Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_monster": {
        id: "ending_monster",
        speaker: "Kael (Narrating)",
        text: "Leo sits in my chair now. The chair I built on bones and broken dreams. He's worse than I ever was. Last week, he ordered a hit on a rival. The week before, he ruined a family for fun. The gambler who had nothing now has everything—and it's still not enough. I watch from my prison cell, almost proud. Almost. Because I know the truth: the house always wins. And Leo? He's the house now. But houses crumble. And when his does, I'll be here, smiling.",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "💀 Play again", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_family": {
        id: "ending_family",
        speaker: "Sarah",
        text: "Dad walks me down the aisle. Not for my wedding—for his five-year sobriety chip ceremony. 'I'm proud of you,' I whisper. He cries. I've only seen him cry twice before: the day Mom left, and today. After the ceremony, we go to the diner where he used to work. He owns it now. 'Family recipe,' he says, sliding a plate of pancakes toward me. 'No gambling, no lies, just batter and butter.' I take a bite. It tastes like forgiveness.",
        background: "small_town",
        sprite: "daughter",
        choices: [{ text: "🏠 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_inspire": {
        id: "ending_inspire",
        speaker: "Leo (TED Talk)",
        text: "The applause is deafening. I stand in the spotlight, holding my five-year chip. 'My name is Leo, and I'm a gambler. Not anymore. But the urge never goes away. Every day, I choose not to place a bet. Every day, I choose my daughter. My friends. My life. If you're out there, drowning in debt or shame, know this: the only bet that matters is the one you place on yourself.' The video goes viral. Fifty million views. My phone doesn't stop ringing. I don't answer. I have a meeting in an hour. There's a man there who lost his house today. He needs to hear that it's not the end. It's just the beginning.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📢 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_bad_soul": {
        id: "ending_bad_soul",
        speaker: "Narrator",
        text: "The paramedics find him in the bathroom of the Bellagio. Needle still in his arm. Slot machine blinking 'JACKPOT' in the next room. His daughter's last text, unread: 'Dad, please call me.' No one comes to claim the body. The casino sweeps it under the rug. The next day, someone else sits at his favorite machine. The wheel spins. The house always wins.",
        background: "casino_empty",
        sprite: "leo_sad",
        choices: [{ text: "💀 Play again", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_relapse": {
        id: "ending_relapse",
        speaker: "Narrator",
        text: "Leo relapsed on day 103. He lost his job, his apartment, his daughter's trust. Elena stopped answering his calls. Now he sleeps in his car behind the casino. Sometimes he goes inside, just to feel the lights on his face. He knows he'll die here. He just doesn't care anymore.",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [{ text: "🔁 Play again", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_author": {
        id: "ending_author",
        speaker: "Leo",
        text: "My memoir 'All In' becomes a #1 bestseller. Every chapter saves a life. Every word is a prayer for the lost. I donate all proceeds to addiction recovery. My daughter introduces me at book signings. 'This is my dad,' she says. 'He's a hero.'",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📖 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I changed my name. Started over in a quiet town. The past haunts my dreams, but I survive. Alone. It's not victory. But it's peace.",
        background: "small_town",
        sprite: "leo_sad",
        choices: [{ text: "🌅 Play again", nextId: "start", type: "neutral" }],
        nextId: "start"
    },
    
    "ending_martyr": {
        id: "ending_martyr",
        speaker: "News Anchor",
        text: "Leo died taking down Kael. His evidence convicted 30 criminals. He's buried as a hero. His daughter places sunflowers on his grave every Sunday.",
        background: "courtroom",
        sprite: "leo_angry",
        choices: [{ text: "🕯️ Play again", nextId: "start", type: "neutral" }],
        nextId: "start"
    }
};

// ========== GAME ENGINE ==========
let currentNodeId = "start";
let waitingForChoice = false;

const bgImage = document.getElementById("bgImage");
const portraitImage = document.getElementById("portraitImage");
const speakerDiv = document.getElementById("speakerName");
const messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const charNameTag = document.getElementById("charNameTag");

function getImagePath(type, key) {
    if (type === 'bg') {
        return IMAGE_PATHS.backgrounds[key] || IMAGE_PATHS.backgrounds.default;
    } else {
        return IMAGE_PATHS.characters[key] || IMAGE_PATHS.characters.default;
    }
}

function renderVisuals(node) {
    const bgPath = getImagePath('bg', node.background);
    bgImage.src = bgPath;
    bgImage.alt = node.background;
    
    const portraitPath = getImagePath('char', node.sprite);
    portraitImage.src = portraitPath;
    portraitImage.alt = node.sprite;
    
    const nameMap = {
        "leo_sad": "LEO (Broken)", "leo_angry": "LEO (Raging)", "leo_neutral": "LEO",
        "leo_evil": "LEO (Corrupted)", "kael": "MR. KAEL", "kael_evil": "KAEL (Enraged)",
        "maria": "ELENA", "priest": "FATHER MICHAEL", "debtor": "VICTOR ROSS",
        "politician": "SENATOR HAYES", "agent": "AGENT WILLIAMS", "daughter": "SARAH"
    };
    charNameTag.innerText = nameMap[node.sprite] || node.sprite?.toUpperCase() || "???";
}

function renderChoices(choices) {
    choicesDiv.innerHTML = "";
    if (!choices || choices.length === 0) {
        choicesDiv.classList.add("hidden");
        return;
    }
    choicesDiv.classList.remove("hidden");
    choices.forEach(ch => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        let badge = "";
        if (ch.type === "good") badge = "<span class='choice-badge badge-good'>✨ GOOD</span>";
        else if (ch.type === "bad") badge = "<span class='choice-badge badge-bad'>💀 BAD</span>";
        else if (ch.type === "neutral") badge = "<span class='choice-badge badge-neutral'>⚖️ NEUTRAL</span>";
        btn.innerHTML = ch.text + " " + badge;
        btn.onclick = () => { if (waitingForChoice) goToNode(ch.nextId); };
        choicesDiv.appendChild(btn);
    });
}

function displayNode(node) {
    renderVisuals(node);
    speakerDiv.innerText = node.speaker;
    messageDiv.innerText = node.text;
    
    messageDiv.classList.remove("fade-text");
    void messageDiv.offsetWidth;
    messageDiv.classList.add("fade-text");
    
    if (node.choices && node.choices.length) {
        waitingForChoice = true;
        renderChoices(node.choices);
    } else {
        waitingForChoice = false;
        renderChoices([]);
    }
}

function goToNode(id) {
    if (gameData[id]) {
        currentNodeId = id;
        displayNode(gameData[currentNodeId]);
    } else {
        console.warn("Missing node:", id);
        goToNode("start");
    }
}

function nextStep() {
    if (!waitingForChoice) {
        const node = gameData[currentNodeId];
        if (node && node.nextId) goToNode(node.nextId);
        else goToNode("start");
    }
}

function resetGame() {
    goToNode("start");
}

nextBtn.onclick = nextStep;
resetBtn.onclick = resetGame;

goToNode("start");