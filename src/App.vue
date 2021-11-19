<template>
<!--  <PagesList/>-->
  <Menu />
</template>

<script>
import useDatabase from './composable/database'
import PagesList from './components/PagesList.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: { Menu, PagesList },
  setup() {

    const { get, set, put, del, data } = useDatabase('siteMap')


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
      solution: {
        position: 1,
        name: 'Решения',
        content: [],
        children: {
          agriculture: {
            position: 1,
            content: [],
            children: {
              'navigation': {
                position: 1,
                content: [],
              },
              'auto-drive': {
                position: 2,
                content: [],
              },
              'machines-monitoring': {
                position: 3,
                redirect: 'combine',
                menuHideChildren: true,
                children: {
                  'combine': {
                    position: 1,
                    content: []
                  },
                  'tractor': {
                    position: 2,
                    content: []
                  },
                  'refueller': {
                    position: 3,
                    content: []
                  },
                  'truck': {
                    position: 4,
                    content: []
                  },
                  'sprayer': {
                    position: 5,
                    content: []
                  },
                }
              },
              'accurate-planter': {
                position: 4,
                content: [],
              },
              'harvest': {
                position: 5,
                redirect: 'ag-leader',
                menuHideChildren: true,
                children: {
                  'ag-leader': {
                    position: 1,
                    content: []
                  },
                  'dinamica-generate': {
                    position: 2,
                    content: []
                  },
                  'bunker': {
                    position: 3,
                    content: []
                  },
                }
              },
              'flow-management': {
                position: 6,
                redirect: 'dry',
                menuHideChildren: true,
                children: {
                  'dry': {
                    position: 1,
                    content: []
                  },
                  'wet': {
                    position: 2,
                    content: []
                  }
                }
              },
              'feed-control': {
                position: 7,
                content: [],
              },
              'feed-analyzer': {
                position: 8,
                content: [],
              }
            }

          },
          transport: {
            position: 2,
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

      products: {
        position: 2,
        name: 'Продукты',
        content: [],
        children: {
          agriculture: {
            position: 1,
            content: [],
            children: {
              'navigation': {
                position: 1,
                content: [],
              },
              'auto-drive': {
                position: 2,
                content: [],
              },
              'correction': {
                position: 3,
                content: [],
              },
              'flow-management': {
                position: 4,
                content: [],
              },
              'feed-control': {
                position: 5,
                content: [],
              },
              'feed-analyzer': {
                position: 6,
                content: [],
              }
            }

          },
          transport: {
            position: 2,
            content: [],
            children: {
              'tracker': {
                position: 1,
                content: [],
              },
              'fuel-sensor': {
                position: 2,
                content: [],
              },
              'additional': {
                position: 3,
                content: [],
              },
              'personal-tracker': {
                position: 4,
                content: [],
              }
            }

          },
        }
      },

      'program-solution': {
        position: 3,
        name: 'Программные решения',
        content: [],
        children: {
          'gurtam': {
            position: 1,
            content: [],
            children: {
              'wialon': {
                position: 1,
                content: [],
              },
              'hecterra': {
                position: 2,
                content: [],
              },
              'logistics': {
                position: 3,
                content: [],
              },
              'eco-driving': {
                position: 4,
                content: [],
              },
              'fleetrun': {
                position: 5,
                content: [],
              },
              'wia-tag': {
                position: 6,
                content: [],
              }
            }
          },
          'dtm': {
            position: 2,
            content: [],
            children: {
              'dtm': {
                position: 1,
                content: [],
              },
              'dtm-advanced': {
                position: 2,
                content: [],
              }
            }

          },
          'ag-leader': {
            position: 3,
            content: [],
            children: {
              'ag-finiti': {
                position: 1,
                content: [],
              },
              'sms': {
                position: 2,
                content: [],
              }
            }
          },
        },
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
            content: [],
          },
          'news': {
            position: 2,
            content: [],
          },
          'projects': {
            position: 3,
            content: [],
          },
          'vacancy': {
            position: 4,
            content: [],
          },
        }
      },

      contacts: {
        position: 6,
        name: 'Контакты',
        content: []
      }
    }



    set(pages)


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
