import React, {useState, useRef} from 'react';
import './FormCreatingWebsite.css'
import { useNavigate } from "react-router";
import {CreatingWebsite} from "./CreatingWebsite";

export const FormCreatingWebsite = ()=>{
    const [errors, setErrors] = useState({  title: '',description: '',domain:"",typeOfDomain:"",cpu:"",memory:"",userId:""})
    const  mytitleRef = useRef(0)
    const mydescriptionRef = useRef(0)
    const mydomainRef = useRef(0)
    const mytypeOfDomainRef = useRef(0)
    const mycpuRef = useRef(0)
    const myuserIdRef = useRef(0)
    const mymemoryRef = useRef(0)
    const [isgood, setisgood] = useState(false)
    const [site, setsite] = useState(false)
    const  title = (e) => {
        const  title = /^[a-zA-Z\s]*$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  title: 'Required field!' })
        }
        else if (!e.target.value.match(title)) {
            setErrors({ ...errors,   title: ' the title mast to be with English Letters or spaces '})
        }
        else if(e.target.value.length<3||e.target.value.length>50)
        setErrors({ ...errors,   title: ' the title mast to be Greater than 3 and less than fifty '})
        else setErrors({ ...errors,   title: '' })
    }
    const  description = (e) => {
        const  description = /^[a-zA-Z\s]*$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  description: 'Required field!' })
        }
        else if (!e.target.value.match(description)) {
            setErrors({ ...errors,   description: ' the description mast to be with English Letters or spaces '})
        }
        else if(e.target.value.length<10||e.target.value.length>100)
        setErrors({ ...errors,   description: ' the description mast to be Greater than 10 and less than 100 '})
        else setErrors({ ...errors,   description: '' })
    }
    const  domain= (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  domain: 'Required field!' })
        }
        else setErrors({ ...errors,   domain: '' })
    }
    const  typeOfDomain = (e) => {
        const typeOfDomain =  /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  typeOfDomain: 'Required field!' })
        }
        else if (!e.target.value.match(typeOfDomain)) {
            setErrors({ ...errors,   typeOfDomain:'The domain type is not Right'})
        }
        else setErrors({ ...errors,   typeOfDomain: '' })
    }
    const   cpu = (e) => {
        const allowedCpuTypes = ['686', '586', '486', '386'];
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  cpu: 'Required field!' })
        }
        else if (!allowedCpuTypes.includes(e.target.value)) {
            setErrors({ ...errors,    cpu:`the cpu mast to be 1 from the ${allowedCpuTypes} array`})
        }
        else setErrors({ ...errors,    cpu: '' })
    }
    const  userId= (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  userId: 'Required field!' })
        }
        else setErrors({ ...errors,   userId: '' })

    }
    const  memory = (e) => {
        const numbersRegex = /^\d+$/;
        if (e.target.value.length === 0) {
            setErrors({ ...errors,  memory: 'Required field!' })
        }
        else if (!e.target.value.match(numbersRegex)) {
            setErrors({ ...errors,   memory:'The memory mast be number'})
        }
        else if (e.target.value<10){
            setErrors({ ...errors,   memory:'The memory mast big from 10'})
        }
        else setErrors({ ...errors,  memory: '' })
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        // בדיקה שכל הערכים תקינים
        if (
          errors.title === '' &&
          errors.description === '' &&
          errors.domain === '' &&
          errors.typeOfDomain === '' &&
          errors.cpu === '' &&
          errors.userId === '' &&
          errors.memory === ''&&
          mytitleRef.current.value != 0 &&
  mydescriptionRef.current.value != 0&&
  mydomainRef.current.value != 0 &&
  mytypeOfDomainRef.current.value !=0 &&
  mycpuRef.current .value!= 0 &&
  myuserIdRef.current.value != 0 &&
  mymemoryRef.current .value!= 0
        ) {
            setsite({
                "title":  mytitleRef.current.value,
                "description": mydescriptionRef.current.value,
                "typeOfDomain": mytypeOfDomainRef.current.value,
                "cpu": mycpuRef.current.value,
                "memory":mymemoryRef.current.value,
                "userId":myuserIdRef.current.value,
                "domain": mydomainRef.current.value,

            })
          alert('הערכים תקינים, ממשיך לקומפוננטה הבאה');
          setisgood(true)
        } else {
          // יש שגיאות, ניתן להתייחס אליהן בהתאם
          setisgood(false)
        }
      };
      



    return<>
    { !isgood&&<h1>There are errors, please correct the values</h1>}
      <div className="form">
          <div className="form-body">
              <div className="title">
                  <label className="form__label" for="  title">title </label>
                  <input className="form__input" type="text" id="firstName" placeholder=" title" ref={mytitleRef} onChange={(e) => title(e)}></input>
            {errors.title !== '' && <p>{errors.title}</p>}
              </div>
              <div className=" description">
                  <label className="form__label" for=" description"> description </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="description" ref={mydescriptionRef} onChange={(e) => description(e)}></input>
            {errors.description !== '' && <p>{errors.description}</p>}
              </div>
              <div className=" userId">
                  <label className="form__label" for="userId">  userId </label>
                  <input className="form__input" type="text" id="confirmPassword" placeholder="userId" ref={myuserIdRef} onChange={(e) => userId(e)}></input>
            {errors.userId !== '' && <p>{errors.userId}</p>}
              </div>

              <div className=" cpu">
                  <label className="form__label" for="cpu"> cpu </label>
                  <input className="form__input" type="text" id="confirmPassword" placeholder="cpu" ref={mycpuRef} onChange={(e) =>  cpu(e)}  list="myList"></input>
                  <datalist id="myList">
            <option>386</option>
            <option>486</option>
            <option>586</option>
            <option>686</option>
        </datalist>

            {errors. cpu !== '' && <p>{errors. cpu}</p>}
              </div>

              <div className="domain">
                  <label className="form__label" for="domain">domain </label>
    <input  type="email" id="email" className="form__input" placeholder="domain " ref={mydomainRef} onChange={(e) => domain(e)}></input>
            {errors.domain !== '' && <p>{errors.domain}</p>}
              </div>
              <div className=" typeOfDomain">
                  <label className="form__label" for="typeOfDomain"> typeOfDomain </label>
                  <input className="form__input" type="email"  id="password" placeholder="typeOfDomain" ref={mytypeOfDomainRef} onChange={(e) => typeOfDomain(e)}></input>
            {errors.typeOfDomain !== '' && <p>{errors.typeOfDomain}</p>}
              </div>
              <div className="memory">
                  <label className="form__label" for="memory">memory </label>
                  <input className="form__input" type="number" min="10" id="confirmPassword" placeholder="memory" ref={mymemoryRef} onChange={(e) =>memory(e)}></input>
            {errors.memory !== '' && <p>{errors.memory}</p>}
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn" onClick={handleSubmit}>Register</button>
          </div>
      </div>   
      { isgood&&<CreatingWebsite site={site} ></CreatingWebsite>}   
      </>       
}

 