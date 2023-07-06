import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { SetWeb } from '../Redux/action';
import { useState } from 'react';
import './editDetails.css';
import React from 'react';

export const EditDetails = ()=>{

	const dispatch = useDispatch();
	const [myweb,setMyweb]=useState(
		useSelector(state => state.web[0]));

	const dispatchMyweb = () => {
		dispatch(SetWeb(myweb));
	};
	
	const dispatchtitle = (e) => {
		setMyweb({ ...myweb, title: e });
	};
	const dispatchdescription = (e) => {
		setMyweb({ ...myweb, description: e });
	};
	const dispatchdomain = (e) => {
		setMyweb({ ...myweb, domain: e });
	};
	const dispatchtypeOfDomain = (e) => {
		setMyweb({ ...myweb, typeOfDomain: e });
	};
	const dispatchcpu = (e) => {
		setMyweb({ ...myweb, cpu: e });
	};
	const dispatchmemory = (e) => {
		setMyweb({ ...myweb, memory: e });
	};
	const dispatchstatus = (e) => {
		setMyweb({ ...myweb, status: e });
	};
	const dispatchbackups = (e) => {
		setMyweb({ ...myweb, backups: e });
	};
	const dispatchuserId = (e) => {
		setMyweb({ ...myweb, userId: e });
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
						<input type="text" id="fname" name="firstname" placeholder={myweb.title} onChange={(e) => dispatchtitle(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">description</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.description}onChange={(e) =>dispatchdescription(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">domain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.domain}onChange={(e) =>dispatchdomain(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">typeOfDomain</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.typeOfDomain}onChange={(e) =>dispatchtypeOfDomain(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">cpu</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.cpu}onChange={(e) =>dispatchcpu(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">memory</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.memory}onChange={(e) =>dispatchmemory(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">status</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.status}onChange={(e) =>dispatchstatus(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">backups</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.backups}onChange={(e) =>dispatchbackups(e.target.value)}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="ladress">userId</label>
					</div>
					<div className="col-75">
						<input type="text" id="ladress" name="lastname"  placeholder={myweb.userId}onChange={(e) =>dispatchuserId(e.target.value)}/>
					</div>
				</div>
				<br/>
				<div className="row">
					<Button size="small" onClick={() =>{alert('נשמר'),dispatchMyweb();}} label="submit" />
				</div>
			</form>
		</div>

        
	</>;
};
   