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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/2560px-Asics_Logo.svg.png",
        name: "Asics"
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
        name: "Tênis Asics Gel Equation 11 Masculino - Preto+Prata",
        description: "lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum,lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        price: 449.99,
        sizes: ["39", "41", "42"],
        img: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(95)/fastteni/catalog/asics/shopping.png",
        brandId: 1,
        stock: 2
    },
    {
        id: 2,
        name: "Nike sb Dunk Low “Cactus Jack”",
        description: "AMORTECIMENTO MACIO PARA CORRIDAS DIÁRIAS.Sinta o potencial com o Nike Renew Run 3. Macio e elástico nas áreas mais importantes, esse tênis mantém seu pé estável a cada passo e rotação. A espuma extremamente macia proporciona uma sensação ligeiramente elástica para mais agilidade em seus passos. Ele tem um look simplificado com detalhes frescos que convidam a calçar e desbravar a estrada.Macio de todas as formas certasO amortecimento na língua e na boca proporciona uma sensação de maciez que você sente no momento em que calça os tênis. O design intuitivo foi criado para calçar e tirar o tênis com mais facilidade.Passos estáveisUma presilha de calcanhar em TPU ajuda a manter seu pé seguro e estável.Mais espuma, mais confortoNossa espuma Renew é mais macia do que as versões anteriores, ajudando a absorver impactos à medida que seu pé atinge o solo. Adicionamos mais espuma para uma transição mais suave do calcanhar à ponta, resultando em mais elasticidade para seus passos.Mais benefíciosA sola de borracha proporciona excelente tração.A tela em toda a gáspea é ventilada e elástica.Detalhes do produtoDetalhes moldados ao redor da boca",
        price: 1100,
        sizes: ["36", "38", "40"],
        img: "https://cdnv2.moovin.com.br/virtualesportes/imagens/produtos/lista/tenis-nike-react-infinity-run-flyknit-3-masculino-dh5392-001-333cca3c09fdcfa0a3c9a36c29f405c0.png",
        brandId: 2,
        stock: 40
    },
    {
        id: 3,
        name: "Tênis Nike Renew Run 3 Masculino - Preto",
        description: "lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum,lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        price: 749.99,
        sizes: ["37", "38", "39", "40", "41", "42"],
        img: product,
        brandId: 2,
        stock: 20
    },
    {
        id: 4,
        name: "tênis chinês nik",
        description: "lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum,lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        price: 999.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: product,
        brandId: 4,
        stock: 20
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