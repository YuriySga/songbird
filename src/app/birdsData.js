const birdsData = [
  [
    {
      id: 1,
      name: 'Ворон',
      species: 'Corvus corax',
      description:
        'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1gOkMDgpH2z4FzsVKKqPkmphnxGijQ8AX',
    },
    {
      id: 2,
      name: 'Журавль',
      species: 'Grus grus',
      description:
        'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1mbi-z49hZ3t-zOF86GvSf0dHdwYKh4TK',
    },
    {
      id: 3,
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description:
        'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1yLEPi4kp3aRHYJiqBrSBycKsSHwWFWDF',
    },
    {
      id: 4,
      name: 'Козодой',
      species: 'Caprimulgus europaeus',
      description:
        'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=12mSPGnLy20wD7i8hZsQ5dKEaEJ15Xdge',
    },
    {
      id: 5,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description:
        'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1jkqBbjixO7_bWdm6X7E6JCD94vauVE4l',
    },
    {
      id: 6,
      name: 'Синица',
      species: 'Parus major',
      description:
        'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=18AbbJfY3AD4Mfh_wJDuYyerbnFDym36h',
    },
  ],
  [
    {
      id: 1,
      name: 'Воробей',
      species: 'Passer domesticus',
      description:
        'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=11d4Ahq3bZkeYh8PKGoFsaJ2JlQXRiUtn',
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description:
        'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1X2F6MiHWK2Ow8JwGil1WejDTQTMzi2fV',
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description:
        'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1mIOOpBEjalxqHJlOJjhOIZgPEuM2hjNt',
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description:
        'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1pe1cyZSMCik7F2UuGCVAz7l0dSPKotl5',
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description:
        'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1wErd9YQg6pJrEU75ptGMg8jsgIeeMcey',
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description:
        'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1MhdrYM-tsx7bKShnGymYEQcfj9-7Ibu4',
    },
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description:
        'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1gnbOCglWvZyCc4CfvAkbNLk8-y5w6ufd',
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description:
        'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1G6m15306w_WhZeTFdgNpAtPdENm7vO5_',
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description:
        'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1T_dV8k1GA9nAg4JxzCGnq3f8tC-MqC9r',
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description:
        'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1V14V1M9aBpBerpXjJWLBmiQEtLiLAlSY',
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description:
        'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1wPQtEY6e9mrpvXbjrsI5fPnsoqujj83c',
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description:
        'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=16BwS1UvrP3acgIswkIkV9S8BMblz2Qsa',
    },
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description:
        'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1ZIX7J3Mb1VCKXg873iZvxOwAnL6ecBfA',
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description:
        'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1d-aQP1khSwCwvUNJw3IXrFomWUg6qkvo',
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description:
        'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1sdto39VWkusudpMKh7dGiwFTkmxnfQq5',
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description:
        'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=15U_jn6xGHcf2Qd5VBYxBuEY4ydGaWdi6',
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description:
        'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=101WzXsfNEjj7JYkN00jLe1alq-M4phna',
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description:
        'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1V1NUVOsOabnshN2QsMxsYS_8TByS_GLI',
    },
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description:
        'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1ANNjHlfF71vEHsebkA13003zZwrOuBNw',
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description:
        'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1dHAXOzZrbUjxJ6QTSTMTOBBySzZ6ccMs',
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description:
        'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://drive.google.com/uc?export=view&id=1jSZ5PQL05jQFW0oaICk_YzOg3SMNaWg1',
      audio: 'https://drive.google.com/uc?export=view&id=1dhDdr2DCgdtgIhWrsprDASGYIqT979uA',
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description:
        'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1RDEOC7zBLQfgqfy7Q4p6qMt9OIztB6Uf',
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description:
        'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1KixdI-CBNMTCUjb8xlt-vTQ_SbIlXNyk',
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description:
        'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1T0bbfFgodJn1g0gv_RSEY7v1je2PuZmw',
    },
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description:
        'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=16jKev6W6BfHz2Mbh6Kq-xmoW5jm-K2i2',
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description:
        'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=113fGU59DVo616YkC3kbMgC1btGPm1ti_',
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description:
        'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1tjnKXZ4ZcelfRmgTbAtcZWqOOl9ZG-L9',
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description:
        'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://drive.google.com/uc?export=view&id=1OWz4QKM2uorT4buNfWllyNWCQyVt2_ag',
      audio: 'https://drive.google.com/uc?export=view&id=1vVmieADfp0lZsOiRDbe1W9aXbmLuCKiH',
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description:
        'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1gU_ivsMqWrl3-eUwn_3WE6t2riOfmyCl',
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description:
        'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://drive.google.com/uc?export=view&id=1T0IV1_tA7bMM0zTRuMgwJ_2UGOKqhtxO',
    },
  ],
];

export default birdsData;
