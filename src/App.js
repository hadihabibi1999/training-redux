
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Container,Row,Col} from 'reactstrap';


 class Counter extends Component {
 
   increment=()=>{
    this.props.dispatch({type:'INCREMENT'})
   }

   decrement=()=>{
    this.props.dispatch({type:'DECREMENT'})
    }

       
  render() { 
    return ( 
      <div>
        <Container>
           <Row>

              <Col>
                  <Button  
                      style={{width:40}}         
                      onClick={()=>this.decrement()}>
                        -
                  </Button>
               </Col>  

              <Col>
                  <text>
                      {this.props.count}
                  </text>
              </Col>

              <Col>
                  <Button 
                      style={{width:40}}
                      onClick={()=>this.increment()}>
                        +
                  </Button>
               </Col>
             </Row>
         </Container>
       </div>
     );
  }
}

 const mapStateToProps = state => ({
    count:state.count
 });

export default connect(mapStateToProps)(Counter);


