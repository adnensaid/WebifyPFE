import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from './contact.module.scss';
import contactImg from '../../../../assets/images/contactLogo.png';
import map from '../../../../assets/images/map.png';
import phone from '../../../../assets/images/phone.png';
import mail from '../../../../assets/images/mail.png';
import fcb from '../../../../assets/images/fcbwhite.png';
import instagram from '../../../../assets/images/instagramwhite.png';
import linkedin from '../../../../assets/images/linkedinwhite.png';


const ComposantInput = ({ field, form : { touched, errors }, ...props })=>(
    <input 
    type="text" 
    { ...field }
    className={ errors[field.name] && touched[field.name] ? "form-control border border-2 border-danger" : "form-control border-none" } 
    {...props}
    placeholder="Votre nom"  />  
);
const CustomError = (props)=>{
  return(
    <div className="p-2 text-danger fs-2"> { props.children } </div>
  )
}
export default class Contact extends Component{

  submit = (values, actions)=>{
    console.log(values);
    actions.setSubmitting(false)
  }
  userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'trop court').max(20, 'trop long').required('requis'),
    email: Yup.string().email('mauvais email').required('requis'),
    text:Yup.string().required('requis')
  })
  render(){
    return(
      <section className={ Style.contact }>
        <div className="container">
          <p className={ Style.titre+" titre text-start mb-8" }>CONTACTEZ - NOUS</p>
          <div className={ Style.contactContent}>
            <div className={ Style.contactForm }>
              <p className="paragraphe paragraphe-primary">
                Un projet sur le web? Une envie de création de site web ? <br />
                Besoin d’une stratégie sur les réseaux sociaux? <br />
                Contactez nous !
              </p>
              <Formik
              onSubmit = { this.submit }
              initialValues={{ name:'', email:'', text:'' }}
              validationSchema = { this.userSchema }
              //validate = { this.validate } 
              //validateOnBlur = { false }
              //validateOnChange = { false }
              >
                { (
                  {
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched
                  }
                )=>(
                    <form onSubmit={ handleSubmit} className="bg-white">
                    <div className="mb-6 form-group">
                      <Field name="name" component={ ComposantInput } />
                      <ErrorMessage name="name" component={ CustomError } />
                    </div>
                    <div className="mb-6 form-group">
                      <Field name="email" component={ ComposantInput } type="email" /> 
                      <ErrorMessage name="email" component={ CustomError } />
                    </div>
                    <div className="mb-6 form-group">
                      <Field name="text" >
                        {
                          ({field, form:{touched, errors}})=>(
                        <textarea 
                          type="textarea"  
                          {...field}
                          className={ errors[field.name] && touched[field.name] ? "form-control border border-2 border-danger" : "form-control border-none" } 
                          placeholder="Votre message" rows="5" />  
                              )
                        }
                      </Field>
                      <ErrorMessage name="text" component={ CustomError } />
                    </div>
                    <button type="submit" className="btn btn-primary mt-0" disabled={ isSubmitting } >Envoyer</button>
                  </form>    
                 ) 
                }
              </Formik>
            </div>
            <div className={ Style.contactCordinate+" mt-5" }>
              <img src={ contactImg } alt="img" />
              <div className={ Style.contactCordinateText+" my-5" }>
                <div className={ Style.contactCordinateTextElem }>
                  <img src={ map } alt="map" />
                  <p className="paragraphe paragraphe-primary ps-5">Immeuble jaziri Boulevard 14  janvier, Hammam Sousse</p>
                </div>
                <div className={ Style.contactCordinateTextElem }>
                  <img src={ phone } alt="phone" />
                  <p className="paragraphe paragraphe-primary ps-5">00216 25 23 43 69</p>
                </div>
                <div className={ Style.contactCordinateTextElem }>
                  <img src={ mail } alt="mail"/>
                  <p className="paragraphe paragraphe-primary ps-5">admin@webify.pro</p>
                </div>
              </div>
              <div className={ Style.socials }>
                <div className={ Style.socialsElem }>
                  <img src={linkedin} alt="linkedin" />
                </div>
                <div className={ Style.socialsElem }>
                  <img src={fcb} alt="fcb" />
                </div>
                <div className={ Style.socialsElem }>
                  <img src={instagram} alt="instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}