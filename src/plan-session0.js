
import React, { Component } from 'react';
import axios from 'axios';

import Stepone from './step-one';
import Steptwo from './step-two';
import Stepthree from './step-three';
import UserList from './user-list';


class PlanSession extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      univerities: [],
      subjects: [],
      users: [],
      value: [],
    }
    localStorage.clear();
    this.nextStep = this.nextStep.bind(this);
    this.stepTwo = this.stepTwo.bind(this);
    this.stepThree = this.stepThree.bind(this);
    this.getListUser = this.getListUser.bind(this);
    this.searchUniversities = this.searchUniversities.bind(this);
    this.backStep = this.backStep.bind(this);
  }

  componentDidMount(){
    const univerities = this.getUniversities();
  }

  getUniversities(){
     axios.get('https://back-react.herokuapp.com/api/v1/universities')
     .then(res => {
       if(res && res.data && res.data.success == true){
         if(res.data.success == true){

           let subjects = res.data.subjects;
           this.setState({subjects})

         }

       }
     })
  }

  nextStep(value){
      let step = 2
      console.dir(value);
      localStorage.setItem('hashvalue', JSON.stringify(value));
      this.setState({value})
      this.setState({step})
  }



  searchUniversities(){
    let search =  JSON.parse(localStorage.getItem("hashvalue"));
    console.dir(search);
    axios.post('https://back-react.herokuapp.com/api/v1/searches/search_universities', { search })
    .then(res => {
      if(res && res.data && res.data.success == true){
        if(res.data.success == true){
           console.dir(res.data.universities);
           let univerities = res.data.universities;
           this.setState({ univerities })
        }

      }
    })

  }

  stepTwo(date, time) {

    let values =  JSON.parse(localStorage.getItem("hashvalue"));
    console.dir(values);
    let value = {
      time: time,
      date: date,
      gender: values.gender,
      latitude: values.latitude,
      longitude: values.longitude,
      zip_code:  values.zip_code,
      subject:  values.subject
   }
    this.setState({value})
    localStorage.setItem('hashvalue', JSON.stringify(value))
    this.searchUniversities();
    let step = 3
    console.dir("step 2");
    console.dir(this.state.value);
    this.setState({step});
  }



  stepThree(univerity){
    let values=  JSON.parse(localStorage.getItem("hashvalue"));
    let value = {
      time: values.time,
      date: values.date,
      gender: values.gender,
      univerity: univerity,
      gender: values.gender,
      latitude: values.latitude,
      longitude: values.longitude,
      zip_code:  values.zip_code.value,
      subject:  values.subject.value
   }
    this.getListUser(value);
    this.setState({value});
  }

   backStep(val){
     let step = val ;
     console.dir(this.state.value);
     this.setState({step});
   }

  getListUser(user){
       axios.post('https://back-react.herokuapp.com/api/v1/searches/get_user', { user })
       .then(res => {
         if(res && res.data && res.data.success == true){
                  let users = res.data.users;
                  let step = 4
                  this.setState({users})
                  this.setState({step: 4})

         }
       })
  }



  render() {
     const step =  this.state.step;
     const cur_value = this.state.value;

           if(step === 1) {
              return (
                    <Stepone
                     nextStep = { this.nextStep }
                     value = {cur_value}
                     lastStep = { this.subminValues }
                     subjects = {this.state.subjects}
                    />
               );
           } else if(step == 2) {
             return (
                   <Steptwo
                      stepTwo = {this.stepTwo}
                   />
              );
           } else if(step == 3){
             return (
                   <Stepthree
                    universities ={this.state.univerities}
                    stepThree= {this.stepThree}
                    backStep = {this.backStep}
                   />
              );
           } else {
             return (
                   <UserList
                     list ={this.state.users}
                   />
              );
           }

  }

}

export default PlanSession;
