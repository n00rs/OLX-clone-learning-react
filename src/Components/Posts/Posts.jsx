import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collections } from '../../constants/Collections'
import { FirebaseContext } from '../../Context/Context'
import { postContext } from '../../Context/postContext'

import Heart from '../../assets/Heart'
import './Posts.css'

function Posts() {
  const [products, setProducts] = useState([])

  const { firebase } = useContext(FirebaseContext)
  const { setPostDetails } = useContext(postContext)

  const navigate = useNavigate()

  useEffect(() => {
    try {

      firebase.firestore().collection(collections.PRODUCTCOLLECTION).get()
        .then((snap) => {
          const allProducts = snap.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id
            }
          })
          setProducts(allProducts)
        }).catch(err => alert(err.message))
    } catch (error) {
      alert(error.message, 'error')
    }

  }, [])


  const viewPost = (product) => {
    setPostDetails(product)
    navigate('/view-post')
  }
  // console.log(products.map((p)=>{console.log(p)}))


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {
            /* { let conso = products ; */
            products.map((product) => {
              return (

                <div onClick={() => viewPost(product)}
                  className="card" >

                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{ product.category} </span>
                    <p className="name"> {product.name} </p>
                  </div>
                  <div className="date">
                    <span> {product.uploadDate} </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {
            products.slice(0, 5).map((product) => {
              return (

                <div className="card">
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.uploadDate}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Posts