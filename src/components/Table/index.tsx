import React from 'react'
import styled from 'styled-components'

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  td,
  th {
    border: none;
  }

  td {
    padding: 5px 5px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`
