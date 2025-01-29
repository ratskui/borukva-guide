export const channelsList: IChannelItem[] = [
  {
    title: "Цебулевий Майнкрафт 1.21+ #УкрТг ✙",
    description:
      "Основний канал про сервер, головні технічні новини та оновлення.",
    image: "/borukva-guide/images/get-started/channels/tsebuleviy_minecraft.avif",
    link: "https://t.me/borukva_minecraft",
    type: "channel",
  },
  {
    title: "Новин'яр Цебулевий",
    description:
      "Анонси серйозних івентів, оновлень геймплею та оперативні новини по стану серверу.",
    image: "/borukva-guide/images/get-started/channels/novyniar.avif",
    link: "https://t.me/borukva_minecraft_news",
    type: "channel",
  },
  {
    title: "Труха ⚡️ БорукVа",
    description: "Тут постяться РП новини держав сервера та анонси івентів.",
    image: "/borukva-guide/images/get-started/channels/truha_borukva.avif",
    link: "https://t.me/tryxaborukva",
    type: "channel",
  },
  {
    title: "Цебулева сральня [Майнкрафт меми]",
    description: "Приколи, шіпост, майкнрафт та серверні меми.",
    image: "/borukva-guide/images/get-started/channels/spalna.avif",
    link: "https://t.me/borykva_minecraft",
    type: "channel",
  },
  {
    title: "Боруква Майн Хаб 1.21+",
    description:
      "Загальний чат сервера, є гілка для допомоги новачкам (не бійтеся туди писати), РП-гілка, Мем-гілка, і багато іншого.",
    image: "/borukva-guide/images/get-started/channels/chat.avif",
    link: "https://t.me/+q5Z5JHc71AwyM2My",
    type: "chat",
  },
  {
    title: "Чат п'ятого сезону",
    description:
      "Чат для гравців 5 сезону, без офтопу, тільки для гравців які грають.",
    image: "/borukva-guide/images/get-started/channels/chat_5_season.avif",
    link: "https://t.me/+JDFV2AhGvbA4NGMy",
    type: "chat",
  },
  {
    title: "Цебулева Імперія (Діскорд)",
    description:
      "Діскорд сервер є місцем для спілкування в окремих голосових чатах, та для відкриття тікетів для адміністрації.",
    image: "/borukva-guide/images/get-started/channels/tsebuleva_imperiya.webp",
    link: "https://discord.gg/5cBzDDHqDj",
    type: "chat",
  },
  {
    title: "Вікі Цебулеве",
    description:
      "На вікі є інформація про більшість країн, історій, географію та багато чого іншого. Вікі є проектом суспільним, тож не соромтесь додавати та редагувати інформацію.",
    image: "/borukva-guide/images/get-started/channels/wiki_logo.webp",
    link: "https://tsebuleve.wiki.gg/uk/wiki/Вікі_Цебулеве",
    type: "chat",
  },
];

export const sectionList: ISectionGroup[] = [
  {
    title: 'Додано',
    items: [
      { name: 'Нові рейки', image: '/borukva-guide/public/images/mechanics/general/turnout_rail.png', link: 'rails' },
      { name: 'Артефакти', image: '/borukva-guide/public/images/mechanics/general/bonaqua_axe.png', link: 'artefacts' },
      { name: 'Радіо', image: '/borukva-guide/public/images/mechanics/general/radio.png', link: 'radio', customClass: 'guide-img-fill' },
      { name: 'Полотно для малювання', image: '/borukva-guide/public/images/mechanics/general/canvas.png', link: 'polydecorations/canvas' },
      { name: 'Декілька видів дерев', image: '/borukva-guide/public/images/mechanics/general/lemon_sapling.png', link: 'new-plants' },
      { name: 'Меблі', image: '/borukva-guide/public/images/mechanics/general/bench.png', link: 'polydecorations/furniture' },
      { name: 'Куховарство', image: '/borukva-guide/public/images/mechanics/general/pickle_jar.png', link: 'food' },
    ]
  },
  {
    title: 'Змінено',
    items: [
      { name: 'Генерацію світу', image: '/borukva-guide/public/images/mechanics/general/screenshot.png', link: 'world-gen', customClass: 'guide-img-cover'},
      { name: 'Фермерство', image: '/borukva-guide/public/images/mechanics/general/harvest_sickle.png', link: 'farming' },
      { name: 'Вагонетки', image: '/borukva-guide/public/images/mechanics/general/minecart.webp', link: 'rails' },
      { name: 'Торгівлю з жителями', image: '/borukva-guide/public/images/mechanics/general/villager.webp', link: 'villagers' },
      //{ name: 'Риболовлю', image: '/borukva-guide/images/guide/placeholder.webp', link: 'fishing' },
    ]
  }
]

export const rodList: IFishGroup[] = [
  {
    title: "Basic Rods",
    items: [
      {
        name: "Wooden Rod",
        image: "/borukva-guide/images/guide/placeholder.webp",
        description: "A basic wooden fishing rod.",
        craft: "Crafting Table",
      },
    ],
  },
];



export const crateList: ICratesGroup[] = [
  {
    title: "Ocean Crates",
    items: [
      {
        name: "Basic Crate",
        image: "/borukva-guide/images/guide/placeholder.webp",
        biome: "Ocean",
        loot: "Fish, Treasure",
      },
    ],
  },
];



export const fishList: IFishGroup[] = [
  {
    title: 'Рівнини і ліс',
    items: [
      { name: 'Дубориба', description: 'Дає 3 одиниці харчування та горить як вугілля', image: '/borukva-guide/images/mechanics/fishing/fishList/oakfish.png', craft: '-'},
      { name: 'Морквяний короп', description: 'Дає 4 одиниці харчування та 0.25 насичення.', image: '/borukva-guide/images/mechanics/fishing/fishList/carrot_carp.png', craft: '-'}
    ]
  },
  {
    title: 'Льодяні біоми',
    items: [
      
      { name: 'Кригориба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/icicle_fish.png', craft: '-'},
      { name: 'Снігориба', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/borukva-guide/images/mechanics/fishing/fishList/snowball_fish.png', craft: '-'}
    ]
  },
  {
    title: 'Болотяні біоми',
    items: [
      { name: 'Слизориба', description: 'Дає 4 одиниці харчування, 0.25 насичення та накладає ефект "Уповільнення"', image: '/borukva-guide/images/mechanics/fishing/fishList/slimefish.png', craft: '-'},
      { name: 'Риба-лілія', description: 'Дає 2 одиниці харчування та 0.5 насичення', image: '/borukva-guide/images/mechanics/fishing/fishList/lilyfish.png', craft: '-'}
    ]
  },
  {
    title: 'Океан',
    items: [ 
      { name: 'Водоростевий вугор', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/seaweed_eel.png', craft: '-'}
    ]
  },
  {
    title: 'Меса',
    items: [   
      { name: 'Керамічна риба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/terrafish.png', craft: '-'}
    ]
  },
  {
    title: 'Повний місяць',
    items: [      
      { name: 'Риба-місяць', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/lunarfish.png', craft: '-'},
      { name: 'Зоряний лосось', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/starry_salmon.png', craft: '-'},
      { name: 'Космічна морська зірка', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/galaxy_starfish.png', craft: '-'},
      { name: 'Галактична риба-меч', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/borukva-guide/images/mechanics/fishing/fishList/nebula_swordfish.png', craft: '-'}
    ]
  },
  {
    title: 'Погода',
    items: [
      { name: 'Дощовий окунь', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/rainy_bass.png', craft: '-'},
      { name: 'Грозовий окунь', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/borukva-guide/images/mechanics/fishing/fishList/thundering_bass.png', craft: '-'},
      { name: 'Хмарний краб', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/cloudy_crab.png', craft: '-'},
      { name: 'Хуртовинний окунь', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/borukva-guide/images/mechanics/fishing/fishList/blizzard_bass.png', craft: '-'}
    ]
  },
  {
    title: 'Пекло',
    items: [
      { name: 'Голкориба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/spikerfish.png', craft: '-'},
      { name: 'Копчений лосось', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/candied_smoked_salmon.png', craft: '-'},
      { name: 'Магмова тріска', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/magma_cod.png', craft: '-'},
      { name: 'Кістяна риба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/bonefish.png', craft: '-'},
      { name: 'Базальтовий окунь', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/basalt_bass.png', craft: '-'},
      { name: 'Обсидіанова камбала', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/obsidian_halibut.png', craft: '-'}
    ]
  },
  {
    title: 'Бізальтові дельти',
    items: [
      { name: 'Чорнокам’яна форель', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/blackstone_trout.png', craft: '-'},
      { name: 'Позолочений чорнокам’яний короп', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/borukva-guide/images/mechanics/fishing/fishList/gilded_blackstone_carp.png', craft: '-'}
    ]
  },
  {
    title: 'Долина піску душ',
    items: [
      
      { name: 'Лосось душ', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/soul_salmon.png', craft: '-'}
    ]
  },
  {
    title: 'Енд',
    items: [
      
      { name: 'Ендерриба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/endfish.png', craft: '-'},
      { name: 'Ендервугор', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/ender_eel.png', craft: '-'},
      { name: 'Матрицева риба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/matrix_fish.png', craft: '-'},
      { name: 'Омега поплавець', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/omega_floater.png', craft: '-'},
      { name: 'Риба-дракон', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/dragonfish.png', craft: '-'},
      { name: 'Хорусова тріска', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/chorus_cod.png', craft: '-'},
      { name: 'Портальний скелезуб', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/borukva-guide/images/mechanics/fishing/fishList/portal_puffer.png', craft: '-'}
    ]
  }
]

export const plantsList: IPlantsGroup[] = [
  {
    title: 'Овочі',
    description: 'Найбільша категорія з доданих, включає в себе:',
    items: [
      {
        name: 'Помідор',
        image: '/borukva-guide/images/mechanics/new-plants/tomato.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/tomato_seeds.png',
        place: ['Археологія', 'Аванпост розбійників']
      },
      {
        name: 'Капуста',
        image: '/borukva-guide/images/mechanics/new-plants/cabbage.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/cabbage_seeds.png',
        place: ['Палац випробувань']
      },
      {
        name: 'Перець чилі',
        image: '/borukva-guide/images/mechanics/new-plants/chilli_pepper.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/chilli_pepper_seeds.png',
        place: ['Палац випробувань', 'Зруйнований портал']
      },
      {
        name: 'Кукурудза',
        image: '/borukva-guide/images/mechanics/new-plants/corn.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/corn_seeds.png',
        place: ['Нюхач']
      },
      {
        name: 'Огірок',
        image: '/borukva-guide/images/mechanics/new-plants/cucumber.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/cucumber_seeds.png',
        place: ['Археологія', 'Уламки корабля']
      },
      {
        name: 'Салат',
        image: '/borukva-guide/images/mechanics/new-plants/lettuce.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/lettuce_seeds.png',
        place: ['Археологія']
      },
      {
        name: 'Цибуля',
        image: '/borukva-guide/images/mechanics/new-plants/onion.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/onion_seeds.png',
        place: ['Скрарбниця зі спавнером', 'Нюхач']
      },
      {
        name: 'Рис',
        image: '/borukva-guide/images/mechanics/new-plants/rice_panicle.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/rice.png',
        place: ['Нюхач']
      },
    ]
  },
  {
    title: 'Ягоди',
    description: 'Нові кущі з ягодами які можна знайти в лісі.',
    items: [
      {
        name: 'Смородина',
        image: '/borukva-guide/images/mechanics/new-plants/blackcurrants.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/blackcurrants_bush_stage3.png',
        place: ['Ліс', 'Квітковий ліс', 'Темний ліс']
      },
      {
        name: 'Аґрус',
        image: '/borukva-guide/images/mechanics/new-plants/gooseberry.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/gooseberry_bush_stage3.png',
        place: ['Ліс', 'Березовий ліс', 'Одвічний березовий ліс']
      }
    ]
  },
  {
    title: 'Дерева',
    description: 'Декілька нових плодових дерев, а саме:.',
    items: [
      {
        name: 'Авокадо',
        image: '/borukva-guide/images/mechanics/new-plants/avocado.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/avocado_sapling.png',
        place: ['Рідкі джунглі']
      },
      {
        name: 'Лимон',
        image: '/borukva-guide/images/mechanics/new-plants/lemon.png',
        seedimage: '/borukva-guide/images/mechanics/new-plants/lemon_sapling.png',
        place: ['Мандрівний жид', 'Палац випробувань']
      }
    ]
  }
];