// ============================================================
// ALL IN - Gambling vs Businessman
// COMPLETE EDITION: Main Menu + Full Extended Story
// ============================================================

// ========== IMAGE PATHS (Your exact file names) ==========
const IMAGE_PATHS = {
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

// ========== FULL GAME DATA (Extended - 80+ nodes) ==========
const gameData = {
    // ========== ACT 1: THE FALL ==========
    "start": {
        id: "start",
        speaker: "Leo",
        text: "The casino lights flicker like dying stars, casting blood-red shadows across the velvet carpet. I've lost everything tonight. Not just money—my wife's tear-streaked face as she walked out, my daughter's voice cracking on the phone: 'Daddy, why don't you love us anymore?' Fifty thousand dollars gone in three hours. The whiskey burns my throat, but it can't drown the screams in my head. Then a shadow falls over my table. A man in an impeccable black suit, silver cufflinks gleaming. His eyes are like frozen mercury. 'Leo Marino,' he says, sliding into the seat across from me. 'I've been watching you. You're not a gambler. You're a man who's forgotten how to win. I can remind you.'",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "💀 'I don't care anymore. Tell me the deal.' (Bad Path)", nextId: "bad_accept_deal", type: "bad" },
            { text: "💰 'How much are we talking?' (Greedy Path)", nextId: "greedy_question", type: "neutral" },
            { text: "❓ 'Why me? I'm nobody.' (Curious Path)", nextId: "curious_question", type: "neutral" },
            { text: "🙏 'I need help, not another demon.' (Good Path)", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_accept_deal"
    },

    // ========== BAD PATH: ACCEPTING KAEL ==========
    "bad_accept_deal": {
        id: "bad_accept_deal",
        speaker: "Kael",
        text: "'Welcome to my world, Leo. First rule: loyalty above all. Second: never gamble with my money. Third...' He slides a gun across the table. 'Your first test is tonight. A man named Victor Ross owes me two hundred thousand. He's hiding in a rundown apartment on Fifth. Make him pay. Not with words—with presence. Show him what happens when someone steals from me. Do this, and your debt disappears. You'll have a place at my table. Refuse...' He leaves the threat hanging in the air like a guillotine blade. 'What's your answer, Marino?'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🔫 'I'll do it. I have nothing left to lose.'", nextId: "bad_collect_1", type: "bad" },
            { text: "😰 'What if he doesn't pay?'", nextId: "bad_hesitate", type: "bad" },
            { text: "❓ 'Tell me more about Victor first.'", nextId: "bad_ask_about_victor", type: "neutral" },
            { text: "🙅 'I can't hurt people. Find someone else.'", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_collect_1"
    },

    "greedy_question": {
        id: "greedy_question",
        speaker: "Leo",
        text: "'How much are we talking?' Kael smiles. 'More than you've ever seen. Enough to buy your soul. Enough to forget every bad bet you ever made. But money comes with strings, Leo. Blood strings.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💀 'I'm in.'", nextId: "bad_accept_deal", type: "bad" },
            { text: "🙏 'I can't do this.'", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_accept_deal"
    },

    "curious_question": {
        id: "curious_question",
        speaker: "Leo",
        text: "'Why me? I'm nobody. A washed-up gambler with empty pockets.' Kael leans closer. 'Because nobodies have nothing to lose. And nothing to lose means everything to gain. You're perfect, Leo. Perfect for the dirty work.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💀 'Tell me the job.'", nextId: "bad_accept_deal", type: "bad" },
            { text: "🙏 'I want out.'", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_accept_deal"
    },

    "bad_hesitate": {
        id: "bad_hesitate",
        speaker: "Kael",
        text: "'Hesitation is weakness, Leo. I thought you were different. But fine—I'll give you one more chance. Take the gun. Go to the address. Don't come back empty-handed.' His eyes bore into me like drills. I take the gun. It's cold. Heavy. The weight of what I'm about to do presses down on my chest. But I need the money. I need to forget. I need... something. Anything.",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🔫 Go to Victor's apartment", nextId: "bad_collect_1", type: "bad" },
            { text: "🙏 Break down and refuse", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_collect_1"
    },

    "bad_ask_about_victor": {
        id: "bad_ask_about_victor",
        speaker: "Kael",
        text: "'Victor Ross was my accountant. He stole from me to pay for his daughter's medical bills. Noble? Perhaps. But theft is theft. He knew the consequences. Now he hides like a rat. Find him. Bring me what he owes—or bring me his signature on a confession. I don't care which.' Kael lights a cigarette. The smoke curls around his face like a ghost. 'The clock is ticking, Leo. Don't make me wait.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "🔫 Go collect the debt", nextId: "bad_collect_1", type: "bad" },
            { text: "🕵️ Investigate Victor first", nextId: "bad_investigate_victor", type: "neutral" }
        ],
        nextId: "bad_collect_1"
    },

    "bad_investigate_victor": {
        id: "bad_investigate_victor",
        speaker: "Leo",
        text: "I do some digging. Victor Ross isn't just an accountant—he kept copies of everything. Every dirty transaction, every bribe, every deal Kael ever made. He has a safety deposit box full of evidence. If I can get to it before Kael does, I might have leverage. But Victor is scared. He won't talk to me unless I prove I'm not working for Kael. This is getting complicated. Dangerous. But maybe... maybe there's another way out.",
        background: "evidence_rome",
        sprite: "leo_neutral",
        choices: [
            { text: "🔫 Go collect the debt anyway", nextId: "bad_collect_1", type: "bad" },
            { text: "🕵️ Contact the FBI", nextId: "good_fbi_contact", type: "good" }
        ],
        nextId: "bad_collect_1"
    },

    "bad_collect_1": {
        id: "bad_collect_1",
        speaker: "Leo",
        text: "The apartment building smells of mildew and cheap beer. I climb three flights of stairs, the gun heavy in my jacket pocket. Room 4B. I knock. A man's voice, trembling: 'Who is it?' 'Open up, Victor. Kael sent me.' Silence. Then the sound of a chain sliding. The door cracks open. Victor Ross is a broken man—gray stubble, trembling hands, dark circles under his eyes. On the wall behind him, a photo of a little girl with pigtails. His daughter. 'Please,' he whispers, 'she needs surgery. I took the money for her.'",
        background: "dark_alley",
        sprite: "debtor",
        choices: [
            { text: "💀 Threaten to hurt his family", nextId: "bad_threaten_family", type: "bad" },
            { text: "🔪 Beat him brutally", nextId: "bad_beat_him", type: "bad" },
            { text: "📝 Offer a payment plan", nextId: "bad_payment_plan", type: "neutral" },
            { text: "🕊️ Let him go", nextId: "bad_let_go", type: "good" }
        ],
        nextId: "bad_threaten_family"
    },

    "bad_threaten_family": {
        id: "bad_threaten_family",
        speaker: "Leo",
        text: "'I don't care about your daughter. Pay up or I'll make her an orphan.' The words come out cold, robotic. Inside, something cracks. Victor's face crumbles. He falls to his knees, sobbing. 'Please... please...' He signs over everything—his savings, his car, his dignity. I take the papers and leave. On the stairs, I pause. My hands are shaking. I look at them. Whose hands are these?",
        background: "dark_alley",
        sprite: "leo_evil",
        choices: [
            { text: "💰 Celebrate with Kael", nextId: "bad_celebrate", type: "bad" },
            { text: "😞 Drink away the guilt", nextId: "bad_drink", type: "bad" },
            { text: "🕊️ Send his daughter money anonymously", nextId: "bad_donate", type: "good" },
            { text: "📞 Call a crisis hotline", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_celebrate"
    },

    "bad_beat_him": {
        id: "bad_beat_him",
        speaker: "Leo",
        text: "I grab Victor by the collar and slam his head against the wall. Blood drips onto the photo of his daughter. He screams. I hit him again. And again. When I stop, he's curled up on the floor, whimpering. He signs everything. As I walk out, I hear him crying. I tell myself he deserves it. But that night, I can't sleep. The crying echoes in my skull like a broken song.",
        background: "dark_alley",
        sprite: "leo_evil",
        choices: [
            { text: "💰 Take the money and run", nextId: "bad_celebrate", type: "bad" },
            { text: "😞 Confess to a priest", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_celebrate"
    },

    "bad_payment_plan": {
        id: "bad_payment_plan",
        speaker: "Victor",
        text: "'A payment plan? You're... you're not like the others.' He wipes blood from his lip. 'I can pay five hundred a month. It's all I have. Please. My daughter—she's only eight. She doesn't understand why Daddy is always scared.' I nod. Kael will be furious. But I don't care anymore. Some lines shouldn't be crossed. 'Get her the surgery,' I say. 'I'll cover the rest.' Victor stares at me like I've grown wings.",
        background: "dark_alley",
        sprite: "debtor",
        choices: [
            { text: "📝 Accept the payment plan", nextId: "bad_kael_angry", type: "good" },
            { text: "💀 'No deals. Pay now or else.'", nextId: "bad_threaten_family", type: "bad" },
            { text: "🕊️ Forgive the debt entirely", nextId: "bad_forgive_debt", type: "good" }
        ],
        nextId: "bad_kael_angry"
    },

    "bad_forgive_debt": {
        id: "bad_forgive_debt",
        speaker: "Leo",
        text: "'Keep the money, Victor. Use it for your daughter.' He stares at me, tears streaming down his face. 'Why?' he whispers. 'Because someone should,' I say. I tear up the papers and walk out. Kael will kill me for this. But as I step into the cold night air, I feel something I haven't felt in years: pride. Small. Fragile. But real.",
        background: "dark_alley",
        sprite: "leo_neutral",
        choices: [
            { text: "🙏 Go to church", nextId: "good_walk_away", type: "good" },
            { text: "💀 Face Kael's wrath", nextId: "bad_face_kael", type: "bad" }
        ],
        nextId: "good_walk_away"
    },

    "bad_let_go": {
        id: "bad_let_go",
        speaker: "Leo",
        text: "I open the back window. 'Run. Take your daughter and leave the city tonight. Don't look back.' Victor grabs a small bag, clutches his daughter's photo, and disappears into the fire escape. I watch him go. Kael will find out. He always does. But in this moment, I don't care. I helped someone. Maybe I'm not completely lost yet.",
        background: "dark_alley",
        sprite: "leo_neutral",
        choices: [
            { text: "🏃 Run away yourself", nextId: "good_walk_away", type: "good" },
            { text: "💀 Lie to Kael", nextId: "bad_lie_to_kael", type: "bad" }
        ],
        nextId: "good_walk_away"
    },

    "bad_lie_to_kael": {
        id: "bad_lie_to_kael",
        speaker: "Kael",
        text: "'Victor paid?' he asks, drumming his fingers on the desk. I nod. 'Everything.' He stares at me for a long moment. 'You're lying.' His voice is ice. 'I know everything, Leo. I know you let him go. I know you've gone soft.' He stands up, walks around the desk. 'You disappoint me. But I'm not done with you yet. You'll get another chance. And if you fail again...' He doesn't finish the sentence. He doesn't have to.",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "💀 Accept the next job", nextId: "bad_politician_start", type: "bad" },
            { text: "🙏 Run away that night", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_politician_start"
    },

    "bad_celebrate": {
        id: "bad_celebrate",
        speaker: "Kael",
        text: "'Impressive, Leo. You're crueler than I expected. Here's $20,000. Your next target is bigger.' He hands me a file. A politician's face stares back—Senator Hayes. 'He's been skimming from my construction funds. I need leverage. Photos. Secrets. His family is his weakness. Find it.' He pushes a glass of whiskey toward me. 'Drink. Celebrate. You've earned it.' The whiskey burns. The money feels good. But somewhere deep inside, a small voice whispers: You're becoming the monster you always feared.",
        background: "luxury_office",
        sprite: "kael_evil",
        choices: [
            { text: "📸 Take the job", nextId: "bad_politician_start", type: "bad" },
            { text: "🕵️ Pretend to accept, gather evidence", nextId: "good_fbi_contact", type: "good" },
            { text: "🙅 Refuse and walk away", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_politician_start"
    },

    "bad_drink": {
        id: "bad_drink",
        speaker: "Leo",
        text: "I drink until the world blurs. The guilt fades, replaced by numbness. But when I wake up, Victor's face is still there. His sobs echo in my hangover. I pour another glass. Then another. The bottle is empty by noon. Kael calls. 'Get your act together. I have another job.' I stumble to my feet. Maybe if I keep moving, I'll forget. Maybe if I keep drinking, the ghosts will leave me alone.",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "💀 Accept the next job", nextId: "bad_politician_start", type: "bad" },
            { text: "🙏 Call a rehab center", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_politician_start"
    },

    "bad_donate": {
        id: "bad_donate",
        speaker: "Leo",
        text: "I find the hospital where Victor's daughter is being treated. I pay for her surgery—anonymously. The nurse asks for a name. 'Just say it's a friend,' I tell her. I watch from across the street as Victor gets the news. He falls to his knees, crying. But this time, they're tears of joy. I did that. I did something good. But Kael can never know.",
        background: "hospital_room",
        sprite: "leo_neutral",
        choices: [
            { text: "💀 Keep working for Kael", nextId: "bad_politician_start", type: "bad" },
            { text: "🙏 Quit and get help", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "bad_politician_start"
    },

    "bad_kael_angry": {
        id: "bad_kael_angry",
        speaker: "Kael",
        text: "His office is dark except for a single lamp. 'You showed mercy,' he says, his voice like ice cracking. 'Mercy is weakness. I'm giving you one more chance. There's a politician—Senator Hayes. He's been skimming from my construction funds. I need leverage. Photos. Secrets. His family is his weakness. Find it.' He throws a file at me. 'Don't fail me again, Leo. Mercy is a luxury you can't afford.'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "📸 Take the job", nextId: "bad_politician_start", type: "bad" },
            { text: "🕵️ Go to the FBI", nextId: "good_fbi_contact", type: "good" }
        ],
        nextId: "bad_politician_start"
    },

    "bad_face_kael": {
        id: "bad_face_kael",
        speaker: "Kael",
        text: "I walk into his office, ready to quit. But before I can speak, he holds up a photo. It's me, talking to Victor's daughter's doctor. 'I know what you did,' he says. 'You paid for her surgery. You thought I wouldn't find out?' He smiles. It's worse than his anger. 'Now I own you. Do the next job, or I tell Victor who really paid. He'll hate you. His daughter will hate you. Either way, you lose.'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "💀 Do the job", nextId: "bad_politician_start", type: "bad" },
            { text: "🕵️ Go to the police", nextId: "good_fbi_contact", type: "good" }
        ],
        nextId: "bad_politician_start"
    },

    "bad_politician_start": {
        id: "bad_politician_start",
        speaker: "Leo",
        text: "Senator Hayes lives in a gated community. I watch him for three days. He has a wife, two kids, a golden retriever named Buddy. At night, he sneaks out to a casino on the outskirts of town. He's just like me. A gambler hiding behind a perfect smile. I follow him inside. He plays blackjack like a man possessed. By midnight, he's lost $10,000. By 2 AM, he's at the bar, flirting with a woman who isn't his wife. I take photos. Evidence. Leverage.",
        background: "casino_night",
        sprite: "politician",
        choices: [
            { text: "📸 Take more incriminating photos", nextId: "bad_politician_2", type: "bad" },
            { text: "🤝 Confront him directly", nextId: "bad_confront_hayes", type: "neutral" },
            { text: "🕊️ Leave an anonymous warning", nextId: "bad_warn_hayes", type: "good" }
        ],
        nextId: "bad_politician_2"
    },

    "bad_politician_2": {
        id: "bad_politician_2",
        speaker: "Leo",
        text: "I follow Hayes to the bathroom. He's snorting cocaine off the counter. I snap photos. His eyes meet mine in the mirror. 'Who are you?' he whispers. 'Someone who knows your secrets,' I say. 'And someone who's willing to sell them to the highest bidder.' His face goes white. 'Kael sent you.' It's not a question. 'Tell him I'll pay. Anything. Just don't hurt my family.'",
        background: "casino_table",
        sprite: "politician",
        choices: [
            { text: "💀 Blackmail him for Kael", nextId: "bad_blackmail_hayes", type: "bad" },
            { text: "🕊️ Tell him to confess to the FBI", nextId: "good_fbi_contact", type: "good" }
        ],
        nextId: "bad_blackmail_hayes"
    },

    "bad_blackmail_hayes": {
        id: "bad_blackmail_hayes",
        speaker: "Leo",
        text: "I hand the photos to Kael. He laughs—a genuine, joyful laugh. 'Beautiful. Now we own him.' He pays me $50,000. That night, I see Hayes on the news. He's announcing his resignation, citing 'health issues.' His wife stands beside him, her face stone. His daughter isn't there. I wonder if she knows. I wonder if she'll ever forgive him. I wonder if anyone can forgive anyone after something like this.",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [
            { text: "💀 Bury the guilt with more crime", nextId: "bad_next_target", type: "bad" },
            { text: "🍺 Drink until I forget", nextId: "bad_drink_again", type: "bad" },
            { text: "🕊️ Donate the money to charity", nextId: "bad_donate_money", type: "good" }
        ],
        nextId: "bad_next_target"
    },

    "bad_next_target": {
        id: "bad_next_target",
        speaker: "Kael",
        text: "'Good work, Leo. You're a natural. Next target: a judge. He's been ruling against my interests. I need him... persuaded.' He slides another file across the desk. 'And Leo? Don't think about quitting. You're in too deep now. The only way out is through.' He's right. I'm trapped. The money is good. The power is intoxicating. But every night, I see faces. Victor. Hayes's daughter. The people I've destroyed. And every morning, I reach for the bottle.",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "💀 Accept the judge job", nextId: "ending_monster", type: "bad" },
            { text: "🕵️ Go to the FBI", nextId: "good_fbi_contact", type: "good" }
        ],
        nextId: "ending_monster"
    },

    "bad_drink_again": {
        id: "bad_drink_again",
        speaker: "Leo",
        text: "The whiskey doesn't work anymore. Neither does the vodka. I try everything. The guilt is always there, waiting. One night, I drink so much I can't stand. I wake up in a hospital. Kael is there. 'You're embarrassing me,' he says. 'Get your act together. We have work to do.' I have no choice. I go back. The cycle continues. The guilt grows. The drink doesn't help. Nothing helps.",
        background: "hospital_room",
        sprite: "leo_sad",
        choices: [
            { text: "💀 Keep working for Kael", nextId: "ending_monster", type: "bad" },
            { text: "🙏 Check into rehab", nextId: "good_walk_away", type: "good" }
        ],
        nextId: "ending_monster"
    },

    "bad_donate_money": {
        id: "bad_donate_money",
        speaker: "Leo",
        text: "I donate the money to an addiction recovery center. It doesn't erase what I've done. But it's something. A small step. That night, I dream of Victor's daughter. She's smiling. She's healthy. For a moment, I feel peace. Then I wake up. Kael is calling. There's another job. Another target. I answer the phone. 'I'm on my way.' Maybe one day I'll find the courage to say no. But not today.",
        background: "church",
        sprite: "leo_neutral",
        choices: [
            { text: "💀 Accept the next job", nextId: "ending_monster", type: "bad" },
            { text: "🙏 Confess everything", nextId: "ending_justice", type: "good" }
        ],
        nextId: "ending_monster"
    },

    "bad_warn_hayes": {
        id: "bad_warn_hayes",
        speaker: "Leo",
        text: "I leave an anonymous note on Hayes's car: 'Kael knows about the casino. Get out while you can.' The next day, Hayes resigns 'for family reasons.' He takes his family and disappears. Kael is furious. 'You cost me a valuable asset,' he growls. 'If I find out you warned him...' He doesn't finish. He doesn't have to. I'm walking on thin ice now. One wrong move, and I'm dead.",
        background: "dark_alley",
        sprite: "leo_angry",
        choices: [
            { text: "💀 Do the next job to prove loyalty", nextId: "ending_monster", type: "bad" },
            { text: "🏃 Run away that night", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "ending_monster"
    },

    "bad_confront_hayes": {
        id: "bad_confront_hayes",
        speaker: "Hayes",
        text: "'I know what you've done,' I tell him. 'The gambling. The affairs. The money you stole.' He stares at me, defeated. 'What do you want?' 'I want you to confess. To the FBI. To your family. To everyone.' He laughs bitterly. 'And if I refuse?' 'Then I destroy you.' He looks at his daughter's photo on his desk. 'Give me 24 hours,' he whispers. 'I need to say goodbye.'",
        background: "courtroom",
        sprite: "politician",
        choices: [
            { text: "⚖️ Let him confess", nextId: "good_fbi_contact", type: "good" },
            { text: "💀 Destroy him anyway", nextId: "bad_blackmail_hayes", type: "bad" }
        ],
        nextId: "good_fbi_contact"
    },

    // ========== GOOD PATH: SEEKING HELP ==========
    "good_walk_away": {
        id: "good_walk_away",
        speaker: "Leo",
        text: "I walk away from Kael. The rain soaks through my jacket, mixing with tears I didn't know I had left. I wander the streets for hours. The casino lights call to me. 'Come back,' they whisper. 'One more game. One more chance.' But I keep walking. Eventually, I find a small church. The door is unlocked, as if waiting for me. An old priest sits in the front pew. 'My son,' he says without turning around, 'you look like you've been carrying a mountain.'",
        background: "church",
        sprite: "leo_sad",
        choices: [
            { text: "🙏 Confess everything", nextId: "good_confess_priest", type: "good" },
            { text: "😞 Sit in silence", nextId: "good_silence", type: "neutral" },
            { text: "💪 Ask for rehab recommendations", nextId: "good_rehab_search", type: "good" },
            { text: "📞 Call my daughter", nextId: "good_call_daughter", type: "good" }
        ],
        nextId: "good_confess_priest"
    },

    "good_silence": {
        id: "good_silence",
        speaker: "Priest",
        text: "We sit in silence for an hour. The rain taps against the stained glass windows. Finally, the priest speaks. 'You don't have to talk, my son. But you should know—you're not alone. There are people who want to help. People who understand. There's a meeting tonight. Gamblers Anonymous. The address is on this card.' He presses a small paper into my hand. 'Go. Or don't. But know that the door is always open.'",
        background: "church",
        sprite: "priest",
        choices: [
            { text: "🙏 Go to the meeting", nextId: "good_support_group", type: "good" },
            { text: "😞 Leave and go back to the casino", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_support_group"
    },

    "good_confess_priest": {
        id: "good_confess_priest",
        speaker: "Leo",
        text: "I tell him everything. The gambling. The debt. Kael's offer. Victor. The threats. The guilt that's been eating me alive. He listens without judgment. When I'm done, he's quiet for a long time. 'I've heard worse, my son. Addiction is a disease, not a sin. But you must choose to heal. There's a woman named Elena who comes here every Tuesday. She lost her husband to gambling. She might understand. Go to the meeting tonight. Don't think. Just go.'",
        background: "church",
        sprite: "priest",
        choices: [
            { text: "🙏 Go to the meeting", nextId: "good_support_group", type: "good" },
            { text: "💪 Ask about rehab", nextId: "good_rehab_search", type: "good" }
        ],
        nextId: "good_support_group"
    },

    "good_rehab_search": {
        id: "good_rehab_search",
        speaker: "Leo",
        text: "The priest gives me a list of rehab centers. I choose one across town. It's free, run by a kind woman named Maria. 'We've all hit rock bottom,' she says when I arrive. 'The question is: will you climb back up?' I sign the intake forms. Thirty days. No phones. No visitors. Just me and my demons. For the first time, I'm not running from them. I'm facing them head-on.",
        background: "hospital_room",
        sprite: "maria",
        choices: [
            { text: "💪 Commit fully to recovery", nextId: "good_rehab_commit", type: "good" },
            { text: "😞 Leave after one day", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_rehab_commit"
    },

    "good_rehab_commit": {
        id: "good_rehab_commit",
        speaker: "Maria",
        text: "The first week is hell. Withdrawals. Nightmares. I sweat through my sheets every night. I scream in my sleep. The counselors don't give up on me. 'You're worth saving,' they say. I don't believe them. But I keep coming back. Week two is easier. I start to sleep through the night. Week three, I have my first dream that isn't about gambling. Week four, I wake up and realize I didn't think about cards or dice once. Maybe—just maybe—I can do this.",
        background: "hospital_room",
        sprite: "maria",
        choices: [
            { text: "💪 Complete the program", nextId: "good_rehab_complete", type: "good" },
            { text: "😞 Relapse on day 28", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_rehab_complete"
    },

    "good_rehab_complete": {
        id: "good_rehab_complete",
        speaker: "Maria",
        text: "'Congratulations, Leo. You're one of our success stories.' She hands me a certificate. Thirty days clean. It doesn't feel like much. But it's a start. 'There's a meeting tonight,' she says. 'Gamblers Anonymous. You should go. You'll need support to stay clean.' I take the address. For the first time in years, I feel something other than despair. A tiny flicker of hope.",
        background: "hospital_room",
        sprite: "maria",
        choices: [
            { text: "🙏 Go to the meeting", nextId: "good_support_group", type: "good" },
            { text: "💪 Go home alone", nextId: "good_alone", type: "neutral" }
        ],
        nextId: "good_support_group"
    },

    "good_call_daughter": {
        id: "good_call_daughter",
        speaker: "Leo",
        text: "I dial her number before I can talk myself out of it. It rings three times. I almost hang up. Then her voice: 'Dad?' It's fragile, like thin ice. 'I'm in recovery, Sarah. I'm trying to be better.' Silence. Then crying. 'I've wanted to hear that for two years.' We talk for an hour. She tells me about school, her new puppy, how she still has the teddy bear I gave her when she was five. 'Can I visit you?' she asks. My throat closes. 'I'd like that, sweetheart. I'd like that very much.'",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🤝 Invite her to visit", nextId: "good_daughter_visit", type: "good" },
            { text: "💪 Focus on recovery first", nextId: "good_focus_recovery", type: "good" }
        ],
        nextId: "good_daughter_visit"
    },

    "good_daughter_visit": {
        id: "good_daughter_visit",
        speaker: "Sarah",
        text: "She shows up with a bouquet of sunflowers. 'Mom said I shouldn't come. She said you'd disappoint me again.' I hug her, and she doesn't pull away. 'I won't,' I whisper. 'I promise.' We spend the day at the park. I push her on the swings like I used to. For a few hours, I forget about Kael, about the debts, about the casino. I'm just a dad. And maybe that's enough.",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🕊️ Make amends with your ex-wife too", nextId: "good_amends_ex", type: "good" },
            { text: "💪 Keep focusing on recovery", nextId: "good_focus_recovery", type: "good" }
        ],
        nextId: "good_focus_recovery"
    },

    "good_amends_ex": {
        id: "good_amends_ex",
        speaker: "Leo's Ex-Wife",
        text: "I call her. She doesn't want to talk. 'Please,' I say. 'Just five minutes.' She listens. I tell her everything. The gambling. The lies. The shame. 'I'm sorry,' I say. 'I know it's not enough. But I'm trying to be better.' She's quiet for a long time. 'I can't forgive you yet,' she says. 'But I'm glad you're getting help. For Sarah's sake.' It's not forgiveness. But it's a start.",
        background: "small_town",
        sprite: "leo_sad",
        choices: [
            { text: "💪 Keep working on yourself", nextId: "good_focus_recovery", type: "good" },
            { text: "😞 Give up", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_focus_recovery"
    },

    "good_focus_recovery": {
        id: "good_focus_recovery",
        speaker: "Leo",
        text: "I throw myself into recovery. Meetings every day. A sponsor named Frank, an old-timer with 20 years clean. He's tough but fair. 'One day at a time,' he says. 'That's all any of us can do.' On day 87, I get a call from Elena. 'There's someone here who needs to talk to you,' she says. 'His name is Victor. He heard about your story.' Victor Ross. The man I was supposed to hurt. He wants to thank me.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [
            { text: "🕊️ Meet with Victor", nextId: "good_meet_victor", type: "good" },
            { text: "😞 Refuse out of shame", nextId: "good_refuse_victor", type: "neutral" }
        ],
        nextId: "good_meet_victor"
    },

    "good_meet_victor": {
        id: "good_meet_victor",
        speaker: "Victor",
        text: "He's older than I remember. More tired. But his eyes are clear. 'I wanted to thank you,' he says. 'For letting me go. For paying for my daughter's surgery. She's healthy now. She's going to school. She's happy.' He takes my hand. 'I don't know why you did it. But I'm grateful every day.' I don't know what to say. I don't deserve his thanks. But I take it anyway. And for the first time, I feel like maybe I'm not beyond redemption.",
        background: "church",
        sprite: "debtor",
        choices: [
            { text: "🕊️ Forgive yourself", nextId: "good_forgive_self", type: "good" },
            { text: "💪 Keep working the program", nextId: "good_forgive_self", type: "good" }
        ],
        nextId: "good_forgive_self"
    },

    "good_refuse_victor": {
        id: "good_refuse_victor",
        speaker: "Leo",
        text: "I can't face him. The shame is too great. Elena understands. 'When you're ready,' she says. 'He'll be there.' I keep going to meetings. Keep working the steps. But something is missing. I can't forgive myself. Not yet. Maybe not ever. But I keep trying. One day at a time.",
        background: "support_group",
        sprite: "leo_sad",
        choices: [
            { text: "💪 Keep trying", nextId: "good_forgive_self", type: "good" },
            { text: "😞 Give up", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_forgive_self"
    },

    "good_forgive_self": {
        id: "good_forgive_self",
        speaker: "Frank (Sponsor)",
        text: "'Forgiveness isn't about them,' Frank says. 'It's about you. You can't change the past. But you can choose the future.' He hands me my ninety-day chip. 'You've earned this. Be proud of yourself.' I hold the chip in my palm. It's small. Plastic. But it feels heavier than any stack of chips I ever held in a casino. 'One day at a time,' I say. 'One day at a time,' he replies.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [
            { text: "🕊️ Continue the journey", nextId: "ending_redemption", type: "good" },
            { text: "💪 Help others now", nextId: "ending_inspire", type: "good" }
        ],
        nextId: "ending_redemption"
    },

    "good_support_group": {
        id: "good_support_group",
        speaker: "Elena",
        text: "The meeting is in a church basement. Folding chairs in a circle, stale coffee, and broken people. I sit in the back, ready to run. Then a woman with kind eyes sits next to me. 'First time?' she asks. I nod. 'I'm Elena. My husband was a gambler. He lost our house, our savings, then his life. He drove his car into a bridge after losing everything.' She touches my hand. 'Don't let the same demons win.' When it's my turn to speak, my voice cracks. 'I'm Leo. I'm a compulsive gambler.' The shame doesn't crush me. It lifts.",
        background: "support_group",
        sprite: "maria",
        choices: [
            { text: "🕊️ Commit to 90 meetings in 90 days", nextId: "good_90_days", type: "good" },
            { text: "💪 Ask Elena to be your sponsor", nextId: "good_elena_sponsor", type: "good" },
            { text: "📞 Call my daughter", nextId: "good_call_daughter", type: "good" },
            { text: "🏃 Leave halfway through", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_90_days"
    },

    "good_90_days": {
        id: "good_90_days",
        speaker: "Leo",
        text: "Ninety days. No gambling. No Kael. No late nights in casinos. Elena calls me every morning. Frank, an old-timer with 20 years clean, becomes my sponsor. I get a job at a diner—minimum wage, grease burns on my arms, but honest work. On day 87, Kael finds me. 'You think you can hide?' he snarls. 'You owe me.' Elena steps between us. 'He owes you nothing. Leave him alone or I call the police.' Kael laughs, but he leaves. That night, I hold Elena's hand. 'Thank you,' I whisper. She squeezes back. 'You saved yourself. I just pointed the way.'",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "❤️ Ask Elena to be more than a friend", nextId: "good_romance", type: "good" },
            { text: "💪 Focus on recovery alone", nextId: "good_alone_final", type: "good" },
            { text: "📢 Speak at other meetings", nextId: "good_speaker", type: "good" }
        ],
        nextId: "good_romance"
    },

    "good_romance": {
        id: "good_romance",
        speaker: "Elena",
        text: "'Leo, I've been hurt before. I can't be your reason for staying clean. You have to do it for yourself.' I nod, understanding. 'But,' she adds, 'I can be your friend. And maybe someday, when you're strong enough... we can see where this goes.' It's not the answer I wanted, but it's the one I needed. For the first time, I have something to look forward to that isn't a roulette wheel. I hug her goodbye, then walk to my next meeting. The sun is rising. So am I.",
        background: "small_town",
        sprite: "maria",
        choices: [
            { text: "🕊️ Keep working on yourself", nextId: "ending_redemption", type: "good" },
            { text: "💪 Start a recovery blog", nextId: "ending_inspire", type: "good" }
        ],
        nextId: "ending_redemption"
    },

    "good_elena_sponsor": {
        id: "good_elena_sponsor",
        speaker: "Elena",
        text: "'I'll be your sponsor,' she says. 'But you have to do the work. No shortcuts. No excuses.' I agree. She's tough. She doesn't let me off easy. When I want to give up, she pushes harder. When I make excuses, she calls me out. She believes in me more than I believe in myself. Some days, that's the only thing keeping me going.",
        background: "support_group",
        sprite: "maria",
        choices: [
            { text: "💪 Keep going", nextId: "good_90_days", type: "good" },
            { text: "😞 Give up", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_90_days"
    },

    "good_alone_final": {
        id: "good_alone_final",
        speaker: "Leo",
        text: "I focus on myself. It's lonely. Some days, I want to call Elena. But I know I need to stand on my own. I keep going to meetings. Keep working the steps. Keep showing up for myself. One day, I realize I haven't thought about gambling in a week. A month. A year. I'm not cured. I never will be. But I'm managing. And that's enough.",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "🕊️ Accept your journey", nextId: "ending_redemption", type: "good" },
            { text: "💪 Help others now", nextId: "ending_inspire", type: "good" }
        ],
        nextId: "ending_redemption"
    },

    "good_speaker": {
        id: "good_speaker",
        speaker: "Leo",
        text: "I start speaking at meetings. Sharing my story. The good, the bad, the ugly. People listen. They cry. They thank me. 'You saved my life,' one man says. I don't feel like a hero. But if my story can help someone else, maybe it was all worth something. Maybe the pain had a purpose.",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [
            { text: "📢 Keep sharing your story", nextId: "ending_inspire", type: "good" },
            { text: "🕊️ Focus on your own recovery", nextId: "ending_redemption", type: "good" }
        ],
        nextId: "ending_inspire"
    },

    "good_alone": {
        id: "good_alone",
        speaker: "Leo",
        text: "I go home alone. It's quiet. Too quiet. The urge to gamble is a whisper in the back of my mind. 'One game,' it says. 'Just one. No one will know.' I turn on the TV. Then off. I pace. I make coffee. I call Frank. 'I'm struggling,' I admit. 'Good,' he says. 'That means you're still fighting. Keep fighting.' I stay on the phone with him until the urge passes. One day at a time.",
        background: "small_town",
        sprite: "leo_sad",
        choices: [
            { text: "💪 Keep fighting", nextId: "good_90_days", type: "good" },
            { text: "😞 Give in", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_90_days"
    },

    // ========== FBI / JUSTICE PATH ==========
    "good_fbi_contact": {
        id: "good_fbi_contact",
        speaker: "Agent Williams",
        text: "'This is huge, Leo. Kael has been on our radar for years. But we've never had someone on the inside. This evidence you brought us—it's enough to start building a case. But we need more. We need you to wear a wire. Get him on tape admitting to his crimes. It's dangerous. He's killed before. But if you do this, we can put him away for life. And we'll protect you and your family.'",
        background: "evidence_rome",
        sprite: "agent",
        choices: [
            { text: "🛡️ Accept. It's time to end this.", nextId: "good_wire_mission", type: "good" },
            { text: "😰 Refuse and enter witness protection", nextId: "ending_runaway", type: "neutral" }
        ],
        nextId: "good_wire_mission"
    },

    "good_wire_mission": {
        id: "good_wire_mission",
        speaker: "Leo",
        text: "The wire is tiny, hidden in my watch. My heart pounds as I walk into Kael's office. 'You came back,' he says, surprised. 'I want in. All the way.' He laughs. 'I knew you would.' Then he starts talking. About the murders. The bribes. The politician he owns. Every word is recorded. 'There's just one thing,' Kael says, his eyes narrowing. 'I know you're wearing a wire.' My blood runs cold. 'You think I got to the top by being stupid?' He pulls out a gun. 'Did you really think you could betray me?'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🛡️ 'FBI! Now!'", nextId: "ending_justice", type: "good" },
            { text: "🔫 Try to escape", nextId: "ending_martyr", type: "neutral" }
        ],
        nextId: "ending_justice"
    },

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

    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I changed my name. Started over in a quiet town. The past haunts my dreams, but I survive. Alone. It's not victory. But it's peace. Some days, I think about calling Sarah. But I'm afraid of what I'll hear. Afraid she won't answer. Afraid she will. So I stay quiet. Stay hidden. Stay safe.",
        background: "small_town",
        sprite: "leo_sad",
        choices: [{ text: "🌅 Play again", nextId: "start", type: "neutral" }],
        nextId: "start"
    },

    "ending_martyr": {
        id: "ending_martyr",
        speaker: "News Anchor",
        text: "Leo died taking down Kael. His evidence convicted 30 criminals. He's buried as a hero. His daughter places sunflowers on his grave every Sunday. Elena visits too. She leaves a chip—ninety days. 'You made it,' she whispers. 'You finally made it.'",
        background: "courtroom",
        sprite: "leo_angry",
        choices: [{ text: "🕯️ Play again", nextId: "start", type: "neutral" }],
        nextId: "start"
    }
};

// ========== GAME ENGINE ==========
let currentNodeId = "start";
let waitingForChoice = false;

// DOM Elements
const menuScreen = document.getElementById("menuScreen");
const gameInterface = document.getElementById("gameInterface");
const startBtn = document.getElementById("startBtn");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const creditsBtn = document.getElementById("creditsBtn");
const howToPlayModal = document.getElementById("howToPlayModal");
const creditsModal = document.getElementById("creditsModal");
const closeHowToPlay = document.getElementById("closeHowToPlay");
const closeCredits = document.getElementById("closeCredits");
const howToPlayClose = document.getElementById("howToPlayClose");
const creditsClose = document.getElementById("creditsClose");

const bgImage = document.getElementById("bgImage");
const portraitImage = document.getElementById("portraitImage");
const speakerDiv = document.getElementById("speakerName");
const messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const charNameTag = document.getElementById("charNameTag");

// ========== MENU FUNCTIONS ==========
function startGame() {
    menuScreen.classList.add("hidden");
    gameInterface.classList.remove("hidden");
    goToNode("start");
}

function showHowToPlay() {
    howToPlayModal.classList.remove("hidden");
}

function showCredits() {
    creditsModal.classList.remove("hidden");
}

function closeModals() {
    howToPlayModal.classList.add("hidden");
    creditsModal.classList.add("hidden");
}

// Event listeners for menu
if (startBtn) startBtn.addEventListener("click", startGame);
if (howToPlayBtn) howToPlayBtn.addEventListener("click", showHowToPlay);
if (creditsBtn) creditsBtn.addEventListener("click", showCredits);
if (closeHowToPlay) closeHowToPlay.addEventListener("click", closeModals);
if (closeCredits) closeCredits.addEventListener("click", closeModals);
if (howToPlayClose) howToPlayClose.addEventListener("click", closeModals);
if (creditsClose) creditsClose.addEventListener("click", closeModals);

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === howToPlayModal) closeModals();
    if (e.target === creditsModal) closeModals();
});

// ========== GAME FUNCTIONS ==========
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

if (nextBtn) nextBtn.onclick = nextStep;
if (resetBtn) resetBtn.onclick = resetGame;

// Game starts from menu - user must click Start
console.log("Game ready. Click START to begin your journey.");