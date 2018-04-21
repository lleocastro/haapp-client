export class Mocks {

  constructor() {}

  usersMock() {
    return [
      {
        user_id: 0,
        name: 'Leonardo B. Castro',
        username: 'lecastro',
        photos: [
          {url: '../../assets/imgs/mocks/my.jpg', default: true},
          {url: '', default: false},
          {url: '', default: false}
        ],
        created_at: new Date(),
        updated_at: new Date(),
        birth_year: 1994,
        job_or_school: 'Analista/Desenvolvedor Web',
        minibio: '',
        tags: [],
        publications_counter: 9999,
        current_status: false
      },
      {
        user_id: 1,
        name: 'Chewbacca',
        username: 'chewca666',
        photos: [
          {url: '../../assets/imgs/mocks/chewbacca.jpg', default: true},
          {url: '', default: false},
          {url: '', default: false}
        ],
        created_at: new Date(),
        updated_at: new Date(),
        birth_year: 1994,
        job_or_school: '',
        minibio: '',
        tags: [],
        publications_counter: 0,
        current_status: true
      },
      {
        user_id: 2,
        name: 'Ada Wong',
        username: 'awong',
        photos: [
          {url: '../../assets/imgs/mocks/ada.jpg', default: true},
          {url: '', default: false},
          {url: '', default: false}
        ],
        created_at: new Date(),
        updated_at: new Date(),
        birth_year: 1994,
        job_or_school: '',
        minibio: '',
        tags: [],
        publications_counter: 0,
        current_status: false
      },
      {
        user_id: 3,
        name: 'Kratos',
        username: 'god.krats',
        photos: [
          {url: '../../assets/imgs/mocks/kratos.jpg', default: true},
          {url: '', default: false},
          {url: '', default: false}
        ],
        created_at: new Date(),
        updated_at: new Date(),
        birth_year: 1994,
        job_or_school: '',
        minibio: '',
        tags: [],
        publications_counter: 0,
        current_status: false
      },
      {
        user_id: 4,
        name: 'Leon Scott Kennedy',
        username: '_srkennedy_',
        photos: [
          {url: '../../assets/imgs/mocks/leon.jpg', default: true},
          {url: '', default: false},
          {url: '', default: false}
        ],
        created_at: new Date(),
        updated_at: new Date(),
        birth_year: 1994,
        job_or_school: '',
        minibio: '',
        tags: [],
        publications_counter: 0,
        current_status: false
      },
      {
        user_id: 5,
        name: 'Chuck Norris',
        username: 'chuck_norris',
        photos: [
          {url: '../../assets/imgs/mocks/chuck.jpg', default: true},
          {url: '', default: false},
          {url: '', default: false}
        ],
        created_at: new Date(),
        updated_at: new Date(),
        birth_year: 1994,
        job_or_school: '',
        minibio: '',
        tags: [],
        publications_counter: 0,
        current_status: true
      }
    ];
  }

  chatMessagesMock() {
    return [
      {
        chat_id: 1,
        chat_uuid: '99603135-bbe9-2ce6-684b-36c9af7827a9',
        last_view: new Date(),
        is_favority: false,
        messages: [
          {
            id: 1,
            user_id: 0,
            text: 'Olá chew! como se tá? ^^',
            image_url: null,
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 2,
            user_id: 3,
            text: 'Ahhhhhhhhhh eu to bem, porq?',
            image_url: null,
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 3,
            user_id: 0,
            text: 'Ok então. :0',
            image_url: null,
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 4,
            user_id: 0,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing eli. Sit amet consectetur... adipisicing, dolor, dolor, dolor',
            image_url: 'https://picsum.photos/320/200/?random',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 5,
            user_id: 1,
            text: 'adipisicing, dolor, dolor, dolor',
            image_url: null,
            liked: true,
            read: false,
            created_at: new Date()
          }
        ]
      },
      {
        chat_id: 2,
        chat_uuid: 'dc8ac570-fc88-0b7f-25c3-9775c3cb3f0e',
        last_view: new Date(),
        is_favority: true,
        messages: [
          {
            id: 1,
            user_id: 2,
            text: 'Eai! Lindão ^^',
            liked: true,
            read: true,
            created_at: new Date()
          }
        ]
      },
      {
        chat_id: 3,
        chat_uuid: '62504191-8652-be47-9a3b-4a8ce9f9a69a',
        last_view: new Date(),
        is_favority: false,
        messages: [
          {
            id: 1,
            user_id: 0,
            text: 'Vai matar algum deus hoje? kkkk',
            liked: false,
            read: false,
            created_at: new Date()
          }
        ]
      },
      {
        chat_id: 5,
        chat_uuid: 'd024d446-65ac-26ac-13a4-e94252bddf61',
        last_view: new Date(),
        is_favority: false,
        messages: [
          {
            id: 1,
            user_id: 0,
            text: 'Aaaaaaaaaaaaaaaaaaaaaaaaa',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 2,
            user_id: 0,
            text: 'Aaaaaaaaaaaaaaaaaaaaaaaaa',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 3,
            user_id: 0,
            text: 'Aaaaaaaaaaaaaaaaaaaaaaaaa',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 4,
            user_id: 0,
            text: 'Hahahahahahahahahahahahahahahhahahahaahahahahahahhahaahahha',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 5,
            user_id: 0,
            text: 'Hahahahahahahahahahahahahahahhahahahaahahahahahahhahaahahha',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 6,
            user_id: 0,
            text: 'Hahahahahahahahahahahahahahahhahahahaahahahahahahhahaahahha',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 7,
            user_id: 0,
            text: 'Hahahahahahahahahahahahahahahhahahahaahahahahahahhahaahahha',
            liked: false,
            read: false,
            created_at: new Date()
          },
          {
            id: 7,
            user_id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet felis porta, hendrerit nisl in, imperdiet sem. Suspendisse a odio felis. Suspendisse bibendum est eget tortor fermentum lobortis. Integer in vulputate purus. Quisque sodales, velit vel scelerisque dictum, lacus risus luctus dui, nec dignissim nibh arcu aliquam nibh. Ut euismod magna tincidunt porttitor vulputate. Nunc orci eros, malesuada a lobortis ac, vulputate non dolor.',
            liked: false,
            read: false,
            created_at: new Date()
          }
        ]
      },
      {
        chat_id: 4,
        chat_uuid: 'cdd96d50-92f9-49d0-f7e2-434b384f4227',
        last_view: new Date(),
        is_favority: false,
        messages: [
          {
            id: 1,
            user_id: 5,
            text: 'Esse tal de kratos ta ferrado!',
            liked: false,
            read: true,
            created_at: new Date()
          },
          {
            id: 2,
            user_id: 0,
            text: 'Manda verrr...',
            liked: true,
            read: true,
            created_at: new Date()
          }
        ]
      }
    ];
  }

  uuidsMock() {
    return [
      {
        users_id_associated: [0, 1],
        chat_uuid: '99603135-bbe9-2ce6-684b-36c9af7827a9'
      },
      {
        users_id_associated: [0, 2],
        chat_uuid: 'dc8ac570-fc88-0b7f-25c3-9775c3cb3f0e'
      },
      {
        users_id_associated: [0, 3],
        chat_uuid: '62504191-8652-be47-9a3b-4a8ce9f9a69a'
      },
      {
        users_id_associated: [0, 4],
        chat_uuid: 'd024d446-65ac-26ac-13a4-e94252bddf61'
      },
      {
        users_id_associated: [0, 5],
        chat_uuid: 'cdd96d50-92f9-49d0-f7e2-434b384f4227'
      }
    ]
  }

}
