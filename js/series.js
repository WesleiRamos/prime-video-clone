const SERIES = [
  {
    prime: true,
    featured: true,
    logo: '01.svg',
    cover: '01.jpg',
    poster: '01.jpg',
    titulo: 'How I met your mother',
    sinopse: 'No ano de 2030, Ted Mosby, um arquiteto, decide explicar a seus filhos a história de como ele conheceu a mãe deles. Tudo começou em 2005, quando um de seus amigos decidiu se casar e Ted precisou correr atrás de um amor.'
  },
  {
    prime: true,
    featured: false,
    logo: '02.png',
    cover: '02.jpg',
    poster: '02.jpg',
    titulo: 'Todo Mundo Odeia o Chris',
    sinopse: 'Um adolescente negro do Brooklyn durante a década de 80 que frequenta uma escola onde a maioria dos alunos são brancos.'
  },
  {
    prime: true,
    featured: true,
    logo: '03.png',
    cover: '03.jpg',
    poster: '03.jpg',
    titulo: 'The Boys',
    sinopse: 'Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem.'
  },
  {
    prime: true,
    featured: false,
    logo: '04.svg',
    cover: '04.jpg',
    poster: '04.jpg',
    titulo: 'Invencível',
    sinopse: 'INVENCÍVEL é uma animação de super-heróis para adultos e conta a história de Mark Grayson, de 17 anos, um cara como qualquer outro de sua idade, exceto que seu pai é o super-herói mais poderoso do planeta, Omni-Man. Porém, à medida que Mark desenvolve seus próprios poderes, ele descobre que o legado de seu pai pode não ser tão heroico quanto parece.'
  },
  {
    prime: true,
    featured: true,
    logo: '05.png',
    cover: '05.jpg',
    poster: '05.jpg',
    titulo: 'Upload',
    sinopse: 'Em 2033, pessoas que estão próximas da morte podem fazer o "upload" em hotéis de realidade virtual de 6 empresas. Nora, mora no Brooklyn e trabalha com atendimento ao cliente para "Lakeview", empresa de pós-vida digital. Quando nathan, um programador playboy, sofre um acidente de carro, sua namorada faz o "upload" dele no mundo virtual de Nora.'
  },
  {
    prime: false,
    featured: false,
    logo: '06.png',
    cover: '06.jpg',
    poster: '06.jpg',
    titulo: 'Captain Tsubasa',
    sinopse: 'Capitão Tsubasa conta a história de Tsubasa Oozora, um garoto de 11 anos que tem um grande talento pelo futebol e é reconhecido pelo seu técnico, e ex-jogador brasileiro, Roberto Hongo, que decide levar Tsubasa para o Brasil e treiná-lo para a Copa do Mundo.'
  },
  {
    prime: false,
    featured: false,
    logo: '07.png',
    cover: '07.jpg',
    poster: '07.jpg',
    titulo: 'Chaotic',
    sinopse: 'Chaotic é um famoso jogo de cartas e online centralizado na batalha de quatro tribos de criaturas: Outro Mundo, Sub-Mundo, Mipedians e Danians, mas diferente de todos os jogos de cartas sempre que um jogador adquire bons pontos no jogo online ele ganha uma senha capaz de mandá-lo a outra dimensão onde vários jogadores podem se duelar transformando-se nas criaturas das cartas e conseguindo novas para seu baralho. Tom e Kaz são dois amigos que viviam jogando tanto o jogo de cartas quanto o online até Tom receber uma senha misteriosa. Kaz logo aconselha Tom digitar a senha em seu scanner e após isso ele é tele- transportado a dimensão de Chaotic, um lugar onde as pessoas podiam se transformar nas criaturas das cartas em batalhas contra outros jogadores. E ainda se tele-transportar pra Perim, uma dimensão onde as criaturas das cartas vivem em civilizações em guerra uma contra a outra e que também podem serem scanneadas por jogadores para seus baralhos. Durante a série Tom vira amigo de Sarah e Peyton, dois jogadores que passam a ser seu aliado e inimigo Kristela e Klay, dois jogadores de Chaotic muito trapaceiros. Na segunda temporada uma nova tribo aparece em Perim os "M’arrillians" que tentam dominar as tribos restantes inundando toda Perim e as tribos que viviam em guerra se unem para derrotá-los.'
  },
  {
    prime: true,
    featured: false,
    logo: '08.png',
    cover: '08.jpg',
    poster: '08.jpg',
    titulo: 'Dois Homens e Meio',
    sinopse: 'A vida mulherenga do solteirão Charlie é afetada quando seu irmão divorciado e seu sobrinho de língua afiada vão morar com ele.'
  },
  {
    prime: true,
    featured: false,
    logo: '09.png',
    cover: '09.jpg',
    poster: '09.jpg',
    titulo: 'The Office',
    sinopse: 'Nesta irreverente adaptação da famosa série britânica, Steve Carell é Michael Scott, o egocêntrico, insensível e incompetente gerente regional de uma subsidiária da Dunder Mifflin Paper Company. Michael acredita ser o cara mais engraçado do escritório, uma fonte de sabedoria para negócios e o melhor amigo de seus funcionários. Ele nem desconfia que a sua equipe o tolera apenas pelo fato dele assinar o contracheque deles. Sem saber o que os seus funcionários pensam a seu respeito, Michael acaba sempre alternando decisões absurdas ou patéticas, mas sempre hilárias.'
  },
  {
    prime: true,
    featured: false,
    logo: '10.png',
    cover: '10.jpg',
    poster: '10.jpg',
    titulo: 'Mr. Robot',
    sinopse: 'Elliot é um jovem programador que sofre de uma desordem que o torna anti-social. Acreditando que a única forma de se conectar com as pessoas é hackeando suas vidas, ele alia seu conhecimento ao fato de trabalhar em uma empresa de segurança online para proteger aqueles que ele ama daqueles que tentam, de alguma forma, prejudicá-los. Suas atividades chamam a atenção de Mr. Robot, um misterioso anarquista que convida Elliot a fazer parte de uma organização que atua na ilegalidade com o objetivo de derrubar as corporações americanas.'
  }
]

export const FEATURED = SERIES.filter(serie => serie.featured)
export const RECOMMENDED = SERIES.filter(serie => !serie.featured)