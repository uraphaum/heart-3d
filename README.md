# heart3d

Um Coração em Formato 3D, 
Clique e arraste para rotacionar o coração e vê-lo por todos os angulos.

---

## Funcionalidades

- Coracao 3D renderizado com equacões parametricas
- Rotação com o mouse e efeito de inercia ao soltar
- Particulas flutuantes ao redor
- Estetica rosa com iluminação dinamica

---

## Requisitos

- Node.js
- npm

---

## Instalacao

Dentro da pasta do projeto, rode:

```bash
npm install
npm start
```

---

## Controles

| Acao              | Resultado                        |
|-------------------|----------------------------------|
| Clicar e arrastar | Rotaciona o coracao              |
| Soltar o mouse    | Continua girando com inercia     |

---

## Estrutura do projeto

```
heart3d/
├── main.js       # é Gerado a Janela, Através do Electron
├── index.html    # Cena Three.js
├── package.json
└── README.md
```
