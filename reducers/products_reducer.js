import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from '../actions'

var list_start

if (window.localStorage.getItem('productList')) {
  list_start = JSON.parse(window.localStorage.getItem('productList'))
} else {
  list_start = [
    {
      name: 'b0006se5bq',
      number: 'singing coach unlimited',
      description:
        'singing coach unlimited - electronic learning products (win me nt 2000 xp)',
      images: [
        {
          url: 'http://lorempixel.com/200/200/technics/',
          name: 'singing coach'
        },
        {
          url: 'http://lorempixel.com/200/200/abstract/',
          name: 'front side'
        }
      ]
    },
    {
      name: 'b00021xhzw',
      number:
        'adobe after effects professional 6.5 upgrade from standard to professional',
      description:
        'upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets',
      images: []
    },
    {
      name: 'b00021xhzw',
      number: 'domino designer/developer v5.0',
      description:
        'reference domino designer/developer r5 doc pack includes the following titles: application development with domino designer (intermediate-advanced) 536 pages it explains building applications creating databases using forms fields views folders navi',
      images: [
        {
          url: 'http://lorempixel.com/200/200/people/',
          name: 'cover'
        }
      ]
    }
  ]
}

export default function(state = list_start, action) {
  switch (action.type) {
    case EDIT_PRODUCT:
      console.log('editing a product')
      var newState = state
      newState[action.payload.id] = action.payload.product
      window.localStorage.setItem('productList', JSON.stringify(newState))
      return newState
    case FETCH_PRODUCTS:
      return state
    default:
      return state
  }
}
