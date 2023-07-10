import { Button } from './Button';
import { useRef ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editDetails.css';
import React from 'react';
import { postWebApi } from '../Api/apiWeb';

export const EditDetails = ()=>{

	const dispatch = useDispatch();
	const [erros, setErrors] = useState({ NameErros: "", })
	const [myweb,setMyweb]=useState(useSelector(state => state.web[0]) );

    const title = useRef();
    const description = useRef();
    const domain = useRef();   
	const typeOfDomain = useRef();   
	const cpu = useRef();   
    const memory = useRef();   
    const status = useRef();   
    const backups = useRef();   
    const userId = useRef();   

	const changMyweb=()=>{	
		if (title.current.value!="") {
			debugger
			setMyweb({ ...myweb,title:title.current.value,
			})
			}
			if
			 (description.current.value!="") {
				debugger
				setMyweb({ ...myweb,description:description.current.value,
				})
				}
				if (domain.current.value) {
					setMyweb({ ...myweb,domain:domain.current.value,
					})
					}
					if (typeOfDomain.current.value) {
						setMyweb({ ...myweb,typeOfDomain:typeOfDomain.current.value,
						})
						} 
						if (cpu.current.value) {
							setMyweb({ ...myweb,cpu:cpu.current.value,
							})
							}
							if (memory.current.value) {
								setMyweb({ ...myweb,memory:memory.current.value,
								})
								}
								if (status.current.value) {
									setMyweb({ ...myweb,status:status.current.value,
									})
									}
									if (backups.current.value!="") {
										debugger
										setMyweb({ ...myweb,backups:backups.current.value
										})
										debugger
										}
										if (userId.current.value!="") {
											setMyweb({ ...myweb,userId:userId.current.value,
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
						<input type="text" id="fname" ref={title} name="firstname" placeholder={myweb.title} />
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">description</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" ref={description} name="lastname"  placeholder={myweb.description}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">domain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" ref={domain} name="lastname"  placeholder={myweb.domain}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">typeOfDomain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={typeOfDomain} placeholder={myweb.typeOfDomain}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">cpu</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={cpu} placeholder={myweb.cpu}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">memory</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={memory} placeholder={myweb.memory}/>
						
                   </div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">status</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={status} placeholder={myweb.status}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">backups</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={backups} placeholder={myweb.backups}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">userId</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname" ref={userId} placeholder={myweb.userId}/>
						
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
   