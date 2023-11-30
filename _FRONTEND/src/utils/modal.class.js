export function ModalMsg(option, html = null, textButton = null, btnColor = "#007BFF") {
    let sa = ''
    let spinner = ` 
    <br>
    <div class="lds-spinner" style="height: 13vh;">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>

    `
    const swalConfig = {
        confirmButtonText: textButton !== null ? textButton : 'aceptar',
        loaderHtml: spinner,
        //imageUrl: 'https://url.ar/img/logo.png',
        imageWidth: 100,
        imageHeight: 100,
        html: html,
        showConfirmButton: true,
        confirmButtonColor: btnColor != null ? btnColor : "#007BFF",
    }

    switch (option) {
        case 0:
            swalConfig.html = 'Completa los campos REQUERIDOS.'
            sa = Swal.fire(swalConfig)
            break;
        case 1:
            swalConfig.html = 'guardado OK'
            sa = Swal.fire(swalConfig)
            break;
        case 2:
            swalConfig.html = 'error de conexion.'
            sa = Swal.fire(swalConfig)
            break;
        case 3:
            swalConfig.html = spinner + '<br>procesando...'
            swalConfig.showConfirmButton = false,
                sa = Swal.fire(swalConfig)
            break;
        case 4:
            swalConfig.html = 'solo podes adjuntar un archivo. recargar la web para repetir.'
            sa = Swal.fire(swalConfig)
            break;
        case 5:
            swalConfig.html = 'ya existe ese e-mail en BD. o no es un email valido.'
            sa = Swal.fire(swalConfig)
            break;
        case 6:
            swalConfig.html = 'ERROR: no estas autenticado.'
            sa = Swal.fire(swalConfig)
            break;
        case 7:
            sa = Swal.fire(swalConfig)
            break;
        default:
            return sa
            break;
    }

    return sa
}
