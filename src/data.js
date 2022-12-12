import slider1 from "./img/slide-lebron.png"
import slider2 from "./img/slide-lebron-2.png"
import slider3 from "./img/slide-lebron-3.png"
import categorie from "./img/nike.png"
import product from "./img/produto.png"

export const header_links = [
  {
    name: "Início",
    href: "/"
  },
  {
    name: "Produtos",
    href: "/produtos"
  },
  {
    name: "Sobre Nós",
    href: "/sobre"
  },
  {
    name: "Marcas",
    href: "/marcas"
  },
]

export const footer_sections = [
    {
        title: "Contato",
        links: [
            {
                name: "highshoes@fakemail.com",
                href: "mailto:highshoes@fakemail.com"
            },
            {
                name: "11 9999-9999",
                href: "tel:1199999999"
            }
        ]
    },
    {
        title: "Informação",
        links: [
            {
                name: "Sobre nós",
                href: "/sobre"
            },
            {
                name: "Promoções",
                href: "/promocoes"
            },
            {
                name: "Produtos",
                href: "/produtos"
            }
        ]
    },
    {
        title: "Ajuda",
        links: [
            {
                name: "Suporte whatsapp",
                href: "/whatsapp"
            },
            {
                name: "Suporte e-mail",
                href: "/email"
            },
            {
                name: "Termos",
                href: "/termos"
            }
        ]
    }
]

export const sliderItems = [ 
    {
        id: 1,
        img: slider1,
        link: "#"
    },
    {
        id: 2,
        img: slider2,
        link: "#"
    },
    {
        id: 3,
        img: slider3,
        link: "#"
    },
]

export const brands = [
    {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png",
        name: "Adidas"
    },
    {
        id: 2,
        img: categorie,
        name: "Nike"
    },
    {
        id: 3,
        img: "https://i.pinimg.com/originals/01/39/93/0139937c2f641ab61fd020844ccfd459.png",
        name: "Jordan"
    },
    {
        id: 4,
        img: "https://logos-download.com/wp-content/uploads/2016/02/New_Balance_black_logo.png",
        name: "New Balance"
    },
]

export const categories = [
    {
        id: 1,
        img: categorie,
        title: "SHOES AND MORE",
    },
    {
        id: 2,
        img: categorie,
        title: "HIGH PROMO",
    },
    {
        id: 3,
        img: categorie,
        title: "SHIRT/CLOTHES",
    },
]

export const newProducts = [

    {
        id: 6,
        name: "Tênis Nmd_V3",
        description: "Vá em frente e marque todos os requisitos com este tênis adidas NMD_V3. Respirável. Confortável. Feito de materiais reciclados. A resposta é sim para os três. Além disso, há o estilo, como os detalhes perfurados, que também agregam respirabilidade. Brincando com a transparência, as Três Listras sobrepõem-se às perfurações, deixando-as visíveis sob a assinatura monocromática. O cabedal deste tênis é feito com fios de alta performance contendo pelo menos 50% Parley Ocean Plastic — plástico reciclado reimaginado interceptado em ilhas remotas, praias, comunidades costeiras e litorais, evitando poluir os oceanos. Os outros 50% dos fios são de poliéster reciclado.",
        price: 1199.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://eurosport.com.mt/images/thumbs/0163601_nmd_v3-shoes_550.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 7,
        name: "Tênis Forum Exhibit Low",
        description: "O adidas Forum já virou ícone. Este modelo é a próxima evolução dele. Ainda inconfundível como clássico atemporal da moda basquete, este tênis inclui os mesmos detalhes essenciais, como o tornozelo em X e as Três Listras. A partir daí, deixamos o design evoluir com um cabedal em camadas e cores modernas.",
        price: 599.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.thenextsole.com/storage/images/GW4358.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },

    {
        id: 10,
        name: "Tênis Ozelia",
        description: "Devemos respeito à saúde dos oceanos no mundo. Vamos começar a avançar. Este tênis de corrida oferece todo o conforto e responsividade do Ultraboost com um grande bônus: é feito parcialmente com Parley Ocean Plastic. O cabedal adidas PRIMEKNIT envolve os pés e possui entressola BOOST com incrível retorno de energia. O sistema Linear Energy Push, integrado ao solado, aumenta a estabilidade, proporcionando mais responsividade que nunca.",
        price: 699.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.courir.es/on/demandware.static/-/Sites-master-catalog-courir/default/dwc44aeaed/images/hi-res/001493080_101.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 11,
        name: "Tênis Eqt Support 93",
        description: "Lançado em 1993, o tênis adidas Equipment Support impactou instantaneamente o mundo da corrida com seu design envolvente na língua e o famoso Torsion System. A funcionalidade era sua maior prioridade, uma ideia que a famosa fabricante de canivetes Victorinox conhece bem. Marcando a nossa colaboração com essa marca de 130 anos, este tênis parte do conceito do EQT para explorar o mundo, sempre preparado para o que der e vier. Ele inclui bolso destacável, solado semitranslúcido e palmilha antibacteriana, sendo ideal para qualquer aventura. Você não precisa de mais nada.",
        price: 999.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.thenextsole.com/storage/images/S79112.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },

    {
        id: 16,
        name: "Tênis x Nike Air Adjust Force",
        description: "Yoon Ahn atualiza o tênis de estilo clandestino que você desejava ver nas ruas. De couro de flor integral rico a detalhes de marca compartilhada que adicionam moeda ao seu passo, o Air Adjust Force x AMBUSH® permite que você dance a linha entre o estilo fora da quadra e o estilo da passarela. Mantivemos a alça removível no mediopé que tornou esse visual uma lenda - você pode até misturar e combinar para dar um charme extra ao seu ajuste. Quanto à cor, a colorway Light Madder Root e Burgundy Crush certamente trará o drop onde quer que você vá.",
        price: 1899.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.soleretriever.com/_next/image?url=https%3A%2F%2Fsoleretriever.s3.amazonaws.com%2F702b2611-a855-4aaf-b03a-1883c6c9c759.png&w=1200&q=75",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
        
    },
    {
        id: 17,
        name: "Tênis cano baixo x sacai Cortez 4.0",
        description: "O design do NIKE CORTEZ é bastante respeitado nessa nova construção, ainda que a influência da SACAI esteja bastante clara. Ele vem sendo chamado de CORTEZ 4.0 e conta colarinho duplo, língua dupla, Swoosh duplo, contraforte duplo e cadarços duplos, que mantêm o efeito 3D que foi tão explorado nas colaborações anteriores.",
        price: 2861.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://images.stockx.com/images/Nike-Vaporwaffle-sacai-Villain-Red-Neptune-Green.png?fit=fillbg=FFFFFFw=1200h=857fm=webpauto=compressdpr=2trim=colorupdated_at=1607102901q=75",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
        
    },
    {
        id: 19,
        name: "SB Dunk Low Neckface",
        description: "Conhecido por sua mentalidade macabra, o filho do skate Neckface dá vida ao seu estilo medonho e inspirado no heavy metal no SB Dunk Low. Sinônimo de SB e da paisagem do graffiti por décadas, o design celebra o lado positivo da má sorte com uma variedade de patches que levam você diretamente ao caderno de esboços do Grim Reaper.",
        price: 1199.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://media.soleretriever.com/ae5af0be-8be7-4f1f-9015-9664a6fbd555.png",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
        
    },
    {
        id: 20,
        name: "Nike Tênis Shox Ride 2 SP x Supreme",
        description: "O Supreme Nike Shox Ride 2 começou a se revelar lentamente através das mídias sociais, revelando a marca Supreme nos pilares Shox. Quatro colorways foram oficialmente revelados - três padroes da Supreme e uma quarta combinação de azeite/volt. Todos apresentam uma construção clássica de malha e couro com forros de língua e calcanhar DURPLUSH e painéis de logotipo de borracha",
        price: 3482.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://media.soleretriever.com/ecd65233-4b6a-4cec-a06b-b5d697cf8735.png",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
        
    },
    {
        id: 23,
        name: "Nike x Stussy Air Force 1 Mid ",
        description: "Crie um estilo marcante com esta colaboração da Nike com a Stüssy. A parte de cima em couro premium se combina com um forro em malha para oferecer o máximo de conforto. A marca icônica duplicada permite representar suas marcas favoritas. O couro viçoso oferece um look limpo, durável e sustentado. Marca original Stüssy na tira, no calcanhar e na ponta. Da costura resistente a materiais impecáveis e um design de forma da sola, ele oferece um estilo durável. Desenvolvido originalmente para o treino de basquete, o amortecimento Nike Air proporciona um conforto duradouro, enquanto a boca e a língua almofadadas garantem uma passada suave.",
        price: 2291.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/1000/attachments/product_template_pictures/images/072/332/157/original/878608_00.png.png",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
        
    },
    
    {
        id: 25,
        name: "Nike x Drake Hot Step Air Terra Nocta White",
        description: "Criado em parceria com a marca de vestuário de Drake, o NOCTA x Nike Hot Step Air Terra 'White' faz uso de uma parte superior de couro com acabamento em branco. Uma série de linhas diagonais costuradas, juntamente com detalhes perfurados, embelezam cada um dos painéis laterais do tênis. A marca NOCTA com joias é exibida no topo da língua, enquanto os mini-Swooshes cromados adornam a biqueira e o calcanhar lateral. O tênis tem uma entressola de espuma branca combinando, com paredes laterais esculpidas e uma unidade Air-sole exposta em amarelo sob o calcanhar.",
        price: 2163.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.soleretriever.com/_next/image?url=https%3A%2F%2Fmedia.soleretriever.com%2F250cbf0a-077f-41cd-99ce-d47222e76c6a.png&w=1200&q=75",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
        
    },
    {
        id: 30,
        name: "Nike Dunk High X Ambush Deep Royal",
        description: "Projetado em parceria com a marca de Tóquio dirigida por Yoon Ahn, o AMBUSH x Nike Dunk High ‘Deep Royal’ oferece uma visão estilizada da silhueta vintage. A parte superior toda em couro combina uma base branca nítida com sobreposições contrastantes em azul royal e um Swoosh preto de grandes dimensões inspirado nos escapamentos de motocicletas, com uma cauda que se estende além do calcanhar. A marca AMBUSH pousa em um contraforte externo de TPU e na etiqueta tecida que adorna uma língua de espuma exposta. O cano alto é montado em uma cupsole de borracha padrão, destacada por paredes laterais brancas e uma sola azul royal.",
        price: 2547.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/1000/attachments/product_template_pictures/images/055/222/887/original/721858_00.png.png",
        brandId: 2,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 31,
        name: "Air Jordan 5 Retro Dark Concord",
        description: "Traga um pouco de harmonia ao seu ajuste com esta nova colorway AJ5. Toques sutis de Dark Concord sobre o couro branco farão você se sentir como a realeza, enquanto uma língua refletiva e uma sola tipo gelo revelam joias escondidas. Detalhes impecáveis ??do original, como as aberturas laterais, a entressola pontiaguda e a trava de renda transparente, unem tudo, dando a esses tênis clássicos aquele fascínio cortante",
        price: 1899.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://cdn.sneakersquad.nl/uploads/sneakers/DD0587-141.png?auto=compress%2Cformat&h=400&ixlib=php-3.3.1&trim=auto&trim-sd=1&w=1000",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 32,
        name: "Air Jordan 3 Retro ",
        description: "É o retorno de uma lenda: o design Tinker Hatfield que solidificou o relacionamento de MJ com a Nike retorna à sua forma original de 1988. Detalhes em Fire Red e couro preto e cinza ferro rachado na ponta do pé e no calcanhar acenam para o lançamento icônico, enquanto NIKE AIR escrito na parte de trás traz um verdadeiro apelo vintage. Falando em Air, você pode contar com o amortecimento comprovado sob os pés para mantê-lo em movimento.",
        price: 1899.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/314/448/products/398614_111-png1-5b1d863f5cc23ad96f16595804123178-1024-1024.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 33,
        name: "Air Jordan 4 Retro White Oreo",
        description: "O Air Jordan 4 Retro 'White Oreo' apresenta um tema de design que lembra o 'Oreo' AJ4 original de 1999. A parte superior de couro preto caído do calçado mais antigo é substituída por um acabamento branco, embora os ilhós moldados salpicados em Tech Grey permaneçam o mesmo. O matiz neutro é repetido no logotipo do salto do Jumpman e na sola com amortecimento de ar encapsulado no antepé e uma unidade visível sob o calcanhar. Um segundo Jumpman adorna a língua em um pop contrastante de Fire Red",
        price: 6465.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://images.tcdn.com.br/img/img_prod/938519/tenis_air_jordan_4_retro_white_oreo_2587_1_bfae5f7cea7510e3612e383c1b25c775_20210812081815.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 34,
        name: "Air Jordan 14 Retro SE",
        description: "Transporte-se de volta ao início dos anos 2000 com esta combinação de cores clássica. Forro extraquente e couro texturizado mantêm você estiloso para a estação. Seu toque refinado de inverno permanece enraizado na linhagem Air Jordan. Você está preparado para o inverno?",
        price: 3355.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/000/036/055/original/487524_070.png.png?action=crop&width=750",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    
    {
        id: 34,
        name: "Jordan 6 Rings 'Hare'",
        description: "O Jordan 6 Rings é um tênis híbrido comemorativo que combina elementos dos seis tênis Air Jordan exclusivos que MJ usou para vencer seus seis campeonatos da NBA - daí o nome épico do modelo. Historicamente, o 6 Rings sempre foi um modelo divisivo entre os colecionadores da Jordan devido ao seu design miscelâneo e, ocasionalmente, cores berrantes.",
        price: 2163.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/079/300/673/original/484178_00.png.png?action=crop&width=750",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },    
    {
        id: 35,
        name: "Air Jordan 13 Retro Masculino",
        description: "O Air Jordan 13 Retro traz de volta os inesquecíveis tênis de jogo que Michael Jordan usou durante a temporada de 97-98 rumo ao seu 6º título de campeonato. Todos os detalhes clássicos estão presentes, como a sobreposição acolchoada, a icônica entressola esculpida e o olho holográfico.",
        price: 1499.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://images.tcdn.com.br/img/img_prod/938519/tenis_air_jordan_13_retro_playoff_2011_2913_1_f77d04a8eac964cb366c331565ca90d7_20210812081825.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },    
    {
        id: 36,
        name: "Air Jordan 6 Retro ",
        description: "Uma colorway que está no cofre há mais de 20 anos está voltando forte nesta estação. Mantendo as especificações OG, o Air Jordan 6 Midnight Navy, lançado pela primeira vez como retrô em 2000, é colorido de maneira familiar para os fãs do AJ6. Uma parte superior de couro premium totalmente branca permite uma sobreposição nítida com detalhes Midnight Navy na entressola, Jumpman bordado, no calcanhar e na língua. Sua sola glacial e translúcida finaliza o estilo com um toque cool.",
        price: 1499.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/001/965/999/original/543390_008.png.png?action=crop&width=750",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },    
    {
        id: 37,
        name: "Air Jordan 1 Zoom Confort Masculino ",
        description: "O ícone do estilo ficou ainda mais confortável. O Air Jordan 1 Zoom Cmft recria o primeiro Air Jordan com amortecimento leve, perfil baixo e elementos que melhoram a utilização. Os couros e tecidos na parte de cima proporcionam uma sensação aconchegante. A boca forrada e acolchoada envolve o calcanhar para um ajuste seguro",
        price: 1399.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://images.tcdn.com.br/img/img_prod/938519/tenis_air_jordan_1_high_zoom_comfort_olive_aura_3127_1_f255764071b6db8aeca124455477f590.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },    
    {
        id: 38,
        name: "Air Jordan Legacy 312 Low Masculino ",
        description: "O Air Jordan Legacy 312 Low homenageia o legado de Michael Jordan com menção ao código de área 312 de Chicago. O design cria uma versão moderna dos icônicos elementos Jordan. Couro, material sintético e/ou tecido no cabedal com faixa no mediopé para ajuste seguro. Unidade Air-Sole visível no calcanhar para mais amortecimento.",
        price: 1399.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://images.tcdn.com.br/img/img_prod/938519/tenis_jordan_legacy_312_low_tech_grey_cement_1885_1_f1c46957903d06178e3e7e99a8089729_20210812081459.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },    
    {
        id: 39,
        name: "Air Jordan 1 Low SE Spades",
        description: "O Air Jordan 1 Low SE Spades se inspira em um jogo de cartas que há muito é popular entre os atletas da NBA. Uma reminiscência do verso de cartas de jogar, uma impressão paisley em relevo é aplicada ao painel de um quarto de cor carmesim e ao envoltório do dedo do pé. Couro branco contrastante é utilizado na biqueira, no eyestay, na gola e no calcanhar, este último acentuado com um logotipo bordado da Wings. Um Swoosh metálico dourado brilhante é acompanhado por um bordado 'K' e 'Q' no antepé lateral do sapato esquerdo e direito. Um ícone de espada na lingueta tecida completa a homenagem ao cartão de jogo.",
        price: 2924.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5aO7QA55LNVNRi6DTjX5rL3JB6hEKvi5MW4CqaoNCxbdn3yI91V7I6Ay10oMtahpJXM&usqp=CAU",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 40,
        name: "Tênis Air Jordan 1 Low 'Mystc Green' ",
        description: "Chegando na aparência tradicional de cores bloqueadas, o Jordan 1 Low Black Mystic Green é pintado em tons de verde, preto e branco. Inspirando-se nas silhuetas de skate da Nike, uma parte superior de couro e camurça é recebida com uma língua de veludo para um visual que é feito para virar a cabeça. Um Jumpman bordado atinge a língua, enquanto um motivo de bola e asas costuradas está presente ao redor do calcanhar, completando o design atemporal.",
        price: 2924.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://images.tcdn.com.br/img/img_prod/938519/tenis_air_jordan_1_low_island_green_1589_1_15f915b5df447bd3739da849f7ddd2cd_20210812081446.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    }, 
    {
        id: 41,
        name: "Off-White x Air Jordan 2 Low White and Varsity Red",
        description: "Quando o Air Jordan 2 estreou em 1986, foi o primeiro tênis a trazer detalhes de luxo para uma silhueta esportiva. Fabricado na Itália, os pares OG apresentam um visual premium que rapidamente lhes rendeu um lugar icônico na história da Air Jordan. Inspirado pela herança e impacto deste lendário tênis, o designer da Off-White ™ Virgil Abloh agora adiciona ao legado sua própria homenagem pessoal ao Air Jordan 2 Low.",
        price: 7572.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://5.kixify.com/sites/default/files/imagecache/product_full/product/2021/11/12/p_33471126_192022866_526021.png",
        brandId: 3,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 42,
        name: "Aimé Leon Dore x 550 Brown ",
        description: "O Aimé Leon Dore x New Balance 550 'Brown' reúne as marcas parceiras responsáveis por reviver o há muito esquecido sapato de argola originalmente lançado em 1989. Este par utiliza uma parte superior de couro branco com uma sobreposição microperfurada no mediopé e malha acolchoada ao redor da gola. Acentos marrons contrastantes incluem uma etiqueta de língua tecida de marca conjunta e um logotipo 'N' de couro rachado no painel lateral. Um acabamento esbranquiçado envelhecido é aplicado à entressola de borracha, com uma cunha de EVA exposta no lado medial e uma sola de borracha marrom sob os pés.meiro tênis a trazer detalhes de luxo para uma silhueta esportiva. Fabricado na Itália, os pares OG apresentam um visual premium que rapidamente lhes rendeu um lugar icônico na história da Air Jordan. Inspirado pela herança e impacto deste lendário tênis, o designer da Off-White ™ Virgil Abloh agora adiciona ao legado sua própria homenagem pessoal ao Air Jordan 2 Low.",
        price: 4646.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.thenextsole.com/storage/images/BB550ALE.png",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 43,
        name: "991 Aime Leon Dore MiUK Grey",
        description: "Como parte da linha Made In UK da New Balance, o New Balance 991 Aimé Leon Dore Grey oferece qualidade premium e conforto em uma paleta de tons naturais. Ele vem com uma parte superior de malha creme, sobreposições de camurça cinza peluda e debrum de camurça verde contrastante. Na base, uma sola ENCAP macia oferece conforto e suporte.",
        price: 4646.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://cdn.sneakerbaron.nl/uploads/2021/02/10015655/new-balance-991-greynavy-m991sgn-55-700x343.png",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 44,
        name: "Salehe Bembury x New Balance 574 YURT",
        description: "Os tênis '547' da New Balance receberam uma atualização distinta do designer de calçados Salehe Bembury. Eles são projetados com uma sola exagerada e construção de malha aberta e detalhados com um apito de segurança de plástico moldado no calcanhar.",
        price: 2112.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrSzH42nTOdCpiZ-CEphdSm1F0X5oAKSiMiTMXLBlnerZ1CXT-CWROiYYMOPZN3tsxNY&usqp=CAU",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 45,
        name: "ALD x New Balance 650R ",
        description: "Depois de reformular e dar nova vida ao clássico P550 Basketball Oxford fora de quadra, New Balance e Aimé Leon Dore voltam suas atenções para o cano alto. Inspirando-se no 550, o 650 adapta as proporções descomunais do modelo original de quadra, ao mesmo tempo em que apresenta gola bufante e pespontos e detalhe em couro cru, criando o tênis de basquete completo.",
        price: 3659.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/070/334/300/original/919958_00.png.png?action=crop&width=750",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 46,
        name: "Made in USA 990v3 Levi's",
        description: "New Balance e Levi's® se unem mais uma vez para criar uma nova versão de um clássico MADE in USA: o 990v3. Sobreposições de camurça de vaca e camurça peluda ficam sobre as camadas de denim da Levi's em toda a parte superior",
        price: 4973.00,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ797sLu0Z9RxYLehYIHwQo9i0wTMhfkPnb9iWqDBLIhhFciV227LVcDqBrhUVww0kuxmg&usqp=CAU",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 47,
        name: "Tênis New Balance 9060 Casual",
        description: "O novo New Balance 9060 distorce e exagera elementos de design retirados da clássica série 990. Através desta inspiração a construção do sneaker se torna icônica, com uma pegada futurista e ousada utilizando-se de aspectos experimentais e de tecnologia visual da era dos anos 2000. Com diversas peças no cabedal, a malha premium e parte superior em nobuck são equipadas em uma paleta de tons suaves, no contraforte uma peça em TPU amplifica o design. A entressola oversized com amortecimento exclusivo ABZORB garante máximo conforto durante o uso e o acolchoamento interno foi projetado com uma textura macia e agradável.",
        price: 1149.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.pricerunner.com/product/1200x630/3006955013/New-Balance-9060.jpg",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 48,
        name: "New Balance Kawhi 2 Conversations Amongst Us",
        description: "Projetado com o bicampeão da NBA e MVP das finais da NBA, Kawhi Leonard junto ao designer e diretor criativo Joe Freashgoods, o Kawhi II Conversations Amongst Us é a fusão perfeita entre estilo e performance. Joe Freshgoods veio para somar nesta execução que faz referência a história e cultura da comunidade negra norte americana. Nesta campanha, Kawhi e Joe se juntaram para revisitar as memórias e a conexão entre eles e sua comunidade, trazendo as mesmas cores e detalhes das recentes criações de Joe nos modelos New Balance BB550 e 2002R.",
        price: 1299.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://cdn.sneakerbaron.nl/uploads/2022/05/17032208/New-Balance-KAWHI-2-Ocean-Blue-Orange-BBKLSSD2-400x217.png",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 49,
        name: "New Balance SuperComp Trainer Corrida Feminino",
        description: "Com design e logótipo explorados ao máximo neste modelo, o cabedal recebe uma malha de Engineered Knit elegante e possui uma língua elástica reforçada na parte superior, para uma sensação mais confortável quando estiver desempenhando sua performance nas ruas.",
        price: 1499.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://www.rodrigoroehniss.com.br/wp-content/uploads/2021/06/RC_ELITE_V2_ABERTURA_ARTIGO-removebg-preview.png",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
    {
        id: 50,
        name: "New Balance 1080v11 Corrida Masculino ",
        description: "Sucessor do icônico New Balance RC Elite, o Fuelcell SuperComp Elite V3 foi projetado para máxima performance e desempenho. O SC Elite V3 é ideal para corredores e maratonistas que nunca desistem. A entressola composta por dupla camada de espuma com tecnologia Fuelcell somada a placa de fibra de carbono oferece um retorno de energia impressionante com a inovadora tecnologia Energy Arc.",
        price: 1899.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/078/421/186/original/MRCELNY3.png.png?action=crop&width=750",
        brandId: 4,
        stock: 20,
        paymentUrl: "price_1MDubJL2PaVveUDbh14s1PJr"
    },
]

export const popularProducts = [
    {
        id: 1,
        img: product,
    },
    {
        id: 2,
        img: product,
    },
    {
        id: 3,
        img: product,
    },
    {
        id: 4,
        img: product,
    },
    {
        id: 5,
        img: product,
    },
    {
        id: 6,
        img: product,
    },
    {
        id: 7,
        img: product,
    },
    {
        id: 8,
        img: product,
    }
]
 
export const faq = [
    {
        id: 0,
        title: "Em quantos dias meus pedidos chegam?",
        description: "Nosso frete entrega em até 15 dias."
    },
    {
        id: 1,
        title: "O valor final da compra pode ser parcelado?",
        description: "Sim, em até 12x."
    },
    {
        id: 2,
        title: "Há limite de quantidade na compra de algum item?",
        description: "O limite para a compra de qualquer item depende da disponibilidade do mesmo no estoque."
    },
    {
        id: 3,
        title: "Os produtos vendidos na HighSHoes são orignais/oficiais ?",
        description: "Sim! Todos os produtos comercializados pela HighShoes são adiquiridos diretamente dos fabricantes e seus distribuidores oficiais."
    }
]
export const integrantes1 = [
    {
        id: 1,
        name: "Matheus Cardoso",
        funcao: "Back-End"
    },
    {
        id: 2,
        name: "Guilherme Nobre",
        funcao: "Design"
    },
    {
        id: 3,
        name: "Carla Brito",
        funcao: "Back-End"
    }

]
export const integrantes2 = [
    {
        id: 1,
        name: "Gabriel Santos",
        funcao: "Front-End"
    },
    {
        id: 2,
        name: "Luiza Souza",
        funcao: "Front-End"
    },
    {
        id: 3,
        name: "Geovana",
        funcao: "Produtora de Conteudo"
    }

]
