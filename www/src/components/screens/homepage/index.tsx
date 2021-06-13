import React from 'react'
import { Button } from 'ui2-components'

export const HomepageScreen = (): JSX.Element => {
  return (
    <main>
      <section>
        <div className="container">
          <h1>Homepage</h1>
          <Button variant="primary" label="Share" />
          <Button label="Button 2" />
        </div>
      </section>
    </main>
  )
}
