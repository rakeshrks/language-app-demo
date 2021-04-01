import React,{Component} from 'react';
import './Language.css';
import Languagelist from './Languagelist';
import 'tachyons';
import Axios from 'axios';

class Language extends Component {
   
    constructor(){
      super();
      this.state = {
          name : "Language App" ,
          languages: []
      }
  }
  componentDidMount(){
    Axios.get('https://www.mist-one.com/pub/languages').then((response)=>{
       console.log(response)
       this.setState({
         languages : response.data.data.rows
     })
      });
 }
    render(){
        const languageArray = this.state.languages;
         
         const arrayLanguagecard = languageArray.map ( (language, i) => {
               
               return <Languagelist key={i} id={languageArray[i].id} 
                                     name={languageArray[i].languageNameNative} 
                                     image={languageArray[i].image}/>
    
    
         })
    
        return(
              <div className="mainpage">
                <h1>{this.state.name}</h1>
                 {arrayLanguagecard}                
              </div>
    )

  }
}
     
export default Language;