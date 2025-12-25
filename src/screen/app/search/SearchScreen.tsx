import TextComponent from '@app/components/TextComponent'
import React from 'react'

function SearchScreen() {
  return (
     <TextComponent  size="24" weight="light" color="primary" textAlign="right" underline={true}
            onPress={ () => console.log('test')} >
                hola mundo
     </TextComponent>
  )
}

export default SearchScreen