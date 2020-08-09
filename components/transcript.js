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
          <Form.Control as="select" multiple size="lg" style={{height: 450, border:"1px solid lightgrey"}}>
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

          </Form.Control>
          </div>
        </Form.Group>
      </Form>
    )
    
}

export default transcript