import React, { useState, useRef } from "react";
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { SetWeb } from '../Redux/action';
import './editDetails.css';
import { postWebApi } from '../Api/apiWeb';

export const EditDetails = (props) => {
 const [myweb, setMyweb] = useState({
    title: "",
    description: "",
   typeOfDomain: "",
    domain: "",
    cpu:"",
    memory:"",
    status:"",
    backups:"",
    userId:"",
  });

  const titleRef = useRef();
  const descriptionRef = useRef();
  const typeOfDomainRef = useRef();
  const domainRef = useRef();
  const cpuRef = useRef();   
  const memoryRef = useRef();   
  const statusRef = useRef();   
  const backupsRef = useRef();   
  const userIdRef = useRef();   

  const changMyweb = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredTypeOfDomain = typeOfDomainRef.current.value;
    const enteredDomain = domainRef.current.value;
    const enteredCpu = cpuRef.current.value;
    const enteredMemory = memoryRef.current.value;
    const enteredStatus = statusRef.current.value;
    const enteredBackups = backupsRef.current.value;
    const enteredUserId= userIdRef.current.value;

    const isValidTitle = validateTitle(enteredTitle);
    const isValidDescription = validateDescription(enteredDescription);
    const isValidTypeOfDomain = validateTypeOfDomain(enteredTypeOfDomain);
    const isValidDomain = validateDomain(enteredDomain);

    if (!isValidTitle ||title.current.value!="" || description.current.value!=""|| userId.current.value!="" || backups.current.value!=""|| !isValidDescription ||  !isValidTypeOfDomain || !isValidDomain) {
      // Handle invalid fields (e.g., show error messages)
      return;
    }

    const updatedMyweb = {
      title: enteredTitle,
      description: enteredDescription,
      typeOfDomain: enteredTypeOfDomain,
      domain: enteredDomain,
      cpu:enteredCpu,
      memory:enteredMemory,
      status:enteredStatus,
      backups:enteredBackups,
      userId:enteredUserId,

    };
    setMyweb(updatedMyweb);
    postWebApi(myweb);
    dispatch(myweb);

    // Dispatch action or submit form
    // ...
  };

  const validateTitle = (title) => {
    const titleRegex = /^(?=.*[a-zA-Z])[a-zA-Z\s-]{3,20}$/;
    return titleRegex.test(title);
  };

  const validateDescription = (description) => {
    const descriptionRegex = /^(?=.*[a-zA-Z])[a-zA-Z\s-]{50,150}$/;
    return descriptionRegex.test(description);
  };

  const validateTypeOfDomain = (typeOfDomain) => {
    const typeOfDomainRegex = /^[a-zA-Z0-9-]{1,63}(?<!-)$/;
    return typeOfDomainRegex.test(typeOfDomain);
  };

  const validateDomain = (domain) => {
    const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,6})?$/;
    return domainRegex.test(domain);
  };

  return <>
      <div className="container">
			<label htmlFor="fname"> פרטי האתר שלי</label>
			<form action="/action_page.php">
				<div className="row">
					<div className="col-25">
						<label htmlFor="fname"> Title:</label>
					</div>
					<div className="col-75">
						<input type="text" id="fname" name="firstname" ref={titleRef} placeholder={myweb.title} required/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">Description:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={descriptionRef} placeholder={myweb.description} required/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">Domain:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladres" name="lastname" ref={domainRef} placeholder={myweb.domain} required/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladrss">Type of Domain:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ldress" name="lastname" ref={typeOfDomainRef} placeholder={myweb.typeOfDomain} required/>	
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">Cpu:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladrless" name="lastname" ref={cpuRef}  placeholder={myweb.cpu}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">Memory:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladpress" name="lastname" ref={memoryRef} placeholder={myweb.memory}/>
                   </div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">Status:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladrepss" name="lastname" ref={statusRef} placeholder={myweb.status}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="lasdress">Backups:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladrtess" name="lastname" ref={backupsRef} placeholder={myweb.backups}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">User Id:</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladruess" name="lastname" ref={userIdRef} placeholder={myweb.userId}/>
					</div>
				</div>
				<br/>
				<div className="row">
					<Button size="small" onClick={changMyweb} label="submit" />
				</div>
			</form>
        
            </div>   </>;
};




