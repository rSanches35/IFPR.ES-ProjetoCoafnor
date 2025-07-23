// Dados da COAFNOR - Cooperativa Agropecuária e Agroindustrial dos Agricultores Familiares do Território Noroeste

export const coafnorData = {
    // Informações institucionais
    institutional: {
        name: "COAFNOR",
        fullName: "Cooperativa Agropecuária e Agroindustrial dos Agricultores Familiares do Território Noroeste",
        founded: "2009",
        foundedDate: "17 de Setembro de 2009",
        location: "Paraíso do Norte - PR",
        members: 161,
        initialMembers: 25,
        mission: "Buscar a comercialização de produtos dos cooperados, garantindo a qualidade e excelência no atendimento aos clientes, possibilitando a igualdade e permanência do agricultor no meio rural, priorizando a Agricultura Familiar.",
        vision: "Ser reconhecida pela diversidade e excelência dos produtos ofertados pelos agricultores, sempre buscando a qualificação do quadro social e colaboradores.",
        values: [
            "Qualidade",
            "Cooperação",
            "Ética",
            "Responsabilidade Social",
            "Sustentabilidade",
            "Transparência",
            "Inovação"
        ]
    },

    // Dados de contato
    contact: {
        address: {
            street: "Rua Estados Unidos, 44",
            district: "Conjunto Lago Leste",
            city: "Paraíso do Norte",
            state: "PR",
            zipCode: "87.780-000"
        },
        phones: [
            "(44) 3431-1981",
            "(44) 99182-4474"
        ],
        emails: [
            "coafnor@hotmail.com"
        ],
        workingHours: {
            weekdays: "Segunda a Sexta: 8h às 17h",
            saturday: "Sábado: 8h às 12h",
            sunday: "Domingo: Fechado"
        },
        socialMedia: {
            whatsapp: "5544991824474"
        }
    },

    // Produtos e serviços
    products: {
        categories: [
            {
                id: 1,
                name: "Hortifrutis",
                description: "Frutas e vegetais frescos da agricultura familiar",
                products: [
                    "Abacate", "Abacaxi", "Abóbora Madura", "Abobrinha Verde", "Acelga", 
                    "Alface", "Alho Nacional", "Almeirão", "Banana (Nanica/Caturra/Prata/Maçã)", 
                    "Batata Doce", "Berinjela", "Beterraba", "Brócolis", "Cebolinha Verde", 
                    "Cebola", "Cenoura", "Couve Folha", "Couve-flor", "Chicória", "Chuchu", 
                    "Espinafre", "Inhame", "Goiaba", "Laranja", "Limão", "Mamão", 
                    "Mandioca Descascada", "Manga", "Maracujá", "Melancia", "Melão", 
                    "Mexerica", "Milho Verde", "Morango", "Pepino", "Quiabo", "Repolho", 
                    "Rúcula", "Salsinha", "Tangerina", "Tomate", "Uva", "Vagem"
                ]
            },
            {
                id: 2,
                name: "Produtos Lácteos",
                description: "Laticínios frescos do laticínio próprio",
                products: [
                    "Leite Pasteurizado",
                    "Iogurte Natural"
                ]
            },
            {
                id: 3,
                name: "Panificados",
                description: "Pães e produtos de padaria frescos da padaria própria",
                products: [
                    "Biscoito de Polvilho", "Bolacha Caseira da Vovó", "Bolacha Caseira Sabores", 
                    "Bolo Caseiro Simples", "Bolo Caseiro Sabores", "Bolo Recheado", "Chipa", 
                    "Chocotone", "Cuca Caseira", "Cueca Virada", "Grissini", "Mini Esfirra", 
                    "Mini Pizza", "Nozinho", "Panetone", "Pão Caseiro Simples", 
                    "Pão Caseiro Sabores", "Pão de Queijo"
                ]
            },
            {
                id: 4,
                name: "Produtos Transformados",
                description: "Alimentos processados e conservas artesanais",
                products: [
                    "Açúcar Mascavo", "Doce de Leite Pastoso", "Geleia de Frutas Diversas", 
                    "Colorau", "Filé de Tilápia"
                ]
            },
            {
                id: 5,
                name: "Produtos Industrializados",
                description: "Produtos industrializados de qualidade",
                products: [
                    "Café Torrado e Moído", "Carne Bovina", "Carne Suína", "Mel", 
                    "Linguiça de Porco Pura", "Queijo Muçarela", "Polpa de Frutas", 
                    "Suco de Laranja", "Suco de Uva"
                ]
            }
        ],
        statistics: {
            totalProducts: 80,
            totalCooperatives: 161,
            producers: {
                milk: 62,
                horticulture: 47,
                bakery: 16,
                others: 36
            }
        },
        marketCoverage: [
            "Paraíso do Norte", "Mirador", "Nova Aliança do Ivaí", "Tamboara", 
            "São Carlos do Ivaí", "Paranavaí", "Cianorte", "Alto Paraná", 
            "São Manoel do Paraná", "Rondon", "Japurá", "Nova Esperança", 
            "Mandaguaçu", "Indianópolis", "São Tomé", "Floraí", "Ourizona", 
            "Presidente Castelo Branco", "São Jorge do Ivaí"
        ],
        organicCertification: true,
        farmToTable: true
    },

    // Liderança atual
    leadership: {
        president: {
            name: "Tânia Magna Voroniak",
            position: "Presidenta",
            email: "coafnor@hotmail.com"
        },
        vicePresident: {
            name: "Ademir José de Paula",
            position: "Vice-Presidente"
        },
        secretary: {
            name: "Gilmar da Silva",
            position: "Secretário"
        },
        treasures: [
            {
                name: "Sirlei Gonçalves dos Santos",
                position: "1º Tesoureiro"
            },
            {
                name: "Mauricio de Souza Almeida",
                position: "2º Tesoureiro"
            }
        ],
        councilMembers: [
            {
                name: "Evair Cardozo",
                position: "Conselho Fiscal"
            },
            {
                name: "Divino Venâncio",
                position: "Conselho Fiscal"
            },
            {
                name: "Miguel Pereira Mendes",
                position: "Conselho Fiscal"
            },
            {
                name: "João Venâncio dos Santos",
                position: "Suplente Conselho Fiscal"
            },
            {
                name: "Jair dos Santos",
                position: "Suplente Conselho Fiscal"
            }
        ]
    },

    // Equipe de trabalho
    staff: {
        coordinator: {
            name: "Vanderlei Rigo",
            position: "Coordenador Geral",
            phone: "(44) 9-9182-4474",
            email: "coafnor@hotmail.com"
        },
        accountant: {
            name: "Neusa Frare",
            position: "Responsável Contábil",
            qualification: "Tecnóloga em Gestão Financeira",
            phone: "(44) 99118-4098"
        },
        operations: [
            {
                name: "Crismeire Neves Cruz Rigo",
                position: "Assistente Administrativa",
                qualification: "Tecnóloga em Alimentos",
                phone: "(44) 99118-4098"
            },
            {
                name: "Herivelton José de Paula",
                position: "Auxiliar de Serviços Gerais",
                phone: "(44) 99118-4098"
            }
        ]
    },

    // Dados dos cooperados atualizados
    members: {
        total: 161,
        activeProducers: 161,
        examples: [
            {
                id: 1,
                name: "Tânia Magna Voroniak",
                position: "Presidenta",
                property: "Propriedade Rural",
                speciality: "Agricultura Familiar",
                memberSince: "2009"
            },
            {
                id: 2,
                name: "Ademir José de Paula",
                position: "Vice-Presidente",
                property: "Propriedade Rural",
                speciality: "Agricultura Familiar",
                memberSince: "2009"
            },
            {
                id: 3,
                name: "Gilmar da Silva",
                position: "Secretário",
                property: "Propriedade Rural",
                speciality: "Agricultura Familiar",
                memberSince: "2009"
            }
        ]
    },

    // História da COAFNOR
    history: {
        timeline: [
            {
                year: "2004",
                title: "Fundação da APLPN",
                description: "Criação da Associação dos Produtores Locais do Paraná Norte, primeira organização dos agricultores familiares da região."
            },
            {
                year: "2007",
                title: "Transformação em APRONOR",
                description: "A APLPN se transforma na Associação dos Produtores do Noroeste, ampliando sua atuação e fortalecendo a organização dos produtores."
            },
            {
                year: "2009",
                title: "Nascimento da COAFNOR",
                date: "17 de Setembro de 2009",
                description: "A APRONOR se transforma na Cooperativa Agropecuária e Agroindustrial dos Agricultores Familiares do Território Noroeste (COAFNOR), iniciando com 25 cooperados fundadores."
            },
            {
                year: "2010-2015",
                title: "Crescimento e Consolidação",
                description: "Período de expansão da cooperativa, com aumento significativo do número de cooperados e diversificação dos produtos oferecidos."
            },
            {
                year: "2011",
                title: "Criação do Laticínio COAFNOR",
                description: "Em comum acordo entre a diretoria e os cooperados, foi construído um novo laticínio em Tamboara, com melhor estrutura e mais equipamentos, localizado onde havia o maior número de produtores de leite. Atualmente conta com 3 funcionários, duas bancas de gelo e 1 câmara fria."
            },
            {
                year: "2016-2020",
                title: "Fortalecimento Regional",
                description: "Consolidação da COAFNOR como referência na agricultura familiar do território noroeste do Paraná, estabelecendo parcerias e expandindo mercados."
            },
            {
                year: "2023",
                title: "Inauguração da Padaria COAFNOR",
                date: "15 de Setembro de 2023",
                description: "Inauguração da Padaria Saudável e Segura da COAFNOR, com objetivo de oferecer estrutura adequada para produção padronizada de panificados e atender exigências sanitárias rigorosas. Investimento total de R$ 1.067.478,74, sendo R$ 357.300,00 da Prefeitura de Paraíso do Norte, R$ 380.000,00 do Governo do Estado (SEAB) e R$ 330.178,74 da própria Cooperativa. Prédio com cerca de 300 m²."
            },
            {
                year: "2021-Presente",
                title: "COAFNOR Hoje",
                description: "Atualmente conta com 161 cooperados, oferecendo mais de 47 tipos de produtos hortifrutis, laticínio próprio e padaria moderna, consolidando-se como importante cooperativa da agricultura familiar regional."
            }
        ],
        foundingStory: "Nos anos 1990 e início dos 2000, pequenos produtores de leite de Paraíso do Norte, São Carlos do Ivaí, Tamboara, Mirador e Nova Aliança do Ivaí faziam entregas porta‑a‑porta com carroças, usando galões de ferro ou alumínio (20–50 L). O leite, retirado desses galões com uma concha, era despejado diretamente nos recipientes dos clientes, o que, apesar dos cuidados, expunha o produto a contaminações. Para minimizar o risco, os técnicos da EMATER (hoje IDR/PR) propuseram a instalação de uma torneirinha nos galões, mantendo-os sempre fechados. Essa solução foi provisória até que as normas sanitárias passassem a exigir a pasteurização do leite.",
        mission: "Buscar a comercialização de produtos dos cooperados, garantindo a qualidade e excelência no atendimento aos clientes, possibilitando a igualdade e permanência do agricultor no meio rural, priorizando a Agricultura Familiar.",
        achievements: [
            "Crescimento de 25 para 161 cooperados",
            "Diversificação para mais de 47 tipos de produtos hortifrutis",
            "Consolidação como referência regional na agricultura familiar",
            "Estabelecimento de parcerias estratégicas",
            "Construção de laticínio próprio em Tamboara (2011)",
            "Inauguração de padaria moderna (2023)",
            "Investimento em infraestrutura de mais de R$ 1 milhão",
            "Manutenção dos princípios cooperativistas e da sustentabilidade"
        ]
    },

    // Infraestrutura e instalações
    infrastructure: {
        headquarters: {
            location: "Paraíso do Norte - PR",
            address: "Rua Estados Unidos, 44, Conjunto Lago Leste"
        },
        dairy: {
            name: "Laticínio COAFNOR",
            established: "2011",
            location: "Tamboara - PR",
            description: "Laticínio construído em comum acordo entre diretoria e cooperados, com melhor estrutura e mais equipamentos, localizado onde havia o maior número de produtores de leite.",
            facilities: [
                "3 funcionários especializados",
                "2 bancas de gelo",
                "1 câmara fria",
                "Equipamentos modernos de processamento"
            ],
            products: [
                "Leite pasteurizado",
                "Iogurtes naturais",
                "Queijos artesanais"
            ]
        },
        bakery: {
            name: "Padaria Saudável e Segura COAFNOR",
            established: "15 de Setembro de 2023",
            location: "Paraíso do Norte - PR",
            description: "Padaria criada para oferecer estrutura adequada para produção padronizada de panificados, atender exigências sanitárias rigorosas e agregar valor à produção familiar.",
            specifications: {
                area: "300 m²",
                totalInvestment: "R$ 1.067.478,74",
                funding: {
                    municipal: "R$ 357.300,00 (Prefeitura de Paraíso do Norte)",
                    state: "R$ 380.000,00 (Governo do Estado - SEAB)",
                    cooperative: "R$ 330.178,74 (COAFNOR)"
                }
            },
            objectives: [
                "Produção padronizada de panificados",
                "Atendimento rigoroso às exigências sanitárias",
                "Agregação de valor à produção familiar",
                "Geração de renda para cooperados"
            ]
        }
    },

    // Dados financeiros (resumo público)
    financialSummary: {
        year: 2024,
        totalRevenue: "R$ 2.500.000",
        membersRevenue: "R$ 2.100.000",
        investments: "R$ 300.000",
        socialProjects: "R$ 100.000"
    }
};

export default coafnorData;
