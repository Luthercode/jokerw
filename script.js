/* =====================================================
   LUTHER PORTFOLIO - Dark Creepy Joker Theme JS
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursor();
    initNavigation();
    initScrollProgress();
    initScrollReveal();
    initSkillBars();
    initProjectFilter();
    initTypedText();
    initDiscordCopy();
    initSmoothScroll();
    initParallax();
    initGlitchEffect();
    initScrollIndicator();
    initProjectModal();
    initLanyard(); // Discord Lanyard
});

/* =====================================================
   LOADER - Cartas em Leque
   ===================================================== */

function initLoader() {
    const loader = document.querySelector('.loader');
    
    document.body.style.overflow = 'hidden';
    
    window.addEventListener('load', () => {
        // Dar tempo para animação das cartas
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 3500);
    });
    
    // Fallback
    setTimeout(() => {
        if (!loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }, 6000);
}

/* =====================================================
   CURSOR PERSONALIZADO - Estilo Cruz/Estrela
   ===================================================== */

function initCursor() {
    // Verificar se é mobile/touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return;
    }
    
    const cursor = document.querySelector('.cursor-card');
    const trail = document.querySelector('.cursor-trail');
    
    if (!cursor || !trail) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let trailX = 0, trailY = 0;
    
    // Ativar cursor
    setTimeout(() => {
        cursor.classList.add('active');
        trail.classList.add('active');
    }, 100);
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Cursor principal - mais responsivo
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Trail - segue mais devagar
        trailX += (mouseX - trailX) * 0.08;
        trailY += (mouseY - trailY) * 0.08;
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .tool-item, .detail-item, .filter-btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Hide on leave window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        trail.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        trail.style.opacity = '1';
    });
}

/* =====================================================
   NAVEGAÇÃO
   ===================================================== */

function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* =====================================================
   SCROLL PROGRESS
   ===================================================== */

function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/* =====================================================
   SCROLL REVEAL
   ===================================================== */

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section-header, .about-content, .skill-category, .project-card, .discord-card, .contact-info-card, .profile-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}

/* =====================================================
   SKILL BARS
   ===================================================== */

function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute('data-skill');
                const progressBar = entry.target.querySelector('.skill-progress');
                
                setTimeout(() => {
                    progressBar.style.width = skillLevel + '%';
                }, 200);
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => skillObserver.observe(item));
}

/* =====================================================
   PROJECT FILTER
   ===================================================== */

function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
}

/* =====================================================
   TYPED TEXT
   ===================================================== */

function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const phrases = [
        'Criando experiências sombrias...',
        'Dominando o código...',
        'The wild card always wins...',
        'Where darkness meets creation...',
        'Front-end & Back-end...'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause no final
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1500);
}

/* =====================================================
   DISCORD COPY
   ===================================================== */

function initDiscordCopy() {
    const copyBtn = document.getElementById('copyBtn');
    const username = document.getElementById('discordUsername');
    
    if (!copyBtn || !username) return;
    
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(username.textContent);
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = username.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            copyBtn.classList.add('copied');
            setTimeout(() => copyBtn.classList.remove('copied'), 2000);
        }
    });
}

/* =====================================================
   SMOOTH SCROLL
   ===================================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =====================================================
   PARALLAX
   ===================================================== */

function initParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    const floatCards = document.querySelectorAll('.float-card');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        orbs.forEach((orb, index) => {
            const speed = index === 0 ? 0.3 : 0.2;
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
        
        floatCards.forEach((card, index) => {
            const speed = 0.1 + (index * 0.05);
            card.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

/* =====================================================
   GLITCH EFFECT - Para título
   ===================================================== */

function initGlitchEffect() {
    const titleChars = document.querySelectorAll('.title-char');
    
    titleChars.forEach(char => {
        char.addEventListener('mouseenter', () => {
            char.style.animation = 'glitchChar 0.3s ease';
            setTimeout(() => {
                char.style.animation = '';
            }, 300);
        });
    });
    
    // Add glitch keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitchChar {
            0% { transform: translateY(-15px) scale(1.1); color: var(--color-blood); }
            25% { transform: translateY(-15px) translateX(-3px) scale(1.1); }
            50% { transform: translateY(-15px) translateX(3px) scale(1.1); }
            75% { transform: translateY(-15px) translateX(-3px) scale(1.1); }
            100% { transform: translateY(-15px) scale(1.1); color: var(--color-blood); }
        }
    `;
    document.head.appendChild(style);
}

/* =====================================================
   RANDOM CARD SYMBOL ROTATION
   ===================================================== */

// Função extra para adicionar interatividade aos símbolos de carta
document.querySelectorAll('.link-card, .filter-card, .detail-icon').forEach(el => {
    el.addEventListener('click', () => {
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = 'cardSpin 0.5s ease';
    });
});

// Add card spin keyframes
const cardSpinStyle = document.createElement('style');
cardSpinStyle.textContent = `
    @keyframes cardSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.3); }
        100% { transform: rotate(360deg) scale(1); }
    }
`;
document.head.appendChild(cardSpinStyle);

/* =====================================================
   SCROLL INDICATOR - Esconde ao rolar
   ===================================================== */

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // Esconde quando rolar mais de 100px
        if (currentScroll > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }
    });
}

/* =====================================================
   PROJECT MODAL - Painel de preview dos projetos
   ===================================================== */

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalLoading = document.getElementById('modalLoading');
    const projectIframe = document.getElementById('projectIframe');
    const openExternal = document.getElementById('openExternal');
    const closeModal = document.getElementById('closeModal');
    const projectLinks = document.querySelectorAll('.project-link[data-project]');
    
    if (!modal) return;
    
    // Abrir modal ao clicar em "Ver Projeto"
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const projectUrl = link.dataset.project;
            const projectTitle = link.dataset.title;
            
            // Atualizar título e link externo
            modalTitle.textContent = projectTitle;
            openExternal.href = projectUrl;
            
            // Mostrar loading
            modalLoading.classList.remove('hidden');
            
            // Carregar iframe
            projectIframe.src = projectUrl;
            
            // Quando iframe carregar, esconder loading
            projectIframe.onload = () => {
                modalLoading.classList.add('hidden');
            };
            
            // Abrir modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fechar modal
    function closeProjectModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Limpar iframe após animação
        setTimeout(() => {
            projectIframe.src = '';
        }, 300);
    }
    
    closeModal.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', closeProjectModal);
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

/* =====================================================
   DISCORD LANYARD INTEGRATION - REDESIGNED
   =====================================================
   
   🔧 CONFIGURAÇÃO:
   Troque o DISCORD_USER_ID abaixo pelo seu ID do Discord
   
   📋 COMO CONSEGUIR SEU ID:
   1. Abra o Discord
   2. Vá em Configurações > Avançado > Ativar Modo Desenvolvedor
   3. Clique com botão direito no seu perfil
   4. Clique em "Copiar ID do Usuário"
   
   ⚠️ IMPORTANTE:
   Para o Lanyard funcionar, você PRECISA entrar no servidor:
   https://discord.gg/lanyard
   
   ===================================================== */

const DISCORD_USER_ID = '1150940661533638737'; // 👈 TROQUE PELO SEU ID

function initLanyard() {
    const card = document.getElementById('lanyardCard');
    if (!card) return;
    
    // Fetch data from Lanyard API
    fetchLanyardData();
    
    // Update every 10 seconds
    setInterval(fetchLanyardData, 10000);
    
    // Update Spotify progress every second
    setInterval(updateSpotifyProgress, 1000);
}

// Store Spotify timestamps globally for progress updates
let spotifyTimestamps = null;

async function fetchLanyardData() {
    const loadingEl = document.getElementById('profileLoading');
    const contentEl = document.getElementById('profileContent');
    const errorEl = document.getElementById('profileError');
    const statusTextEl = document.getElementById('profileStatusText');
    
    if (!loadingEl) return;
    
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
        const data = await response.json();
        
        if (data.success) {
            updateLanyardUI(data.data);
            loadingEl.style.display = 'none';
            contentEl.style.display = 'block';
            if (errorEl) errorEl.style.display = 'none';
        } else {
            throw new Error('Failed to fetch');
        }
    } catch (error) {
        console.error('Lanyard error:', error);
        loadingEl.style.display = 'none';
        if (contentEl) contentEl.style.display = 'none';
        if (errorEl) errorEl.style.display = 'block';
    }
}

function updateLanyardUI(data) {
    const { discord_user, discord_status, activities, spotify, listening_to_spotify } = data;
    
    // Avatar
    const avatarEl = document.getElementById('profileAvatar');
    if (avatarEl) {
        const avatarUrl = discord_user.avatar 
            ? `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.${discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=256`
            : `https://cdn.discordapp.com/embed/avatars/${parseInt(discord_user.discriminator || '0') % 5}.png`;
        avatarEl.src = avatarUrl;
    }
    
    // Status indicator on avatar
    const avatarStatus = document.getElementById('avatarStatus');
    if (avatarStatus) {
        avatarStatus.className = `avatar-status ${discord_status}`;
    }
    
    // Username
    const usernameEl = document.getElementById('profileUsername');
    const handleEl = document.getElementById('profileHandle');
    if (usernameEl) usernameEl.textContent = discord_user.display_name || discord_user.username;
    if (handleEl) handleEl.textContent = `@${discord_user.username}`;
    
    // Header status text
    const statusTextEl = document.getElementById('profileStatusText');
    const statusTexts = {
        online: 'Online',
        idle: 'Ausente',
        dnd: 'Ocupado',
        offline: 'Offline'
    };
    if (statusTextEl) statusTextEl.textContent = statusTexts[discord_status] || 'Online';
    
    // Activity section
    const activityEl = document.getElementById('profileActivity');
    if (!activityEl) return;
    
    // Check Spotify first
    if (listening_to_spotify && spotify) {
        activityEl.style.display = 'block';
        
        const badgeEl = document.getElementById('activityBadge');
        const imageEl = document.getElementById('activityImage');
        const nameEl = document.getElementById('activityName');
        const stateEl = document.getElementById('activityState');
        const extraEl = document.getElementById('activityExtra');
        const timeEl = document.getElementById('activityTime');
        const progressEl = document.getElementById('spotifyProgress');
        
        if (badgeEl) badgeEl.textContent = '🎵 Ouvindo Spotify';
        
        // Album art
        if (imageEl) {
            if (spotify.album_art_url) {
                imageEl.innerHTML = `<img src="${spotify.album_art_url}" alt="Album">`;
            } else {
                imageEl.innerHTML = '🎵';
            }
        }
        
        if (nameEl) nameEl.textContent = spotify.song;
        if (stateEl) stateEl.textContent = `por ${spotify.artist}`;
        if (extraEl) extraEl.textContent = spotify.album;
        
        // Store timestamps for progress updates
        spotifyTimestamps = spotify.timestamps;
        
        // Show progress bar
        if (progressEl) progressEl.style.display = 'block';
        
        // Update progress and time immediately
        updateSpotifyProgress();
        
        // Hide time text for Spotify (we show progress bar instead)
        if (timeEl) timeEl.style.display = 'none';
        
    } else if (activities && activities.length > 0) {
        spotifyTimestamps = null; // Clear Spotify timestamps
        
        // Filter out custom status (type 4) and Spotify
        const activity = activities.find(a => a.type !== 4 && a.name !== 'Spotify');
        
        if (activity) {
            activityEl.style.display = 'block';
            
            const badgeEl = document.getElementById('activityBadge');
            const imageEl = document.getElementById('activityImage');
            const nameEl = document.getElementById('activityName');
            const stateEl = document.getElementById('activityState');
            const extraEl = document.getElementById('activityExtra');
            const timeEl = document.getElementById('activityTime');
            const progressEl = document.getElementById('spotifyProgress');
            
            // Hide Spotify progress
            if (progressEl) progressEl.style.display = 'none';
            if (timeEl) timeEl.style.display = 'block';
            
            // Activity type
            const activityTypes = {
                0: '🎩 Jogando',
                1: '📺 Streamando',
                2: '🎵 Ouvindo',
                3: '📽️ Assistindo',
                5: '🏆 Competindo'
            };
            if (badgeEl) badgeEl.textContent = activityTypes[activity.type] || ' 🎩 ';
            
            // Activity icons
            const activityIcons = {
                0: '🎩',
                1: '📺',
                2: '🎵',
                3: '📽️',
                5: '🏆'
            };
            
            // Activity image
            if (imageEl) {
                if (activity.assets?.large_image) {
                    let imageUrl;
                    if (activity.assets.large_image.startsWith('mp:external')) {
                        imageUrl = `https://media.discordapp.net/external/${activity.assets.large_image.replace('mp:external/', '')}`;
                    } else {
                        imageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
                    }
                    imageEl.innerHTML = `<img src="${imageUrl}" alt="Activity">`;
                } else {
                    imageEl.innerHTML = activityIcons[activity.type] || '🎩';
                }
            }
            
            if (nameEl) nameEl.textContent = activity.name;
            if (stateEl) stateEl.textContent = activity.state || '';
            if (extraEl) extraEl.textContent = activity.details || '';
            
            // Time elapsed
            if (timeEl) {
                if (activity.timestamps?.start) {
                    const elapsed = Date.now() - activity.timestamps.start;
                    const hours = Math.floor(elapsed / 3600000);
                    const minutes = Math.floor((elapsed % 3600000) / 60000);
                    
                    if (hours > 0) {
                        timeEl.textContent = `há ${hours}h ${minutes}m`;
                    } else {
                        timeEl.textContent = `há ${minutes} min`;
                    }
                } else {
                    timeEl.textContent = '';
                }
            }
        } else {
            activityEl.style.display = 'none';
        }
    } else {
        spotifyTimestamps = null;
        activityEl.style.display = 'none';
    }
}

function updateSpotifyProgress() {
    if (!spotifyTimestamps) return;
    
    const progressBar = document.getElementById('spotifyBar');
    const timeEl = document.getElementById('activityTime');
    
    if (!progressBar) return;
    
    const now = Date.now();
    const elapsed = now - spotifyTimestamps.start;
    const total = spotifyTimestamps.end - spotifyTimestamps.start;
    const progress = Math.min((elapsed / total) * 100, 100);
    
    progressBar.style.width = `${progress}%`;
    
    // Update time display
    if (timeEl) {
        const elapsedMinutes = Math.floor(elapsed / 60000);
        const elapsedSeconds = Math.floor((elapsed % 60000) / 1000);
        const totalMinutes = Math.floor(total / 60000);
        const totalSeconds = Math.floor((total % 60000) / 1000);
        timeEl.textContent = `${elapsedMinutes}:${elapsedSeconds.toString().padStart(2, '0')} / ${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
        timeEl.style.display = 'block';
    }
}

function retryLanyard() {
    const loadingEl = document.getElementById('profileLoading');
    const errorEl = document.getElementById('profileError');
    
    if (loadingEl) loadingEl.style.display = 'flex';
    if (errorEl) errorEl.style.display = 'none';
    
    fetchLanyardData();
}
