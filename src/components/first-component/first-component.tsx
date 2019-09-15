import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #3279a8;
  margin-top:20px;
`

export const firstComponent = ({ state }) =>
  <div>
    <div className="container">
      <div className="row">
        <div className="column">
          <Title>React Replay</Title>
          <hr/>
          <h2>{state.greeting}</h2>
          <p>
            Image: a1
            <br/>
            This project contains:
          </p>
          <ul>
            <li>React</li>
            <li>React-Replay</li>
            <li>Styled-Components</li>
            <li>Normalize.css</li>
            <li>Milligram.css</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
