# Minimilistic ReactJS Gutenberg Blocks

**The goal of this project** is to be able to generate an entire WordPress post created with Gutenberg, within a seperate React based frontend.

Using [LazyBlocks](https://wordpress.org/plugins/lazy-blocks/) to create custom blocks you can mix both custom and builtin blocks in your posts & pages.

The frontend can either be a ReactJS App or [Gatsby](https://gatsbyjs.org/) Headless site.


[View Demo](https://gatsby-gutenberg.netlify.com/)


## Prerequisites

In order for this to work we'll need to get the Gutenberg data as JSON from WP via REST.

The following code exposes a new field on posts and pages called `blocks`. It can be added either via a plugin or in your theme's `functions.php` file

```
<?php

add_action(
  'rest_api_init',
  function () {

    if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
      require ABSPATH . 'wp-admin/includes/post.php';
    }

    // Surface all Gutenberg blocks in the WordPress REST API
    $post_types = get_post_types_by_support( [ 'editor' ] );
    foreach ( $post_types as $post_type ) {
      if ( use_block_editor_for_post_type( $post_type ) ) {
        register_rest_field(
          $post_type,
          'blocks',
          [
            'get_callback' => function ( array $post ) {
              return parse_blocks( $post['content']['raw'] );
            },
          ]
        );
      }
    }
  }
);
```

## Usage

### Install

`npm install react-gutenberg --save`

To include your own custom components: `npm install @loadable/component @types/loadable__component --save`

### ReactJS Example
```
import WPGBlocks from 'react-gutenberg'
…

  constructor(props) {
    super(props)

    const WP_URL = https://my-wordpess-site.com/wp-json/wp/v2/posts

    fetch(WP_URL)
      .then(response => response.json())
      .then(posts => {
        this.setState( { posts })
      })
  }

  render() {
    const { posts } = this.state

    if (!posts) return (
      <div>Loading...</div>
    )

    return (
      <div class="posts">
        { posts.map(post => (
          <div className="post" data-id={post.id}>
            <h2>{post.title.rendered}</h2>
            <WPGBlocks blocks={post.blocks} />
          </div>
        )) }
      </div>
    )
  }

…

```

### Gatsby Example

```
import * as React from "react"
import { graphql } from "gatsby"
import WPGBlocks from "react-gutenberg"
import { IWPGBlock } from "react-gutenberg/src/types"

const Loading = () => (
  <div class="loading"></div>
)

interface IPost {
  wordpress_id: number
  id: number
  title: string
  blocks: IWPGBlock[]
}

const Post: React.SFC<{data: { post: IPost }}> = ({ data }) => {
  const { id, title, blocks } = data.post

  return (
    <Layout>
      <article data-id={id}>
        <h2>{title}</h2>
        <WPGBlocks blocks={blocks} />
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  fragment WPPost on wordpress__POST{
      wordpress_id
      id
      title
      excerpt
      slug
      type
      date
      categories {
        name
        slug
      }
  }

  fragment Blocks on wordpress__POSTBlocks {
    blockName
    innerHTML
    innerBlocks {
      blockName
      innerHTML
      attrs {
        blockId
        blockUniqueClass
        custom_name
      }
      innerBlocks {
        blockName
        innerHTML
        attrs {
          blockId
          blockUniqueClass
          custom_name_in_column
        }
      }
    }
  }

  query PostById($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      ...WPPost
      blocks {
        ...Blocks
      }
    }
  }
`
```

## Supported/Implemented WP Gutenberg Blocks

By default the raw `innerHTML` is used to render the block, however in some cases it is more beneficial that the block is built up in React for example having a the Gallery component to support lightbox effect.

As a fallback if a block can't be found it is rendered with the HTML Block which should cover most of the default Wordpress Blocks.

### Common Blocks

- [x] Paragraph
- [x] Image
- [x] Heading
- [x] Gallery
- [x] List
- [x] Quote
- [x] Audio
- [x] Cover
- [x] File
- [x] Video

### Formatting

- [x] Code
- [ ] Classic ! Raw html support only
- [x] Custom HTML ! Raw html support only
- [x] Preformatted
- [x] Pullquote
- [ ] Table
- [ ] Verse

### Layout Elements

- [ ] Button
- [x] Columns ! Yes supports recursive blocks
- [ ] Media & Text
- [ ] More
- [ ] Page Break
- [ ] Separator
- [ ] Spacer

### Widgets

- [ ] Shortcode ! Not to be implemented
- [ ] Archives
- [ ] Calendar
- [ ] Categories
- [ ] Latest Comments
- [ ] Latest Posts
- [ ] RSS
- [ ] Search
- [ ] Tag Cloud

### Embeds

- [ ] Embed
- [ ] Twitter
- [ ] Youtube
- [ ] Facebook
- [ ] Instagram
- [ ] Wordpress
- [ ] SoundCloud
- [ ] Spotify
- [ ] Flickr
- [ ] Vimeo

## Custom Blocks

### Adding your own Custom Blocks

The main purpose of this library is to give you a easy way to add any custom blocks for your projects.

Blocks created with [LazyBlocks](https://wordpress.org/plugins/lazy-blocks/) have a `blockName` starting with `lazyblock/`.

To do this you should **lazy import** all your custom blocks into one file say `blocks/index.tsx`(typescript) exporting a function that decides what component to load for which block name.

To support SSR, we use [`loadable`](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/). Install it: `npm install @loadable/component @types/loadable__component --save`


```
// src/blocks/index.tsx
import loadable from '@loadable/component'

const Employee = loadable(() => import('./employee'))

export default function GetCustomBlock(name: string) {
  switch (name) {
    case 'lazyblock/employee': return Employee
    default: return null
  }
}
```

Then wherever you use the `WPGBlocks` component send it the function `GetCustomBlock` on the prop `mapToBlock`. The library will then first call your function before checking if it has a component.

Usage Example: `<WPGBlocks blocks={blocks} mapToBlock={GetCustomBlock} />

### Custom Component for Default Blocks

You may also supply your own components for the default blocks.

Example of a custom component for `core/paragraph` block:

```
import { IWPGBlock } from 'react-gutenberg/'
import * as React from 'react'

const CustomParagraphBlock:React.SFC<IWPGBlock> = (props) => {
  const {
    attrs,
    innerHTML } = props

  return (
    <div className="custom-paragraph" dangerouslySetInnerHTML={{__html: innerHTML}}/>
  )
}

export default CustomParagraphBlock
```



## Why?

For most people it might be fine just taking the raw html from the REST response; `content.rendered`, but I realized that some components I need to make more interactive.

This project hopefully gives a platform to parse the `blocks` property from a REST response and where needed custom and interactive blocks can be made **Reactive**.

# Contribute

This project is dependent on PR requests and the community.

Source is coded in [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) to enforce more understandable code.

Make sure to install TypeScript before trying to build `npm install -g typescript`

### Styling

The styles of each block is kept to a minimal and should work in both dark and light mode conditions.

Classes on blocks should conform to the [BEM](https://en.bem.info/methodology/naming-convention/) naming convention.

Included is the default WP styles for Blocks based on the Twenty Ninetween theme. To use it: `import "react-gutenberg/default.css"`