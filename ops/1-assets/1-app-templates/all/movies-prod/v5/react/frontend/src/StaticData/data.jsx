export const generateImgPath = (path) => {
  return window.origin + import.meta.env.VITE_URL + path;
};

export const geners = [
  {
    id: 1,
    slug: "action",
    title: "ott_home.action",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    type: "movie",
  },
  {
    id: 2,
    slug: "adventure",
    title: "ott_home.adventure",
    thumbnail: generateImgPath("/assets/images/genre/02.webp"),
    type: "movie",
  },
  {
    id: 3,
    slug: "animation",
    title: "ott_home.animation",
    thumbnail: generateImgPath("/assets/images/genre/03.webp"),
    type: "movie",
  },
  {
    id: 4,
    slug: "crime",
    title: "ott_home.comedy",
    thumbnail: generateImgPath("/assets/images/genre/04.webp"),
    type: "movie",
  },
  {
    id: 5,
    slug: "horror",
    title: "ott_home.drama",
    thumbnail: generateImgPath("/assets/images/genre/05.webp"),
    type: "movie",
  },
  {
    id: 6,
    slug: "mystery",
    title: "ott_home.family",
    thumbnail: generateImgPath("/assets/images/genre/06.webp"),
    type: "movie",
  },
  {
    id: 7,
    slug: "romance",
    title: "ott_home.fantacy",
    thumbnail: generateImgPath("/assets/images/genre/07.webp"),
    type: "movie",
  },
];

export const tvShowGenres = [
  {
    id: 1,
    slug: "action",
    title: "ott_home.4k_ultra",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    type: "movie",
  },
  {
    id: 2,
    slug: "adventure",
    title: "ott_home.brother",
    thumbnail: generateImgPath("/assets/images/genre/02.webp"),
    type: "movie",
  },
  {
    id: 3,
    slug: "animation",
    title: "ott_home.brother_relationship",
    thumbnail: generateImgPath("/assets/images/genre/03.webp"),
    type: "movie",
  },
  {
    id: 4,
    slug: "comedy",
    title: "ott_home.kings",
    thumbnail: generateImgPath("/assets/images/genre/04.webp"),
    type: "movie",
  },
  {
    id: 5,
    slug: "drama",
    title: "ott_home.music",
    thumbnail: generateImgPath("/assets/images/genre/05.webp"),
    type: "movie",
  },
  {
    id: 6,
    slug: "family",
    title: "ott_home.mythology",
    thumbnail: generateImgPath("/assets/images/genre/06.webp"),
    type: "movie",
  },
  {
    id: 7,
    slug: "fantacy",
    title: "ott_home.premieres",
    thumbnail: generateImgPath("/assets/images/genre/07.webp"),
    type: "movie",
  },
];

export const videoGenres = [
  {
    id: 1,
    slug: "action",
    title: "ott_home.action",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    type: "movie",
  },
  {
    id: 2,
    slug: "adventure",
    title: "ott_home.adventure",
    thumbnail: generateImgPath("/assets/images/genre/02.webp"),
    type: "movie",
  },
  {
    id: 3,
    slug: "animation",
    title: "ott_home.animation",
    thumbnail: generateImgPath("/assets/images/genre/03.webp"),
    type: "movie",
  },
  {
    id: 4,
    slug: "comedy",
    title: "ott_home.comedy",
    thumbnail: generateImgPath("/assets/images/genre/04.webp"),
    type: "movie",
  },
  {
    id: 5,
    slug: "drama",
    title: "ott_home.crime",
    thumbnail: generateImgPath("/assets/images/genre/05.webp"),
    type: "movie",
  },
  {
    id: 6,
    slug: "family",
    title: "ott_home.drama",
    thumbnail: generateImgPath("/assets/images/genre/06.webp"),
    type: "movie",
  },
  {
    id: 7,
    slug: "fantacy",
    title: "ott_home.family",
    thumbnail: generateImgPath("/assets/images/genre/07.webp"),
    type: "movie",
  },
];
export const cast = [
  {
    id: 1,
    profile_image: generateImgPath("/assets/images/cast/01.webp"),
    slug: "karen-gilchrist",
    title: "data_js.tagname2",
    designation: "data_js.production",
    known_credits: "10",
    birthday: "15-07-1985",
    birth_place: "New York",
    also_known_as: "David Backam",
  },
  {
    id: 2,
    profile_image: generateImgPath("/assets/images/cast/02.webp"),
    slug: "debbi-bossi",
    title: "data_js.tagname1",
    designation: "data_js.production",
    known_credits: "8",
    birthday: "",
    birth_place: "Recklinghausen",
    also_known_as: "Emery Camacho",
  },
  {
    id: 3,
    profile_image: generateImgPath("/assets/images/cast/03.webp"),
    slug: "james-chinlund",
    title: "data_js.tagname3",
    designation: "data_js.art",
    known_credits: "10",
    birthday: "",
    birth_place: "Coldstream",
    also_known_as: "Shana Warren",
  },
  {
    id: 4,
    profile_image: generateImgPath("/assets/images/cast/04.webp"),
    slug: "brenda-chapman",
    title: "data_js.tagname4",
    designation: "data_js.writing",
    known_credits: "11",
    birthday: "11-07-2012",
    birth_place: "Tournefeuille",
    also_known_as: "Abdul Harmon",
  },
  {
    id: 5,
    profile_image: generateImgPath("/assets/images/cast/05.webp"),
    slug: "mark-livolsi",
    title: "data_js.tagname5",
    designation: "data_js.editing",
    known_credits: "9",
    birthday: "",
    birth_place: "Provost",
    also_known_as: "Hop Mcclure",
  },
  {
    id: 7,
    profile_image: generateImgPath("/assets/images/cast/06.webp"),
    slug: "caleb-deschanel",
    title: "data_js.tagname7",
    designation: "Camera",
    known_credits: "9",
    birthday: "12-01-1988",
    birth_place: "Bleid",
    also_known_as: "Harding Martinez",
  },
  {
    id: 6,
    profile_image: generateImgPath("/assets/images/cast/02.webp"),
    slug: "hans-zimmer",
    title: "data_js.tagname6",
    designation: "data_js.sound",
    known_credits: "8",
    birthday: "",
    birth_place: "Bayeux",
    also_known_as: "Mason Hansley",
  },

  {
    id: 8,
    profile_image: generateImgPath("/assets/images/cast/01.webp"),
    slug: "john-bartnicki",
    title: "data_js.tagname8",
    designation: "data_js.production",
    known_credits: "11",
    birthday: "06-07-1990",
    birth_place: "Perk",
    also_known_as: "Ali Miles",
  },
  {
    id: 9,
    profile_image: generateImgPath("/assets/images/cast/04.webp"),
    slug: "jeffrey-silver",
    title: "data_js.tagname9",
    designation: "data_js.production",
    known_credits: "4",
    birthday: "06-12-1995",
    birth_place: "Krasnoarmeysk",
    also_known_as: "Ingrid Carver",
  },
  {
    id: 10,
    profile_image: generateImgPath("/assets/images/cast/05.webp"),
    slug: "linda-woolverton",
    title: "data_js.tagname10",
    designation: "data_js.writing",
    known_credits: "6",
    birthday: "02-11-1995",
    birth_place: "Rochester",
    also_known_as: "Forest Brooks",
  },
  {
    id: 11,
    profile_image: generateImgPath("/assets/images/cast/06.webp"),
    slug: "christoph-johnson",
    title: "data_js.tagname11",
    designation: "data_js.writing",
    known_credits: "3",
    birthday: "28-10-1990",
    birth_place: "USA",
    also_known_as: "Christoph",
  },
  {
    id: 12,
    profile_image: generateImgPath("/assets/images/cast/01.webp"),
    slug: "robert-romanson",
    title: "data_js.tagname12",
    designation: "data_js.writing",
    known_credits: "3",
    birthday: "28-10-1989",
    birth_place: "London",
    also_known_as: "Roman",
  },
];
export const movieTags = [
  {
    id: 1,
    slug: "action",
    title: "ott_home.action",
    type: "movie",
  },
  {
    id: 2,
    slug: "adventure",
    title: "ott_home.adventure",
    type: "movie",
  },
  {
    id: 3,
    slug: "animation",
    title: "ott_home.animation",
    type: "movie",
  },
  {
    id: 4,
    slug: "comedy",
    title: "ott_home.comedy",
    type: "movie",
  },
  {
    id: 5,
    slug: "drama",
    title: "ott_home.drama",
    type: "movie",
  },
  {
    id: 6,
    slug: "family",
    title: "ott_home.family",
    type: "movie",
  },
  {
    id: 7,
    slug: "fantacy",
    title: "ott_home.fantacy",
    type: "movie",
  },
  {
    id: 8,
    slug: "history",
    title: "ott_home.history",
    type: "movie",
  },
  {
    id: 9,
    slug: "horror",
    title: "ott_home.horror",
    type: "movie",
  },
  {
    id: 10,
    slug: "mystery",
    title: "ott_home.mystery",
    type: "movie",
  },
  {
    id: 11,
    slug: "recommended",
    title: "ott_home.recommended",
    type: "movie",
  },
  {
    id: 12,
    slug: "sci-fi",
    title: "ott_home.sci-fi",
    type: "movie",
  },

];

export const tvShowsTags = [
  {
    id: 1,
    slug: "4k-ultra",
    title: "ott_home.4k_ultra",
    type: "tv-show",
  },
  {
    id: 2,
    slug: "brother",
    title: "ott_home.brother",
    type: "tv-show",
  },
  {
    id: 3,
    slug: "brother-relationship",
    title: "ott_home.brother_relationship",
    type: "tv-show",
  },
  {
    id: 4,
    slug: "kings",
    title: "ott_home.kings",
    type: "tv-show",
  },
  {
    id: 5,
    slug: "music",
    title: "ott_home.music",
    type: "tv-show",
  },
  {
    id: 6,
    slug: "mythology",
    title: "ott_home.mythology",
    type: "tv-show",
  },
  {
    id: 7,
    slug: "premieres",
    title: "ott_home.premieres",
    type: "tv-show",
  },
  {
    id: 8,
    slug: "vikings",
    title: "ott_home.vikings",
    type: "tv-show",
  },
];

export const videoTags = [
  {
    id: 1,
    slug: "action",
    title: "ott_home.action",
    type: "video",
  },
  {
    id: 2,
    slug: "adventure",
    title: "ott_home.adventure",
    type: "video",
  },
  {
    id: 3,
    slug: "animation",
    title: "ott_home.animation",
    type: "video",
  },
  {
    id: 4,
    slug: "comedy",
    title: "ott_home.comedy",
    type: "video",
  },
  {
    id: 5,
    slug: "crime",
    title: "ott_home.crime",
    type: "video",
  },
  {
    id: 6,
    slug: "drama",
    title: "ott_home.drama",
    type: "video",
  },
  {
    id: 7,
    slug: "family",
    title: "ott_home.family",
    type: "video",
  },
  {
    id: 8,
    slug: "fantacy",
    title: "ott_home.fantacy",
    type: "video",
  },
  {
    id: 9,
    slug: "horror",
    title: "ott_home.horror",
    type: "video",
  },
  {
    id: 10,
    slug: "romance",
    title: "ott_home.romance",
    type: "video",
  },
  {
    id: 11,
    slug: "thriller",
    title: "ott_home.thriller",
    type: "video",
  },
];

export const sectionSliders = [
  {
    image: generateImgPath("/assets/images/movies/related/01.webp"),
    title: "episode_page.giikre",
    movieTime: "2hr: 12mins",
  },
  {
    image: generateImgPath("/assets/images/movies/related/02.webp"),
    title: "episode_page.yoshi",
    movieTime: "1hr: 22mins",
  },
  {
    image: generateImgPath("/assets/images/movies/related/03.webp"),
    title: "episode_page.we_gare",
    movieTime: "1hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/related/04.webp"),
    title: "episode_page.avengers",
    movieTime: "1hr: 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/related/05.webp"),
    title: "episode_page.chosfies",
    movieTime: "1hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/related/06.webp"),
    title: "episode_page.tf_oaler",
    movieTime: "1hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/related/07.webp"),
    title: "episode_page.another_danger",
    movieTime: "1hr: 30mins",
  },
];

export const populerSlider = [
  {
    image: generateImgPath("/assets/images/movies/popular/01.webp"),
    title: "episode_page.crw",
    movieTime: "2hr: 12mins",
  },
  {
    image: generateImgPath("/assets/images/movies/popular/02.webp"),
    title: "episode_page.batte_wiire",
    movieTime: "1hr: 22mins",
  },
  {
    image: generateImgPath("/assets/images/movies/popular/03.webp"),
    title: "episode_page.goal",
    movieTime: "2hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/popular/04.webp"),
    title: "episode_page.dandacg",
    movieTime: "1hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/popular/05.webp"),
    title: "episode_page.mexcan",
    movieTime: "1hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/popular/06.webp"),
    title: "episode_page.oit_moleld",
    movieTime: "1hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/popular/07.webp"),
    title: "episode_page.another_danger",
    movieTime: "1hr: 30mins",
  },
];

export const ottVerticleLatestMovies = [
  {
    image: generateImgPath("/assets/images/top-10/01.webp"),
    title: "ott_home.lostti_n_sacee",
    movieTime: "2 hr 30 mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/02.webp"),
    title: "ott_home.ret_Seap",
    movieTime: "3 hr : 0 mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/03.webp"),
    title: "ott_home.X_Men",
    movieTime: "1 hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/04.webp"),
    title: "ott_home.logan",
    movieTime: "1hr : 22mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/05.webp"),
    title: "ott_home.black_queen",
    movieTime: "1hr : 45mins",
  },
];

export const verticleLatestMovies = [
  {
    image: generateImgPath("/assets/images/top-10/06.webp"),
    title: "home.wars_dragons",
    movieTime: "3hr: 00mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/07.webp"),
    title: "home.the_escape",
    movieTime: "1hr: 45mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/08.webp"),
    title: "home.x_men",
    movieTime: "1hr: 22mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/09.webp"),
    title: "home.logan",
    movieTime: "1hr: 45mins",
  },
  {
    image: generateImgPath("/assets/images/top-10/05.webp"),
    title: "home.black_queen",
    movieTime: "2hr: 30mins",
  },
];

export const recommendedforYou = [
  {
    image: generateImgPath("/assets/images/movies/recommended/01.webp"),
    title: "episode_page.another_danger",
    movieTime: "2hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/recommended/02.webp"),
    title: "episode_page.arrival",
    movieTime: "3hr: 00mins",
  },
  {
    image: generateImgPath("/assets/images/movies/recommended/03.webp"),
    title: "episode_page.pricess",
    movieTime: "1hr: 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/recommended/04.webp"),
    title: "episode_page.soull_meate",
    movieTime: "2hr: 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/recommended/05.webp"),
    title: "episode_page.dangacg",
    movieTime: "1hr: 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/recommended/06.webp"),
    title: "episode_page.crcikeft",
    movieTime: "2hr: 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/recommended/07.webp"),
    title: "episode_page.avengrs",
    movieTime: "1hr: 45mins",
  },
];

export const tabSlider = [
  {
    image: generateImgPath("/assets/images/tab-slider/01.webp"),
    title: "ott_home.the_hunter",
    movieTime: "home.series_today",
    seasons: [
      {
        title: "ott_home.season1",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/01.webp"),
            title: "detail_page.fire_and_blood",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/02.webp"),
            title: "detail_page.pointy_endr",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/03.webp"),
            title: "detail_page.win_or_die",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/04.webp"),
            title: "detail_page.black_queen",
            movieTime: "45 minutes",
          },
        ],
      },
      {
        title: "ott_home.season2",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/05.webp"),
            title: "detail_page.valar_morghulis",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/06.webp"),
            title: "detail_page.blackwater",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/07.webp"),
            title: "detail_page.ghost_harrenhal",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/08.webp"),
            title: "detail_page.garden_bones",
            movieTime: "45 minutes",
          },
        ],
      },
      {
        title: "ott_home.season3",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/09.webp"),
            title: "detail_page.mhysa",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/10.webp"),
            title: "detail_page.second_sons",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/11.webp"),
            title: "detail_page.the_climb",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/12.webp"),
            title: "detail_page.kissed_fire",
            movieTime: "45 minutes",
          },
        ],
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/tab-slider/02.webp"),
    title: "detail_page.pirates_dayones",
    movieTime: "ott_home.series_yesterday",
    seasons: [
      {
        title: "ott_home.season1",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/13.webp"),
            title: "detail_page.curse_pearl",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/14.webp"),
            title: "detail_page.dead_chest",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/15.webp"),
            title: "detail_page.at_world_end",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/16.webp"),
            title: "detail_page.stranger_tides",
            movieTime: "45 minutes",
          },
        ],
      },
      {
        title: "ott_home.season2",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/17.webp"),
            title: "detail_page.dead_men",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/18.webp"),
            title: "detail_page.tales_code",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/19.webp"),
            title: "detail_page.romance_dawn",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/20.webp"),
            title: "detail_page.man_straw",
            movieTime: "45 minutes",
          },
        ],
      },
      {
        title: "ott_home.season3",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/21.webp"),
            title: "detail_page.tell_tales",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/22.webp"),
            title: "detail_page.pirates_coming",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/23.webp"),
            title: "detail_page.eat_baratie",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/24.webp"),
            title: "detail_page.chef_chore",
            movieTime: "45 minutes",
          },
        ],
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/tab-slider/03.webp"),
    title: "detail_page.peaky_blinders",
    movieTime: "ott_home.series_tomorrow",
    seasons: [
      {
        title: "ott_home.season1",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/25.webp"),
            title: "detail_page.episode1",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/26.webp"),
            title: "detail_page.episode2",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/27.webp"),
            title: "detail_page.episode3",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/28.webp"),
            title: "detail_page.episode4",
            movieTime: "45 minutes",
          },
        ],
      },
      {
        title: "ott_home.season2",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/29.webp"),
            title: "detail_page.episode1",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/30.webp"),
            title: "detail_page.episode2",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/31.webp"),
            title: "detail_page.episode3",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/32.webp"),
            title: "detail_page.episode4",
            movieTime: "45 minutes",
          },
        ],
      },
      {
        title: "ott_home.season2",
        episodes: [
          {
            image: generateImgPath("/assets/images/tv-show/season/33.webp"),
            title: "detail_page.episode1",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/34.webp"),
            title: "detail_page.episode2",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/35.webp"),
            title: "detail_page.episode3",
            movieTime: "45 minutes",
          },
          {
            image: generateImgPath("/assets/images/tv-show/season/36.webp"),
            title: "detail_page.episode4",
            movieTime: "45 minutes",
          },
        ],
      },
    ],
  },
];

export const topPics = [
  {
    image: generateImgPath("/assets/images/movies/top-picks/01.webp"),
    title: "ott_home.frzzen",
    movieTime: "2hr : 12mins",
  },
  {
    image: generateImgPath("/assets/images/movies/top-picks/02.webp"),
    title: "ott_home.the_crew",
    movieTime: "1hr : 22mins",
  },
  {
    image: generateImgPath("/assets/images/movies/top-picks/03.webp"),
    title: "ott_home.cromeus",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/top-picks/04.webp"),
    title: "ott_home.reodg",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/top-picks/05.webp"),
    title: "ott_home.guiility",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/top-picks/06.webp"),
    title: "ott_home.syyvcihonic",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/top-picks/07.webp"),
    title: "ott_home.tittanc",
    movieTime: "1hr : 30mins",
  },
];

export const latestMovie = [
  {
    image: generateImgPath("/assets/images/movies/latest/01.webp"),
    title: "detail_page.mortal_nories",
    movieTime: "2hr : 12mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/02.webp"),
    title: "detail_page.advetre",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/03.webp"),
    title: "detail_page.net_ailo",
    movieTime: "2hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/04.webp"),
    title: "detail_page.arrivaal",
    movieTime: "2hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/05.webp"),
    title: "ott_home.drama",
    movieTime: "1hr : 55mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/06.webp"),
    title: "detail_page.aune",
    movieTime: "1hr : 25mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/07.webp"),
    title: "detail_page.everest",
    movieTime: "1hr : 45mins",
  },
];

export const suggested = [
  {
    image: generateImgPath("/assets/images/movies/suggested/01.webp"),
    title: "detail_page.choflief",
    movieTime: "2hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/suggested/02.webp"),
    title: "detail_page.lost",
    movieTime: "3hr : 0mins",
  },
  {
    image: generateImgPath("/assets/images/movies/suggested/03.webp"),
    title: "detail_page.red_hamald",
    movieTime: "1hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/suggested/04.webp"),
    title: "detail_page.pandap",
    movieTime: "2hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/suggested/05.webp"),
    title: "detail_page.femllaeemll",
    movieTime: "1hr : 55mins",
  },
  {
    image: generateImgPath("/assets/images/movies/suggested/06.webp"),
    title: "detail_page.ragnarorr",
    movieTime: "2hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/suggested/07.webp"),
    title: "sonil",
    movieTime: "2hr : 15mins",
  },
];

export const spacialLatestMovie = [
  {
    image: generateImgPath("/assets/images/movies/latest/01.webp"),
    title: "detail_page.mortal_nories",
    movieTime: "2hr : 12mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/02.webp"),
    title: "detail_page.advetre",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/03.webp"),
    title: "detail_page.net_ailo",
    movieTime: "2hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/04.webp"),
    title: "detail_page.arrivaal",
    movieTime: "2hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/05.webp"),
    title: "detail_page.drama",
    movieTime: "1hr : 55mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/06.webp"),
    title: "detail_page.aune",
    movieTime: "1hr : 25mins",
  },
  {
    image: generateImgPath("/assets/images/movies/latest/07.webp"),
    title: "detail_page.everest",
    movieTime: "1hr : 45mins",
  },
];
export const upcommingMovie = [
  {
    image: generateImgPath("/assets/images/movies/upcoming/01.webp"),
    title: "detail_page.dinoosaur",
    movieTime: "2hr : 12mins",
  },
  {
    image: generateImgPath("/assets/images/movies/upcoming/02.webp"),
    title: "detail_page.godilla",
    movieTime: "1hr : 22mins",
  },
  {
    image: generateImgPath("/assets/images/movies/upcoming/03.webp"),
    title: "detail_page.batter_caill",
    movieTime: "1hr : 55mins",
  },
  {
    image: generateImgPath("/assets/images/movies/upcoming/04.webp"),
    title: "detail_page.co_nouerllng",
    movieTime: "1hr : 30mins",
  },
  {
    image: generateImgPath("/assets/images/movies/upcoming/05.webp"),
    title: "detail_page.fast_furious",
    movieTime: "2hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/upcoming/06.webp"),
    title: "detail_page.spiderman",
    movieTime: "1hr : 45mins",
  },
  {
    image: generateImgPath("/assets/images/movies/upcoming/07.webp"),
    title: "detail_page.onepeoc",
    movieTime: "2hr : 30mins",
  },
];
