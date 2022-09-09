import React from 'react'
import './App.css'
import Wishlist from './components/Wishlist'

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App({ signOut, user }) {
  return (
    <>
      <div className='header'>
        <Button
          variation='primary'
          size='small'
          loadingText=''
          onClick={signOut}
          ariaLabel=''>
          Sign out
        </Button>
      </div>
      <div className='wishlist-app'>
        <Wishlist user={user} />
      </div>
    </>
  )
}

export default withAuthenticator(App)
