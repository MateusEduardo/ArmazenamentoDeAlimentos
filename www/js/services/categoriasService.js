// Desenvolvido por Mateus Almeida: mateusdarosadealmeida@gmail.com
angular.module('alimentosApp.services', [])

.factory('Categorias', function() {
 var categorias = [{
    id: 0,
    nome: 'Carnes',
    texto: 'Aves, Bovino, Peixes Gordos',
    texto2: 'Peixes Magros, Suíno',
    foto: 'img/categorias/carne.jpg',
    alimentos: [
      {
        id: 0,
        nome: 'Aves',
        texto: 'Veja como armazenar carne de aves',
        foto: 'img/carnes/aves.jpg',
        link: 'https://www.mrodrigues.com.br/imagem_portfolio/20150707_222130_mrodrigues-frango-peito-sem-osso.jpg',
        congelamento: 'Se a ave for abatida em casa ou no momento da compra, deverá permanecer por 6 horas no refrigerador antes de ir para o freezer. No caso de ave já resfriada, isso se torna desnecessário. Para congelar uma ave inteira crua, é necessário passar manteiga em sua pele para evitar ressecamento. Os miúdos devem ser retirados e embalados separadamente (preencher a cavidade com papel ou plástico). No caso de frango a passarinho ou em pedaços, o congelamento pode ser feito individualmente, como no caso dos bifes, em porções isoladas para cada refeição. O saco plástico é a embalagem mais prática para o congelamento de aves, cujos ossos podem escurecer durante o processo, fato que não interfere no sabor ou qualidade. Tempo de conservação: 9 meses.',
        resfriamento: 'As aves devem ficar no refrigerador por no máximo 3 dias em uma temperatura de 4ºC.'
      }, 
      {
        id: 1,
        nome: 'Bovina',
        texto: 'Veja como armazenar carne bovina',
        foto: 'img/carnes/bovina.jpg',
        link: 'http://multimedia.mmc.com.do/multimedia/cdn_uploads/2015/07/Carne.png',
        congelamento: 'Todos os tipos de carnes podem ser congelados, bem como os miúdos e os derivados. A carne ideal para congelar é a fresca, embora não seja aconselhável congelar carne de animal recém-abatido, esta deverá permanecer de 24 a 48 horas no refrigerador antes de ir para o freezer. A carne que já tenha sido congelada crua, como a vendida nas épocas de entressafra, só pode ser congelada novamente sob forma de prato pronto. Não se deve lavar e temperar a carne a ser congelada; apenas tirar os ossos e o excesso de gordura. A embalagem ideal é o saco plástico ou de papel aderente, pois as folhas de alumínio são difíceis de soltar da carne congelada e também ocasionam ressecamento. A carne deve ser embalada sem ser dobrada, e em porções isoladas para cada refeição. Tempo de congelamento: 12 meses.',
        resfriamento: 'A carne resfriada na geladeira deve ser consumida em até 3 dias, isto é, 72 horas, após a compra.  Para resfriar a carne, ao chegar em casa, coloque-a imediatamente na geladeira ou refrigerador que deve estar bem limpo. Também recomendamos colocar a carne em um recipiente fundo ou em cima de um prato, pois elas costumam gotejar um pouco de sangue que pode acabar parando em cima de outros alimentos. Também lembre-se de guardá-la em um pote fechado hermeticamente ou na embalagem original, não deixando-a exposta na geladeira. Temperatura ideal: 4ºC.'
      }, 
      {
        id: 2,
        nome: 'Peixes Gordos',
        texto: 'Veja como armazenar peixes gordos',
        foto: 'img/carnes/atum.jpg',
        link: 'http://www.guiadospeixes.com/atum-saiba-mais-sobre-esse-peixe/desenho-atum/',
        congelamento: 'Volte ao armazenamento dos peixes magros, porém, seu tempo de conservação é de 3 meses.',
        resfriamento: 'Volte aos peixes magros.'
      }, 
      {
        id: 3,
        nome: 'Peixes Magros',
        texto: 'Veja como armazenar peixes magros',
        foto: 'img/carnes/robalo.jpg',
        link: 'http://ceagespoficial.blogspot.com.br/2016/02/saiba-mais-sobre-o-robalo-o-peixe.html',
        congelamento: 'Os peixes para congelamento devem ser bem frescos ou já resfriados (se descongelarem durante o transporte, só podem ser congelados sob a forma de pratos prontos). A embalagem ideal é o saco plástico ou papel aderente, podendo ser usado o processo de congelamento individual, como no caso dos bifes. Tempo de conservação: 6 meses.',
        resfriamento: 'A carne resfriada na geladeira deve ser consumida em até 3 dias, isto é, 72 horas, após a compra. Para resfriar a carne, ao chegar em casa, coloque-a imediatamente na geladeira ou refrigerador que deve estar bem limpo. Também recomendamos colocar a carne em um recipiente fundo ou em cima de um prato, pois elas costumam gotejar um pouco de sangue que pode acabar parando em cima de outros alimentos. Também lembre-se de guardá-la em um pote fechado hermeticamente ou na embalagem original, não deixando-a exposta na geladeira. Temperatura ideal: -18ºC.'
      }, 
      {
        id: 4,
        nome: 'Suína',
        texto: 'Veja como armazenar carne suína',
        foto: 'img/carnes/suina.jpg',
        link: 'http://www.maiscarnesuina.com.br/wp-content/uploads/2015/09/Carne-de-porco-n%C3%A3o-transmite-cisticercose-Copy-450x300.jpg',
        congelamento: 'Volte ao armazenamento de carnes bovinas.',
        resfriamento: 'Volte ao armazenamento de carnes bovinas.'
      }
    ]
  }, {
    id: 1,
    nome: 'Cereais',
    texto: 'Arroz, Macarrão, Pães',
    texto2: '',
    foto: 'img/cereais/arroz.jpg',
    alimentos: [
      {
       id: 0,
        nome: 'Arroz',
        texto: 'Veja como armazenar arroz',
        foto: 'img/cereais/arroz.jpg',
        link: 'http://www.nutrymaxalimentos.com.br/wp-content/uploads/2015/07/arroz-integral.png',
        congelamento: 'Espere o arroz esfriar totalmente, e só então separe pequenas porções, coloque em um pote plástico e coloque um papel alumínio ou plástico entre o arroz e a tampa, para que evite o acumulo de cristais de gelo.',
        resfriamento: 'Espere o arroz esfriar, assim armazene-o em um recipiente plástico. Deve ficar na temperatura ambiente do refrigerador (7ºC).',
        armazenamentoNatural: 'O arroz deve ficar em sua embalagem em local seco, arejado, longe de impurezas e em temperatura ambiente.'
      }, 
      {
       id: 1,
        nome: 'Macarrão',
        texto: 'Veja como armazenar macarrão',
        foto: 'img/cereais/macarrao.jpg',
        link: 'http://vilaclub.vilamulher.com.br/blog/outros/macarrao-9-7748812-254034-pfi-rehpureglitter.html',
        congelamento: 'Massas (macarrão, lasanha e nhoque), congele-os com molho ou manteiga. Coloque os alimentos a serem congelados em embalagens apropriadas e de tamanho adequado, para que não fiquem ressecados nem sofram alterações pelo contato direto com o ar e a umidade.',
        resfriamento: '',
        armazenamentoNatural: 'Armazene-o em sua própria embalagem, em local seco, arejado, longe de impurezas e em temperatura ambiente.'
      }, 
      {
       id: 2,
        nome: 'Pães',
        texto: 'Veja como armazenar pães',
        foto: 'img/cereais/paes.jpg',
        link: 'http://www.aconteceempetropolis.com.br/2014/06/22/nutricao-pao-integral-x-pao-branco/',
        congelamento: 'Os pães se congelam muito bem, tanto assados quanto com massa crua. Os assados deverão ser resfriados logo que saírem do forno. Embalar em sacos plásticos ou papel alumínio. As massas cruas de pães só devem ser congeladas depois de fermentadas crescidas. Embalar em papel alumínio o colocá-las em potes plásticos.',
        extra1: ' Tempo de armazenamento no freezer:',
        extra2: 'Pão caseiro – 6 meses. Massa crua para pães – 6 meses.',
        extra3: 'Sanduíches – 1 a 2 meses.',
        resfriamento: '',
        armazenamentoNatural: 'Os pães devem ficar em embalagem fechada (para diminuir as chances de fungos) e em local seco e arejado na temperatura ambiente.',
      },
    ]
  }, {
    id: 2,
    nome: 'Frutas',
    texto: 'Banana, Laranja, Limão',
    texto2: 'Mamão, Maracujá, Uva',
    foto: 'img/categorias/uva.jpg',
    alimentos: [
      {
        id: 0,
        nome: 'Banana',
        texto: 'Veja como armazenar banana',
        foto: 'img/frutas/banana.jpg',
        link: 'http://pngimg.com/upload/banana_PNG816.png',
        congelamento: 'A banana não deve ser congelada inteira. Ela necessita ser amassada com suco de limão e açúcar a gosto. Também pode ser congelada levemente cozida ou frita. Tem durabilidade de 6 a 8 meses.',
        resfriamento: 'Coloque a banana em um recipiente e deixe-a na geladeira.',
        armazenamentoNatural: ' A banana deve ficar em local seco, arejado, em temperatura ambiente e longe de impurezas. O tempo de conservação é de aproximadamente uma semana quando maduras. '
      }, 
      {
        id: 1,
        nome: 'Laranja e Limão',
        texto: 'Veja como armazenar laranja e limão',
        foto: 'img/frutas/laranja.jpg',
        link: 'http://www.dicasnutricao.com.br/beneficios-da-laranja-para-saude/',
        congelamento: 'Podem ser congelados inteiros, mas ficam melhores descascados, com a membrana branca retirada e divididos em gomos ou rodelas. Congele ao natural borrifando cada quilo de fruta com ½ colher de chá de ácido ascórbico dissolvido em um pouco do suco da própria fruta, ou congele em calda rala preparada com o suco da fruta completado com água utilizando ½ colher de chá de ácido ascórbico para cada litro de calda. O congele com açúcar em pó, usando três quilos de fruta, ½ quilo de açúcar dissolvido em suco da fruta e acrescido de 1 colher de chá de ácido ascórbico.',
        resfriamento: 'Coloque a laranja/limão em um recipiente e deixe-os na geladeira.',
        armazenamentoNatural: 'A laranja/limão deve ficar em local seco, arejado, em temperatura ambiente e longe de impurezas. O tempo de conservação é de aproximadamente uma semana quando maduras.'
      }, 
      {
        id: 2,
        nome: 'Mamão',
        texto: 'Veja como armazenar mamão',
        foto: 'img/frutas/mamao.jpg',
        link: 'https://imagem.biz/wp-content/uploads/2015/03/mamao-3.jpg',
        congelamento: 'Descasque, corte em fatias ou faça bolinhas com o boleador. Congele ao natural ou com açúcar em pó.',
        resfriamento: 'Coloque o mamão em um recipiente e deixe-o na geladeira.',
        armazenamentoNatural: 'O mamão deve ficar em local seco, arejado, em temperatura ambiente e longe de impurezas. O tempo de conservação é de aproximadamente uma semana.'
      }, 
      {
        id: 3,
        nome: 'Maracujá',
        texto: 'Veja como armazenar maracujá',
        foto: 'img/frutas/maracuja.jpg',
        link: 'http://www.lanchenet.net/upload/maracuj%C3%A1.jpg',
        congelamento: 'Retire a polpa e sementes das cascas. Congele ao natural.',
        resfriamento: 'Coloque o maracujá em um recipiente e deixe-o na geladeira.',
        armazenamentoNatural: 'O maracujá deve ficar em local seco, arejado, em temperatura ambiente e longe de impurezas. O tempo de conservação é de aproximadamente uma semana quando maduras.'
      }, 
      {
        id: 4,
        nome: 'Uva',
        texto: 'Veja como armazenar uva',
        foto: 'img/frutas/uva.jpg',
        link: 'https://nopratinho.files.wordpress.com/2016/09/fruta-uva.png?w=560',
        congelamento: 'Volte as formas de armazenamento da laranja e do limão.',
        resfriamento: 'Volte as formas de armazenamento da laranja e do limão.'
      }
    ]
  }, {
    id: 3,
    nome: 'Hortaliças',
    texto: 'Abóbora, Cenoura, Chuchu',
    texto2: 'Pimentão, Repolho',
    foto: 'img/categorias/repolho.jpg',
    alimentos: [
      {
        id: 0,
        nome: 'Abóbora',
        texto: 'Veja como armazenar abóbora',
        foto: 'img/hortalicas/abobora.jpg',
        link: 'http://www.bancodasaude.com/info-saude/abobora/',
        congelamento: 'A maioria das hortaliças tem de ser escaldadas antes de irem ao congelador. O escaldamento é um cozimento parcial em temperature alta que ajuda a conserver o sabor, as vitaminas, a cor e a maciez. Ele pode ser feito tanto na água fervente como ao vapor.',
        extra1: 'Logo após escaldadas, as hortaliças devem ser mergulhadas em uma panela de água gelada e vários cubos de gelo para interromper o processo de cozimento. Deixe-as mergulhadas na água durante o mesmo tempo do escaldamento.',
        extra2: 'Escolha abóboras novinhas cuja casca possa ser furada com a unha. Corte em cubos de 2 cm e escalde por 3 minutos. Logo após, resfrie durante três minutos.',
        resfriamento: 'Deve ficar inteira ou em pedaços (dentro de um recipiente adequado) no local recomendado a hortaliças no refrigerador.',
        armazenamentoNatural: 'Deve ficar em local limpo, seco e arejado em temperature ambiente.'
      }, 
      {
        id: 1,
        nome: 'Cenoura',
        texto: 'Veja como armazenar cenoura',
        foto: 'img/hortalicas/cenoura.jpg',
        link: 'http://medicina-tradicional-chinesa.com/2013/02/12/9-beneficios-das-cenouras/',
        congelamento: 'Volte no armazenamento da abóbora. Escalde por 5 minutos. Resfrie por 5 minutos.',
        resfriamento: 'Volte no armazenamento da abóbora.',
        armazenamentoNatural: 'Volte no armazenamento da abóbora.'
      },  
      {
        id: 2,
        nome: 'Chuchu',
        texto: 'Veja como armazenar chuchu',
        foto: 'img/hortalicas/chuchu.jpg',
        link: 'http://www.tempodecozimento.com/chuchu/',
        congelamento: 'Volte no armazenamento da abóbora. Escalde por 1 minuto e 30 segundos. Resfrie por 1 minuto e 30 segundos.',
        resfriamento: 'Volte no armazenamento da abóbora.',
        armazenamentoNatural: 'Volte no armazenamento da abóbora.'
      },   
      {
        id: 3,
        nome: 'Pimentão',
        texto: 'Veja como armazenar pimentões',
        foto: 'img/hortalicas/pimentao.jpg',
        link: 'http://revistagloborural.globo.com/GloboRural/0,6993,EEC1706851-4529,00.html',
        congelamento: 'Volte no armazenamento da abóbora. Escalde por 2 minutos. Resfrie por 2 minutos.',
        resfriamento: 'Volte no armazenamento da abóbora.',
        armazenamentoNatural: 'Volte no armazenamento da abóbora.'
      },   
      {
        id: 4,
        nome: 'Repolho',
        texto: 'Veja como armazenar repolho',
        foto: 'img/hortalicas/repolho.jpg',
        link: 'http://www.comofazer.net/wp-content/uploads/2016/04/repolho-700x455.png',
        congelamento: 'Volte no armazenamento do pimentão.',
        resfriamento: 'Volte no armazenamento do pimentão.',
        armazenamentoNatural: 'Volte no armazenamento do pimentao.'
      }
    ]
  }, {
    id: 4,
    nome: 'Leites',
    texto: 'Iogurte, Leite',
    texto2: 'Manteiga, Queijo',
    foto: 'img/categorias/leite.jpg',
    alimentos: [
      {
        id: 0,
        nome: 'Iogurte',
        texto: 'Veja como armazenar iogurte',
        foto: 'img/leites/iogurte.jpg',
        link: 'http://eloingredientes.com.br/images/iogurte_light_de_morangos_baixa.png',
        congelamento: 'O iogurte caseiro não congela bem. Alguns, industrializados, podem ser congelados. Teste o que dá melhor resultado, que não decante depois de descongelado. Duração de 3 meses;',
        resfriamento: 'Armazene o iogurte na geladeira dentro da sua própria embalagem em uma temperatura de 7ºC. Após aberto, deve ser consumido em até cinco dias.' 
      },
      {
        id: 1,
        nome: 'Leite',
        texto: 'Veja como armazenar leite',
        foto: 'img/leites/leite.jpg',
        link: 'http://www.culturamix.com/wp-content/gallery/beneficios-2/beneficios-7.jpg',
        congelamento: 'Não congele leite fresco. Só congele leite homogeneizado, na própria embalagem. Duração de 3 meses.',
        resfriamento: 'O leite deve ser armazenado na geladeira em sua própria embalagem ou em embalagens apropriadas em temperatura de 7ºC.',
        armazenamentoNatural: 'O leite natural não deve ficar durante muito tempo exposto ao ambiente, para não azedar. Já o leite industrializado (desnatado, semidesnatado, integral, sem lactose, pasteurizado etc.) pode ser conservado em local arejado, seco e em temperatura ambiente.'
      },
      {
        id: 2,
        nome: 'Manteiga',
        texto: 'Veja como armazenar manteiga',
        foto: 'img/leites/manteiga.jpg',
        link: 'http://www.medcentromanaus.com.br/sites/default/files/styles/image_blog_805x503/public/img09.png?itok=ETU-7v14',
        congelamento: 'Congele embalada no papel em que é vendida nos pacotes de 200g. Ou embale em pequenas porções usando filme plástico e papel-manteiga ou papel de alumínio. Corte bolinhas ou caracóis e congele em recipientes rígidos, retirando apenas o necessário para utilizar. Prepare manteigas aromatizadas com alho, ou salsa e ervas picadinhas, ou conhaque, forme um rolo, embale bem e congele, retirando o necessário para utilizar. Sem sal, dura 6 meses. Salgada ou aromatizada, só 3 meses.',
        resfriamento: 'Na geladeira, a manteiga deve estar em sua própria embalagem a uma temperatura de 7ºC.'
      },
      {
        id: 3,
        nome: 'Queijo',
        texto: 'Veja como armazenar queijo',
        foto: 'img/leites/queijo.jpg',
        link: 'https://mercadopublico.com.br/wp-content/uploads/2015/08/queijo-estepe.jpg',
        congelamento: 'A maioria dos queijos congela bem, mas, quando ultrapassam o tempo de congelamento, esfarelam-se facilmente.',
        extra1: 'O queijo de minas fresco e a ricota só podem ser congelados como ingredientes: pastas, recheios etc. Congelados em peças inteiras, esfarelam-se. Duram 45 dias.',
        extra2: 'Queijos duros (tipo parmesão, curados etc.): corte em pequenas porções (250g), embale e congele. Ou rale e guarde em saco plástico, bem vedado no congelador. Duram de 3 a 6 meses.',
        extra3: 'Queijos cremosos: embale em filme plástico. Só congele queijos muito frescos, com data de 10 dias no máximo. Duram 45 dias.',
        extra4: 'Mozarela e prato: em fatias, entremeie com filme plástico; em pedaços (250g), embale em filme plástico e congele. A mozarela dura 2 meses. O prato, de 5 a 6 meses.',
        extra5: 'Provolone, port-salut, estepe, emmenthal, gouda, cheddar, suíço: não embale em papel de alumínio, pois podem oxidar. Duram 6 meses. Para descongelar: na geladeira dentro da embalagem. O queijo ralado pode ser utilizado ainda congelado.',
        resfriamento: 'Na geladeira, o queijo deve estar em sua própria embalagem a uma temperatura de 7ºC.'
      }
    ]
  }];

  return {
    all: function() {
      return categorias;
    },
    get: function(categoriaId) {
      for (var i = 0; i < categorias.length; i++) {
        if (categorias[i].id === parseInt(categoriaId)) {
          return categorias[i];
        }
      }
      return null;
    }
  };
});