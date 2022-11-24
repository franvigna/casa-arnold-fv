const products = [
    {
        _id: 2,
        name: 'Celular Libre Samsung A52 Negro',
        image: '/images/GalaxyA52.webp',
        description:
            'Celular Samsung modelo A52 cuenta con un procesador SDM720G octa/core 2.3Ghz una memoria RAM de 6GB y 128GB de almacenamiento interno expandible hasta 1TB con una tarjeta microSD, sonido potente con dolby atmos *2 parlantes integrados(, desbloqueo con huella dactilar en pantalla *FOD( NFC, one UI3.1,protección IP67 *resistente hasta 1M de profundidad en agua dulce durante 30 minutos(, batería de 4.500mAh para mayor duración de la batería y 25W super fast charging, pantalla infinity/0 display de 6.5@ FHD supera moled *90Hz(, cámara frontal de 32MP y cuádruple cámara trasera de 64MP',
        brand: 'Samsung',
        category: 'Celulares',
        price: 91499,
        countInStock: 1,
    },
    {
        _id: 3,
        name: 'Celular Libre Samsung A32 Blanco',
        image: '/images/GalaxyA32.webp',
        description:
            'Celular libre sansung modelo A32 cuenta con una camara proncipal de 64+8+5+5MP una camara frontal de 20MP y flach, memoria interna de 128GB expandibla a 1TB en una micro SD, memoria RAM de 4GB, pantalla de 6.4" super AMOLED la resolucion de la pantalla es de 1080x2400 FH+,funcion NFC,bluetooth,WI-FI el sistema operativo es android 11, octa-core2GHz,1.8GHz, parlante exterio y bateria de 5000mAh.',
        brand: 'Samsung',
        category: 'Celulares',
        price: 75999,
        countInStock: 1,
    },
    {
        _id: 4,
        name: 'Celular Libre Motorola G60s Azul',
        image: '/images/Motog60s.webp',
        description:
            'Celular Motorola G60s cuenta con una pantalla de 6.78@ * 1080x2460, 396ppi,HiD,120Hz(, sistema operativo android 11, procesador octa core 1.8Ghz * mediatek helio G95(, 4 cámara trasera 64]08]05]02MP, flash led, cámara frontal de 16MP con flash frontal, 6GB de memoria RAM y 128GB de memoria interna *disponible para el usuario 110GB( , expandible a 1TB con una tarjeta micro SD, acelerómetro, sensor de proximidad, brújula, huella dactilar, desbloqueofacial, wi fi y bluetooth, nano sim , batería de 5000 mAh con cargador turbo, con radio FM, no trae auriculares.',
        brand: 'Motorola',
        category: 'Celulares',
        price: 62999,
        countInStock: 1,
    },
    {
        _id: 5,
        name: 'Celular Libre Samsung S22 Ultra Blanco',
        image: '/images/S22Ultra.webp',
        description:
            'Con el nuevo modelo de Samsung es el primer S Pen incorporado en el Galaxy S tiene una clasificación IP68 y pone la precisión al alcance de tu mano trae una pantalla quad HD+ edge de 6.8" con lector de huellas dactilares ultrasónico y reconocimiento facial, viene con marco de aluminio, la batería es de 5000 mAh y carga superrápida de 25 watts, el procesador es un octa-core, la memoria RAM es de 12GB y su memoria interna es de 256GB, dual SIM.',
        brand: 'Samsung',
        category: 'Celulares',
        price: 299999,
        countInStock: 1,
    },
    {
        _id: 6,
        name: 'Celular Libre Samsung A03 Negro',
        image: '/images/SamsungA03.webp',
        description:
            'Celular Samsung A03 cuenta con un procesador octa-core 1.6GHz, la pantalla es de 6.5" HD+ la cámara frontal es de 5.0mpx y la cámara trasera es de 48+02mpx, la memoria RAM es de 4GB y 128GB de memoria expandible a 1TB con una tarjeta micro SD, buetooth 5.0 y la batería es de 5000 mAh.',
        brand: 'Samsung',
        category: 'Celulares',
        price: 47999,
        countInStock: 1,
    },
    {
        _id: 7,
        name: 'Celular Libre Motorola G52 Negro',
        image: '/images/MotoG52.webp',
        description:
            'Hacé que tu entretenimiento favorito cobre vida con el contraste infinito que ofrece tonos oscuros más profundos y colores más brillantes, en la pantalla FHD+ de 6.6" y 90 Hz con tecnología pOLED. Gracias a la resolución Full HD+.',
        brand: 'Motorola',
        category: 'Celulares',
        price: 62999,
        countInStock: 1,
    },
    {
        _id: 8,
        name: 'Celular Libre Samsung A22 5G',
        image: '/images/GalaxyA22.webp',
        description:
            'Celular Samsung A22 5G cuenta con un procesador octa-core 2.2GHz, la pantalla es de 6.6", la cámara frontal es de 8.0mpx y la cámara trasera es de 48+05+02mpx, la memoria RAM es de 4GB y 128GB de memoria expandible a 1TB con una tarjeta micro SD, buetooth 5.0.',
        brand: 'Samsung',
        category: 'Celulares',
        price: 69999,
        countInStock: 1,
    },
    {
        _id: 9,
        name: 'Smart Philips 65" 4K Android tv',
        image: '/images/SmartPhilips65-4k.webp',
        description:
            'El nuevo Smart Philips cuenta con una resolución 4K UHD, con tecnología Ambilight en 3 lados y el sistema operativo Android tv Cuenta con control por voz con el Asistente de Google, HDR para imágenes brillantes, el diseño atractivo y ultra fino con marco plateado, Dolby Visión y Dolby Atmos para visión y sonido cinematográfico.',
        brand: 'Philips',
        category: 'SmartTV',
        price: 179999,
        countInStock: 1,
    },
    {
        _id: 10,
        name: 'Aire Acondicionado Split Philco f/c 3350Watts',
        image: '/images/AireSplitPhilco3350watts.webp',
        description:
            'Eficiencia energética clase A. Refrigerante ecológico R410a. Display oculto. Control remoto multifunción. Barrido de aire automático. Súper silencioso. Función sleep. Timer programable. Filtros lavables.',
        brand: 'Philco',
        category: 'Climatización',
        price: 134988,
        countInStock: 1,
    },
    {
        _id: 11,
        name: 'Lavarropas Automático Drean Next 8.14P',
        image: '/images/LavarropasAutomaticoDreanNext.webp',
        description:
            'Lavarropas Drean next 8.14P eco inverter, clase A]]], 1400 RPM en el centrifugado, 8 kg de ropa, display led color * te indica el tiempo real el programa seleccionado , la temperatura asociada, la velocidad del centrifugado, el avance del ciclo en cada etapa de lavado y el tiempo remanente(, luz interior de tambor, bisagra 180grados, cúpula de vidrio, silencioso y económico ahorra hasta un 30% de energía comparado con un lavarropas clase A .',
        brand: 'Drean',
        category: 'Lavado',
        price: 98129,
        countInStock: 1,
    },
    {
        _id: 12,
        name: 'Freezer Neba F310 305Litros',
        image: '/images/FreezerNeba305LTS.webp',
        description:
            'En este freezer Neba podés guardar grandes cantidades de alimentos, por largos períodos de tiempo en condiciones óptimas sin preocuparte por desperdiciar comida.Eficiencia y ahorro. Gracias a la eficiencia energética B vas a aprovechar al máximo su rendimiento ya que ahorra un 35% de consumo.',
        brand: 'Neba',
        category: 'Refrigeración',
        price: 88775,
        countInStock: 1,
    },
    {
        _id: 13,
        name: 'Freidora Ultra Rapida 10Litros',
        image: '/images/FreidoraUltraRapida10L.webp',
        description: `Freidora a gas ultra rápida El Gauchito 443
    Gabinete de acero inoxidable
    Tacho enlozado con tapa de acero inox
    Inyectores enlozados
    Desagote con llave esférica
    Medidas: 40x60x90 cm (ancho/profundidad/altura)
    Consumo: 9400 cal/h
    Incluye 1 canasto de acero de 24x18x12 cm`,
        brand: 'El Gauchito',
        category: 'Cocinas',
        price: 55566,
        countInStock: 1,
    },
    {
        _id: 14,
        name: 'Conservadora Corona Para 12 Porrones',
        image: '/images/ConservadoraCorona.webp',
        description: `conservadora de cerveza corona original con manijas laterales para facilitar su traslado y destapador incorporado al frente, con amplia capacidad para 12 porrones de cerveza o latas y amplio espacio para colocar hielo`,
        brand: 'Corona',
        category: 'Refrigeración',
        price: 15960,
        countInStock: 1,
    },
    {
        _id: 15,
        name: 'Termotanque Electrico Vitta 80 Litros',
        image: '/images/TermotanqueElectricoVitta.webp',
        description: `conservadora de cerveza corona original con manijas laterales para facilitar su traslado y destapador incorporado al frente, con amplia capacidad para 12 porrones de cerveza o latas y amplio espacio para colocar hielo`,
        brand: 'Corona',
        category: 'Termotanques',
        price: 15960,
        countInStock: 1,
    },
    {
        _id: 16,
        name: 'Notebook Injoo Voom Max',
        image: '/images/NotebookInjooVoomMax.webp',
        description: `Tamaño de pantalla: 14,1"
    Resolución: 1366×768 
    Procesador: Intel Celeron N3350 2,4GHz
    Memoria Ram: 6 GB RAM
    Almacenamiento: 64 GB SSD; Expansible hasta 1 TB SSD
    Bateria: 4000 mAh – 5-6h
    Sistema Operativo: Windows 10 
    Puertos: USB 2.0; Jack 3,5mm; SD 64GB; HDMI`,
        brand: 'Injoo',
        category: 'Notebooks',
        price: 57022,
        countInStock: 1,
    },
    {
        _id: 17,
        name: 'Bicicleta Futura Country R26 Color Turquesa',
        image: '/images/BicicletaFuturaCountryR26Turquesa.webp',
        description: `La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Sumate a esta ola sustentable que avanza en todo el mundo!`,
        brand: 'Futura',
        category: 'Bicicletas',
        price: 40399,
        countInStock: 1,
    },
    {
        _id: 18,
        name: 'Bicicleta Playera Canasto Rodado 24 Color Violeta',
        image: '/images/BicicletaPlayeraCanastoR26Violeta.webp',
        description: `La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Sumate a esta ola sustentable que avanza en todo el mundo!`,
        brand: 'Futura',
        category: 'Bicicletas',
        price: 38089,
        countInStock: 1,
    },
    {
        _id: 19,
        name: 'Bicicleta Futura Mountain Bike Techno Rodado 29',
        image: '/images/BicicletaFuturaMontainbike.webp',
        description: `Bicicleta futura rodado 29 pulgadas mountain bike techno 21v acero - 5300a
        características técnicas:
        - rodado 29 pulgadas
        - cuadro de acero
        - 21 velocidades
        - frenos v-brake.
        - reflectores de seguridad
        - equipamiento genérico
        - garantía 6 meses (extendible a un año en el cuadro,gratis)
        - dimensiones 1.50 x 0.82 x 0.22
        - disponible en negro`,
        brand: 'Futura',
        category: 'Bicicletas',
        price: 46999,
        countInStock: 1,
    },
    {
        _id: 20,
        name: 'Bicicleta Rodado 12 Ruedas De Goma Cars 3',
        image: '/images/BicicletaR12RuedasDeGoma.webp',
        description: `Hermosa bicicleta de Cars, ideal para aprender a andar!

        Características:
        - Rodado 12
        - Asiento acolchonado
        - Cubre caño de goma espuma
        - Guardabarro plástico
        - Stickers de Cars
        - Ruedas auxiliares
        - Medidas de la bicicleta: 82 x 70 x 49 cm
        - Peso del producto: 5 kg`,
        brand: 'Futura',
        category: 'Bicicletas',
        price: 18290,
        countInStock: 1,
    },
    {
        _id: 21,
        name: 'Ventilador Pie 3 En 1, 5 Paletas Aluminio',
        image: '/images/VentiladorPie3En1.webp',
        description: `Ventilador Pie 3 En 1 Año de Garantia 5 Paletas Aluminio
        -Potencia: 90W
        -Altura: 1,80 mts
        -Podes usarlo tanto de pie, como de pared o en modo turbo (de mesa)
        -Posee 3 velocidades
        -Cabezal oscilante .
        -5 Aspas de Aluminio para un mayor equilibrio y menor vibración
        -Tamaño: 18" pulgadas`,
        brand: 'Exahome',
        category: 'Climatización',
        price: 10514,
        countInStock: 1,
    },
    {
        _id: 22,
        name: 'Ventilador de pared y de piso Indelplas',
        image: '/images/VentiladorParedYPiso.webp',
        description: `
        Caracteristicas: 
        -Marca: Indelplas 
        -Color: negro 
        -5 Aspas,
        -16" de diámetro 
        -Voltaje: 220 V
        ¡Aire limpio y fresco en tus ambientes! El ventilador Indelplas IV16 es un elemento útil para dar frescura en el hogar. Con su óptimo rendimiento, la sensación térmica disminuirá. Es un aparato práctico, fácil de armar e instalar.`,
        brand: 'Indelplas',
        category: 'Climatización',
        price: 7811,
        countInStock: 1,
    },
    {
        _id: 23,
        name: 'Aire Acondicionado Kanji Home 2600 Watts F/C',
        image: '/images/AireAcondicionadoKanji2600W.webp',
        description: `
        Aire Acondicionada Kanji Split 2600 watts frio-calor consumo A

El equipo Kanji cuenta con eficiencia energética clase A, que permite reducir el consumo de energía hasta un 16 por ciento (vs. un equipo similar de eficiencia energética C.) También, utiliza el gas no tóxico y no contaminante R410A, que no contribuye al debilitamiento de la capa de ozono y tiene una mayor capacidad de refrigeración.`,
        brand: 'Kanji',
        category: 'Climatización',
        price: 130998,
        countInStock: 1,
    },
    {
        _id: 24,
        name: 'Aire acondicionado Alaska split f/c 2322 frigorías',
        image: '/images/AireacondicionadoAlaska2322Frigorias.webp',
        description: `
        Climatizar tus espacios a lo largo del año es sin duda algo importante para tu comodidad y la de tus seres queridos. Contar con un aire acondicionado con función frío/calor es la mejor decisión. Con este aire Alaska conseguí una mejor relación costo-beneficio.`,
        brand: 'Alaska',
        category: 'Climatización',
        price: 112599,
        countInStock: 1,
    },
    {
        _id: 25,
        name: 'Bicicleta Rodado 12 Bmx Nena Princesas',
        image: '/images/BicicletaR2BmxRosa.webp',
        description: `BICICLETA Forest RODADO 12

        · Cuadrado de acero
        · Tipo: Infantil
        · Rodado:12
        · Acero y plástico
        · Cubrecadenas
        · Protector de Caño
        · Edad recomendada: 3 años
        · Ruedas Macizas de goma
        · Canasto (Nena)`,
        brand: 'BMX',
        category: 'Bicicletas',
        price: 16990,
        countInStock: 1,
    },
    {
        _id: 26,
        name: 'Smart Tv Kodak Smartvision Fhd Smart 40"',
        image: '/images/TVKodak40.webp',
        description: `- Fabricante: KODAK
        - Pulgadas: 40
        - Smart: Si
        - Tipo de resolución: FULL HD
        - Resolución: 1920 x 1080 Pixeles
        - Modelo: WE-4XTL005
        - Puertos: USB x2
        - Hdmi: x3
        - RJ45: x1
        - Optical: x1
        - Av in: x1
        - Entrada dtv/analogica: x1
        - Dimensiones: 990 x 118 x 570mm
        - peso neto: 5.5kg
        - Peso bruto: 6.9kg
        - Color: Negro`,
        brand: 'Kodak',
        category: 'SmartTV',
        price: 80564,
        countInStock: 1,
    },
    {
        _id: 27,
        name: 'Smart Tv Hitachi Lcd FullHd 32"',
        image: '/images/TVHitachi32.webp',
        description: `Con el Smart TV CDH-LE32SMART19 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.

        Sumergite en la pantalla
        Su resolución HD presenta imágenes con gran detalle y alta definición. Ahora todo lo que veas cobrará vida con brillo y colores más reales.
        `,
        brand: 'Hitachi',
        category: 'SmartTV',
        price: 62399,
        countInStock: 1,
    },
    {
        _id: 28,
        name: 'Smart Tv Kanji KJ-6XST005 LED 4K 60"',
        image: '/images/smarttvkanji60googletv.webp',
        description: `
        Con el Smart TV KJ-6XST005 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.

        Viví en 4K
        La cantidad de pixeles que ofrece es 4 veces mayor que la Full HD, ¿el resultado? Escenas mucho más realistas y con un nivel de detalle increíble. Ahora vas a conocer una aventura de inmersión que no va a dejar de sorprenderte.
        `,
        brand: 'Kanji',
        category: 'SmartTV',
        price: 125059,
        countInStock: 1,
    },
    {
        _id: 29,
        name: 'Smart Tv 60" Kodak Full Hd 4k Led Tv',
        image: '/images/smarttvkodak60.webp',
        description: `
            -KODAK TV LED 60"
            -ALTA DEFINICION : UHD / HIGH
            -HDMI : 1.4
            -ENTRADA USB 2.0
            -60"
            -IMAGENES DE ALTA DEFINICION 3840 X 2160 PIXELES
            -ENTRADA DTV/ ANALOGICA X 1
            -RJ45 1 OPTICAL X 1
            -AV IN X 1 USB X 2
            -DIMEMSIONES
            -142 X 132 X 86 MM
        `,
        brand: 'Kodak',
        category: 'SmartTV',
        price: 175998,
        countInStock: 1,
    },
    {
        _id: 31,
        name: 'Freezer horizontal Nueva Neba F400 blanco 384Lts',
        image: '/images/FreezerNeba384LTS.webp',
        description:
            `Funciones: congelar, enfriar y freezar.
            Dimensiones: 120 cm de ancho, 85 cm de alto y 65 cm de profundidad.
            Tus alimentos siempre frescos y seguros.`,
        brand: 'Neba',
        category: 'Refrigeración',
        price: 108599,
        countInStock: 1,
    },
    {
        _id: 32,
        name: 'Heladera Exhibidora Vertical Vostok 370lts',
        image: '/images/HeladeraExhibidora370lts.webp',
        description:
            `° Heladera exhibidora con puerta de vidrio
            ° Volumen interno: 370 lts
            ° Color blanco
            ° 4 estantes intercambiables
            ° Motocompresor de 1/4 HP
            ° Gas Ecológico R134a
            ° Defrosting Semiatomático
            ° Voltaje 220V - Frecuencia 50Hz
            ° Rango de temperatura de 0° a 7° C
            ° Dimensiones: 55cm Ancho x 155cm Alto x 64 cm Profundidad
            ° Ideal para exhibir bebidas, verduras, lácteos, pastas, productos frescos, verduras.`,
        brand: 'Vostok',
        category: 'Refrigeración',
        price: 189799,
        countInStock: 1,
    },
    {
        _id: 33,
        name: 'Heladera Con Freezer Bambi 365lt Gris Sin Manija',
        image: '/images/heladeraBambi392lts.webp',
        description:
            `•Espacio para recipientes verticales.
            •Estantes de acero de alta resistencia.
            •Compartimiento extra frío.
            •Balcones desmontables / Porta botellas cromado.
            •Contenedor para huevos.
            •Batea para frutas y verduras.
            •Patas niveladoras regulables.
            • Máxima eficiencia energética: clase A.
            • LIBRE DE CFC: Los Clorofluorocarbonos, dañan la capa de ozono.`,
        brand: 'Bambi',
        category: 'Refrigeración',
        price: 115329,
        countInStock: 1,
    },
    {
        _id: 34,
        name: 'Heladera Con Freezer Drean Blanca Clase A',
        image: '/images/HeladeraFrezzerDrean264lts.webp',
        description:
            `Eficiencia energética: A.
            Tipo de Heladera: Con Freezer
            Tipo de enfriamiento: Cíclico.
            Material de los estantes: Vidrio Templado.
            Cantidad de los estantes: 3.
            Estantes removibles.
            Luz interior.
            Cajón de vegetales.
            Compartimiento botellas.
            Porta Huevos.
            Cubetera.
            `,
        brand: 'Drean',
        category: 'Refrigeración',
        price: 87999,
        countInStock: 1,
    },
    {
        _id: 35,
        name: 'Placard 3 puertas Bahia',
        image: '/images/placard3puertasbahia.webp',
        description:
            `Dimensiones: 914 mm de ancho, 1835 mm de alto y 460 mm de profundidad.
            Tiene 2 cajones.
            Posee 3 estantes.
            Cuenta con un barral de madera.
            Incluye accesorios para ensamblarlo.
            El mueble ideal para mantener tus prendas ordenadas.
            `,
        brand: 'Bahia',
        category: 'Muebles',
        price: 20729,
        countInStock: 1,
    },
    {
        _id: 36,
        name: 'Placard 4 puertas Bahia',
        image: '/images/Placard4PuertasBahia.webp',
        description:
            `Dimensiones: 121 cm de ancho, 184 cm de alto y 47 cm de profundidad.
            Tiene 2 cajones.
            Posee 3 estantes.
            Cuenta con un barral.
            Incluye accesorios para ensamblarlo.
            El mueble ideal para mantener tus prendas ordenadas.
            `,
        brand: 'Bahia',
        category: 'Muebles',
        price: 24729,
        countInStock: 1,
    },
    {
        _id: 37,
        name: 'Placard 5 puertas Bahia',
        image: '/images/Placard5puertasBahia.webp',
        description:
            `Dimensiones: 1810 mm de ancho, 1835 mm de alto y 460 mm de profundidad.
            Tiene 2 cajones.
            Posee 4 estantes.
            Cuenta con 2 barrales de madera.
            Incluye accesorios para ensamblarlo.
            El mueble ideal para mantener tus prendas ordenadas.
            `,
        brand: 'Bahia',
        category: 'Muebles',
        price: 35399,
        countInStock: 1,
    },
    {
        _id: 38,
        name: 'Cama 1 Plaza Y Media 1 1/2 De Pino Macizo',
        image: '/images/Cama1PlazaYMediaDePinoMacizo.webp',
        description:
            `PINOSHOW

            CAMA 1 PLAZA Y MEDIA EN PINO
            
            PARA COLCHÓN DE 190 X 100`,
        brand: 'Pinoshow',
        category: 'Muebles',
        price: 9499,
        countInStock: 1,
    },
    {
        _id: 39,
        name: 'Cocina Morelli Country Forza 550',
        image: '/images/CocinaMorelliCountryForza550.webp',
        description:
            `Lo que tenés que saber de este producto:   
            Cocina de pie.
            Tipo de alimentación: gas/eléctrica.
            Con encendido electrónico para mayor comodidad.
            Posee 4 hornallas.
            Interior cubierto con ladrillos refractarios.
            Dimensiones: 55cm de ancho, 85cm de alto y 62cm de profundidad.`,
        brand: 'Morelli',
        category: 'Cocinas',
        price: 96300,
        countInStock: 1,
    },
    {
        _id: 40,
        name: 'Cocina Peabody London 4 Hornallas Multigas Blanc',
        image: '/images/CocinaPeabodyLondon4Hornallas.webp',
        description:
            `Cocina Peabody multigas de 4 hornallas de color blanco - 56 cm
            - Marca: Peabody
            - Modelo: London
            - Alto: 83 cm.
            - Ancho: 56 cm
            - Profundidad: 52 cm
            - Hornallas: 4
            - Encendido electrónico: Manual
            - Válvula de seguridad: Si
            - Peso: 38 kg
            - Doble vidrio: Sí
            - Controles: Analógico
            - Plancha: Enlozada
            - Eficiencia energética AA en horno y hornallas
            - Tipo de gas: Multigas
            - Fácil Limpieza`,
        brand: 'Peabody',
        category: 'Cocinas',
        price: 59600,
        countInStock: 1,
    },
    {
        _id: 41,
        name: 'Horno Eléctrico Boher 35 Lts.',
        image: '/images/hornoelectriconegro.webp',
        description:
            `Características:
            - Marca: Boher.
            - Modelo B-42E.
            - Capacidad: 35 litros.
            - Potencia: 1800 W.
            - Ideal para hornear, cocinar a la parrilla o a la plancha y tostar.
            - Selector de temperatura de 100ºC A 250ºC.
            - Timer de 60 minutos.
            - Selector de potencia.
            - Apagado automático con timbre de aviso.
            - Bandeja esmaltada.
            - Rejilla y agarradera de acero inoxidable.
            - Rejillas y bandejas regulables en altura.
            - Medidas internas: Ancho: 38 cm. Alto: 33 cm. Profundidad: 29 cm.
            - Medidas externas: Ancho: 54 cm. Alto: 39 cm. Profundidad: 33,5 cm.`,
        brand: 'Boher',
        category: 'Cocinas',
        price: 19499,
        countInStock: 1,
    },
    {
        _id: 42,
        name: 'Bicicleta Rod29 Lamborghini Aluminio Shimano 21c',
        image: '/images/BicicletaRod29LamborghiniAluminio.webp',
        description:
            `Bicicleta Mountain Bike Rodado 29 Lamborghini® Aluminio Shimano® 21 Velocidades Cuadro M Bicicleta aerodinamica de alto rendimiento Estatura recomendada : De 145 a 195 Cm. aproximadamente Estilo Paseo Mountain Bike Pie de apoyo sobre vaina trasera Cuadro • Aluminio 1,4 mm espesor • Ruteado interno de los cables • Talles disponible S/M/L Ruedas • Llanta doble pared de aluminio de 36 agujeros • Cubiertas Wanda 29¨ x 2,1 mm • Camara butil 29¨x 1.75 valvula de auto • Cierre rapido en rueda delantera • Caucho Frenos • A disco Cambio • 21 Velocidades • TY3000 Shymano® Asiento • Simil Cuero • Altura Regulable Suspension • Delantera Con Bloqueo Forma • Con Altura 31,8 x 22x2 620 mm Stem • Aluminio Puños • Largo 123 • Agarraderas de manubrio de goma reforzada Horquilla • Bloqueable de 29¨ x 38 mm Descarrilador • TZ500 Shimano ® Caja Pedalera • Sellada de 122,5 mm Zhongya Palanca • Acero de 170 mm Piñon • 7 Velocidades Con Cubrerayos Peso Maximo Soportado : 110 Kg.`,
        brand: 'Lamborghini',
        category: 'Bicicletas',
        price: 73490,
        countInStock: 1,
    },
    {
        _id: 44,
        name: 'Pava eléctrica Winco W83 transparente 220V 1.8L',
        image: '/images/PavaElectricaWinco.webp',
        description:
            `Potencia de 1500w.
            Con capacidad para 1.8 litros.
            Con apagado automático.
            Trae luz indicadora de funcionamiento.
            Posee indicador de nivel del agua.
            Tiene función mate.
            Cuenta con base giratoria.
            Tecnología y rapidez para tus infusiones.`,
        brand: 'Winco',
        category: 'Pequeños',
        price: 8490,
        countInStock: 1,
    },
    {
        _id: 45,
        name: 'Licuadora Yelmo 1.5 L celeste con jarra de plástico',
        image: '/images/LicuadoraYelmo1LyMedio.webp',
        description:
            `Capacidad de 1.5 L.
            Su potencia es de 650 W.
            Cuchilla resistente de acero inoxidable.
            Tapa dosificadora incorporada.
            Funciona con 2 velocidades.
            Tus preparaciones preferidas listas en pocos minutos.`,
        brand: 'Yelmo',
        category: 'Pequeños',
        price: 12090,
        countInStock: 1,
    },
    {
        _id: 46,
        name: 'Termo Peabody E-termo 700w 1 Litro con Mate',
        image: '/images/TermoPeabody700w1Litro.webp',
        description:
            `Potencia de 700w.
            Con capacidad para 1 litros.
            Con apagado automático.
            Tecnología y rapidez para tus infusiones.`,
        brand: 'Peabody',
        category: 'Pequeños',
        price: 15730,
        countInStock: 1,
    },
    {
        _id: 47,
        name: 'Pack Gama Planchita + Secado',
        image: '/images/PlanchaySecadorGAMA.webp',
        description:
            `PLANCHA AVOCADO:

            Temperatura máxima de 230°C.
            Tecnología Nano Silver.
            Revestimiento de cerámica y aceite de Chía.
            Sistema de suspensión.
            Bivoltaje.
            Patines largos, 25 x 120mm.
            SECADOR AVOCADO:
            
            2300 W de potencia.
            Tecnología Nano Silver.
            Revestimiento de Cerámica y aceite de Chía.
            Filtro removible.
            3 Temperaturas, 2 velocidades.
            Cool Shot.
            Aro para colgar.
            Cable de 2 m.
            Incluye 1 boquilla.`,
        brand: 'GAMA',
        category: 'Pequeños',
        price: 21.057,
        countInStock: 1,
    },


    
    
    
    
]

export default products
