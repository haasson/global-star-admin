<template>
    <PagesList/>
  <Menu/>
</template>

<script>
import useDatabase from './composable/database'
import PagesList from './components/PagesList.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: { Menu, PagesList },
  setup() {

    // const { get, set, put, del, data } = useDatabase('pages')
    const { get, set, put, del, data } = useDatabase('news')

    // put({
    //   'news/1': {id: 1, content: {}, gallery: []}
    // })



    // const data = {
    //   solution: {
    //     agriculture: {
    //       'navigation': null,
    //       'auto-drive': null,
    //       'machines-monitoring': null,
    //       'accurate-planter': null,
    //       'harvest': null,
    //       'flow-management': null,
    //       'feed-control': null,
    //       'feed-analyzer': null
    //     },
    //     transport: {
    //       'trucking': null,
    //       'refueller': null,
    //       'cars': null
    //     },
    //     building: {
    //       'weighting-system': null,
    //       '3d-system': null,
    //       'monitoring': null
    //     }
    //   },
    //
    //   products: {
    //     agriculture: {
    //       'navigation': null,
    //       'auto-drive': null,
    //       'correction': null,
    //       'flow-management': null,
    //       'feed-control': null,
    //       'feed-analyzer': null
    //     },
    //     transport: {
    //       'tracker': null,
    //       'fuel-sensor': null,
    //       'additional': null,
    //       'personal-tracker': null
    //     },
    //   },
    //
    //   'program-solution': {
    //     'gurtam': {
    //       'wialon': null,
    //       'hecterra': null,
    //       'logistics': null,
    //       'eco-driving': null,
    //       'fleetrun': null,
    //       'wia-tag': null
    //     },
    //     'dtm': {
    //       'dtm': null,
    //       'dtm-advanced': null
    //     },
    //     'ag-leader': {
    //       'ag-finiti': null,
    //       'sms': null
    //     }
    //   },
    //
    //   service: null,
    //
    //   about: {
    //
    //   },
    //
    //   contacts: {
    //
    //   }
    // }

    const pages = {
      main: {
        content: [{name: 'AppTitle', props: {text: 'Title for main page'}}],
      },

      solution: {
        position: 1,
        name: 'Решения',
        content: [],
        children: {
          agriculture: {
            position: 1,
            name: 'Для с/х техники',
          },
          transport: {
            position: 2,
            name: 'Для транспорта',
            content: [],
            children: {
              'trucking': {
                position: 1,
                content: [],
              },
              'refueller': {
                position: 2,
                content: [],
              },
              'cars': {
                position: 3,
                content: [],
              }
            }

          },
          building: {
            position: 3,
            name: 'Для строительства',
            content: [],
            children: {
              'weighting-system': {
                position: 1,
                content: [],
              },
              '3d-system': {
                position: 2,
                content: [],
              },
              'monitoring': {
                position: 3,
                content: [],
              }
            }
          }
        }
      },

      'solution@agriculture': {
        content: [{name: 'AppTitle', props: {text: 'Title from server'}}],
        children: {
          'navigation': {
            position: 1,
            name: 'Навигация',
          },
          'auto-drive': {
            position: 2,
            name: 'Автоматическое вождение'
          },
          'machines-monitoring': {
            position: 3,
            name: 'Мониторинг с/х техники',
            redirect: '/combine',
            menuHideChildren: true,
            children: {
              'combine': {
                position: 1,
                name: 'Комбайн',
              },
              'tractor': {
                position: 2,
                name: 'Трактор',
              },
              'refueller': {
                position: 3,
                name: 'Топливозаправщик',
              },
              'truck': {
                position: 4,
                name: 'Грузовик',
              },
              'sprayer': {
                position: 5,
                name: 'Самоходный опрыскиватель',
              },
            }
          },
          'accurate-planter': {
            position: 4,
            name: 'Точный высев',
          },
          'harvest': {
            position: 5,
            name: 'Уборка урожая',
            redirect: 'ag-leader',
            menuHideChildren: true,
            children: {
              'ag-leader': {
                position: 1,
                name: 'AgLeader',
              },
              'dinamica-generate': {
                position: 2,
                name: 'Dinamica Generale',
              },
              'bunker': {
                position: 3,
                name: 'Бункеры перегрузчики',
              },
            }
          },
          'flow-management': {
            position: 6,
            name: 'Управление расходом и внесением',
            redirect: 'dry',
            menuHideChildren: true,
            children: {
              'dry': {
                position: 1,
                name: 'Внесение сухих материалов',
              },
              'wet': {
                position: 2,
                name: 'Внесение жидких материалов',
              }
            }
          },
          'feed-control': {
            position: 7,
            name: 'Системы контроля кормления КРС',
          },
          'feed-analyzer': {
            position: 8,
            name: 'Бик анализаторы кормов',
          }
        }
      },
      'solution@agriculture@navigation': {
        content: [{name: 'AppTitle', props: {text: 'Navigation page'}}],
      },
      'solution@agriculture@auto-drive': {
        content: [],
      },
      'solution@agriculture@machines-monitoring': {
        content: [],
      },
      'solution@agriculture@machines-monitoring@combine': {
        content: [{name: 'AppTitle', props: {text: 'Title for Combine'}}],
      },
      'solution@agriculture@machines-monitoring@tractor': {
        content: [],
      },
      'solution@agriculture@machines-monitoring@refueller': {
        content: [],
      },
      'solution@agriculture@machines-monitoring@truck': {
        content: [],
      },
      'solution@agriculture@machines-monitoring@sprayer': {
        content: [],
      },
      'solution@agriculture@accurate-planter': {
        content: [],
      },
      'solution@agriculture@harvest': {
        content: [],
      },
      'solution@agriculture@harvest@ag-leader': {
        content: [],
      },
      'solution@agriculture@harvest@dinamica-generate': {
        content: [],
      },
      'solution@agriculture@harvest@bunker': {
        content: [],
      },
      'solution@agriculture@flow-management': {
        content: [],
      },
      'solution@agriculture@flow-management@dry': {
        content: [],
      },
      'solution@agriculture@flow-management@wet': {
        content: [],
      },
      'solution@agriculture@feed-control': {
        content: [],
      },
      'solution@agriculture@feed-analyzer': {
        content: [],
      },

      products: {
        position: 2,
        name: 'Продукты',
        content: [],
        children: {
          agriculture: {
            position: 1,
            name: 'Для сельского хозяйства',
            children: {
              'navigation': {
                position: 1,
                name: 'Навигация',
                content: [],
              },
              'auto-drive': {
                position: 2,
                name: 'Автоматическое вождение',
                content: [],
              },
              'correction': {
                position: 3,
                name: 'Сервисы коррекции',
                content: [],
              },
              'flow-management': {
                position: 4,
                name: 'Управление расходом и внесением',
                content: [],
              },
              'feed-control': {
                position: 5,
                name: 'Контроль кормления',
                content: [],
              },
              'feed-analyzer': {
                position: 6,
                name: 'Анализаторы кормов',
                content: [],
              }
            }

          },
          transport: {
            position: 2,
            name: 'Для транспорта',
            children: {
              'tracker': {
                position: 1,
                name: 'Модули слежения',
                content: [],
              },
              'fuel-sensor': {
                position: 2,
                name: 'Датчики уровня топлива',
                content: [],
              },
              'additional': {
                position: 3,
                name: 'Дополнительное оборудование',
                content: [],
              },
              'personal-tracker': {
                position: 4,
                name: 'Песональные трекеры',
                content: [],
              }
            }

          },
        }
      },

      'products@agriculture': {},
      'products@agriculture@navigation': {},
      'products@agriculture@auto-drive': {},
      'products@agriculture@correction': {},
      'products@agriculture@flow-management': {},
      'products@agriculture@feed-control': {},
      'products@agriculture@feed-analyzer': {},

      'products@transport': {},
      'products@transport@tracker': {},
      'products@transport@fuel-sensor': {},
      'products@transport@additional': {},
      'products@transport@personal-tracker': {},

      'program-solution': {
        position: 3,
        name: 'Программные решения',
        content: [],
        // children: {
        //   'gurtam': {
        //     position: 1,
        //     name: 'Gurtam',
        //     content: [],
        //     children: {
        //       'wialon': {
        //         position: 1,
        //         name: 'Wialon',
        //         content: [],
        //       },
        //       'hecterra': {
        //         position: 2,
        //         name: 'Hecterra',
        //         content: [],
        //       },
        //       'logistics': {
        //         position: 3,
        //         name: 'Logistics',
        //         content: [],
        //       },
        //       'eco-driving': {
        //         position: 4,
        //         name: 'Eco Driving',
        //         content: [],
        //       },
        //       'fleetrun': {
        //         position: 5,
        //         name: 'Fleetrun',
        //         content: [],
        //       },
        //       'wia-tag': {
        //         position: 6,
        //         name: 'Wia Tag',
        //         content: [],
        //       }
        //     }
        //   },
        //   'dtm': {
        //     position: 2,
        //     name: 'DTM',
        //     content: [],
        //     children: {
        //       'dtm': {
        //         position: 1,
        //         name: 'DTM',
        //         content: [],
        //       },
        //       'dtm-advanced': {
        //         position: 2,
        //         name: 'DTM advanced',
        //         content: [],
        //       }
        //     }
        //
        //   },
        //   'ag-leader': {
        //     position: 3,
        //     name: 'Ag Leader',
        //     content: [],
        //     children: {
        //       'ag-finiti': {
        //         position: 1,
        //         name: 'AgFiniti',
        //         content: [],
        //       },
        //       'sms': {
        //         position: 2,
        //         name: 'SMS',
        //         content: [],
        //       }
        //     }
        //   },
        // },
      },

      service: {
        position: 4,
        name: 'Сервис',
        content: [],
        children: {}
      },

      about: {
        position: 5,
        name: 'О компании',
        redirect: 'company',
        menuHideChildren: true,
        children: {
          'company': {
            position: 1,
            name: 'О нас',
            content: [],
          },
          'news': {
            position: 2,
            name: 'Новости',
            content: [],
          },
          'projects': {
            position: 3,
            name: 'Проекты',
            content: [],
          },
          'vacancy': {
            position: 4,
            name: 'Вакансии',
            content: [],
          },
        }
      },

      'about@company': {content: [{name: 'AppTitle', props: {text: 'Title from About company'}}],},
      'about@news': {},
      'about@projects': {},
      'about@vacancy': {},

      contacts: {
        position: 6,
        name: 'Контакты',
        content: []
      }
    }


    // set(pages)



    return { data }

  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
</style>
