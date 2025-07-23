# 📹 Como Configurar Vídeos no Google Drive

## 🎯 Passo a Passo para Upload dos Vídeos

### 1. **Upload no Google Drive**
1. Acesse [drive.google.com](https://drive.google.com)
2. Crie uma pasta chamada "COAFNOR Videos" (opcional)
3. Faça upload de cada vídeo:
   - DJI_0006.MP4
   - DJI_0009.MP4
   - DJI_0017.MP4
   - DJI_0035.MP4
   - DJI_0037.MP4
   - DJI_0040.MP4
   - DJI_0041.MP4
   - DJI_0042.MP4
   - DJI_0055.MP4
   - DJI_0056.MP4
   - DJI_0062.MP4
   - DJI_0072.MP4
   - DJI_0079.MP4

### 2. **Configurar Compartilhamento**
Para cada vídeo:
1. **Clique com botão direito** no arquivo
2. Selecione **"Compartilhar"**
3. Clique em **"Alterar para qualquer pessoa com o link"**
4. Selecione **"Visualizador"** (não Editor)
5. Clique em **"Copiar link"**

### 3. **Extrair ID do Link**
O link será algo como:
```
https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing
```

O ID é a parte entre `/d/` e `/view`: `1ABC123XYZ789`

### 4. **Atualizar o Código**
No arquivo `Gallery.jsx`, substitua `SEU_ID_AQUI_X` pelos IDs reais:

```jsx
{
    name: "DJI_0006.MP4",
    driveUrl: "https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing",
    embedUrl: "https://drive.google.com/file/d/1ABC123XYZ789/preview"
},
```

## 🔧 **Exemplo Prático**

**Link do Drive:**
```
https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing
```

**Configuração no código:**
```jsx
{
    name: "DJI_0006.MP4",
    driveUrl: "https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing",
    embedUrl: "https://drive.google.com/file/d/1ABC123XYZ789/preview"
}
```

## ✅ **Vantagens**

- ✅ **Sem limite de tamanho** no repositório Git
- ✅ **Commits rápidos** sem arquivos pesados
- ✅ **Streaming direto** do Google Drive
- ✅ **Player integrado** na página
- ✅ **Link externo** para visualização completa
- ✅ **Fácil de manter** e atualizar

## 🎥 **Resultado Final**

- Vídeos aparecem como **iframe embedado** na galeria
- **Hover** mostra botão "Abrir no Drive"
- **Player nativo** do Google Drive
- **Qualidade adaptativa** baseada na conexão

## 📝 **Próximos Passos**

1. Faça upload dos 13 vídeos
2. Configure compartilhamento público
3. Copie os IDs dos links
4. Substitua no código `Gallery.jsx`
5. Teste a galeria
6. Commit sem arquivos pesados! 🚀
