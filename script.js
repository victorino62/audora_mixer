

// Carrega as avaliações salvas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Configurar os controles de volume assim que o documento estiver carregado
    setupVolumeControls();

    // Definir o volume inicial das faixas 2, 3 e 4 como 0
    setInitialVolume(['track2', 'track3', 'track4']);

    // Configurar os botões globais de play/pause/stop
    setupGlobalControls();
});

// Função para configurar os controles de volume de cada faixa
function setupVolumeControls() {
    // Selecionar todos os elementos de áudio e seus controles de volume
    const audioTracks = document.querySelectorAll('audio');
    
    audioTracks.forEach(track => {
        const trackId = track.id;  // Ex: "track1"
        const volumeControl = document.querySelector(`#volume${trackId.replace('track', '')}`);
        
        if (track && volumeControl) {
            // Adiciona o evento de input para controlar o volume
            volumeControl.addEventListener('input', function () {
                track.volume = volumeControl.value;
                console.log(`Volume da ${trackId} ajustado para: ${track.volume}`);
            });
        } else {
            console.error(`Controle de volume não encontrado para o áudio com ID: ${trackId}`);
        }
    });
}

// Função para definir o volume inicial de certas faixas
function setInitialVolume(trackIds) {
    trackIds.forEach(trackId => {
        const track = document.getElementById(trackId);
        const volumeControl = document.getElementById(`volume${trackId.replace('track', '')}`);

        if (track && volumeControl) {
            track.volume = 0; // Define o volume da faixa para 0
            volumeControl.value = 0; // Atualiza o controle de volume para refletir isso
        } else {
            console.error(`Track ou controle de volume não encontrado para ID: ${trackId}`);
        }
    });
}

// Função para configurar os botões globais de controle (Play, Pause, Stop)
function setupGlobalControls() {
    // Selecionar todas as faixas de áudio
    const audioTracks = document.querySelectorAll('audio');

    // Selecionar botões de controle global
    const playAllButton = document.getElementById('playAll');
    const pauseAllButton = document.getElementById('pauseAll');
    const stopAllButton = document.getElementById('stopAll');

    // Função para tocar todas as faixas
    playAllButton.addEventListener('click', () => {
        audioTracks.forEach(track => {
            track.play();
        });
    });

    // Função para pausar todas as faixas
    pauseAllButton.addEventListener('click', () => {
        audioTracks.forEach(track => {
            track.pause();
        });
    });

    // Função para parar todas as faixas
    stopAllButton.addEventListener('click', () => {
        audioTracks.forEach(track => {
            track.pause();
            track.currentTime = 0;  // Reinicia a faixa para o começo
        });
    });


// Código para aplicar o efeito de shake no ícone do WhatsApp
setInterval(function() {
    var icon = document.getElementById("whatsapp-icon");
    if (icon) {
      icon.classList.add("shake");

      setTimeout(function() {
        icon.classList.remove("shake");
      }, 500);
    }
  }, 10000);
};

// Função para gerar uma chave única baseada na URL da página
function getFeedbackKey() {
    const path = window.location.pathname; // ex: /caminho_1.html
    return "feedback-" + path.substring(path.lastIndexOf("/") + 1); // ex: feedback-caminho_1.html
}

function saveFeedback() {
    const key = getFeedbackKey();
    const feedback = document.getElementById("userFeedback").value;
    localStorage.setItem(key, feedback);
    showToast("✅ Feedback salvo para este arquivo.");
    setTimeout(() => {
        showToast("📲 Caso queira, você pode copiar e enviar por WhatsApp.");
    }, 2900);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = "toast";
    }, 2700); // duração: 4s
}

// Ao carregar a página, preencher o campo se já tiver feedback salvo
window.onload = function () {
    const key = getFeedbackKey();
    const saved = localStorage.getItem(key);
    if (saved) {
        document.getElementById("userFeedback").value = saved;
    }
};




/*

 // Função que alterna a visualização dos likes para você (admin)
function toggleAdminView() {
    const likeCountElements = document.querySelectorAll('.admin-only');
    likeCountElements.forEach(element => {
        element.classList.toggle('show-admin');
    });
}

// Função que incrementa a contagem de likes e salva no localStorage
function likeTrack(trackId) {
    const likeCountElement = document.getElementById(`like-count-${trackId}`);
    const likeButton = document.getElementById(`like-${trackId}`);

    // Verifica se o like já foi dado
    if (localStorage.getItem(`liked-${trackId}`)) {
        alert("Você já deu like nesta track!"); // Aviso para o usuário
        return; // Já foi curtido, não faça nada
    }

    // Incrementa o contador de likes
    let currentLikes = parseInt(localStorage.getItem(`likes-${trackId}`)) || 0;
    currentLikes++;

    // Atualiza o contador de likes no localStorage
    localStorage.setItem(`likes-${trackId}`, currentLikes);

    // Marca o trackId como curtido para não permitir mais cliques
    localStorage.setItem(`liked-${trackId}`, true);

    // Atualiza o botão de like
    likeButton.classList.add("clicked");
    likeButton.textContent = "Liked";
    likeButton.disabled = true; // Desativa o botão de like

    // Atualiza o campo de likes no HTML
    likeCountElement.textContent = `Likes: ${currentLikes}`;
    likeCountElement.style.display = "none"; // Mantém oculto, mas o valor foi atualizado
}

//Função que carrega o estado dos likes ao carregar a página
function loadLikes() {
    const trackIds = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6'];

    trackIds.forEach(trackId => {
        const likeButton = document.getElementById(`like-${trackId}`);
        const likeCountElement = document.getElementById(`like-count-${trackId}`);

        // Verifica se o elemento existe antes de tentar usar
        if (!likeButton || !likeCountElement) {
            console.error(`Elemento não encontrado para ${trackId}`);
            return;
        }

        // Carrega o número de likes do localStorage
        const currentLikes = localStorage.getItem(`likes-${trackId}`) || 0;

        // Atualiza o contador de likes
        if (currentLikes > 0) {
            likeCountElement.textContent = `Likes: ${currentLikes}`;
        }

        // Reseta o estado do botão para "Like" ao carregar a página
        likeButton.classList.remove("clicked");
        likeButton.textContent = "Like";
        likeButton.disabled = false; // Reativa o botão de like
    });
    

// Adiciona eventos para controlar o volume de cada faixa
function setupVolumeControls() {
    const trackIds = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6'];

    trackIds.forEach((trackId, index) => {
        const track = document.getElementById(trackId);
        const volumeControl = document.getElementById(`volume${index + 1}`);

        if (track && volumeControl) {
            volumeControl.addEventListener('input', function () {
                track.volume = volumeControl.value;
            });
        }
    });
}

// Função para exibir os números de likes no console
function showLikesInConsole() {
    const trackIds = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6'];

    trackIds.forEach(trackId => {
        const likes = localStorage.getItem(`likes-${trackId}`) || 0;
        console.log(`Track ${trackId}: ${likes} likes`);
    });
}

// Limpa o estado dos likes ao carregar a página
function resetLikes() {
    const trackIds = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6'];
    trackIds.forEach(trackId => {
        localStorage.removeItem(`liked-${trackId}`);
    });
}

// Carrega os estados dos likes e configurações ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    resetLikes(); // Reseta o estado dos likes para que o botão volte ao original
    loadLikes(); // Chama a função loadLikes
    setupVolumeControls(); // Configura os controles de volume
});








// Função para avaliar a track
function rateTrack(trackId, rating) {
    // Salva a avaliação no localStorage
    localStorage.setItem(`rating-${trackId}`, rating);

    // Atualiza a exibição das estrelas
    const ratingContainer = document.getElementById(`rating-${trackId}`);
    const stars = ratingContainer.getElementsByClassName('fa-star');

    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add('checked');
        } else {
            stars[i].classList.remove('checked');
        }
    }
}

// Carrega as avaliações salvas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const trackIds = ['track1'];
    trackIds.forEach(trackId => {
        const savedRating = localStorage.getItem(`rating-${trackId}`);
        if (savedRating) {
            rateTrack(trackId, parseInt(savedRating));
        }
    });




/*
Abra o console do navegador:
No Chrome, pressione Ctrl + Shift + I (ou Cmd + Option + I no Mac) e vá para a aba "Console".
Digite o seguinte comando no console para limpar o localStorage:

localStorage.clear();

Abra o console e use showLikesInConsole() para ver os likes.


*/
