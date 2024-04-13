document.addEventListener('DOMContentLoaded', function() {
    const colorBgs = document.querySelectorAll('.color-bg');
    const clipboardCopy = document.querySelector('.clipboard-copy');
    const btn = document.querySelector('.btn');
    const note = document.querySelector('.note');

    // Configuración global de Alertify para mostrar todos los mensajes en la parte superior
    alertify.set('notifier', 'position', 'top-right');

    // Asigna el color inicial a los divs con la clase .color-bg
    colorBgs.forEach(colorBg => {
        const text = colorBg.nextElementSibling.textContent;
        colorBg.style.backgroundColor = text;
        colorBg.addEventListener('click', function() {
            const colorText = this.nextElementSibling.textContent;
            const copyHexa = clipboardCopy.querySelector('.copy-hexa');
            copyHexa.textContent = colorText.toUpperCase();

            // Copiar el código hexadecimal al portapapeles al hacer clic en .color-bg
            const textArea = document.createElement('textarea');
            textArea.value = colorText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            // Mostrar mensaje de éxito con Alertify
            alertify.success(`Color <strong>${colorText.toUpperCase()}</strong> copiado`);
        });
    });

    // Event listener para el botón y la barra espaciadora
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            generatePalette();
        }
    });
    btn.addEventListener('click', generatePalette);
    clipboardCopy.addEventListener('click', function() {
        // Copiar el código hexadecimal al portapapeles
        const copyHexa = this.querySelector('.copy-hexa');
        const textArea = document.createElement('textarea');
        textArea.value = copyHexa.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        
    });

    // Función para generar una nueva paleta de colores aleatorios
    function generatePalette() {
        colorBgs.forEach(colorBg => {
            const randomColor = generateRandomColor();
            const text = colorBg.nextElementSibling;
            text.textContent = randomColor.toUpperCase(); // Convertir a mayúsculas
            colorBg.style.backgroundColor = randomColor;
        });
    }

    // Función para generar un color hexadecimal aleatorio
    function generateRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Función para copiar la paleta de colores a un archivo CSS
    function copyPaletteToCSS() {
        const colors = Array.from(document.querySelectorAll('.color-bg')).map(colorBg => colorBg.style.backgroundColor);
        
        let cssContent = ":root {\n";
        colors.forEach((color, index) => {
            cssContent += `    --color-${index + 1}: ${color};\n`;
        });
        cssContent += "}\n\n/* Created by Miguel Ramos Alarcón */";
    
        const blob = new Blob([cssContent], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'color_palette.css';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Mostrar mensaje de éxito con Alertify
        alertify.success('Éxito, tu archivo CSS ha sido generado');
    }
    
    document.querySelector('.export').addEventListener('click', copyPaletteToCSS);
});
