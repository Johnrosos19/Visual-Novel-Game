// ============================================================
// ALL IN - Gambling vs Businessman Visual Novel
// Complete with Working Backgrounds & Character Portraits
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
// BEAUTIFUL BACKGROUND DRAWING FUNCTIONS
// ============================================================

const backgroundDrawers = {
    // Casino at night - vibrant neon lights
    casino_night: (ctx, w, h) => {
        // Dark room
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, w, h);
        
        // Neon glow effect
        for(let i = 0; i < 20; i++) {
            ctx.fillStyle = `rgba(255, ${50 + i * 10}, 50, 0.2)`;
            ctx.fillRect(50 + i * 60, h - 120, 30, 100);
        }
        
        // Slot machines
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#2a2a3a";
            ctx.fillRect(80 + i * 140, h - 180, 100, 150);
            ctx.fillStyle = "#d4af37";
            ctx.fillRect(110 + i * 140, h - 150, 40, 40);
            ctx.fillStyle = "#ff4444";
            ctx.font = "28px monospace";
            ctx.fillText("🎰", 115 + i * 140, h - 120);
            // Screen glow
            ctx.fillStyle = "rgba(0,255,0,0.1)";
            ctx.fillRect(105 + i * 140, h - 145, 50, 30);
        }
        
        // Chandelier
        ctx.fillStyle = "#d4af37";
        ctx.beginPath();
        ctx.arc(w/2, 50, 35, 0, Math.PI * 2);
        ctx.fill();
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = `rgba(255, 200, 100, 0.7)`;
            ctx.beginPath();
            ctx.arc(w/2 + Math.cos(i * Math.PI/6) * 45, 50 + Math.sin(i * Math.PI/6) * 25, 6, 0, Math.PI * 2);
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
        ctx.ellipse(w/2, h/2, 450, 220, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Table border
        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 430, 200, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Cards on table
        const suits = ["♠", "♥", "♣", "♦"];
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(w/2 - 180 + i * 45, h/2 - 35, 35, 50);
            ctx.fillStyle = i % 2 === 0 ? "#cc0000" : "#000000";
            ctx.font = "26px monospace";
            ctx.fillText(suits[i % 4], w/2 - 170 + i * 45, h/2 + 5);
        }
        
        // Poker chips
        const chipColors = ["#ff4444", "#44ff44", "#d4af37", "#4444ff"];
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = chipColors[i % 4];
            ctx.beginPath();
            ctx.ellipse(w/2 - 250 + i * 25, h/2 + 60, 12, 6, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.ellipse(w/2 - 250 + i * 25, h/2 + 58, 4, 2, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Kael's dark office
    kael_office: (ctx, w, h) => {
        ctx.fillStyle = "#1a1a2a";
        ctx.fillRect(0, 0, w, h);
        
        // Wood paneling
        for(let i = 0; i < 10; i++) {
            ctx.fillStyle = "#3a2a1a";
            ctx.fillRect(0, i * 80, w, 5);
        }
        
        // Desk
        ctx.fillStyle = "#4a2a1a";
        ctx.fillRect(100, h - 200, w - 200, 80);
        ctx.fillStyle = "#2a1a0a";
        ctx.fillRect(100, h - 220, w - 200, 20);
        
        // Leather chair
        ctx.fillStyle = "#5a2a1a";
        ctx.fillRect(w - 180, h - 380, 120, 180);
        ctx.fillStyle = "#3a1a0a";
        ctx.fillRect(w - 170, h - 400, 100, 30);
        
        // Lamp light
        ctx.fillStyle = "rgba(255,200,100,0.2)";
        ctx.beginPath();
        ctx.ellipse(w - 100, h - 300, 80, 100, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Window with city skyline
        ctx.fillStyle = "#0a0a2a";
        ctx.fillRect(50, 50, 250, 180);
        for(let i = 0; i < 30; i++) {
            ctx.fillStyle = `rgba(255, 200, 100, ${0.3 + Math.random() * 0.5})`;
            ctx.fillRect(60 + Math.random() * 230, 60 + Math.random() * 160, 4, 4);
        }
        
        // Bookshelf
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = "#5a3a2a";
            ctx.fillRect(30 + i * 35, h - 350, 30, 150);
            for(let j = 0; j < 4; j++) {
                ctx.fillStyle = "#8b7355";
                ctx.fillRect(35 + i * 35, h - 340 + j * 30, 20, 25);
            }
        }
    },
    
    // Dark alleyway
    dark_alley: (ctx, w, h) => {
        ctx.fillStyle = "#0f0f12";
        ctx.fillRect(0, 0, w, h);
        
        // Brick walls
        ctx.fillStyle = "#3a2a2a";
        for(let i = 0; i < 15; i++) {
            ctx.fillRect(40, 40 + i * 45, 220, 35);
            ctx.fillRect(w - 260, 40 + i * 45, 220, 35);
        }
        
        // Brick pattern
        ctx.fillStyle = "#5a3a3a";
        for(let i = 0; i < 30; i++) {
            ctx.fillRect(50 + Math.random() * 200, 50 + Math.random() * 600, 15, 8);
            ctx.fillRect(w - 250 + Math.random() * 200, 50 + Math.random() * 600, 15, 8);
        }
        
        // Wet ground reflection
        ctx.fillStyle = "rgba(50,50,80,0.5)";
        ctx.fillRect(0, h - 100, w, 100);
        
        // Puddles with reflection
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "rgba(100,100,150,0.3)";
            ctx.beginPath();
            ctx.ellipse(100 + i * 150, h - 70, 40, 15, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Street lamp glow
        ctx.fillStyle = "rgba(255,200,100,0.25)";
        ctx.beginPath();
        ctx.ellipse(300, h - 180, 100, 120, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(295, h - 220, 10, 70);
        ctx.fillStyle = "#ffdd88";
        ctx.beginPath();
        ctx.arc(300, h - 225, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Dumpster
        ctx.fillStyle = "#4a5a4a";
        ctx.fillRect(w - 150, h - 120, 100, 70);
        ctx.fillStyle = "#3a4a3a";
        ctx.fillRect(w - 145, h - 130, 90, 15);
    },
    
    // Evidence room / FBI office
    evidence_room: (ctx, w, h) => {
        ctx.fillStyle = "#2b2b2b";
        ctx.fillRect(0, 0, w, h);
        
        // Fluorescent lights
        for(let i = 0; i < 4; i++) {
            ctx.fillStyle = "rgba(200,200,255,0.15)";
            ctx.fillRect(100 + i * 300, 0, 200, 30);
        }
        
        // Filing cabinets
        for(let i = 0; i < 4; i++) {
            ctx.fillStyle = "#4a4a5a";
            ctx.fillRect(50 + i * 140, 100, 110, 450);
            for(let j = 0; j < 5; j++) {
                ctx.fillStyle = "#6a6a7a";
                ctx.fillRect(65 + i * 140, 120 + j * 85, 80, 60);
                ctx.fillStyle = "#d4af37";
                ctx.fillRect(100 + i * 140, 135 + j * 85, 10, 10);
            }
        }
        
        // Evidence board
        ctx.fillStyle = "#8b7355";
        ctx.fillRect(w - 320, 80, 280, 350);
        ctx.fillStyle = "#a08060";
        ctx.fillRect(w - 315, 85, 270, 340);
        
        // Photos on board
        for(let i = 0; i < 6; i++) {
            ctx.fillStyle = "#ddd";
            ctx.fillRect(w - 300 + (i % 3) * 90, 100 + Math.floor(i / 3) * 100, 70, 80);
            ctx.fillStyle = "#999";
            ctx.fillRect(w - 285 + (i % 3) * 90, 115 + Math.floor(i / 3) * 100, 40, 50);
            // Red string connections
            ctx.beginPath();
            ctx.moveTo(w - 265, 140);
            ctx.lineTo(w - 200, 250);
            ctx.strokeStyle = "#ff4444";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Desk with computer
        ctx.fillStyle = "#5a4a3a";
        ctx.fillRect(300, h - 150, 200, 80);
        ctx.fillStyle = "#333";
        ctx.fillRect(340, h - 200, 120, 50);
        ctx.fillStyle = "#44ff44";
        ctx.fillRect(380, h - 195, 40, 40);
    },
    
    // Luxury office (Kael's throne room)
    luxury_office: (ctx, w, h) => {
        ctx.fillStyle = "#3a2a1a";
        ctx.fillRect(0, 0, w, h);
        
        // Marble floor pattern
        for(let i = 0; i < 12; i++) {
            for(let j = 0; j < 8; j++) {
                ctx.fillStyle = (i + j) % 2 === 0 ? "#4a3a2a" : "#5a4a3a";
                ctx.fillRect(i * 110, h - 100 + j * 13, 110, 13);
            }
        }
        
        // Floor-to-ceiling windows
        ctx.fillStyle = "#1a3a5a";
        ctx.fillRect(w - 400, 30, 350, 450);
        
        // City skyline
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = `rgba(255, 200, 100, ${0.4 + Math.random() * 0.4})`;
            ctx.fillRect(w - 380 + i * 30, 400 - i * 12, 18, 120);
        }
        
        // Stars in sky
        for(let i = 0; i < 50; i++) {
            ctx.fillStyle = `rgba(255,255,200,${Math.random() * 0.5})`;
            ctx.fillRect(w - 380 + Math.random() * 330, 50 + Math.random() * 200, 2, 2);
        }
        
        // Mahogany desk
        ctx.fillStyle = "#5a3a2a";
        ctx.fillRect(80, h - 200, 450, 90);
        ctx.fillStyle = "#3a1a0a";
        ctx.fillRect(80, h - 215, 450, 15);
        
        // Luxury chair (throne-like)
        ctx.fillStyle = "#8B0000";
        ctx.fillRect(450, h - 380, 130, 180);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(475, h - 400, 80, 35);
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = "#d4af37";
            ctx.fillRect(460 + i * 25, h - 370, 5, 20);
        }
        
        // Crystal chandelier
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#d4af37";
            ctx.beginPath();
            ctx.arc(w/2 + i * 40 - 160, 70, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "rgba(255,255,200,0.5)";
            ctx.beginPath();
            ctx.arc(w/2 + i * 40 - 160, 70, 12, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    // Church interior
    church: (ctx, w, h) => {
        ctx.fillStyle = "#4a3e6e";
        ctx.fillRect(0, 0, w, h);
        
        // Stained glass window
        const colors = ["#ff4444", "#4444ff", "#44ff44", "#ffff44", "#ff44ff", "#44ffff"];
        for(let i = 0; i < 6; i++) {
            ctx.fillStyle = colors[i % colors.length];
            ctx.fillRect(w/2 - 120 + i * 40, 60, 35, 180);
        }
        
        ctx.fillStyle = "#2a1a0a";
        ctx.fillRect(w/2 - 30, 240, 60, 250);
        
        // Cross on altar
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(w/2 - 8, 250, 16, 80);
        ctx.fillRect(w/2 - 30, 270, 60, 16);
        
        // Pew rows
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#5a3a2a";
            ctx.fillRect(80 + i * 140, h - 160, 110, 45);
            ctx.fillStyle = "#6a4a3a";
            ctx.fillRect(85 + i * 140, h - 155, 100, 35);
        }
        
        // Candle glow
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = `rgba(255, 150, 50, 0.4)`;
            ctx.beginPath();
            ctx.arc(100 + i * 100, h - 220, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ffaa44";
            ctx.fillRect(95 + i * 100, h - 235, 10, 25);
        }
        
        // Votive candles
        for(let i = 0; i < 20; i++) {
            ctx.fillStyle = `rgba(255,100,50,${0.3 + Math.random() * 0.5})`;
            ctx.fillRect(w - 200 + (i % 10) * 15, h - 100 - Math.floor(i / 10) * 40, 5, 30);
        }
    },
    
    // Support group circle
    support_group: (ctx, w, h) => {
        ctx.fillStyle = "#e8dcc8";
        ctx.fillRect(0, 0, w, h);
        
        // Wall texture
        for(let i = 0; i < 50; i++) {
            ctx.fillStyle = `rgba(100,80,60,${Math.random() * 0.1})`;
            ctx.fillRect(Math.random() * w, Math.random() * h, 10, 10);
        }
        
        // Circle of chairs
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const x = w/2 + Math.cos(angle) * 220;
            const y = h/2 + Math.sin(angle) * 130;
            ctx.fillStyle = "#8b7355";
            ctx.fillRect(x - 35, y - 35, 70, 70);
            ctx.fillStyle = "#6a5a4a";
            ctx.fillRect(x - 25, y - 50, 50, 25);
            // Person silhouette
            ctx.fillStyle = "#4a3a2a";
            ctx.beginPath();
            ctx.arc(x, y - 20, 18, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Center rug
        ctx.fillStyle = "#b8860b";
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 180, 100, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#d4af37";
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 160, 80, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Window with sunlight
        ctx.fillStyle = "#87ceeb";
        ctx.fillRect(w - 220, 40, 180, 220);
        ctx.fillStyle = "#d4af37";
        for(let i = 0; i < 20; i++) {
            ctx.fillRect(w - 210 + i * 9, 50 + i * 11, 4, 8);
        }
        
        // Sunlight beam
        ctx.fillStyle = "rgba(255,255,200,0.1)";
        ctx.beginPath();
        ctx.moveTo(w - 220, 260);
        ctx.lineTo(w - 40, h);
        ctx.lineTo(w, h);
        ctx.lineTo(w - 180, 260);
        ctx.fill();
    },
    
    // Courtroom
    courtroom: (ctx, w, h) => {
        ctx.fillStyle = "#8b7355";
        ctx.fillRect(0, 0, w, h);
        
        // Wood paneling
        for(let i = 0; i < 8; i++) {
            ctx.fillStyle = "#6a5a4a";
            ctx.fillRect(0, i * 100, w, 3);
        }
        
        // Judge's bench
        ctx.fillStyle = "#5a3a2a";
        ctx.fillRect(w/2 - 180, 30, 360, 180);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(w/2 - 130, 50, 260, 60);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 24px monospace";
        ctx.fillText("JUDGE", w/2 - 45, 95);
        
        // American flag
        ctx.fillStyle = "#cc0000";
        ctx.fillRect(w - 180, 30, 120, 200);
        for(let i = 0; i < 13; i++) {
            ctx.fillStyle = i % 2 === 0 ? "#ffffff" : "#cc0000";
            ctx.fillRect(w - 180, 40 + i * 15, 120, 7);
        }
        ctx.fillStyle = "#000066";
        ctx.fillRect(w - 180, 30, 60, 60);
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 6; j++) {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(w - 170 + i * 6, 38 + j * 6, 3, 3);
            }
        }
        
        // Jury box
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = "#7a6a5a";
            ctx.fillRect(40 + i * 65, 220, 55, 90);
            ctx.fillStyle = "#9a8a7a";
            ctx.fillRect(45 + i * 65, 225, 45, 80);
            // Juror silhouette
            ctx.fillStyle = "#3a2a2a";
            ctx.beginPath();
            ctx.arc(67 + i * 65, 260, 15, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Defendant table
        ctx.fillStyle = "#5a3a2a";
        ctx.fillRect(w/2 - 100, h - 180, 200, 60);
        
        // Audience gallery
        for(let i = 0; i < 20; i++) {
            ctx.fillStyle = "#3a3a4a";
            ctx.fillRect(100 + i * 50, h - 100, 40, 70);
            ctx.fillStyle = "#d0c0a0";
            ctx.beginPath();
            ctx.arc(120 + i * 50, h - 115, 14, 0, Math.PI * 2);
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
        for(let i = 0; i < 12; i++) {
            ctx.fillStyle = `rgba(255,215,0,${0.3 - i * 0.02})`;
            ctx.beginPath();
            ctx.arc(100, 80, 65 + i * 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Clouds
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.beginPath();
        ctx.ellipse(300, 70, 60, 35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(350, 60, 50, 30, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(800, 90, 70, 40, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Houses
        const houseColors = ["#e8a87c", "#c38d6b", "#b87b5a", "#d4a373", "#e9c46a"];
        for(let i = 0; i < 6; i++) {
            ctx.fillStyle = houseColors[i % houseColors.length];
            ctx.fillRect(80 + i * 180, h - 180, 130, 110);
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(115 + i * 180, h - 220, 60, 50);
            // Windows
            ctx.fillStyle = "#87ceeb";
            ctx.fillRect(100 + i * 180, h - 160, 30, 40);
            ctx.fillRect(160 + i * 180, h - 160, 30, 40);
            // Door
            ctx.fillStyle = "#5a3a2a";
            ctx.fillRect(130 + i * 180, h - 120, 30, 50);
        }
        
        // Trees
        for(let i = 0; i < 10; i++) {
            ctx.fillStyle = "#2d6a4f";
            ctx.beginPath();
            ctx.arc(50 + i * 140, h - 210, 35, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#1a4a2a";
            ctx.beginPath();
            ctx.arc(45 + i * 140, h - 225, 25, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(45 + i * 140, h - 180, 10, 50);
        }
        
        // Road
        ctx.fillStyle = "#555";
        ctx.fillRect(0, h - 100, w, 100);
        ctx.fillStyle = "#ffdd88";
        for(let i = 0; i < 20; i++) {
            ctx.fillRect(30 + i * 65, h - 55, 20, 8);
        }
        
        // Welcome sign
        ctx.fillStyle = "#5a3a2a";
        ctx.fillRect(30, 150, 120, 10);
        ctx.fillRect(80, 100, 10, 60);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(25, 140, 130, 40);
        ctx.fillStyle = "#000";
        ctx.font = "14px monospace";
        ctx.fillText("WELCOME", 55, 165);
    },
    
    // Void / empty ending
    void: (ctx, w, h) => {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, w, h);
        
        // Fading particles
        for(let i = 0; i < 150; i++) {
            ctx.fillStyle = `rgba(100, 100, 150, ${Math.random() * 0.4})`;
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Spiral effect
        for(let i = 0; i < 20; i++) {
            ctx.fillStyle = `rgba(150,100,200,${0.05 * i})`;
            ctx.beginPath();
            ctx.arc(w/2, h/2, 50 + i * 20, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.fillStyle = "#333";
        ctx.font = "50px monospace";
        ctx.fillText("⚫", w/2 - 25, h/2);
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
// DETAILED CHARACTER PORTRAIT DRAWING FUNCTIONS
// ============================================================

function drawPortrait(ctx, characterId) {
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
    
    // Helper to draw face
    function drawFace(skinTone, eyeType, mouthType, hairColor, accessory = "") {
        // Skin
        ctx.fillStyle = skinTone;
        ctx.beginPath();
        ctx.ellipse(w/2, h/2, 100, 110, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes
        if(eyeType === "sad") {
            ctx.fillStyle = "#1a1a2a";
            ctx.beginPath();
            ctx.arc(w/2-35, h/2-20, 14, 0, Math.PI * 2);
            ctx.arc(w/2+35, h/2-20, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(w/2-39, h/2-24, 5, 0, Math.PI * 2);
            ctx.arc(w/2+31, h/2-24, 5, 0, Math.PI * 2);
            ctx.fill();
            // Sad eyebrows
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
            // Evil eyebrows
            ctx.beginPath();
            ctx.moveTo(w/2-55, h/2-48);
            ctx.lineTo(w/2-25, h/2-42);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w/2+25, h/2-42);
            ctx.lineTo(w/2+55, h/2-48);
            ctx.stroke();
        } else if(eyeType === "smile") {
            ctx.fillStyle = "#1a1a2a";
            ctx.beginPath();
            ctx.arc(w/2-35, h/2-20, 14, 0, Math.PI * 2);
            ctx.arc(w/2+35, h/2-20, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(w/2-39, h/2-24, 6, 0, Math.PI * 2);
            ctx.arc(w/2+31, h/2-24, 6, 0, Math.PI * 2);
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
            ctx.font = "38px monospace";
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
            "debtor": "VICTOR ROSS",
            "politician": "SENATOR HAYES",
            "agent": "AGENT WILLIAMS",
            "young_man": "JOSHUA",
            "daughter": "SARAH"
        };
        nameTag.innerText = names[characterId] || characterId.toUpperCase();
    }
}

// ============================================================
// COMPLETE GAME DATA
// ============================================================

const gameData = {
    "start": {
        id: "start",
        speaker: "Leo",
        text: "The casino lights flicker like dying stars. I've lost everything tonight—my savings, my dignity, my family. A man in a black suit sits across from me. 'Leo,' he says, 'I know a way out.'",
        background: "casino_night",
        sprite: "leo_sad",
        choices: [
            { text: "💀 'I'll do anything' (Extreme Bad)", nextId: "bad_path_1", type: "bad" },
            { text: "💰 'What's the catch?'", nextId: "neutral_path_1", type: "neutral" },
            { text: "❓ 'Who sent you?'", nextId: "curious_path_1", type: "neutral" },
            { text: "🙏 'I need help' (Extreme Good)", nextId: "good_path_1", type: "good" }
        ],
        nextId: "bad_path_1"
    },
    
    "bad_path_1": {
        id: "bad_path_1",
        speaker: "Kael",
        text: "'Welcome to my world. First rule: loyalty above all. Second: never gamble with my money.' He slides a gun across the table. 'Your first test is tonight. A man named Victor owes me. Make him pay.'",
        background: "kael_office",
        sprite: "kael_evil",
        choices: [
            { text: "🔫 'I'll break his legs'", nextId: "bad_collect_1", type: "bad" },
            { text: "😰 'What if he can't pay?'", nextId: "bad_hesitate", type: "bad" },
            { text: "💀 'I'll do worse than that'", nextId: "bad_extreme", type: "bad" },
            { text: "🙅 'I can't hurt people'", nextId: "good_path_1", type: "good" }
        ],
        nextId: "bad_collect_1"
    },
    
    "bad_collect_1": {
        id: "bad_collect_1",
        speaker: "Victor",
        text: "'Please... my daughter needs surgery. I took the money for her.' He shows me a photo of a little girl with pigtails. My hands shake. The gun feels heavy.",
        background: "dark_alley",
        sprite: "debtor",
        choices: [
            { text: "💀 'I don't care about your daughter'", nextId: "bad_cruel", type: "bad" },
            { text: "🔪 Break his arm as a warning", nextId: "bad_violent", type: "bad" },
            { text: "📝 'Let me talk to Kael'", nextId: "neutral_payment", type: "neutral" },
            { text: "🏃 'Run. Take your daughter and leave.'", nextId: "good_let_go", type: "good" }
        ],
        nextId: "bad_cruel"
    },
    
    "bad_cruel": {
        id: "bad_cruel",
        speaker: "Leo",
        text: "I slam his head against the table. Blood drips onto the photo. He signs over everything. As I walk out, I hear him sobbing. That night, I can't sleep. The sobs echo in my skull.",
        background: "dark_alley",
        sprite: "leo_evil",
        choices: [
            { text: "💰 Celebrate with Kael's money", nextId: "bad_celebrate", type: "bad" },
            { text: "🍺 Drink until I forget", nextId: "bad_drink", type: "bad" },
            { text: "🕊️ Send anonymous donation", nextId: "good_donation", type: "good" },
            { text: "📞 Call a hotline for help", nextId: "good_path_1", type: "good" }
        ],
        nextId: "bad_celebrate"
    },
    
    "bad_celebrate": {
        id: "bad_celebrate",
        speaker: "Kael",
        text: "'Impressive. You're crueler than I expected. Here's $50,000. Your next target is bigger.' He hands me a file. A senator's face stares back. 'Get dirt on him. His family is his weakness.'",
        background: "luxury_office",
        sprite: "kael_evil",
        choices: [
            { text: "📸 'I'll ruin him'", nextId: "bad_politician", type: "bad" },
            { text: "🕵️ 'I need more time'", nextId: "bad_more_time", type: "bad" },
            { text: "💰 'Double the price'", nextId: "bad_greed", type: "bad" },
            { text: "🙏 'I want out'", nextId: "good_path_1", type: "good" }
        ],
        nextId: "bad_politician"
    },
    
    "bad_politician": {
        id: "bad_politician",
        speaker: "Leo",
        text: "I follow Senator Hayes for a week. He's just like me—a gambler hiding behind a perfect smile. I get photos of him at the casino, with a woman who isn't his wife. Kael laughs when I hand them over. 'Beautiful. Now we own him.'",
        background: "casino_table",
        sprite: "politician",
        choices: [
            { text: "💀 Destroy him publicly", nextId: "ending_monster", type: "bad" },
            { text: "💰 Blackmail him for more money", nextId: "ending_empty_throne", type: "bad" },
            { text: "📢 Leak the photos yourself", nextId: "ending_martyr", type: "neutral" },
            { text: "🔥 Burn the photos and walk away", nextId: "good_redemption_start", type: "good" }
        ],
        nextId: "ending_monster"
    },
    
    "good_path_1": {
        id: "good_path_1",
        speaker: "Father Michael",
        text: "The church smells of incense and old wood. I kneel in the last pew, not sure if I'm praying or just hiding. An old priest sits beside me. 'You look like a man carrying a mountain, my son.' I tell him everything—the gambling, the debt, Kael's offer. He listens without judgment.",
        background: "church",
        sprite: "priest",
        choices: [
            { text: "🙏 'Help me change'", nextId: "good_rehab", type: "good" },
            { text: "💪 'I want to go to rehab'", nextId: "good_rehab_center", type: "good" },
            { text: "❤️ 'Is there anyone who understands?'", nextId: "good_meet_elena", type: "good" },
            { text: "😞 'I'm not sure I can'", nextId: "good_doubt", type: "neutral" }
        ],
        nextId: "good_rehab"
    },
    
    "good_rehab": {
        id: "good_rehab",
        speaker: "Maria",
        text: "The rehab center is plain but clean. A counselor named Maria has kind eyes. 'We've all hit rock bottom,' she says. 'The question is: will you climb back up?' For the first time in years, I nod. 'I want to try.'",
        background: "rehab_center",
        sprite: "maria",
        choices: [
            { text: "💪 Commit to 90 days", nextId: "good_90_days", type: "good" },
            { text: "🕊️ Join a support group", nextId: "good_support_group", type: "good" },
            { text: "📞 Call my daughter", nextId: "good_call_daughter", type: "good" },
            { text: "🏃 Leave after one day", nextId: "bad_path_1", type: "bad" }
        ],
        nextId: "good_90_days"
    },
    
    "good_90_days": {
        id: "good_90_days",
        speaker: "Leo",
        text: "Ninety days. No gambling. No Kael. I get a job at a diner—minimum wage, grease burns on my arms, but honest work. On day 87, Kael finds me. 'You think you can hide? You owe me.' But I stand my ground. 'I owe you nothing. I'm done.'",
        background: "small_town",
        sprite: "leo_neutral",
        choices: [
            { text: "🛡️ 'Call the police. I have evidence.'", nextId: "good_justice", type: "good" },
            { text: "💪 Focus on my recovery", nextId: "good_continue_recovery", type: "good" },
            { text: "❤️ Rebuild with my family", nextId: "good_family", type: "good" },
            { text: "😞 Relapse under pressure", nextId: "ending_relapse", type: "bad" }
        ],
        nextId: "good_justice"
    },
    
    "good_justice": {
        id: "good_justice",
        speaker: "Agent Williams",
        text: "'This is huge, Leo. The evidence you've gathered—it's enough to put Kael away for life. But we need you to testify. It's dangerous. He has connections everywhere.'",
        background: "evidence_room",
        sprite: "agent",
        choices: [
            { text: "🛡️ 'I'll do it. It's time to end this.'", nextId: "ending_justice", type: "good" },
            { text: "🙏 'Protect my family first'", nextId: "ending_redemption", type: "good" },
            { text: "😰 'I'm scared. Give me time.'", nextId: "good_doubt", type: "neutral" },
            { text: "💰 'What's in it for me?'", nextId: "neutral_path_1", type: "neutral" }
        ],
        nextId: "ending_justice"
    },
    
    "good_call_daughter": {
        id: "good_call_daughter",
        speaker: "Sarah",
        text: "'Dad? Is that really you?' Her voice cracks. 'I thought you were dead.' Tears stream down my face. 'I'm in recovery, sweetheart. I'm trying to be better.' Silence. Then crying. 'I want to see you.'",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🤝 'Visit me this weekend'", nextId: "good_family_reunion", type: "good" },
            { text: "💪 'Give me 30 more days'", nextId: "good_continue_recovery", type: "good" },
            { text: "💰 'I'll send you money'", nextId: "neutral_payment", type: "neutral" },
            { text: "😞 'I'm not ready'", nextId: "good_doubt", type: "bad" }
        ],
        nextId: "good_family_reunion"
    },
    
    "good_family_reunion": {
        id: "good_family_reunion",
        speaker: "Sarah",
        text: "She shows up with sunflowers. 'Mom said I shouldn't come. She said you'd disappoint me again.' I hug her, and she doesn't pull away. 'I won't,' I whisper. 'I promise.' We spend the day at the park. For a few hours, I forget about everything. I'm just a dad.",
        background: "small_town",
        sprite: "daughter",
        choices: [
            { text: "🕊️ Make amends with your ex-wife", nextId: "ending_family", type: "good" },
            { text: "💪 Keep focusing on recovery", nextId: "ending_redemption", type: "good" },
            { text: "📢 Share your story to help others", nextId: "ending_inspire", type: "good" },
            { text: "😞 Break down and confess everything", nextId: "good_justice", type: "neutral" }
        ],
        nextId: "ending_family"
    },
    
    "neutral_path_1": {
        id: "neutral_path_1",
        speaker: "Leo",
        text: "'What's the catch?' Kael smiles. 'Everything has a price. Yours is your soul. But I pay well. Fifty thousand for your first job. More after that.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💰 'Show me the money'", nextId: "bad_path_1", type: "bad" },
            { text: "🕵️ 'I'll think about it'", nextId: "neutral_investigate", type: "neutral" },
            { text: "🙏 'I can't do this'", nextId: "good_path_1", type: "good" },
            { text: "🤝 'Let me work legally for you'", nextId: "neutral_legal", type: "neutral" }
        ],
        nextId: "neutral_investigate"
    },
    
    "neutral_investigate": {
        id: "neutral_investigate",
        speaker: "Leo",
        text: "I pretend to accept. But every night, I document everything. Kael's operations. His contacts. His crimes. I don't know what I'll do with the information yet, but I want options.",
        background: "evidence_room",
        sprite: "leo_neutral",
        choices: [
            { text: "📁 'Go to the FBI'", nextId: "good_justice", type: "good" },
            { text: "💰 'Sell the evidence to Kael's rival'", nextId: "ending_empty_throne", type: "bad" },
            { text: "🔥 'Burn it and walk away'", nextId: "ending_runaway", type: "neutral" },
            { text: "📢 'Leak it to the press'", nextId: "ending_justice", type: "good" }
        ],
        nextId: "good_justice"
    },
    
    "curious_path_1": {
        id: "curious_path_1",
        speaker: "Kael",
        text: "'Who am I? I'm the man who owns this city's underworld. Gamblers like you are my favorite prey. But I'm offering you a seat at my table. Take it or leave it.'",
        background: "kael_office",
        sprite: "kael",
        choices: [
            { text: "💀 'I'm in'", nextId: "bad_path_1", type: "bad" },
            { text: "🕵️ 'Let me research you first'", nextId: "neutral_investigate", type: "neutral" },
            { text: "🙏 'I choose recovery'", nextId: "good_path_1", type: "good" },
            { text: "📢 'I'll expose you'", nextId: "good_justice", type: "good" }
        ],
        nextId: "neutral_investigate"
    },
    
    // ========== ENDINGS ==========
    
    "ending_monster": {
        id: "ending_monster",
        speaker: "Narrator",
        text: "Leo became the new king of the underworld. Worse than Kael ever was. He now controls the city through fear. The gambler who had nothing now has everything—and it's still not enough. [EXTREME BAD ENDING: THE MONSTER]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "💀 Play Again", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_empty_throne": {
        id: "ending_empty_throne",
        speaker: "Leo",
        text: "I sit in Kael's chair. The view is beautiful. Millions in the bank. But I feel nothing. The emptiness is louder than any slot machine. I won everything... and lost my soul. [BAD ENDING: THE EMPTY THRONE]",
        background: "luxury_office",
        sprite: "leo_evil",
        choices: [{ text: "👑 Play Again", nextId: "start", type: "bad" }],
        nextId: "start"
    },
    
    "ending_justice": {
        id: "ending_justice",
        speaker: "News Anchor",
        text: "In a historic trial, Kael is convicted on 47 counts. Leo Marino, once a broke gambler, is hailed as a hero. He opens a chain of recovery centers called 'The Second Deal.' Thousands of lives saved. [GOOD ENDING: JUSTICE]",
        background: "courtroom",
        sprite: "leo_neutral",
        choices: [{ text: "⚖️ Play Again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_redemption": {
        id: "ending_redemption",
        speaker: "Leo",
        text: "I stand at the podium, looking at a room full of strangers. 'My name is Leo, and I'm a recovering gambler.' They applaud. I've been clean for five years. I run a recovery center. The casino lights no longer call to me. [BEST ENDING: TRUE REDEMPTION]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "🌟 Play Again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_family": {
        id: "ending_family",
        speaker: "Sarah",
        text: "Dad walks me down the aisle. Not for my wedding—for his five-year sobriety chip ceremony. 'I'm proud of you,' I whisper. He cries. After the ceremony, we go to the diner where he used to work. He owns it now. [GOOD ENDING: FAMILY]",
        background: "small_town",
        sprite: "daughter",
        choices: [{ text: "🏠 Play Again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_inspire": {
        id: "ending_inspire",
        speaker: "Audience",
        text: "Leo's TED Talk 'From Gambler to Healer' goes viral. Fifty million views. He becomes a global speaker for addiction recovery. His story saves thousands of lives. [GOOD ENDING: INSPIRATION]",
        background: "support_group",
        sprite: "leo_neutral",
        choices: [{ text: "📢 Play Again", nextId: "start", type: "good" }],
        nextId: "start"
    },
    
    "ending_runaway": {
        id: "ending_runaway",
        speaker: "Leo",
        text: "I change my name. Start over in a small town. No one knows my past. I work at a gas station. Every night, I dream of slot machines. But every morning, I wake up free. [NEUTRAL ENDING: RUNAWAY]",
        background: "small_town",
        sprite: "leo_sad",
        choices: [{ text: "🌅 Play Again", nextId: "start", type: "neutral" }],
        nextId: "start"
    },
    
    "ending_martyr": {
        id: "ending_martyr",
        speaker: "News Anchor",
        text: "Leo died taking down Kael's empire. His evidence convicted 30 criminals. He's buried as a hero. His daughter leaves sunflowers on his grave every Sunday. [TRAGIC ENDING: THE MARTYR]",
        background: "courtroom",
        sprite: "leo_angry",
        choices: [{ text: "🕯️ Play Again", nextId: "start", type: "neutral" }],
        nextId: "start"
    },
    
    "ending_relapse": {
        id: "ending_relapse",
        speaker: "Narrator",
        text: "Leo relapses. He loses everything again. This time, there's no one left to save him. The slot machines keep ringing. No one notices. [SAD ENDING: RELAPSE]",
        background: "casino_empty",
        sprite: "leo_sad",
        choices: [{ text: "💔 Play Again", nextId: "start", type: "bad" }],
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
    // Draw background
    let bg = new Image();
    bg.onload = () => {
        let ctx = bgCanvas.getContext("2d");
        bgCanvas.width = 1280;
        bgCanvas.height = 720;
        ctx.drawImage(bg, 0, 0);
    };
    bg.src = generateBgURL(node.background);
    
    // Draw character portrait
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
    
    // Animation
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

// Event listeners
nextBtn.onclick = nextStep;
resetBtn.onclick = resetGame;

// Initialize
goToNode("start");