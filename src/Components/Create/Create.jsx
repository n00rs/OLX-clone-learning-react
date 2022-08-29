
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collections } from '../../constants/Collections';
import  {AuthContext, FirebaseContext } from '../../Context/Context';
import Header from '../Header/Header'
import "./Create.css";

function Create() {

const date = new Date().toDateString()


//STATE MANAGEMENT

const [prodName, setProdName] = useState('')
const [category, setCategory] = useState('')
const [price, setPrice] = useState('')
const [prodImage, setProdImage] = useState('')


//USE_CONTEXT

const {firebase} = useContext(FirebaseContext) 
 const {user} = useContext(AuthContext) 


 const navigate = useNavigate() ;
//SUBMIT PRODUCT UPLOAD

const handleSubmit =()=>{

//uploading image to firebase storage 
try {
  
  firebase.storage().ref(`/image/${prodImage.name}`).put(prodImage)                                                       
  .then(({ref})=> ref.getDownloadURL())
  .then((url)=>{
    firebase.firestore().collection(collections.PRODUCTCOLLECTION).add({                                     //SAVING PRODUCT DATA AND URL TO DB WITH USERID
      userId: user.uid,
      name:prodName,
      category,
      price,
      imageUrl:url,
      uploadDate: date
    })
    navigate('/')
  })
} catch (error) {
  alert(error.message)
}
}


  return (
    <>
    <Header />
    <card>
      <div className="centerDiv">
        {/* <form> */}
          <label htmlFor="fname">Prod Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="prodName"
            name="prodName"
            defaultValue={prodName}
            onChange = {(e)=> setProdName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            defaultValue={category}
            onChange = {(e)=> setCategory(e.target.value)}

          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input 
            onChange = {(e)=> setPrice(e.target.value)}
          
          className="input" type="number" value={price} id="price" name="Price" />
          <br />
        {/* </form> */}
        <br />
        <img alt="Posts" width="200px" height="200px" src={prodImage ? URL.createObjectURL(prodImage) : ''}></img>
        {/* <form> */}
          <br />
          <input type="file" 
          onChange={(e)=> setProdImage(e.target.files[0])}
          />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
        {/* </form> */}
      </div>
    </card>
  </>
  )
}

export default Create