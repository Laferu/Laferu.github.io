import React, { Fragment, useContext } from 'react'
import Head from 'next/head'
import { GlobalContext } from '../utils/Context'
import {
  StyledBodyScroll,
  StyledMain,
  StyledSpace
} from '../utils/styles'

import Header from '../components/Header'
import SectionProjects from '../components/SectionProjects'

const Home = () => {
  const context = useContext(GlobalContext)

  return (
    <Fragment>
      <Header />
      <StyledBodyScroll>
        <StyledMain className='container'>
          <StyledSpace />
          <SectionProjects
            title='React'
            data={context.data.projects.react}
          />
        </StyledMain>
      </StyledBodyScroll>
    </Fragment>
  )
}

export default Home
