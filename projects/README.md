# 📁 Projetos de Rust

Esta pasta é destinada aos arquivos e recursos dos seus projetos.

## Como Adicionar um Novo Projeto

### 1. No HTML (index.html)

Adicione um novo card de projeto dentro da `<div class="projects-grid">`:

```html
<article class="project-card" data-category="fullstack">
    <div class="project-image">
        <!-- Opção 1: Usar imagem -->
        <img src="projects/seu-projeto/screenshot.jpg" alt="Nome do Projeto">
        
        <!-- Opção 2: Usar placeholder com número -->
        <div class="project-placeholder">
            <span class="project-number">07</span>
        </div>
        
        <div class="project-overlay">
            <div class="overlay-content">
                <span class="view-text">Ver Projeto</span>
                <span class="view-icon">↗</span>
            </div>
        </div>
    </div>
    <div class="project-info">
        <span class="project-category">Full-Stack</span>
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">
            Descrição breve do projeto explicando o que ele faz
            e quais problemas resolve.
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://seu-projeto.com" class="project-link" target="_blank">
                <span>Demo</span>
                <span>→</span>
            </a>
            <a href="https://github.com/rust/projeto" class="project-link" target="_blank">
                <span>GitHub</span>
                <span>→</span>
            </a>
        </div>
    </div>
</article>
```

### 2. Categorias Disponíveis

Use o atributo `data-category` para categorizar:
- `frontend` - Projetos de Front-End
- `backend` - Projetos de Back-End
- `fullstack` - Projetos Full-Stack

### 3. Estrutura Recomendada para Projetos

```
projects/
├── projeto-1/
│   ├── screenshot.jpg     # Imagem de capa (16:10 ratio recomendado)
│   ├── screenshot-2.jpg   # Screenshots adicionais
│   └── README.md          # Detalhes do projeto
├── projeto-2/
│   └── ...
└── projeto-3/
    └── ...
```

### 4. Tamanhos de Imagem Recomendados

- **Capa do projeto**: 800x500px (ratio 16:10)
- **Screenshots**: 1200x750px ou maiores
- **Formato**: JPG ou WebP para melhor performance

### 5. Dicas

- Use descrições concisas (2-3 linhas)
- Adicione 3-4 tags de tecnologia por projeto
- Sempre inclua links para demo e repositório
- Mantenha screenshots atualizados
- Ordene os projetos do mais recente para o mais antigo

---

## Exemplo de Projeto Completo

### Estrutura de Pasta
```
projects/
└── e-commerce-platform/
    ├── cover.jpg
    ├── dashboard.jpg
    ├── mobile.jpg
    └── README.md
```

### Card HTML
```html
<article class="project-card" data-category="fullstack">
    <div class="project-image">
        <img src="projects/e-commerce-platform/cover.jpg" alt="E-Commerce Platform">
        <div class="project-overlay">
            <div class="overlay-content">
                <span class="view-text">Ver Projeto</span>
                <span class="view-icon">↗</span>
            </div>
        </div>
    </div>
    <div class="project-info">
        <span class="project-category">Full-Stack</span>
        <h3 class="project-title">E-Commerce Platform</h3>
        <p class="project-description">
            Plataforma completa de e-commerce com painel administrativo,
            gateway de pagamento integrado e sistema de inventário em tempo real.
        </p>
        <div class="project-tech">
            <span class="tech-tag">Next.js</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Stripe</span>
        </div>
        <div class="project-links">
            <a href="https://meu-ecommerce.com" class="project-link" target="_blank">
                <span>Demo</span>
                <span>→</span>
            </a>
            <a href="https://github.com/rust/ecommerce" class="project-link" target="_blank">
                <span>GitHub</span>
                <span>→</span>
            </a>
        </div>
    </div>
</article>
```
