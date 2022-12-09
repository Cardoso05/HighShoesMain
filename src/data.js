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
                name: "Serviços",
                href: "/servicos"
            },
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
                href: "termos"
            }
        ]
    }
]

export const sliderItems = [ 
    {
        id: 1,
        img: slider1,
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: slider2,
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: slider3,
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS",
        bg: "f5fafd",
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
        id: 1,
        name: "Tênis Corrida Adidas 4dfwd 2",
        description: "O adidas 4DFWD 2 redefine a evolução, combinando a exclusiva inovação pioneira da entressola impressa em 3D com a nova estrutura do cabedal e o solado Continental para mais aderência. A entressola do adidas 4DFWD 2 se comprime e reduz as forças de frenagem, transformando a energia do impacto em impulso a cada passo. O resultado é uma corrida suave que desliza seus pés sobre o asfalto. O solado de borracha Continental aderente oferece tração em superfícies secas e molhadas, mantendo você em movimento em qualquer condição climática, e o novo ajuste do cabedal adidas PRIMEKNIT+ envolve os pés para melhorar a movimentação. Feito com uma série de materiais reciclados, o cabedal contém pelo menos 50% de conteúdo reaproveitado. Este produto representa apenas uma das nossas soluções para ajudar a acabar com os resíduos plásticos",
        price: 1599.99,
        sizes: ["36", "37", "38", "39", "40", "42"],
        img: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/VuAAAOSwRL9hm4MD/$_57.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1KQeMdL2PaVveUDbWETLUMdl"
    },
    {
        id: 3,
        name: "Tênis Ultra 4d",
        description: "Todo dia é uma oportunidade de melhorar as suas expectativas, perspectivas e habilidades de corrida. O Ultra 4D foi codificado para ajudar nessa trajetória, começando com uma entressola 4D impressa em 3D que estabiliza a sua corrida. O amortecimento duradouro ajuda a ir mais longe, e o adidas PRIMEKNIT abraça os pés para mais suporte a cada passo dado. Feito com uma série de materiais reciclados, o cabedal contém pelo menos 50% de conteúdo reaproveitado. Este produto representa apenas uma das nossas soluções para ajudar a acabar com os resíduos plásticos.",
        price: 1499.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://cdn.shopify.com/s/files/1/0550/3657/5853/products/Ultra_4D_Core_White-FX4089-0.png?v=1658841793&width=1024",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1KQeMdL2PaVveUDbWETLUMdl"
    },
    {
        id: 4,
        name: "Tênis Pharrell Williams HU NMD",
        description: "Pharrell Williams é conhecido por não aceitar limitações. Em colaboração com esse visionário, nossa mais recente coleção é sobre quebrar barreiras e ter expressão pessoal. Explore isso com este tênis adidas x Pharrell Williams HU NMD. A combinação de força do cabedal flexível adidas Primeknit com a entressola macia BOOST faz cada movimento parecer fácil.",
        price: 1199.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://droper-media.s3.amazonaws.com/2522021142743214.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1KQeMdL2PaVveUDbWETLUMdl"
    },
    {
        id: 5,
        name: "Tênis X9000l4 Heat.Rdy",
        description: "Mantenha o ritmo durante a parte mais quente do dia. Este tênis de corrida adidas HEAT.RDY tem cabedal em mesh que recebe fluxo de ar refrescante em corridas de curta e média distâncias. A tecnologia Boost oferece incrível retorno de energia e conforto instantâneo para você seguir em frente. O cabedal adidas Primeknit envolve os pés com suporte adaptativo, melhorando a mobilidade. Feito com uma série de materiais reciclados, o cabedal contém pelo menos 50% de conteúdo reaproveitado. Este produto representa apenas uma de nossas soluções para ajudar a acabar com os resíduos plásticos.",
        price: 899.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://martimx.vtexassets.com/arquivos/ids/1003823-800-800?v=638022688677530000&width=800&height=800&aspect=true",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1KQeMdL2PaVveUDbWETLUMdl"
    },
    {
        id: 6,
        name: "Tênis Nmd_V3",
        description: "Vá em frente e marque todos os requisitos com este tênis adidas NMD_V3. Respirável. Confortável. Feito de materiais reciclados. A resposta é sim para os três. Além disso, há o estilo, como os detalhes perfurados, que também agregam respirabilidade. Brincando com a transparência, as Três Listras sobrepõem-se às perfurações, deixando-as visíveis sob a assinatura monocromática. O cabedal deste tênis é feito com fios de alta performance contendo pelo menos 50% Parley Ocean Plastic — plástico reciclado reimaginado interceptado em ilhas remotas, praias, comunidades costeiras e litorais, evitando poluir os oceanos. Os outros 50% dos fios são de poliéster reciclado.",
        price: 1199.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: "https://eurosport.com.mt/images/thumbs/0163601_nmd_v3-shoes_550.png",
        brandId: 1,
        stock: 20,
        paymentUrl: "price_1KQeMdL2PaVveUDbWETLUMdl"
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
        paymentUrl: "price_1KQeMdL2PaVveUDbWETLUMdl"
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
        title: "Em quantos dias meus pedidos chegam?",
        description: "Nosso frete entrega em até 15 dias."
    },
    {
        id: 2,
        title: "Em quantos dias meus pedidos chegam?",
        description: "Nosso frete entrega em até 15 dias."
    },
    {
        id: 3,
        title: "Em quantos dias meus pedidos chegam?",
        description: "Nosso frete entrega em até 15 dias."
    },
    {
        id: 4,
        title: "Em quantos dias meus pedidos chegam?",
        description: "Nosso frete entrega em até 15 dias."
    },
    {
        id: 5,
        title: "Em quantos dias meus pedidos chegam?",
        description: "Nosso frete entrega em até 15 dias."
    },
]