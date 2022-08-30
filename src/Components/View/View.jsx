import { useEffect, useContext, useState } from "react";
import { collections } from "../../constants/Collections";
import { FirebaseContext } from "../../Context/Context";
import { postContext } from "../../Context/postContext";


import './View.css'
function View() {

  //STATE AND CONTEXT

  const [userDetails, setUserDetails] = useState()
  
  const { postDetails } = useContext(postContext)
  const { firebase } = useContext(FirebaseContext)


  useEffect(() => {
      firebase.firestore().collection(collections.USERCOLLECTECTION).where('id', '==', postDetails.userId)
      .get().then((res) => res.forEach(docs => {
     
        setUserDetails(docs.data())
      }).catch(err=> alert(err.message))
    )
  }, [])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl }
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.uploadedDate}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  )
}

export default View