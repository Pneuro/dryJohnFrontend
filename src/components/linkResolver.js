import { default as NextLink } from 'next/link'
import { linkResolver } from 'path-to-your-linkResolver'

// ...

render () {
  const link = this.props.doc.data.link
  return (
    <NextLink as={linkResolver(link)}>
      <a>Click here</a>
    </NextLink>
  )
}