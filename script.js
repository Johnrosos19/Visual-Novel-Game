// -------------------- VISUAL NOVEL DATA MODEL --------------------
const gameData = {
    "start": {
        id: "start",
        speaker: "???",
        text: "A cold wind blows through the ancient starport. You open your eyes, disoriented. A faint pulse echoes in your chest... the shard of the Lost Star.",
        background: "ruins",
        sprite: "mysterious",
        choices: [
            { text: "🔍 Inspect the ruins", nextId: "inspect_ruins" },
            { text: "🌙 Listen to the pulse", nextId: "listen_pulse" }
        ],
        nextId: "inspect_ruins"
    },
    "inspect_ruins": {
        id: "inspect_ruins",
        speaker: "You",
        text: "You run your fingers over ancient glyphs. They glow faintly. A hologram flickers—an old guardian appears before you.",
        background: "ruins_glow",
        sprite: "guardian",
        choices: [
            { text: "❓ Ask about the Lost Star", nextId: "guardian_talk" },
            { text: "⚔️ Prepare for danger", nextId: "danger_path" }
        ],
        nextId: "guardian_talk"
    },
    "listen_pulse": {
        id: "listen_pulse",
        speaker: "You",
        text: "You close your eyes, focusing on the rhythm. A vision floods your mind: a celestial being imprisoned in a crystal spire. 'Free me,' a voice whispers.",
        background: "vision",
        sprite: "celestial",
        choices: [
            { text: "✨ Accept the quest", nextId: "quest_accept" },
            { text: "🌀 Resist and flee", nextId: "flee_bad" }
        ],
        nextId: "quest_accept"
    },
    "guardian_talk": {
        id: "guardian_talk",
        speaker: "Ancient Guardian",
        text: "The Lost Star was shattered eons ago. You carry a fragment. To restore balance, you must reach the Eclipse Temple and reforge the star. But beware — the Void Stalker hunts you.",
        background: "temple_hall",
        sprite: "guardian",
        choices: [
            { text: "🗡️ 'I will restore the star'", nextId: "quest_accept" },
            { text: "🕯️ 'Tell me more about the Stalker'", nextId: "stalker_warning" }
        ],
        nextId: "quest_accept"
    },
    "stalker_warning": {
        id: "stalker_warning",
        speaker: "Guardian",
        text: "The Stalker feeds on doubt. It will take the form of your fears. Trust your instincts, and the shard will light your path.",
        background: "dark_woods",
        sprite: "guardian",
        choices: [
            { text: "🙏 Thank you, Guardian", nextId: "quest_accept" }
        ],
        nextId: "quest_accept"
    },
    "danger_path": {
        id: "danger_path",
        speaker: "Narrator",
        text: "You raise your guard, but the ruins tremble. A dark wraith materializes! It blocks the exit. 'Surrender the shard.'",
        background: "dark_woods",
        sprite: "stalker",
        choices: [
            { text: "✨ Use the shard's light", nextId: "shard_victory" },
            { text: "🏃 Run deeper into ruins", nextId: "run_doom" }
        ],
        nextId: "shard_victory"
    },
    "shard_victory": {
        id: "shard_victory",
        speaker: "You",
        text: "You raise your hand and the fragment blazes with starlight. The wraith shrieks and dissolves. The path to the Eclipse Temple opens.",
        background: "temple_gate",
        sprite: "hero",
        choices: [
            { text: "🌟 Enter the temple", nextId: "temple_finale" }
        ],
        nextId: "temple_finale"
    },
    "run_doom": {
        id: "run_doom",
        speaker: "Narrator",
        text: "You flee into a crumbling corridor, but the floor gives way. Darkness swallows you... The Lost Star's echo fades forever. [BAD ENDING]",
        background: "void",
        sprite: "",
        choices: [
            { text: "🔁 Restart journey", nextId: "start" }
        ],
        nextId: "start"
    },
    "quest_accept": {
        id: "quest_accept",
        speaker: "You",
        text: "Determination fills your heart. You will restore the Lost Star. The journey to the Eclipse Temple begins across the Starlight Expanse.",
        background: "expanse",
        sprite: "hero",
        choices: [
            { text: "🌄 Venture forth", nextId: "temple_finale" }
        ],
        nextId: "temple_finale"
    },
    "temple_finale": {
        id: "temple_finale",
        speaker: "Celestial Voice",
        text: "You stand before the altar. The shard rises, merging with the echoes of heroes past. The Lost Star is reborn! Light spills across the world. You become the new guardian of harmony. ✨ TRUE ENDING ✨",
        background: "temple_radiant",
        sprite: "celestial_full",
        choices: [
            { text: "💫 Play again (New Game+)", nextId: "start" }
        ],
        nextId: "start"
    },
    "flee_bad": {
        id: "flee_bad",
        speaker: "Narrator",
        text: "You turn your back on destiny, but the shard grows cold and shatters. Without purpose, you wander the wastelands forever. [NEUTRAL ENDING]",
        background: "waste",
        sprite: "",
        choices: [
            { text: "🔄 Restart", nextId: "start" }
        ],
        nextId: "start"
    }
};

// ----- Background drawing functions -----
const backgroundDrawers = {
    ruins: (ctx, w, h) => {
        ctx.fillStyle = "#2b2f45";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#5c4b3a";
        for(let i=0;i<60;i++) { ctx.fillRect(100+i*15, h-100, 8, 80); }
        ctx.fillStyle = "#c9b36b";
        ctx.font = "bold 34px monospace";
        ctx.fillText("⌂", 70, h-40);
    },
    ruins_glow: (ctx, w, h) => {
        backgroundDrawers.ruins(ctx,w,h);
        ctx.fillStyle = "rgba(255,200,100,0.5)";
        for(let i=0;i<30;i++) ctx.fillRect(50+ i*25, h-150, 5, 30);
    },
    vision: (ctx, w, h) => {
        ctx.fillStyle = "#191b36";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#efc7a0";
        for(let i=0;i<200;i++) {
            ctx.beginPath();
            ctx.arc(Math.random()*w, Math.random()*h, 2, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.fillStyle = "#ffe5b4";
        ctx.font = "50px monospace";
        ctx.fillText("✨", w/2-30, h/2);
    },
    temple_hall: (ctx,w,h) => {
        ctx.fillStyle = "#312e4a";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#ab8e5c";
        for(let i=0;i<8;i++) { ctx.fillRect(w/4 + i*70, h-120, 40, 120); }
        ctx.fillStyle = "#ffdfb0";
        ctx.font = "26px monospace";
        ctx.fillText("🏛️", w/2-20, h-50);
    },
    dark_woods: (ctx,w,h) => {
        ctx.fillStyle = "#1f3a2b";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#2f542d";
        for(let i=0;i<15;i++) ctx.fillRect(40+i*70, h-130, 20, 130);
        ctx.fillStyle = "#3a2a1f";
        ctx.fillRect(0, h-40, w, 40);
    },
    expanse: (ctx,w,h) => {
        ctx.fillStyle = "#1a2155";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#f9e0a0";
        for(let i=0;i<100;i++) { ctx.fillRect(i*15, h-70, 5, 70); }
        ctx.fillStyle = "white";
        for(let i=0;i<80;i++) { ctx.beginPath(); ctx.arc(30+i*17, 40, 1.5,0,Math.PI*2); ctx.fill();}
    },
    temple_gate: (ctx,w,h) => {
        ctx.fillStyle = "#463e2e";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#cdb282";
        ctx.fillRect(w/2-70, h-200, 140, 200);
        ctx.fillStyle = "#7c5f3a";
        ctx.fillRect(w/2-25, h-250, 50, 50);
    },
    void: (ctx,w,h) => {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#3a2b3f";
        ctx.font = "30px monospace";
        ctx.fillText("⚫", w/2-15, h/2);
    },
    waste: (ctx,w,h) => {
        ctx.fillStyle = "#735e4b";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#a57c5c";
        for(let i=0;i<50;i++) ctx.fillRect(i*30, h-30, 10, 30);
    },
    temple_radiant: (ctx,w,h) => {
        ctx.fillStyle = "#ffe6b0";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#ffb347";
        for(let i=0;i<12;i++) {
            ctx.beginPath();
            ctx.arc(w/2, h/2, 30+i*12, 0, Math.PI*2);
            ctx.fillStyle = `rgba(255,200,80,${0.2-i*0.01})`;
            ctx.fill();
        }
        ctx.fillStyle = "#ffec80";
        ctx.font = "55px monospace";
        ctx.fillText("⭐", w/2-30, h/2+15);
    }
};

// ----- Sprite drawing functions -----
const spriteDrawers = {
    mysterious: (ctx, size=256) => {
        ctx.fillStyle = "#1d2c3e";
        ctx.fillRect(0,0,size,size);
        ctx.fillStyle = "#c2b28b";
        ctx.beginPath(); ctx.arc(size/2, size/3, 40, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#f0e6d2";
        ctx.fillRect(size/2-20, size/2, 40, 70);
        ctx.fillStyle = "#dbb87c";
        ctx.fillText("❓", size/2-12, size/3+10);
    },
    guardian: (ctx,size=256) => {
        ctx.fillStyle = "#315f5c";
        ctx.fillRect(0,0,size,size);
        ctx.fillStyle = "#f4c542";
        ctx.fillRect(size/2-30, size/3, 60, 80);
        ctx.fillStyle = "#ffda99";
        ctx.beginPath(); ctx.arc(size/2, size/3-10, 35,0,Math.PI*2); ctx.fill();
        ctx.fillStyle = "#3b2b1a";
        ctx.fillText("⚔️", size/2-15, size/2+20);
    },
    celestial: (ctx,size=256) => {
        ctx.fillStyle = "#2a2d5e";
        ctx.fillRect(0,0,size,size);
        ctx.fillStyle = "#ffe5b4";
        for(let i=0;i<50;i++) ctx.fillRect(i*5, size-50, 3, 50);
        ctx.fillStyle = "gold";
        ctx.font = "50px monospace";
        ctx.fillText("🌙", size/2-25, size/2);
    },
    stalker: (ctx,size=256) => {
        ctx.fillStyle = "#1a1f2a";
        ctx.fillRect(0,0,size,size);
        ctx.fillStyle = "#8b5a2b";
        ctx.fillRect(size/2-25, size/3, 50, 90);
        ctx.fillStyle = "#ff4f4f";
        ctx.fillText("👾", size/2-20, size/2);
    },
    hero: (ctx,size=256) => {
        ctx.fillStyle = "#354b6e";
        ctx.fillRect(0,0,size,size);
        ctx.fillStyle = "#e0b070";
        ctx.fillRect(size/2-20, size/3, 40, 100);
        ctx.fillStyle = "#e8e2c7";
        ctx.beginPath(); ctx.arc(size/2, size/3-10, 30,0,Math.PI*2); ctx.fill();
        ctx.fillStyle = "#3a281a";
        ctx.fillText("✨", size/2-12, size/2+25);
    },
    celestial_full: (ctx,size=256) => {
        ctx.fillStyle = "#503e6e";
        ctx.fillRect(0,0,size,size);
        ctx.fillStyle = "#f5e1a0";
        ctx.font = "68px monospace";
        ctx.fillText("🌟", size/2-32, size/2+20);
        ctx.fillStyle = "white";
        ctx.fillRect(size/2-15, size-60, 30, 50);
    }
};

// Helper: generate sprite/background as dataURL
function generateSpriteDataURL(key) {
    if(!spriteDrawers[key]) return "";
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    spriteDrawers[key](ctx, 512);
    return canvas.toDataURL();
}

function generateBackgroundDataURL(key) {
    if(!backgroundDrawers[key]) key = "ruins";
    const canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext("2d");
    backgroundDrawers[key](ctx, 1280, 720);
    return canvas.toDataURL();
}

// ----- Game State -----
let currentNodeId = "start";
let waitingForChoice = false;

// DOM Elements
const bgCanvas = document.getElementById("bgCanvas");
const spriteImg = document.getElementById("spriteImg");
const speakerDiv = document.getElementById("speakerName");
const messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

// Animation helper
function applyTextAnimation() {
    messageDiv.classList.remove("fade-text");
    void messageDiv.offsetWidth;
    messageDiv.classList.add("fade-text");
}

// Render background & sprite
function renderVisuals(node) {
    const bgKey = node.background || "ruins";
    const bgURL = generateBackgroundDataURL(bgKey);
    const imgBg = new Image();
    imgBg.onload = () => {
        const ctx = bgCanvas.getContext("2d");
        bgCanvas.width = 1280;
        bgCanvas.height = 720;
        ctx.drawImage(imgBg, 0, 0, bgCanvas.width, bgCanvas.height);
    };
    imgBg.src = bgURL;
    
    const spriteKey = node.sprite;
    if(spriteKey && spriteDrawers[spriteKey]) {
        const spriteURL = generateSpriteDataURL(spriteKey);
        spriteImg.src = spriteURL;
        spriteImg.style.opacity = "1";
    } else {
        spriteImg.src = "";
        spriteImg.style.opacity = "0";
    }
}

// Render choice buttons
function renderChoices(choices) {
    choicesDiv.innerHTML = "";
    if(!choices.length) {
        choicesDiv.classList.add("hidden");
        return;
    }
    choicesDiv.classList.remove("hidden");
    for(let ch of choices) {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = ch.text;
        btn.addEventListener("click", () => {
            if(!waitingForChoice) return;
            goToNode(ch.nextId);
        });
        choicesDiv.appendChild(btn);
    }
}

// Display a node (scene)
function displayNode(node) {
    renderVisuals(node);
    speakerDiv.innerText = node.speaker;
    messageDiv.innerText = node.text;
    applyTextAnimation();
    
    if(node.choices && node.choices.length > 0) {
        waitingForChoice = true;
        renderChoices(node.choices);
    } else {
        waitingForChoice = false;
        renderChoices([]);
    }
}

// Navigate to another node
function goToNode(nextId) {
    if(!gameData[nextId]) {
        console.warn("missing node", nextId);
        return;
    }
    currentNodeId = nextId;
    const nextNode = gameData[currentNodeId];
    waitingForChoice = false;
    displayNode(nextNode);
}

// Next step logic
function nextStep() {
    if(waitingForChoice) return;
    const node = gameData[currentNodeId];
    if(!node) return;
    let targetId = node.nextId;
    if(targetId) {
        goToNode(targetId);
    } else {
        goToNode("start");
    }
}

// Reset game
function resetGame() {
    goToNode("start");
}

// Event listeners
nextBtn.addEventListener("click", nextStep);
resetBtn.addEventListener("click", resetGame);

// Initialize game
function initGame() {
    const startNode = gameData["start"];
    if(startNode) {
        currentNodeId = "start";
        displayNode(startNode);
    }
}

initGame();