import React from 'react'
import { Formik, Form, Field } from 'formik'

const App = () => {
  return (
    <div>
        <Formik initialValues={{name: "",phone: "" ,gender: "", social:{facebook:"", twitter:""}}} onSubmit={(values)=>{console.log(values)}}>
            <Form >
<label htmlFor="">Name:</label>
<Field name="name" type="password"/>
<br/><br/>
<label>phone</label>
<Field name="phone" type="number"/>
<br/><br/>
<label>gender</label>
<br/>
<label >male</label>
<Field name="gender" value="male" type="radio"/>
<label>female</label>
<Field name="gender" value="female" type="radio"/>
<label >others</label>
<Field name="gender" value="others" type="radio"/>
<br/><br/>
<label htmlFor="">social:</label>
<br/><br/>
<label htmlFor="">facebook:</label>
<Field name="social.facebook" type="text"/>
<br/><br/>
<label htmlFor="">twitter:</label>
<Field name="social.twitter" type="text"/>
<button type="submit">submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default App


// import React, { Component } from 'react'
// import Apifetch from './components/Apifetch'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Apifetch/>
//       </div>
//     )
//   }
// }
