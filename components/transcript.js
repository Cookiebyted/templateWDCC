import React from 'react';
import Card from 'react-bootstrap/Card'
import { Form } from 'react-bootstrap';

function transcript()
{
    return(
      <Form>
        <Form.Group controlId="transcriptForm.ControlSelect2">
          <Form.Label>Transcript</Form.Label>
          <div class="align-items-stretch">
          <Form.Control as="select" multiple style={{height: 450, border:"1.5px solid rgb(228, 061, 048)"}}>
            <option>There are a few different ways we can define functions in Javascript</option>
            <option>We looked at one particular type called Arrow Functions</option>
            <option>so, lets define one!</option>
            <option>so if we wanted to define a constant, we define it this way</option>
            <option>right, lets define a constant first!</option>
            <option>If you wanted to define a function</option>
            <option>we can do it the same way</option>
            <option>say constant squared</option>
            <option>equals two</option>
            <option>take no parameters</option>
            <option>and then return</option>
            <option>sorry, take one parameter, n obviously </option>
            <option>because we are trying to do a square</option>
            <option>of a given number</option>
            <option>and return</option>
            <option>n times n</option>
            <option>so this is a function and</option>
            <option>which takes a paramter or a number of parameters and </option>
            <option>we can't really do something </option>
            <option>it deosn't have to return anything really</option>
            <option>it is not possible</option>
            <option>So essentially the way the function T </option>
            <option>is defined as we have</option>
            <option>got a name of the function</option>
            <option>and then the number of parameters it takes </option>
            <option>and then there's a function body the parameters</option>
            <option>and the function body.</option>
            <option>They are separated by a narrow an equal sign</option>
            <option>followed by</option>
            <option>a greater than sign making up an error.</option>
            <option>So this is coded Arrow function Arrow.</option>
            <option>In fact correct terminology is error function expression.</option>
 

          </Form.Control>
          </div>
        </Form.Group>
      </Form>
    )
    
}

export default transcript