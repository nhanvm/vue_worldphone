import cpnHome from './components/include/cpnHome'
import detailProduct from './components/detailProduct/detailProduct'
import cpnFooter from './components/include/cpnFooter'
import listCart from './components/cart/listCart'
import checkout from './components/checkout/checkout'
import contact from './components/contact/contact'
// import contactConfirm from './components/contact/contact_confirm'
import registration from './components/customers/registration'
import login from './components/customers/login'

export const routes = [
  { path: '/', name: 'cpnHome', component: cpnHome },
  { path: '/cpnFooter', name: 'cpnFooter', component: cpnFooter, props: this.title },
  { path: '/cart', name: 'listCart', component: listCart },
  { path: '/checkout', name: 'checkout', component: checkout },
  { path: '/contact', name: 'contact', component: contact },
  { path: '/contact_confirm/', name: 'contact', component: contact },
  {
    path: '/customers', component: registration, children: [{ path: 'registration', name: 'registration', component: registration }]
  },
  {
    path: '/customers', component: login, children: [{ path: 'login', name: 'login', component: login }]
  },
  {
    path: '/:name', component: detailProduct, children: [{ path: ':id', name: 'detailProduct', component: detailProduct }]
  }
]
