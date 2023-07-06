import { Button } from './Button';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetWeb } from '../Redux/action';
import { useState } from 'react';
import './editDetails.css';
import React from 'react';
import { postWebApi } from '../Api/apiWeb';

export const EditDetails = (props)=>{

	const dispatch = useDispatch();
	const [erros, setErrors] = useState({ NameErros: "", })
	const [myweb,setMyweb]=useState(props.data);
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
		setMyweb( title=title.current.value,description=description.current.value,domain=domain.current.value,
			typeOfDomain=typeOfDomain.current.value,
			cpu=cpu.current.value,memory=memory.current.value,status=status.current.value
			,backups=backups.current.value,userId.current.value)
			postWebApi(myweb);
			dispatch(myweb)
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
						<input type="text" id="fname" name="firstname" placeholder={myweb.title} />
						ref{title}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">description</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.description}/>
						ref{description}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">domain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.domain}/>
						ref{domain}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">typeOfDomain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.typeOfDomain}/>
						ref{typeOfDomain}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">cpu</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.cpu}/>
						ref{cpu}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">memory</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.memory}/>
						ref{memory}
                   </div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">status</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.status}/>
						ref{status}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">backups</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.backups}/>
						ref{backups}
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">userId</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.userId}/>
						ref{userId}
					</div>
				</div>
				<br/>
				<div className="row">
					<Button size="small" onClick={() =>{alert('נשמר'),changMyweb();}} label="submit" />
				</div>
			</form>
		</div>

        
	</>;
};
   