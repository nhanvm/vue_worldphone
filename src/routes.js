import cpnHome from './components/include/cpnHome'
import detailProduct from './components/detailProduct/detailProduct'
import cpnFooter from './components/include/cpnFooter'
import listCart from './components/cart/listCart'
import checkout from './components/checkout/checkout'
import contact from './components/contact/contact'
import contactConfirm from './components/contact/contact_confirm'

export const routes = [
  { path: '/', name: 'cpnHome', component: cpnHome },
  { path: '/cpnFooter', name: 'cpnFooter', component: cpnFooter, props: this.title },
  { path: '/cart', name: 'listCart', component: listCart },
  { path: '/detailProduct/:id', name: 'detailProduct', component: detailProduct, props: this.title },
  { path: '/checkout', name: 'checkout', component: checkout },
  { path: '/contact', name: 'contact', component: contact },
  { path: '/contact_confirm/:id', name: 'contactConfirm', component: contactConfirm }
]
