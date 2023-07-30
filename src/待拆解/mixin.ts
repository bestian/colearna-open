import { boot } from 'quasar/wrappers'

import { useDatabase } from 'vuefire'
import { ref as dbRef, set } from 'firebase/database'

const db = useDatabase()

export default boot(({ app }) => {
  app.mixin({
    methods: {
      saveHTML (html:string) {
        return html.replace(/script/g, 'script_')
                    .replace(/iframe/g, 'iframe_')
                    .replace(/style/g, 'iframe_')
      },
      share (rid:string) {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://colearna.pages.dev/class_info/' + rid)
      },
      like (rid:string, uid:string) {
        if (!uid || uid == '') {
          window.alert('您尚末登入，請先登入，謝謝')
          return
        }
        const likes:any[] = this.me.likes || []
        if (likes.indexOf(rid) == -1) {
          likes.push(rid)
          set(dbRef(db, 'users/' + this.uid + '/likes'), likes).then(()=> {
            console.log('user\'s likes updated!')
            window.alert('已將課程加入收藏')
          })
        } else {
          const arr:any[] = []
          for (let j = 0; j < likes.length; j++) {
            if (likes[j] !== rid) { 
              arr.push(likes[j])
            }
          }
          set(dbRef(db, 'users/' + this.uid + '/likes'), arr).then(()=> {
            console.log('user\'s likes updated!')
            window.alert('已將課程移出收藏')
          })
        }
      },
      /* add_to_cart (rid:string, uid:string) {
        if (!uid || uid == '') {
          window.alert('您尚末登入，請先登入，謝謝')
          return
        }
        const cart:any[] = this.me.cart || []
        if (cart.indexOf(rid) == -1) {
          cart.push(rid)
          set(dbRef(db, 'users/' + this.uid + '/cart'), cart).then(()=> {
            console.log('user\s cart updated!')
            window.alert('已將課程加入購物車')
          })
        } else {
          const arr:any[] = []
          for (let j = 0; j < cart.length; j++) {
            arr.push(cart[j])
          }
          set(dbRef(db, 'users/' + this.uid + '/cart'), arr).then(()=> {
            console.log('user\s cart updated!')
            window.alert('課程已位於購物車中')
          })
        }
      }, */
      my_cart (list:Array<any>, cart: Array<any>, paid: Array<any>) {
        return list.filter(function (o) {
          return cart.map(function(c) {
            return c.cid
          }).indexOf(o.id) > -1
        }).map(function(o) {
          const obj = {...o}

          const cc = cart.filter(function(c) {
            return c.cid == o.id
          })[0]
          
          obj.price = cc.total
          obj.plans = cc.plans

          if (paid.map(function(c) {
            return c.cid
          }).indexOf(obj.id) > -1) {
            obj.status = '已付款'
          } else {
            obj.status = '尚末付款'
          }

          return obj
        })
      },
      my_paid (list:Array<any>, cart: Array<any>, paid: Array<any>) {
        return list.filter(function (o) {
          return paid.map(function(c) {
            return c.cid
          }).indexOf(o.id) > -1
        }).map(function(o) {
          const obj = {...o}

          const cc = paid.filter(function(c) {
            return c.cid == o.id
          })[0]
          
          obj.price = cc.total
          obj.plans = cc.plans

          if (paid.map(function(c) {
            return c.cid
          }).indexOf(obj.id) > -1) {
            obj.status = '已付款'
          } else {
            obj.status = '尚末付款'
          }

          return obj
        })
      },
      fil (list: Array<any>, k:string) {
        // console.log(k)
        if (!k) {
          // console.log(list)
          return list
        } else {
          // console.log(list.filter(function(o) {
          //   return o.title.indexOf(k) > -1
          // }))
          return list.filter(function(o) {
            return o.title.indexOf(k) > -1
          })
        }
      }
    }
  }
)})
