import React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled"

const Hello = styled.p`
  color: pink;
`

const IndexPage = () => (
  <Layout>
    <Hello>Hello world</Hello>
  </Layout>
)

export default IndexPage
