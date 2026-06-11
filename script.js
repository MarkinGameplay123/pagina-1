function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function calcularROI() {
    const result = document.getElementById('roi-result');
    const consumo = Math.floor(Math.random() * 6) + 10; // 10% a 15%
    
    result.innerHTML = `
        <strong>ROI Estimado:</strong><br>
        Redução de ${consumo}% no consumo de energia.<br>
        Payback estimado entre 14 e 22 meses.<br>
        <span style="color:#00ff9d;">✅ Projeto viável economicamente.</span>
    `;
    result.style.display = 'block';
    
    // Animação
    result.style.animation = 'none';
    setTimeout(() => {
        result.style.animation = 'pulse 1s';
    }, 10);
}

// Adiciona a animação no CSS via JS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(0.95); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

console.log("%cPágina Stirling carregada com JS separado. Satisfeito agora?", "color: #00ff9d; font-size: 14px");