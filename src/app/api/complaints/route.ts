// app/api/complaints/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Desestructuramos todos los campos del formulario
    const {
      // Bloque 1
      nombres, apellidoPaterno, apellidoMaterno, telefono, email, esMayorEdad, apoderado,
      departamento, provincia, distrito, direccion,
      // Bloque 2
      tipoBien, montoReclamado, productoServicio,
      // Bloque 3
      tipoReclamo,
      // Bloque 4
      area,
      // Bloque 5
      detalle,
      // Bloque 6
      pedido,
      // Bloque 7 (Aquí solo recibimos el nombre del archivo para referencia en el Sheet)
      archivoNombre,
      // Bloque 8
      observaciones
    } = body;

    // --- CREDENCIALES INTEGRADAS (POR FAVOR, REGENERA Y USA .ENV EN PRODUCCIÓN) ---
    const CLIENT_EMAIL = 'gestor-reclamaciones@web-instituto-reclamaciones.iam.gserviceaccount.com';
    const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIgW+EKjraNqEC
q5ajCtB7CjgqgqUi2oJQh6aKSU7T8nctUKyv8Dw0QzTGgPyDE3FXoFZCFYdqWTs6
Vl3chTmXkw4gTnqNDNx7ZWXRRW39zdCLGW0609Fap9Nh/iwxP/EWBaHsLNakHz0S
rV9xnqS5WMqGV6znC5uB8cO/8hAgcmm0QeunR48+W3ir1vgl5PCSegi2F/f6bUqp
upa9iOx4p3a4e/J4rSQxxY8+9SDF05WxqU0pVjTnYxxyl2Xb9UMmR0IEkg9TQeDD
KtcmbhWU9MWni0WA11Ov3jPAvhILJ7trgP59k2a0zEIWMvOGavdzNSAAwTyU0o0l
WwSesnSVAgMBAAECggEALBSIt72xAphP/Y5Lp7yQ6PvuLSpbs7XmQF4SNwS219HO
cZ/y1xsxoSvFRn7FBOwZVvJhBFZHVxIW+1RRflGrv68Mw/1849WYA2jfYYqqC8pb
trj4Up6OwCd1SW3fuVQdZIIIfyu8ZIiZnKmQ+iGuhTEIFVDhKkpa/c5xApntAbTB
qE1HOE14FfvE3vmUF6hFIa/bvt8OYIWPsfR5jAZc8A+LN3DXCZlvVKhHfQlGDcvF
OZV+Xs1dVYEDVnmaI88XmsLSkSJmikYv8S87mGkqL+6ikdjOdPFQqck6AtZJSs7U
l7peQl9whQkdoeoeykWGAkUVCayV4ZIWmkTqnpd0AQKBgQD1dumqZWltR5Wa1HYM
6QF4XtZkZG1GYy01Qcf4cf7LIhE/dTiyJJGtYAO9/dqPD7zSSqF09w2s8CHgHFil
aqjEDIOjVEg3rq0KjOj7VZ/NQG0XTsaldD4133rBZGNcR57gDw82Qjubo3ZHheEd
hW41acyOBUT/RwvZl//FNR629QKBgQDRHIdQFUsmTx4WOTNg6Rayut72Eu6LgQGJ
Z04Yq+oPUGUeQ3mTuSmpdM1mRKTR1ZzALiACepFgiotrZTl7Q8qEU7coo7ELTMuF
xSA6WOT6s1Mvi+EwyoFry6oGQnqebtCmXgbIt1Uu6jeno/CY8kUamH3nbrwR1zqv
69G1VDgDIQKBgQCMEl1o5RHyUEUo41CyMUyrecLx6vUIk5O6rl0Eg1iYZkpdYfEG
hyOyQfYgtvm/ZYWkov3blxdwtl8+Wi6jxmej6Fg+HdxQGheYy6wvsD7Oi5M1F7j3
tYvChlKwhS7F/ADHbxCJL+Z//BmE2vsJM5keVc9qw8sJuWsjsj88NAHg+QKBgD4e
2H/M45dM16ZIdd/rPqf35bZ6Z00gFOHJw6SGpbDI9FEqQFrHHf5OSZqA9+myKK/a
w/2YhcmFPue3mXzp5aar6/RxtG2j8a4aonlS4SsszKCKUGqbLhlk1mynoR+h0fAq
bJ+B/xdB0yjFBfuZtTeyZ2yyM8KlCrUqPBE/JKihAoGBAIY8kGxpPwtwjDo3PGHJ
OkyMD745CTYIWadK15itGprainGHbMOoX2XlsVsJoOO6bVHHaAdsgT6Qzjztwg1e
QV/MSAfX3LqHILrZKtS4lFoxiPOBXu7JYPMoxYozwLUflRUDEFdSOaZbhs8mrUnf
pwx6HwIAYLoEQZfClUkD9icz
-----END PRIVATE KEY-----`;
    
    // Asegúrate de definir esta variable en tu .env.local o poner el ID aquí directamente si es necesario para pruebas rápidas
    const SHEET_ID = '1xnDbpHy8BiJxH56smgSpA7kScGHvrzb0ysbR9l3jfFY'; 

    // Configuración de autenticación con Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ auth, version: 'v4' });
    const date = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' });

    // Enviar datos a Google Sheets
    // Asegúrate de que tu hoja tenga los encabezados correspondientes en la fila 1
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Hoja 1!A:U', // Ajusta el rango según tus columnas (A hasta U)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            date,                   // A: Fecha
            nombres,                // B: Nombres
            apellidoPaterno,        // C: Apellido P.
            apellidoMaterno,        // D: Apellido M.
            telefono,               // E: Teléfono
            email,                  // F: Email
            esMayorEdad ? 'Sí' : 'No', // G: Mayor edad
            apoderado || '-',       // H: Apoderado
            departamento,           // I: Depto
            provincia,              // J: Prov
            distrito,               // K: Dist
            direccion,              // L: Dirección
            tipoBien,               // M: Tipo Bien
            productoServicio || '-',// N: Producto/Servicio (Nombre)
            montoReclamado || '-',  // O: Monto
            tipoReclamo,            // P: Tipo Reclamo
            area,                   // Q: Área
            detalle,                // R: Detalle
            pedido,                 // S: Pedido
            archivoNombre || '-',   // T: Archivo (Nombre)
            observaciones || '-'    // U: Observaciones
          ]
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data });

  } catch (error) {
    console.error('Error sheet:', error);
    return NextResponse.json({ success: false, error: 'Error al guardar el reclamo' }, { status: 500 });
  }
}