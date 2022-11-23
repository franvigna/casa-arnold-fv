const products = [
    {
        _id: 2,
        name: 'Celular Libre Samsung A52 Negro',
        image: '/images/GalaxyA52.png',
        description:
            'Celular Samsung modelo A52 cuenta con un procesador SDM720G octa/core 2.3Ghz una memoria RAM de 6GB y 128GB de almacenamiento interno expandible hasta 1TB con una tarjeta microSD, sonido potente con dolby atmos *2 parlantes integrados(, desbloqueo con huella dactilar en pantalla *FOD( NFC, one UI3.1,protección IP67 *resistente hasta 1M de profundidad en agua dulce durante 30 minutos(, batería de 4.500mAh para mayor duración de la batería y 25W super fast charging, pantalla infinity/0 display de 6.5@ FHD supera moled *90Hz(, cámara frontal de 32MP y cuádruple cámara trasera de 64MP',
        brand: 'Samsung',
        category: 'SmartPhone',
        price: 91499,
        countInStock: 1,
    },
    {
        _id: 3,
        name: 'Celular Libre Samsung A32 Blanco',
        image: '/images/GalaxyA32.png',
        description:
            'Celular libre sansung modelo A32 cuenta con una camara proncipal de 64+8+5+5MP una camara frontal de 20MP y flach, memoria interna de 128GB expandibla a 1TB en una micro SD, memoria RAM de 4GB, pantalla de 6.4" super AMOLED la resolucion de la pantalla es de 1080x2400 FH+,funcion NFC,bluetooth,WI-FI el sistema operativo es android 11, octa-core2GHz,1.8GHz, parlante exterio y bateria de 5000mAh.',
        brand: 'Samsung',
        category: 'SmartPhone',
        price: 75999,
        countInStock: 1,
    },
    {
        _id: 4,
        name: 'Celular Libre Motorola G60s Azul',
        image: '/images/Motog60s.png',
        description:
            'Celular Motorola G60s cuenta con una pantalla de 6.78@ * 1080x2460, 396ppi,HiD,120Hz(, sistema operativo android 11, procesador octa core 1.8Ghz * mediatek helio G95(, 4 cámara trasera 64]08]05]02MP, flash led, cámara frontal de 16MP con flash frontal, 6GB de memoria RAM y 128GB de memoria interna *disponible para el usuario 110GB( , expandible a 1TB con una tarjeta micro SD, acelerómetro, sensor de proximidad, brújula, huella dactilar, desbloqueofacial, wi fi y bluetooth, nano sim , batería de 5000 mAh con cargador turbo, con radio FM, no trae auriculares.',
        brand: 'Motorola',
        category: 'SmartPhone',
        price: 62999,
        countInStock: 1,
    },
    {
        _id: 5,
        name: 'Celular Libre Samsung S22 Ultra Blanco',
        image: '/images/S22Ultra.png',
        description:
            'Con el nuevo modelo de Samsung es el primer S Pen incorporado en el Galaxy S tiene una clasificación IP68 y pone la precisión al alcance de tu mano trae una pantalla quad HD+ edge de 6.8" con lector de huellas dactilares ultrasónico y reconocimiento facial, viene con marco de aluminio, la batería es de 5000 mAh y carga superrápida de 25 watts, el procesador es un octa-core, la memoria RAM es de 12GB y su memoria interna es de 256GB, dual SIM.',
        brand: 'Samsung',
        category: 'SmartPhone',
        price: 299999,
        countInStock: 1,
    },
    {
        _id: 6,
        name: 'Celular Libre Samsung A03 Negro',
        image: '/images/SamsungA03.png',
        description:
            'Celular Samsung A03 cuenta con un procesador octa-core 1.6GHz, la pantalla es de 6.5" HD+ la cámara frontal es de 5.0mpx y la cámara trasera es de 48+02mpx, la memoria RAM es de 4GB y 128GB de memoria expandible a 1TB con una tarjeta micro SD, buetooth 5.0 y la batería es de 5000 mAh.',
        brand: 'Samsung',
        category: 'SmartPhone',
        price: 47999,
        countInStock: 1,
    },
    {
        _id: 7,
        name: 'Celular Libre Motorola G52 Negro',
        image: '/images/MotoG52.png',
        description:
            'Hacé que tu entretenimiento favorito cobre vida con el contraste infinito que ofrece tonos oscuros más profundos y colores más brillantes, en la pantalla FHD+ de 6.6" y 90 Hz con tecnología pOLED. Gracias a la resolución Full HD+.',
        brand: 'Motorola',
        category: 'SmartPhone',
        price: 62999,
        countInStock: 1,
    },
    {
        _id: 8,
        name: 'Celular Libre Samsung A22 5G',
        image: '/images/GalaxyA22.png',
        description:
            'Celular Samsung A22 5G cuenta con un procesador octa-core 2.2GHz, la pantalla es de 6.6", la cámara frontal es de 8.0mpx y la cámara trasera es de 48+05+02mpx, la memoria RAM es de 4GB y 128GB de memoria expandible a 1TB con una tarjeta micro SD, buetooth 5.0.',
        brand: 'Samsung',
        category: 'SmartPhone',
        price: 69999,
        countInStock: 1,
    },
    {
        _id: 9,
        name: 'Smart Philips 65" 4K Android tv',
        image: '/images/SmartPhilips65-4k.jpg',
        description:
            'El nuevo Smart Philips cuenta con una resolución 4K UHD, con tecnología Ambilight en 3 lados y el sistema operativo Android tv Cuenta con control por voz con el Asistente de Google, HDR para imágenes brillantes, el diseño atractivo y ultra fino con marco plateado, Dolby Visión y Dolby Atmos para visión y sonido cinematográfico.',
        brand: 'Philips',
        category: 'Televisores',
        price: 179999,
        countInStock: 1,
    },
    {
        _id: 10,
        name: 'Aire Acondicionado Split Philco f/c 3350Watts',
        image: '/images/AireSplitPhilco3350watts.jpg',
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
        image: '/images/LavarropasAutomaticoDreanNext.jpg',
        description:
            'Lavarropas Drean next 8.14P eco inverter, clase A]]], 1400 RPM en el centrifugado, 8 kg de ropa, display led color * te indica el tiempo real el programa seleccionado , la temperatura asociada, la velocidad del centrifugado, el avance del ciclo en cada etapa de lavado y el tiempo remanente(, luz interior de tambor, bisagra 180grados, cúpula de vidrio, silencioso y económico ahorra hasta un 30% de energía comparado con un lavarropas clase A .',
        brand: 'Drean',
        category: 'Lavado/Secado',
        price: 98129,
        countInStock: 1,
    },
    {
        _id: 12,
        name: 'Freezer Neba F321 305Litros',
        image: '/images/FreezerNeba305LTS.png',
        description:
            'En este freezer Neba podés guardar grandes cantidades de alimentos, por largos períodos de tiempo en condiciones óptimas sin preocuparte por desperdiciar comida.Eficiencia y ahorro. Gracias a la eficiencia energética B vas a aprovechar al máximo su rendimiento ya que ahorra un 35% de consumo.',
        brand: 'Neba',
        category: 'Refrigeración',
        price: 83775,
        countInStock: 1,
    },
    {
        _id: 13,
        name: 'Freidora Ultra Rapida 10Litros',
        image: '/images/FreidoraUltraRapida10L.png',
        description: `Freidora a gas ultra rápida El Gauchito 443
    Gabinete de acero inoxidable
    Tacho enlozado con tapa de acero inox
    Inyectores enlozados
    Desagote con llave esférica
    Medidas: 40x60x90 cm (ancho/profundidad/altura)
    Consumo: 9400 cal/h
    Incluye 1 canasto de acero de 24x18x12 cm`,
        brand: 'El Gauchito',
        category: 'Gastronomía',
        price: 55566,
        countInStock: 1,
    },
    {
        _id: 14,
        name: 'Conservadora Corona Para 12 Porrones',
        image: '/images/ConservadoraCorona.png',
        description: `conservadora de cerveza corona original con manijas laterales para facilitar su traslado y destapador incorporado al frente, con amplia capacidad para 12 porrones de cerveza o latas y amplio espacio para colocar hielo`,
        brand: 'Corona',
        category: 'Refrigeración',
        price: 15960,
        countInStock: 1,
    },
    {
        _id: 15,
        name: 'Termotanque Electrico Vitta 80 Litros',
        image: '/images/TermotanqueElectricoVitta.png',
        description: `conservadora de cerveza corona original con manijas laterales para facilitar su traslado y destapador incorporado al frente, con amplia capacidad para 12 porrones de cerveza o latas y amplio espacio para colocar hielo`,
        brand: 'Corona',
        category: 'Termotanque/Calefones',
        price: 15960,
        countInStock: 1,
    },
    {
        _id: 16,
        name: 'Notebook Injoo Voom Max',
        image: '/images/NotebookInjooVoomMax.png',
        description: `Tamaño de pantalla: 14,1"
    Resolución: 1366×768 
    Procesador: Intel Celeron N3350 2,4GHz
    Memoria Ram: 6 GB RAM
    Almacenamiento: 64 GB SSD; Expansible hasta 1 TB SSD
    Bateria: 4000 mAh – 5-6h
    Sistema Operativo: Windows 10 
    Puertos: USB 2.0; Jack 3,5mm; SD 64GB; HDMI`,
        brand: 'Injoo',
        category: 'Notebook',
        price: 57022,
        countInStock: 1,
    },
    {
        _id: 17,
        name: 'Bicicleta Futura Country R26 Color Turquesa',
        image: '/images/BicicletaFuturaCountryR26Turquesa.png',
        description: `La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Sumate a esta ola sustentable que avanza en todo el mundo!`,
        brand: 'Futura',
        category: 'Bicicleta',
        price: 40399,
        countInStock: 1,
    },
    {
        _id: 18,
        name: 'Bicicleta Playera Canasto Rodado 24 Color Violeta',
        image: '/images/BicicletaPlayeraCanastoR26Violeta.png',
        description: `La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Sumate a esta ola sustentable que avanza en todo el mundo!`,
        brand: 'Futura',
        category: 'Bicicleta',
        price: 38089,
        countInStock: 1,
    },
    {
        _id: 19,
        name: 'Bicicleta Futura Mountain Bike Techno Rodado 29',
        image: '/images/BicicletaFuturaMontainbike.png',
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
        category: 'Bicicleta',
        price: 46999,
        countInStock: 1,
    },
    {
        _id: 20,
        name: 'Bicicleta Rodado 12 Ruedas De Goma Cars 3',
        image: '/images/BicicletaR12RuedasDeGoma.png',
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
        category: 'Bicicleta',
        price: 18290,
        countInStock: 1,
    },
    {
        _id: 21,
        name: 'Ventilador Pie 3 En 1, 5 Paletas Aluminio',
        image: '/images/VentiladorPie3En1.png',
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
        image: '/images/VentiladorParedYPiso.png',
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
        image: '/images/AireAcondicionadoKanji2600W.png',
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
        image: '/images/AireacondicionadoAlaska2322Frigorias.png',
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
        image: '/images/BicicletaR2BmxRosa.png',
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
        category: 'Bicicleta',
        price: 16990,
        countInStock: 1,
    },
]

export default products
