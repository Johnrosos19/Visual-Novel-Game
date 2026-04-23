// ============================================================
// ALL IN - Gambling vs Businessman
// ULTIMATE EDITION: Enhanced Backgrounds + Dynamic Character Portraits
// 4 choices per slide | 10-12 choices to ending
// ============================================================

// ---------- PROGRESS TRACKING ----------
let decisionCount = 0;
let totalDecisionsNeeded = 10;

function updateProgress() {
    const fill = document.getElementById('progressFill');
    const stats = document.getElementById('progressStats');
    if (fill) {
        const percent = (decisionCount / totalDecisionsNeeded) * 100;
        fill.style.width = Math.min(percent, 100) + '%';
    }
    if (stats) {
        stats.innerText = `${decisionCount} / ${totalDecisionsNeeded} decisions made`;
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
// ENHANCED BACKGROUND DRAWING FUNCTIONS (Rich, Detailed)
// ============================================================

const backgroundDrawers = {
    // Casino at night - neon lights, slot machines
    casino_night: (ctx, w, h) => {
        // Dark room base
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, w, h);
        
        // Neon lights
        for(let i = 0; i < 20; i++) {
            ctx.fillStyle = `rgba(255, ${50 + i * 10}, 50, 0.3)`;
            ctx.fillRect(50 + i * 60, h - 120, 30, 100);
        }
        
        // Slot machines
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#2a2a3a";
            ctx.fillRect(80 + i * 140, h - 180, 100, 150);
            ctx.fillStyle = "#d4af37";
            ctx.fillRect(110 + i * 140, h - 150, 40, 40);
            ctx.fillStyle = "#ff4444";
            ctx.font = "20px monospace";
            ctx.fillText("🎰", 115 + i * 140, h - 120);
        }
        
        // Chandelier
        ctx.fillStyle = "#d4af37";
        ctx.beginPath();
        ctx.arc(w/2, 50, 30, 0, Math.PI * 2);
        ctx.fill();
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = `rgba(255, 200, 100, ${0.5 + Math.sin(Date.now()/1000 + i) * 0.3})`;
            ctx.beginPath();
            ctx.arc(w/2 + Math.cos(i * Math.PI/6) * 40, 50 + Math.sin(i * Math.PI/6) * 20, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Smoke effect
        ctx.fillStyle = "rgba(100,100,120,0.1)";
        for(let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(100 + i * 15, h - 200 + Math.sin(i) * 20, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Poker table close-up
    casino_table: (ctx, w, h) => {
        ctx.fillStyle = "#1a3a1a";
        ctx.fillRect(0, 0, w, h);
        
        // Green felt table
        ctx.fillStyle = "#2d6a4f";
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 400, 200, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Cards on table
        const suits = ["♠", "♥", "♣", "♦"];
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(w/2 - 150 + i * 40, h/2 - 30, 30, 45);
            ctx.fillStyle = i % 2 === 0 ? "#cc0000" : "#000000";
            ctx.font = "24px monospace";
            ctx.fillText(suits[i % 4], w/2 - 140 + i * 40, h/2 + 5);
        }
        
        // Chips
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = ["#ff4444", "#44ff44", "#d4af37", "#4444ff", "#ff44ff"][i % 5];
            ctx.beginPath();
            ctx.ellipse(w/2 - 200 + i * 30, h/2 + 50, 15, 8, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Kael's dark office
    kael_office: (ctx, w, h) => {
        ctx.fillStyle = "#1a1a2a";
        ctx.fillRect(0, 0, w, h);
        
        // Desk
        ctx.fillStyle = "#4a2a1a";
        ctx.fillRect(100, h - 200, w - 200, 80);
        
        // Chair silhouette
        ctx.fillStyle = "#2a1a0a";
        ctx.fillRect(w - 180, h - 350, 120, 150);
        
        // Lamp
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(w - 100, h - 400, 10, 50);
        ctx.beginPath();
        ctx.arc(w - 95, h - 410, 25, 0, Math.PI * 2);
        ctx.fill();
        
        // Window with city lights
        ctx.fillStyle = "#0a0a2a";
        ctx.fillRect(50, 50, 200, 150);
        for(let i = 0; i < 30; i++) {
            ctx.fillStyle = `rgba(255, 200, 100, ${0.3 + Math.random() * 0.5})`;
            ctx.fillRect(70 + Math.random() * 160, 70 + Math.random() * 110, 5, 5);
        }
        
        // Smoke from ashtray
        ctx.fillStyle = "rgba(150,150,150,0.2)";
        for(let i = 0; i < 10; i++) {
            ctx.beginPath();
            ctx.arc(w - 150 + i * 5, h - 220 - i * 8, 8 - i * 0.5, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Dark alleyway
    dark_alley: (ctx, w, h) => {
        ctx.fillStyle = "#0f0f12";
        ctx.fillRect(0, 0, w, h);
        
        // Brick walls
        ctx.fillStyle = "#3a2a2a";
        for(let i = 0; i < 20; i++) {
            ctx.fillRect(50, 50 + i * 35, 200, 30);
            ctx.fillRect(w - 250, 50 + i * 35, 200, 30);
        }
        
        // Wet ground reflection
        ctx.fillStyle = "rgba(50,50,80,0.4)";
        ctx.fillRect(0, h - 100, w, 100);
        
        // Street lamp glow
        ctx.fillStyle = "rgba(255,200,100,0.3)";
        ctx.beginPath();
        ctx.arc(300, h - 150, 80, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(295, h - 200, 10, 60);
    },
    
    // Evidence room
    evidence_room: (ctx, w, h) => {
        ctx.fillStyle = "#2b2b2b";
        ctx.fillRect(0, 0, w, h);
        
        // Filing cabinets
        for(let i = 0; i < 4; i++) {
            ctx.fillStyle = "#4a4a5a";
            ctx.fillRect(50 + i * 120, 100, 100, 400);
            for(let j = 0; j < 4; j++) {
                ctx.fillStyle = "#6a6a7a";
                ctx.fillRect(70 + i * 120, 130 + j * 90, 60, 40);
            }
        }
        
        // Evidence board
        ctx.fillStyle = "#8b7355";
        ctx.fillRect(w - 300, 100, 250, 300);
        
        // Photos and strings
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = "#aaa";
            ctx.fillRect(w - 280 + i * 50, 120, 40, 50);
            ctx.beginPath();
            ctx.moveTo(w - 260 + i * 50, 170);
            ctx.lineTo(w - 200, 350);
            ctx.strokeStyle = "#ff4444";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    },
    
    // Luxury office (Kael's throne)
    luxury_office: (ctx, w, h) => {
        ctx.fillStyle = "#3a2a1a";
        ctx.fillRect(0, 0, w, h);
        
        // Large windows
        ctx.fillStyle = "#1a3a5a";
        ctx.fillRect(w - 350, 50, 300, 400);
        
        // City skyline
        for(let i = 0; i < 15; i++) {
            ctx.fillStyle = `rgba(255, 200, 100, ${0.5 + Math.random() * 0.3})`;
            ctx.fillRect(w - 330 + i * 25, 300 - i * 8, 15, 150);
        }
        
        // Mahogany desk
        ctx.fillStyle = "#5a3a2a";
        ctx.fillRect(100, h - 180, 400, 80);
        
        // Luxury chair
        ctx.fillStyle = "#8B0000";
        ctx.fillRect(450, h - 350, 100, 170);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(470, h - 370, 60, 30);
        
        // Chandelier
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#d4af37";
            ctx.beginPath();
            ctx.arc(w/2 + i * 30 - 120, 80, 8, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Church interior
    church: (ctx, w, h) => {
        ctx.fillStyle = "#4a3e6e";
        ctx.fillRect(0, 0, w, h);
        
        // Stained glass window
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = ["#ff4444", "#4444ff", "#44ff44", "#ffff44", "#ff44ff"][i % 5];
            ctx.fillRect(w/2 - 100 + i * 50, 100, 40, 150);
        }
        
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(w/2 - 30, 250, 60, 200);
        
        // Pew rows
        for(let i = 0; i < 6; i++) {
            ctx.fillStyle = "#5a3a2a";
            ctx.fillRect(100 + i * 150, h - 150, 120, 40);
        }
        
        // Candle glow
        for(let i = 0; i < 10; i++) {
            ctx.fillStyle = `rgba(255, 150, 50, ${0.3 + Math.sin(Date.now()/500 + i) * 0.2})`;
            ctx.beginPath();
            ctx.arc(150 + i * 100, h - 200, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Support group circle
    support_group: (ctx, w, h) => {
        ctx.fillStyle = "#e8dcc8";
        ctx.fillRect(0, 0, w, h);
        
        // Circle of chairs
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const x = w/2 + Math.cos(angle) * 200;
            const y = h/2 + Math.sin(angle) * 120;
            ctx.fillStyle = "#8b7355";
            ctx.fillRect(x - 30, y - 30, 60, 60);
            ctx.fillStyle = "#6a5a4a";
            ctx.fillRect(x - 20, y - 45, 40, 20);
        }
        
        // Center rug
        ctx.fillStyle = "#b8860b";
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 150, 80, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Window with light
        ctx.fillStyle = "#87ceeb";
        ctx.fillRect(w - 200, 50, 150, 200);
        ctx.fillStyle = "#d4af37";
        for(let i = 0; i < 30; i++) {
            ctx.fillRect(w - 190 + i * 5, 60 + i * 7, 3, 10);
        }
    },
    
    // Courtroom
    courtroom: (ctx, w, h) => {
        ctx.fillStyle = "#8b7355";
        ctx.fillRect(0, 0, w, h);
        
        // Judge's bench
        ctx.fillStyle = "#5a3a2a";
        ctx.fillRect(w/2 - 150, 50, 300, 150);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(w/2 - 100, 70, 200, 50);
        
        // Jury box
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = "#7a6a5a";
            ctx.fillRect(50 + i * 60, 250, 50, 80);
        }
        
        // American flag
        ctx.fillStyle = "#cc0000";
        ctx.fillRect(w - 150, 50, 100, 200);
        for(let i = 0; i < 13; i++) {
            ctx.fillStyle = i % 2 === 0 ? "#ffffff" : "#cc0000";
            ctx.fillRect(w - 150, 60 + i * 15, 100, 7);
        }
        
        // Audience
        for(let i = 0; i < 20; i++) {
            ctx.fillStyle = "#3a3a4a";
            ctx.fillRect(100 + i * 50, h - 120, 40, 80);
            ctx.fillStyle = "#d0c0a0";
            ctx.beginPath();
            ctx.arc(120 + i * 50, h - 130, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Small town / new beginning
    small_town: (ctx, w, h) => {
        ctx.fillStyle = "#87ceeb";
        ctx.fillRect(0, 0, w, h);
        
        // Sun
        ctx.fillStyle = "#ffd700";
        ctx.beginPath();
        ctx.arc(100, 80, 50, 0, Math.PI * 2);
        ctx.fill();
        
        // Houses
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = ["#e8a87c", "#c38d6b", "#b87b5a", "#d4a373", "#e9c46a"][i % 5];
            ctx.fillRect(100 + i * 180, h - 180, 120, 100);
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(140 + i * 180, h - 220, 40, 40);
        }
        
        // Trees
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#2d6a4f";
            ctx.beginPath();
            ctx.arc(50 + i * 160, h - 200, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(45 + i * 160, h - 170, 10, 50);
        }
        
        // Road
        ctx.fillStyle = "#555";
        ctx.fillRect(0, h - 100, w, 100);
    },
    
    // Void / empty ending
    void: (ctx, w, h) => {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, w, h);
        
        // Fading particles
        for(let i = 0; i < 100; i++) {
            ctx.fillStyle = `rgba(100, 100, 150, ${Math.random() * 0.3})`;
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.fillStyle = "#333";
        ctx.font = "30px monospace";
        ctx.fillText("⚫", w/2 - 15, h/2);
    },
    
    // Default fallback
    default_bg: (ctx, w, h) => {
        ctx.fillStyle = "#1a1a2a";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#d4af37";
        ctx.font = "40px monospace";
        ctx.fillText("✦", w/2 - 20, h/2);
    }
};

// ============================================================
// ENHANCED CHARACTER PORTRAITS (Detailed, Emotion-Based)
// ============================================================

function drawPortrait(ctx, characterId, emotion = "neutral") {
    const w = 300, h = 300;
    ctx.clearRect(0, 0, w, h);
    
    // Background circle
    ctx.fillStyle = "#1a1a2a";
    ctx.beginPath();
    ctx.arc(w/2, h/2, 140, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(w/2, h/2, 135, 0, Math.PI * 2);
    ctx.fillStyle = "#2a2a3a";
    ctx.fill();
    
    // Helper: draw base face
    function drawFace(skinTone, eyeType, mouthType, hairColor, accessory = "") {
        // Skin
        ctx.fillStyle = skinTone;
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 100, 110, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = "#1a1a2a";
        if(eyeType === "sad") {
            ctx.beginPath();
            ctx.arc(w/2-35, h/2-20, 14, 0, Math.PI * 2);
            ctx.arc(w/2+35, h/2-20, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(w/2-39, h/2-24, 5, 0, Math.PI * 2);
            ctx.arc(w/2+31, h/2-24, 5, 0, Math.PI * 2);
            ctx.fill();
            // Eyebrows (sad)
            ctx.beginPath();
            ctx.moveTo(w/2-50, h/2-45);
            ctx.quadraticCurveTo(w/2-35, h/2-40, w/2-20, h/2-45);
            ctx.strokeStyle = "#2a1a0a";
            ctx.lineWidth = 4;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w/2+20, h/2-45);
            ctx.quadraticCurveTo(w/2+35, h/2-40, w/2+50, h/2-45);
            ctx.stroke();
        } else if(eyeType === "angry") {
            ctx.fillStyle = "#8B0000";
            ctx.beginPath();
            ctx.ellipse(w/2-35, h/2-20, 16, 12, 0, 0, Math.PI * 2);
            ctx.ellipse(w/2+35, h/2-20, 16, 12, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ff6666";
            ctx.beginPath();
            ctx.arc(w/2-35, h/2-22, 5, 0, Math.PI * 2);
            ctx.arc(w/2+35, h/2-22, 5, 0, Math.PI * 2);
            ctx.fill();
            // Angry eyebrows
            ctx.beginPath();
            ctx.moveTo(w/2-55, h/2-50);
            ctx.lineTo(w/2-20, h/2-40);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w/2+20, h/2-40);
            ctx.lineTo(w/2+55, h/2-50);
            ctx.stroke();
        } else if(eyeType === "evil") {
            ctx.fillStyle = "#cc0000";
            ctx.beginPath();
            ctx.ellipse(w/2-35, h/2-20, 15, 10, 0, 0, Math.PI * 2);
            ctx.ellipse(w/2+35, h/2-20, 15, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ffaa00";
            ctx.beginPath();
            ctx.arc(w/2-35, h/2-22, 4, 0, Math.PI * 2);
            ctx.arc(w/2+35, h/2-22, 4, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillStyle = "#1a1a2a";
            ctx.beginPath();
            ctx.arc(w/2-35, h/2-20, 15, 0, Math.PI * 2);
            ctx.arc(w/2+35, h/2-20, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(w/2-39, h/2-24, 6, 0, Math.PI * 2);
            ctx.arc(w/2+31, h/2-24, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Mouth
        ctx.beginPath();
        ctx.strokeStyle = "#5a3a2a";
        ctx.lineWidth = 5;
        if(mouthType === "sad") {
            ctx.arc(w/2, h/2+35, 25, 0.1, Math.PI - 0.1);
            ctx.stroke();
        } else if(mouthType === "angry") {
            ctx.arc(w/2, h/2+35, 25, Math.PI + 0.1, Math.PI * 2 - 0.1);
            ctx.stroke();
        } else if(mouthType === "smile") {
            ctx.arc(w/2, h/2+35, 25, 0.1, Math.PI - 0.1, true);
            ctx.stroke();
        } else if(mouthType === "evil") {
            ctx.beginPath();
            ctx.moveTo(w/2-20, h/2+35);
            ctx.lineTo(w/2, h/2+50);
            ctx.lineTo(w/2+20, h/2+35);
            ctx.fillStyle = "#8B0000";
            ctx.fill();
        } else {
            ctx.arc(w/2, h/2+35, 22, 0, Math.PI);
            ctx.stroke();
        }
        
        // Hair
        ctx.fillStyle = hairColor;
        ctx.beginPath();
        ctx.ellipse(w/2, h/2-70, 95, 60, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Accessory
        if(accessory) {
            ctx.font = "35px monospace";
            ctx.fillStyle = "#d4af37";
            ctx.fillText(accessory, w/2-18, h-50);
        }
    }
    
    // Character mapping
    const characters = {
        "leo_sad": () => drawFace("#e0b070", "sad", "sad", "#4a3a2a", ""),
        "leo_angry": () => drawFace("#e0b070", "angry", "angry", "#4a3a2a", ""),
        "leo_neutral": () => drawFace("#e0b070", "neutral", "neutral", "#4a3a2a", ""),
        "leo_evil": () => drawFace("#c08040", "evil", "evil", "#2a1a0a", "😈"),
        "kael": () => drawFace("#c0c0c0", "neutral", "neutral", "#2a2a4a", "👔"),
        "kael_evil": () => drawFace("#8a8a8a", "evil", "evil", "#1a1a2a", "💀"),
        "maria": () => drawFace("#f0c0a0", "smile", "smile", "#8B4513", "👩‍⚕️"),
        "priest": () => drawFace("#e0c0a0", "neutral", "smile", "#ffffff", "⛪"),
        "debtor": () => drawFace("#c0a080", "sad", "sad", "#5a4a3a", "😢"),
        "politician": () => drawFace("#e0d0a0", "neutral", "neutral", "#3a3a6a", "👔"),
        "agent": () => drawFace("#a0c0e0", "neutral", "neutral", "#2a4a6a", "🕵️"),
        "young_man": () => drawFace("#d0b090", "sad", "sad", "#4a3a2a", "👨"),
        "daughter": () => drawFace("#f0d0b0", "smile", "smile", "#6a3a1a", "👧")
    };
    
    const drawFunc = characters[characterId] || characters["leo_neutral"];
    drawFunc();
    
    // Update name tag
    const nameTag = document.getElementById("charNameTag");
    if(nameTag) {
        const names = {
            "leo_sad": "LEO (Broken)",
            "leo_angry": "LEO (Raging)",
            "leo_neutral": "LEO",
            "leo_evil": "LEO (Corrupted)",
            "kael": "MR. KAEL",
            "kael_evil": "KAEL (Enraged)",
            "maria": "MARIA (Counselor)",
            "priest": "FATHER MICHAEL",
            "debtor": "THE DEBTOR",
            "politician": "SENATOR VANCE",
            "agent": "AGENT WILLIAMS",
            "young_man": "JOSHUA",
            "daughter": "SARAH (Daughter)"
        };
        nameTag.innerText = names[characterId] || characterId.toUpperCase();
    }
}

// ============================================================
// GAME DATA (Full Branching Story - 4 Choices Per Slide)
// ============================================================

const gameData = {
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
    
    "slide2_accept_kael": {
        id: "slide2_accept_kael",
        speaker: "Kael",
        text: "'Welcome to my world. First rule: loyalty above all. Second: never gamble with my money. Third...' He slides a gun across the table. 'Your first test is tonight.'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🔫 Take the gun without hesitation", nextId: "slide3_gun_test", type: "bad" },
            { text: "😰 Hesitate but accept", nextId: "slide3_hesitate_accept", type: "bad" },
            { text: "❓ Ask what the job is", nextId: "slide3_ask_job", type: "neutral" },
            { text: "🙅 Refuse and try to leave", nextId: "slide3_refuse_kael", type: "good" }
        ],
        nextId: "slide3_gun_test"
    },
    
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
    
    "slide2_seek_help": {
        id: "slide2_seek_help",
        speaker: "Leo",
        text: "I walk away from Kael. The rain soaks me. I find a small church. An old priest opens the door. 'My son, you look lost.'",
        background: "church",
        sprite: "leo_sad",
        choices: [
            { text: "🙏 Confess everything", nextId: "slide3_confess_priest", type: "good" },
            { text: "💪 Ask for rehab recommendations", nextId: "slide3_rehab_search", type: "good" },
            { text: "📞 Call my daughter", nextId: "slide3_call_daughter", type: "good" },
            { text: "😞 Sit in silence", nextId: "slide3_silence", type: "neutral" }
        ],
        nextId: "slide3_confess_priest"
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
    
    "slide3_expose_kael": {
        id: "slide3_expose_kael",
        speaker: "Leo",
        text: "'I know what you are, Kael. And I'm not afraid of you.' He laughs. 'Brave. Stupid. But brave.'",
        background: "kael_office",
        sprite: "leo_angry",
        choices: [
            { text: "📁 Call the police right there", nextId: "slide4_police_call", type: "good" },
            { text: "💀 He attacks you", nextId: "ending_martyr", type: "bad" },
            { text: "🏃 Run and hide", nextId: "ending_runaway", type: "neutral" },
            { text: "📢 Post everything online", nextId: "ending_justice", type: "good" }
        ],
        nextId: "ending_justice"
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
    
    "slide3_rehab_search": {
        id: "slide3_rehab_search",
        speaker: "Leo",
        text: "I find a free rehab center. The counselor, Maria, has kind eyes. 'We've all hit rock bottom,' she says. 'The question is: will you climb back up?'",
        background: "rehab_center",
        sprite: "maria",
        choices: [
            { text: "💪 Commit fully to recovery", nextId: "slide4_commit_recovery", type: "good" },
            { text: "😞 Half-heartedly agree", nextId: "slide4_half_commit", type: "neutral" },
            { text: "📞 Call my daughter first", nextId: "slide4_call_daughter2", type: "good" },
            { text: "🏃 Leave after one day", nextId: "slide4_leave_rehab", type: "bad" }
        ],
        nextId: "slide4_commit_recovery"
    },
    
    "slide3_call_daughter": {
        id: "slide3_call_daughter",
        speaker: "Sarah (Daughter)",
        text: "'Dad? Is that really you?' Her voice cracks. 'I thought you were dead.' Tears stream down my face.",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "😭 Apologize sincerely", nextId: "slide4_apologize_daughter", type: "good" },
            { text: "💪 Promise to change", nextId: "slide4_promise_change", type: "good" },
            { text: "💰 Ask her for money", nextId: "slide4_ask_money", type: "bad" },
            { text: "😞 Hang up in shame", nextId: "slide4_hang_up", type: "bad" }
        ],
        nextId: "slide4_apologize_daughter"
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
    
    "slide4_commit_recovery": {
        id: "slide4_commit_recovery",
        speaker: "Maria",
        text: "'You've made the right choice, Leo. It won't be easy. But you won't be alone.'",
        background: "rehab_center",
        sprite: "maria",
        choices: [
            { text: "💪 Complete 90-day program", nextId: "slide5_complete_rehab", type: "good" },
            { text: "🕊️ Become a peer counselor", nextId: "slide5_become_counselor", type: "good" },
            { text: "📞 Reconnect with family", nextId: "slide5_reconnect_family", type: "good" },
            { text: "🏃 Relapse after 30 days", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "slide5_complete_rehab"
    },
    
    "slide4_apologize_daughter": {
        id: "slide4_apologize_daughter",
        speaker: "Sarah",
        text: "'I want to believe you, Dad. But you've broken so many promises.'",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "💪 Prove it with actions", nextId: "slide5_prove_actions", type: "good" },
            { text: "😞 Give up", nextId: "slide5_give_up", type: "bad" },
            { text: "🙏 Ask for one more chance", nextId: "slide5_one_more_chance", type: "good" },
            { text: "💰 Send her money", nextId: "slide5_send_money", type: "neutral" }
        ],
        nextId: "slide5_prove_actions"
    },
    
    "slide5_cross_line": {
        id: "slide5_cross_line",
        speaker: "Kael",
        text: "'Impressive. You're crueler than I expected. Here's $20,000. Your next target is bigger.' He hands me a file. A politician's face stares back.",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "💰 Accept eagerly", nextId: "slide6_politician_bait", type: "bad" },
            { text: "😰 Ask for time to think", nextId: "slide6_time_to_think", type: "neutral" },
            { text: "🕵️ Secretly record the meeting", nextId: "slide6_secret_record", type: "good" },
            { text: "🙏 Confess to a priest", nextId: "slide6_confess", type: "good" }
        ],
        nextId: "slide6_politician_bait"
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
    
    "slide5_complete_rehab": {
        id: "slide5_complete_rehab",
        speaker: "Maria",
        text: "'Congratulations, Leo. You're one of our success stories. What's next for you?'",
        background: "rehab_center",
        sprite: "maria",
        choices: [
            { text: "🕊️ Become a counselor", nextId: "ending_redemption", type: "good" },
            { text: "💪 Start a new business", nextId: "ending_new_life", type: "good" },
            { text: "🤝 Reconcile with family", nextId: "ending_family", type: "good" },
            { text: "📖 Write a book to help others", nextId: "ending_inspire", type: "good" }
        ],
        nextId: "ending_redemption"
    },
    
    "slide5_prove_actions": {
        id: "slide5_prove_actions",
        speaker: "Leo",
        text: "I get a job. I attend meetings. Every day, I send my daughter a message. 'Day 47 clean. I love you.'",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "🕊️ Rebuild trust completely", nextId: "ending_family", type: "good" },
            { text: "💪 Keep working on myself", nextId: "ending_new_life", type: "good" },
            { text: "📢 Share my story publicly", nextId: "ending_inspire", type: "good" },
            { text: "😞 Relapse after 6 months", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "ending_family"
    },
    
    // ========== ENDINGS (10-12 choices reached) ==========
    
    "ending_monster": {
        id: "ending_monster",
        speaker: "Narrator",
        text: "Leo became the new king of the underworld. Worse than Kael. He now controls the city through fear. The gambler became the devil. [EXTREME BAD: THE MONSTER]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "🔁 Restart", nextId: "start", type: "neutral" }],
        nextId: "start"
    },
    
    "ending_justice": {
        id: "ending_justice",
        speaker: "News Anchor",
        text: "Kael gets 200 years in prison. Leo becomes a national hero. He opens 50 recovery centers. Thousands of lives saved. [GOOD: JUSTICE]",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "🌟 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_redemption": {
        id: "ending_redemption",
        speaker: "Leo",
        text: "My daughter hugs me. 'Welcome home, Dad.' I've helped 500 addicts recover. My past doesn't define me. My choices do. [BEST: TRUE REDEMPTION]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "🕊️ Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I change my name. Start over in a quiet town. The past haunts my dreams, but I survive. Alone. [NEUTRAL: RUNAWAY]",
        background: "small_town",
        sprite: "leo_sad",
        choices: [{ text: "🌅 Play again", nextId: "start", type: "neutral" }],
        nextId: "start"
    },
    
    "ending_martyr": {
        id: "ending_martyr",
        speaker: "News Anchor",
        text: "Leo died taking down Kael. His evidence convicted 30 criminals. He's buried as a hero. [TRAGIC HERO: MARTYR]",
        background: "courtroom",
        sprite: "leo_angry",
        choices: [{ text: "🕯️ Play again", nextId: "start", type: "neutral" }],
        nextId: "start"
    },
    
    "ending_bad_soul": {
        id: "ending_bad_soul",
        speaker: "Narrator",
        text: "Leo overdoses in a casino bathroom. The slot machines keep ringing. No one notices. [DARK: LOST SOUL]",
        background: "void",
        sprite: "leo_sad",
        choices: [{ text: "🔁 Restart", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_inspire": {
        id: "ending_inspire",
        speaker: "Audience",
        text: "Leo's TED Talk 'From Gambler to Healer' gets 50 million views. He becomes a global speaker for addiction recovery. [GOOD: INSPIRATION]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📢 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_new_life": {
        id: "ending_new_life",
        speaker: "Leo",
        text: "I own a small bakery. It's not much. But every morning, I wake up without shame. [GOOD: NEW LIFE]",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [{ text: "🍞 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_family": {
        id: "ending_family",
        speaker: "Sarah",
        text: "'Welcome home, Dad.' I cry in her arms. The prodigal son returns. Some debts can be paid with love. [GOOD: FAMILY]",
        background: "small_town",
        sprite: "daughter",
        choices: [{ text: "🏠 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_relapse": {
        id: "ending_relapse",
        speaker: "Narrator",
        text: "Leo relapses. He loses everything again. This time, there's no one left to save him. [SAD: RELAPSE]",
        background: "casino_empty",
        sprite: "leo_sad",
        choices: [{ text: "🔁 Restart", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_kael_redemption": {
        id: "ending_kael_redemption",
        speaker: "Kael",
        text: "'You were right, Leo. I'm an addict too.' He turns himself in. Together, we start a recovery program in prison. [UNEXPECTED GOOD: REDEEMED ENEMY]",
        background: "support_group",
        sprite: "kael",
        choices: [{ text: "🌟 Play again", nextId: "start", type: "good" }],
        nextId: "start"
    }
};

// ============================================================
// GAME ENGINE
// ============================================================

let currentNodeId = "start";
let waitingForChoice = false;

const bgCanvas = document.getElementById("bgCanvas");
const portraitCanvas = document.getElementById("portraitCanvas");
const speakerDiv = document.getElementById("speakerName");
const messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

function generateBgURL(key) {
    let d = backgroundDrawers[key] || backgroundDrawers.default_bg;
    let c = document.createElement("canvas");
    c.width = 1280;
    c.height = 720;
    d(c.getContext("2d"), 1280, 720);
    return c.toDataURL();
}

function renderVisuals(node) {
    // Background
    let bg = new Image();
    bg.onload = () => {
        let ctx = bgCanvas.getContext("2d");
        bgCanvas.width = 1280;
        bgCanvas.height = 720;
        ctx.drawImage(bg, 0, 0);
    };
    bg.src = generateBgURL(node.background);
    
    // Portrait
    const portraitCtx = portraitCanvas.getContext("2d");
    drawPortrait(portraitCtx, node.sprite || "leo_neutral");
}

function renderChoices(choices) {
    choicesDiv.innerHTML = "";
    if(!choices || choices.length === 0) {
        choicesDiv.classList.add("hidden");
        return;
    }
    choicesDiv.classList.remove("hidden");
    choices.forEach(ch => {
        let btn = document.createElement("button");
        btn.className = "choice-btn";
        let badge = "";
        if(ch.type === "good") badge = "<span class='choice-badge badge-good'>✨ GOOD</span>";
        else if(ch.type === "bad") badge = "<span class='choice-badge badge-bad'>💀 BAD</span>";
        else if(ch.type === "neutral") badge = "<span class='choice-badge badge-neutral'>⚖️ NEUTRAL</span>";
        btn.innerHTML = ch.text + " " + badge;
        btn.onclick = () => {
            if(waitingForChoice) {
                incrementDecision();
                goToNode(ch.nextId);
            }
        };
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
    
    if(node.choices && node.choices.length > 0) {
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
            incrementDecision();
            goToNode(node.nextId);
        } else {
            goToNode("start");
        }
    }
}

function resetGame() {
    resetProgress();
    goToNode("start");
}

nextBtn.onclick = nextStep;
resetBtn.onclick = resetGame;

// Initialize
goToNode("start");