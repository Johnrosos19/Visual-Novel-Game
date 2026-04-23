// ============================================================
// ALL IN - Gambling vs Businessman
// FINAL EDITION: Longer dialogue, no progress bar, enhanced backgrounds
// ============================================================

// ========== ENHANCED BACKGROUND DRAWINGS (Rich, Scenario-Matched) ==========
const backgroundDrawers = {
    casino_night: (ctx, w, h) => {
        ctx.fillStyle = "#0a0a0a"; ctx.fillRect(0,0,w,h);
        // Neon glow
        for(let i=0;i<30;i++) { ctx.fillStyle = `rgba(255,50,50,${0.2+Math.sin(Date.now()/500+i)*0.1})`; ctx.fillRect(50+i*40, h-100, 20, 80); }
        for(let i=0;i<12;i++) { ctx.fillStyle = "#2a2a3a"; ctx.fillRect(80+i*100, h-180, 70, 120); ctx.fillStyle = "#d4af37"; ctx.fillRect(100+i*100, h-150, 30, 30); ctx.fillStyle = "#fff"; ctx.font = "22px monospace"; ctx.fillText("🎰", 105+i*100, h-130); }
        ctx.fillStyle = "rgba(255,200,100,0.4)"; ctx.beginPath(); ctx.arc(w/2, 60, 40, 0, Math.PI*2); ctx.fill();
        for(let i=0;i<100;i++) { ctx.fillStyle = `rgba(200,180,150,${Math.random()*0.1})`; ctx.fillRect(Math.random()*w, Math.random()*h, 2, 2); }
    },
    kael_office: (ctx, w, h) => {
        ctx.fillStyle = "#151520"; ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#3a2a1a"; ctx.fillRect(80, h-200, w-160, 100);
        ctx.fillStyle = "#2a1a0a"; ctx.fillRect(w-180, h-350, 140, 150);
        ctx.fillStyle = "#d4af37"; ctx.fillRect(w-130, h-400, 10, 50); ctx.beginPath(); ctx.arc(w-125, h-410, 25, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#0a0a2a"; ctx.fillRect(40, 40, 200, 150);
        for(let i=0;i<40;i++) { ctx.fillStyle = `rgba(255,200,100,${Math.random()*0.6})`; ctx.fillRect(50+Math.random()*180, 50+Math.random()*130, 3, 3); }
        ctx.fillStyle = "rgba(80,70,60,0.5)"; for(let i=0;i<20;i++) { ctx.beginPath(); ctx.arc(w-150+i*8, h-220-i*6, 8-i*0.3, 0, Math.PI*2); ctx.fill(); }
    },
    dark_alley: (ctx, w, h) => {
        ctx.fillStyle = "#0a0a0f"; ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#3a2a2a"; for(let i=0;i<12;i++) { ctx.fillRect(40, 60+i*45, 180, 30); ctx.fillRect(w-220, 60+i*45, 180, 30); }
        ctx.fillStyle = "rgba(40,40,70,0.5)"; ctx.fillRect(0, h-100, w, 100);
        ctx.fillStyle = "rgba(255,180,80,0.25)"; ctx.beginPath(); ctx.arc(250, h-130, 100, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#d4af37"; ctx.fillRect(245, h-180, 10, 60);
        for(let i=0;i<3;i++) { ctx.fillStyle = "#ffaa44"; ctx.fillRect(150+i*200, h-90, 80, 2); }
    },
    evidence_room: (ctx, w, h) => {
        ctx.fillStyle = "#2a2a2a"; ctx.fillRect(0,0,w,h);
        for(let i=0;i<5;i++) { ctx.fillStyle = "#4a4a5a"; ctx.fillRect(40+i*130, 100, 110, 400); for(let j=0;j<4;j++) { ctx.fillStyle = "#6a6a7a"; ctx.fillRect(55+i*130, 130+j*90, 80, 40); } }
        ctx.fillStyle = "#8b7355"; ctx.fillRect(w-320, 80, 280, 350);
        for(let i=0;i<6;i++) { ctx.fillStyle = "#aaa"; ctx.fillRect(w-300+i*50, 110, 40, 50); ctx.beginPath(); ctx.moveTo(w-280+i*50, 160); ctx.lineTo(w-180, 380); ctx.strokeStyle = "#ff4444"; ctx.lineWidth = 2; ctx.stroke(); }
        ctx.fillStyle = "#ff4444"; ctx.font = "bold 20px monospace"; ctx.fillText("CONFIDENTIAL", w-250, 70);
    },
    luxury_office: (ctx, w, h) => {
        ctx.fillStyle = "#2a1a0a"; ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#1a3a5a"; ctx.fillRect(w-380, 40, 340, 450);
        for(let i=0;i<18;i++) { ctx.fillStyle = `rgba(255,200,100,${0.4+Math.random()*0.4})`; ctx.fillRect(w-360+i*22, 300-i*12, 12, 140); }
        ctx.fillStyle = "#5a3a2a"; ctx.fillRect(80, h-200, 450, 90);
        ctx.fillStyle = "#8B0000"; ctx.fillRect(480, h-380, 120, 180); ctx.fillStyle = "#d4af37"; ctx.fillRect(510, h-400, 60, 30);
        for(let i=0;i<10;i++) { ctx.fillStyle = "#d4af37"; ctx.beginPath(); ctx.arc(w/2-150+i*35, 70, 8, 0, Math.PI*2); ctx.fill(); }
    },
    church: (ctx, w, h) => {
        ctx.fillStyle = "#4a3e6e"; ctx.fillRect(0,0,w,h);
        for(let i=0;i<5;i++) { ctx.fillStyle = ["#ff4444","#4444ff","#44ff44","#ffff44","#ff44ff"][i%5]; ctx.fillRect(w/2-120+i*60, 80, 50, 160); }
        ctx.fillStyle = "#d4af37"; ctx.fillRect(w/2-35, 240, 70, 220);
        for(let i=0;i<8;i++) { ctx.fillStyle = "#5a3a2a"; ctx.fillRect(80+i*150, h-160, 130, 50); }
        for(let i=0;i<12;i++) { ctx.fillStyle = `rgba(255,150,50,${0.3+Math.sin(Date.now()/400+i)*0.2})`; ctx.beginPath(); ctx.arc(130+i*100, h-210, 18, 0, Math.PI*2); ctx.fill(); }
    },
    support_group: (ctx, w, h) => {
        ctx.fillStyle = "#e8dcc8"; ctx.fillRect(0,0,w,h);
        for(let i=0;i<10;i++) { let a = (i/10)*Math.PI*2; let x = w/2+Math.cos(a)*200, y = h/2+Math.sin(a)*130; ctx.fillStyle = "#8b7355"; ctx.fillRect(x-35, y-35, 70, 70); ctx.fillStyle = "#6a5a4a"; ctx.fillRect(x-25, y-50, 50, 25); }
        ctx.fillStyle = "#b8860b"; ctx.beginPath(); ctx.ellipse(w/2, h/2, 180, 90, 0, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#87ceeb"; ctx.fillRect(w-220, 40, 170, 220);
        for(let i=0;i<35;i++) { ctx.fillStyle = "#d4af37"; ctx.fillRect(w-210+i*5, 50+i*7, 3, 12); }
    },
    courtroom: (ctx, w, h) => {
        ctx.fillStyle = "#8b7355"; ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#5a3a2a"; ctx.fillRect(w/2-180, 30, 360, 180); ctx.fillStyle = "#d4af37"; ctx.fillRect(w/2-120, 50, 240, 60);
        for(let i=0;i<14;i++) { ctx.fillStyle = "#7a6a5a"; ctx.fillRect(40+i*65, 230, 55, 90); }
        ctx.fillStyle = "#cc0000"; ctx.fillRect(w-170, 40, 120, 230); for(let i=0;i<13;i++) { ctx.fillStyle = i%2===0?"#ffffff":"#cc0000"; ctx.fillRect(w-170, 50+i*18, 120, 8); }
        for(let i=0;i<24;i++) { ctx.fillStyle = "#3a3a4a"; ctx.fillRect(60+i*45, h-140, 35, 90); ctx.fillStyle = "#d0c0a0"; ctx.beginPath(); ctx.arc(77+i*45, h-150, 15, 0, Math.PI*2); ctx.fill(); }
    },
    small_town: (ctx, w, h) => {
        ctx.fillStyle = "#87ceeb"; ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#ffd700"; ctx.beginPath(); ctx.arc(80, 70, 45, 0, Math.PI*2); ctx.fill();
        for(let i=0;i<6;i++) { let colors = ["#e8a87c","#c38d6b","#b87b5a","#d4a373","#e9c46a","#a7c5bd"]; ctx.fillStyle = colors[i%6]; ctx.fillRect(100+i*160, h-190, 130, 110); ctx.fillStyle = "#8B4513"; ctx.fillRect(145+i*160, h-230, 40, 40); }
        for(let i=0;i<10;i++) { ctx.fillStyle = "#2d6a4f"; ctx.beginPath(); ctx.arc(40+i*140, h-210, 35, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = "#8B4513"; ctx.fillRect(35+i*140, h-180, 10, 60); }
        ctx.fillStyle = "#555"; ctx.fillRect(0, h-110, w, 110);
    },
    hospital: (ctx, w, h) => {
        ctx.fillStyle = "#eef4ff"; ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#ffffff"; ctx.fillRect(w/2-200, 100, 400, 300);
        for(let i=0;i<4;i++) { ctx.fillStyle = "#c0d0e0"; ctx.fillRect(w/2-180+i*120, 120, 100, 150); }
        ctx.fillStyle = "#ff6666"; ctx.fillText("+", w/2-15, 80); ctx.font = "bold 60px monospace"; ctx.fillStyle = "#cc0000"; ctx.fillText("🏥", w/2-30, 450);
    },
    void: (ctx, w, h) => { ctx.fillStyle = "#000"; ctx.fillRect(0,0,w,h); for(let i=0;i<150;i++) { ctx.fillStyle = `rgba(100,100,150,${Math.random()*0.3})`; ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, 2, 0, Math.PI*2); ctx.fill(); } ctx.fillStyle = "#333"; ctx.font = "40px monospace"; ctx.fillText("⚫", w/2-20, h/2); }
};

// ========== CHARACTER PORTRAITS (Detailed) ==========
function drawPortrait(ctx, characterId) {
    const w=300, h=300; ctx.clearRect(0,0,w,h);
    ctx.fillStyle="#1a1a2a"; ctx.beginPath(); ctx.arc(w/2,h/2,140,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(w/2,h/2,135,0,Math.PI*2); ctx.fillStyle="#2a2a3a"; ctx.fill();
    function drawFace(skin, eye, mouth, hair, acc){
        ctx.fillStyle=skin; ctx.beginPath(); ctx.ellipse(w/2,h/2,100,110,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle="#1a1a2a";
        if(eye==="sad"){ ctx.beginPath(); ctx.arc(w/2-35,h/2-20,14,0,Math.PI*2); ctx.arc(w/2+35,h/2-20,14,0,Math.PI*2); ctx.fill(); ctx.fillStyle="white"; ctx.beginPath(); ctx.arc(w/2-39,h/2-24,5,0,Math.PI*2); ctx.arc(w/2+31,h/2-24,5,0,Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.moveTo(w/2-50,h/2-45); ctx.quadraticCurveTo(w/2-35,h/2-40,w/2-20,h/2-45); ctx.strokeStyle="#2a1a0a"; ctx.lineWidth=4; ctx.stroke(); ctx.beginPath(); ctx.moveTo(w/2+20,h/2-45); ctx.quadraticCurveTo(w/2+35,h/2-40,w/2+50,h/2-45); ctx.stroke();}
        else if(eye==="angry"){ ctx.fillStyle="#8B0000"; ctx.beginPath(); ctx.ellipse(w/2-35,h/2-20,16,12,0,0,Math.PI*2); ctx.ellipse(w/2+35,h/2-20,16,12,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle="#ff6666"; ctx.beginPath(); ctx.arc(w/2-35,h/2-22,5,0,Math.PI*2); ctx.arc(w/2+35,h/2-22,5,0,Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.moveTo(w/2-55,h/2-50); ctx.lineTo(w/2-20,h/2-40); ctx.lineWidth=5; ctx.stroke(); ctx.beginPath(); ctx.moveTo(w/2+20,h/2-40); ctx.lineTo(w/2+55,h/2-50); ctx.stroke();}
        else if(eye==="evil"){ ctx.fillStyle="#cc0000"; ctx.beginPath(); ctx.ellipse(w/2-35,h/2-20,15,10,0,0,Math.PI*2); ctx.ellipse(w/2+35,h/2-20,15,10,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle="#ffaa00"; ctx.beginPath(); ctx.arc(w/2-35,h/2-22,4,0,Math.PI*2); ctx.arc(w/2+35,h/2-22,4,0,Math.PI*2); ctx.fill();}
        else{ ctx.fillStyle="#1a1a2a"; ctx.beginPath(); ctx.arc(w/2-35,h/2-20,15,0,Math.PI*2); ctx.arc(w/2+35,h/2-20,15,0,Math.PI*2); ctx.fill(); ctx.fillStyle="white"; ctx.beginPath(); ctx.arc(w/2-39,h/2-24,6,0,Math.PI*2); ctx.arc(w/2+31,h/2-24,6,0,Math.PI*2); ctx.fill();}
        ctx.beginPath(); ctx.strokeStyle="#5a3a2a"; ctx.lineWidth=5;
        if(mouth==="sad"){ ctx.arc(w/2,h/2+35,25,0.1,Math.PI-0.1); ctx.stroke();}
        else if(mouth==="angry"){ ctx.arc(w/2,h/2+35,25,Math.PI+0.1,Math.PI*2-0.1); ctx.stroke();}
        else if(mouth==="smile"){ ctx.arc(w/2,h/2+35,25,0.1,Math.PI-0.1,true); ctx.stroke();}
        else if(mouth==="evil"){ ctx.beginPath(); ctx.moveTo(w/2-20,h/2+35); ctx.lineTo(w/2,h/2+50); ctx.lineTo(w/2+20,h/2+35); ctx.fillStyle="#8B0000"; ctx.fill();}
        else{ ctx.arc(w/2,h/2+35,22,0,Math.PI); ctx.stroke();}
        ctx.fillStyle=hair; ctx.beginPath(); ctx.ellipse(w/2,h/2-70,95,60,0,0,Math.PI*2); ctx.fill();
        if(acc){ ctx.font="35px monospace"; ctx.fillStyle="#d4af37"; ctx.fillText(acc,w/2-18,h-50);}
    }
    const map = {
        "leo_sad": ()=>drawFace("#e0b070","sad","sad","#4a3a2a",""),
        "leo_angry": ()=>drawFace("#e0b070","angry","angry","#4a3a2a",""),
        "leo_neutral": ()=>drawFace("#e0b070","neutral","neutral","#4a3a2a",""),
        "leo_evil": ()=>drawFace("#c08040","evil","evil","#2a1a0a","😈"),
        "kael": ()=>drawFace("#c0c0c0","neutral","neutral","#2a2a4a","👔"),
        "kael_evil": ()=>drawFace("#8a8a8a","evil","evil","#1a1a2a","💀"),
        "maria": ()=>drawFace("#f0c0a0","smile","smile","#8B4513","👩‍⚕️"),
        "priest": ()=>drawFace("#e0c0a0","neutral","smile","#ffffff","⛪"),
        "debtor": ()=>drawFace("#c0a080","sad","sad","#5a4a3a","😢"),
        "politician": ()=>drawFace("#e0d0a0","neutral","neutral","#3a3a6a","👔"),
        "agent": ()=>drawFace("#a0c0e0","neutral","neutral","#2a4a6a","🕵️"),
        "daughter": ()=>drawFace("#f0d0b0","smile","smile","#6a3a1a","👧")
    };
    (map[characterId]||map["leo_neutral"])();
    const tag = document.getElementById("charNameTag");
    if(tag) tag.innerText = characterId.toUpperCase().replace("_"," ");
}

// ========== GAME DATA (LONG DIALOGUE, NO PROGRESS) ==========
const gameData = {
    "start": {
        id:"start", speaker:"Leo",
        text:"The casino lights flicker like dying stars, casting blood-red shadows across the velvet carpet. I've lost everything tonight. Not just money—my wife's tear-streaked face as she walked out, my daughter's voice cracking on the phone: 'Daddy, why don't you love us anymore?' Fifty thousand dollars gone in three hours. The whiskey burns my throat, but it can't drown the screams in my head. Then a shadow falls over my table. A man in an impeccable black suit, silver cufflinks gleaming. His eyes are like frozen mercury. 'Leo Marino,' he says, sliding into the seat across from me. 'I've been watching you. You're not a gambler. You're a man who's forgotten how to win. I can remind you.'",
        background:"casino_night", sprite:"leo_sad",
        choices:[
            {text:"💀 'I don't care anymore. Tell me the deal.' (Extreme Bad)", nextId:"accept_kael", type:"bad"},
            {text:"💰 'How much are we talking?' (Greedy path)", nextId:"question_kael", type:"neutral"},
            {text:"❓ 'Why me? I'm nobody.' (Curious)", nextId:"who_are_you", type:"neutral"},
            {text:"🙏 'I need help, not another demon.' (Extreme Good)", nextId:"seek_help", type:"good"}
        ], nextId:"accept_kael"
    },
    "accept_kael":{
        id:"accept_kael", speaker:"Kael",
        text:"'Welcome to my world. First rule: loyalty above all. Second: never gamble with my money. Third...' He slides a gun across the table. 'Your first test is tonight. A man named Victor Ross owes me two hundred thousand. He's hiding in a rundown apartment on Fifth. Make him pay. Not with words—with presence. Show him what happens when someone steals from me. Do this, and your debt disappears. You'll have a place at my table. Refuse...' He leaves the threat hanging in the air like a guillotine blade.",
        background:"kael_office", sprite:"kael_evil",
        choices:[
            {text:"🔫 Take the gun without hesitation", nextId:"collect_cruel", type:"bad"},
            {text:"😰 Hesitate but accept", nextId:"collect_hesitate", type:"bad"},
            {text:"❓ Ask what the job is", nextId:"collect_ask", type:"neutral"},
            {text:"🙅 Refuse and try to leave", nextId:"refuse_kael", type:"good"}
        ], nextId:"collect_cruel"
    },
    "collect_cruel":{
        id:"collect_cruel", speaker:"Leo",
        text:"The apartment smells of cheap beer and regret. Victor Ross is a broken man—gray stubble, trembling hands, a photo of a little girl on the wall. 'Please,' he whispers, 'my daughter needs surgery. I took the money for her.' His eyes are wet. I've seen that look in the mirror. But Kael's voice echoes in my head. I slam his head against the table. Blood drips onto the photo. He signs over everything—his savings, his car, his dignity. As I walk out, I hear him sobbing. I tell myself he deserves it. But that night, I can't sleep. The sobs echo in my skull like a broken slot machine.",
        background:"dark_alley", sprite:"leo_evil",
        choices:[
            {text:"💰 Celebrate with Kael's money", nextId:"celebrate", type:"bad"},
            {text:"😞 Drink until I forget", nextId:"drink_away", type:"bad"},
            {text:"🕊️ Send an anonymous donation to his daughter's surgery", nextId:"donate_guilt", type:"good"},
            {text:"📞 Call a hotline for help", nextId:"seek_help", type:"good"}
        ], nextId:"celebrate"
    },
    "celebrate":{
        id:"celebrate", speaker:"Kael",
        text:"'Impressive. You're crueler than I expected. Here's $20,000. Your next target is bigger.' He hands me a file. A politician's face stares back—Senator Hayes. 'He's been skimming from my construction funds. I need leverage. Photos. Secrets. His family is his weakness. Find it.' The money feels good. The power feels better. But somewhere deep inside, a small voice whispers: You're becoming the monster you always feared.",
        background:"luxury_office", sprite:"kael_evil",
        choices:[
            {text:"📸 Take the job. Dig up dirt on Hayes.", nextId:"politician_bad", type:"bad"},
            {text:"🕵️ Pretend to accept, then warn Hayes", nextId:"warn_hayes", type:"good"},
            {text:"🙅 Refuse again and walk away", nextId:"walk_away_kael", type:"good"},
            {text:"💰 Demand more money for the risk", nextId:"demand_money", type:"neutral"}
        ], nextId:"politician_bad"
    },
    "politician_bad":{
        id:"politician_bad", speaker:"Leo",
        text:"Senator Hayes lives in a gated community. I watch him from across the street. He has a wife, two kids, a golden retriever. At night, he sneaks out to a casino on the outskirts of town. He's just like me. A gambler hiding behind a perfect smile. I follow him, take photos of him snorting cocaine off a bathroom counter, kissing a woman who isn't his wife. Kael laughs when I hand them over. 'Beautiful. Now we own him.' But as I leave, I see Hayes's daughter in the hallway. She's maybe twelve. Innocent. She has no idea her father's world is about to collapse.",
        background:"casino_night", sprite:"leo_evil",
        choices:[
            {text:"💀 Destroy him. Kael pays well.", nextId:"destroy_hayes", type:"bad"},
            {text:"😞 Feel sick. Try to undo the damage.", nextId:"undo_damage", type:"good"},
            {text:"📢 Leak the photos to the press yourself", nextId:"leak_photos", type:"neutral"},
            {text:"🕊️ Confess everything to Hayes and help him", nextId:"confess_hayes", type:"good"}
        ], nextId:"destroy_hayes"
    },
    "destroy_hayes":{
        id:"destroy_hayes", speaker:"News Anchor",
        text:"The scandal breaks. Senator Hayes resigns in disgrace. His wife files for divorce. His daughter is bullied at school. Kael gives me a bonus—$100,000 in cash. I buy a new car, expensive watches. But every time I see a little girl with pigtails, I see her face. The money feels like blood on my hands. Kael calls me his 'golden boy.' I've become the monster. And there's no turning back.",
        background:"courtroom", sprite:"leo_evil",
        choices:[
            {text:"💀 Bury the guilt in more crime", nextId:"ending_monster", type:"bad"},
            {text:"🍺 Drink until I can't feel", nextId:"ending_bad_soul", type:"bad"},
            {text:"🕊️ Donate the money to addiction charities", nextId:"ending_redemption", type:"good"},
            {text:"📞 Turn myself in to the FBI", nextId:"ending_justice", type:"good"}
        ], nextId:"ending_monster"
    },
    "seek_help":{
        id:"seek_help", speaker:"Leo",
        text:"I walk away from Kael. The rain soaks through my jacket, mixing with tears I didn't know I had left. I find a small church, the door unlocked as if waiting for me. An old priest sits in the front pew. 'My son, you look like you've been carrying a mountain.' I collapse into the seat beside him. 'Father, I've lost everything. My family, my money, my soul.' He places a hand on my shoulder. 'Then you've come to the right place. Let's start with a cup of coffee and a story.' For the first time in years, I feel something other than despair—a tiny flicker of hope.",
        background:"church", sprite:"priest",
        choices:[
            {text:"🙏 Confess everything", nextId:"confess_priest", type:"good"},
            {text:"💪 Ask for rehab recommendations", nextId:"rehab_search", type:"good"},
            {text:"📞 Call my daughter", nextId:"call_daughter", type:"good"},
            {text:"😞 Sit in silence and then leave", nextId:"back_to_casino", type:"bad"}
        ], nextId:"confess_priest"
    },
    "confess_priest":{
        id:"confess_priest", speaker:"Father Michael",
        text:"'I've heard worse, my son. Addiction is a disease, not a sin. But you must choose to heal. There's a woman named Elena who comes here every Tuesday. She lost her husband to gambling. She might understand.' He gives me a card for a Gamblers Anonymous meeting. 'Go tonight. Don't think. Just go.' I take the card, my hands still shaking. Outside, the rain has stopped. A sliver of moonlight breaks through the clouds. Maybe—just maybe—there's a way out.",
        background:"church", sprite:"priest",
        choices:[
            {text:"🙏 Join a support group tonight", nextId:"support_group1", type:"good"},
            {text:"💪 Check into rehab tomorrow", nextId:"rehab_intake", type:"good"},
            {text:"📝 Write apology letters to my family", nextId:"apology_letters", type:"good"},
            {text:"🕊️ Volunteer at the shelter", nextId:"volunteer", type:"good"}
        ], nextId:"support_group1"
    },
    "support_group1":{
        id:"support_group1", speaker:"Elena",
        text:"The meeting is in a church basement. Folding chairs in a circle, stale coffee, and broken people. I sit in the back, ready to run. Then a woman with kind eyes sits next to me. 'First time?' she asks. I nod. 'I'm Elena. My husband was a gambler. He lost our house, our savings, then his life. He drove his car into a bridge after losing everything.' She touches my hand. 'Don't let the same demons win.' When it's my turn to speak, my voice cracks. 'I'm Leo. I'm a compulsive gambler.' The shame doesn't crush me. It lifts.",
        background:"support_group", sprite:"maria",
        choices:[
            {text:"🕊️ Commit to 90 meetings in 90 days", nextId:"ninety_days", type:"good"},
            {text:"💪 Ask Elena to be your sponsor", nextId:"elena_sponsor", type:"good"},
            {text:"📞 Call my daughter and apologize", nextId:"call_daughter2", type:"good"},
            {text:"🏃 Leave halfway through—it's too much", nextId:"back_to_casino", type:"bad"}
        ], nextId:"ninety_days"
    },
    "ninety_days":{
        id:"ninety_days", speaker:"Leo",
        text:"Ninety days. No gambling. No Kael. No late nights in casinos. Elena calls me every morning. Frank, an old-timer with 20 years clean, becomes my sponsor. I get a job at a diner—minimum wage, grease burns on my arms, but honest work. On day 87, Kael finds me. 'You think you can hide?' he snarls. 'You owe me.' Elena steps between us. 'He owes you nothing. Leave him alone or I call the police.' Kael laughs, but he leaves. That night, I hold Elena's hand. 'Thank you,' I whisper. She squeezes back. 'You saved yourself. I just pointed the way.'",
        background:"small_town", sprite:"leo_neutral",
        choices:[
            {text:"❤️ Ask Elena to be more than a friend", nextId:"romance", type:"good"},
            {text:"💪 Focus on recovery alone", nextId:"alone_recovery", type:"good"},
            {text:"📢 Speak at other meetings to help others", nextId:"speaker_path", type:"good"},
            {text:"😞 Relapse under pressure", nextId:"ending_relapse", type:"bad"}
        ], nextId:"romance"
    },
    "romance":{
        id:"romance", speaker:"Elena",
        text:"'Leo, I've been hurt before. I can't be your reason for staying clean. You have to do it for yourself.' I nod, understanding. 'But,' she adds, 'I can be your friend. And maybe someday, when you're strong enough... we can see where this goes.' It's not the answer I wanted, but it's the one I needed. For the first time, I have something to look forward to that isn't a roulette wheel. I hug her goodbye, then walk to my next meeting. The sun is rising. So am I.",
        background:"small_town", sprite:"maria",
        choices:[
            {text:"🕊️ Keep working on yourself, one day at a time", nextId:"ending_redemption", type:"good"},
            {text:"💪 Start a recovery blog to help others", nextId:"ending_inspire", type:"good"},
            {text:"📖 Write a memoir about your journey", nextId:"ending_author", type:"good"},
            {text:"😞 Push her away and relapse", nextId:"ending_relapse", type:"bad"}
        ], nextId:"ending_redemption"
    },
    "call_daughter2":{
        id:"call_daughter2", speaker:"Sarah (Daughter)",
        text:"The phone rings three times. I almost hang up. Then her voice: 'Dad?' It's fragile, like thin ice. 'I'm in recovery, Sarah. I'm trying to be better.' Silence. Then crying. 'I've wanted to hear that for two years.' We talk for an hour. She tells me about school, her new puppy, how she still has the teddy bear I gave her when she was five. 'Can I visit you?' she asks. My throat closes. 'I'd like that, sweetheart. I'd like that very much.'",
        background:"small_town", sprite:"daughter",
        choices:[
            {text:"🤝 Invite her to visit next weekend", nextId:"daughter_visit", type:"good"},
            {text:"💪 Promise to call every day", nextId:"daily_calls", type:"good"},
            {text:"😞 Tell her you're not ready yet", nextId:"back_to_casino", type:"bad"}
        ], nextId:"daughter_visit"
    },
    "daughter_visit":{
        id:"daughter_visit", speaker:"Sarah",
        text:"She shows up with a bouquet of sunflowers. 'Mom said I shouldn't come. She said you'd disappoint me again.' I hug her, and she doesn't pull away. 'I won't,' I whisper. 'I promise.' We spend the day at the park. I push her on the swings like I used to. For a few hours, I forget about Kael, about the debts, about the casino. I'm just a dad. And maybe that's enough.",
        background:"small_town", sprite:"daughter",
        choices:[
            {text:"🕊️ Make amends with your ex-wife too", nextId:"amends_ex", type:"good"},
            {text:"💪 Keep focusing on recovery for her", nextId:"ending_family", type:"good"},
            {text:"📢 Share your story at her school", nextId:"ending_inspire", type:"good"}
        ], nextId:"ending_family"
    },
    // ========== ENDINGS (Long, satisfying) ==========
    "ending_redemption":{
        id:"ending_redemption", speaker:"Leo (Years Later)",
        text:"I stand at the podium, looking out at a room full of strangers. 'My name is Leo, and I'm a recovering gambler.' They applaud. Elena sits in the front row, holding my hand. Sarah is next to her, now a teenager, beaming. I've been clean for five years. I run a recovery center that has helped over a thousand addicts. Kael is in prison—thanks to the evidence I helped gather. The casino lights no longer call to me. Instead, I see the light in people's eyes when they take their first step toward healing. The gambler died that night in the church. What rose from the ashes was a man who finally understands: the biggest win isn't money. It's forgiveness.",
        background:"support_group", sprite:"leo_neutral",
        choices:[{text:"🌟 Play again", nextId:"start", type:"good"}], nextId:"start"
    },
    "ending_justice":{
        id:"ending_justice", speaker:"News Anchor",
        text:"In a historic trial, Kael is convicted on 47 counts, including racketeering, bribery, and three murders. Leo Marino, once a broke gambler, is hailed as a hero. He testifies for three days, his voice steady, his eyes clear. After the verdict, he visits Victor's daughter in the hospital—her surgery was paid for by an anonymous donor. She doesn't know it was Leo. He prefers it that way. 'I didn't do it for fame,' he tells a reporter. 'I did it because some debts can't be paid with money. Only with truth.' He opens a chain of recovery centers called 'The Second Deal.' His daughter visits every weekend.",
        background:"courtroom", sprite:"leo_neutral",
        choices:[{text:"⚖️ Play again", nextId:"start", type:"good"}], nextId:"start"
    },
    "ending_monster":{
        id:"ending_monster", speaker:"Kael (Narrating)",
        text:"Leo sits in my chair now. The chair I built on bones and broken dreams. He's worse than I ever was. Last week, he ordered a hit on a rival. The week before, he ruined a family for fun. The gambler who had nothing now has everything—and it's still not enough. I watch from my prison cell, almost proud. Almost. Because I know the truth: the house always wins. And Leo? He's the house now. But houses crumble. And when his does, I'll be here, smiling.",
        background:"luxury_office", sprite:"leo_evil",
        choices:[{text:"💀 Play again", nextId:"start", type:"bad"}], nextId:"start"
    },
    "ending_family":{
        id:"ending_family", speaker:"Sarah",
        text:"Dad walks me down the aisle. Not for my wedding—for his five-year sobriety chip ceremony. 'I'm proud of you,' I whisper. He cries. I've only seen him cry twice before: the day Mom left, and today. After the ceremony, we go to the diner where he used to work. He owns it now. 'Family recipe,' he says, sliding a plate of pancakes toward me. 'No gambling, no lies, just batter and butter.' I take a bite. It tastes like forgiveness.",
        background:"small_town", sprite:"daughter",
        choices:[{text:"🏠 Play again", nextId:"start", type:"good"}], nextId:"start"
    },
    "ending_inspire":{
        id:"ending_inspire", speaker:"Leo (TED Talk)",
        text:"The applause is deafening. I stand in the spotlight, holding my five-year chip. 'My name is Leo, and I'm a gambler. Not anymore. But the urge never goes away. Every day, I choose not to place a bet. Every day, I choose my daughter. My friends. My life. If you're out there, drowning in debt or shame, know this: the only bet that matters is the one you place on yourself.' The video goes viral. Fifty million views. My phone doesn't stop ringing. I don't answer. I have a meeting in an hour. There's a man there who lost his house today. He needs to hear that it's not the end. It's just the beginning.",
        background:"support_group", sprite:"leo_neutral",
        choices:[{text:"📢 Play again", nextId:"start", type:"good"}], nextId:"start"
    },
    "ending_bad_soul":{
        id:"ending_bad_soul", speaker:"Narrator",
        text:"The paramedics find him in the bathroom of the Bellagio. Needle still in his arm. Slot machine blinking 'JACKPOT' in the next room. His daughter's last text, unread: 'Dad, please call me.' No one comes to claim the body. The casino sweeps it under the rug. The next day, someone else sits at his favorite machine. The wheel spins. The house always wins.",
        background:"casino_empty", sprite:"leo_sad",
        choices:[{text:"💀 Play again", nextId:"start", type:"bad"}], nextId:"start"
    },
    "ending_relapse":{
        id:"ending_relapse", speaker:"Narrator",
        text:"Leo relapsed on day 103. He lost his job, his apartment, his daughter's trust. Elena stopped answering his calls. Now he sleeps in his car behind the casino. Sometimes he goes inside, just to feel the lights on his face. He knows he'll die here. He just doesn't care anymore.",
        background:"casino_night", sprite:"leo_sad",
        choices:[{text:"🔁 Play again", nextId:"start", type:"bad"}], nextId:"start"
    }
};

// ========== GAME ENGINE ==========
let currentNodeId = "start", waitingForChoice = false;
const bgCanvas = document.getElementById("bgCanvas");
const portraitCanvas = document.getElementById("portraitCanvas");
const speakerDiv = document.getElementById("speakerName");
const messageDiv = document.getElementById("messageText");
const choicesDiv = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

function generateBgURL(key) {
    let d = backgroundDrawers[key] || backgroundDrawers.casino_night;
    let c = document.createElement("canvas");
    c.width = 1280; c.height = 720;
    d(c.getContext("2d"), 1280, 720);
    return c.toDataURL();
}
function renderVisuals(node) {
    let bg = new Image();
    bg.onload = () => { let ctx = bgCanvas.getContext("2d"); bgCanvas.width = 1280; bgCanvas.height = 720; ctx.drawImage(bg, 0, 0); };
    bg.src = generateBgURL(node.background);
    drawPortrait(portraitCanvas.getContext("2d"), node.sprite || "leo_neutral");
}
function renderChoices(choices) {
    choicesDiv.innerHTML = "";
    if(!choices || choices.length===0) { choicesDiv.classList.add("hidden"); return; }
    choicesDiv.classList.remove("hidden");
    choices.forEach(ch => {
        let btn = document.createElement("button"); btn.className = "choice-btn";
        let badge = "";
        if(ch.type==="good") badge = "<span class='choice-badge badge-good'>✨ GOOD</span>";
        else if(ch.type==="bad") badge = "<span class='choice-badge badge-bad'>💀 BAD</span>";
        else if(ch.type==="neutral") badge = "<span class='choice-badge badge-neutral'>⚖️ NEUTRAL</span>";
        btn.innerHTML = ch.text + " " + badge;
        btn.onclick = () => { if(waitingForChoice) goToNode(ch.nextId); };
        choicesDiv.appendChild(btn);
    });
}
function displayNode(node) {
    renderVisuals(node);
    speakerDiv.innerText = node.speaker;
    messageDiv.innerText = node.text;
    messageDiv.classList.remove("fade-text"); void messageDiv.offsetWidth; messageDiv.classList.add("fade-text");
    if(node.choices && node.choices.length) { waitingForChoice = true; renderChoices(node.choices); }
    else { waitingForChoice = false; renderChoices([]); }
}
function goToNode(id) { if(gameData[id]) { currentNodeId = id; displayNode(gameData[currentNodeId]); } else goToNode("start"); }
function nextStep() { if(!waitingForChoice) { let node = gameData[currentNodeId]; if(node && node.nextId) goToNode(node.nextId); else goToNode("start"); } }
function resetGame() { goToNode("start"); }
nextBtn.onclick = nextStep; resetBtn.onclick = resetGame;
goToNode("start");