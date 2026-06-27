# heart3d

Um Coração em Formato 3D, 
Clique e arraste para rotacionar o coração e vê-lo por todos os angulos.

---

## Funcionalidades

- Coração 3D renderizado com equacões parametricas
- Rotação com o mouse e efeito de inercia ao soltar
- Particulas flutuantes ao redor
- Estetica rosa com iluminação dinamica

---

## Requisitos

- Node.js
- npm

---

## Instalação

Dentro da pasta do projeto, rode:

```bash
npm install
npm start
```

---

## Controles

| Ação              | Resultado                        |
|-------------------|----------------------------------|
| Clicar e arrastar | Rotaciona o coração              |
| Soltar o mouse    | Continua girando     |

---

## Estrutura do projeto

```
heart3d/
├── main.js       # é Gerado a Janela, Através do Electron
├── index.html    # Cena Three.js
├── package.json
└── README.md
```
