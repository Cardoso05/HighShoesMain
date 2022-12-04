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
        img: categorie,
        name: "Nike"
    },
    {
        id: 2,
        img: categorie,
        name: "Nike"
    },
    {
        id: 3,
        img: categorie,
        name: "Nike"
    },
    {
        id: 4,
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
        name: "tênis chinês nik",
        description: "lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum,lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        price: 599.99,
        sizes: ["36", "37", "38", "39", "40", "42"],
        img: product,
        brandId: 1,
        stock: 20
    },
    {
        id: 2,
        name: "Nike sb Dunk Low “Cactus Jack”",
        description: "Descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição",
        price: 1100,
        sizes: ["36", "38", "40"],
        img: product,
        brandId: 2,
        stock: 20
    },
    {
        id: 3,
        name: "tênis chinês nik",
        description: "lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum,lorem ipsum, lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        price: 799.99,
        sizes: ["36", "37", "38", "39", "40"],
        img: product,
        brandId: 3,
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