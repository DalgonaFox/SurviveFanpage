let videoclipes = [
    {
        titulo: 'INSIDE / YOUR HEAD',
        embed: 'CtsK3wrqm2A'
    },
    {
        titulo: 'MUKANJYO',
        embed: '5DjFpPSuGR0'
    },
    {
        titulo: 'FOUND & LOST',
        embed: 'VrOOigt76K0'
    },
    {
        titulo: 'Right and Left',
        embed: '_B6Pg5Ri7oQ'
    },
    {
        titulo: "Fool's Gold",
        embed: 'TG8LbM01pq0'
    },
    {
        titulo: 'Conscious',
        embed: 'B1PpXw1VN-k'
    },
    {
        titulo: 'When I',
        embed: 'TIRP34yK92w'
    }
]
let animes = [
    {
        imagem: 'banana.jpg',
        titulo: 'BANANA FISH',
        musica1: '“Found and Lost” - Opening 1',
        musica2: '“Red” - Ending 2'
    },
    {
        imagem: 'vinland.webp',
        titulo: 'VINLAND SAGA',
        musica1: '“MUKANJYO” - Opening 1',
        musica2: '“PARADOX” - Opening 4'
    },
    {
        imagem: 'code.jpg',
        titulo: 'CODE GEASS',
        musica1: '“NE:ONE” - Ouhou Ending',
        musica2: ''
    },
    {
        imagem: 'tokyo.jpg',
        titulo: 'TOKYO 24-KU',
        musica1: '“Papersky” - Opening',
        musica2: '“Find You” - Ending EP12'
    }
]
const membros = [
    {
        imagem: 'yosh.jpeg',
        alt: 'Yoshiya Morita, vocalista da banda Survive Said The Prophet',
        nome: 'YOSH MORITA',
        papel: 'VOCALISTA',
        twitter: 'https://x.com/yosh_SSTP',
        instagram: 'https://www.instagram.com/yosh_sstp/',
        descricao: 'Nascido em Tóquio, ele estudou em uma escola internacional. Depois de se formar, ele estudou na Full Sail University, nos Estados Unidos. Quando era estudante, participou do clube de luta livre e também foi presidente do conselho estudantil. Ele é ex-integrante da banda Yesterday Fall. Ele usa microfones Shure.'
    },
    {
        imagem: 'ivan.jpeg',
        alt: 'Ivan Kwong, guitarrista da banda Survive Said The Prophet',
        nome: 'IVAN KWONG',
        papel: 'LEAD SINGER',
        twitter: 'https://x.com/kwongivan_SSTP',
        instagram: 'https://www.instagram.com/ivann_kwong/',
        descricao: 'Originário de Hong Kong, ele veio para o Japão aos 19 anos de idade e, portanto, é fluente em japonês, inglês, cantonês e mandarim. O vocalista do Supper Moment, Sunny Chan, é um amigo de infância; ele e Sunny se apresentaram juntos ao vivo nas ruas de Hong Kong. Ele é ex-integrante da banda Aphelion. Ele também é responsável pela venda de produtos e pelo design das capas dos CDs.'
    },
    {
        imagem: 'sho.jpg',
        alt: 'Sho Okada, baterista da banda Survive Said The Prophet',
        nome: 'SHO OKADA',
        papel: 'BATERISTA',
        twitter: 'https://x.com/tatsuya_sstp',
        instagram: 'https://www.instagram.com/tatsuya_sstp/',
        descricao: 'Nascido na cidade de Machida, Tóquio, estudou caratê e tornou-se faixa preta na 5ª série. Começou a tocar bateria por meio da DrumMania. É ex-integrante das bandas fly sleep fly e RAVAR, da qual foi líder, e membro da El Tempo. Ele assinou contratos de patrocínio com a Pearl e a Sabian. Desde que Yudai deixou o grupo, ele também tem atuado como parte do scream.'
    },
    {
        imagem: 'tatsuya.jpg',
        alt: 'Tatsuya Kato, guitarrista da banda Survive Said The Prophet',
        nome: 'TATSUYA KATO',
        papel: 'GUITARRISTA',
        twitter: 'https://x.com/show_sstp',
        instagram: 'https://www.instagram.com/show_sstp/',
        descricao: 'Nascido em Sendai, ele e Yudai se conhecem desde o ensino fundamental. Seus hobbies são ndar de skate, pescar e fazer musculação. Ele é ex-integrante da banda Fake Face. Ele toca uma guitarra Schecter AR-06 (See Thru Black).'
    }
]
let musicas = [
    {
        imagem: 'mukanjyo.jpg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'MUKANJYO',
        data: '21/08/2019',
        visualizacoes: '26.158.802',
        youtube: 'https://youtu.be/5DjFpPSuGR0?si=MT2txIcFDDC8atsR',
        spotify: 'https://open.spotify.com/intl-pt/track/4MTgIH5OZQHAbdBWgbKSAb?si=b6d904fef68340b6',
        comprar: 'https://tower.jp/item/4925147',
        audio: 'mukanjyo'
    },
    {
        imagem: 'paradox.jpg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'PARADOX',
        data: '17/05/2023',
        visualizacoes: '7.497.732',
        youtube: 'https://youtu.be/qiPosEYvGzc?si=paB6PRHZHmnYyMO6',
        spotify: 'https://open.spotify.com/intl-pt/track/6A7sTvj68RJAVgTduJEQnA?si=48633e173d244a02',
        comprar: 'https://survivesaidtheprophet.lnk.to/uVq9pjTA',
        audio: 'paradox'
    },
    {
        imagem: 'foundlost.webp',
        alt: 'Arte do CD de Found&Lost com a arte de Banana Fish, por Survive Said The Prophet',
        nome: 'FOUND & LOST',
        data: '26/09/2018',
        visualizacoes: '11.666.434',
        youtube: 'https://youtu.be/VrOOigt76K0?si=9RvzEB3RkAMQtGZy',
        spotify: 'https://open.spotify.com/intl-pt/track/6euwgOanJOzsBeZUDTbx29?si=1e8c0f69f1474ebc',
        comprar: 'https://tower.jp/item/4738434',
        audio: 'foundlost'
    },
    {
        imagem: 'red.jpg',
        alt: 'Arte do CD de RED, por Survive Said The Prophet',
        nome: 'RED',
        data: '12/12/2018',
        visualizacoes: '2.133.267',
        youtube: 'https://youtu.be/4-wbmzQUsZc?si=otDVzgFNcsxwclul',
        spotify: 'https://open.spotify.com/intl-pt/track/5pz5S3ZqMPnd8or4IGUVho?si=79583810bb45467b',
        comprar: 'https://tower.jp/item/4806495',
        audio: 'red'
    },
    {
        imagem: 'foolsgold.jpeg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: "FOOL'S GOLD",
        data: '05/10/2016',
        visualizacoes: '1.171.377',
        youtube: 'https://youtu.be/TG8LbM01pq0?si=Lfq030_c4NfG4nz_',
        spotify: 'https://open.spotify.com/intl-pt/track/0IxmOlsU0KpKNQppxOp27W?si=713561c4ed78494c',
        comprar: 'https://tower.jp/item/4336167',
        audio: 'foolsgold'
    },
    {
        imagem: 'rightandleft.jpeg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'RIGHT AND LEFT',
        data: '26/09/2018',
        visualizacoes: '6.630.385',
        youtube: 'https://youtu.be/_B6Pg5Ri7oQ?si=PdVe3AMEhNk1z90K',
        spotify: 'https://open.spotify.com/intl-pt/track/0EQPJsCSC0aTwExwbzLVde?si=59dcb8c8eb824fba',
        comprar: 'https://tower.jp/item/5493293',
        audio: 'rightandleft'
    },
    {
        imagem: 'neone.jpeg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'NE:ONE',
        data: '26/09/2018',
        visualizacoes: '5.297.775',
        youtube: 'https://youtu.be/wvmF3mpbiU4?si=YrpRUEExpjoTvpNo',
        spotify: 'https://open.spotify.com/intl-pt/track/0ztVNfGIcqDHjdirjwfgfS?si=16c282c4103e44ee',
        comprar: 'https://tower.jp/item/4698730',
        audio: 'neone'
    },
    {
        imagem: 'hateful.jpeg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'BEAUTY QUEEN',
        data: '12/10/2022',
        visualizacoes: '2.096.877',
        youtube: 'https://youtu.be/pQoJgfPKCis?si=6NP7wn3HmnAD6HiX',
        spotify: 'https://open.spotify.com/intl-pt/track/4yTOsn5kpUCiNf2c5aveeX?si=818cdf9dd8f74c0e',
        comprar: 'https://tower.jp/item/5493293',
        audio: 'beautyqueen'
    },
    {
        imagem: 'hateful.jpeg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'MARY',
        data: '12/10/2022',
        visualizacoes: '618.469',
        youtube: 'https://youtu.be/Bt49cLLHVWE?si=gR_Fant5Yl3uLcSJ',
        spotify: 'https://open.spotify.com/intl-pt/track/69D1sD80BMNpzCcEheVdmR?si=5427e284f7364485',
        comprar: 'https://tower.jp/item/5493293',
        audio: 'mary'
    },
    {
        imagem: 'findyou.jpeg',
        alt: 'Arte do CD do single Paradox, por Survive Said The Prophet',
        nome: 'FIND YOU',
        data: '17/05/2023',
        visualizacoes: '122.195',
        youtube: 'https://youtu.be/hh41zItumK0?si=RAIsILNzuqjgCQSD',
        spotify: 'https://open.spotify.com/intl-pt/track/5gK10iZU8JbfJbXKXl3ZUH?si=692b3f21b7d04673',
        comprar: 'https://survivesaidtheprophet.lnk.to/uVq9pjTA',
        audio: 'findyou'
    },
]
let shows = [
    {
        data: '2025.04.19 Sáb',
        titulo: 'State Of Mind Tour',
        palco: 'Sendai Darwin',
        local: 'Prefeitura de Miyagi',
        link: 'https://survivesaidtheprophet.com/tour/survive-said-the-prophet-one-man-tour-2025-8/',
        ticket: 'https://ib.eplus.jp/sstp2025'
    },
    {
        data: '2025.04.25 Sex',
        titulo: 'State Of Mind Tour',
        palco: 'Sapporo PENNY LANE24',
        local: 'Hokkaido',
        link: 'https://survivesaidtheprophet.com/tour/survive-said-the-prophet-one-man-tour-2025-9/',
        ticket: 'https://ib.eplus.jp/sstp2025'
    },
    {
        data: '2025.04.26 Sáb',
        titulo: 'State Of Mind Tour',
        palco: 'Tomakomai ELLCUBE',
        local: 'Hokkaido',
        link: 'https://survivesaidtheprophet.com/tour/survive-said-the-prophet-one-man-tour-2025-10/',
        ticket: 'https://ib.eplus.jp/sstp2025'
    },
    {
        data: '2025.05.05 Seg',
        titulo: 'GRAND SLAM 2025',
        palco: 'DIAMOND HALL',
        local: 'Prefeitura de Aichi',
        link: 'https://survivesaidtheprophet.com/tour/grand-slam-2025/',
        ticket: 'https://sundayfolk.wixsite.com/grandslam-nagoya'
    },
    {
        data: '2025.05.07 Qua',
        titulo: 'RETURN OF THE SINGH – JAPAN TOUR ’25 –',
        palco: 'Nagoya CLUB QUATTRO',
        local: 'Prefeitura de Aichi',
        link: 'https://survivesaidtheprophet.com/tour/bloodywood-%e3%80%8creturn-of-the-singh-japan-tour-25-%e3%80%8d/',
        ticket: 'https://t.pia.jp/pia/artist/artists.do?artistsCd=M4220004'
    },
    {
        data: '2025.05.17 Sáb',
        titulo: 'FREEDOM NAGOYA 25',
        palco: 'Palco Especial Otaka Green',
        local: 'Prefeitura de Aichi',
        link: 'https://survivesaidtheprophet.com/tour/freedom-nagoya-25/',
        ticket: 'https://t.pia.jp/pia/event/event.do?eventBundleCd=b2556962'
    },
    {
        data: '2025.05.18 Dom',
        titulo: 'COMING KOBE25',
        palco: 'Parque Kobe Meriken',
        local: 'Prefeitura de Hyogo',
        link: 'https://survivesaidtheprophet.com/tour/coming-kobe25/',
        ticket: 'https://comingkobe.com/'
    },
    {
        data: '2025.06.06 Sex',
        titulo: 'Rock am Ring',
        palco: 'Nurburgring',
        local: 'Nurburg, Alemanha',
        link: 'https://survivesaidtheprophet.com/tour/rock-am-ring/',
        ticket: 'https://www.rock-am-ring.com/en'
    },
    {
        data: '2025.06.08 Dom',
        titulo: 'Rock im Park',
        palco: 'Zeppelinfeld',
        local: 'Nurnberg, Alemanha',
        link: 'https://survivesaidtheprophet.com/tour/rock-im-ring/',
        ticket: 'https://www.eventim.de/campaign/rar-rip-ep'
    }
]
let comentarios = [
    {
        data: '20/07/2022',
        nome: 'DalgonaFox',
        mensagem: 'Amo de paixãooo essa banda',
        email: 'mila.olisantos@gmail.com'
    }
]