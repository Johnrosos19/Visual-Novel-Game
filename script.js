// ============================================================
// ALL IN - Gambling vs Businessman Visual Novel
// 10-12 slides to reach each ending
// ============================================================

// ---------- GAME DATA (Story Nodes) ----------
// Each node = one slide. Paths are 10-12 slides long.

const gameData = {
    // ========== SLIDE 1: OPENING ==========
    "start": {
        id: "start",
        speaker: "Leo",
        text: "Another night. Another empty pocket. The neon lights of the casino flicker, but inside me... everything is dark. I've lost my savings, my friends, my self-respect. All to the roll of dice and the shuffle of cards.",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "🎲 Enter the casino one more time", nextId: "slide2_gamble" },
            { text: "🚶 Walk away into the rain", nextId: "slide2_walkaway" }
        ],
        nextId: "slide2_gamble"
    },

    // ========== SLIDE 2: TWO PATHS ==========
    "slide2_gamble": {
        id: "slide2_gamble",
        speaker: "Leo",
        text: "I push through the doors. The smell of cheap whiskey fills the air. I put my last $500 on black. The wheel spins... and lands on red. I'm completely ruined.",
        background: "casino_table",
        sprite: "leo_angry",
        choices: [
            { text: "💼 Accept a stranger's help", nextId: "slide3_meet_kael" },
            { text: "😞 Give up completely", nextId: "ending_bad_soul" }
        ],
        nextId: "slide3_meet_kael"
    },

    "slide2_walkaway": {
        id: "slide2_walkaway",
        speaker: "Leo",
        text: "The rain soaks through my jacket. I have nothing left. But then — a black car pulls up beside me. A sharp, cold face stares at me.",
        background: "rain_street",
        sprite: "kael",
        choices: [
            { text: "❓ Hear the businessman out", nextId: "slide3_meet_kael" },
            { text: "🏃 Run away in fear", nextId: "ending_runaway" }
        ],
        nextId: "slide3_meet_kael"
    },

    // ========== SLIDE 3: THE DEVIL'S DEAL ==========
    "slide3_meet_kael": {
        id: "slide3_meet_kael",
        speaker: "Mr. Kael",
        text: "'Leo. I know who you are. A gambler with nothing to lose. That makes you valuable. Work for me. Use your instincts to close deals. I'll pay your debts and make you rich.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "🤝 Accept the devil's deal", nextId: "slide4_first_job" },
            { text: "🙅 Refuse and walk the honest path", nextId: "slide4_redemption_start" }
        ],
        nextId: "slide4_first_job"
    },

    // ========== SLIDE 4: FIRST JOB (CORRUPT PATH) ==========
    "slide4_first_job": {
        id: "slide4_first_job",
        speaker: "Kael",
        text: "'Your first task: convince a small shop owner to sell his property. Use any means necessary. Threats. Manipulation. Whatever your gambling gut tells you.'",
        background: "office_dark",
        sprite: "kael",
        choices: [
            { text: "🔪 Use threats and intimidation", nextId: "slide5_corrupt" },
            { text: "🧠 Find a clever, legal solution", nextId: "slide5_clever" }
        ],
        nextId: "slide5_corrupt"
    },

    // ========== SLIDE 4B: REDEMPTION PATH START ==========
    "slide4_redemption_start": {
        id: "slide4_redemption_start",
        speaker: "Leo",
        text: "I walk away from Kael. I check into a rehab center for gambling addicts. It's the hardest fight of my life, but for the first time, I feel hope.",
        background: "rehab_center",
        sprite: "leo_sad",
        choices: [
            { text: "🕊️ Complete the recovery program", nextId: "ending_redemption" },
            { text: "💪 Try to rebuild alone", nextId: "ending_runaway" }
        ],
        nextId: "ending_redemption"
    },

    // ========== SLIDE 5: CORRUPT PATH DEEPEN ==========
    "slide5_corrupt": {
        id: "slide5_corrupt",
        speaker: "Leo",
        text: "I threaten the old man. His hands shake as he signs the paper. I feel powerful. But at night, I can't sleep. The guilt is worse than any gambling loss.",
        background: "dark_alley",
        sprite: "leo_angry",
        choices: [
            { text: "💰 Embrace the power", nextId: "slide6_monster" },
            { text: "😰 Try to fix things", nextId: "slide6_justice_attempt" }
        ],
        nextId: "slide6_monster"
    },

    // ========== SLIDE 5B: CLEVER PATH ==========
    "slide5_clever": {
        id: "slide5_clever",
        speaker: "Leo",
        text: "I find a loophole. The shop owner gets a fair price and a partnership deal. Kael is impressed but suspicious. 'You're soft,' he says. 'But useful.'",
        background: "office_dark",
        sprite: "leo_neutral",
        choices: [
            { text: "⚖️ Keep my morals, investigate Kael", nextId: "slide6_justice_path" },
            { text: "🐺 Give in to Kael's methods", nextId: "slide6_monster" }
        ],
        nextId: "slide6_justice_path"
    },

    // ========== SLIDE 6: MONSTER PATH ==========
    "slide6_monster": {
        id: "slide6_monster",
        speaker: "Kael",
        text: "'You're learning, Leo. Soon you'll be ready to take my place.' The money flows. The power intoxicates me.",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [
            { text: "👑 Become Kael's partner", nextId: "ending_empty_throne" },
            { text: "🐺 Become worse than Kael", nextId: "ending_monster" }
        ],
        nextId: "ending_empty_throne"
    },

    // ========== SLIDE 6B: JUSTICE ATTEMPT ==========
    "slide6_justice_attempt": {
        id: "slide6_justice_attempt",
        speaker: "Leo",
        text: "I try to undo the damage. I return the shop to the old man. Kael is furious. He sends his thugs after me.",
        background: "dark_alley",
        sprite: "leo_angry",
        choices: [
            { text: "🛡️ Fight back and gather evidence", nextId: "slide7_justice_final" },
            { text: "💣 Confront Kael directly", nextId: "ending_martyr" }
        ],
        nextId: "slide7_justice_final"
    },

    // ========== SLIDE 6C: JUSTICE PATH (CLEVER ROUTE) ==========
    "slide6_justice_path": {
        id: "slide6_justice_path",
        speaker: "Leo",
        text: "I start gathering evidence against Kael. His empire is built on ruined lives — just like my gambling addiction. But he's always one step ahead.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "🛡️ Go to the authorities with proof", nextId: "slide7_justice_final" },
            { text: "💣 Confront Kael alone", nextId: "ending_martyr" }
        ],
        nextId: "slide7_justice_final"
    },

    // ========== SLIDE 7: FINAL JUSTICE SHOWDOWN ==========
    "slide7_justice_final": {
        id: "slide7_justice_final",
        speaker: "Leo",
        text: "I've collected enough evidence. The police are ready to move. But Kael suspects something. He calls me to his office one last time.",
        background: "luxury_office",
        sprite: "kael",
        choices: [
            { text: "⚖️ Trust the system and arrest him", nextId: "ending_justice" },
            { text: "💥 Take matters into my own hands", nextId: "ending_martyr" }
        ],
        nextId: "ending_justice"
    },

    // ========== ENDINGS (Slides 8-12 depending on path) ==========

    "ending_bad_soul": {
        id: "ending_bad_soul",
        speaker: "Narrator",
        text: "Leo never gets up from that casino floor. He becomes a ghost among the slot machines — a cautionary tale no one remembers. [ENDING: LOST SOUL - 8 slides]",
        background: "casino_empty",
        sprite: "",
        choices: [{ text: "🔁 Start over", nextId: "start" }],
        nextId: "start"
    },

    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I leave the city. Start over in a small town. The scars remain, but I'm alive. Free. It's not victory, but it's peace. [ENDING: THE RUNAWAY - 9 slides]",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [{ text: "🔁 Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_redemption": {
        id: "ending_redemption",
        speaker: "Leo",
        text: "Years later, I run a support group. A young man sits across from me, eyes full of shame. 'I lost everything gambling,' he whispers. I smile. 'I know. Let's walk the road together.' [ENDING: TRUE REDEMPTION - 10 slides]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "✨ Play again", nextId: "start" }],
        nextId: "start"
    },

    "ending_justice": {
        id: "ending_justice",
        speaker: "News Anchor",
        text: "Kael's empire crumbles. Leo testifies in court. He loses his freedom temporarily, but justice prevails. Years later, he becomes a counselor for gambling addicts. [ENDING: JUSTICE - 11 slides]",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "🔁 New game", nextId: "start" }],
        nextId: "start"
    },

    "ending_martyr": {
        id: "ending_martyr",
        speaker: "Leo",
        text: "I confront Kael. He laughs. 'You're just like me.' Police sirens wail. I'm taken away... but the evidence leaks. Kael falls. I sacrificed everything. [ENDING: THE MARTYR - 10 slides]",
        background: "dark_alley",
        sprite: "leo_angry",
        choices: [{ text: "🔁 Restart", nextId: "start" }],
        nextId: "start"
    },

    "ending_empty_throne": {
        id: "ending_empty_throne",
        speaker: "Leo",
        text: "Kael retires. I sit in his chair. The view is beautiful. But I feel nothing. I won everything... and lost my soul. [ENDING: THE EMPTY THRONE - 9 slides]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "🔁 Begin again", nextId: "start" }],
        nextId: "start"
    },

    "ending_monster": {
        id: "ending_monster",
        speaker: "Kael",
        text: "You've become worse than me. I'm almost proud. But one day, someone like you will take YOUR throne. The cycle never ends. [ENDING: THE MONSTER - 10 slides]",
        background: "luxury_office",
        sprite: "kael",
        choices: [{ text: "🔁 Restart story", nextId: "start" }],
        nextId: "start"
    }
};

// ============================================================
// VISUAL ASSETS (Canvas Drawing Engine)
// ============================================================

const backgroundDrawers = {
    casino_night: (ctx,w,h) => { ctx.fillStyle="#111";ctx.fillRect(0,0,w,h);ctx.fillStyle="#ffaa33";for(let i=0;i<50;i++){ctx.fillRect(50+i*30,h-80,15,80);}ctx.fillStyle="red";ctx.font="40px monospace";ctx.fillText("🎰",w/2-30,h/2); },
    casino_table: (ctx,w,h) => { ctx.fillStyle="#1a3a1a";ctx.fillRect(0,0,w,h);ctx.fillStyle="#d4af37";ctx.fillRect(w/2-80,h/2-40,160,80);ctx.fillStyle="white";ctx.font="30px monospace";ctx.fillText("♠ ♥ ♣ ♦",w/2-70,h/2); },
    rain_street: (ctx,w,h) => { ctx.fillStyle="#2a2a3a";ctx.fillRect(0,0,w,h);for(let i=0;i<200;i++){ctx.fillStyle="rgba(100,150,255,0.3)";ctx.fillRect(i*7,h-20,2,20);} },
    kael_office: (ctx,w,h) => { ctx.fillStyle="#2c2c2c";ctx.fillRect(0,0,w,h);ctx.fillStyle="#8b7355";ctx.fillRect(w-150,h-200,120,200);ctx.fillStyle="gold";ctx.font="30px monospace";ctx.fillText("💰",w-100,h-100); },
    office_dark: (ctx,w,h) => { ctx.fillStyle="#1a1a1a";ctx.fillRect(0,0,w,h);ctx.fillStyle="#555";ctx.fillRect(w/2-100,50,200,300); },
    dark_alley: (ctx,w,h) => { ctx.fillStyle="#0f0f12";ctx.fillRect(0,0,w,h);ctx.fillStyle="#4a3a2a";for(let i=0;i<10;i++){ctx.fillRect(50+i*100,h-100,30,100);} },
    evidence_room: (ctx,w,h) => { ctx.fillStyle="#2b2b2b";ctx.fillRect(0,0,w,h);ctx.fillStyle="#aaa";for(let i=0;i<20;i++){ctx.fillRect(50+i*40,100,20,30);} },
    luxury_office: (ctx,w,h) => { ctx.fillStyle="#3a2a1a";ctx.fillRect(0,0,w,h);ctx.fillStyle="#d4af37";ctx.fillRect(w-200,h-150,180,150); },
    rehab_center: (ctx,w,h) => { ctx.fillStyle="#7eb09e";ctx.fillRect(0,0,w,h);ctx.fillStyle="white";ctx.font="25px monospace";ctx.fillText("☯",w/2-15,100); },
    casino_empty: (ctx,w,h) => { ctx.fillStyle="#222";ctx.fillRect(0,0,w,h);ctx.fillStyle="#666";ctx.fillText("⏚",w/2-20,h/2); },
    small_town: (ctx,w,h) => { ctx.fillStyle="#87ceeb";ctx.fillRect(0,0,w,h);ctx.fillStyle="#228b22";ctx.fillRect(0,h-80,w,80); },
    courtroom: (ctx,w,h) => { ctx.fillStyle="#8b7355";ctx.fillRect(0,0,w,h);ctx.fillStyle="#cdba96";ctx.fillRect(w/2-100,50,200,200); },
    support_group: (ctx,w,h) => { ctx.fillStyle="#f0e6d2";ctx.fillRect(0,0,w,h);for(let i=0;i<6;i++){ctx.fillStyle="#444";ctx.fillRect(50+i*100,h-120,60,60);} }
};

const spriteDrawers = {
    leo_sad: (ctx,s=512)=>{ctx.fillStyle="#4a4a5a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#e0b070";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillStyle="#000";ctx.fillRect(s/2-20,s/2-10,15,30);ctx.fillRect(s/2+5,s/2-10,15,30);ctx.fillText("😞",s/2-15,s/2+20);},
    leo_angry: (ctx,s)=>{ctx.fillStyle="#5a3a3a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c08040";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillStyle="red";ctx.fillRect(s/2-15,s/2-5,30,5);ctx.fillText("😠",s/2-15,s/2+20);},
    leo_neutral: (ctx,s)=>{ctx.fillStyle="#4a5a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#d0a070";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😐",s/2-15,s/2+20);},
    leo_evil: (ctx,s)=>{ctx.fillStyle="#2a2a2a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#8b0000";ctx.beginPath();ctx.arc(s/2,s/3,60,0,Math.PI*2);ctx.fill();ctx.fillText("😈",s/2-15,s/2+20);},
    kael: (ctx,s)=>{ctx.fillStyle="#3a3a4a";ctx.fillRect(0,0,s,s);ctx.fillStyle="#c0c0c0";ctx.fillRect(s/2-30,s/3,60,80);ctx.fillStyle="#d4af37";ctx.fillText("👔",s/2-20,s/2+10);}
};

// Helper functions
function generateSpriteURL(key) {
    if(!spriteDrawers[key]) return "";
    let c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    spriteDrawers[key](c.getContext("2d"), 512);
    return c.toDataURL();
}

function generateBgURL(key) {
    let d = backgroundDrawers[key] || backgroundDrawers.casino_night;
    let c = document.createElement("canvas");
    c.width = 1280;
    c.height = 720;
    d(c.getContext("2d"), 1280, 720);
    return c.toDataURL();
}

// ============================================================
// GAME ENGINE
// ============================================================

let currentNodeId = "start";
let waitingForChoice = false;

const bgCanvas = document.getElementById("bgCanvas");
const spriteImg = document.getElementById("spriteImg");
const speakerDiv = document.getElementById("speakerName");
const messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

function renderVisuals(node) {
    let bg = new Image();
    bg.onload = () => {
        let ctx = bgCanvas.getContext("2d");
        bgCanvas.width = 1280;
        bgCanvas.height = 720;
        ctx.drawImage(bg, 0, 0);
    };
    bg.src = generateBgURL(node.background);
    
    if(node.sprite && spriteDrawers[node.sprite]) {
        spriteImg.src = generateSpriteURL(node.sprite);
        spriteImg.style.opacity = "1";
    } else {
        spriteImg.src = "";
        spriteImg.style.opacity = "0";
    }
}

function renderChoices(choices) {
    choicesDiv.innerHTML = "";
    if(!choices.length) {
        choicesDiv.classList.add("hidden");
        return;
    }
    choicesDiv.classList.remove("hidden");
    choices.forEach(ch => {
        let btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = ch.text;
        btn.onclick = () => {
            if(waitingForChoice) goToNode(ch.nextId);
        };
        choicesDiv.appendChild(btn);
    });
}

function displayNode(node) {
    renderVisuals(node);
    speakerDiv.innerText = node.speaker;
    messageDiv.innerText = node.text;
    
    // Animation
    messageDiv.classList.remove("fade-text");
    void messageDiv.offsetWidth;
    messageDiv.classList.add("fade-text");
    
    if(node.choices && node.choices.length) {
        waitingForChoice = true;
        renderChoices(node.choices);
    } else {
        waitingForChoice = false;
        renderChoices([]);
    }
}

function goToNode(id) {
    if(gameData[id]) {
        currentNodeId = id;
        displayNode(gameData[currentNodeId]);
    } else {
        console.warn("Missing node:", id);
        goToNode("start");
    }
}

function nextStep() {
    if(!waitingForChoice) {
        let node = gameData[currentNodeId];
        if(node && node.nextId) {
            goToNode(node.nextId);
        } else {
            goToNode("start");
        }
    }
}

function resetGame() {
    goToNode("start");
}

// Event Listeners
nextBtn.onclick = nextStep;
resetBtn.onclick = resetGame;

// Start the game
goToNode("start");