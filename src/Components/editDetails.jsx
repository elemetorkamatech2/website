import { Button } from './Button';
import { useRef ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editDetails.css';
import React from 'react';
import { postWebApi } from '../Api/apiWeb';

export const EditDetails = ()=>{

	const dispatch = useDispatch();
	const [erros, setErrors] = useState({ NameErros: "", })
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
  
	const changMyweb=()=>{	

	const isValidTitle = validateTitle(titleRef.current.value);
    const isValidDescription = validateDescription(descriptionRef.current.value);
    const isValidTypeOfDomain = validateTypeOfDomain(typeOfDomainRef.current.value);
    const isValidDomain = validateDomain(domainRef.current.value);

		if (titleRef.current.value!=""&&!isValidTitle) {
			debugger
			setMyweb({ ...myweb,title:titleRef.current.value,
			})
			}
			if
			 (descriptionRef.current.value!=""&&!isValidDescription) {
				debugger
				setMyweb({ ...myweb,description:descriptionRef.current.value,
				})
				}
				if (domainRef.current.value&&!isValidDomain) {
					setMyweb({ ...myweb,domain:domainRef.current.value,
					})
					}
					if (typeOfDomainRef.current.value&&  !isValidTypeOfDomain) {
						setMyweb({ ...myweb,typeOfDomain:typeOfDomainRef.current.value,
						})
						} 
						if (cpuRef.current.value) {
							setMyweb({ ...myweb,cpu:cpuRef.current.value,
							})
							}
							if (memoryRef.current.value) {
								setMyweb({ ...myweb,memory:memoryRef.current.value,
								})
								}
								if (statusRef.current.value) {
									setMyweb({ ...myweb,status:statusRef.current.value,
									})
									}
									if (backupsRef.current.value!="") {
										debugger
										setMyweb({ ...myweb,backups:backupsRef.current.value
										})
										debugger
										}
										if (userIdRef.current.value!="") {
											setMyweb({ ...myweb,userId:userIdRef.current.value,
											})
											}
						
		console.log(myweb);
		debugger
			//postWebApi(myweb);
	 };
	
	
	
       
	return<>
		<div className="container">
			<label htmlFor="fname"> פרטי האתר שלי</label>
			<form action="/action_page.php">
				<div className="row">
					<div className="col-25">
						<label htmlFor="fname"> title</label>
					</div>
					<div className="col-75">
						<input type="text" id="fname" ref={titleRef} name="firstname" placeholder={myweb.title} />
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">description</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" ref={descriptionRef} name="lastname"  placeholder={myweb.description}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">domain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" ref={domainRef} name="lastname"  placeholder={myweb.domain}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">typeOfDomain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={typeOfDomainRef} placeholder={myweb.typeOfDomain}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">cpu</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={cpuRef} placeholder={myweb.cpu}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">memory</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={memoryRef} placeholder={myweb.memory}/>
						
                   </div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">status</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={statusRef} placeholder={myweb.status}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">backups</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={backupsRef} placeholder={myweb.backups}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">userId</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={userIdRef} placeholder={myweb.userId}/>
						
					</div>
				</div>
				<br/>
				<div className="row">
					<Button size="small" onClick={() =>{changMyweb()}} label="submit" />
				</div>
			</form>
		</div>

        
	</>;
};
   