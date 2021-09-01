import cpnHome from './components/include/cpnHome'
import detailProduct from './components/detailProduct/detailProduct'
import cpnFooter from './components/include/cpnFooter'
import listCart from './components/cart/listCart'

export const routes = [
  { path: '/', name: 'cpnHome', component: cpnHome },
  { path: '/cpnFooter', name: 'cpnFooter', component: cpnFooter, props: this.title },
  { path: '/cart', name: 'listCart', component: listCart },
  { path: '/detailProduct/:id', name: 'detailProduct', component: detailProduct, props: this.title }
]
