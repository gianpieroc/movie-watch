export default {
  data: {
    type: "lists",
    id: "si-te-perdiste",
    numerical_id: 4,
    category: "rent",
    short_name: "Si te perdiste",
    content_type: "Movie",
    is_b2b: false,
    wktv_code: null,
    only_coupon: false,
    kind: "regular",
    is_recommendation: false,
    name: "Si te perdiste...",
    additional_images: {},
    contents: {
      data: [
        {
          type: "movies",
          id: "el-nino",
          numerical_id: 18696,
          title: "El Niño",
          year: 2014,
          duration: 132,
          label: "1,99 €",
          classification: {
            type: "classifications",
            id: "8",
            numerical_id: 8,
            name: "16",
            age: 16,
            adult: false,
            description:
              "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años",
            default: false
          },
          images: {
            artwork:
              "https://images-1.wuaki.tv/system/artworks/18696/master/el-nino-1558433779.jpeg",
            snapshot:
              "https://images-3.wuaki.tv/system/shots/24297/original/el-nino-1478783238.jpeg",
            ribbons: []
          },
          highlighted_score: {
            score: 6.4,
            amount_of_votes: 141,
            formatted_amount_of_votes: "141"
          },
          rating: { average: 4, scale: 5 },
          labels: {
            audio_qualities: [
              {
                type: "audio_qualities",
                id: "2.0",
                numerical_id: 2,
                name: "2.0 (Stereo)",
                abbr: "2.0",
                image:
                  "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
              }
            ],
            hdr_types: [
              {
                type: "hdr_types",
                id: "NONE",
                numerical_id: 1,
                name: "SDR",
                abbr: "NONE",
                image: null
              }
            ],
            purchase_types: [
              {
                type: "purchase_types",
                id: "1",
                numerical_id: 1,
                is_recurring: false,
                name: "Alquiler 48H",
                label: "ALQUILER 48H",
                kind: "rental",
                expires_after_in_seconds: 172800,
                available_time_in_seconds: 172800
              }
            ],
            video_qualities: [
              {
                type: "video_qualities",
                id: "SD",
                numerical_id: 2,
                name: "SD",
                abbr: "SD",
                position: 0,
                image:
                  "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
              },
              {
                type: "video_qualities",
                id: "HD",
                numerical_id: 1,
                name: "HD",
                abbr: "HD",
                position: 1,
                image:
                  "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
              }
            ]
          }
        },
        {
          type: "movies",
          id: "john-wick-pacto-de-sangre",
          numerical_id: 52088,
          title: "John Wick: Pacto de sangre",
          year: 2017,
          duration: 122,
          label: "2,99 €",
          classification: {
            type: "classifications",
            id: "5",
            numerical_id: 5,
            name: "18",
            age: 18,
            adult: false,
            description:
              "Mostrar todos los contenidos, excluyendo los clasificados para adultos",
            default: true
          },
          images: {
            artwork:
              "https://images-2.wuaki.tv/system/artworks/52088/master/john-wick-pacto-de-sangre-1558458448.jpeg",
            snapshot:
              "https://images-1.wuaki.tv/system/shots/145030/original/john-wick-pacto-de-sangre-1560864944.jpeg",
            ribbons: []
          },
          highlighted_score: {
            score: 7.1,
            amount_of_votes: 6674,
            formatted_amount_of_votes: "6,7K"
          },
          rating: { average: 4, scale: 5 },
          labels: {
            audio_qualities: [
              {
                type: "audio_qualities",
                id: "2.0",
                numerical_id: 2,
                name: "2.0 (Stereo)",
                abbr: "2.0",
                image:
                  "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
              }
            ],
            hdr_types: [
              {
                type: "hdr_types",
                id: "NONE",
                numerical_id: 1,
                name: "SDR",
                abbr: "NONE",
                image: null
              }
            ],
            purchase_types: [
              {
                type: "purchase_types",
                id: "1",
                numerical_id: 1,
                is_recurring: false,
                name: "Alquiler 48H",
                label: "ALQUILER 48H",
                kind: "rental",
                expires_after_in_seconds: 172800,
                available_time_in_seconds: 172800
              },
              {
                type: "purchase_types",
                id: "2",
                numerical_id: 2,
                is_recurring: false,
                name: "Venta (Digital Locker)",
                label: "VENTA (DIGITAL LOCKER)",
                kind: "purchase",
                expires_after_in_seconds: null,
                available_time_in_seconds: null
              }
            ],
            video_qualities: [
              {
                type: "video_qualities",
                id: "SD",
                numerical_id: 2,
                name: "SD",
                abbr: "SD",
                position: 0,
                image:
                  "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
              },
              {
                type: "video_qualities",
                id: "HD",
                numerical_id: 1,
                name: "HD",
                abbr: "HD",
                position: 1,
                image:
                  "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
              }
            ]
          }
        }
      ],
      meta: {
        pagination: {
          page: 1,
          count: 39,
          per_page: 18,
          offset: 0,
          total_pages: 3
        }
      }
    }
  }
};
