import { Button } from "./Button"
import { useDispatch, useSelector } from 'react-redux';
import { SetWeb } from "../Redux/action";
import { useState } from "react";
import './editDetails.css'

export const EditDetails = (props)=>{

    const dispatch = useDispatch();
    const [myweb,setMyweb]=useState(
        useSelector(state => state.web[0]));
    // const web = useSelector((myStoer) => myStoer.web);
    console.log(myweb)
     const dispatchMyweb = () => {

        dispatch(SetWeb(myweb));
      };
      const dispatchName = (e) => {
        setMyweb({ ...myweb, name: e });
      };
        const dispatchAdress = (e) => {
            setMyweb({ ...myweb, adress: e });
        };
            const dispatchCategury = (e) => {
                setMyweb({ ...myweb, categury: e });
            };
       
    return<>
      <div class="container">
    <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname"> Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder={myweb.name} onChange={(e) => dispatchName(e.target.value)}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="ladress">Adress</label>
      </div>
      <div class="col-75">
        <input type="text" id="ladress" name="lastname"  placeholder={myweb.adress}onChange={(e) =>dispatchAdress(e.target.value)}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="categury">categury</label>
      </div>
      <div class="col-75">
        <select id="categury" name="country">
          <option value="australia">{myweb.categury}</option>
          <option value="canada">games</option>
          <option value="usa">Other</option>
        </select>
      </div>
    </div>
    <br/>
    <div class="row">
    <Button size="small" onClick={() =>{alert("נשמר"),dispatchMyweb()}} label="submit" />
    </div>
    </form>
  </div>

        
    </>
    }
   